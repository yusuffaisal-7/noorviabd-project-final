import React, { useEffect, useMemo, useState } from 'react';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import {
  Search, RefreshCcw, PlusCircle, Pencil, Trash2, Loader2, Users, Building2, Phone, Mail, MapPin, FileText, Link as LinkIcon,
  Eye, Edit3, Crown, Shield, CheckCircle, X, Save, User, Briefcase, Globe, Linkedin, Twitter, Award, Calendar
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
  const [viewing, setViewing] = useState(null); // member being viewed
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
      cancelButtonText: 'Cancel',
      background: "#FBF8F3",
      customClass: {
        title: "text-[#0A3D91] text-xl",
        content: "text-[#6B7280]",
      }
    });
    if (!res.isConfirmed) return;

    try {
      await axiosSecure.delete(`/performers/${doc._id}`);
      setRows((prev) => prev.filter((r) => r._id !== doc._id));
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

  const saveDoc = async (payload) => {
    // payload contains _id when editing existing doc
    try {
      setSubmitting(true);
      if (payload._id) {
        const { _id, ...body } = payload;
        await axiosSecure.patch(`/performers/${_id}`, body);
        setRows((prev) => prev.map((r) => (r._id === _id ? { ...r, ...body } : r)));
        Swal.fire({ 
          icon: 'success', 
          title: 'Updated', 
          timer: 1200, 
          showConfirmButton: false,
          background: "#FBF8F3",
          customClass: {
            title: "text-[#0A3D91] text-xl",
          }
        });
      } else {
        const { data } = await axiosSecure.post('/performers', payload);
        setRows((prev) => [{ ...payload, _id: data?.insertedId }, ...prev]);
        Swal.fire({ 
          icon: 'success', 
          title: 'Added', 
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
        className="bg-[#FBF8F3] rounded-3xl shadow-2xl border border-[#E5E0D5] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#0A3D91] to-[#08306B] p-8 relative">
          <div className="absolute top-4 right-4">
            <Crown className="h-8 w-8 text-[#D0A96A]" />
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-[#D0A96A] rounded-2xl flex items-center justify-center">
              <Crown className="h-8 w-8 text-white" />
            </div>
          <div>
              <h2 className="text-3xl font-bold text-white mb-2">Performers' Club Applications</h2>
              <p className="text-[#FDF6E9] text-lg">View, edit, and manage member applications</p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
            <div className="flex-1 relative">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search name, email, company, or designation..."
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
              onClick={() => setEditing({ ...emptyPerformer })}
                className="px-6 py-3 bg-gradient-to-r from-[#D0A96A] to-[#B8945A] text-white rounded-xl hover:from-[#B8945A] hover:to-[#D0A96A] flex items-center gap-2 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
                <PlusCircle className="w-5 h-5" /> Add Application
            </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="text-center">
                <Loader2 className="h-8 w-8 animate-spin text-[#0A3D91] mx-auto mb-4" />
                <p className="text-[#6B7280] text-lg">Loading applications...</p>
              </div>
            </div>
          ) : err ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-[#B91C1C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="h-8 w-8 text-[#B91C1C]" />
              </div>
              <p className="text-[#B91C1C] text-lg font-semibold">{err}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map((r, idx) => (
                <motion.div
                  key={r._id || idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="bg-[#FDF6E9] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E5E0D5] hover:border-[#D0A96A]/30 overflow-hidden flex flex-col"
                >
                  {/* Card Header */}
                  <div className="relative p-6 pb-4">
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-[#0A3D91]/10 flex items-center justify-center">
                          <User className="w-8 h-8 text-[#0A3D91]" />
                        </div>
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#D0A96A] rounded-full flex items-center justify-center">
                          <Crown className="h-3 w-3 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-[#0A3D91] truncate">{r.name}</h3>
                        <p className="text-[#D0A96A] font-semibold text-sm">{r.designation}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="px-2 py-1 rounded-lg text-xs font-medium bg-[#0A3D91]/10 text-[#0A3D91]">
                            #{idx + 1}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="px-6 pb-4 flex flex-col flex-1">
                    {/* Company Info */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-[#6B7280] text-sm mb-1">
                        <Building2 className="h-4 w-4" />
                        <span className="font-medium">{r.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#6B7280] text-sm mb-1">
                        <Mail className="h-4 w-4" />
                        <span className="truncate">{r.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#6B7280] text-sm">
                        <Phone className="h-4 w-4" />
                        <span>{r.cellPhone}</span>
                      </div>
                    </div>

                    {/* Membership Categories */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[#0A3D91] mb-2 flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        Categories
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {sanitizeArray(r.membershipCategory).slice(0, 2).map((c, i) => (
                          <span key={i} className="px-2 py-1 rounded-lg text-xs bg-[#0A3D91]/10 text-[#0A3D91] font-medium">
                            {c}
                          </span>
                        ))}
                        {sanitizeArray(r.membershipCategory).length > 2 && (
                          <span className="px-2 py-1 rounded-lg text-xs bg-[#D0A96A]/10 text-[#D0A96A] font-medium">
                            +{sanitizeArray(r.membershipCategory).length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Products/Services */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[#0A3D91] mb-2 flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        Services
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {sanitizeArray(r.productServiceTypes).slice(0, 2).map((s, i) => (
                          <span key={i} className="px-2 py-1 rounded-lg text-xs bg-[#D0A96A]/10 text-[#D0A96A] font-medium">
                            {s}
                          </span>
                        ))}
                        {sanitizeArray(r.productServiceTypes).length > 2 && (
                          <span className="px-2 py-1 rounded-lg text-xs bg-[#0A3D91]/10 text-[#0A3D91] font-medium">
                            +{sanitizeArray(r.productServiceTypes).length - 2} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Network Companies */}
                    <div className="mb-4 flex-1">
                      <h4 className="text-sm font-semibold text-[#0A3D91] mb-2 flex items-center gap-1">
                        <Globe className="h-4 w-4" />
                        Network ({sanitizeArray(r.networkCompanies).length})
                      </h4>
                      <div className="space-y-1">
                        {sanitizeArray(r.networkCompanies).slice(0, 2).map((c, i) => (
                          <div key={i} className="text-xs text-[#6B7280]">
                            <span className="font-medium">{c?.name}</span>
                            {c?.contactPerson && <span> — {c.contactPerson}</span>}
                          </div>
                        ))}
                        {sanitizeArray(r.networkCompanies).length > 2 && (
                          <div className="text-xs text-[#D0A96A] font-medium">
                            +{sanitizeArray(r.networkCompanies).length - 2} more companies
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="px-6 py-4 bg-[#FBF8F3] border-t border-[#E5E0D5] mt-auto">
                    <div className="flex items-center justify-between gap-2">
                      <button
                        onClick={() => setViewing(r)}
                        className="flex items-center gap-2 px-4 py-2 bg-[#0A3D91] text-white rounded-xl hover:bg-[#08306B] transition-colors text-sm font-semibold"
                      >
                        <Eye className="h-4 w-4" />
                        View Details
                      </button>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setEditing(r)}
                          className="p-2 text-[#0A3D91] hover:bg-[#0A3D91]/10 rounded-lg transition-colors"
                          title="Edit"
                        >
                          <Edit3 className="h-4 w-4" />
                        </button>
                        <button
                          onClick={() => confirmDelete(r)}
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
                    <Crown className="h-10 w-10 text-[#0A3D91]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#0A3D91] mb-2">No applications found</h3>
                  <p className="text-[#6B7280]">Try adjusting your search criteria or add a new application.</p>
                </div>
              )}
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

      {viewing && (
        <ViewPerformerModal
          performer={viewing}
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

/* ===================== View Performer Modal ===================== */
function ViewPerformerModal({ performer, onClose, onEdit }) {
  return (
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
        className="absolute left-1/2 top-1/2 w-[95vw] max-w-6xl -translate-x-1/2 -translate-y-1/2"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="bg-[#FBF8F3] rounded-3xl shadow-2xl overflow-hidden border border-[#E5E0D5] max-h-[90vh] overflow-y-auto">
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
                <Crown className="w-12 h-12 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-2">{performer.name}</h2>
                <p className="text-[#FDF6E9] text-xl mb-4">{performer.designation} at {performer.company}</p>
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-xl text-sm font-semibold bg-[#D0A96A] text-white">
                    Performers Club Member
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
                {/* Personal Information */}
                <div className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
                  <h3 className="text-lg font-bold text-[#0A3D91] mb-4 flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Personal Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-[#E5E0D5]">
                      <span className="text-[#6B7280] font-medium">Full Name:</span>
                      <span className="text-[#0A3D91] font-semibold">{performer.name}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#E5E0D5]">
                      <span className="text-[#6B7280] font-medium">Father's Name:</span>
                      <span className="text-[#0A3D91] font-semibold">{performer.fatherName}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#E5E0D5]">
                      <span className="text-[#6B7280] font-medium">Mother's Name:</span>
                      <span className="text-[#0A3D91] font-semibold">{performer.motherName}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#6B7280] font-medium">NID Number:</span>
                      <span className="text-[#0A3D91] font-semibold">{performer.nidNumber}</span>
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
                  <h3 className="text-lg font-bold text-[#0A3D91] mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Professional Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-[#E5E0D5]">
                      <span className="text-[#6B7280] font-medium">Designation:</span>
                      <span className="text-[#0A3D91] font-semibold">{performer.designation}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#6B7280] font-medium">Company:</span>
                      <span className="text-[#0A3D91] font-semibold">{performer.company}</span>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
                  <h3 className="text-lg font-bold text-[#0A3D91] mb-4 flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-[#E5E0D5]">
                      <span className="text-[#6B7280] font-medium">Cell Phone:</span>
                      <span className="text-[#0A3D91] font-semibold">{performer.cellPhone}</span>
                    </div>
                    {performer.whatsappNumber && (
                      <div className="flex justify-between items-center py-2 border-b border-[#E5E0D5]">
                        <span className="text-[#6B7280] font-medium">WhatsApp:</span>
                        <span className="text-[#0A3D91] font-semibold">{performer.whatsappNumber}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center py-2">
                      <span className="text-[#6B7280] font-medium">Email:</span>
                      <span className="text-[#0A3D91] font-semibold">{performer.email}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Address Information */}
                <div className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
                  <h3 className="text-lg font-bold text-[#0A3D91] mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Address Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-[#6B7280] font-medium text-sm">Present Address:</span>
                      <p className="text-[#0A3D91] text-sm mt-1">{performer.presentAddress}</p>
                    </div>
                    <div>
                      <span className="text-[#6B7280] font-medium text-sm">Permanent Address:</span>
                      <p className="text-[#0A3D91] text-sm mt-1">{performer.permanentAddress}</p>
                    </div>
                    <div>
                      <span className="text-[#6B7280] font-medium text-sm">Company Address:</span>
                      <p className="text-[#0A3D91] text-sm mt-1">{performer.companyAddress}</p>
                    </div>
                  </div>
                </div>

                {/* Membership Categories */}
                <div className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
                  <h3 className="text-lg font-bold text-[#0A3D91] mb-4 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Membership Categories
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sanitizeArray(performer.membershipCategory).map((cat, i) => (
                      <span key={i} className="px-3 py-2 rounded-xl text-sm bg-[#0A3D91]/10 text-[#0A3D91] font-medium">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Products/Services */}
                <div className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
                  <h3 className="text-lg font-bold text-[#0A3D91] mb-4 flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Products & Services
                  </h3>
                  <div className="space-y-2">
                    {sanitizeArray(performer.productServiceTypes).map((service, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-[#6B7280] text-sm w-6">{i + 1}.</span>
                        <span className="text-[#0A3D91] text-sm font-medium">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Network Companies */}
                <div className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
                  <h3 className="text-lg font-bold text-[#0A3D91] mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Network Companies ({sanitizeArray(performer.networkCompanies).length})
                  </h3>
                  <div className="space-y-3">
                    {sanitizeArray(performer.networkCompanies).map((company, i) => (
                      <div key={i} className="p-3 bg-white rounded-xl border border-[#E5E0D5]">
                        <div className="font-semibold text-[#0A3D91] text-sm">{company.name}</div>
                        {company.contactPerson && (
                          <div className="text-[#6B7280] text-xs mt-1">
                            Contact: {company.contactPerson}
                            {company.designation && ` (${company.designation})`}
                          </div>
                        )}
                        {company.contactNumber && (
                          <div className="text-[#6B7280] text-xs mt-1">Phone: {company.contactNumber}</div>
                        )}
                      </div>
                    ))}
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
              Edit Application
            </button>
          </div>
        </div>
      </motion.div>
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
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
      <motion.form
        onSubmit={submit}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-[#FBF8F3] rounded-3xl shadow-2xl border border-[#E5E0D5]"
      >
        <div className="bg-gradient-to-r from-[#0A3D91] to-[#08306B] p-8 relative sticky top-0 z-10">
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
                {form._id ? 'Edit Application' : 'Add Application'}
              </h3>
              <p className="text-[#FDF6E9] text-lg">Complete the form with all required information</p>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Personal */}
          <section className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
            <h4 className="text-lg font-bold text-[#0A3D91] mb-6 flex items-center gap-2">
              <User className="h-5 w-5" /> Personal Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Full Name *', name: 'name', icon: User },
                { label: "Father's Name *", name: 'fatherName', icon: User },
                { label: "Mother's Name *", name: 'motherName', icon: User },
                { label: 'NID Number *', name: 'nidNumber', icon: FileText }
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-semibold text-[#0A3D91] mb-2">{f.label}</label>
                  <div className="relative">
                    <f.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D0A96A]" />
                    <input
                      value={form[f.name]}
                      onChange={update(f.name)}
                      className="w-full border border-[#E5E0D5] rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                      required
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Professional */}
          <section className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
            <h4 className="text-lg font-bold text-[#0A3D91] mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5" /> Professional Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: 'Designation *', name: 'designation', icon: Briefcase },
                { label: 'Company *', name: 'company', icon: Building2 }
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-semibold text-[#0A3D91] mb-2">{f.label}</label>
                  <div className="relative">
                    <f.icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D0A96A]" />
                    <input
                      value={form[f.name]}
                      onChange={update(f.name)}
                      className="w-full border border-[#E5E0D5] rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                      required
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
            <h4 className="text-lg font-bold text-[#0A3D91] mb-6 flex items-center gap-2">
              <Phone className="h-5 w-5" /> Contact Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Cell Phone Number *</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D0A96A]" />
                  <input
                    value={form.cellPhone}
                    onChange={update('cellPhone')}
                    className="w-full border border-[#E5E0D5] rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#0A3D91] mb-2">WhatsApp Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D0A96A]" />
                  <input
                    value={form.whatsappNumber}
                    onChange={update('whatsappNumber')}
                    className="w-full border border-[#E5E0D5] rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Email Address *</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D0A96A]" />
                  <input
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    className="w-full border border-[#E5E0D5] rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                    required
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Address */}
          <section className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
            <h4 className="text-lg font-bold text-[#0A3D91] mb-6 flex items-center gap-2">
              <MapPin className="h-5 w-5" /> Address Information
            </h4>
            <div className="space-y-6">
              {[
                { label: 'Present Address *', name: 'presentAddress' },
                { label: 'Permanent Address *', name: 'permanentAddress' },
                { label: 'Company Address *', name: 'companyAddress' }
              ].map((f) => (
                <div key={f.name}>
                  <label className="block text-sm font-semibold text-[#0A3D91] mb-2">{f.label}</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-4 w-5 h-5 text-[#D0A96A]" />
                    <textarea
                      rows={3}
                      value={form[f.name]}
                      onChange={update(f.name)}
                      className="w-full border border-[#E5E0D5] rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white resize-vertical"
                      required
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Membership Category */}
          <section className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
            <h4 className="text-lg font-bold text-[#0A3D91] mb-6 flex items-center gap-2">
              <Award className="h-5 w-5" /> Membership Category
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {membershipCategories.map((cat) => (
                <label key={cat} className="flex items-center gap-3 p-4 border border-[#E5E0D5] rounded-xl cursor-pointer hover:bg-[#0A3D91]/5 transition-colors bg-white">
                  <input
                    type="checkbox"
                    checked={form.membershipCategory.includes(cat)}
                    onChange={() => toggleCategory(cat)}
                    className="w-5 h-5 text-[#0A3D91] bg-gray-100 border-gray-300 rounded focus:ring-[#0A3D91] focus:ring-2"
                  />
                  <span className="text-sm font-medium text-[#0A3D91]">{cat}</span>
                </label>
              ))}
            </div>
          </section>

          {/* Product/Service Types */}
          <section className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
            <h4 className="text-lg font-bold text-[#0A3D91] mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5" /> Product / Service Types
            </h4>
            <div className="space-y-4">
              {form.productServiceTypes.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-sm w-6 text-[#6B7280] font-medium">{i + 1}.</span>
                  <div className="relative flex-1">
                    <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D0A96A]" />
                    <input
                      value={s}
                      onChange={(e) => updateService(i, e.target.value)}
                      className="w-full border border-[#E5E0D5] rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                      placeholder={`Product/Service ${i + 1}`}
                    />
                  </div>
                  {form.productServiceTypes.length > 3 && (
                    <button
                      type="button"
                      onClick={() => removeService(i)}
                      className="px-3 py-2 text-[#B91C1C] border border-[#B91C1C] rounded-xl hover:bg-[#B91C1C]/10 transition-colors text-sm font-medium"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={() => addService()}
                className="mt-2 text-[#0A3D91] hover:text-[#08306B] text-sm font-semibold flex items-center gap-2"
              >
                <PlusCircle className="h-4 w-4" />
                Add service
              </button>
            </div>
          </section>

          {/* Network Companies */}
          <section className="bg-[#FDF6E9] p-6 rounded-2xl border border-[#E5E0D5]">
            <h4 className="text-lg font-bold text-[#0A3D91] mb-6 flex items-center gap-2">
              <Globe className="h-5 w-5" /> Companies Within My Network
            </h4>
            <div className="space-y-6">
              {form.networkCompanies.map((c, i) => (
                <div key={i} className="p-6 border border-[#E5E0D5] rounded-2xl bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-semibold text-[#0A3D91] text-lg">Company {i + 1}</div>
                    {form.networkCompanies.length > 3 && (
                      <button
                        type="button"
                        onClick={() => removeCompany(i)}
                        className="px-3 py-2 text-[#B91C1C] border border-[#B91C1C] rounded-xl hover:bg-[#B91C1C]/10 transition-colors text-sm font-medium"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Company Name</label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D0A96A]" />
                        <input
                          placeholder="Company Name"
                          value={c.name}
                          onChange={(e) => updateCompany(i, 'name', e.target.value)}
                          className="w-full border border-[#E5E0D5] rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Contact Person</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D0A96A]" />
                        <input
                          placeholder="Contact Person"
                          value={c.contactPerson}
                          onChange={(e) => updateCompany(i, 'contactPerson', e.target.value)}
                          className="w-full border border-[#E5E0D5] rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Designation</label>
                      <div className="relative">
                        <Award className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D0A96A]" />
                        <input
                          placeholder="Designation"
                          value={c.designation}
                          onChange={(e) => updateCompany(i, 'designation', e.target.value)}
                          className="w-full border border-[#E5E0D5] rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[#0A3D91] mb-2">Contact Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#D0A96A]" />
                        <input
                          placeholder="Contact Number"
                          value={c.contactNumber}
                          onChange={(e) => updateCompany(i, 'contactNumber', e.target.value)}
                          className="w-full border border-[#E5E0D5] rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0A3D91] focus:border-[#0A3D91] bg-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={() => addCompany()}
                className="mt-2 text-[#0A3D91] hover:text-[#08306B] text-sm font-semibold flex items-center gap-2"
              >
                <PlusCircle className="h-4 w-4" />
                Add company
              </button>
            </div>
          </section>
        </div>

        <div className="px-8 py-6 bg-[#FBF8F3] border-t border-[#E5E0D5] flex justify-end gap-3 sticky bottom-0">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 rounded-xl border border-[#E5E0D5] text-[#6B7280] hover:bg-[#6B7280]/5 transition-colors font-semibold"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-3 bg-gradient-to-r from-[#0A3D91] to-[#08306B] text-white rounded-xl hover:from-[#08306B] hover:to-[#0A3D91] transition-all duration-300 flex items-center gap-2 font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="h-4 w-4" />}
            {submitting ? 'Saving...' : 'Save Application'}
          </button>
        </div>
      </motion.form>
    </div>
  );
}
