import Link from 'next/link';
import { COLORS } from '@/lib/constants';

export default function About() {
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
            About Nocturne Studio
          </h1>
          <p style={{ fontSize: '16px', color: COLORS.textMuted, maxWidth: '600px', margin: '0 auto' }}>
            We're a premium creative agency obsessed with detail. Every project is a collaboration. Every design is intentional.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <h2
                style={{
                  fontSize: '36px',
                  marginBottom: '24px',
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Our Story
              </h2>
              <p style={{ fontSize: '15px', color: COLORS.textMuted, lineHeight: 1.8, marginBottom: '16px' }}>
                Nocturne Studio was born from a simple belief: great design shouldn't be complicated. In 2023, we started with one mission—deliver premium creative work to businesses that deserve it.
              </p>
              <p style={{ fontSize: '15px', color: COLORS.textMuted, lineHeight: 1.8, marginBottom: '16px' }}>
                We work with founders, entrepreneurs, and brands that refuse to settle for mediocre. Your brand is unique. Your story deserves to be told beautifully.
              </p>
              <p style={{ fontSize: '15px', color: COLORS.textMuted, lineHeight: 1.8 }}>
                Every project we take on becomes an obsession. We don't just design—we think. We strategize. We deliver work that moves.
              </p>
            </div>
            <div
              style={{
                background: COLORS.darkGray,
                border: `1px solid ${COLORS.border}`,
                padding: '40px',
                borderRadius: '4px',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✦</div>
              <blockquote
                style={{
                  fontSize: '18px',
                  fontStyle: 'italic',
                  color: COLORS.gold,
                  marginBottom: '16px',
                  lineHeight: 1.6,
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                "Design is not just what it looks like and feels like. Design is how it works."
              </blockquote>
              <p style={{ fontSize: '13px', color: COLORS.textMuted }}>— Steve Jobs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        style={{
          padding: '80px 24px',
          background: COLORS.darkGray,
          borderTop: `1px solid ${COLORS.border}`,
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '36px',
              marginBottom: '48px',
              textAlign: 'center',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            What We Believe In
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '40px',
            }}
          >
            {[
              {
                title: 'Craft Matters',
                description: 'Every detail counts. We sweat the small stuff because that is where excellence lives.',
              },
              {
                title: 'Luxury in Details',
                description: 'Premium design is about subtlety. We use restraint, precision, and intention in every decision.',
              },
              {
                title: 'Collaboration Over Ego',
                description: 'Your vision matters. We listen, we challenge, we deliver. This is a partnership.',
              },
              {
                title: 'Timeless Over Trendy',
                description: 'Trends fade. We create designs that feel fresh today and timeless tomorrow.',
              },
              {
                title: 'Strategy Before Aesthetics',
                description: 'Beautiful design without strategy is decoration. We always start with purpose.',
              },
              {
                title: 'Results Matter',
                description: 'We measure success by your growth. If it does not work, we do not rest.',
              },
            ].map((value, i) => (
              <div
                key={i}
                style={{
                  background: COLORS.dark,
                  border: `1px solid ${COLORS.border}`,
                  padding: '32px',
                  borderRadius: '4px',
                }}
              >
                <h3
                  style={{
                    fontSize: '18px',
                    marginBottom: '12px',
                    color: COLORS.gold,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {value.title}
                </h3>
                <p style={{ fontSize: '14px', color: COLORS.textMuted, lineHeight: 1.6 }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '36px',
              marginBottom: '24px',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            The Team
          </h2>
          <p style={{ fontSize: '15px', color: COLORS.textMuted, maxWidth: '600px', margin: '0 auto 48px' }}>
            Small team, big ideas. We are designers, developers, and strategists obsessed with your success.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '40px',
            }}
          >
            {[
              {
                name: 'Joshua Kenny',
                role: 'Founder & Creative Director',
                bio: 'Designs brands that tell stories. Based in Lagos.',
              },
            ].map((member, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: '120px',
                    height: '120px',
                    background: COLORS.darkGray,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: '50%',
                    margin: '0 auto 16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '40px',
                  }}
                >
                  ✦
                </div>
                <h3
                  style={{
                    fontSize: '16px',
                    marginBottom: '4px',
                    color: COLORS.white,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {member.name}
                </h3>
                <p style={{ fontSize: '13px', color: COLORS.gold, marginBottom: '8px' }}>
                  {member.role}
                </p>
                <p style={{ fontSize: '13px', color: COLORS.textMuted }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section
        style={{
          padding: '80px 24px',
          background: COLORS.darkGray,
          borderTop: `1px solid ${COLORS.border}`,
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '36px',
              marginBottom: '48px',
              textAlign: 'center',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Why Partner With Us
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
            }}
          >
            {[
              { icon: '✦', label: 'Experience', text: 'Years of delivering premium work to ambitious brands.' },
              { icon: '→', label: 'Strategy', text: 'We do not just design. We strategize. We think.' },
              { icon: '✓', label: 'Quality', text: 'Every pixel matters. Every interaction is intentional.' },
              { icon: '↑', label: 'Results', text: 'Your growth is our success. We measure impact.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px' }}>
                <div
                  style={{
                    fontSize: '24px',
                    color: COLORS.gold,
                    fontWeight: 'bold',
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '16px', marginBottom: '8px', color: COLORS.white }}>
                    {item.label}
                  </h3>
                  <p style={{ fontSize: '13px', color: COLORS.textMuted }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '36px',
              marginBottom: '24px',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Let's Create Together
          </h2>
          <p style={{ fontSize: '15px', color: COLORS.textMuted, marginBottom: '32px' }}>
            Ready to start your next project? Let's talk about your vision and bring it to life.
          </p>
          <Link
            href="/contact"
            style={{
              background: COLORS.gold,
              color: COLORS.dark,
              padding: '14px 32px',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '14px',
              display: 'inline-block',
            }}
          >
            Start a Project
          </Link>
        </div>
      </section>
    </div>
  );
          }
