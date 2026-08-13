import Link from 'next/link';
import { COLORS, BLOG_POSTS } from '@/lib/constants';
import { notFound } from 'next/navigation';

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, different post)
  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.id !== post.id
  ).slice(0, 2);

  return (
    <div>
      {/* Breadcrumb */}
      <div style={{ padding: '20px 24px', background: COLORS.darkGray, borderBottom: `1px solid ${COLORS.border}` }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '12px', color: COLORS.textMuted }}>
          <Link href="/blog" style={{ color: COLORS.gold, textDecoration: 'none' }}>
            Blog
          </Link>
          <span style={{ margin: '0 8px' }}>/</span>
          <span>{post.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section
        style={{
          background: `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldLight} 100%)`,
          color: COLORS.dark,
          padding: '60px 24px',
        }}
      >
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            style={{
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '16px',
              opacity: 0.8,
              fontWeight: 'bold',
            }}
          >
            {post.category}
          </div>
          <h1
            style={{
              fontSize: '42px',
              fontFamily: "'Cormorant Garamond', serif",
              marginBottom: '16px',
            }}
          >
            {post.title}
          </h1>
          <div style={{ fontSize: '13px', opacity: 0.8 }}>
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}{' '}
            • {post.readTime} min read
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div
            style={{
              fontSize: '15px',
              lineHeight: 1.8,
              color: COLORS.text,
            }}
          >
            {/* Placeholder: Replace with actual markdown content */}
            <p>
              This is a blog post about <strong>{post.title.toLowerCase()}</strong>. The full content should be written in markdown and parsed here.
            </p>
            <p>
              Each blog post includes:
            </p>
            <ul style={{ marginLeft: '20px' }}>
              <li>Clear structure with headings</li>
              <li>Readable typography</li>
              <li>Related posts at the bottom</li>
              <li>Call-to-action to contact us</li>
            </ul>
            <p>
              Content serves a purpose. Every article should educate, inspire, or provide value to the reader.
            </p>
          </div>

          {/* Divider */}
          <div style={{ margin: '80px 0', borderTop: `1px solid ${COLORS.border}` }} />

          {/* Author Bio */}
          <div
            style={{
              background: COLORS.darkGray,
              border: `1px solid ${COLORS.border}`,
              padding: '32px',
              borderRadius: '4px',
              marginBottom: '80px',
            }}
          >
            <h3
              style={{
                fontSize: '16px',
                marginBottom: '12px',
                color: COLORS.gold,
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              About the Author
            </h3>
            <p style={{ fontSize: '13px', color: COLORS.text, lineHeight: 1.6 }}>
              Joshua Okonkwo is the founder and creative director at Nocturne Studio. He designs and builds premium digital experiences. Thoughts here reflect his passion for craft, strategy, and building things that matter.
            </p>
          </div>

          {/* CTA */}
          <div
            style={{
              background: `linear-gradient(135deg, ${COLORS.gold} 0%, ${COLORS.goldLight} 100%)`,
              color: COLORS.dark,
              padding: '48px',
              borderRadius: '4px',
              textAlign: 'center',
              marginBottom: '80px',
            }}
          >
            <h3
              style={{
                fontSize: '24px',
                marginBottom: '12px',
                fontFamily: "'Cormorant Garamond', serif",
              }}
            >
              Ready to Build?
            </h3>
            <p style={{ fontSize: '14px', marginBottom: '20px', opacity: 0.9 }}>
              If you enjoyed this article and want to work together, let's talk.
            </p>
            <Link
              href="/contact"
              style={{
                background: COLORS.dark,
                color: COLORS.gold,
                padding: '12px 24px',
                borderRadius: '4px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '13px',
                display: 'inline-block',
              }}
            >
              Start Your Project
            </Link>
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div>
              <h2
                style={{
                  fontSize: '28px',
                  marginBottom: '32px',
                  fontFamily: "'Cormorant Garamond', serif",
                }}
              >
                Related Articles
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '24px',
                }}
              >
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    style={{
                      textDecoration: 'none',
                      color: 'inherit',
                    }}
                  >
                    <div
                      style={{
                        background: COLORS.darkGray,
                        border: `1px solid ${COLORS.border}`,
                        padding: '20px',
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
                      <div
                        style={{
                          fontSize: '11px',
                          color: COLORS.gold,
                          textTransform: 'uppercase',
                          letterSpacing: '1px',
                          marginBottom: '8px',
                          fontWeight: 'bold',
                        }}
                      >
                        {relatedPost.category}
                      </div>
                      <h4
                        style={{
                          fontSize: '16px',
                          fontFamily: "'Cormorant Garamond', serif",
                          marginBottom: '8px',
                          color: COLORS.white,
                        }}
                      >
                        {relatedPost.title}
                      </h4>
                      <div style={{ fontSize: '12px', color: COLORS.textMuted' }}>
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
    </div>
  );
}
