import Link from 'next/link';
import { COLORS, PROJECTS, TESTIMONIALS } from '@/lib/constants';
import { notFound } from 'next/navigation';

export default function CaseStudy({ params }: { params: { slug: string } }) {
  // Find project by slug (using id as slug for now)
  const project = PROJECTS.find((p) => p.id === params.slug);

  if (!project) {
    notFound();
  }

  // Get matching testimonial
  const testimonial = TESTIMONIALS.find((t) => t.id === project.id);

  // Get next project for navigation
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ padding: '20px 24px', background: COLORS.darkGray, borderBottom: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', fontSize: '12px', color: COLORS.textMuted }}>
          <Link href="/work" style={{ color: COLORS.gold, textDecoration: 'none' }}>
            Work
          </Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span>{project.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section
        style={{
          background: `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldLight} 100%)`,
          padding: '60px 24px',
          color: COLORS.dark,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '24px' }}>
            <div>
              <div
                style={{
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '8px',
                  opacity: 0.8,
                }}
              >
                {project.category}
              </div>
              <h1
                style={{
                  fontSize: '48px',
                  fontFamily: "'Cormorant Garamond', serif",
                  marginBottom: '12px',
                }}
              >
                {project.name}
              </h1>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '13px', marginBottom: '4px' }}>Project Tier</div>
              <div style={{ fontSize: '20px', fontWeight: 'bold' }}>{project.tier}</div>
            </div>
          </div>
          <p style={{ fontSize: '16px', maxWidth: '600px', lineHeight: 1.8 }}>{project.description}</p>
        </div>
      </section>

      {/* Hero Image */}
      <section
        style={{
          background: `linear-gradient(135deg, #666 0%, #333 100%)`,
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: COLORS.textMuted,
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
      </section>

      {/* Content */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              marginBottom: '80px',
            }}
          >
            {/* Left: Content */}
            <div>
              {/* Challenge */}
              <div style={{ marginBottom: '40px' }}>
                <h2
                  style={{
                    fontSize: '24px',
                    fontFamily: "'Cormorant Garamond', serif",
                    marginBottom: '16px',
                    color: COLORS.white,
                  }}
                >
                  The Challenge
                </h2>
                <p style={{ fontSize: '14px', color: COLORS.text, lineHeight: 1.8 }}>
                  The client faced significant operational challenges. Manual processes were inefficient, user experience was poor,
                  and there was no clear path to scale. We needed to understand their core needs and deliver a solution that would
                  transform their business.
                </p>
              </div>

              {/* Solution */}
              <div>
                <h2
                  style={{
                    fontSize: '24px',
                    fontFamily: "'Cormorant Garamond', serif",
                    marginBottom: '16px',
                    color: COLORS.white,
                  }}
                >
                  Our Solution
                </h2>
                <p style={{ fontSize: '14px', color: COLORS.text, lineHeight: 1.8 }}>
                  We designed a comprehensive digital solution that streamlined their operations. By combining thoughtful UX design,
                  robust backend development, and performance optimization, we created a platform that exceeded expectations. Every
                  detail was crafted with their users in mind.
                </p>
              </div>
            </div>

            {/* Right: Details */}
            <div>
              {/* Project Details */}
              <div
                style={{
                  background: COLORS.darkGray,
                  border: `1px solid ${COLORS.border}`,
                  padding: '32px',
                  borderRadius: '4px',
                  marginBottom: '24px',
                }}
              >
                <h3
                  style={{
                    fontSize: '16px',
                    marginBottom: '20px',
                    color: COLORS.white,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  Project Details
                </h3>

                <div style={{ marginBottom: '16px', borderBottom: `1px solid ${COLORS.border}`, paddingBottom: '16px' }}>
                  <div style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '4px', textTransform: 'uppercase' }}>
                    Role
                  </div>
                  <p style={{ fontSize: '13px', color: COLORS.text }}>Design, Development, Production</p>
                </div>

                <div style={{ marginBottom: '16px', borderBottom: `1px solid ${COLORS.border}`, paddingBottom: '16px' }}>
                  <div style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '4px', textTransform: 'uppercase' }}>
                    Timeline
                  </div>
                  <p style={{ fontSize: '13px', color: COLORS.text }}>8 weeks</p>
                </div>

                <div style={{ marginBottom: '16px', borderBottom: `1px solid ${COLORS.border}`, paddingBottom: '16px' }}>
                  <div style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '4px', textTransform: 'uppercase' }}>
                    Technologies
                  </div>
                  <p style={{ fontSize: '13px', color: COLORS.text }}>React, Node.js, Supabase, Vercel</p>
                </div>

                <div>
                  <div style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '4px', textTransform: 'uppercase' }}>
                    Live Project
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '13px',
                      color: COLORS.gold,
                      textDecoration: 'none',
                    }}
                  >
                    Visit Site →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics */}
          <div style={{ marginBottom: '80px', borderTop: `1px solid ${COLORS.border}`, paddingTop: '80px' }}>
            <h2
              style={{
                fontSize: '28px',
                fontFamily: "'Cormorant Garamond', serif",
                marginBottom: '40px',
                color: COLORS.white,
              }}
            >
              Results
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '32px',
              }}
            >
              {Object.entries(project.metrics).map(([key, value]) => (
                <div
                  key={key}
                  style={{
                    background: COLORS.darkGray,
                    border: `1px solid ${COLORS.border}`,
                    padding: '32px',
                    textAlign: 'center',
                    borderRadius: '4px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '36px',
                      fontWeight: 'bold',
                      color: COLORS.gold,
                      marginBottom: '12px',
                      fontFamily: "'Cormorant Garamond', serif",
                    }}
                  >
                    {value}
                  </div>
                  <div style={{ fontSize: '12px', color: COLORS.textMuted, textTransform: 'capitalize' }}>
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {testimonial && (
            <div
              style={{
                background: `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldLight} 100%)`,
                color: COLORS.dark,
                padding: '48px',
                borderRadius: '4px',
                marginBottom: '80px',
              }}
            >
              <p
                style={{
                  fontSize: '18px',
                  fontStyle: 'italic',
                  marginBottom: '20px',
                  lineHeight: 1.8,
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                "{testimonial.quote}"
              </p>
              <div>
                <p style={{ fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>{testimonial.author}</p>
                <p style={{ fontSize: '12px', opacity: 0.8 }}>{testimonial.role}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Next Project */}
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
              fontSize: '28px',
              marginBottom: '40px',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Next Project
          </h2>

          <Link
            href={`/work/${nextProject.id}`}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '40px',
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: '32px',
                  fontFamily: "'Cormorant Garamond', serif",
                  marginBottom: '12px',
                  color: COLORS.gold,
                }}
              >
                {nextProject.name}
              </h3>
              <p style={{ fontSize: '14px', color: COLORS.text, marginBottom: '20px' }}>
                {nextProject.description}
              </p>
              <div style={{ fontSize: '13px', color: COLORS.gold, fontWeight: 'bold' }}>
                View Case Study →
              </div>
            </div>

            <div
              style={{
                background: 'linear-gradient(135deg, #666 0%, #333 100%)',
                height: '300px',
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <img
                src={nextProject.image}
                alt={nextProject.name}
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
          </Link>
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
            Ready to Start Your Project?
          </h2>
          <p style={{ fontSize: '16px', color: COLORS.textMuted, marginBottom: '32px' }}>
            Let's create something premium. Contact us to discuss your vision.
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
