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
  PlusCircle, Image as ImageIcon, Loader2
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
      cancelButtonText: 'Cancel'
    });
    if (!res.isConfirmed) return;

    try {
      await axiosSecure.delete(`/team/${member._id}`);
      setRows(prev => prev.filter(r => r._id !== member._id));
      Swal.fire({ icon: 'success', title: 'Deleted', timer: 1200, showConfirmButton: false });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Delete failed',
        text: e?.response?.data?.message || e?.message || 'Try again'
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
        showConfirmButton: false
      });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Update failed',
        text: e?.response?.data?.message || e?.message || 'Try again'
      });
    }
  };

  const onSave = async (payload) => {
    try {
      if (payload._id) {
        const { _id, ...body } = payload;
        await axiosSecure.patch(`/team/${_id}`, body);
        setRows(prev => prev.map(r => r._id === _id ? { ...r, ...body } : r));
        Swal.fire({ icon: 'success', title: 'Member updated', timer: 1200, showConfirmButton: false });
      } else {
        const { data } = await axiosSecure.post('/team', payload);
        setRows(prev => [{ ...payload, _id: data?.insertedId || Math.random().toString(36).slice(2) }, ...prev]);
        Swal.fire({ icon: 'success', title: 'Member added', timer: 1200, showConfirmButton: false });
      }
      setEditing(null);
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Save failed',
        text: e?.response?.data?.message || e?.message || 'Try again'
      });
    }
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="bg-white rounded-lg shadow-md mx-4 my-4"
      >
        <div className="p-6 border-b border-gray-200 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)]">Team Members</h2>
            <p className="text-gray-600">Manage leadership profiles (edit, activate/deactivate, delete).</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                value={q}
                onChange={e => setQ(e.target.value)}
                placeholder="Search name/position/skills"
                className="pl-9 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-[var(--color-text-dark)]"
              />
              <Search className="w-4 h-4 text-gray-400 absolute left-2.5 top-2.5" />
            </div>
            <button
              onClick={fetchRows}
              className="px-3 py-2 rounded-lg border bg-white hover:bg-gray-50 flex items-center gap-2"
              title="Refresh"
            >
              <RefreshCcw className="w-4 h-4" /> Refresh
            </button>
            <button
              onClick={() => setEditing({
                name: '', position: '', bio: '', expertise: [], image: '', order: 999, active: true, socials: {}
              })}
              className="px-3 py-2 rounded-lg bg-[var(--color-text-dark)] text-white hover:bg-opacity-90 flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4" /> Add Member
            </button>
          </div>
        </div>

        <div className="p-6">
          {loading ? (
            <div className="flex items-center justify-center py-12 text-gray-500">
              <Loader2 className="h-6 w-6 animate-spin mr-2" />
              Loading team…
            </div>
          ) : error ? (
            <div className="text-center text-red-600 py-8">{error}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="px-3 py-2">#</th>
                    <th className="px-3 py-2">Photo</th>
                    <th className="px-3 py-2">Name</th>
                    <th className="px-3 py-2">Position</th>
                    <th className="px-3 py-2">Skills</th>
                    <th className="px-3 py-2">Order</th>
                    <th className="px-3 py-2">Active</th>
                    <th className="px-3 py-2 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((m, idx) => (
                    <tr key={m._id || idx} className="border-b last:border-0">
                      <td className="px-3 py-2 align-middle">{idx + 1}</td>
                      <td className="px-3 py-2 align-middle">
                        <div className="w-12 h-12 rounded overflow-hidden bg-gray-100 flex items-center justify-center">
                          {m.image ? (
                            <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                          ) : (
                            <ImageIcon className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </td>
                      <td className="px-3 py-2 align-middle">
                        <div className="font-medium text-gray-900">{m.name}</div>
                        <div className="text-xs text-gray-500 truncate max-w-[260px]">{m.bio}</div>
                      </td>
                      <td className="px-3 py-2 align-middle">{m.position}</td>
                      <td className="px-3 py-2 align-middle">
                        <div className="flex flex-wrap gap-1">
                          {(m.expertise || []).map((s, i) => (
                            <span key={i} className="px-2 py-0.5 rounded-full text-xs bg-blue-100 text-blue-700">{s}</span>
                          ))}
                        </div>
                      </td>
                      <td className="px-3 py-2 align-middle">{m.order ?? 999}</td>
                      <td className="px-3 py-2 align-middle">
                        <button
                          onClick={() => toggleActive(m)}
                          className="inline-flex items-center gap-1 px-2 py-1 rounded border hover:bg-gray-50"
                          title={m.active ? 'Click to deactivate' : 'Click to activate'}
                        >
                          {m.active ? <ToggleRight className="w-4 h-4 text-green-600" /> : <ToggleLeft className="w-4 h-4 text-gray-400" />}
                          <span className={`text-xs ${m.active ? 'text-green-700' : 'text-gray-500'}`}>
                            {m.active ? 'Active' : 'Inactive'}
                          </span>
                        </button>
                      </td>
                      <td className="px-3 py-2 align-middle">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setEditing(m)}
                            className="px-3 py-1.5 rounded border hover:bg-gray-50 inline-flex items-center gap-1"
                          >
                            <Pencil className="w-4 h-4" /> Edit
                          </button>
                          <button
                            onClick={() => confirmDelete(m)}
                            className="px-3 py-1.5 rounded border hover:bg-red-50 text-red-600 border-red-200 inline-flex items-center gap-1"
                          >
                            <Trash2 className="w-4 h-4" /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}

                  {filtered.length === 0 && (
                    <tr>
                      <td colSpan={8} className="px-3 py-8 text-center text-gray-500">
                        No team members found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
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
    </div>
  );
}

/* ============================ DRAGGABLE MODAL ============================ */

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
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onMouseDown={onClose}
      />

      {/* Draggable card */}
      <motion.div
        drag
        dragMomentum={false}
        dragElastic={0.1}
        dragConstraints={{ left: -9999, right: 9999, top: -9999, bottom: 9999 }}
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="absolute left-1/2 top-1/2 w-[95vw] max-w-2xl -translate-x-1/2 -translate-y-1/2"
        onMouseDown={(e) => e.stopPropagation()} // don't close when clicking inside
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white rounded-xl shadow-xl overflow-hidden border"
        >
          {/* Drag handle (header) */}
          <div className="px-6 py-4 border-b cursor-move select-none bg-gray-50">
            <h3 className="text-lg font-semibold">{initial._id ? 'Edit Member' : 'Add Member'}</h3>
            <p className="text-xs text-gray-500">Drag this header to move the modal. Press ESC to close.</p>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Full Name *</label>
              <input
                {...register('name', { required: true })}
                autoFocus
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Sarah Ahmed"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Position / Title *</label>
              <input
                {...register('position', { required: true })}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Director of Operations"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Bio *</label>
              <textarea
                rows={4}
                {...register('bio', { required: true })}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="Short professional bio"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Expertise (comma‑separated) *</label>
              <input
                {...register('expertiseText', { required: true })}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="International Trade, Strategic Planning"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Image URL</label>
              <input
                {...register('image')}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="https://..."
              />
              {imageUrl && (
                <div className="mt-2 w-full h-32 rounded overflow-hidden border bg-gray-50">
                  <img src={imageUrl} alt="preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Order</label>
              <input
                type="number"
                {...register('order')}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center gap-2">
              <input id="active" type="checkbox" {...register('active')} className="h-4 w-4" />
              <label htmlFor="active" className="text-sm font-medium">Active</label>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">LinkedIn</label>
              <input
                {...register('linkedin')}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="https://linkedin.com/in/..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Twitter / X</label>
              <input
                {...register('twitter')}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="https://x.com/..."
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Website</label>
              <input
                {...register('website')}
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com"
              />
            </div>
          </div>

          <div className="px-6 py-4 border-t flex justify-end gap-2 bg-white">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-2 rounded-lg bg-[var(--color-text-dark)] text-white hover:bg-opacity-90 flex items-center gap-2"
            >
              {isSubmitting && <span className="inline-block h-4 w-4 border-2 border-white/70 border-t-transparent rounded-full animate-spin" />}
              Save
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );

  // Portal so it sits above everything
  return ReactDOM.createPortal(modal, document.body);
}
