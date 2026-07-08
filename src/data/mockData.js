export const configuratorProducts = [
  {
    id: 'sneaker',
    name: 'AeroStride X1 Pro Sneaker',
    category: 'Footwear & Apparel',
    basePrice: 149,
    rating: 4.9,
    reviews: 1240,
    description: 'Next-gen aerodynamic footwear with customizable multi-layer mesh and responsive sole cushioning.',
    imagePreview: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
    colors: [
      { id: 'black', name: 'Midnight Black', hex: '#111827', priceMod: 0 },
      { id: 'purple', name: 'Cyber Purple', hex: '#7c3aed', priceMod: 15 },
      { id: 'emerald', name: 'Emerald Green', hex: '#10b981', priceMod: 10 },
      { id: 'orange', name: 'Neon Orange', hex: '#f97316', priceMod: 15 },
      { id: 'white', name: 'Arctic White', hex: '#f8fafc', priceMod: 0 },
    ],
    materials: [
      { id: 'leather', name: 'Premium Full-Grain Leather', priceMod: 30, desc: 'Ultra-durable and weather-resistant.' },
      { id: 'mesh', name: 'Breathable AeroMesh', priceMod: 0, desc: 'Lightweight performance weave.' },
      { id: 'recycled', name: 'EcoLoop Recycled Canvas', priceMod: 15, desc: '100% ocean-bound recycled polymers.' },
    ],
    accents: [
      { id: 'gold', name: 'Metallic Gold Accents', hex: '#eab308', priceMod: 20 },
      { id: 'silver', name: 'Chrome Silver Accents', hex: '#94a3b8', priceMod: 10 },
      { id: 'neon', name: 'Reflective Neon Strip', hex: '#22c55e', priceMod: 15 },
      { id: 'none', name: 'Matte Standard Finish', hex: '#334155', priceMod: 0 },
    ]
  },
  {
    id: 'watch',
    name: 'Chronos AI Ultra Smartwatch',
    category: 'Tech & Wearables',
    basePrice: 299,
    rating: 4.8,
    reviews: 890,
    description: 'Precision aerospace titanium chassis with customizable digital dials and biometric sensors.',
    imagePreview: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    colors: [
      { id: 'titanium', name: 'Titanium Gray', hex: '#475569', priceMod: 0 },
      { id: 'obsidian', name: 'Obsidian Black', hex: '#0f172a', priceMod: 20 },
      { id: 'rose', name: 'Rose Gold Alloy', hex: '#e11d48', priceMod: 35 },
      { id: 'silver', name: 'Solar Silver', hex: '#cbd5e1', priceMod: 0 },
    ],
    materials: [
      { id: 'silicone', name: 'Sport AeroSilicone Band', priceMod: 0, desc: 'Sweat-resistant active wear.' },
      { id: 'milanese', name: 'Stainless Milanese Loop', priceMod: 45, desc: 'Magnetic fluid adjustment.' },
      { id: 'leather', name: 'Handcrafted Italian Leather', priceMod: 50, desc: 'Classic timeless luxury.' },
    ],
    accents: [
      { id: 'sapphire', name: 'Sapphire Crystal Glass', hex: '#38bdf8', priceMod: 40 },
      { id: 'gorilla', name: 'Gorilla Armor Glass', hex: '#64748b', priceMod: 0 },
      { id: 'solar', name: 'Solar Charging Ring', hex: '#f59e0b', priceMod: 60 },
    ]
  },
  {
    id: 'hoodie',
    name: 'StreetTech Heavyweight Hoodie',
    category: 'Streetwear & Merch',
    basePrice: 89,
    rating: 4.9,
    reviews: 2150,
    description: '450 GSM organic French terry cotton with customizable embroidery and patch placement.',
    imagePreview: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80',
    colors: [
      { id: 'gray', name: 'Heather Athletic Gray', hex: '#9ca3af', priceMod: 0 },
      { id: 'navy', name: 'Deep Midnight Navy', hex: '#1e3a8a', priceMod: 0 },
      { id: 'olive', name: 'Vintage Tactical Olive', hex: '#3f6212', priceMod: 10 },
      { id: 'black', name: 'Pitch Black Wash', hex: '#030712', priceMod: 0 },
    ],
    materials: [
      { id: 'french', name: '450 GSM French Terry Cotton', priceMod: 0, desc: 'Heavyweight premium feel.' },
      { id: 'fleece', name: 'Thermal Sherpa Fleece Lined', priceMod: 25, desc: 'Maximum winter insulation.' },
    ],
    accents: [
      { id: 'embroidery', name: '3D Puff Embroidery Logo', hex: '#e2e8f0', priceMod: 15 },
      { id: 'screenprint', name: 'HD Silk Screen Print', hex: '#64748b', priceMod: 0 },
      { id: 'patch', name: 'Woven Heritage Patch', hex: '#d97706', priceMod: 12 },
    ]
  }
];

export const softwareFeatures = [
  {
    id: 1,
    title: 'Real-Time 3D & 2D Rendering Engine',
    description: 'Deliver lightning-fast, photorealistic 60fps WebGL and canvas product previews with zero lag on any mobile or desktop browser.',
    icon: 'Box',
    badge: 'Core Engine'
  },
  {
    id: 2,
    title: 'Dynamic Rule-Based Pricing Engine',
    description: 'Automatically calculate complex tiered pricing, material surcharges, and instant manufacturing quotes as customers configure products.',
    icon: 'Calculator',
    badge: 'Revenue Booster'
  },
  {
    id: 3,
    title: 'Automated CAD & Print-Ready Export',
    description: 'Generate production-ready vector PDF, high-res PNG, DXF, and 3D OBJ files sent instantly to your factory or fulfillment team upon checkout.',
    icon: 'FileOutput',
    badge: 'Automation'
  },
  {
    id: 4,
    title: 'Web Augmented Reality (WebAR) Ready',
    description: 'Allow shoppers to project customized furniture, apparel, or devices into their real room or body using 1-click mobile AR preview.',
    icon: 'Smartphone',
    badge: 'Conversion Multiplier'
  },
  {
    id: 5,
    title: '1-Click E-Commerce Platform Sync',
    description: 'Native plug-and-play integrations for Shopify, WooCommerce, Magento, BigCommerce, and custom headless GraphQL/REST APIs.',
    icon: 'RefreshCw',
    badge: 'Seamless Setup'
  },
  {
    id: 6,
    title: 'AI-Powered Design Assistant & Templates',
    description: 'Empower shoppers with intelligent color harmony recommendations, smart monogram placement, and curated seasonal style templates.',
    icon: 'Sparkles',
    badge: 'AI Powered'
  }
];

export const howItWorksSteps = [
  {
    step: '01',
    title: 'Connect Your E-Commerce Store',
    description: 'Install our lightweight SDK or app in Shopify, WooCommerce, or Magento with a single click. Zero coding required.',
    icon: 'Plug'
  },
  {
    step: '02',
    title: 'Upload Models & 2D Templates',
    description: 'Drag and drop your 3D models (.glb/.obj) or layered 2D PNG/SVG files into our intuitive visual studio studio.',
    icon: 'UploadCloud'
  },
  {
    step: '03',
    title: 'Configure Customization Rules',
    description: 'Define color swatches, texture materials, engraving text limits, and dynamic pricing surcharges visually.',
    icon: 'Sliders'
  },
  {
    step: '04',
    title: 'Launch & Skyrocket Conversions',
    description: 'Publish live to your store and watch shopper engagement surge by 3x while reducing return rates by up to 60%.',
    icon: 'TrendingUp'
  }
];

export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter Studio',
    tagline: 'Perfect for boutique brands and emerging e-commerce stores.',
    monthlyPrice: 49,
    annualPrice: 39,
    popular: false,
    features: [
      'Up to 10 Customizable Products',
      '2D High-Resolution Canvas Configurator',
      '5,000 Monthly Configurator Views',
      'Standard Print-Ready PDF/PNG Export',
      'Shopify & WooCommerce Native Plugin',
      'Standard Email Support (24h SLA)'
    ],
    ctaText: 'Start 14-Day Free Trial'
  },
  {
    id: 'pro',
    name: 'Professional Pro',
    tagline: 'Ideal for scaling brands requiring 3D rendering and advanced automation.',
    monthlyPrice: 149,
    annualPrice: 119,
    popular: true,
    features: [
      'Up to 100 Customizable Products',
      'Full 3D WebGL & 2D Hybrid Rendering',
      '50,000 Monthly Configurator Views',
      'Advanced CAD (DXF/OBJ) & Vector Export',
      '1-Click WebAR Mobile Preview',
      'Dynamic Rule-Based Pricing Engine',
      'Priority 24/7 Live Chat & Slack Support'
    ],
    ctaText: 'Start 14-Day Free Trial'
  },
  {
    id: 'enterprise',
    name: 'Enterprise Scale',
    tagline: 'Dedicated infrastructure for high-volume global manufacturers.',
    monthlyPrice: 399,
    annualPrice: 319,
    popular: false,
    features: [
      'Unlimited Customizable Products',
      'Unlimited Configurator Views & Bandwidth',
      'Custom AI Design Assistant & Recommendations',
      'Dedicated ERP & Factory API Integration',
      'Custom Headless REST & GraphQL API',
      '99.99% Uptime SLA & Dedicated Account Mgr',
      'Custom Onboarding & Team Training'
    ],
    ctaText: 'Contact Enterprise Sales'
  }
];

export const testimonialsData = [
  {
    id: 1,
    quote: "Implementing CustomCraft Pro increased our online sneaker conversion rate by 48% within the first 30 days. Customers love seeing their custom designs come to life in real-time!",
    author: "Marcus Vance",
    role: "VP of E-Commerce, KicksLab USA",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    metric: "+48% Conversion Rate",
    company: "KicksLab"
  },
  {
    id: 2,
    quote: "The automated print-ready PDF export saved our manufacturing team over 40 hours a week in manual file prepping. It is literally a game-changer for custom jewelry and apparel.",
    author: "Elena Rostova",
    role: "Head of Product, LuxeCraft Atelier",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    metric: "40 hrs/wk Saved",
    company: "LuxeCraft"
  },
  {
    id: 3,
    quote: "When customers personalize their own watch straps and dials, their attachment to the product skyrockets. Our return rate dropped by 62% since launching the interactive 3D configurator.",
    author: "David Chen",
    role: "Founder & CEO, Chronos Horology",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    metric: "-62% Return Rate",
    company: "Chronos"
  }
];

export const integrationPartners = [
  { name: 'Shopify Plus', logo: '🛍️ Shopify' },
  { name: 'WooCommerce', logo: '🟣 WooCommerce' },
  { name: 'Magento Commerce', logo: '🟠 Magento' },
  { name: 'BigCommerce', logo: '🔵 BigCommerce' },
  { name: 'Wix E-Commerce', logo: '⚡ Wix' },
  { name: 'Squarespace', logo: '⬛ Squarespace' },
  { name: 'Headless API', logo: '🚀 Headless API' },
];

export const faqData = [
  {
    question: "How long does it take to integrate CustomCraft Pro into my existing store?",
    answer: "For platforms like Shopify and WooCommerce, installation takes less than 5 minutes using our 1-click plugin. For custom headless setups, our comprehensive REST and GraphQL APIs allow full deployment within 1-2 days."
  },
  {
    question: "Do I need 3D modeling skills to use the software?",
    answer: "Not at all! While we support advanced 3D .GLB and .OBJ models, our hybrid engine also works seamlessly with standard layered 2D PNG or SVG images. You can launch a rich customizer using photos you already have."
  },
  {
    question: "How does the automated manufacturing file export work?",
    answer: "When a customer completes their order, CustomCraft Pro automatically bundles their exact color selections, material choices, and custom text engraving into a print-ready vector PDF, DXF, or high-res PNG and attaches it directly to the order webhook or email."
  },
  {
    question: "Can I customize the branding and colors of the configurator widget?",
    answer: "Yes! You have 100% control over the font, color scheme, button styling, and layout of the configurator to ensure it matches your brand identity perfectly."
  }
];
