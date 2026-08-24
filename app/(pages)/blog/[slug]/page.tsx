import Link from 'next/link';
import { COLORS, BLOG_POSTS } from '@/lib/constants';

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '28px', marginBottom: '16px' }}>Post Not Found</h1>
        <p style={{ color: COLORS.textMuted, marginBottom: '24px' }}>
          Sorry, the blog post you are looking for does not exist.
        </p>
        <Link
          href="/blog"
          style={{
            color: COLORS.gold,
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Back to Blog
        </Link>
      </div>
    );
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

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
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h1
            style={{
              fontSize: '44px',
              marginBottom: '24px',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            {post.title}
          </h1>
          <p style={{ fontSize: '18px', color: COLORS.textMuted, lineHeight: 1.6 }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* Hero Image */}
          {post.image && (
            <div
              style={{
                width: '100%',
                height: '400px',
                background: COLORS.darkGray,
                border: `1px solid ${COLORS.border}`,
                borderRadius: '4px',
                marginBottom: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ fontSize: '48px' }}>📷</div>
            </div>
          )}

          {/* Article Body */}
          <article
            style={{
              fontSize: '16px',
              lineHeight: 1.8,
              color: COLORS.text,
            }}
          >
            <div style={{ marginBottom: '32px' }}>
              <h2
                style={{
                  fontSize: '28px',
                  marginBottom: '16px',
                  color: COLORS.white,
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                {post.title}
              </h2>
              <p>{post.excerpt}</p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <p style={{ marginBottom: '16px' }}>
                {post.content}
              </p>
            </div>

            <div
              style={{
                background: COLORS.darkGray,
                border: `1px solid ${COLORS.border}`,
                padding: '24px',
                borderRadius: '4px',
                marginBottom: '32px',
              }}
            >
              <p style={{ fontSize: '14px', color: COLORS.textMuted }}>
                <strong style={{ color: COLORS.gold }}>Key Takeaway:</strong> {post.excerpt}
              </p>
            </div>
          </article>

          {/* Author */}
          <div
            style={{
              background: COLORS.darkGray,
              border: `1px solid ${COLORS.border}`,
              padding: '32px',
              borderRadius: '4px',
              marginBottom: '48px',
            }}
          >
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  background: COLORS.dark,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '28px',
                }}
              >
                ✦
              </div>
              <div>
                <h4 style={{ fontSize: '16px', marginBottom: '4px', color: COLORS.white }}>
                  Joshua Kenny
                </h4>
                <p style={{ fontSize: '13px', color: COLORS.textMuted }}>
                  Creative director at Nocturne Studio. Obsessed with detail, design, and delivering results.
                </p>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h3
                style={{
                  fontSize: '24px',
                  marginBottom: '32px',
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Related Articles
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '24px',
                }}
              >
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    style={{ textDecoration: 'none' }}
                  >
                    <div
                      style={{
                        background: COLORS.darkGray,
                        border: `1px solid ${COLORS.border}`,
                        padding: '24px',
                        borderRadius: '4px',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = COLORS.gold;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = COLORS.border;
                      }}
                    >
                      <p style={{ fontSize: '12px', color: COLORS.textMuted, marginBottom: '8px' }}>
                        {new Date(relatedPost.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                      <h4
                        style={{
                          fontSize: '16px',
                          marginBottom: '12px',
                          color: COLORS.white,
                          fontFamily: "'Cormorant Garamond', serif",
                        }}
                      >
                        {relatedPost.title}
                      </h4>
                      <div style={{ fontSize: '12px', color: COLORS.textMuted }}>
                        Read →
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
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
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '32px',
              marginBottom: '16px',
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Ready to Start Your Project?
          </h2>
          <p style={{ fontSize: '15px', color: COLORS.textMuted, marginBottom: '32px' }}>
            Let's discuss how we can help your brand shine.
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
