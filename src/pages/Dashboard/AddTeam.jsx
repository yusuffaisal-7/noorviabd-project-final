import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { FaUserTie, FaTextHeight, FaListUl, FaHashtag, FaToggleOn, FaLink, FaImage } from 'react-icons/fa';
// import useAxiosPublic from '../../hooks/UseAxiosPublic';

import useAxiosSecure from '../../hooks/useAxiosSecure';


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function AddTeam() {
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm({
    defaultValues: {
      active: true,
      order: 999
    }
  });

  const [preview, setPreview] = useState(null);

  const selectedFile = watch('photo');
  // live preview
  React.useEffect(() => {
    if (selectedFile && selectedFile[0]) {
      const url = URL.createObjectURL(selectedFile[0]);
      setPreview(url);
      return () => URL.revokeObjectURL(url);
    }
    setPreview(null);
  }, [selectedFile]);

  const onSubmit = async (data) => {
    try {
      Swal.fire({
        title: 'Saving member…',
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
      });

      // 1) Upload image (optional)
      let image = '';
      if (data.photo && data.photo[0]) {
        const fd = new FormData();
        fd.append('image', data.photo[0]);
        const res = await fetch(image_hosting_api, { method: 'POST', body: fd });
        const json = await res.json();
        if (!json?.success) throw new Error('Image upload failed');
        image = json.data.display_url;
      } else if (data.imageUrl) {
        image = data.imageUrl.trim();
      }

      // 2) Prepare payload
      const payload = {
        name: data.name.trim(),
        position: data.position.trim(),
        bio: data.bio?.trim() || '',
        expertise: (data.expertise || '')
          .split(',')
          .map(s => s.trim())
          .filter(Boolean),
        image,
        order: Number(data.order) || 999,
        active: Boolean(data.active),
        socials: {
          linkedin: data.linkedin?.trim() || '',
          twitter: data.twitter?.trim() || '',
          website: data.website?.trim() || ''
        }
      };

      // 3) POST to /team (admin-protected)
      const resp = await axiosSecure.post('/team', payload);
      if (resp?.data?.insertedId || resp?.data?.acknowledged) {
        Swal.fire({
          icon: 'success',
          title: 'Team member added',
          timer: 1400,
          showConfirmButton: false,
        });
        reset({ active: true, order: 999 });
        setPreview(null);
        return;
      }
      throw new Error('Unexpected response from server');
    } catch (err) {
      Swal.fire({
        icon: 'error',
        title: 'Failed to add member',
        text: err?.response?.data?.message || err?.message || 'Please try again',
      });
    }
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white rounded-lg shadow-md mx-4 my-4"
      >
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-[var(--color-text-dark)]">Add Leadership Team Member</h2>
          <p className="text-gray-600 mt-2">
            Provide details to feature a new leader on the Company Profile page.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left column: core fields */}
            <div className="lg:col-span-2 space-y-6">
              {/* Identity */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <FaUserTie className="text-[var(--color-text-dark)]" />
                  <h3 className="text-xl font-semibold text-gray-800">Identity</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-text-dark)]"
                      placeholder="e.g., Mohammad Rahman"
                    />
                    {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Position / Title *</label>
                    <input
                      {...register('position', { required: 'Position is required' })}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-text-dark)]"
                      placeholder="e.g., Managing Director & CEO"
                    />
                    {errors.position && <span className="text-red-500 text-sm">{errors.position.message}</span>}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Short Bio *</label>
                  <textarea
                    {...register('bio', { required: 'Bio is required' })}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-text-dark)]"
                    rows="4"
                    placeholder="A concise professional biography (2–4 sentences)"
                  />
                  {errors.bio && <span className="text-red-500 text-sm">{errors.bio.message}</span>}
                </div>
              </div>

              {/* Expertise */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <FaListUl className="text-[var(--color-text-dark)]" />
                  <h3 className="text-xl font-semibold text-gray-800">Expertise</h3>
                </div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Skills / Expertise (comma-separated) *
                </label>
                <input
                  {...register('expertise', { required: 'At least one expertise is required' })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-text-dark)]"
                  placeholder="e.g., International Trade, Strategic Planning, Business Development"
                />
                {errors.expertise && <span className="text-red-500 text-sm">{errors.expertise.message}</span>}
                <p className="text-xs text-gray-500 mt-2">Use commas to separate multiple items.</p>
              </div>

              {/* Socials (optional) */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <FaLink className="text-[var(--color-text-dark)]" />
                  <h3 className="text-xl font-semibold text-gray-800">Social / Web (optional)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn</label>
                    <input
                      {...register('linkedin')}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-text-dark)]"
                      placeholder="https://linkedin.com/in/username"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Twitter / X</label>
                    <input
                      {...register('twitter')}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-text-dark)]"
                      placeholder="https://x.com/username"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Website</label>
                    <input
                      {...register('website')}
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-text-dark)]"
                      placeholder="https://example.com"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: media & meta */}
            <div className="space-y-6">
              {/* Image */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <FaImage className="text-[var(--color-text-dark)]" />
                  <h3 className="text-xl font-semibold text-gray-800">Profile Image</h3>
                </div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                <input
                  {...register('photo')}
                  type="file"
                  accept="image/*"
                  className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[var(--color-text-dark)] file:text-white hover:file:bg-opacity-90"
                />

                <div className="my-3 text-center text-gray-500 text-sm">— or —</div>

                <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
                <input
                  {...register('imageUrl')}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-text-dark)]"
                  placeholder="Paste image URL (optional if uploading)"
                />

                {preview && (
                  <div className="mt-4">
                    <img
                      src={preview}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg border"
                    />
                  </div>
                )}
              </div>

              {/* Meta */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <FaTextHeight className="text-[var(--color-text-dark)]" />
                  <h3 className="text-xl font-semibold text-gray-800">Display Settings</h3>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
                      <FaHashtag /> Order (lower shows first)
                    </label>
                    <input
                      {...register('order')}
                      type="number"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-text-dark)]"
                      placeholder="e.g., 1"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <FaToggleOn /> Active
                    </label>
                    <input
                      type="checkbox"
                      className="toggle toggle-primary"
                      {...register('active')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-[var(--color-text-dark)] text-white rounded-lg hover:bg-opacity-90 transition-colors flex items-center gap-2 shadow-md"
            >
              <FaUserTie className="text-sm" />
              Add Team Member
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

