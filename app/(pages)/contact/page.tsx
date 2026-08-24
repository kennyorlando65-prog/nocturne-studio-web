'use client';

import { useState } from 'react';
import { COLORS } from '@/lib/constants';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Form error:', err);
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
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '48px',
              marginBottom: '16px',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Get in Touch
          </h1>
          <p style={{ fontSize: '16px', color: COLORS.textMuted, maxWidth: '600px', margin: '0 auto' }}>
            Have a project in mind? We would love to hear about it. Let's create something amazing together.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          {submitted && (
            <div
              style={{
                background: '#1a5f3c',
                border: '1px solid #2d9b5f',
                color: '#90ee90',
                padding: '16px',
                borderRadius: '4px',
                marginBottom: '32px',
                textAlign: 'center',
              }}
            >
              Thank you! We will get back to you soon.
            </div>
          )}

          {error && (
            <div
              style={{
                background: '#5f1a1a',
                border: '1px solid #9b2d2d',
                color: '#ee9090',
                padding: '16px',
                borderRadius: '4px',
                marginBottom: '32px',
                textAlign: 'center',
              }}
            >
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div style={{ marginBottom: '24px' }}>
              <label
                htmlFor="name"
                style={{
                  display: 'block',
                  fontSize: '13px',
                  color: COLORS.textMuted,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '8px',
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
                placeholder="Your name"
                style={{
                  width: '100%',
                  padding: '12px',
                  background: COLORS.darkGray,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: '4px',
                  color: COLORS.text,
                  fontSize: '14px',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: '24px' }}>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  fontSize: '13px',
                  color: COLORS.textMuted,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '8px',
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
                placeholder="your@email.com"
                style={{
                  width: '100%',
                  padding: '12px',
                  background: COLORS.darkGray,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: '4px',
                  color: COLORS.text,
                  fontSize: '14px',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Message */}
            <div style={{ marginBottom: '32px' }}>
              <label
                htmlFor="message"
                style={{
                  display: 'block',
                  fontSize: '13px',
                  color: COLORS.textMuted,
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '8px',
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
                placeholder="What do you need? What are your goals?"
                rows={6}
                style={{
                  width: '100%',
                  padding: '12px',
                  background: COLORS.darkGray,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: '4px',
                  color: COLORS.text,
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  resize: 'vertical',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                background: COLORS.gold,
                color: COLORS.dark,
                padding: '14px',
                borderRadius: '4px',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '14px',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {/* Contact Info */}
          <div
            style={{
              marginTop: '60px',
              paddingTop: '40px',
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            <h3
              style={{
                fontSize: '18px',
                marginBottom: '24px',
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Other Ways to Reach Us
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '24px',
              }}
            >
              <div>
                <p style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '8px' }}>
                  EMAIL
                </p>
                <a
                  href="mailto:kennyorlando65@gmail.com"
                  style={{
                    color: COLORS.gold,
                    textDecoration: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  kennyorlando65@gmail.com
                </a>
              </div>
              <div>
                <p style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '8px' }}>
                  WHATSAPP
                </p>
                <a
                  href="https://wa.me/2347025689062"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: COLORS.gold,
                    textDecoration: 'none',
                    fontWeight: 'bold',
                  }}
                >
                  +234 702 5689 062
                </a>
              </div>
              <div>
                <p style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '8px' }}>
                  LOCATION
                </p>
                <p style={{ color: COLORS.text, fontWeight: 'bold' }}>Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '80px 24px',
          background: COLORS.darkGray,
          textAlign: 'center',
          borderTop: `1px solid ${COLORS.border}`,
        }}
      >
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '32px',
              marginBottom: '16px',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Let's Make It Happen
          </h2>
          <p style={{ fontSize: '15px', color: COLORS.textMuted }}>
            Whether you have a question or are ready to start your project, we are here to help.
          </p>
        </div>
      </section>
    </div>
  );
                }
