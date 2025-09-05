// import React, { useEffect, useMemo, useState } from 'react';

// import Swal from 'sweetalert2';
// import { motion } from 'framer-motion';
// import {
//   Pencil, Trash2, ToggleLeft, ToggleRight, RefreshCcw, Search,
//   PlusCircle, Image as ImageIcon, Loader2
// } from 'lucide-react';
// import useAxiosSecure from '../../hooks/useAxiosSecure';

// /** Small helper to turn "A, B, C" into ["A","B","C"] */
// const toArray = (s) => (s || '')
//   .split(',')
//   .map(x => x.trim())
//   .filter(Boolean);

// export default function ShowTeamMembers() {
//   const axiosSecure = useAxiosSecure();
//   const [loading, setLoading] = useState(true);
//   const [rows, setRows] = useState([]);
//   const [error, setError] = useState(null);
//   const [q, setQ] = useState('');
//   const [editing, setEditing] = useState(null); // holds member being edited

//   const fetchRows = async () => {
//     try {
//       setLoading(true);
//       const { data } = await axiosSecure.get('/team');
//       setRows(Array.isArray(data) ? data : []);
//       setError(null);
//     } catch (e) {
//       setError(e?.response?.data?.message || 'Failed to load team members');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => { fetchRows(); }, []); // initial

//   const filtered = useMemo(() => {
//     const term = q.trim().toLowerCase();
//     if (!term) return rows;
//     return rows.filter(r =>
//       r.name?.toLowerCase().includes(term) ||
//       r.position?.toLowerCase().includes(term) ||
//       r.bio?.toLowerCase().includes(term) ||
//       (Array.isArray(r.expertise) && r.expertise.join(', ').toLowerCase().includes(term))
//     );
//   }, [rows, q]);

//   const confirmDelete = async (member) => {
//     const res = await Swal.fire({
//       title: `Delete ${member.name}?`,
//       text: 'This action cannot be undone.',
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Delete',
//       cancelButtonText: 'Cancel'
//     });
//     if (!res.isConfirmed) return;

//     try {
//       await axiosSecure.delete(`/team/${member._id}`);
//       setRows(prev => prev.filter(r => r._id !== member._id));
//       Swal.fire({ icon: 'success', title: 'Deleted', timer: 1200, showConfirmButton: false });
//     } catch (e) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Delete failed',
//         text: e?.response?.data?.message || e?.message || 'Try again'
//       });
//     }
//   };

//   const toggleActive = async (member) => {
//     try {
//       const newActive = !member.active;
//       await axiosSecure.patch(`/team/${member._id}`, { active: newActive });
//       setRows(prev => prev.map(r => r._id === member._id ? { ...r, active: newActive } : r));
//       Swal.fire({
//         icon: 'success',
//         title: newActive ? 'Activated' : 'Deactivated',
//         timer: 900,
//         showConfirmButton: false
//       });
//     } catch (e) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Update failed',
//         text: e?.response?.data?.message || e?.message || 'Try again'
//       });
//     }
//   };

//   const onSave = async (payload) => {
//     // payload contains _id when editing existing member
//     try {
//       if (payload._id) {
//         const {_id, ...body} = payload;
//         await axiosSecure.patch(`/team/${_id}`, body);
//         setRows(prev => prev.map(r => r._id === _id ? { ...r, ...body } : r));
//         Swal.fire({ icon: 'success', title: 'Member updated', timer: 1200, showConfirmButton: false });
//       } else {
//         // optional: allow create from this screen
//         const { data } = await axiosSecure.post('/team', payload);
//         setRows(prev => [{ ...payload, _id: data?.insertedId || Math.random().toString(36).slice(2) }, ...prev]);
//         Swal.fire({ icon: 'success', title: 'Member added', timer: 1200, showConfirmButton: false });
//       }
//       setEditing(null);
//     } catch (e) {
//       Swal.fire({
//         icon: 'error',
//         title: 'Save failed',
//         text: e?.response?.data?.message || e?.message || 'Try again'
//       });
//     }
//   };

//   return (
//     <div className="w-full">
//       <motion.div
//         initial={{ opacity: 0, y: 14 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.35 }}
//         className="bg-white rounded-lg shadow-md mx-4 my-4"
//       >
//         <div className="p-6 border-b border-gray-200 flex items-center justify-between gap-4 flex-wrap">
//           <div>
//             <h2 className="text-2xl font-bold text-[var(--color-text-dark)]">Team Members</h2>
//             <p className="text-gray-600">Manage leadership profiles (edit, activate/deactivate, delete).</p>
//           </div>

//           <div className="flex items-center gap-2">
//             <div className="relative">
//               <input
//                 value={q}
//                 onChange={e => setQ(e.target.value)}
//                 placeholder="Search name/position/skills"
//                 className="pl-9 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--color-text-dark)]"
//               />
//               <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-2.5" />
//             </div>
//             <button
//               onClick={fetchRows}
//               className="px-3 py-2 rounded-lg border bg-white hover:bg-gray-50 flex items-center gap-2"
//               title="Refresh"
//             >
//               <RefreshCcw className="w-4 h-4" /> Refresh
//             </button>
//             <button
//               onClick={() => setEditing({ // open empty form to add new
//                 name: '', position: '', bio: '', expertise: [], image: '', order: 999, active: true, socials: {}
//               })}
//               className="px-3 py-2 rounded-lg bg-[var(--color-text-dark)] text-white hover:bg-opacity-90 flex items-center gap-2"
//             >
//               <PlusCircle className="w-4 h-4" /> Add Member
//             </button>
//           </div>
//         </div>

//         {/* Content */}
//         <div className="p-6">
//           {loading ? (
//             <div className="flex items-center justify-center py-12 text-gray-500">
//               <Loader2 className="h-6 w-6 animate-spin mr-2" />
//               Loading team…
//             </div>
//           ) : error ? (
//             <div className="text-center text-red-600 py-8">{error}</div>
//           ) : (
//             <div className="overflow-x-auto">
//               <table className="min-w-full text-left text-sm">
//                 <thead>
//                   <tr className="border-b bg-gray-50">
//                     <th className="px-3 py-2">#</th>
//                     <th className="px-3 py-2">Photo</th>
//                     <th className="px-3 py-2">Name</th>
//                     <th className="px-3 py-2">Position</th>
//                     <th className="px-3 py-2">Skills</th>
//                     <th className="px-3 py-2">Order</th>
//                     <th className="px-3 py-2">Active</th>
//                     <th className="px-3 py-2 text-right">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filtered.map((m, idx) => (
//                     <tr key={m._id || idx} className="border-b last:border-0">
//                       <td className="px-3 py-2 align-middle">{idx + 1}</td>
//                       <td className="px-3 py-2 align-middle">
//                         <div className="w-12 h-12 rounded overflow-hidden bg-gray-100 flex items-center justify-center">
//                           {m.image ? (
//                             <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
//                           ) : (
//                             <ImageIcon className="w-5 h-5 text-gray-400" />
//                           )}
//                         </div>
//                       </td>
//                       <td className="px-3 py-2 align-middle">
//                         <div className="font-medium text-gray-900">{m.name}</div>
//                         <div className="text-xs text-gray-500 truncate max-w-[260px]">{m.bio}</div>
//                       </td>
//                       <td className="px-3 py-2 align-middle">{m.position}</td>
//                       <td className="px-3 py-2 align-middle">
//                         <div className="flex flex-wrap gap-1">
//                           {(m.expertise || []).map((s, i) => (
//                             <span key={i} className="px-2 py-0.5 rounded-full text-xs bg-blue-100 text-blue-700">{s}</span>
//                           ))}
//                         </div>
//                       </td>
//                       <td className="px-3 py-2 align-middle">{m.order ?? 999}</td>
//                       <td className="px-3 py-2 align-middle">
//                         <button
//                           onClick={() => toggleActive(m)}
//                           className="inline-flex items-center gap-1 px-2 py-1 rounded border hover:bg-gray-50"
//                           title={m.active ? 'Click to deactivate' : 'Click to activate'}
//                         >
//                           {m.active ? <ToggleRight className="w-4 h-4 text-green-600" /> : <ToggleLeft className="w-4 h-4 text-gray-400" />}
//                           <span className={`text-xs ${m.active ? 'text-green-700' : 'text-gray-500'}`}>
//                             {m.active ? 'Active' : 'Inactive'}
//                           </span>
//                         </button>
//                       </td>
//                       <td className="px-3 py-2 align-middle">
//                         <div className="flex items-center justify-end gap-2">
//                           <button
//                             onClick={() => setEditing(m)}
//                             className="px-3 py-1.5 rounded border hover:bg-gray-50 inline-flex items-center gap-1"
//                           >
//                             <Pencil className="w-4 h-4" /> Edit
//                           </button>
//                           <button
//                             onClick={() => confirmDelete(m)}
//                             className="px-3 py-1.5 rounded border hover:bg-red-50 text-red-600 border-red-200 inline-flex items-center gap-1"
//                           >
//                             <Trash2 className="w-4 h-4" /> Delete
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}

//                   {filtered.length === 0 && (
//                     <tr>
//                       <td colSpan={8} className="px-3 py-8 text-center text-gray-500">
//                         No team members found.
//                       </td>
//                     </tr>
//                   )}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </motion.div>

//       {/* Edit/Add Modal */}
//       {editing && (
//         <EditMemberModal
//           initial={editing}
//           onClose={() => setEditing(null)}
//           onSave={onSave}
//         />
//       )}
//     </div>
//   );
// }

// /* ---------------------------- Edit Modal ---------------------------- */
// function EditMemberModal({ initial, onClose, onSave }) {
//   const [form, setForm] = useState(() => ({
//     _id: initial._id,
//     name: initial.name || '',
//     position: initial.position || '',
//     bio: initial.bio || '',
//     expertiseText: Array.isArray(initial.expertise) ? initial.expertise.join(', ') : '',
//     image: initial.image || '',
//     order: initial.order ?? 999,
//     active: initial.active ?? true,
//     linkedin: initial.socials?.linkedin || '',
//     twitter: initial.socials?.twitter || '',
//     website: initial.socials?.website || '',
//   }));
//   const [saving, setSaving] = useState(false);

//   const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.type === 'checkbox' ? e.target.checked : e.target.value }));

//   const submit = async (e) => {
//     e.preventDefault();
//     setSaving(true);
//     const payload = {
//       ...(form._id ? { _id: form._id } : null),
//       name: form.name.trim(),
//       position: form.position.trim(),
//       bio: form.bio.trim(),
//       expertise: toArray(form.expertiseText),
//       image: form.image.trim(),
//       order: Number(form.order) || 999,
//       active: Boolean(form.active),
//       socials: {
//         linkedin: form.linkedin.trim(),
//         twitter: form.twitter.trim(),
//         website: form.website.trim()
//       }
//     };
//     await onSave(payload);
//     setSaving(false);
//   };

//   return (
//     <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
//       <motion.form
//         onSubmit={submit}
//         initial={{ opacity: 0, y: 16, scale: .98 }}
//         animate={{ opacity: 1, y: 0, scale: 1 }}
//         transition={{ duration: .2 }}
//         className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden"
//       >
//         <div className="px-6 py-4 border-b">
//           <h3 className="text-lg font-semibold">{form._id ? 'Edit Member' : 'Add Member'}</h3>
//           <p className="text-xs text-gray-500">Fields marked * are required</p>
//         </div>

//         <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium mb-1">Full Name *</label>
//             <input className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                    value={form.name} onChange={update('name')} required />
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium mb-1">Position / Title *</label>
//             <input className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                    value={form.position} onChange={update('position')} required />
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium mb-1">Bio *</label>
//             <textarea rows={4}
//                       className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                       value={form.bio} onChange={update('bio')} required />
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium mb-1">Expertise (comma‑separated) *</label>
//             <input className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                    value={form.expertiseText} onChange={update('expertiseText')} required />
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Image URL</label>
//             <input className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                    value={form.image} onChange={update('image')} />
//             {form.image && (
//               <div className="mt-2 w-full h-32 rounded overflow-hidden border bg-gray-50">
//                 <img src={form.image} alt="preview" className="w-full h-full object-cover" />
//               </div>
//             )}
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">Order</label>
//             <input type="number"
//                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                    value={form.order} onChange={update('order')} />
//           </div>

//           <div className="flex items-center gap-2">
//             <input id="active"
//                    type="checkbox"
//                    className="h-4 w-4"
//                    checked={form.active}
//                    onChange={update('active')} />
//             <label htmlFor="active" className="text-sm font-medium">Active</label>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-1">LinkedIn</label>
//             <input className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                    value={form.linkedin} onChange={update('linkedin')} />
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">Twitter / X</label>
//             <input className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                    value={form.twitter} onChange={update('twitter')} />
//           </div>
//           <div className="md:col-span-2">
//             <label className="block text-sm font-medium mb-1">Website</label>
//             <input className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
//                    value={form.website} onChange={update('website')} />
//           </div>
//         </div>

//         <div className="px-6 py-4 border-t flex justify-end gap-2">
//           <button type="button" onClick={onClose}
//                   className="px-4 py-2 rounded-lg border hover:bg-gray-50">Cancel</button>
//           <button type="submit" disabled={saving}
//                   className="px-4 py-2 rounded-lg bg-[var(--color-text-dark)] text-white hover:bg-opacity-90 flex items-center gap-2">
//             {saving && <Loader2 className="w-4 h-4 animate-spin" />} Save
//           </button>
//         </div>
//       </motion.form>
//     </div>
//   );
// }



import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import {
  Pencil, Trash2, ToggleLeft, ToggleRight, RefreshCcw, Search,
  PlusCircle, Image as ImageIcon, Loader2, Eye, Users, User, 
  Briefcase, List, Globe, Linkedin, Twitter, Mail, Phone, 
  Crown, Shield, CheckCircle, X, Save, Edit3
} from 'lucide-react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

// Helper to convert "A, B, C" -> ["A","B","C"]
const toArray = (s) => (s || '').split(',').map(x => x.trim()).filter(Boolean);

export default function ShowTeamMembers() {
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [error, setError] = useState(null);
  const [q, setQ] = useState('');
  const [editing, setEditing] = useState(null); // object or null
  const [viewing, setViewing] = useState(null); // member being viewed

  const fetchRows = async () => {
    try {
      setLoading(true);
      const { data } = await axiosSecure.get('/team'); // change to /team/all if needed
      setRows(Array.isArray(data) ? data : []);
      setError(null);
    } catch (e) {
      setError(e?.response?.data?.message || 'Failed to load team members');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchRows(); }, []); // initial load

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return rows;
    return rows.filter(r =>
      r.name?.toLowerCase().includes(term) ||
      r.position?.toLowerCase().includes(term) ||
      r.bio?.toLowerCase().includes(term) ||
      (Array.isArray(r.expertise) && r.expertise.join(', ').toLowerCase().includes(term))
    );
  }, [rows, q]);

  const confirmDelete = async (member) => {
    const res = await Swal.fire({
      title: `Delete ${member.name}?`,
      text: 'This action cannot be undone.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
      background: "#FBF8F3",
      customClass: {
        title: "text-[#0A3D91] text-xl",
        content: "text-[#6B7280]",
      }
    });
    if (!res.isConfirmed) return;

    try {
      await axiosSecure.delete(`/team/${member._id}`);
      setRows(prev => prev.filter(r => r._id !== member._id));
      Swal.fire({ 
        icon: 'success', 
        title: 'Deleted', 
        timer: 1200, 
        showConfirmButton: false,
        background: "#FBF8F3",
        customClass: {
          title: "text-[#0A3D91] text-xl",
        }
      });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Delete failed',
        text: e?.response?.data?.message || e?.message || 'Try again',
        background: "#FBF8F3",
        customClass: {
          title: "text-[#0A3D91] text-xl",
          content: "text-[#6B7280]",
        }
      });
    }
  };

  const toggleActive = async (member) => {
    try {
      const newActive = !member.active;
      await axiosSecure.patch(`/team/${member._id}`, { active: newActive });
      setRows(prev => prev.map(r => r._id === member._id ? { ...r, active: newActive } : r));
      Swal.fire({
        icon: 'success',
        title: newActive ? 'Activated' : 'Deactivated',
        timer: 900,
        showConfirmButton: false,
        background: "#FBF8F3",
        customClass: {
          title: "text-[#0A3D91] text-xl",
        }
      });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Update failed',
        text: e?.response?.data?.message || e?.message || 'Try again',
        background: "#FBF8F3",
        customClass: {
          title: "text-[#0A3D91] text-xl",
          content: "text-[#6B7280]",
        }
      });
    }
  };

  const onSave = async (payload) => {
    try {
      if (payload._id) {
        const { _id, ...body } = payload;
        await axiosSecure.patch(`/team/${_id}`, body);
        setRows(prev => prev.map(r => r._id === _id ? { ...r, ...body } : r));
        Swal.fire({ 
          icon: 'success', 
          title: 'Member updated', 
          timer: 1200, 
          showConfirmButton: false,
          background: "#FBF8F3",
          customClass: {
            title: "text-[#0A3D91] text-xl",
          }
        });
      } else {
        const { data } = await axiosSecure.post('/team', payload);
        setRows(prev => [{ ...payload, _id: data?.insertedId || Math.random().toString(36).slice(2) }, ...prev]);
        Swal.fire({ 
          icon: 'success', 
          title: 'Member added', 
          timer: 1200, 
          showConfirmButton: false,
          background: "#FBF8F3",
          customClass: {
            title: "text-[#0A3D91] text-xl",
          }
        });
      }
      setEditing(null);
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Save failed',
        text: e?.response?.data?.message || e?.message || 'Try again',
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
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="bg-[#FBF8F3] rounded-3xl shadow-2xl border border-[#E5E0D5] overflow-hidden"
      >
        <div className="bg-gradient-to-r from-[#0A3D91] to-[#08306B] p-8 relative">
          <div className="absolute top-4 right-4">
            <Users className="h-8 w-8 text-[#D0A96A]" />
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[#D0A96A] rounded-2xl flex items-center justify-center">
              <Users className="h-8 w-8 text-white" />
            </div>
          <div>
              <h2 className="text-3xl font-bold text-white mb-2">Team Members</h2>
              <p className="text-[#FDF6E9] text-lg">Manage leadership profiles and team information</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex-1 relative">
              <input
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder="Search name, position, or skills..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-[#E5E0D5] focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white text-[#0A3D91]"
              />
              <Search className="w-5 h-5 text-[#D0A96A] absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
            <div className="flex items-center gap-3">
            <button
              onClick={fetchRows}
                className="px-4 py-3 rounded-xl border border-[#E5E0D5] bg-white hover:bg-[#0A3D91]/5 text-[#0A3D91] flex items-center gap-2 font-semibold transition-colors"
              title="Refresh"
            >
              <RefreshCcw className="w-4 h-4" /> Refresh
            </button>
            <button
              onClick={() => setEditing({
                name: '', position: '', bio: '', expertise: [], image: '', order: 999, active: true, socials: {}
              })}
                className="px-6 py-3 bg-gradient-to-r from-[#D0A96A] to-[#B8945A] text-white rounded-xl hover:from-[#B8945A] hover:to-[#D0A96A] flex items-center gap-2 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
                <PlusCircle className="w-5 h-5" /> Add Member
            </button>
            </div>
          </div>
        </div>

        <div className="p-8">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="text-center">
                <Loader2 className="h-8 w-8 animate-spin text-[#0A3D91] mx-auto mb-4" />
                <p className="text-[#6B7280] text-lg">Loading team members...</p>
              </div>
            </div>
          ) : error ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-[#B91C1C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="h-8 w-8 text-[#B91C1C]" />
              </div>
              <p className="text-[#B91C1C] text-lg font-semibold">{error}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filtered.map((m, idx) => (
                <motion.div
                  key={m._id || idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-[#FDF6E9] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5E0D5] hover:border-[#D0A96A]/30 overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="relative p-6 pb-4">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#0A3D91]/10 flex items-center justify-center">
                          {m.image ? (
                            <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                          ) : (
                            <User className="w-8 h-8 text-[#0A3D91]" />
                          )}
                        </div>
                        {m.active && (
                          <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#D0A96A] rounded-full flex items-center justify-center">
                            <CheckCircle className="h-3 w-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-[#0A3D91] truncate">{m.name}</h3>
                        <p className="text-[#D0A96A] font-semibold text-sm">{m.position}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className={`px-2 py-1 rounded-lg text-xs font-semibold ${
                            m.active 
                              ? 'bg-[#D0A96A] text-white' 
                              : 'bg-[#6B7280]/20 text-[#6B7280]'
                          }`}>
                            {m.active ? 'Active' : 'Inactive'}
                          </span>
                          <span className="px-2 py-1 rounded-lg text-xs font-medium bg-[#0A3D91]/10 text-[#0A3D91]">
                            Order: {m.order ?? 999}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="px-6 pb-4">
                    <p className="text-[#6B7280] text-sm leading-relaxed line-clamp-3 mb-4">
                      {m.bio}
                    </p>
                    
                    {/* Skills */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[#0A3D91] mb-2 flex items-center gap-1">
                        <List className="h-4 w-4" />
                        Expertise
                      </h4>
                        <div className="flex flex-wrap gap-1">
                        {(m.expertise || []).slice(0, 3).map((s, i) => (
                          <span key={i} className="px-2 py-1 rounded-lg text-xs bg-[#0A3D91]/10 text-[#0A3D91] font-medium">
                            {s}
                          </span>
                        ))}
                        {(m.expertise || []).length > 3 && (
                          <span className="px-2 py-1 rounded-lg text-xs bg-[#D0A96A]/10 text-[#D0A96A] font-medium">
                            +{(m.expertise || []).length - 3} more
                          </span>
                        )}
                        </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="px-6 py-4 bg-[#FBF8F3] border-t border-[#E5E0D5]">
                    <div className="flex items-center justify-between gap-2">
                        <button
                        onClick={() => setViewing(m)}
                        className="flex items-center gap-2 px-4 py-2 bg-[#0A3D91] text-white rounded-xl hover:bg-[#08306B] transition-colors text-sm font-semibold"
                      >
                        <Eye className="h-4 w-4" />
                        View Details
                        </button>
                      <div className="flex items-center gap-2">
                          <button
                            onClick={() => setEditing(m)}
                          className="p-2 text-[#0A3D91] hover:bg-[#0A3D91]/10 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => toggleActive(m)}
                          className={`p-2 rounded-lg transition-colors ${
                            m.active 
                              ? 'text-[#B91C1C] hover:bg-[#B91C1C]/10' 
                              : 'text-[#D0A96A] hover:bg-[#D0A96A]/10'
                          }`}
                          title={m.active ? 'Deactivate' : 'Activate'}
                        >
                          {m.active ? <ToggleRight className="h-4 w-4" /> : <ToggleLeft className="h-4 w-4" />}
                          </button>
                          <button
                            onClick={() => confirmDelete(m)}
                          className="p-2 text-[#B91C1C] hover:bg-[#B91C1C]/10 rounded-lg transition-colors"
                          title="Delete"
                          >
                          <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                    </div>
                  </div>
                </motion.div>
                  ))}

                  {filtered.length === 0 && (
                <div className="col-span-full text-center py-16">
                  <div className="w-20 h-20 bg-[#0A3D91]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-10 w-10 text-[#0A3D91]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A3D91] mb-2">No team members found</h3>
                  <p className="text-[#6B7280]">Try adjusting your search criteria or add a new team member.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>

      {editing && (
        <EditMemberModal
          key={editing?._id || 'new'}
          initial={editing}
          onClose={() => setEditing(null)}
          onSave={onSave}
        />
      )}

      {viewing && (
        <ViewMemberModal
          member={viewing}
          onClose={() => setViewing(null)}
          onEdit={() => {
            setViewing(null);
            setEditing(viewing);
          }}
        />
      )}
    </div>
  );
}

/* ============================ VIEW MEMBER MODAL ============================ */

function ViewMemberModal({ member, onClose, onEdit }) {
  // lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const modal = (
    <div className="fixed inset-0 z-[9999]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onMouseDown={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute left-1/2 top-1/2 w-[95vw] max-w-4xl -translate-x-1/2 -translate-y-1/2"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="bg-[#FBF8F3] rounded-3xl shadow-2xl overflow-hidden border border-[#E5E0D5]">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0A3D91] to-[#08306B] p-8 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-xl transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-3xl overflow-hidden bg-[#D0A96A]/20 flex items-center justify-center">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-12 h-12 text-white" />
                )}
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">{member.name}</h2>
                <p className="text-[#FDF6E9] text-xl mb-4">{member.position}</p>
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-xl text-sm font-semibold ${
                    member.active 
                      ? 'bg-[#D0A96A] text-white' 
                      : 'bg-[#6B7280]/30 text-[#FDF6E9]'
                  }`}>
                    {member.active ? 'Active' : 'Inactive'}
                  </span>
                  <span className="px-3 py-1 rounded-xl text-sm font-medium bg-white/20 text-white">
                    Order: {member.order ?? 999}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Bio */}
                <div className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
                  <h3 className="text-lg font-bold text-[#0A3D91] mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Biography
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">{member.bio}</p>
                </div>

                {/* Expertise */}
                <div className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
                  <h3 className="text-lg font-bold text-[#0A3D91] mb-4 flex items-center gap-2">
                    <List className="h-5 w-5" />
                    Expertise & Skills
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(member.expertise || []).map((skill, i) => (
                      <span key={i} className="px-3 py-2 rounded-xl text-sm bg-[#0A3D91]/10 text-[#0A3D91] font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Social Links */}
                <div className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
                  <h3 className="text-lg font-bold text-[#0A3D91] mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Social Links
                  </h3>
                  <div className="space-y-3">
                    {member.socials?.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-[#0A3D91]/5 rounded-xl hover:bg-[#0A3D91]/10 transition-colors"
                      >
                        <Linkedin className="h-5 w-5 text-[#0A3D91]" />
                        <span className="text-[#0A3D91] font-medium">LinkedIn Profile</span>
                      </a>
                    )}
                    {member.socials?.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-[#0A3D91]/5 rounded-xl hover:bg-[#0A3D91]/10 transition-colors"
                      >
                        <Twitter className="h-5 w-5 text-[#0A3D91]" />
                        <span className="text-[#0A3D91] font-medium">Twitter Profile</span>
                      </a>
                    )}
                    {member.socials?.website && (
                      <a
                        href={member.socials.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-[#0A3D91]/5 rounded-xl hover:bg-[#0A3D91]/10 transition-colors"
                      >
                        <Globe className="h-5 w-5 text-[#0A3D91]" />
                        <span className="text-[#0A3D91] font-medium">Personal Website</span>
                      </a>
                    )}
                    {!member.socials?.linkedin && !member.socials?.twitter && !member.socials?.website && (
                      <p className="text-[#6B7280] italic">No social links provided</p>
                    )}
                  </div>
                </div>

                {/* Member Info */}
                <div className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
                  <h3 className="text-lg font-bold text-[#0A3D91] mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Member Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-[#E5E0D5]">
                      <span className="text-[#6B7280] font-medium">Status:</span>
                      <span className={`px-2 py-1 rounded-lg text-sm font-semibold ${
                        member.active 
                          ? 'bg-[#D0A96A] text-white' 
                          : 'bg-[#6B7280]/20 text-[#6B7280]'
                      }`}>
                        {member.active ? 'Active' : 'Inactive'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#E5E0D5]">
                      <span className="text-[#6B7280] font-medium">Display Order:</span>
                      <span className="text-[#0A3D91] font-semibold">{member.order ?? 999}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#6B7280] font-medium">Member ID:</span>
                      <span className="text-[#0A3D91] font-mono text-sm">{member._id?.slice(-8) || 'N/A'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-6 bg-[#FBF8F3] border-t border-[#E5E0D5] flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-6 py-3 rounded-xl border border-[#E5E0D5] text-[#6B7280] hover:bg-[#6B7280]/5 transition-colors font-semibold"
            >
              Close
            </button>
            <button
              onClick={onEdit}
              className="px-6 py-3 bg-gradient-to-r from-[#0A3D91] to-[#08306B] text-white rounded-xl hover:from-[#08306B] hover:to-[#0A3D91] transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl"
            >
              <Edit3 className="h-4 w-4" />
              Edit Member
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return ReactDOM.createPortal(modal, document.body);
}

/* ============================ EDIT MEMBER MODAL ============================ */

function EditMemberModal({ initial, onClose, onSave }) {
  // lock body scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // close on ESC
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting }
  } = useForm({
    defaultValues: {
      _id: initial._id || undefined,
      name: initial.name || '',
      position: initial.position || '',
      bio: initial.bio || '',
      expertiseText: Array.isArray(initial.expertise) ? initial.expertise.join(', ') : '',
      image: initial.image || '',
      order: initial.order ?? 999,
      active: initial.active ?? true,
      linkedin: initial.socials?.linkedin || '',
      twitter: initial.socials?.twitter || '',
      website: initial.socials?.website || ''
    }
  });

  const imageUrl = watch('image');

  const onSubmit = async (v) => {
    const payload = {
      ...(v._id ? { _id: v._id } : null),
      name: v.name.trim(),
      position: v.position.trim(),
      bio: v.bio.trim(),
      expertise: toArray(v.expertiseText),
      image: v.image.trim(),
      order: Number(v.order) || 999,
      active: Boolean(v.active),
      socials: {
        linkedin: v.linkedin.trim(),
        twitter: v.twitter.trim(),
        website: v.website.trim()
      }
    };
    await onSave(payload);
  };

  const modal = (
    <div className="fixed inset-0 z-[9999]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onMouseDown={onClose}
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute left-1/2 top-1/2 w-[95vw] max-w-4xl -translate-x-1/2 -translate-y-1/2"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#FBF8F3] rounded-3xl shadow-2xl overflow-hidden border border-[#E5E0D5]"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#0A3D91] to-[#08306B] p-8 relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-white hover:bg-white/20 rounded-xl transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-[#D0A96A] rounded-2xl flex items-center justify-center">
                <Edit3 className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {initial._id ? 'Edit Member' : 'Add Member'}
                </h3>
                <p className="text-[#FDF6E9] text-lg">
                  {initial._id ? 'Update team member information' : 'Add a new team member to the organization'}
                </p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Basic Info */}
                <div className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
                  <h3 className="text-lg font-bold text-[#0A3D91] mb-4 flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Basic Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Full Name *</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D0A96A]" />
              <input
                {...register('name', { required: true })}
                autoFocus
                          className="w-full pl-10 pr-4 py-3 border border-[#E5E0D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                placeholder="e.g., Sarah Ahmed"
              />
                      </div>
            </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Position / Title *</label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D0A96A]" />
              <input
                {...register('position', { required: true })}
                          className="w-full pl-10 pr-4 py-3 border border-[#E5E0D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                placeholder="Director of Operations"
              />
                      </div>
            </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Bio *</label>
                      <div className="relative">
                        <Briefcase className="absolute left-3 top-4 h-5 w-5 text-[#D0A96A]" />
              <textarea
                rows={4}
                {...register('bio', { required: true })}
                          className="w-full pl-10 pr-4 py-3 border border-[#E5E0D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white resize-vertical"
                placeholder="Short professional bio"
              />
                      </div>
                    </div>
                  </div>
            </div>

                {/* Expertise */}
                <div className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
                  <h3 className="text-lg font-bold text-[#0A3D91] mb-4 flex items-center gap-2">
                    <List className="h-5 w-5" />
                    Expertise & Skills
                  </h3>
                  <div>
                    <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Expertise (comma-separated) *</label>
                    <div className="relative">
                      <List className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D0A96A]" />
              <input
                {...register('expertiseText', { required: true })}
                        className="w-full pl-10 pr-4 py-3 border border-[#E5E0D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                placeholder="International Trade, Strategic Planning"
              />
                    </div>
                  </div>
                </div>
            </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Image */}
                <div className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
                  <h3 className="text-lg font-bold text-[#0A3D91] mb-4 flex items-center gap-2">
                    <ImageIcon className="h-5 w-5" />
                    Profile Image
                  </h3>
            <div>
                    <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Image URL</label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D0A96A]" />
              <input
                {...register('image')}
                        className="w-full pl-10 pr-4 py-3 border border-[#E5E0D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                placeholder="https://..."
              />
                    </div>
              {imageUrl && (
                      <div className="mt-4">
                        <div className="relative">
                          <img src={imageUrl} alt="preview" className="w-full h-48 object-cover rounded-xl border border-[#E5E0D5]" />
                          <div className="absolute top-2 right-2 bg-[#0A3D91] text-white px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            Preview
                          </div>
                        </div>
                </div>
              )}
                  </div>
            </div>

                {/* Settings */}
                <div className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
                  <h3 className="text-lg font-bold text-[#0A3D91] mb-4 flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Display Settings
                  </h3>
                  <div className="space-y-4">
            <div>
                      <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Display Order</label>
                      <div className="relative">
                        <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D0A96A]" />
              <input
                type="number"
                {...register('order')}
                          className="w-full pl-10 pr-4 py-3 border border-[#E5E0D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                          placeholder="999"
              />
                      </div>
            </div>

                    <div className="flex items-center justify-between p-4 bg-white rounded-xl border border-[#E5E0D5]">
                      <label className="text-sm font-semibold text-[#0A3D91] flex items-center gap-2">
                        <ToggleLeft className="h-4 w-4" /> Active
                      </label>
                      <input
                        id="active"
                        type="checkbox"
                        {...register('active')}
                        className="w-5 h-5 text-[#0A3D91] bg-gray-100 border-gray-300 rounded focus:ring-[#0A3D91] focus:ring-2"
                      />
                    </div>
                  </div>
            </div>

                {/* Social Links */}
                <div className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
                  <h3 className="text-lg font-bold text-[#0A3D91] mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Social Links
                  </h3>
                  <div className="space-y-4">
            <div>
                      <label className="block text-sm font-semibold text-[#0A3D91] mb-2">LinkedIn</label>
                      <div className="relative">
                        <Linkedin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#D0A96A]" />
              <input
                {...register('linkedin')}
                          className="w-full pl-10 pr-4 py-3 border border-[#E5E0D5] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                placeholder="https://linkedin.com/in/..."
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
                placeholder="https://x.com/..."
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
            </div>
          </div>

          <div className="px-8 py-6 bg-[#FBF8F3] border-t border-[#E5E0D5] flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 rounded-xl border border-[#E5E0D5] text-[#6B7280] hover:bg-[#6B7280]/5 transition-colors font-semibold"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-3 bg-gradient-to-r from-[#0A3D91] to-[#08306B] text-white rounded-xl hover:from-[#08306B] hover:to-[#0A3D91] transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting && <span className="inline-block h-4 w-4 border-2 border-white/70 border-t-transparent rounded-full animate-spin" />}
              <Save className="h-4 w-4" />
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );

  // Portal so it sits above everything
  return ReactDOM.createPortal(modal, document.body);
}
