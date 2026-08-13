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
            About Nocturne
          </h1>
          <p style={{ fontSize: '16px', color: COLORS.textMuted, maxWidth: '600px', margin: '0 auto' }}>
            We're a team of designers, developers, and strategists building premium digital experiences.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '80px',
              alignItems: 'center',
            }}
          >
            {/* Content */}
            <div>
              <h2
                style={{
                  fontSize: '36px',
                  marginBottom: '24px',
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Joshua Okonkwo
              </h2>
              <p style={{ fontSize: '14px', color: COLORS.text, lineHeight: 1.8, marginBottom: '16px' }}>
                Founder & Creative Director at Nocturne. Based in Lagos, Nigeria.
              </p>
              <p style={{ fontSize: '14px', color: COLORS.text, lineHeight: 1.8, marginBottom: '16px' }}>
                I started Nocturne because I was frustrated with generic digital work. Most agencies use templates, chase trends, and compromise quality for speed. I wanted to build something different.
              </p>
              <p style={{ fontSize: '14px', color: COLORS.text, lineHeight: 1.8, marginBottom: '16px' }}>
                Every project at Nocturne is built from scratch. Every line of code is intentional. Every design decision is deliberate. We don't cut corners because luxury is in the details.
              </p>
              <p style={{ fontSize: '14px', color: COLORS.text, lineHeight: 1.8 }}>
                I'm a Computer Science student, full-stack developer, and creative strategist. I obsess over performance, accessibility, and user experience. I build things that matter.
              </p>
            </div>

            {/* Image Placeholder */}
            <div
              style={{
                background: `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldLight} 100%)`,
                height: '400px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: COLORS.dark,
                fontSize: '14px',
              }}
            >
              Photo placeholder
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section
        style={{
          padding: '80px 24px',
          background: COLORS.darkGray,
          borderTop: `1px solid ${COLORS.border}`,
          borderBottom: `1px solid ${COLORS.border}`,
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '80px' }}>
            <h2
              style={{
                fontSize: '36px',
                marginBottom: '24px',
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Our Mission
            </h2>
            <p style={{ fontSize: '16px', color: COLORS.text, lineHeight: 1.8, maxWidth: '600px' }}>
              To create premium digital experiences that transform businesses. We believe in craft, precision, and building relationships—not just transactions. Every project deserves excellence.
            </p>
          </div>

          {/* Core Values */}
          <div>
            <h2
              style={{
                fontSize: '36px',
                marginBottom: '40px',
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Core Values
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '32px',
              }}
            >
              {[
                {
                  title: 'Craft Matters',
                  description: 'Every detail counts. We sweat the small stuff because that's where excellence lives.',
                },
                {
                  title: 'Luxury in Details',
                  description: 'Premium isn't about price. It's about intentionality. Every decision serves a purpose.',
                },
                {
                  title: 'Clarity Over Complexity',
                  description: 'Simplicity is harder than complexity. We build what people actually need.',
                },
                {
                  title: 'Relationships Are Currency',
                  description: 'We're not vendors. We're partners. Your success is our success.',
                },
                {
                  title: 'Speed Without Sacrifice',
                  description: 'Fast doesn't mean rushed. We deliver quickly without compromising quality.',
                },
                {
                  title: 'Own Your Work',
                  description: 'We stand behind everything we build. We're proud of what leaves our studio.',
                },
              ].map((value, i) => (
                <div
                  key={i}
                  style={{
                    background: COLORS.dark,
                    border: `1px solid ${COLORS.border}`,
                    padding: '24px',
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
                  <p style={{ fontSize: '13px', color: COLORS.text, lineHeight: 1.6 }}>
                    {value.description}
                  </p>
                </div>
              ))}
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '32px',
            }}
          >
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We listen. We ask questions. We understand your business, goals, and constraints.',
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'We plan. We create a clear roadmap with timelines, deliverables, and success metrics.',
              },
              {
                step: '03',
                title: 'Design',
                description: 'We create. Beautiful, functional designs that serve your users and business.',
              },
              {
                step: '04',
                title: 'Build',
                description: 'We code. Clean, performant, secure development with rigorous testing.',
              },
              {
                step: '05',
                title: 'Launch',
                description: 'We deploy. Final review, optimization, and a smooth go-live.',
              },
              {
                step: '06',
                title: 'Support',
                description: 'We monitor. 30 days of post-launch support and optimization.',
              },
            ].map((phase, i) => (
              <div
                key={i}
                style={{
                  background: COLORS.darkGray,
                  border: `1px solid ${COLORS.border}`,
                  padding: '32px',
                  borderRadius: '4px',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    fontSize: '36px',
                    fontWeight: 'bold',
                    color: COLORS.gold,
                    marginBottom: '16px',
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {phase.step}
                </div>
                <h3
                  style={{
                    fontSize: '18px',
                    marginBottom: '12px',
                    color: COLORS.white,
                    fontFamily: "'Cormorant Garamond', serif",
                  }}
                >
                  {phase.title}
                </h3>
                <p style={{ fontSize: '13px', color: COLORS.text, lineHeight: 1.6 }}>
                  {phase.description}
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
            Ready to Work Together?
          </h2>
          <p style={{ fontSize: '16px', color: COLORS.textMuted, marginBottom: '32px' }}>
            Let's build something premium. Reach out and let's talk about your project.
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
