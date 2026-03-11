import { ServicePageData } from "../types";

export const WEB_DATA: ServicePageData = {
  id: "web-development",

  // --- PREVIEW SECTION ---
  preview: {
    title: "Website Development",
    tagline: "High-Performance Experiences",
    description: "Build high-performance websites that drive measurable business growth. We deliver solutions that load in under 2 seconds and rank on the first page of Google",
    image: "./assets/images/webdevelopment.png",
    icon: "Layout",
    localIcon: "./assets/images/Icons/Web Development.svg",
    points: [
      "Next.js & React Applications",
      "Enterprise WordPress",
      "Headless CMS Architecture",
      "High-Conversion E-commerce"
    ],
    technologies: [
      { name: "HTML", logo: "./assets/images/Technology/HTML5_Badge.svg" },
      { name: "CSS", logo: "./assets/images/Technology/CSS3_logo.svg" },
      { name: "Magento", logo: "./assets/images/Technology/Magento.svg" },
      { name: "WordPress", logo: "./assets/images/Technology/Wordpress-Logo.svg" },
      { name: "PHP", logo: "./assets/images/Technology/PHP-logo.svg" },
      { name: "MySQL", logo: "./assets/images/Technology/MySQL_textlogo.svg" },
      { name: "Node.js", logo: "./assets/images/Technology/Node.js_logo.svg" },
      { name: "WooCommerce", logo: "./assets/images/Technology/WooCommerce_Logo_(2015).svg" },
      { name: "jQuery", logo: "./assets/images/Technology/JQuery-Logo.svg" },
    ],
  },

  // 1. HERO SECTION
  hero: {
    badge: "Website Development & E-Commerce Solutions",
    titlePrefix: "Your Website Should Work",
    titleHighlight: "as Hard as You Do",
    description: "Most businesses lose customers before they even make contact. A slow website, poor mobile experience, or outdated design sends potential clients straight to your competitors. We build websites that load in under 2 seconds, rank on the first page of Google, and turn visitors into customers.",
    features: [
      "Lightning-fast load times (under 2 seconds)",
      "First-page Google rankings from launch",
      "Mobile-first responsive design",
      "Infrastructure that scales with traffic"
    ],
    ctaPrimary: "Get Free Consultation",
    ctaSecondary: "View Case Studies"
  },

  // 2. OVERVIEW SECTION
  overview: {
    badge: "Our Approach",
    heading: "What Makes Our Approach",
    highlight: "Different",
    content: [
      "Most businesses lose customers before they even make contact. A slow website, poor mobile experience, or outdated design sends potential clients straight to your competitors. We build websites that load in under 2 seconds, rank on the first page of Google, and turn visitors into customers.",
      "Whether you need a lightning-fast Next.js application, a content-rich WordPress site, or a complete WooCommerce store, we deliver solutions that generate real results, not just pretty designs."
    ],
    differentiators: [
      {
        title: "Performance That Actually Matters",
        description: "When 53% of users abandon sites that take over 3 seconds to load, speed isn't a luxury. We optimize every element from image compression to server response times to keep visitors engaged.",
        icon: "Zap"
      },
      {
        title: "Search Visibility from Launch",
        description: "Technical SEO isn't an afterthought. We build semantic HTML structures, implement proper schema markup, optimize meta tags, and ensure fast Core Web Vitals scores before your site goes live.",
        icon: "Search"
      },
      {
        title: "Mobile Experiences That Convert",
        description: "Sixty percent of your traffic comes from smartphones and tablets. Our mobile-first approach ensures seamless experiences across every device, from the latest iPhone to older Android phones.",
        icon: "Smartphone"
      },
      {
        title: "Strategic User Journeys",
        description: "Beautiful design means nothing without strategy. We map user flows, position calls-to-action strategically, and remove friction points that prevent conversions.",
        icon: "Compass"
      },
      {
        title: "Infrastructure That Scales",
        description: "Whether you're serving 100 visitors or 100,000, your site maintains peak performance. Our architecture handles traffic spikes without slowdowns or crashes.",
        icon: "Server"
      }
    ]
  },

  // 3. CORE SERVICES
  coreServices: {
    badge: "Core Services",
    titleLine1: "Complete",
    titleHighlight: "Web Solutions",
    description: "From modern web applications to enterprise e-commerce, we deliver end-to-end development services",
    cards: [
      {
        title: "Next.js Development",
        desc: "Modern web applications built for speed and scale",
        icon: "Code2",
        color: "text-black",
        bg: "bg-gray-100",
        fullDescription: [
          "Next.js delivers what traditional websites can't: instant page loads, perfect SEO, and the flexibility to build anything from marketing sites to complex web applications."
        ],
        subSections: [
          {
            heading: "Performance Features",
            items: [
              { term: "Automatic code splitting", description: "Loads only what users need" },
              { term: "Image optimization", description: "Reduces file sizes by 50-70%" },
              { term: "Server-side rendering", description: "Ensures search engines see complete content" },
              { term: "Static generation", description: "Delivers pages in milliseconds" },
              { term: "Global edge caching", description: "Puts content closer to users" },
              { term: "Prefetching", description: "Makes navigation feel instant" }
            ]
          },
          {
            heading: "Common Use Cases",
            content: [
              "Corporate websites requiring exceptional performance",
              "SaaS platforms with complex user interactions",
              "Marketing sites with high conversion requirements",
              "Landing pages for paid advertising campaigns",
              "Content platforms with thousands of articles",
              "Customer portals and web applications",
              "E-commerce with headless CMS integration"
            ]
          },
          {
            heading: "Technology Foundation",
            content: [
              "Next.js 14+ with App Router",
              "React 18+ with Server Components",
              "TypeScript for reliability",
              "Tailwind CSS for styling",
              "Contentful or Sanity for content management",
              "Vercel or AWS for deployment"
            ]
          }
        ]
      },
      {
        title: "WordPress Development",
        desc: "The platform that powers 43% of the web, done right",
        icon: "FileText",
        color: "text-blue-600",
        bg: "bg-blue-50",
        fullDescription: [
          "WordPress offers unmatched flexibility and an ecosystem of 60,000+ plugins. We harness this power while avoiding the performance pitfalls and security vulnerabilities that plague most WordPress sites."
        ],
        subSections: [
          {
            heading: "What Sets Our WordPress Work Apart",
            items: [
              { term: "Custom theme development", description: "Matches your brand exactly" },
              { term: "Block editor integration", description: "Easy content updates" },
              { term: "Advanced Custom Fields", description: "Structured content" },
              { term: "WooCommerce integration", description: "Selling online" },
              { term: "Performance optimization", description: "Not just caching plugins" },
              { term: "Security hardening", description: "Beyond basic plugins" },
              { term: "Accessibility compliance", description: "WCAG 2.1 Level AA" }
            ]
          },
          {
            heading: "Custom Theme Development",
            content: [
              "No generic templates. We design and code themes specifically for your business, ensuring every element serves your goals. Fully responsive, optimized for Core Web Vitals, and built for long-term maintenance."
            ]
          },
          {
            heading: "Plugin Development",
            content: [
              "When off-the-shelf plugins don't fit your workflow, we build custom solutions. From unique post types to third-party integrations, we extend WordPress to match your exact requirements."
            ]
          },
          {
            heading: "WordPress Migration",
            content: [
              "Moving from another platform? We handle the technical complexity of migrating content, preserving SEO rankings with proper redirects, transferring user accounts, and ensuring zero downtime during the switch."
            ]
          },
          {
            heading: "Ongoing Maintenance",
            content: [
              "WordPress requires regular attention. Core updates, plugin compatibility checks, security monitoring, performance optimization, and backup management keep your site running smoothly."
            ]
          },
          {
            heading: "Ideal For",
            content: [
              "Professional services firms",
              "Content-heavy blogs",
              "Membership communities",
              "News and magazine sites",
              "Portfolio showcases",
              "Business directories"
            ]
          }
        ]
      },
      {
        title: "WooCommerce E-Commerce",
        desc: "Turn your WordPress site into a complete online store",
        icon: "ShoppingCart",
        color: "text-purple-600",
        bg: "bg-purple-50",
        fullDescription: [
          "WooCommerce powers 28% of all online stores. While it's \"free,\" building a store that actually converts requires expertise in product presentation, checkout optimization, and performance tuning."
        ],
        subSections: [
          {
            heading: "Core E-Commerce Capabilities",
            items: [
              { term: "Unlimited products", description: "With categories and tags" },
              { term: "Variable products", description: "Sizes, colors, custom options" },
              { term: "Multiple payment gateways", description: "Stripe, PayPal, Razorpay, Authorize.net" },
              { term: "Flexible shipping", description: "Flat rate, by weight, real-time carrier rates" },
              { term: "Inventory tracking", description: "With low-stock alerts" },
              { term: "Customer accounts", description: "With order history" },
              { term: "Automated emails", description: "Notifications" },
              { term: "Coupon management", description: "Discounts" }
            ]
          },
          {
            heading: "Revenue-Generating Features",
            items: [
              { term: "Abandoned cart recovery", description: "Recover 10-30% of lost sales" },
              { term: "Product upsells", description: "Cross-sells" },
              { term: "Related products", description: "Suggestions" },
              { term: "Review systems", description: "Rating systems" },
              { term: "Email marketing", description: "Integration" },
              { term: "Loyalty programs", description: "Rewards programs" },
              { term: "Wholesale pricing", description: "Tiers" },
              { term: "Subscription products", description: "" }
            ]
          },
          {
            heading: "Store Optimization",
            items: [
              { term: "Streamlined checkout", description: "Reduce cart abandonment" },
              { term: "Mobile shopping", description: "70% of e-commerce is mobile" },
              { term: "Product schema markup", description: "Rich results in Google" },
              { term: "Category optimization", description: "Page optimization" },
              { term: "Speed optimization", description: "Every second costs 7% in conversions" },
              { term: "A/B testing setup", description: "" },
              { term: "Analytics tracking", description: "Conversion tracking" }
            ]
          },
          {
            heading: "Migration Services",
            content: [
              "Moving from Shopify, Magento, BigCommerce, or a custom solution? We transfer products, customer data, order history, and preserve your hard-earned SEO rankings."
            ]
          },
          {
            heading: "Ideal For",
            content: [
              "Fashion and apparel retailers",
              "Digital product creators",
              "B2B wholesale distributors",
              "Subscription box services",
              "Multi-vendor marketplaces"
            ]
          }
        ]
      },
      {
        title: "Headless CMS & JAMstack",
        desc: "Decouple your frontend for maximum flexibility",
        icon: "Layers",
        color: "text-orange-600",
        bg: "bg-orange-50",
        fullDescription: [
          "Traditional CMS platforms tie your content to your presentation layer. Headless architecture separates them, giving you freedom to use the same content across web, mobile apps, digital displays, and any future channel."
        ],
        subSections: [
          {
            heading: "Architecture Overview",
            items: [
              { term: "Frontend", description: "Next.js, React, or Vue.js for the user experience" },
              { term: "Backend", description: "WordPress, Contentful, Sanity, or Strapi for content management" },
              { term: "API Layer", description: "REST or GraphQL connects them" },
              { term: "Hosting", description: "Vercel, Netlify, or AWS handles deployment" }
            ]
          },
          {
            heading: "The Headless Advantage",
            items: [
              { term: "Pre-rendered pages", description: "Serve from CDN globally (load times under 1 second)" },
              { term: "No database queries", description: "At runtime (handles massive traffic)" },
              { term: "No exposed admin", description: "Panel (eliminates most security vulnerabilities)" },
              { term: "Any frontend tech", description: "Not locked into CMS themes" },
              { term: "Multi-channel delivery", description: "Web, iOS, Android, IoT from one source" }
            ]
          },
          {
            heading: "WordPress as Headless CMS",
            content: [
              "Keep WordPress's familiar admin interface, leverage its plugin ecosystem, and pair it with a Next.js frontend for exceptional performance. Best of both worlds."
            ]
          },
          {
            heading: "Contentful",
            content: [
              "Cloud-based headless CMS with powerful GraphQL API, real-time collaboration, content modeling, multi-language support, and asset management."
            ]
          },
          {
            heading: "Sanity.io",
            content: [
              "Highly customizable content studio, real-time collaboration, structured content with relationships, portable text editor, and developer-friendly GROQ query language."
            ]
          },
          {
            heading: "Strapi",
            content: [
              "Open-source headless CMS, self-hosted or cloud options, REST and GraphQL APIs, customizable admin panel, and extensive plugin ecosystem."
            ]
          },
          {
            heading: "Ideal For",
            content: [
              "Multi-channel content delivery",
              "High-traffic websites",
              "Web applications",
              "International sites",
              "API-first architectures"
            ]
          }
        ]
      },
      {
        title: "Website Design & UX",
        desc: "Design that guides users toward action",
        icon: "Palette",
        color: "text-pink-600",
        bg: "bg-pink-50",
        fullDescription: [
          "Design isn't just aesthetics. Every color choice, button placement, and content hierarchy either helps or hinders conversion. We combine visual appeal with strategic UX to create interfaces that both look exceptional and drive results."
        ],
        subSections: [
          {
            heading: "Phase 1: Discovery & Research",
            items: [
              { term: "Stakeholder interviews", description: "Understand business goals" },
              { term: "Target audience analysis", description: "Persona development" },
              { term: "Competitor research", description: "Identify opportunities" },
              { term: "Content audit", description: "For redesigns" }
            ]
          },
          {
            heading: "Phase 2: Information Architecture",
            items: [
              { term: "Site mapping", description: "Navigation structure" },
              { term: "Content hierarchy", description: "Organization" },
              { term: "User flow diagrams", description: "Entry to conversion" },
              { term: "Conversion funnel", description: "Design" }
            ]
          },
          {
            heading: "Phase 3: Wireframing",
            items: [
              { term: "Low-fidelity wireframes", description: "Layout structure" },
              { term: "Content placement", description: "Prioritization" },
              { term: "Interactive elements", description: "Positioning" },
              { term: "Responsive views", description: "Mobile and desktop" }
            ]
          },
          {
            heading: "Phase 4: Visual Design",
            items: [
              { term: "High-fidelity mockups", description: "Final colors and typography" },
              { term: "Imagery selection", description: "Iconography" },
              { term: "Responsive breakpoints", description: "All devices" },
              { term: "Design system", description: "Component library" },
              { term: "Interactive prototypes", description: "Stakeholder review" }
            ]
          },
          {
            heading: "Phase 5: Testing & Iteration",
            items: [
              { term: "User testing", description: "With target audience" },
              { term: "Feedback collection", description: "Analysis" },
              { term: "Design refinements", description: "" },
              { term: "Final approval", description: "" }
            ]
          },
          {
            heading: "Design Principles",
            items: [
              { term: "Mobile-First Approach", description: "Design for smallest screen first, then enhance" },
              { term: "Accessibility Standards", description: "WCAG 2.1 Level AA compliance, keyboard navigation, screen reader compatible" },
              { term: "Conversion Optimization", description: "Clear CTAs, visual hierarchy, reduced friction, trust signals" },
              { term: "Brand Consistency", description: "Alignment with brand guidelines, consistent typography and colors" }
            ]
          }
        ]
      },
      {
        title: "SEO & Performance Optimization",
        desc: "Rank higher and load faster",
        icon: "BarChart",
        color: "text-green-600",
        bg: "bg-green-50",
        fullDescription: [
          "Technical SEO and performance optimization aren't separate disciplines. They work together. Search engines reward fast sites, and users reward sites they can find."
        ],
        subSections: [
          {
            heading: "Technical SEO Foundation",
            items: [
              { term: "Optimized meta tags", description: "Title tags and meta descriptions (increase CTR)" },
              { term: "Proper header hierarchy", description: "H1, H2, H3 structure" },
              { term: "Semantic HTML", description: "Helps search engines understand content" },
              { term: "Internal linking", description: "Distributes page authority" },
              { term: "Image optimization", description: "Descriptive alt text" },
              { term: "Clean URL structure", description: "" },
              { term: "XML sitemap", description: "Generation and submission" },
              { term: "Robots.txt", description: "Configuration" }
            ]
          },
          {
            heading: "Structured Data Implementation",
            items: [
              { term: "Schema.org markup", description: "For rich results" },
              { term: "Organization schema", description: "Brand information" },
              { term: "Product schema", description: "E-commerce" },
              { term: "Article schema", description: "Blog content" },
              { term: "LocalBusiness schema", description: "Local SEO" },
              { term: "Breadcrumb schema", description: "Navigation" },
              { term: "FAQ schema", description: "Featured snippets" },
              { term: "Review schema", description: "Rating schema" }
            ]
          },
          {
            heading: "Core Web Vitals Optimization",
            items: [
              { term: "Largest Contentful Paint (LCP)", description: "Target: Under 2.5 seconds. Optimize largest images, implement CDN, use server-side rendering, preload critical resources" },
              { term: "First Input Delay (FID)", description: "Target: Under 100ms. Minimize JavaScript execution, code splitting, defer non-critical scripts, remove unused code" },
              { term: "Cumulative Layout Shift (CLS)", description: "Target: Under 0.1. Specify image dimensions, reserve space for dynamic content, avoid content insertion, proper font loading" }
            ]
          },
          {
            heading: "Speed Optimization Techniques",
            items: [
              { term: "Image compression", description: "Modern WebP format" },
              { term: "Lazy loading", description: "Images and videos" },
              { term: "Code minification", description: "CSS, JavaScript, HTML" },
              { term: "Browser caching", description: "Configuration" },
              { term: "Server-side caching", description: "Redis or Memcached" },
              { term: "Database optimization", description: "Query optimization" },
              { term: "CDN integration", description: "Global delivery" },
              { term: "HTTP/2 or HTTP/3", description: "Implementation" },
              { term: "Compression", description: "Gzip or Brotli" }
            ]
          }
        ]
      },
      {
        title: "Website Maintenance & Support",
        desc: "Protect your investment with proactive care",
        icon: "LifeBuoy",
        color: "text-teal-600",
        bg: "bg-teal-50",
        fullDescription: [
          "Websites don't maintain themselves. Without regular updates, security monitoring, and performance optimization, even the best sites deteriorate. Our maintenance plans prevent problems before they impact your business."
        ],
        subSections: [
          {
            heading: "Security",
            items: [
              { term: "Malware scanning", description: "And removal" },
              { term: "Security patches", description: "Applied within 24 hours" },
              { term: "Firewall configuration", description: "" },
              { term: "Brute force protection", description: "" },
              { term: "SSL certificate", description: "Management" },
              { term: "Regular security audits", description: "" },
              { term: "User access management", description: "" }
            ]
          },
          {
            heading: "Backups",
            items: [
              { term: "Daily automated backups", description: "" },
              { term: "Offsite storage", description: "Multiple locations" },
              { term: "30-day retention", description: "Policy" },
              { term: "One-click restore", description: "Capability" },
              { term: "Tested recovery", description: "Procedures" }
            ]
          },
          {
            heading: "Performance",
            items: [
              { term: "Speed optimization", description: "" },
              { term: "Database cleanup", description: "Optimization" },
              { term: "Image optimization", description: "" },
              { term: "Cache management", description: "" },
              { term: "CDN configuration", description: "Monitoring" }
            ]
          },
          {
            heading: "Monitoring",
            items: [
              { term: "24/7 uptime monitoring", description: "" },
              { term: "Performance tracking", description: "" },
              { term: "Error logging", description: "Alerting" },
              { term: "SEO monitoring", description: "" },
              { term: "Traffic analysis", description: "" },
              { term: "Broken link detection", description: "" }
            ]
          }
        ]
      }
    ],
    footer: {
      left: {
        title: "Typical Engagement",
        type: "highlight",
        content: "8-16 Weeks"
      },
      right: {
        title: "Technologies",
        type: "tags",
        content: ["Next.js", "WordPress", "WooCommerce", "Headless CMS", "React"]
      }
    }
  },

  // 4. PROCESS SECTION
  process: {
    title: "Development Process",
    description: "From assessment to optimized operations",
    phases: [
      {
        phase: "Phase 1",
        title: "Discovery & Planning",
        duration: "1-2 weeks",
        icon: "Search",
        color: "bg-blue-600",
        objectives: [
          "Understand business goals and challenges",
          "Identify competitor opportunities",
          "Define technical requirements",
          "Establish clear project milestones"
        ],
        activities: [
          "Stakeholder interviews",
          "Competitor research",
          "Technical requirements gathering",
          "Platform recommendation"
        ],
        deliverables: [
          "Detailed project plan",
          "Technical specifications",
          "Site architecture map",
          "Timeline with milestones"
        ]
      },
      {
        phase: "Phase 2",
        title: "Design",
        duration: "2-3 weeks",
        icon: "PenTool",
        color: "bg-purple-600",
        objectives: [
          "Establish layout and structure",
          "Create visual brand identity",
          "Build comprehensive design system",
          "Validate user experience flows"
        ],
        activities: [
          "Wireframes creation",
          "Visual design development",
          "Interactive prototyping",
          "Design review and revisions"
        ],
        deliverables: [
          "High-fidelity mockups",
          "Interactive prototypes",
          "Component library",
          "Design system documentation"
        ]
      },
      {
        phase: "Phase 3",
        title: "Development",
        duration: "4-6 weeks",
        icon: "Code",
        color: "bg-blue-600",
        objectives: [
          "Build frontend interfaces",
          "Develop backend functionality",
          "Integrate third-party services",
          "Ensure responsive implementation"
        ],
        activities: [
          "Frontend development",
          "Backend development",
          "Third-party integrations",
          "Content population"
        ],
        deliverables: [
          "Staging environment",
          "Content management system",
          "Functional website",
          "Source code repository"
        ]
      },
      {
        phase: "Phase 4",
        title: "Testing & QA",
        duration: "1-2 weeks",
        icon: "CheckCircle",
        color: "bg-green-600",
        objectives: [
          "Verify cross-browser compatibility",
          "Optimize performance metrics",
          "Validate SEO implementation",
          "Ensure accessibility compliance"
        ],
        activities: [
          "Cross-browser testing (Chrome, Safari, Firefox, Edge)",
          "Mobile device testing (iOS and Android)",
          "Performance testing",
          "SEO validation",
          "Accessibility testing",
          "User acceptance testing"
        ],
        deliverables: [
          "QA report",
          "Performance metrics",
          "Accessibility compliance score",
          "Ready-to-launch build"
        ]
      },
      {
        phase: "Phase 5",
        title: "Launch",
        duration: "1 week",
        icon: "Rocket",
        color: "bg-orange-600",
        objectives: [
          "Ensure secure connections",
          "Configure domain settings",
          "Set up visitor analytics",
          "Deploy to production"
        ],
        activities: [
          "Pre-launch checklist",
          "DNS configuration",
          "SSL certificate installation",
          "Analytics setup",
          "Monitoring tools configuration",
          "Production deployment"
        ],
        deliverables: [
          "Live website",
          "Admin credentials",
          "Analytics dashboard",
          "Deployment confirmation"
        ]
      },
      {
        phase: "Phase 6",
        title: "Post-Launch Support",
        duration: "Ongoing",
        icon: "LifeBuoy",
        color: "bg-teal-600",
        objectives: [
          "Maintain optimal performance",
          "Analyze user behavior patterns",
          "Keep content current",
          "Protect against security threats"
        ],
        activities: [
          "Bug fixes",
          "Performance monitoring",
          "Analytics review",
          "Content updates",
          "Feature enhancements",
          "Security updates"
        ],
        deliverables: [
          "Monthly reports",
          "Uptime logs",
          "Security audit logs",
          "Support resolution"
        ]
      }
    ]
  },

  // 5. TECH STACK
  techStack: {
    heading: "Technology Stack",
    description: "Leveraging the most reliable and performant tools in the industry",
    frameworks: [
      { name: "Next.js 14+", desc: "App Router & Server Components" },
      { name: "React 18+", desc: "Interactive interfaces" },
      { name: "WordPress 6.4+", desc: "Gutenberg block editor" },
      { name: "Vue.js", desc: "Progressive web applications" },
      { name: "Gatsby", desc: "Content-heavy static sites" }
    ],
    llms: [
      { name: "WordPress", desc: "Traditional and headless" },
      { name: "Contentful", desc: "Cloud-based headless CMS" },
      { name: "Sanity", desc: "Real-time collaborative CMS" },
      { name: "Strapi", desc: "Open-source headless CMS" },
      { name: "Prismic", desc: "Developer-friendly headless" }
    ],
    mlOps: ["WooCommerce", "Shopify", "Magento", "Custom Solutions"],
    cloudPlatforms: [
      {
        provider: "Hosting & Deployment",
        color: "text-green-600",
        services: ["Vercel", "Netlify", "WP Engine", "Kinsta", "AWS", "Google Cloud", "DigitalOcean"]
      },
      {
        provider: "Development Tools",
        color: "text-blue-600",
        services: ["Git", "GitHub Actions", "Docker", "Figma", "Adobe XD"]
      },
      {
        provider: "Performance",
        color: "text-orange-600",
        services: ["Cloudflare CDN", "Redis", "Memcached", "Lighthouse", "GTmetrix"]
      }
    ]
  },

  // 6. INDUSTRIES (Optional - can be removed if not applicable)
  industries: {
    heading: "Industries We Serve",
    description: "Tailored web solutions for diverse business sectors",
    items: [
      {
        id: "ecommerce",
        label: "Retail & E-commerce",
        icon: "ShoppingBag",
        theme: "blue",
        description: "High-conversion stores with seamless checkout",
        features: [
          {
            title: "Mobile Shopping",
            desc: "70% of e-commerce is mobile. We optimize for touch interfaces",
            icon: "Smartphone",
            caseStudy: {
              title: "Fashion Retailer",
              result: "$180K in 6 months"
            }
          },
          {
            title: "Cart Recovery",
            desc: "Recover 10-30% of abandoned sales",
            icon: "RefreshCw"
          }
        ]
      },
      {
        id: "saas",
        label: "B2B & SaaS",
        icon: "Server",
        theme: "green",
        description: "Professional platforms that generate qualified leads",
        features: [
          {
            title: "Lead Generation",
            desc: "Strategic funnels and gated resources",
            icon: "Target",
            caseStudy: {
              title: "Enterprise SaaS",
              result: "250% traffic increase"
            }
          },
          {
            title: "Performance",
            desc: "Sub-second loads for better ad scores",
            icon: "Zap"
          }
        ]
      },
      {
        id: "professional",
        label: "Professional Services",
        icon: "Briefcase",
        theme: "purple",
        description: "Authority-building websites for service firms",
        features: [
          {
            title: "Local SEO",
            desc: "Dominate local search results",
            icon: "MapPin",
            caseStudy: {
              title: "Law Firm",
              result: "100 to 5K visitors/mo"
            }
          },
          {
            title: "Trust Signals",
            desc: "Credentials, testimonials, case results",
            icon: "Award"
          }
        ]
      }
    ]
  },

  // 7. CASE STUDIES
  caseStudies: {
    heading: "Client Success Stories",
    description: "Proven results from real-world implementations",
    items: [
      {
        id: 1,
        category: "E-Commerce",
        client: "Online Fashion Boutique",
        title: "Fashion Retailer: $180K Revenue in 6 Months",
        icon: "ShoppingBag",
        color: "text-pink-600",
        challenge: "Launch a complete online store in 8 weeks with a limited budget. Needed to compete with established retailers while building a brand from scratch. Mobile-first customer base required flawless mobile shopping experience.",
        solution: "Built a WooCommerce store with custom mobile-first theme. Integrated 500 products with variable options for sizes and colors. Set up Stripe and PayPal for payments. Configured real-time shipping rates. Added Instagram feed integration. Implemented abandoned cart recovery. Optimized for Core Web Vitals.",
        implementation: [
          "Custom mobile-first WooCommerce theme",
          "500 variable products (sizes, colors)",
          "Stripe and PayPal payment integration",
          "Real-time shipping rate calculation",
          "Instagram feed integration",
          "Abandoned cart recovery system",
          "Core Web Vitals optimization"
        ],
        results: [
          { label: "Launch", value: "On Schedule" },
          { label: "Mobile Traffic", value: "72%" },
          { label: "Load Time", value: "2.1s" },
          { label: "Conversion Rate", value: "3.2%" },
          { label: "First Month Sales", value: "$28K" },
          { label: "6-Month Revenue", value: "$180K" },
          { label: "Customers", value: "2,500" },
          { label: "ROI", value: "12x" }
        ],
        quote: "Webronic built us a beautiful, fast store that exceeded our expectations. The site handles everything we need, and customers constantly compliment how easy it is to shop on mobile. The investment paid for itself in the first quarter.",
        author: "Founder, Online Fashion Boutique"
      },
      {
        id: 2,
        category: "B2B SaaS",
        client: "Enterprise Software Company",
        title: "B2B SaaS Company: 250% Traffic Increase",
        icon: "Server",
        color: "text-blue-600",
        challenge: "Outdated website hurting brand perception. Load times exceeding 8 seconds drove visitors away. Poor SEO meant low visibility for target keywords. Not mobile responsive. Difficult for marketing team to update content. Needed sophisticated features like product demos, case studies, and gated resources.",
        solution: "Built a Next.js application with Contentful CMS for content management. Implemented server-side rendering for SEO. Created dynamic product pages with interactive demos. Added gated resources with HubSpot integration. Built case study showcase. Developed blog with advanced filtering. Added support for English, German, and French.",
        implementation: [
          "Next.js with Contentful CMS",
          "Server-side rendering",
          "Dynamic product pages with demos",
          "Gated resources with HubSpot",
          "Case study showcase",
          "Blog with filtering",
          "Multi-language support (EN, DE, FR)"
        ],
        results: [
          { label: "Load Time", value: "1.2s (from 8s)" },
          { label: "Lighthouse Score", value: "98 (from 30)" },
          { label: "Mobile-Friendly", value: "100%" },
          { label: "Search Position", value: "#12 (from #45)" },
          { label: "Organic Traffic", value: "+250%" },
          { label: "Form Submissions", value: "+180%" },
          { label: "Demo Requests", value: "+40%" },
          { label: "Sales Cycle", value: "-25%" }
        ],
        quote: "The new site transformed our online presence. We're finally showing up on the first page of Google for our target keywords, and the sales team says leads are much better qualified. The investment has paid for itself many times over.",
        author: "VP of Marketing, Enterprise SaaS"
      },
      {
        id: 3,
        category: "Professional Services",
        client: "Mid-size Law Firm",
        title: "Law Firm: From 100 to 5,000 Monthly Visitors",
        icon: "Scale",
        color: "text-green-600",
        challenge: "Generic template website looked unprofessional. No local SEO optimization meant competitors dominated search results. Zero blog or content marketing. Not ranking for valuable legal keywords. Receiving only 50-100 website visitors per month, mostly from business cards. Competitors getting all the online leads.",
        solution: "Built custom WordPress site with professional design. Created 50+ practice area landing pages optimized for specific legal keywords. Implemented LocalBusiness schema markup. Optimized Google Business Profile. Created attorney profiles highlighting experience. Built case results showcase. Added client testimonials. Developed FAQ pages for common legal questions. Launched content calendar with 2 blog posts per week. Built internal linking strategy. Conducted backlink building campaign.",
        implementation: [
          "Custom WordPress professional design",
          "50+ practice area landing pages",
          "LocalBusiness schema implementation",
          "Google Business Profile optimization",
          "Attorney profile pages",
          "Case results showcase",
          "Client testimonial integration",
          "Legal FAQ pages",
          "Bi-weekly blog content strategy",
          "Internal linking structure",
          "Backlink building campaign"
        ],
        results: [
          { label: "3-Month Traffic", value: "800/mo (from 100)" },
          { label: "3-Month Rankings", value: "10+ top 10" },
          { label: "3-Month Leads", value: "25/mo (from 5)" },
          { label: "6-Month Traffic", value: "2,500/mo" },
          { label: "6-Month Rankings", value: "50+ top 3" },
          { label: "Featured Snippets", value: "8" },
          { label: "6-Month Leads", value: "60/mo" },
          { label: "12-Month Traffic", value: "5,000+/mo" },
          { label: "Monthly Leads", value: "100+" },
          { label: "New Revenue", value: "$800K/yr" },
          { label: "ROI", value: "20x" }
        ],
        quote: "The website Webronic built has become our number one source of new clients. We went from getting a handful of inquiries per month to over 100. The investment paid for itself within two months, and it continues to generate significant revenue. We've even hired additional attorneys to handle the new client volume.",
        author: "Managing Partner, Law Firm"
      }
    ]
  },

  // 8. FAQ
  faq: {
    heading: "Frequently Asked Questions",
    items: [
      {
        question: "How do I know if I need WordPress or Next.js?",
        answer: "Choose WordPress when your team needs to update content frequently without developer help, you want access to thousands of plugins for specific features, you're working with a moderate budget, or you need a standard business website or blog. Choose Next.js when performance is absolutely critical (sub-2-second load times), you need complex interactions or web application features, you want the most modern architecture with perfect SEO, or you have development resources for ongoing maintenance.",
        answerFooter: "We'll evaluate your specific needs, technical capabilities, budget, and long-term goals during our consultation to recommend the right platform. Sometimes the answer is a combination: WordPress as a headless CMS with Next.js frontend."
      },
      {
        question: "What's the realistic timeline for my website project?",
        answer: "Project scope depends primarily on complexity and your team's availability. Factors that affect timeline include design revisions, content preparation, stakeholder availability, third-party integration complexity, and custom feature requirements.",
        answerFooter: "We provide a detailed timeline during the discovery phase, with milestones and dependencies clearly mapped. Projects typically move faster when you have content ready and can provide timely feedback during design phases."
      },
      {
        question: "Can I update website content myself, or do I need to hire you every time?",
        answer: "You can definitely update content yourself. That's why we use content management systems. WordPress provides an intuitive admin panel similar to Microsoft Word. Add pages, write blog posts, upload images, update menus—all without touching code. Most clients feel comfortable after 1-2 hours of training. Next.js sites include an admin panel (Contentful, Sanity, or similar) for content updates. Slightly less intuitive than WordPress but still manageable for non-technical users.",
        answerFooter: "We provide training sessions, video tutorials, and written documentation. For ongoing content updates beyond your capacity, our maintenance plans include content update hours."
      },
      {
        question: "What happens if something breaks after launch?",
        answer: "All projects include post-launch support covering bug fixes and issues directly related to our work. The length varies by project size. After that period, our maintenance plans cover: Security issues (patched immediately), Compatibility problems (fixed as part of regular updates), Performance degradation (monitored and optimized), Minor bugs (fixed during regular maintenance), Emergency support (available 24/7 for critical issues).",
        answerFooter: "For issues outside our scope (third-party plugin conflicts, hosting problems, client-added code), we can fix them on an hourly basis or as part of your maintenance plan."
      },
      {
        question: "Will my website work on all devices and browsers?",
        answer: "Yes. Every website we build is: Fully responsive (adapts to all screen sizes), Mobile-first (designed for smartphones first), Touch-friendly (proper button sizes and spacing), Cross-browser compatible (tested on Chrome, Safari, Firefox, Edge), Fast on mobile networks (optimized for 3G and 4G), Tested on real devices (not just emulators).",
        list: [
          "iPhone (multiple models)",
          "Android phones",
          "iPads",
          "Android tablets",
          "Windows laptops",
          "Macs",
          "Older devices when relevant to your audience"
        ],
        answerFooter: "Given that 60%+ of traffic comes from mobile devices, responsive design isn't optional. It's the foundation of everything we build."
      },
      {
        question: "How do you handle SEO?",
        answer: "SEO happens in two stages: Technical SEO (included in every project) includes Semantic HTML structure, Optimized meta tags (title, description), Schema.org structured data, XML sitemap, Clean URL structure, Image optimization with alt text, Fast page load speeds, Mobile optimization, and Internal linking structure. Ongoing SEO (separate service) includes Keyword research and strategy, Content creation and optimization, Link building campaigns, Local SEO optimization, Competitive analysis, and Monthly reporting and adjustments.",
        answerFooter: "The technical foundation we build positions your site to rank well. Ongoing SEO services help you compete for valuable keywords in your industry."
      },
      {
        question: "Do I own the website, or am I locked into working with you?",
        answer: "You own everything. Upon final payment, you receive: Complete source code, All design files, All content and media, Full admin access, and Documentation. You can: Host anywhere you choose, Hire any developer for future work, Make any changes you want, Keep or remove our branding.",
        answerFooter: "No vendor lock-in. No proprietary systems. No recurring fees unless you choose our maintenance services. Complete ownership and freedom."
      },
      {
        question: "What about website security?",
        answer: "Security is built into every site we create. Technical Security includes SSL/HTTPS encryption (always), Secure hosting configuration, Regular software updates, Strong password policies, Two-factor authentication options, File permission hardening, and Security headers implementation. WordPress-Specific security includes Security plugins (Wordfence or Sucuri), Login attempt limiting, Firewall protection, Malware scanning, Database security, and Admin area protection. Ongoing Protection (maintenance plans) includes Security monitoring, Immediate patch application, Regular security audits, Backup verification, and Intrusion detection.",
        answerFooter: "For e-commerce sites handling payment data, we ensure PCI compliance through proper payment gateway integration. Payments process through Stripe, PayPal, or similar services—never stored on your server."
      },
      {
        question: "Can you migrate my existing website without losing SEO rankings?",
        answer: "Yes. We've migrated hundreds of websites while preserving SEO value. Our Migration Process: Audit current site's SEO profile, Document all URLs and rankings, Export all content and media, Rebuild on new platform, Set up proper 301 redirects (old URLs to new URLs), Verify redirect implementation, Test all internal links, Submit updated sitemap to search engines, Monitor rankings post-migration, and Make adjustments as needed.",
        list: [
          "Search rankings preserved",
          "Backlinks maintained",
          "Domain authority protected",
          "Indexed pages transferred",
          "User accounts migrated (if applicable)",
          "Order history preserved (for e-commerce)"
        ],
        answerFooter: "We launch during low-traffic hours to minimize impact."
      },
      {
        question: "What if I need changes or new features after launch?",
        answer: "Websites evolve with your business. We handle post-launch work through several approaches: Included Support (bug fixes and issues directly related to our work are covered at no charge for a specified period), Maintenance Plans (include content updates, minor feature additions, ongoing optimization, and priority support), Project-Based Work (for major features or redesign elements, we scope the work and provide a fixed quote), and Hourly Support (for occasional updates and small fixes outside a maintenance plan).",
        answerFooter: "Most clients find a maintenance plan provides the best value for ongoing work."
      }
    ]
  },

  // 9. GET STARTED
  getStarted: {
    badge: "Get Started",
    titleLines: ["Ready to Build Your", "High-Performance Website?"],
    description: "Let's discuss your goals and create a website that drives real results",
    cards: [
      {
        id: "consultation",
        title: "Free Website Consultation",
        description: "Complimentary consultation where we discuss your website goals and business requirements",
        icon: "MessageSquare",
        theme: "light",
        list: [
          "Discuss your website goals",
          "Review competitors and best practices",
          "Recommend the right platform",
          "Provide estimate and project scope",
          "Answer all your questions"
        ],
        cta: { text: "Book Free Consultation", link: "/contact" }
      },
      {
        id: "proposal",
        title: "Request Detailed Proposal",
        description: "Receive a comprehensive proposal with technical specifications and timeline",
        icon: "FileText",
        theme: "dark",
        list: [
          "Detailed scope and technical specs",
          "Project plan with milestones",
          "Itemized cost breakdown",
          "Technology stack recommendations",
          "Portfolio samples relevant to your industry",
          "Team member profiles"
        ],
        cta: { text: "Request Proposal", link: "/contact" }
      }
    ],
    contact: {
      title: "Contact Our Development Team",
      subtitle: "Direct access to web development experts",
      methods: [
        { label: "Email", value: "contact@webronic.com", icon: "Mail", iconColor: "text-blue-600" },
        { label: "Phone", value: "+91 72000 88500", icon: "Phone", iconColor: "text-green-600" }
      ]
    }
  },

  // 10. RELATED RESOURCES
  relatedResources: {
    services: [
      { title: "Custom App Development", id: "application-services", icon: "Smartphone", color: "text-purple-500", bg: "bg-purple-50" },
      { title: "AI & Machine Learning", id: "ai-machine-learning", icon: "Brain", color: "text-indigo-500", bg: "bg-indigo-50" },
      { title: "Cloud Services", id: "cloud-services", icon: "Cloud", color: "text-sky-500", bg: "bg-sky-50" },
      { title: "Digital Transformation", id: "digital-transformation", icon: "Zap", color: "text-orange-500", bg: "bg-orange-50" },
      { title: "DevOps Services", id: "devops", icon: "Settings", color: "text-green-500", bg: "bg-green-50" }
    ],
    columns: [
      {
        title: "Comprehensive Guides",
        icon: "BookOpen",
        items: [
          { label: "Complete Guide to Choosing the Right Website Platform", href: "#" },
          { label: "WordPress vs Custom Development: Making the Right Choice", href: "#" },
          { label: "E-commerce Platform Comparison: WooCommerce vs Shopify vs Custom", href: "#" },
          { label: "Website Redesign Checklist: 50 Critical Considerations", href: "#" }
        ]
      },
      {
        title: "Expert Insights",
        icon: "Lightbulb",
        items: [
          { label: "10 Proven Ways to Improve Website Performance", href: "#" },
          { label: "SEO Best Practices for Modern Websites", href: "#" },
          { label: "Next.js vs Traditional WordPress: Performance Deep Dive", href: "#" },
          { label: "Choosing the Best CMS for Your Business Needs", href: "#" }
        ]
      },
      {
        title: "Free Tools",
        icon: "Wrench",
        items: [
          { label: "Website Speed Test", href: "#" },
          { label: "SEO Audit Tool", href: "#" },
          { label: "Website Cost Calculator", href: "#" },
          { label: "CMS Comparison Tool", href: "#" }
        ]
      }
    ]
  }
};