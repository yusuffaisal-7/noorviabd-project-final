import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import { 
  UserPlus, FileText, List, Hash, ToggleLeft, Link, Image, 
  User, Briefcase, FileText as Bio, Globe, Twitter, Linkedin, 
  Upload, Eye, Settings, Save
} from 'lucide-react';
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
        background: "#FBF8F3",
        customClass: {
          title: "text-[#0A3D91] text-xl",
        }
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
          background: "#FBF8F3",
          customClass: {
            title: "text-[#0A3D91] text-xl",
          }
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
        background: "#FBF8F3",
        customClass: {
          title: "text-[#0A3D91] text-xl",
          content: "text-[#6B7280]",
        }
      });
    }
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-[#FBF8F3] rounded-3xl shadow-2xl border border-[#E5E0D5] overflow-hidden"
      >
        <div className="bg-gradient-to-r from-[#0A3D91] to-[#08306B] p-8 relative">
          <div className="absolute top-4 right-4">
            <UserPlus className="h-8 w-8 text-[#D0A96A]" />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#D0A96A] rounded-2xl flex items-center justify-center">
              <UserPlus className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Add Team Member</h2>
              <p className="text-[#FDF6E9] text-lg">
                Provide details to feature a new team member on the Company Profile page.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column: core fields */}
            <div className="lg:col-span-2 space-y-8">
              {/* Identity */}
              <div className="bg-[#FDF6E9] p-8 rounded-2xl border border-[#E5E0D5] shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#0A3D91] rounded-xl flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3D91]">Identity</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D0A96A]" />
                      <input
                        {...register('name', { required: 'Name is required' })}
                        className="w-full pl-10 pr-4 py-3 border border-[#E5E0D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                        placeholder="e.g., Mohammad Rahman"
                      />
                    </div>
                    {errors.name && <span className="text-[#B91C1C] text-sm mt-1 block">{errors.name.message}</span>}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Position / Title *</label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D0A96A]" />
                      <input
                        {...register('position', { required: 'Position is required' })}
                        className="w-full pl-10 pr-4 py-3 border border-[#E5E0D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                        placeholder="e.g., Managing Director & CEO"
                      />
                    </div>
                    {errors.position && <span className="text-[#B91C1C] text-sm mt-1 block">{errors.position.message}</span>}
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Short Bio *</label>
                  <div className="relative">
                    <Bio className="absolute left-3 top-4 h-5 w-5 text-[#D0A96A]" />
                    <textarea
                      {...register('bio', { required: 'Bio is required' })}
                      className="w-full pl-10 pr-4 py-3 border border-[#E5E0D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white resize-vertical"
                      rows="4"
                      placeholder="A concise professional biography (2–4 sentences)"
                    />
                  </div>
                  {errors.bio && <span className="text-[#B91C1C] text-sm mt-1 block">{errors.bio.message}</span>}
                </div>
              </div>

              {/* Expertise */}
              <div className="bg-[#FDF6E9] p-8 rounded-2xl border border-[#E5E0D5] shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#D0A96A] rounded-xl flex items-center justify-center">
                    <List className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3D91]">Expertise</h3>
                </div>
                <label className="block text-sm font-semibold text-[#0A3D91] mb-2">
                  Skills / Expertise (comma-separated) *
                </label>
                <div className="relative">
                  <List className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D0A96A]" />
                  <input
                    {...register('expertise', { required: 'At least one expertise is required' })}
                    className="w-full pl-10 pr-4 py-3 border border-[#E5E0D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                    placeholder="e.g., International Trade, Strategic Planning, Business Development"
                  />
                </div>
                {errors.expertise && <span className="text-[#B91C1C] text-sm mt-1 block">{errors.expertise.message}</span>}
                <p className="text-sm text-[#6B7280] mt-3">Use commas to separate multiple items.</p>
              </div>

              {/* Socials (optional) */}
              <div className="bg-[#FDF6E9] p-8 rounded-2xl border border-[#E5E0D5] shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#0A3D91] rounded-xl flex items-center justify-center">
                    <Link className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3D91]">Social / Web (optional)</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D91] mb-2">LinkedIn</label>
                    <div className="relative">
                      <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D0A96A]" />
                      <input
                        {...register('linkedin')}
                        className="w-full pl-10 pr-4 py-3 border border-[#E5E0D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Twitter / X</label>
                    <div className="relative">
                      <Twitter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D0A96A]" />
                      <input
                        {...register('twitter')}
                        className="w-full pl-10 pr-4 py-3 border border-[#E5E0D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                        placeholder="https://x.com/username"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Website</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D0A96A]" />
                      <input
                        {...register('website')}
                        className="w-full pl-10 pr-4 py-3 border border-[#E5E0D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                        placeholder="https://example.com"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column: media & meta */}
            <div className="space-y-8">
              {/* Image */}
              <div className="bg-[#FDF6E9] p-8 rounded-2xl border border-[#E5E0D5] shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#D0A96A] rounded-xl flex items-center justify-center">
                    <Image className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3D91]">Profile Image</h3>
                </div>
                <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Upload Image</label>
                <div className="relative">
                  <Upload className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D0A96A]" />
                  <input
                    {...register('photo')}
                    type="file"
                    accept="image/*"
                    className="w-full pl-10 pr-4 py-3 text-sm text-[#6B7280] file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-[#0A3D91] file:text-white hover:file:bg-[#08306B] transition-colors"
                  />
                </div>

                <div className="my-6 text-center text-[#6B7280] text-sm font-medium">— or —</div>

                <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Image URL</label>
                <div className="relative">
                  <Link className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D0A96A]" />
                  <input
                    {...register('imageUrl')}
                    className="w-full pl-10 pr-4 py-3 border border-[#E5E0D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                    placeholder="Paste image URL (optional if uploading)"
                  />
                </div>

                {preview && (
                  <div className="mt-6">
                    <div className="relative">
                      <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-48 object-cover rounded-xl border border-[#E5E0D5] shadow-sm"
                      />
                      <div className="absolute top-2 right-2 bg-[#0A3D91] text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        Preview
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Meta */}
              <div className="bg-[#FDF6E9] p-8 rounded-2xl border border-[#E5E0D5] shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#0A3D91] rounded-xl flex items-center justify-center">
                    <Settings className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A3D91]">Display Settings</h3>
                </div>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D91] mb-2 flex items-center gap-2">
                      <Hash className="h-4 w-4" /> Order (lower shows first)
                    </label>
                    <div className="relative">
                      <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D0A96A]" />
                      <input
                        {...register('order')}
                        type="number"
                        className="w-full pl-10 pr-4 py-3 border border-[#E5E0D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                        placeholder="e.g., 1"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#E5E0D5]">
                    <label className="text-sm font-semibold text-[#0A3D91] flex items-center gap-2">
                      <ToggleLeft className="h-4 w-4" /> Active
                    </label>
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-[#0A3D91] bg-gray-100 border-gray-300 rounded focus:ring-[#0A3D91] focus:ring-2"
                      {...register('active')}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="mt-12 flex justify-end">
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-[#0A3D91] to-[#08306B] text-white rounded-xl hover:from-[#08306B] hover:to-[#0A3D91] transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl font-semibold"
            >
              <Save className="h-5 w-5" />
              Add Team Member
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

