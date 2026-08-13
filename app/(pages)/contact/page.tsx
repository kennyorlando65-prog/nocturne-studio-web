'use client';

import { useState } from 'react';
import Link from 'next/link';
import { COLORS, FORM_FIELDS } from '@/lib/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', projectType: '', budget: '', timeline: '', message: '' });
      } else {
        setError(result.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to submit. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Header */}
      <section
        style={{
          padding: '80px 24px 40px',
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '48px',
              marginBottom: '16px',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Let's Work Together
          </h1>
          <p style={{ fontSize: '16px', color: COLORS.textMuted, maxWidth: '600px', margin: '0 auto' }}>
            Tell us about your project. We'll listen, understand your goals, and propose a solution tailored to your needs.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {submitted ? (
            <div
              style={{
                background: COLORS.darkGray,
                border: `1px solid ${COLORS.gold}`,
                padding: '48px',
                borderRadius: '4px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>✓</div>
              <h2
                style={{
                  fontSize: '24px',
                  marginBottom: '12px',
                  fontFamily: "'Cormorant Garamond', serif",
                  color: COLORS.white,
                }}
              >
                Thank You!
              </h2>
              <p style={{ fontSize: '14px', color: COLORS.text, marginBottom: '24px', lineHeight: 1.8 }}>
                We received your message and appreciate you reaching out. We'll review your project details and contact you within 24
                hours with next steps.
              </p>
              <Link
                href="/"
                style={{
                  color: COLORS.gold,
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: 'bold',
                }}
              >
                Back to Home →
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div style={{ marginBottom: '24px' }}>
                <label
                  htmlFor="name"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    color: COLORS.textMuted,
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: COLORS.darkGray,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.text,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              {/* Email */}
              <div style={{ marginBottom: '24px' }}>
                <label
                  htmlFor="email"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    color: COLORS.textMuted,
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: COLORS.darkGray,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.text,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              {/* Company */}
              <div style={{ marginBottom: '24px' }}>
                <label
                  htmlFor="company"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    color: COLORS.textMuted,
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: COLORS.darkGray,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.text,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                  }}
                />
              </div>

              {/* Project Type */}
              <div style={{ marginBottom: '24px' }}>
                <label
                  htmlFor="projectType"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    color: COLORS.textMuted,
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: COLORS.darkGray,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.text,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                  }}
                >
                  <option value="">Select a project type</option>
                  <option value="Web Design">Web Design</option>
                  <option value="Branding">Branding</option>
                  <option value="Production">Production</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>

              {/* Budget */}
              <div style={{ marginBottom: '24px' }}>
                <label
                  htmlFor="budget"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    color: COLORS.textMuted,
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: COLORS.darkGray,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.text,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                  }}
                >
                  <option value="">Select budget range</option>
                  <option value="₦50k-100k">₦50k - ₦100k</option>
                  <option value="₦100k-200k">₦100k - ₦200k</option>
                  <option value="₦200k-500k">₦200k - ₦500k</option>
                  <option value="₦500k+">₦500k+</option>
                </select>
              </div>

              {/* Timeline */}
              <div style={{ marginBottom: '24px' }}>
                <label
                  htmlFor="timeline"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    color: COLORS.textMuted,
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: COLORS.darkGray,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.text,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                  }}
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1-2 months">1-2 Months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              {/* Message */}
              <div style={{ marginBottom: '24px' }}>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '12px',
                    color: COLORS.textMuted,
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  Tell us about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: COLORS.darkGray,
                    border: `1px solid ${COLORS.border}`,
                    color: COLORS.text,
                    borderRadius: '4px',
                    fontSize: '14px',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                  }}
                />
              </div>

              {/* Error Message */}
              {error && (
                <div
                  style={{
                    background: '#c91c1c',
                    color: '#fff',
                    padding: '12px',
                    borderRadius: '4px',
                    marginBottom: '24px',
                    fontSize: '13px',
                  }}
                >
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                style={{
                  width: '100%',
                  padding: '14px',
                  background: loading ? COLORS.textMuted : COLORS.gold,
                  color: COLORS.dark,
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  transition: 'opacity 0.3s ease',
                }}
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Info */}
      <section
        style={{
          padding: '80px 24px',
          background: COLORS.darkGray,
          textAlign: 'center',
          borderTop: `1px solid ${COLORS.border}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '28px',
              marginBottom: '48px',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Other Ways to Reach Us
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px',
            }}
          >
            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '12px', color: COLORS.white }}>Email</h3>
              <a
                href="mailto:kennyorlando65@gmail.com"
                style={{
                  color: COLORS.gold,
                  textDecoration: 'none',
                  fontSize: '14px',
                }}
              >
                kennyorlando65@gmail.com
              </a>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '12px', color: COLORS.white }}>WhatsApp</h3>
              <a
                href="https://wa.me/2347025689062"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: COLORS.gold,
                  textDecoration: 'none',
                  fontSize: '14px',
                }}
              >
                +234 702 568 9062
              </a>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', marginBottom: '12px', color: COLORS.white }}>Response Time</h3>
              <p style={{ color: COLORS.text, fontSize: '14px' }}>Within 24 hours</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
