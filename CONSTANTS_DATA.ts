// ============================================
// DESIGN SYSTEM CONSTANTS
// ============================================

export const COLORS = {
  gold: '#b8975a',
  goldLight: '#d4a574',
  dark: '#1a1a1a',
  darkGray: '#0d0d0d',
  gray: '#2a2a2a',
  lightGray: '#f5f5f5',
  white: '#ffffff',
  border: '#333333',
  text: '#cccccc',
  textMuted: '#999999',
};

export const TYPOGRAPHY = {
  fontFamily: {
    serif: "'Cormorant Garamond', serif",
    sans: "'Outfit', sans-serif",
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    base: '16px',
    lg: '18px',
    xl: '20px',
    '2xl': '24px',
    '3xl': '28px',
    '4xl': '32px',
    '5xl': '48px',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 700,
  },
  lineHeight: {
    tight: 1.2,
    normal: 1.6,
    relaxed: 1.8,
  },
};

export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const SHADOW = {
  sm: '0 1px 2px rgba(0,0,0,0.05)',
  md: '0 4px 6px rgba(0,0,0,0.1)',
  lg: '0 10px 15px rgba(0,0,0,0.2)',
};

export const BORDER_RADIUS = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  full: '9999px',
};

// ============================================
// CONTENT CONSTANTS
// ============================================

export const SITE_NAME = 'Nocturne Studio';
export const SITE_URL = 'https://nocturne-studio-theta.vercel.app';
export const OWNER_EMAIL = 'kennyorlando65@gmail.com';
export const OWNER_WHATSAPP = '+2347025689062';

export const SITE_DESCRIPTION =
  'Premium digital experiences. Web design, branding, visual effects, and production.';

export const NAVIGATION_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Work', href: '/work' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const SERVICES = [
  {
    id: 'web-design',
    name: 'Web Design & Development',
    description:
      'Strategy, UX/UI design, responsive development, and deployment. We build websites that convert.',
    includes: [
      'Discovery & Strategy',
      'Wireframes & Design',
      'Responsive Development',
      'Deployment & Support',
      '2 Revisions Rounds',
    ],
    timeline: '4-8 weeks',
    startingPrice: '₦200,000',
    icon: '🎨',
  },
  {
    id: 'branding',
    name: 'Brand Identity',
    description: 'Logo, color system, typography, and brand guidelines. Your visual identity.',
    includes: [
      'Logo Concepts (3-5)',
      'Color Palette',
      'Typography Selection',
      'Brand Guidelines',
      'Usage Examples',
    ],
    timeline: '2-4 weeks',
    startingPrice: '₦150,000',
    icon: '✨',
  },
  {
    id: 'production',
    name: 'Production & Visual Effects',
    description:
      'Animations, micro-interactions, motion design. Polish that makes your product stand out.',
    includes: [
      'Motion Design',
      'Animations',
      'Micro-interactions',
      'Video Production',
      'Visual Polish',
    ],
    timeline: '2-6 weeks',
    startingPrice: '₦100,000',
    icon: '🎬',
  },
  {
    id: 'social-media',
    name: 'Social Media & Content',
    description: 'Strategy, content calendar, branded assets. Consistent presence that grows.',
    includes: [
      'Content Strategy',
      '20+ Posts/Month',
      'Content Calendar',
      'Branded Templates',
      'Analytics Report',
    ],
    timeline: '2-3 weeks',
    startingPrice: '₦80,000',
    icon: '📱',
  },
];

export const TESTIMONIALS = [
  {
    id: 'sabi',
    quote:
      "Nocturne turned our manual order process into an automated system. We went from handling 5 orders a day to over 50. Their understanding of what we needed — without us explaining everything — was incredible.",
    author: 'Chinedu Okonkwo',
    role: 'Founder, Sabi',
    company: 'Sabi',
  },
  {
    id: 'j-restaurant',
    quote:
      "We had a website, but nobody was using it. After Nocturne rebuilt it, our mobile orders increased by 3x in the first month. The design is so clean that customers actually browse the full menu now.",
    author: 'Amara Obi',
    role: 'Manager, J Restaurant',
    company: 'J Restaurant',
  },
  {
    id: 'leviathan',
    quote:
      'The WhaleBot tracking alerts are incredibly accurate. We made some of our best trades based on Nocturne signals. The whole thing feels like it was built just for us.',
    author: 'Tunde Adeyemi',
    role: 'Crypto Trader',
    company: 'Leviathan',
  },
  {
    id: 'naijabase',
    quote:
      "Their security audit was thorough and professional. They found critical vulnerabilities we didn't know we had. Now our clients trust us more because we can prove we're secure.",
    author: 'Nneka Ejiofor',
    role: 'CTO, NaijaBase',
    company: 'NaijaBase',
  },
];

export const PROJECTS = [
  {
    id: 'sabi',
    name: 'Sabi',
    description: 'WhatsApp Commerce Platform',
    category: 'Web Design + Production',
    link: 'https://orderflow-dkga.vercel.app',
    image: '/images/projects/sabi.jpg',
    tier: '₦200k-300k',
    metrics: {
      users: '60+',
      orders: '300',
      loadTime: '2.3s',
    },
  },
  {
    id: 'j-restaurant',
    name: 'J Restaurant',
    description: 'Restaurant Website & Ordering',
    category: 'Web Design + Branding',
    link: 'https://j-restaurant.vercel.app',
    image: '/images/projects/j-restaurant.jpg',
    tier: '₦150k-200k',
    metrics: {
      mobileTraffic: '+85%',
      pageLoad: '35% faster',
      inquiries: '+120%',
    },
  },
  {
    id: 'leviathan',
    name: 'Leviathan WhaleBot',
    description: 'Crypto Whale Tracking Bot',
    category: 'Production + Visual Effects',
    link: 'https://t.me/LeviathanWhaleBot',
    image: '/images/projects/leviathan.jpg',
    tier: '₦200k+',
    metrics: {
      signalAccuracy: '94%',
      uptime: '99.9%',
      responseTime: '<100ms',
    },
  },
  {
    id: 'naijabase',
    name: 'NaijaBase',
    description: 'Security Audit & Penetration Testing',
    category: 'Security + Production',
    link: '#',
    image: '/images/projects/naijabase.jpg',
    tier: '₦500k+',
    metrics: {
      compliance: '100%',
      vulnerabilitiesFixed: 'All',
      auditTime: '2 weeks',
    },
  },
];

export const BLOG_POSTS = [
  {
    id: 'web-design-trends-2024',
    title: 'Web Design Trends 2024',
    slug: 'web-design-trends-2024',
    category: 'Design',
    readTime: 6,
    date: '2024-01-15',
  },
  {
    id: 'why-performance-matters',
    title: 'Why Performance Matters',
    slug: 'why-performance-matters',
    category: 'Development',
    readTime: 5,
    date: '2024-01-20',
  },
  {
    id: 'building-strong-brand',
    title: 'Building a Strong Brand Identity',
    slug: 'building-strong-brand-identity',
    category: 'Branding',
    readTime: 7,
    date: '2024-01-25',
  },
  {
    id: 'how-to-brief-designer',
    title: 'How to Brief a Designer',
    slug: 'how-to-brief-a-designer',
    category: 'Tips',
    readTime: 5,
    date: '2024-02-01',
  },
  {
    id: 'mobile-first-design',
    title: 'Mobile-First Design Explained',
    slug: 'mobile-first-design-explained',
    category: 'Design',
    readTime: 6,
    date: '2024-02-08',
  },
  {
    id: 'how-we-built-sabi',
    title: 'How We Built Sabi',
    slug: 'how-we-built-sabi',
    category: 'Case Study',
    readTime: 8,
    date: '2024-02-15',
  },
  {
    id: 'behind-scenes-process',
    title: 'Behind-the-Scenes - Our Process',
    slug: 'behind-scenes-process',
    category: 'Process',
    readTime: 6,
    date: '2024-02-22',
  },
];

// ============================================
// FORM CONFIG
// ============================================

export const FORM_FIELDS = {
  name: { label: 'Full Name', type: 'text', required: true, minLength: 2, maxLength: 100 },
  email: { label: 'Email Address', type: 'email', required: true },
  company: { label: 'Company', type: 'text', required: false, maxLength: 100 },
  projectType: {
    label: 'Project Type',
    type: 'select',
    required: true,
    options: ['Web Design', 'Branding', 'Production', 'Social Media', 'Custom'],
  },
  budget: {
    label: 'Budget Range',
    type: 'select',
    required: true,
    options: ['₦50k-100k', '₦100k-200k', '₦200k-500k', '₦500k+'],
  },
  timeline: {
    label: 'Timeline',
    type: 'select',
    required: true,
    options: ['ASAP', '1-2 months', 'Flexible'],
  },
  message: {
    label: 'Tell us about your project',
    type: 'textarea',
    required: true,
    minLength: 10,
    maxLength: 2000,
  },
};
