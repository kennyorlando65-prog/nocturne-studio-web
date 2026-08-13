import Link from 'next/link';
import { COLORS, SERVICES } from '@/lib/constants';

export default function Services() {
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
            What We Do
          </h1>
          <p style={{ fontSize: '16px', color: COLORS.textMuted, maxWidth: '600px', margin: '0 auto' }}>
            We specialize in creating premium digital experiences. Every service is crafted with attention to detail and delivered with precision.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px',
            }}
          >
            {SERVICES.map((service) => (
              <div
                key={service.id}
                style={{
                  background: COLORS.darkGray,
                  border: `1px solid ${COLORS.border}`,
                  padding: '40px',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = COLORS.gold;
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = COLORS.border;
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    fontSize: '36px',
                    marginBottom: '20px',
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: '20px',
                    marginBottom: '12px',
                    fontFamily: "'Cormorant Garamond', serif",
                    color: COLORS.white,
                  }}
                >
                  {service.name}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '14px', color: COLORS.textMuted, marginBottom: '24px', lineHeight: 1.8 }}>
                  {service.description}
                </p>

                {/* Price & Timeline */}
                <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: `1px solid ${COLORS.border}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '12px', color: COLORS.textMuted, textTransform: 'uppercase', letterSpacing: '1px' }}>
                      Starting
                    </span>
                    <span style={{ fontSize: '20px', fontWeight: 'bold', color: COLORS.gold }}>
                      {service.startingPrice}
                    </span>
                  </div>
                  <p style={{ fontSize: '12px', color: COLORS.textMuted }}>
                    Timeline: {service.timeline}
                  </p>
                </div>

                {/* What's Included */}
                <div style={{ marginBottom: '24px' }}>
                  <h4 style={{ fontSize: '12px', color: COLORS.gold, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    What's Included
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {service.includes.map((item, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: '13px',
                          color: COLORS.text,
                          padding: '6px 0',
                          borderBottom: i < service.includes.length - 1 ? `1px solid ${COLORS.border}` : 'none',
                        }}
                      >
                        ✓ {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <Link
                  href="/contact"
                  style={{
                    display: 'block',
                    background: COLORS.gold,
                    color: COLORS.dark,
                    padding: '12px',
                    borderRadius: '4px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '13px',
                    transition: 'opacity 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '0.9';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.opacity = '1';
                  }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bundles */}
      <section
        style={{
          padding: '80px 24px',
          background: COLORS.darkGray,
          borderTop: `1px solid ${COLORS.border}`,
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '36px',
              marginBottom: '48px',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Service Bundles
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
            }}
          >
            <div
              style={{
                background: COLORS.dark,
                border: `1px solid ${COLORS.border}`,
                padding: '32px',
                borderRadius: '4px',
              }}
            >
              <h3 style={{ fontSize: '18px', marginBottom: '12px', color: COLORS.white }}>
                Startup Package
              </h3>
              <p style={{ fontSize: '13px', color: COLORS.textMuted, marginBottom: '16px' }}>
                Brand Identity + Website
              </p>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: COLORS.gold, marginBottom: '16px' }}>
                ₦300,000
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: COLORS.text', marginBottom: '20px', textAlign: 'left' }}>
                <li style={{ marginBottom: '8px' }}>✓ Logo & brand identity</li>
                <li style={{ marginBottom: '8px' }}>✓ Full website design</li>
                <li style={{ marginBottom: '8px' }}>✓ 6-10 weeks</li>
                <li>✓ 30 days support</li>
              </ul>
              <Link
                href="/contact"
                style={{
                  display: 'block',
                  border: `1px solid ${COLORS.gold}`,
                  color: COLORS.gold,
                  padding: '10px',
                  borderRadius: '4px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '12px',
                }}
              >
                Get Started
              </Link>
            </div>

            <div
              style={{
                background: COLORS.dark,
                border: `2px solid ${COLORS.gold}`,
                padding: '32px',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  background: COLORS.gold,
                  color: COLORS.dark,
                  padding: '6px 12px',
                  borderRadius: '4px',
                  display: 'inline-block',
                  fontSize: '11px',
                  fontWeight: 'bold',
                  marginBottom: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                }}
              >
                Most Popular
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '12px', color: COLORS.white }}>
                Growth Package
              </h3>
              <p style={{ fontSize: '13px', color: COLORS.textMuted, marginBottom: '16px' }}>
                Brand + Website + Social Media
              </p>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: COLORS.gold, marginBottom: '16px' }}>
                ₦500,000
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: COLORS.text', marginBottom: '20px', textAlign: 'left' }}>
                <li style={{ marginBottom: '8px' }}>✓ Complete brand identity</li>
                <li style={{ marginBottom: '8px' }}>✓ Full website</li>
                <li style={{ marginBottom: '8px' }}>✓ Social media setup</li>
                <li>✓ 8-12 weeks</li>
              </ul>
              <Link
                href="/contact"
                style={{
                  display: 'block',
                  background: COLORS.gold,
                  color: COLORS.dark,
                  padding: '10px',
                  borderRadius: '4px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '12px',
                }}
              >
                Get Started
              </Link>
            </div>

            <div
              style={{
                background: COLORS.dark,
                border: `1px solid ${COLORS.border}`,
                padding: '32px',
                borderRadius: '4px',
              }}
            >
              <h3 style={{ fontSize: '18px', marginBottom: '12px', color: COLORS.white }}>
                Premium Package
              </h3>
              <p style={{ fontSize: '13px', color: COLORS.textMuted, marginBottom: '16px' }}>
                Everything + Custom Features
              </p>
              <p style={{ fontSize: '20px', fontWeight: 'bold', color: COLORS.gold, marginBottom: '16px' }}>
                ₦800,000+
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', color: COLORS.text', marginBottom: '20px', textAlign: 'left' }}>
                <li style={{ marginBottom: '8px' }}>✓ Everything included</li>
                <li style={{ marginBottom: '8px' }}>✓ Custom integrations</li>
                <li style={{ marginBottom: '8px' }}>✓ Advanced animations</li>
                <li>✓ Ongoing support</li>
              </ul>
              <Link
                href="/contact"
                style={{
                  display: 'block',
                  border: `1px solid ${COLORS.gold}`,
                  color: COLORS.gold,
                  padding: '10px',
                  borderRadius: '4px',
                  textAlign: 'center',
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '12px',
                }}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '36px',
              marginBottom: '48px',
              textAlign: 'center',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            How We Work
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              { number: '01', title: 'Discovery', description: 'We listen. Goals, audience, constraints.' },
              { number: '02', title: 'Strategy', description: 'We plan. Approach, timeline, deliverables.' },
              { number: '03', title: 'Design', description: 'We create. Mockups, feedback, refinement.' },
              { number: '04', title: 'Build', description: 'We code. Development, testing, optimization.' },
              { number: '05', title: 'Launch', description: 'We deploy. Final review, go live.' },
              { number: '06', title: 'Support', description: 'We monitor. 30 days post-launch.' },
            ].map((step, i) => (
              <div
                key={i}
                style={{
                  textAlign: 'center',
                  padding: '24px',
                }}
              >
                <div
                  style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: COLORS.gold,
                    marginBottom: '12px',
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {step.number}
                </div>
                <h3
                  style={{
                    fontSize: '16px',
                    marginBottom: '8px',
                    color: COLORS.white,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: '13px', color: COLORS.textMuted }}>{step.description}</p>
              </div>
            ))}
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
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '36px',
              marginBottom: '24px',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Ready to Start?
          </h2>
          <p style={{ fontSize: '16px', color: COLORS.textMuted', marginBottom: '32px' }}>
            Let's talk about your project. We'll understand what you need and deliver beyond expectations.
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
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
