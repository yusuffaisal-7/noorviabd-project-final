import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import SocialLogin from "../components/SocialLogin";

import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { getAuth, signOut } from 'firebase/auth';
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosPublic from "../hooks/useAxiosPublic";

const SignUp = () => {
    const [disabled, setDisabled] = useState(true);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const axiosPublic = useAxiosPublic();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const auth = getAuth();

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleValidateCaptcha = (element) => {
        const captchaValue = element.value;
        if (validateCaptcha(captchaValue)) {
            setDisabled(false);
            Swal.fire({
                icon: 'success',
                title: 'Captcha Validated!',
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            setDisabled(true);
            Swal.fire({
                icon: 'error',
                title: 'Invalid Captcha',
                text: 'Please try again',
                confirmButtonText: 'Ok'
            });
        }
    };

    const handleImageUpload = async (photo) => {
        const formData = new FormData();
        formData.append('image', photo);

        try {
            const response = await fetch(image_hosting_api, {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            return data.data.url;
        } catch (error) {
            console.error('Image upload failed:', error);
            return null;
        }
    };

    const onSubmit = async (data) => {
        if (!termsAccepted) {
            Swal.fire({
                title: 'Terms & Conditions Required',
                text: 'Please accept the terms and conditions to continue',
                icon: 'warning',
                confirmButtonText: 'Ok'
            });
            return;
        }

        let photoURL = data.photoURL;
        if (data.photo && data.photo[0]) {
            photoURL = await handleImageUpload(data.photo[0]);
            if (!photoURL) {
                Swal.fire({
                    icon: 'error',
                    title: 'Image Upload Failed',
                    text: 'Please try again or use a photo URL instead.'
                });
                return;
            }
        }

        try {
            const result = await createUser(data.email, data.password);
            console.log("User Created:", result.user);

            await updateUserProfile(data.name, photoURL);
            console.log("User profile info updated");

            const userInfo = {
                uid: result.user.uid,
                name: data.name,
                email: data.email,
                photoURL: photoURL,
                emailVerified: false
            };

            const res = await axiosPublic.post("/users", userInfo);

            if (res.data.insertedId) {
                reset();
                await signOut(auth);
                
                await Swal.fire({
                    title: 'Account Created Successfully!',
                    html: `
                        <div class="space-y-4">
                            <div class="text-[#2E7D32]">
                                <svg class="mx-auto h-16 w-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <p class="text-[#6B7280]">Please verify your email address:</p>
                            <p class="font-semibold text-[#0A3D91]">${data.email}</p>
                            <p class="text-sm text-[#6B7280] mt-2">A verification link has been sent to your email. Please verify your email to activate your account.</p>
                            <p class="text-sm text-[#6B7280]">You cannot log in until your email is verified.</p>
                        </div>
                    `,
                    icon: 'success',
                    confirmButtonColor: '#0A3D91',
                    confirmButtonText: 'Go to Login',
                    allowOutsideClick: false
                });

                navigate("/login");
            }
        } catch (error) {
            console.error("Signup Error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Signup Failed',
                text: error.message,
                confirmButtonColor: '#0A3D91'
            });
        }
    };

    return (
        <div className="min-h-screen w-full bg-[#0A3D91] flex fixed inset-0">
            {/* Left Section with Illustration */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#FAF3E0] items-center justify-center p-12">
                <div className="max-w-lg">
                    <h2 className="text-4xl font-bold text-[#111827] mb-6">Join <span className="text-[#0A3D91]">NoorVia BD</span> Today!</h2>
                    <p className="text-xl text-[#111827]/90 mb-8">Connect with a community of professionals and entrepreneurs. Share knowledge, discover opportunities, and grow together.</p>
                    
                    {/* Login Button */}
                    <div className="text-center">
                        <p className="text-[#6B7280] mb-4">Already have an account?</p>
                        <Link 
                            to="/login" 
                            className="inline-block bg-[#D0A96A] hover:bg-[#B8945A] text-[#111827] px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Login Here
                        </Link>
                    </div>
                </div>
            </div>

            {/* Right Section with Form */}
            <div className="w-full lg:w-1/2 bg-[#FAF3E0] flex items-center justify-center p-6 overflow-y-auto">
                <div className="w-full max-w-md space-y-8">
                    {/* Header */}
                    <div className="text-center mt-8">
                        <h1 className="text-3xl font-bold text-[#0A3D91] mb-2">Welcome!</h1>
                        <p className="text-[#6B7280]">Create your account to get started</p>
                    </div>

                    {/* Sign Up Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-4">
                            {/* Name Input */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your name *"
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#0A3D91] text-[#111827] transition-colors"
                                />
                                {errors.name && (
                                    <span className="text-[#B91C1C] text-sm mt-1">{errors.name.message}</span>
                                )}
                            </div>

                            {/* Photo Upload */}
                            <div className="space-y-2">
                                <label className="block text-sm font-medium text-[#111827] mb-1">
                                    Profile Photo
                                </label>
                                <div className="space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            {...register("photo")}
                                            className="hidden"
                                            id="photo-upload"
                                        />
                                        <label
                                            htmlFor="photo-upload"
                                            className="cursor-pointer inline-flex items-center px-4 py-2 border border-[#E5E7EB] rounded-md shadow-sm text-sm font-medium text-[#111827] bg-white hover:bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0A3D91] transition-colors"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[#6B7280]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            Choose Photo
                                        </label>
                                        <span className="text-sm text-[#6B7280]">or</span>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Enter photo URL"
                                        {...register("photoURL")}
                                        className="w-full px-4 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#0A3D91] text-[#111827] text-sm transition-colors"
                                    />
                                    <p className="text-xs text-[#6B7280]">
                                        Upload a photo or provide an image URL
                                    </p>
                                </div>
                            </div>

                            {/* Email Input */}
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your email address *"
                                    {...register("email", { required: "Email is required" })}
                                    className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#0A3D91] text-[#111827] transition-colors"
                                />
                                {errors.email && (
                                    <span className="text-[#B91C1C] text-sm mt-1">{errors.email.message}</span>
                                )}
                            </div>

                            {/* Password Input */}
                            <div>
                                <div className="relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Create password *"
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters"
                                            },
                                            pattern: {
                                                value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                                message: "Password must include uppercase, lowercase, number and special character"
                                            }
                                        })}
                                        className="w-full px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#0A3D91] text-[#111827] transition-colors"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#6B7280] hover:text-[#111827] transition-colors"
                                    >
                                        {showPassword ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                                                <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                {errors.password && (
                                    <span className="text-[#B91C1C] text-sm mt-1">{errors.password.message}</span>
                                )}
                            </div>
                            
                            {/* Captcha Section */}
                            <div className="space-y-3 p-4 bg-[#F9FAFB] rounded-lg border border-[#E5E7EB]">
                                <LoadCanvasTemplate />
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        name="captcha"
                                        id="signupCaptcha"
                                        placeholder="Enter captcha *"
                                        className="flex-1 px-4 py-3 border border-[#E5E7EB] rounded-lg focus:outline-none focus:border-[#0A3D91] text-[#111827] transition-colors"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleValidateCaptcha(document.getElementById('signupCaptcha'))}
                                        className="px-6 py-3 bg-[#D0A96A] hover:bg-[#B8945A] text-[#111827] font-medium rounded-lg transition-all"
                                    >
                                        Verify
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                className="w-4 h-4 border-[#E5E7EB] rounded text-[#0A3D91] focus:ring-[#0A3D91]"
                            />
                            <label htmlFor="terms" className="ml-2 text-sm text-[#6B7280]">
                                I have read and agree to all{' '}
                                <Link to="/terms" className="text-[#0A3D91] hover:text-[#08306B] transition-colors" target="_blank">
                                    Terms & conditions
                                </Link>
                            </label>
                        </div>

                        {/* Sign Up Button */}
                        <button
                            type="submit"
                            disabled={disabled || !termsAccepted}
                            className="w-full py-3 px-6 bg-[#0A3D91] hover:bg-[#08306B] text-white font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                        >
                            <span>Sign up</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {/* Google Sign In */}
                        <SocialLogin />

                        {/* Sign In Link */}
                        <div className="flex items-center justify-between mt-6 text-sm">
                            <Link to="/login" className="text-[#0A3D91] hover:text-[#08306B] font-medium transition-colors">
                                Sign in
                            </Link>
                            <Link to="/forgot-password" className="text-[#0A3D91] hover:text-[#08306B] transition-colors">
                                Lost password?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;