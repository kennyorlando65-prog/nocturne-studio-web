import Link from 'next/link';
import { COLORS, TESTIMONIALS, PROJECTS } from '@/lib/constants';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          padding: '120px 24px',
          textAlign: 'center',
          background: `linear-gradient(135deg, ${COLORS.dark} 0%, ${COLORS.darkGray} 100%)`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: '64px',
              color: COLORS.white,
              marginBottom: '24px',
              fontFamily: "'Cormorant Garamond', serif",
              letterSpacing: '3px',
              fontWeight: 700,
            }}
          >
            NOCTURNE
          </h1>
          <p
            style={{
              fontSize: '20px',
              color: COLORS.gold,
              marginBottom: '32px',
              maxWidth: '600px',
              margin: '0 auto 32px',
            }}
          >
            Premium digital experiences. Web design, branding, visual effects, production.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link
              href="/work"
              style={{
                background: COLORS.gold,
                color: COLORS.dark,
                padding: '14px 32px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              See Our Work
            </Link>
            <Link
              href="/contact"
              style={{
                border: `1px solid ${COLORS.gold}`,
                color: COLORS.gold,
                padding: '14px 32px',
                borderRadius: '4px',
                fontSize: '14px',
                fontWeight: 'bold',
                textDecoration: 'none',
              }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
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
            Selected Work
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '32px',
            }}
          >
            {PROJECTS.map((project) => (
              <Link
                key={project.id}
                href={`/work/${project.id}`}
                style={{
                  background: COLORS.darkGray,
                  border: `1px solid ${COLORS.border}`,
                  padding: '16px',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  color: COLORS.text,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
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
                <div
                  style={{
                    background: 'linear-gradient(135deg, #666 0%, #333 100%)',
                    height: '180px',
                    borderRadius: '4px',
                    marginBottom: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: COLORS.textMuted,
                  }}
                >
                  {project.name}
                </div>
                <h3 style={{ fontSize: '18px', marginBottom: '8px', color: COLORS.white }}>
                  {project.name}
                </h3>
                <p style={{ fontSize: '13px', color: COLORS.textMuted, marginBottom: '12px' }}>
                  {project.description}
                </p>
                <p style={{ fontSize: '12px', color: COLORS.gold }}>View Case Study →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
            What Clients Say
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
            }}
          >
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.id}
                style={{
                  background: COLORS.dark,
                  border: `1px solid ${COLORS.border}`,
                  padding: '24px',
                  borderRadius: '4px',
                }}
              >
                <p
                  style={{
                    fontSize: '14px',
                    fontStyle: 'italic',
                    color: COLORS.text,
                    marginBottom: '16px',
                    lineHeight: 1.8,
                  }}
                >
                  "{testimonial.quote}"
                </p>
                <p style={{ fontSize: '13px', fontWeight: 'bold', color: COLORS.white }}>
                  {testimonial.author}
                </p>
                <p style={{ fontSize: '12px', color: COLORS.textMuted }}>
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '36px',
              marginBottom: '24px',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Ready to Build Something
            <span style={{ color: COLORS.gold }}> Premium?</span>
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '32px', color: COLORS.textMuted }}>
            Let's talk about your project. We'll listen, we'll understand, we'll deliver.
          </p>
          <Link
            href="/contact"
            style={{
              background: COLORS.gold,
              color: COLORS.dark,
              padding: '16px 40px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 'bold',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
