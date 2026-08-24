import Link from 'next/link';
import { COLORS, PROJECTS } from '@/lib/constants';

export default function Portfolio() {
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
            Our Work
          </h1>
          <p style={{ fontSize: '16px', color: COLORS.textMuted, maxWidth: '600px', margin: '0 auto' }}>
            Premium projects. Ambitious brands. Real results. Here is what we have built.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '40px',
            }}
          >
            {PROJECTS.map((project) => (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    background: COLORS.darkGray,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: '4px',
                    overflow: 'hidden',
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
                  {/* Image Placeholder */}
                  <div
                    style={{
                      width: '100%',
                      height: '220px',
                      background: COLORS.dark,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '48px',
                      borderBottom: `1px solid ${COLORS.border}`,
                    }}
                  >
                    🎨
                  </div>

                  {/* Content */}
                  <div style={{ padding: '32px' }}>
                    <p
                      style={{
                        fontSize: '12px',
                        color: COLORS.gold,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '12px',
                      }}
                    >
                      {project.category}
                    </p>

                    <h3
                      style={{
                        fontSize: '20px',
                        marginBottom: '12px',
                        color: COLORS.white,
                        fontFamily: "'Cormorant Garamond', serif",
                      }}
                    >
                      {project.title}
                    </h3>

                    <p
                      style={{
                        fontSize: '14px',
                        color: COLORS.textMuted,
                        lineHeight: 1.6,
                        marginBottom: '16px',
                      }}
                    >
                      {project.description}
                    </p>

                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingTop: '16px',
                        borderTop: `1px solid ${COLORS.border}`,
                      }}
                    >
                      <p style={{ fontSize: '12px', color: COLORS.textMuted }}>
                        {project.year}
                      </p>
                      <p style={{ fontSize: '12px', color: COLORS.gold, fontWeight: 'bold' }}>
                        View Case →
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{
          padding: '80px 24px',
          background: COLORS.darkGray,
          borderTop: `1px solid ${COLORS.border}`,
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '40px',
            }}
          >
            <div>
              <p style={{ fontSize: '36px', fontWeight: 'bold', color: COLORS.gold, marginBottom: '8px' }}>
                {PROJECTS.length}+
              </p>
              <p style={{ fontSize: '14px', color: COLORS.textMuted }}>
                Projects Completed
              </p>
            </div>
            <div>
              <p style={{ fontSize: '36px', fontWeight: 'bold', color: COLORS.gold, marginBottom: '8px' }}>
                3+
              </p>
              <p style={{ fontSize: '14px', color: COLORS.textMuted }}>
                Years of Experience
              </p>
            </div>
            <div>
              <p style={{ fontSize: '36px', fontWeight: 'bold', color: COLORS.gold, marginBottom: '8px' }}>
                100%
              </p>
              <p style={{ fontSize: '14px', color: COLORS.textMuted }}>
                Client Satisfaction
              </p>
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
            Our Process
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '32px',
            }}
          >
            {[
              { step: '01', title: 'Discovery', desc: 'We listen and understand your vision.' },
              { step: '02', title: 'Strategy', desc: 'We plan the approach and timeline.' },
              { step: '03', title: 'Design', desc: 'We create beautiful, functional designs.' },
              { step: '04', title: 'Deliver', desc: 'We launch and support your success.' },
            ].map((item, i) => (
              <div key={i}>
                <p
                  style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: COLORS.gold,
                    marginBottom: '12px',
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {item.step}
                </p>
                <h3
                  style={{
                    fontSize: '18px',
                    marginBottom: '8px',
                    color: COLORS.white,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: '13px', color: COLORS.textMuted }}>
                  {item.desc}
                </p>
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
          <p style={{ fontSize: '15px', color: COLORS.textMuted, marginBottom: '32px' }}>
            Let's create something amazing together. Your next project starts here.
          </p>
          <a
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
          </a>
        </div>
      </section>
    </div>
  );
          }
