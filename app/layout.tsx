import type { Metadata } from 'next';
import { SITE_NAME, SITE_DESCRIPTION, COLORS } from '@/lib/constants';
import './globals.css';

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  viewport: 'width=device-width, initial-scale=1',
  themeColor: COLORS.dark,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Outfit:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          background: COLORS.dark,
          color: COLORS.text,
          fontFamily: "'Outfit', sans-serif",
          margin: 0,
          padding: 0,
          lineHeight: '1.6',
        }}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer
      style={{
        background: COLORS.darkGray,
        borderTop: `1px solid ${COLORS.border}`,
        padding: '48px 24px',
        marginTop: '80px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '40px',
        }}
      >
        {/* Brand */}
        <div>
          <h3
            style={{
              color: COLORS.gold,
              fontSize: '18px',
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: '1px',
              marginBottom: '16px',
            }}
          >
            NOCTURNE STUDIO
          </h3>
          <p style={{ fontSize: '13px', color: COLORS.textMuted }}>
            Premium digital experiences. Web design, branding, production.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ color: COLORS.gold, fontSize: '13px', marginBottom: '12px' }}>LINKS</h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '8px' }}>
              <a href="/services" style={{ color: COLORS.text, textDecoration: 'none', fontSize: '13px' }}>
                Services
              </a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="/work" style={{ color: COLORS.text, textDecoration: 'none', fontSize: '13px' }}>
                Work
              </a>
            </li>
            <li style={{ marginBottom: '8px' }}>
              <a href="/blog" style={{ color: COLORS.text, textDecoration: 'none', fontSize: '13px' }}>
                Blog
              </a>
            </li>
            <li>
              <a href="/about" style={{ color: COLORS.text, textDecoration: 'none', fontSize: '13px' }}>
                About
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ color: COLORS.gold, fontSize: '13px', marginBottom: '12px' }}>CONTACT</h4>
          <p style={{ fontSize: '13px', color: COLORS.text, marginBottom: '8px' }}>
            <a href="mailto:kennyorlando65@gmail.com" style={{ color: COLORS.gold, textDecoration: 'none' }}>
              kennyorlando65@gmail.com
            </a>
          </p>
          <p style={{ fontSize: '13px', color: COLORS.text }}>
            <a href="https://wa.me/2347025689062" style={{ color: COLORS.gold, textDecoration: 'none' }}>
              +234 702 568 9062
            </a>
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1200px',
          margin: '40px auto 0',
          padding: '24px 0',
          borderTop: `1px solid ${COLORS.border}`,
          fontSize: '12px',
          color: COLORS.textMuted,
          textAlign: 'center',
        }}
      >
        <p>
          Copyright © {new Date().getFullYear()} Nocturne Studio. All rights reserved. | Designed and built with luxury.
        </p>
      </div>
    </footer>
  );
}
