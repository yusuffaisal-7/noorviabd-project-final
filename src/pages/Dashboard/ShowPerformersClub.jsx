import React, { useEffect, useMemo, useState } from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import {
  Search, RefreshCcw, PlusCircle, Pencil, Trash2, Loader2, Users, Building2, Phone, Mail, MapPin, FileText, Link as LinkIcon
} from 'lucide-react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

/* --------------------- Helpers --------------------- */
const notEmpty = (s) => String(s || '').trim();
const isEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(notEmpty(s));
const sanitizeArray = (arr) => (Array.isArray(arr) ? arr.filter(Boolean) : []);

const emptyPerformer = {
  name: '',
  fatherName: '',
  motherName: '',
  nidNumber: '',
  designation: '',
  company: '',
  cellPhone: '',
  whatsappNumber: '',
  email: '',
  presentAddress: '',
  permanentAddress: '',
  companyAddress: '',
  membershipCategory: [],
  productServiceTypes: ['', '', ''],
  networkCompanies: [
    { name: '', contactPerson: '', designation: '', contactNumber: '' },
    { name: '', contactPerson: '', designation: '', contactNumber: '' },
    { name: '', contactPerson: '', designation: '', contactNumber: '' }
  ]
};

const membershipCategories = [
  'Mediator', 'Market Provider', 'Source Provider', 'Network Builder', 'Investor'
];

/* ===================== Main Page ===================== */
export default function ShowPerformersClub() {
  const axiosSecure = useAxiosSecure();
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const [q, setQ] = useState('');
  const [editing, setEditing] = useState(null); // object | null
  const [submitting, setSubmitting] = useState(false);

  const fetchRows = async () => {
    try {
      setLoading(true);
      const { data } = await axiosSecure.get('/performers');
      setRows(Array.isArray(data) ? data : []);
      setErr(null);
    } catch (e) {
      setErr(e?.response?.data?.message || 'Failed to load performers');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchRows(); }, []); // initial load

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return rows;
    return rows.filter((r) =>
      r.name?.toLowerCase().includes(term) ||
      r.email?.toLowerCase().includes(term) ||
      r.company?.toLowerCase().includes(term) ||
      r.designation?.toLowerCase().includes(term) ||
      r.membershipCategory?.join(', ').toLowerCase().includes(term) ||
      r.productServiceTypes?.join(', ').toLowerCase().includes(term)
    );
  }, [rows, q]);

  const confirmDelete = async (doc) => {
    const res = await Swal.fire({
      title: `Delete ${doc.name}?`,
      text: 'This will remove the application permanently.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel'
    });
    if (!res.isConfirmed) return;

    try {
      await axiosSecure.delete(`/performers/${doc._id}`);
      setRows((prev) => prev.filter((r) => r._id !== doc._id));
      Swal.fire({ icon: 'success', title: 'Deleted', timer: 1200, showConfirmButton: false });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Delete failed',
        text: e?.response?.data?.message || e?.message || 'Try again'
      });
    }
  };

  const saveDoc = async (payload) => {
    // payload contains _id when editing existing doc
    try {
      setSubmitting(true);
      if (payload._id) {
        const { _id, ...body } = payload;
        await axiosSecure.patch(`/performers/${_id}`, body);
        setRows((prev) => prev.map((r) => (r._id === _id ? { ...r, ...body } : r)));
        Swal.fire({ icon: 'success', title: 'Updated', timer: 1200, showConfirmButton: false });
      } else {
        const { data } = await axiosSecure.post('/performers', payload);
        setRows((prev) => [{ ...payload, _id: data?.insertedId }, ...prev]);
        Swal.fire({ icon: 'success', title: 'Added', timer: 1200, showConfirmButton: false });
      }
      setEditing(null);
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Save failed',
        text: e?.response?.data?.message || e?.message || 'Try again'
      });
    } finally {
      setSubmitting(false);
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
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl font-bold text-[var(--color-text-dark)]">Performers’ Club Applications</h2>
            <p className="text-gray-600">View, edit, and delete member applications.</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search name/email/company"
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
              onClick={() => setEditing({ ...emptyPerformer })}
              className="px-3 py-2 rounded-lg bg-[var(--color-text-dark)] text-white hover:bg-opacity-90 flex items-center gap-2"
            >
              <PlusCircle className="w-4 h-4" /> Add
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="p-6">
          {loading ? (
            <div className="flex items-center justify-center py-12 text-gray-500">
              <Loader2 className="h-6 w-6 animate-spin mr-2" />
              Loading applications…
            </div>
          ) : err ? (
            <div className="text-center text-red-600 py-8">{err}</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-[1000px] w-full text-left text-sm">
                <thead>
                  <tr className="border-b bg-gray-50">
                    <th className="px-3 py-2">#</th>
                    <th className="px-3 py-2">Name / Email</th>
                    <th className="px-3 py-2">Company / Designation</th>
                    <th className="px-3 py-2">Phone</th>
                    <th className="px-3 py-2">Categories</th>
                    <th className="px-3 py-2">Products/Services</th>
                    <th className="px-3 py-2">Network Companies</th>
                    <th className="px-3 py-2 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((r, idx) => (
                    <tr key={r._id || idx} className="border-b last:border-0 align-top">
                      <td className="px-3 py-3">{idx + 1}</td>

                      <td className="px-3 py-3">
                        <div className="font-medium text-gray-900">{r.name}</div>
                        <div className="text-xs text-gray-600 flex items-center gap-1">
                          <Mail className="w-3.5 h-3.5" />
                          {r.email}
                        </div>
                      </td>

                      <td className="px-3 py-3">
                        <div className="text-gray-900 flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5" />
                          <span className="font-medium">{r.company}</span>
                        </div>
                        <div className="text-xs text-gray-600">{r.designation}</div>
                      </td>

                      <td className="px-3 py-3">
                        <div className="flex items-center gap-1">
                          <Phone className="w-3.5 h-3.5" />
                          <span className="text-gray-900">{r.cellPhone}</span>
                        </div>
                        {r.whatsappNumber ? (
                          <div className="text-xs text-gray-600">WhatsApp: {r.whatsappNumber}</div>
                        ) : null}
                      </td>

                      <td className="px-3 py-3">
                        <div className="flex flex-wrap gap-1 max-w-[220px]">
                          {sanitizeArray(r.membershipCategory).map((c, i) => (
                            <span key={i} className="px-2 py-0.5 rounded-full text-xs bg-violet-100 text-violet-700">
                              {c}
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="px-3 py-3">
                        <div className="flex flex-wrap gap-1 max-w-[240px]">
                          {sanitizeArray(r.productServiceTypes).map((s, i) => (
                            <span key={i} className="px-2 py-0.5 rounded-full text-xs bg-blue-100 text-blue-700">
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="px-3 py-3">
                        <div className="space-y-1 max-w-[280px]">
                          {sanitizeArray(r.networkCompanies).map((c, i) => (
                            <div key={i} className="text-xs text-gray-700">
                              <span className="font-medium">{c?.name}</span>
                              {c?.contactPerson ? <> — {c.contactPerson}</> : null}
                              {c?.designation ? <> ({c.designation})</> : null}
                              {c?.contactNumber ? (
                                <div className="text-[11px] text-gray-500">☎ {c.contactNumber}</div>
                              ) : null}
                            </div>
                          ))}
                        </div>
                      </td>

                      <td className="px-3 py-3">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setEditing(r)}
                            className="px-3 py-1.5 rounded border hover:bg-gray-50 inline-flex items-center gap-1"
                          >
                            <Pencil className="w-4 h-4" /> Edit
                          </button>
                          <button
                            onClick={() => confirmDelete(r)}
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
                      <td colSpan={8} className="px-3 py-10 text-center text-gray-500">
                        No applications found.
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
        <EditPerformerModal
          initial={editing}
          onClose={() => setEditing(null)}
          onSave={saveDoc}
          submitting={submitting}
        />
      )}
    </div>
  );
}

/* ===================== Edit/Add Modal ===================== */
function EditPerformerModal({ initial, onClose, onSave, submitting }) {
  const [form, setForm] = useState(() => ({
    _id: initial._id,
    name: initial.name || '',
    fatherName: initial.fatherName || '',
    motherName: initial.motherName || '',
    nidNumber: initial.nidNumber || '',
    designation: initial.designation || '',
    company: initial.company || '',
    cellPhone: initial.cellPhone || '',
    whatsappNumber: initial.whatsappNumber || '',
    email: initial.email || '',
    presentAddress: initial.presentAddress || '',
    permanentAddress: initial.permanentAddress || '',
    companyAddress: initial.companyAddress || '',
    membershipCategory: Array.isArray(initial.membershipCategory) ? initial.membershipCategory : [],
    productServiceTypes: Array.isArray(initial.productServiceTypes) && initial.productServiceTypes.length
      ? initial.productServiceTypes
      : ['', '', ''],
    networkCompanies: Array.isArray(initial.networkCompanies) && initial.networkCompanies.length
      ? initial.networkCompanies
      : [
          { name: '', contactPerson: '', designation: '', contactNumber: '' },
          { name: '', contactPerson: '', designation: '', contactNumber: '' },
          { name: '', contactPerson: '', designation: '', contactNumber: '' }
        ],
  }));

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const toggleCategory = (cat) => {
    setForm((f) => ({
      ...f,
      membershipCategory: f.membershipCategory.includes(cat)
        ? f.membershipCategory.filter((c) => c !== cat)
        : [...f.membershipCategory, cat]
    }));
  };

  const updateService = (i, val) => {
    setForm((f) => ({
      ...f,
      productServiceTypes: f.productServiceTypes.map((s, idx) => (idx === i ? val : s))
    }));
  };

  const addService = () => setForm((f) => ({ ...f, productServiceTypes: [...f.productServiceTypes, ''] }));
  const removeService = (i) =>
    setForm((f) => ({ ...f, productServiceTypes: f.productServiceTypes.filter((_, idx) => idx !== i) }));

  const updateCompany = (i, key, val) => {
    setForm((f) => ({
      ...f,
      networkCompanies: f.networkCompanies.map((c, idx) => (idx === i ? { ...c, [key]: val } : c))
    }));
  };

  const addCompany = () =>
    setForm((f) => ({
      ...f,
      networkCompanies: [...f.networkCompanies, { name: '', contactPerson: '', designation: '', contactNumber: '' }]
    }));
  const removeCompany = (i) =>
    setForm((f) => ({ ...f, networkCompanies: f.networkCompanies.filter((_, idx) => idx !== i) }));

  const validate = () => {
    if (!notEmpty(form.name)) return 'Full Name is required';
    if (!notEmpty(form.fatherName)) return "Father's Name is required";
    if (!notEmpty(form.motherName)) return "Mother's Name is required";
    if (!notEmpty(form.nidNumber)) return 'NID Number is required';
    if (!notEmpty(form.designation)) return 'Designation is required';
    if (!notEmpty(form.company)) return 'Company is required';
    if (!notEmpty(form.cellPhone)) return 'Cell Phone Number is required';
    if (!notEmpty(form.email)) return 'Email is required';
    if (!isEmail(form.email)) return 'Valid email is required';
    if (!notEmpty(form.presentAddress)) return 'Present Address is required';
    if (!notEmpty(form.permanentAddress)) return 'Permanent Address is required';
    if (!notEmpty(form.companyAddress)) return 'Company Address is required';
    return null;
  };

  const submit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      Swal.fire({ icon: 'warning', title: 'Check Form', text: err });
      return;
    }
    const payload = {
      ...(form._id ? { _id: form._id } : null),
      ...form,
      // Clean arrays a bit
      productServiceTypes: sanitizeArray(form.productServiceTypes.map((s) => notEmpty(s))),
      membershipCategory: sanitizeArray(form.membershipCategory),
      networkCompanies: sanitizeArray(
        form.networkCompanies.map((c) => ({
          name: notEmpty(c.name),
          contactPerson: notEmpty(c.contactPerson),
          designation: notEmpty(c.designation),
          contactNumber: notEmpty(c.contactNumber)
        }))
      )
    };
    await onSave(payload);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-lg"
      >
        <div className="px-6 py-4 border-b sticky top-0 bg-white z-10">
          <h3 className="text-lg font-semibold">{form._id ? 'Edit Application' : 'Add Application'}</h3>
          <p className="text-xs text-gray-500">Fields marked * are required</p>
        </div>

        <div className="p-6 space-y-8">
          {/* Personal */}
          <section>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Users className="w-4 h-4" /> Personal Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Full Name *', name: 'name', icon: Users },
                { label: "Father's Name *", name: 'fatherName', icon: Users },
                { label: "Mother's Name *", name: 'motherName', icon: Users },
                { label: 'NID Number *', name: 'nidNumber', icon: FileText }
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-medium mb-1">{f.label}</label>
                  <div className="relative">
                    <f.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      value={form[f.name]}
                      onChange={update(f.name)}
                      className="w-full border rounded-lg pl-9 pr-3 py-2 focus:ring-2 focus:ring-violet-500"
                      required
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Professional */}
          <section>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Building2 className="w-4 h-4" /> Professional Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: 'Designation *', name: 'designation' },
                { label: 'Company *', name: 'company' }
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-medium mb-1">{f.label}</label>
                  <input
                    value={form[f.name]}
                    onChange={update(f.name)}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-500"
                    required
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <Phone className="w-4 h-4" /> Contact
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Cell Phone Number *</label>
                <input
                  value={form.cellPhone}
                  onChange={update('cellPhone')}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">WhatsApp Number</label>
                <input
                  value={form.whatsappNumber}
                  onChange={update('whatsappNumber')}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-500"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium mb-1">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    className="w-full border rounded-lg pl-9 pr-3 py-2 focus:ring-2 focus:ring-violet-500"
                    required
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Address */}
          <section>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Address
            </h4>
            <div className="space-y-4">
              {[
                { label: 'Present Address *', name: 'presentAddress' },
                { label: 'Permanent Address *', name: 'permanentAddress' },
                { label: 'Company Address *', name: 'companyAddress' }
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-medium mb-1">{f.label}</label>
                  <textarea
                    rows={3}
                    value={form[f.name]}
                    onChange={update(f.name)}
                    className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-500"
                    required
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Membership Category */}
          <section>
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <LinkIcon className="w-4 h-4" /> Membership Category
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {membershipCategories.map((cat) => (
                <label key={cat} className="flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="checkbox"
                    checked={form.membershipCategory.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                  />
                  <span className="text-sm">{cat}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Product/Service Types */}
          <section>
            <h4 className="font-semibold mb-3">Product / Service Types</h4>
            <div className="space-y-2">
              {form.productServiceTypes.map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-xs w-5 text-gray-500">{i + 1}.</span>
                  <input
                    value={s}
                    onChange={(e) => updateService(i, e.target.value)}
                    className="flex-1 border rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-500"
                    placeholder={`Product/Service ${i + 1}`}
                  />
                  {form.productServiceTypes.length > 3 && (
                    <button
                      type="button"
                      onClick={() => removeService(i)}
                      className="px-2 py-1 text-red-600 border rounded hover:bg-red-50"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addService()}
                className="mt-1 text-violet-600 hover:text-violet-800 text-sm"
              >
                + Add service
              </button>
            </div>
          </section>

          {/* Network Companies */}
          <section>
            <h4 className="font-semibold mb-3">Companies Within My Top Network</h4>
            <div className="space-y-4">
              {form.networkCompanies.map((c, i) => (
                <div key={i} className="p-4 border rounded-lg bg-gray-50">
                  <div className="flex items-center justify-between mb-3">
                    <div className="font-medium">Company {i + 1}</div>
                    {form.networkCompanies.length > 3 && (
                      <button
                        type="button"
                        onClick={() => removeCompany(i)}
                        className="px-2 py-1 text-red-600 border rounded hover:bg-red-50 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <input
                      placeholder="Company Name"
                      value={c.name}
                      onChange={(e) => updateCompany(i, 'name', e.target.value)}
                      className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-500"
                    />
                    <input
                      placeholder="Contact Person"
                      value={c.contactPerson}
                      onChange={(e) => updateCompany(i, 'contactPerson', e.target.value)}
                      className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-500"
                    />
                    <input
                      placeholder="Designation"
                      value={c.designation}
                      onChange={(e) => updateCompany(i, 'designation', e.target.value)}
                      className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-500"
                    />
                    <input
                      placeholder="Contact Number"
                      value={c.contactNumber}
                      onChange={(e) => updateCompany(i, 'contactNumber', e.target.value)}
                      className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-violet-500"
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addCompany()}
                className="mt-1 text-violet-600 hover:text-violet-800 text-sm"
              >
                + Add company
              </button>
            </div>
          </section>
        </div>

        <div className="px-6 py-4 border-t flex justify-end gap-2 sticky bottom-0 bg-white">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg border hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="px-4 py-2 rounded-lg bg-[var(--color-text-dark)] text-white hover:bg-opacity-90 flex items-center gap-2 disabled:opacity-70"
          >
            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
            Save
          </button>
        </div>
      </motion.form>
    </div>
  );
}
