import Link from 'next/link';
import { COLORS, PORTFOLIO_ITEMS } from '@/lib/constants';

export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = PORTFOLIO_ITEMS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '16px' }}>Project Not Found</h1>
        <p style={{ color: COLORS.textMuted, marginBottom: '24px' }}>
          Sorry, the project you are looking for does not exist.
        </p>
        <Link
          href="/work"
          style={{
            color: COLORS.gold,
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Back to Work
        </Link>
      </div>
    );
  }

  const relatedProjects = PORTFOLIO_ITEMS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          padding: '80px 24px',
          background: COLORS.darkGray,
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p
            style={{
              fontSize: '12px',
              color: COLORS.textMuted,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '12px',
            }}
          >
            {project.category}
          </p>
          <h1
            style={{
              fontSize: '48px',
              marginBottom: '24px',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            {project.title}
          </h1>
          <p style={{ fontSize: '18px', color: COLORS.textMuted, lineHeight: 1.6, marginBottom: '24px' }}>
            {project.description}
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '32px',
              paddingTop: '24px',
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            <div>
              <p style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '8px' }}>
                Client
              </p>
              <p style={{ fontSize: '16px', color: COLORS.white, fontWeight: 'bold' }}>
                {project.client}
              </p>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '8px' }}>
                Services
              </p>
              <p style={{ fontSize: '14px', color: COLORS.text }}>
                {Array.isArray(project.services) ? project.services.join(', ') : project.services}
              </p>
            </div>
            <div>
              <p style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '8px' }}>
                Year
              </p>
              <p style={{ fontSize: '16px', color: COLORS.white, fontWeight: 'bold' }}>
                {project.year}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Overview */}
          <div style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: '28px',
                marginBottom: '20px',
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              The Challenge
            </h2>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: COLORS.text,
                marginBottom: '16px',
              }}
            >
              {project.description}
            </p>
          </div>

          {/* Solution */}
          <div style={{ marginBottom: '60px' }}>
            <h2
              style={{
                fontSize: '28px',
                marginBottom: '20px',
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Our Solution
            </h2>
            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.8,
                color: COLORS.text,
                marginBottom: '16px',
              }}
            >
              We approached this project with a focus on {Array.isArray(project.services) ? project.services[0] : project.services} and user-centric design. Every decision was made with the client's goals in mind.
            </p>
          </div>

          {/* Image Gallery */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              marginBottom: '60px',
            }}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  height: '300px',
                  background: COLORS.darkGray,
                  border: `1px solid ${COLORS.border}`,
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '40px',
                }}
              >
                📸
              </div>
            ))}
          </div>

          {/* Results */}
          <div
            style={{
              background: COLORS.darkGray,
              border: `1px solid ${COLORS.border}`,
              padding: '40px',
              borderRadius: '4px',
              marginBottom: '60px',
            }}
          >
            <h3
              style={{
                fontSize: '24px',
                marginBottom: '24px',
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Results & Impact
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '24px',
              }}
            >
              <div>
                <p style={{ fontSize: '28px', fontWeight: 'bold', color: COLORS.gold, marginBottom: '8px' }}>
                  +120%
                </p>
                <p style={{ fontSize: '13px', color: COLORS.textMuted }}>
                  Increase in engagement
                </p>
              </div>
              <div>
                <p style={{ fontSize: '28px', fontWeight: 'bold', color: COLORS.gold, marginBottom: '8px' }}>
                  3M+
                </p>
                <p style={{ fontSize: '13px', color: COLORS.textMuted }}>
                  Monthly impressions
                </p>
              </div>
              <div>
                <p style={{ fontSize: '28px', fontWeight: 'bold', color: COLORS.gold, marginBottom: '8px' }}>
                  4.9/5
                </p>
                <p style={{ fontSize: '13px', color: COLORS.textMuted }}>
                  Client satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
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
                fontSize: '32px',
                marginBottom: '48px',
                textAlign: 'center',
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              More Work
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
              }}
            >
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.slug}
                  href={`/work/${relatedProject.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{
                      background: COLORS.dark,
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: '4px',
                      overflow: 'hidden',
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
                    <div
                      style={{
                        height: '200px',
                        background: COLORS.darkGray,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '40px',
                      }}
                    >
                      🎨
                    </div>
                    <div style={{ padding: '24px' }}>
                      <p style={{ fontSize: '12px', color: COLORS.gold, marginBottom: '8px', textTransform: 'uppercase' }}>
                        {relatedProject.category}
                      </p>
                      <h3
                        style={{
                          fontSize: '18px',
                          marginBottom: '8px',
                          color: COLORS.white,
                          fontFamily: "'Cormorant Garamond', serif",
                        }}
                      >
                        {relatedProject.title}
                      </h3>
                      <p style={{ fontSize: '13px', color: COLORS.textMuted }}>
                        {relatedProject.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
            Ready to Start?
          </h2>
          <p style={{ fontSize: '15px', color: COLORS.textMuted, marginBottom: '32px' }}>
            Let's discuss how we can help your brand achieve similar results.
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
