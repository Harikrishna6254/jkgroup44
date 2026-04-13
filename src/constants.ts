import { Service, BlogPost, Testimonial } from './types';

export const SERVICES: Service[] = [
  // 1. Career & Job Services
  {
    id: 'resume',
    title: 'Resume Building (ATS-Friendly)',
    description: 'Professional, ATS-friendly resumes that get you noticed by recruiters.',
    icon: 'FileText',
    category: 'career',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=802',
    features: ['ATS Keyword Optimization', 'Professional Formatting', 'Role-Specific Content', 'Editable Source Files']
  },
  {
    id: 'resume-analysis',
    title: 'AI Resume Analysis',
    description: 'Get an instant ATS score and keyword suggestions powered by advanced AI.',
    icon: 'ScanSearch',
    category: 'career',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=802',
    features: ['Instant ATS Scoring', 'Keyword Gap Analysis', 'Formatting Checks', 'Improvement Suggestions']
  },
  {
    id: 'linkedin-opt',
    title: 'LinkedIn Profile Optimization',
    description: 'Professional profile enhancement to increase visibility and attract top recruiters.',
    icon: 'Linkedin',
    category: 'career',
    image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=802',
    features: ['Headline & Bio Writing', 'Skill Endorsements', 'Network Growth Strategy', 'Recruiter Visibility']
  },
  {
    id: 'job-support',
    title: 'Job Application Support',
    description: 'End-to-end assistance in finding and applying for the right opportunities.',
    icon: 'Briefcase',
    category: 'career',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=802',
    features: ['Job Search Strategy', 'Application Tracking', 'Follow-up Assistance', 'Company Research']
  },
  {
    id: 'it-recruitment',
    title: 'IT Recruitment Solutions',
    description: 'End-to-end recruitment services including candidate sourcing and placement for technical roles.',
    icon: 'UserSearch',
    category: 'career',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=802',
    features: ['Technical Sourcing', 'Candidate Screening', 'Placement Support', 'Contract & Full-time']
  },
  {
    id: 'job-referral',
    title: 'Job Referral Program (Paid/Priority)',
    description: 'Direct employee referrals and fast-track hiring for top companies.',
    icon: 'UserPlus',
    category: 'career',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=802',
    features: ['Direct Referrals', 'Priority Hiring', 'Top MNC Network', 'Fast-Track Interviews']
  },
  {
    id: 'interview-prep',
    title: 'Interview Preparation',
    description: 'Mock interviews, HR + technical questions, and confidence training.',
    icon: 'Mic2',
    category: 'career',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=802',
    features: ['Mock Interviews', 'HR Question Prep', 'Technical Training', 'Body Language Tips']
  },
  {
    id: 'cover-letter',
    title: 'Cover Letter Writing',
    description: 'Role-specific cover letters with ATS keyword optimization.',
    icon: 'PenTool',
    category: 'career',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=802',
    features: ['Customized Content', 'ATS Optimization', 'Persuasive Writing', 'Multiple Revisions']
  },
  {
    id: 'portfolio-opt',
    title: 'Portfolio / GitHub Optimization',
    description: 'Project presentation and recruiter-ready profiles for IT professionals.',
    icon: 'Github',
    category: 'career',
    image: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=802',
    features: ['Project Presentation', 'GitHub README Setup', 'Portfolio Design', 'Technical Review']
  },

  // 2. Digital Marketing Services
  {
    id: 'smm',
    title: 'Social Media Marketing',
    description: 'Instagram, WhatsApp, and Meta Ads management to grow your brand presence.',
    icon: 'Share2',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=802',
    features: ['Meta Ads Management', 'Content Strategy', 'Engagement Growth', 'WhatsApp Marketing']
  },
  {
    id: 'ads',
    title: 'Ad Campaign Management',
    description: 'Strategic ad campaigns designed to maximize ROI and reach your target audience.',
    icon: 'TrendingUp',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=802',
    features: ['ROI Optimization', 'Targeted Reach', 'A/B Testing', 'Performance Tracking']
  },
  {
    id: 'email',
    title: 'Email Marketing',
    description: 'Direct communication strategies to engage and convert your leads.',
    icon: 'Mail',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=802',
    features: ['Newsletter Design', 'Lead Conversion', 'Automation Setup', 'Analytics Reports']
  },
  {
    id: 'google-ads',
    title: 'Google Ads (Search & Display)',
    description: 'Lead generation campaigns through Google Search and Display networks.',
    icon: 'Search',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&q=80&w=802',
    features: ['Search Ads', 'Display Network', 'Keyword Research', 'Conversion Tracking']
  },
  {
    id: 'local-seo',
    title: 'Local SEO (Google Maps Ranking)',
    description: 'Rank your business locally and attract more walk-in customers.',
    icon: 'MapPin',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=802',
    features: ['GMB Optimization', 'Maps Ranking', 'Local Citations', 'Review Management']
  },
  {
    id: 'web-dev',
    title: 'Website Development (React/Vite)',
    description: 'Modern, fast, and responsive business and portfolio websites.',
    icon: 'Code2',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=802',
    features: ['React/Vite Tech', 'Responsive Design', 'Fast Loading', 'SEO Friendly']
  },
  {
    id: 'landing-page',
    title: 'Landing Page Design',
    description: 'High-converting, conversion-focused pages for your products or services.',
    icon: 'Layout',
    category: 'digital',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=802',
    features: ['High Conversion', 'Modern UI/UX', 'Mobile Optimized', 'Lead Capture']
  },

  // 3. Government Services
  {
    id: 'pan',
    title: 'PAN Card Services',
    description: 'Hassle-free application and correction services for PAN cards.',
    icon: 'CreditCard',
    category: 'government',
    image: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=801',
    features: ['New Application', 'Data Correction', 'Instant e-PAN', 'Physical Delivery']
  },
  {
    id: 'passport',
    title: 'Passport Services',
    description: 'New passport applications, renewals, and data correction services.',
    icon: 'Globe',
    category: 'government',
    image: 'https://images.unsplash.com/photo-1544333346-64e4fe1feda5?q=80&w=801',
    features: ['Fresh Passport', 'Renewal Support', 'Tatkaal Service', 'Data Correction']
  },
  {
    id: 'voter-id',
    title: 'Voter ID Services',
    description: 'New Voter ID registration, corrections, and digital downloads.',
    icon: 'UserCheck',
    category: 'government',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=801',
    features: ['New Registration', 'Address Change', 'Digital Download', 'PVC Card Order']
  },
  {
    id: 'driving-license',
    title: 'Driving License Support',
    description: 'Assistance for Learner License, Permanent License, and renewals.',
    icon: 'Car',
    category: 'government',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=801',
    features: ['Learner License', 'Permanent License', 'Renewal Support', 'Slot Booking']
  },
  {
    id: 'epfo-services',
    title: 'EPFO Services & Support',
    description: 'EPF activation, name correction, claim support, and all types of EPFO related assistance.',
    icon: 'ShieldCheck',
    category: 'government',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=801',
    features: ['EPF Activation', 'Name Correction', 'Claim Support', 'UAN Services']
  },

  // 4. Financial Services
  {
    id: 'credit-card-apply',
    title: 'Credit Card Application',
    description: 'Apply for the best credit cards and get expert suggestions based on your needs.',
    icon: 'CreditCard',
    category: 'financial',
    image: 'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&q=80&w=800',
    features: ['Best Card Selection', 'High Approval Rate', 'Reward Optimization', 'Expert Guidance']
  },
  {
    id: 'cc-money-transfer',
    title: 'CC to Money Transfer',
    description: 'Direct transfer to bank account with low MDR charges, high reward points, and 100% security. All cards accepted.',
    icon: 'ArrowRightLeft',
    category: 'financial',
    image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&q=80&w=800',
    features: ['Low MDR Charges', 'High Reward Points', 'Direct Bank Transfer', '100% Secure']
  },
  {
    id: 'credit-score',
    title: 'Credit Score Building',
    description: 'Expert advice on improving and maintaining a healthy credit score.',
    icon: 'BarChart3',
    category: 'financial',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    features: ['Score Analysis', 'Improvement Plan', 'Debt Management', 'Credit Monitoring']
  },
  {
    id: 'bank-account',
    title: 'Bank Account Services',
    description: 'Assistance in opening and managing various types of bank accounts.',
    icon: 'Building2',
    category: 'financial',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800',
    features: ['Savings & Current', 'Zero Balance Options', 'KYC Assistance', 'Digital Banking']
  },
  {
    id: 'loan-assistance',
    title: 'Loan Assistance',
    description: 'Expert guidance for Personal loans and Business loans with low interest rates.',
    icon: 'Banknote',
    category: 'financial',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    features: ['Personal Loans', 'Business Loans', 'Low Interest Rates', 'Minimal Paperwork']
  },
  {
    id: 'insurance',
    title: 'Insurance Services',
    description: 'Comprehensive Health and Life insurance plans for you and your family.',
    icon: 'Shield',
    category: 'financial',
    image: 'https://images.unsplash.com/photo-1509017174183-0b7e0278f1ec?auto=format&fit=crop&q=80&w=800',
    features: ['Health Insurance', 'Life Insurance', 'Family Plans', 'Claim Assistance']
  },
  {
    id: 'investment',
    title: 'Investment Guidance (Basic)',
    description: 'Mutual funds basics and smart savings planning for a secure future.',
    icon: 'PieChart',
    category: 'financial',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800',
    features: ['Mutual Funds Basics', 'Savings Planning', 'Risk Analysis', 'Future Security']
  },

  // 5. Business & Software Solutions
  {
    id: 'billing-software',
    title: 'Restaurant & Hotel Billing Software',
    description: 'Low-cost billing solutions with Swiggy & Zomato integration and 24/7 support.',
    icon: 'Receipt',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&q=80&w=800',
    features: ['Swiggy/Zomato Integration', '24/7 Technical Support', 'Inventory Management', 'Free Demo Available']
  },
  {
    id: 'crm-setup',
    title: 'CRM Setup for Businesses',
    description: 'Efficient customer tracking and relationship management systems.',
    icon: 'Users',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    features: ['Lead Tracking', 'Pipeline Management', 'Customer Insights', 'Automated Reports']
  },
  {
    id: 'whatsapp-automation',
    title: 'WhatsApp Business Automation',
    description: 'Auto replies and lead capture systems for your business WhatsApp.',
    icon: 'MessageSquare',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800',
    features: ['Auto Replies', 'Lead Capture', 'Broadcast Lists', 'API Integration']
  },
  {
    id: 'ecommerce-setup',
    title: 'E-commerce Store Setup',
    description: 'Professional Shopify or WooCommerce store setup for your products.',
    icon: 'ShoppingBag',
    category: 'business',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
    features: ['Shopify Setup', 'WooCommerce Integration', 'Payment Gateway', 'Product Upload']
  },

  // 6. Freelancing & Online Income Services
  {
    id: 'freelancing-setup',
    title: 'Freelancing Profile Setup',
    description: 'Professional setup for Upwork and Fiverr profiles to start earning.',
    icon: 'Laptop',
    category: 'freelancing',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=801',
    features: ['Upwork Profile', 'Fiverr Gigs', 'Portfolio Setup', 'Bidding Strategy']
  },
  {
    id: 'online-earning',
    title: 'Online Earning Guidance',
    description: 'Expert advice on various ways to earn money online legitimately.',
    icon: 'Coins',
    category: 'freelancing',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800',
    features: ['Legitimate Methods', 'Passive Income', 'Skill Monetization', 'Platform Reviews']
  },
  {
    id: 'affiliate-setup',
    title: 'Affiliate Marketing Setup',
    description: 'Start your affiliate marketing journey with the right tools and strategy.',
    icon: 'Network',
    category: 'freelancing',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
    features: ['Niche Selection', 'Tool Setup', 'Traffic Strategy', 'Commission Tracking']
  },
  {
    id: 'dropshipping',
    title: 'Dropshipping Basics',
    description: 'Learn the fundamentals of starting a successful dropshipping business.',
    icon: 'Truck',
    category: 'freelancing',
    image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaad5b?auto=format&fit=crop&q=80&w=800',
    features: ['Supplier Sourcing', 'Store Setup', 'Product Research', 'Order Fulfillment']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'How to Build an ATS-Friendly Resume',
    excerpt: 'Learn the secrets to getting your resume past automated screening systems.',
    date: 'March 15, 2024',
    category: 'Career Tips',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    title: 'Maximizing Meta Ads for Small Business',
    excerpt: 'A guide to getting the most out of your advertising budget on Facebook and Instagram.',
    date: 'March 10, 2024',
    category: 'Digital Marketing',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Sharma',
    role: 'Small Business Owner',
    content: 'JK Solutions helped me scale my business through targeted Meta ads. Their expertise is unmatched.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: '2',
    name: 'Priya Patel',
    role: 'Marketing Professional',
    content: 'The resume they built for me was a game-changer. I landed three interviews in just one week!',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  }
];
