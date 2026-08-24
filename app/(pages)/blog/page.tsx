import Link from 'next/link';
import { COLORS, BLOG_POSTS } from '@/lib/constants';

export default function Blog() {
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
            Our Blog
          </h1>
          <p style={{ fontSize: '16px', color: COLORS.textMuted, maxWidth: '600px', margin: '0 auto' }}>
            Insights, stories, and strategies from the Nocturne Studio team. Everything we learn about design, branding, and business.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {BLOG_POSTS.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 24px' }}>
              <p style={{ fontSize: '16px', color: COLORS.textMuted }}>
                No blog posts yet. Check back soon!
              </p>
            </div>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '40px',
              }}
            >
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{
                      background: COLORS.darkGray,
                      border: `1px solid ${COLORS.border}`,
                      borderRadius: '4px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
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
                    {/* Featured Image Area */}
                    <div
                      style={{
                        height: '200px',
                        background: COLORS.dark,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderBottom: `1px solid ${COLORS.border}`,
                        fontSize: '48px',
                      }}
                    >
                      📝
                    </div>

                    {/* Content */}
                    <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <p
                        style={{
                          fontSize: '12px',
                          color: COLORS.textMuted,
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          marginBottom: '12px',
                        }}
                      >
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>

                      <h3
                        style={{
                          fontSize: '20px',
                          marginBottom: '12px',
                          color: COLORS.white,
                          fontFamily: "'Cormorant Garamond', serif",
                          flex: 1,
                        }}
                      >
                        {post.title}
                      </h3>

                      <p
                        style={{
                          fontSize: '14px',
                          color: COLORS.textMuted,
                          lineHeight: 1.6,
                          marginBottom: '16px',
                        }}
                      >
                        {post.excerpt}
                      </p>

                      <div
                        style={{
                          fontSize: '12px',
                          color: COLORS.gold,
                          fontWeight: 'bold',
                          marginTop: 'auto',
                        }}
                      >
                        Read Article →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
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
            Stay Updated
          </h2>
          <p style={{ fontSize: '15px', color: COLORS.textMuted, marginBottom: '32px' }}>
            Get insights on design, branding, and business straight to your inbox.
          </p>
          <p style={{ fontSize: '13px', color: COLORS.textMuted }}>
            Follow us on social media or get in touch to collaborate.
          </p>
        </div>
      </section>
    </div>
  );
}
