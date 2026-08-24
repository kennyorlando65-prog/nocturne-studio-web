import type { Metadata } from 'next';
import { SITE_NAME, SITE_DESCRIPTION, COLORS } from '@/lib/constants';
import './globals.css';

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          background: COLORS.dark,
          color: COLORS.text,
          fontFamily: "'Inter', system-ui, sans-serif",
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            background: COLORS.darkGray,
            borderTop: `1px solid ${COLORS.border}`,
            padding: '48px 24px',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ fontSize: '14px', color: COLORS.textMuted, marginBottom: '16px' }}>
              © {new Date().getFullYear()} Nocturne Studio. All rights reserved.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>
              <a
                href="mailto:kennyorlando65@gmail.com"
                style={{
                  fontSize: '13px',
                  color: COLORS.gold,
                  textDecoration: 'none',
                }}
              >
                Email
              </a>
              <a
                href="https://wa.me/2347025689062"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '13px',
                  color: COLORS.gold,
                  textDecoration: 'none',
                }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
