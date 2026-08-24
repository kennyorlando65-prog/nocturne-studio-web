export const SITE_NAME = 'Nocturne Studio';
export const SITE_DESCRIPTION = 'Premium creative agency. Brand identity, web design, social media. Based in Lagos.';

export const COLORS = {
  dark: '#0a0a0a',
  darkGray: '#1a1a1a',
  border: '#2a2a2a',
  text: '#e0e0e0',
  textMuted: '#999999',
  gold: '#d4af37',
  white: '#ffffff',
};

export const SERVICES = [
  {
    id: 1,
    name: 'Brand Identity',
    icon: '✦',
    description: 'Logo design, color palette, typography, and brand guidelines that define your visual identity.',
    startingPrice: '₦80,000',
    timeline: '2-4 weeks',
    includes: ['Logo design', 'Brand guidelines', 'Color palette', 'Typography system'],
  },
  {
    id: 2,
    name: 'Web Design',
    icon: '→',
    description: 'Beautiful, responsive websites that convert. Designed for your audience, built for performance.',
    startingPrice: '₦150,000',
    timeline: '4-8 weeks',
    includes: ['Responsive design', 'UI/UX optimization', 'Performance focused', 'Mobile first'],
  },
  {
    id: 3,
    name: 'Social Media',
    icon: '↑',
    description: 'Strategic content creation and management. We build communities, not just followers.',
    startingPrice: '₦50,000/month',
    timeline: 'Ongoing',
    includes: ['Content strategy', 'Monthly posts', 'Community management', 'Analytics'],
  },
];

export const PROJECTS = [
  {
    id: 1,
    slug: 'luxury-brand-identity',
    title: 'Luxury Brand Identity',
    category: 'Branding',
    description: 'Complete brand identity system for an emerging luxury fashion brand in Lagos.',
    client: 'Luxe Collective',
    services: ['Brand Identity', 'Logo Design', 'Guidelines'],
    year: 2024,
    image: true,
    content: 'Developed a comprehensive brand identity that reflects luxury and sophistication.',
  },
  {
    id: 2,
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: 'Web Design',
    description: 'Full website redesign and e-commerce platform for an online retailer.',
    client: 'StyleHub',
    services: ['Web Design', 'E-Commerce', 'UI/UX'],
    year: 2024,
    image: true,
    content: 'Built a seamless shopping experience with conversion-focused design.',
  },
  {
    id: 3,
    slug: 'startup-branding',
    title: 'Startup Branding',
    category: 'Branding',
    description: 'Complete branding package for a fintech startup launching in Nigeria.',
    client: 'FinFlow',
    services: ['Branding', 'Logo Design', 'Web Design'],
    year: 2023,
    image: true,
    content: 'Created a modern, trustworthy brand identity for a financial technology platform.',
  },
];

export const PORTFOLIO_ITEMS = PROJECTS;

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Chioma Adeyemi',
    company: 'Luxe Collective',
    role: 'Founder',
    quote: 'Nocturne Studio did not just design a brand—they understood our vision and brought it to life beautifully.',
    rating: 5,
  },
  {
    id: 2,
    name: 'David Okonkwo',
    company: 'StyleHub',
    role: 'CEO',
    quote: 'The website has transformed our business. Conversions are up, and our customers love the experience.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Zainab Hassan',
    company: 'FinFlow',
    role: 'Co-founder',
    quote: 'Working with Joshua and the team was smooth, professional, and results-driven. Highly recommended.',
    rating: 5,
  },
];

export const FORM_FIELDS = [
  {
    name: 'name',
    label: 'Full Name',
    type: 'text',
    required: true,
    placeholder: 'Your name',
  },
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    required: true,
    placeholder: 'your@email.com',
  },
  {
    name: 'message',
    label: 'Tell us about your project',
    type: 'textarea',
    required: true,
    placeholder: 'What do you need? What are your goals?',
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    slug: 'design-trends-2024',
    title: 'Design Trends That Matter in 2024',
    category: 'Design',
    excerpt: 'What is actually moving the needle in design this year? We break down the trends that matter.',
    content: 'Design evolves constantly. This year, we are seeing a return to minimalism combined with bold typography and strategic use of negative space. Brands are moving away from overly complex designs and focusing on clarity and purpose. The key is balance—simplicity with intentionality.',
    date: '2024-01-15',
    image: true,
    author: 'Joshua Kenny',
  },
  {
    id: 2,
    slug: 'building-premium-brands',
    title: 'How to Build a Premium Brand',
    category: 'Branding',
    excerpt: 'Premium is not about price. It is about perception, consistency, and delivering excellence at every touchpoint.',
    content: 'Building a premium brand requires more than a high price tag. It demands consistency in every interaction, impeccable attention to detail, and a clear value proposition. Your brand should communicate quality through design, messaging, and customer experience. Premium brands are built on trust and delivered through excellence.',
    date: '2024-01-10',
    image: true,
    author: 'Joshua Kenny',
  },
  {
    id: 3,
    slug: 'web-design-principles',
    title: 'Web Design Principles That Never Go Out of Style',
    category: 'Design',
    excerpt: 'Typography, whitespace, color, and hierarchy. These fundamentals have not changed in decades—and they never will.',
    content: 'While trends come and go, the fundamentals of good design remain constant. Typography sets the tone. Whitespace provides breathing room. Color creates emotion. Hierarchy guides the eye. Master these four principles and your designs will stand the test of time, regardless of what is trending on design blogs.',
    date: '2024-01-05',
    image: true,
    author: 'Joshua Kenny',
  },
];
