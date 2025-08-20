import React, { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const ShowContactData = () => {
  const axiosSecure = useAxiosSecure();
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch contact data on component mount
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axiosSecure.get('/contacts');
        setContacts(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.response?.data?.message || 'Failed to fetch contact data');
        setIsLoading(false);
        Swal.fire({
          title: 'Error!',
          text: error.response?.data?.message || 'Failed to fetch contact data',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#dc2626',
        });
      }
    };
    fetchContacts();
  }, [axiosSecure]);

  // Handle delete contact
  const handleDelete = async (id, name) => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: `You are about to delete the contact from ${name}. This action cannot be undone.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc2626',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel',
    });

    if (result.isConfirmed) {
      try {
        await axiosSecure.delete(`/contacts/${id}`);
        setContacts(contacts.filter((contact) => contact._id !== id));
        Swal.fire({
          title: 'Deleted!',
          text: 'Contact has been deleted successfully.',
          icon: 'success',
          confirmButtonColor: '#2563eb',
        });
      } catch (error) {
        Swal.fire({
          title: 'Error!',
          text: error.response?.data?.message || 'Failed to delete contact.',
          icon: 'error',
          confirmButtonColor: '#dc2626',
        });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Form Submissions</h2>

        {error && (
          <div className="text-red-600 text-sm mb-4 text-center" role="alert">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="text-center text-gray-600">Loading...</div>
        ) : contacts.length === 0 ? (
          <div className="text-center text-gray-600">No contact submissions found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-lg">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="py-3 px-4 text-left text-sm font-semibold">Name</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">Email</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">Subject</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">Message</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">Submitted At</th>
                  <th className="py-3 px-4 text-left text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact._id} className="border-b hover:bg-gray-100">
                    <td className="py-3 px-4 text-gray-700">{contact.name}</td>
                    <td className="py-3 px-4 text-gray-700">{contact.email}</td>
                    <td className="py-3 px-4 text-gray-700">{contact.subject}</td>
                    <td className="py-3 px-4 text-gray-700 max-w-xs truncate">{contact.message}</td>
                    <td className="py-3 px-4 text-gray-700">
                      {new Date(contact.createdAt).toLocaleString()}
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => handleDelete(contact._id, contact.name)}
                        className="text-red-600 hover:text-red-800"
                        title="Delete contact"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShowContactData;