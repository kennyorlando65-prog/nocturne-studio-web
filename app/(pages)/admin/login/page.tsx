'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { COLORS } from '@/lib/constants';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const result = await response.json();

      if (response.ok && result.token) {
        // Store token in localStorage
        localStorage.setItem('admin_token', result.token);
        localStorage.setItem('admin_token_expiry', new Date(Date.now() + 3600000).toISOString());

        // Redirect to dashboard
        router.push('/admin/dashboard');
      } else {
        setError(result.error || 'Invalid credentials');
      }
    } catch (err) {
      setError('Failed to login. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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
      <div style={{ maxWidth: '400px', width: '100%', padding: '24px' }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h1
            style={{
              fontSize: '28px',
              color: COLORS.gold,
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: '2px',
              marginBottom: '8px',
            }}
          >
            NOCTURNE
          </h1>
          <p style={{ fontSize: '12px', color: COLORS.textMuted, textTransform: 'uppercase' }}>
            Admin Dashboard
          </p>
        </div>

        {/* Login Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            background: COLORS.darkGray,
            border: `1px solid ${COLORS.border}`,
            padding: '32px',
            borderRadius: '4px',
          }}
        >
          <h2
            style={{
              fontSize: '20px',
              marginBottom: '24px',
              color: COLORS.white,
              textAlign: 'center',
            }}
          >
            Login
          </h2>

          {/* Password Input */}
          <div style={{ marginBottom: '24px' }}>
            <label
              htmlFor="password"
              style={{
                display: 'block',
                fontSize: '12px',
                color: COLORS.textMuted,
                marginBottom: '8px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
              }}
            >
              Admin Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter password"
              style={{
                width: '100%',
                padding: '12px',
                background: COLORS.dark,
                border: `1px solid ${COLORS.border}`,
                color: COLORS.text,
                borderRadius: '4px',
                fontSize: '14px',
                fontFamily: 'inherit',
                boxSizing: 'border-box',
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
                fontSize: '12px',
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
              padding: '12px',
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
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* Security Note */}
        <p
          style={{
            textAlign: 'center',
            fontSize: '11px',
            color: COLORS.textMuted,
            marginTop: '20px',
          }}
        >
          Your connection is secure. Do not share your password.
        </p>
      </div>
    </div>
  );
}
