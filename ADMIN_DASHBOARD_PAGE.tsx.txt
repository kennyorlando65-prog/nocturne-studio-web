'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { COLORS } from '@/lib/constants';

interface Submission {
  id: string;
  name: string;
  email: string;
  company?: string;
  project_type: string;
  budget: string;
  timeline: string;
  message: string;
  status: 'new' | 'contacted' | 'closed';
  notes?: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({ total: 0, new: 0, contacted: 0, closed: 0 });
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [filterStatus, setFilterStatus] = useState<'all' | 'new' | 'contacted' | 'closed'>('new');
  const router = useRouter();

  useEffect(() => {
    // Check auth
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    // Fetch submissions
    fetchSubmissions(token);
  }, [router]);

  const fetchSubmissions = async (token: string) => {
    try {
      const response = await fetch('/api/admin/submissions', {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!response.ok) {
        if (response.status === 401) {
          localStorage.removeItem('admin_token');
          router.push('/admin/login');
          return;
        }
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      setSubmissions(data.data || []);

      // Calculate stats
      if (data.data) {
        const newCount = data.data.filter((s: Submission) => s.status === 'new').length;
        const contactedCount = data.data.filter((s: Submission) => s.status === 'contacted').length;
        const closedCount = data.data.filter((s: Submission) => s.status === 'closed').length;

        setStats({
          total: data.data.length,
          new: newCount,
          contacted: contactedCount,
          closed: closedCount,
        });
      }
    } catch (err) {
      setError('Failed to load submissions');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.push('/admin/login');
  };

  const handleStatusChange = async (submissionId: string, newStatus: 'contacted' | 'closed') => {
    const token = localStorage.getItem('admin_token');
    if (!token) return;

    try {
      const response = await fetch('/api/admin/submissions', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: submissionId,
          status: newStatus,
        }),
      });

      if (response.ok) {
        // Refresh submissions
        fetchSubmissions(token);
        setSelectedSubmission(null);
      } else {
        setError('Failed to update status');
      }
    } catch (err) {
      setError('Error updating submission');
      console.error(err);
    }
  };

  const filteredSubmissions = submissions.filter((s) => filterStatus === 'all' || s.status === filterStatus);

  if (loading) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: COLORS.dark,
        }}
      >
        <p style={{ color: COLORS.text }}>Loading...</p>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: COLORS.dark }}>
      {/* Header */}
      <div
        style={{
          background: COLORS.darkGray,
          borderBottom: `1px solid ${COLORS.border}`,
          padding: '20px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '20px',
            color: COLORS.gold,
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: '2px',
            margin: 0,
          }}
        >
          NOCTURNE ADMIN
        </h1>
        <button
          onClick={handleLogout}
          style={{
            background: 'transparent',
            border: `1px solid ${COLORS.gold}`,
            color: COLORS.gold,
            padding: '8px 16px',
            borderRadius: '4px',
            fontSize: '12px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Logout
        </button>
      </div>

      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 24px' }}>
        {/* Stats */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '16px',
            marginBottom: '40px',
          }}
        >
          {[
            { label: 'Total', value: stats.total, color: COLORS.text },
            { label: 'New', value: stats.new, color: COLORS.gold },
            { label: 'Contacted', value: stats.contacted, color: COLORS.gold },
            { label: 'Closed', value: stats.closed, color: COLORS.text },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: COLORS.darkGray,
                border: `1px solid ${COLORS.border}`,
                padding: '20px',
                borderRadius: '4px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '24px', fontWeight: 'bold', color: stat.color, marginBottom: '4px' }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '12px', color: COLORS.textMuted }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filter */}
        <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          {['all', 'new', 'contacted', 'closed'].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status as any)}
              style={{
                padding: '8px 16px',
                borderRadius: '4px',
                border: `1px solid ${filterStatus === status ? COLORS.gold : COLORS.border}`,
                background: filterStatus === status ? COLORS.gold : 'transparent',
                color: filterStatus === status ? COLORS.dark : COLORS.text,
                fontSize: '12px',
                fontWeight: 'bold',
                cursor: 'pointer',
                textTransform: 'capitalize',
              }}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Submissions Table */}
        {error && (
          <div
            style={{
              background: '#c91c1c',
              color: '#fff',
              padding: '12px',
              borderRadius: '4px',
              marginBottom: '24px',
            }}
          >
            {error}
          </div>
        )}

        {filteredSubmissions.length === 0 ? (
          <div
            style={{
              background: COLORS.darkGray,
              border: `1px solid ${COLORS.border}`,
              padding: '40px',
              textAlign: 'center',
              borderRadius: '4px',
            }}
          >
            <p style={{ color: COLORS.textMuted }}>No submissions found.</p>
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '13px',
              }}
            >
              <thead>
                <tr style={{ borderBottom: `1px solid ${COLORS.border}` }}>
                  <th style={{ padding: '12px', textAlign: 'left', color: COLORS.gold', fontWeight: 'bold' }}>
                    Name
                  </th>
                  <th style={{ padding: '12px', textAlign: 'left', color: COLORS.gold', fontWeight: 'bold' }}>
                    Email
                  </th>
                  <th style={{ padding: '12px', textAlign: 'left', color: COLORS.gold', fontWeight: 'bold' }}>
                    Project Type
                  </th>
                  <th style={{ padding: '12px', textAlign: 'left', color: COLORS.gold', fontWeight: 'bold' }}>
                    Budget
                  </th>
                  <th style={{ padding: '12px', textAlign: 'left', color: COLORS.gold', fontWeight: 'bold' }}>
                    Status
                  </th>
                  <th style={{ padding: '12px', textAlign: 'left', color: COLORS.gold', fontWeight: 'bold' }}>
                    Date
                  </th>
                  <th style={{ padding: '12px', textAlign: 'left', color: COLORS.gold', fontWeight: 'bold' }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredSubmissions.map((submission) => (
                  <tr
                    key={submission.id}
                    style={{
                      borderBottom: `1px solid ${COLORS.border}`,
                      background: submission.status === 'new' ? 'rgba(184, 151, 90, 0.05)' : 'transparent',
                    }}
                  >
                    <td style={{ padding: '12px', color: COLORS.text }}>{submission.name}</td>
                    <td style={{ padding: '12px', color: COLORS.text }}>{submission.email}</td>
                    <td style={{ padding: '12px', color: COLORS.text }}>{submission.project_type}</td>
                    <td style={{ padding: '12px', color: COLORS.text }}>{submission.budget}</td>
                    <td style={{ padding: '12px' }}>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          fontWeight: 'bold',
                          textTransform: 'capitalize',
                          background:
                            submission.status === 'new'
                              ? COLORS.gold
                              : submission.status === 'contacted'
                                ? '#3b82f6'
                                : '#10b981',
                          color: '#1a1a1a',
                        }}
                      >
                        {submission.status}
                      </span>
                    </td>
                    <td style={{ padding: '12px', color: COLORS.textMuted }}>
                      {new Date(submission.created_at).toLocaleDateString()}
                    </td>
                    <td style={{ padding: '12px' }}>
                      <button
                        onClick={() => setSelectedSubmission(submission)}
                        style={{
                          background: 'transparent',
                          border: `1px solid ${COLORS.gold}`,
                          color: COLORS.gold,
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '11px',
                          cursor: 'pointer',
                          fontWeight: 'bold',
                        }}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedSubmission && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '24px',
          }}
          onClick={() => setSelectedSubmission(null)}
        >
          <div
            style={{
              background: COLORS.darkGray,
              border: `1px solid ${COLORS.border}`,
              borderRadius: '4px',
              padding: '32px',
              maxWidth: '600px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 style={{ fontSize: '20px', marginBottom: '24px', color: COLORS.white }}>Submission Details</h2>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '4px' }}>Name</div>
              <div style={{ color: COLORS.text }}>{selectedSubmission.name}</div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '4px' }}>Email</div>
              <div style={{ color: COLORS.text }}>{selectedSubmission.email}</div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '4px' }}>Company</div>
              <div style={{ color: COLORS.text }}>{selectedSubmission.company || 'N/A'}</div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '4px' }}>Project Type</div>
              <div style={{ color: COLORS.text }}>{selectedSubmission.project_type}</div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '4px' }}>Budget</div>
              <div style={{ color: COLORS.text }}>{selectedSubmission.budget}</div>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '4px' }}>Timeline</div>
              <div style={{ color: COLORS.text }}>{selectedSubmission.timeline}</div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <div style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '4px' }}>Message</div>
              <div style={{ color: COLORS.text, lineHeight: 1.6 }}>{selectedSubmission.message}</div>
            </div>

            {/* Status Update */}
            {selectedSubmission.status !== 'closed' && (
              <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
                <button
                  onClick={() => handleStatusChange(selectedSubmission.id, 'contacted')}
                  style={{
                    flex: 1,
                    padding: '10px',
                    background: '#3b82f6',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                >
                  Mark Contacted
                </button>
                <button
                  onClick={() => handleStatusChange(selectedSubmission.id, 'closed')}
                  style={{
                    flex: 1,
                    padding: '10px',
                    background: '#10b981',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                >
                  Mark Closed
                </button>
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={() => setSelectedSubmission(null)}
              style={{
                width: '100%',
                padding: '10px',
                background: COLORS.gold,
                color: COLORS.dark,
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '12px',
                fontWeight: 'bold',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
