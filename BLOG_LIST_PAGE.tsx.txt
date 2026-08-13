import Link from 'next/link';
import { COLORS, BLOG_POSTS } from '@/lib/constants';

export default function Blog() {
  // Group posts by category
  const categories = Array.from(new Set(BLOG_POSTS.map((p) => p.category)));

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
            Insights
          </h1>
          <p style={{ fontSize: '16px', color: COLORS.textMuted, maxWidth: '600px', margin: '0 auto' }}>
            Design, development, and branding insights from our team. Thoughts on web trends, process, and building premium digital experiences.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '32px',
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                }}
              >
                <div
                  style={{
                    background: COLORS.darkGray,
                    border: `1px solid ${COLORS.border}`,
                    padding: '24px',
                    borderRadius: '4px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
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
                  {/* Category */}
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
                    {post.category}
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '20px',
                      fontFamily: "'Cormorant Garamond', serif",
                      marginBottom: '12px',
                      color: COLORS.white,
                      flexGrow: 1,
                    }}
                  >
                    {post.title}
                  </h3>

                  {/* Meta */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', paddingTop: '16px', borderTop: `1px solid ${COLORS.border}` }}>
                    <div style={{ fontSize: '12px', color: COLORS.textMuted }}>
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </div>
                    <div style={{ fontSize: '12px', color: COLORS.textMuted }}>
                      {post.readTime} min read
                    </div>
                  </div>

                  {/* CTA */}
                  <div
                    style={{
                      marginTop: '16px',
                      fontSize: '13px',
                      color: COLORS.gold,
                      fontWeight: 'bold',
                    }}
                  >
                    Read Article →
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
            Ready to Build?
          </h2>
          <p style={{ fontSize: '16px', color: COLORS.textMuted, marginBottom: '32px' }}>
            These insights come from real projects. Let's build something premium together.
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
