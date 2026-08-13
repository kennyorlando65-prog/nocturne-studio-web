import Link from 'next/link';
import { COLORS, PROJECTS } from '@/lib/constants';

export default function Work() {
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
            Premium digital experiences. Each project tells a story of strategy, design, and precision execution.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px',
            }}
          >
            {PROJECTS.map((project) => (
              <Link
                key={project.id}
                href={`/work/${project.id}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                  transition: 'all 0.3s ease',
                }}
              >
                <div
                  style={{
                    background: COLORS.darkGray,
                    border: `1px solid ${COLORS.border}`,
                    borderRadius: '4px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = COLORS.gold;
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-8px)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = COLORS.border;
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}
                >
                  {/* Project Image */}
                  <div
                    style={{
                      background: `linear-gradient(135deg, #666 0%, #333 100%)`,
                      height: '200px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: COLORS.textMuted,
                      fontSize: '14px',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    {/* Category Tag */}
                    <div
                      style={{
                        fontSize: '11px',
                        color: COLORS.gold,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        marginBottom: '12px',
                        fontWeight: 'bold',
                      }}
                    >
                      {project.category}
                    </div>

                    {/* Project Name */}
                    <h3
                      style={{
                        fontSize: '20px',
                        fontFamily: "'Cormorant Garamond', serif",
                        marginBottom: '8px',
                        color: COLORS.white,
                      }}
                    >
                      {project.name}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: '13px',
                        color: COLORS.textMuted,
                        marginBottom: '16px',
                        flexGrow: 1,
                      }}
                    >
                      {project.description}
                    </p>

                    {/* Tier */}
                    <p
                      style={{
                        fontSize: '12px',
                        color: COLORS.gold,
                        borderTop: `1px solid ${COLORS.border}`,
                        paddingTop: '12px',
                      }}
                    >
                      Started at: <strong>{project.tier}</strong>
                    </p>

                    {/* CTA */}
                    <div
                      style={{
                        marginTop: '16px',
                        fontSize: '13px',
                        color: COLORS.gold,
                        fontWeight: 'bold',
                      }}
                    >
                      View Case Study →
                    </div>
                  </div>
                </div>
              </Link>
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
            Have a Project in Mind?
          </h2>
          <p style={{ fontSize: '16px', color: COLORS.textMuted, marginBottom: '32px' }}>
            Let's build something premium together. Whether it's web, branding, or production, we're ready.
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
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
