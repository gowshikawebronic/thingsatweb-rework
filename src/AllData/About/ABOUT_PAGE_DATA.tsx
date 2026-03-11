import {
  Brain,
  Globe2,
  Cpu,
  Layers,
  Lightbulb,
  Target,
  ShieldCheck,
  Users,
  Award,
  Zap,
  Leaf,
  Heart,
  Briefcase,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
  Instagram,
  Mail,
  Phone,
  Clock
} from "lucide-react";

export const ABOUT_PAGE_DATA = {
  hero: {
    h1: "Architecting Digital Excellence Since 2010",
    subHeadline: "Global Enterprise Technology Partner | Digital Transformation • AI/ML Innovation • Cloud Excellence"
  },
  overview: {
    title: "Company Overview",
    content: [
      "Webronic Industries Private Limited is a global technology services company specializing in AI-driven digital transformation, cloud computing, and enterprise software development. Founded in 2010, we've grown from a small software development team in Chennai to a global organization serving over 500 clients across 50+ countries",
      "Our mission is simple yet powerful: Transform businesses through intelligent technology solutions that drive measurable results. We achieve this by combining deep technical expertise with industry knowledge, delivering solutions that don't just meet requirements but exceed expectations and create competitive advantages"
    ],
    differentiators: {
      title: "What Sets Us Apart",
      items: [
        {
          title: "AI-First Approach",
          desc: "Unlike traditional IT service companies, we embed artificial intelligence and machine learning across all our solutions. From predictive analytics in our ERP systems to computer vision in our retail automation platforms, AI isn't an add-on but fundamental to how we build technology",
          icon: Brain
        },
        {
          title: "Product + Services Model",
          desc: "We're not just consultants but also product innovators. Our proprietary platforms (StoreTech, Tanlux, Value Charts) serve thousands of users globally, giving us real-time insights that inform our consulting and custom development work",
          icon: Layers
        },
        {
          title: "Global Reach, Local Presence",
          desc: "Operating from India and Europe (through our partnership with Thingsatweb Sweden AB), we combine Indian innovation and cost-effectiveness with European quality standards and market access",
          icon: Globe2
        },
        {
          title: "Industry Specialization",
          desc: "We don’t try to be everything to everyone. Our deep expertise in manufacturing, retail, financial services, and healthcare allows us to deliver solutions that address industry-specific challenges with proven approaches",
          icon: Briefcase
        }
      ]
    },
    values: {
      title: "Our Values",
      items: [
        { title: "Innovation First", desc: "We continuously explore emerging technologies and incorporate them into our solutions. Our R&D investment exceeds industry averages", icon: Lightbulb },
        { title: "Client Success", desc: "Your success is our success. We measure ourselves not by projects delivered but by business outcomes achieved", icon: Target },
        { title: "Excellence in Execution", desc: "Quality isn’t negotiable. Our rigorous development processes and comprehensive testing ensure every solution meets the highest standards", icon: Award },
        { title: "Transparency & Integrity", desc: "We build long-term partnerships based on trust. Honest communication and ethical practices guide every client interaction", icon: ShieldCheck },
        { title: "Continuous Learning", desc: "Technology evolves rapidly. Our team dedicates 10% of time to learning new technologies and earning certifications", icon: Zap }
      ]
    }
  },
  story: {
    title: "Our Story",
    subtitle: "The Journey from Startup to Global Enterprise",
    timeline: [
      { year: "2010", title: "The Beginning", desc: "Webronic Industries was founded in Chennai by a team of software engineers passionate about using technology to solve real business problems. Our first project was a custom inventory management system for a local manufacturer" },
      { year: "2012-2014", title: "Building Expertise", desc: "We expanded our service offerings into web development, mobile applications, and ERP systems. Early projects in manufacturing automation gave us deep expertise in Industry 4.0 technologies" },
      { year: "2015", title: "International Expansion", desc: "Secured our first international client and established operations in Madurai and Salem. This geographic expansion allowed us to tap into diverse talent pools across Tamil Nadu" },
      { year: "2016-2017", title: "Product Innovation", desc: "Launched Value Charts, our business intelligence platform, marking our evolution from pure services to a product and services model. The platform gained traction with SMBs seeking affordable BI solutions" },
      { year: "2018", title: "European Market Entry", desc: "Partnered with Thingsatweb Sweden AB to serve European markets. This partnership provided access to Nordic and European clients while maintaining development efficiency in India" },
      { year: "2019-2020", title: "Retail Automation Breakthrough", desc: "Developed StoreTech, our autonomous retail platform, initially for Swedish unmanned convenience stores. The platform’s success during COVID-19 accelerated adoption" },
      { year: "2021", title: "AI Practice Launch", desc: "Established dedicated AI/ML practice with partnerships with OpenAI, Google AI, and NVIDIA. Began delivering advanced AI solutions including computer vision quality inspection" },
      { year: "2022", title: "Tanlux Platform", desc: "Launched Tanlux ERP specifically for tanning studios, demonstrating our ability to create vertical-specific solutions. Platform now powers autonomous tanning studios across Sweden" },
      { year: "2023-Present", title: "Global Growth", desc: "Expanded to serve Fortune 500 enterprises while maintaining our startup agility. Our client portfolio now includes manufacturers, retailers, financial institutions, and healthcare providers across five continents" }
    ]
  },
  leadership: {
    title: "Leadership Team",
    members: [
      {
        name: "RAJA SM",
        role: "Chief Technology Officer",
        bio: "With over 18 years of experience in software architecture and technology innovation, Raja leads Webronic's technology strategy and product development. He pioneered our AI first approach and oversees our R&D initiatives",
        expertise: "Cloud architecture, AI/ML systems, enterprise software design",
        education: "M.Tech in Computer Science"
      },
      {
        name: "SURYANARAYANAN D",
        role: "Chief Executive Officer",
        bio: "Suryanarayanan brings strategic vision and operational excellence to Webronic. He’s responsible for global business development, client relationships, and organizational growth",
        expertise: "Business strategy, client management, operational excellence",
        education: "MBA, B.E. in Electronics & Communication"
      },
      {
        name: "VEERAMANIKANDAN V",
        role: "Director of R&D & Lead Technology Engineer",
        bio: "Veeramanikandan drives innovation through research and development of emerging technologies. He leads technical teams developing our proprietary platforms and exploring next-generation solutions",
        expertise: "IoT systems, embedded engineering, industrial automation",
        education: "B.E. in Electronics & Instrumentation"
      }
    ]
  },
  presence: {
    title: "Global Presence",
    india: [
      { city: "Chennai (Reg. Office)", address: "New #33, Old #17, 2nd St, Mylapore, Chennai - 600004", phone: "+91 72000 88500" },
      { city: "Chennai (Digital Hub)", address: "A1-20, Sakthi Apartments, Cenotoph Road, Teynampet, Chennai - 600004", desc: "Primary development center with 100+ engineers" },
      { city: "Madurai", address: "2nd Floor, 3/92B JS TOWER, Alanganallur Main Road, Sikkandar Savadi, Madurai, Tamil Nadu 625018", phone: "+91 63833 26928", desc: "Specialized in mobile and web development" },
      { city: "Salem", address: "1-718, Sannasi Muniyappan Kovil, Surappalli (PO), Mettur (TK), Jalakandapuram, Salem - 636501", desc: "Focus on IoT and embedded systems" }
    ],
    europe: {
      partner: "Thingsatweb Sweden AB",
      desc: "Serving Nordic and European markets with local presence, support, and compliance with EU regulations including GDPR"
    },
    regions: [
      "Europe: Sweden, Norway",
      "Asia-Pacific: India",
    ]
  },
  metrics: {
    title: "By The Numbers",
    stats: [
      { value: "15+", label: "Years Excellence" },
      { value: "500+", label: "Clients Global" },
      { value: "3+", label: "Countries" },
      { value: "200+", label: "Team Members" },
      { value: "99.9%", label: "Client Satisfaction" },
      { value: "1000+", label: "Projects Delivered" },
      { value: "150+", label: "Platform Users" },
      { value: "50M+", label: "StoreTech Transactions" },
      { value: "$500M+", label: "Cloud Infra Managed" }
    ],
    awards: [
      "2023: Top 100 IT Services Companies in India - SME Business Awards",
      "2022: Innovation in Retail Technology - Nordic Retail Tech Summit",
      "2021: Best AI Implementation - Manufacturing Technology Awards",
      "2020: Cloud Partner of the Year - AWS India",
      "2019: Emerging Technology Company - Chennai IT Awards"
    ]
  },
  certifications: {
    title: "Certifications & Partnerships",
    quality: ["ISO 9001:2015", "ISO 27001:2013", "SOC 2 Type II", "GDPR Compliant"],
    cloud: [
      { name: "AWS Advanced Consulting Partner", desc: "Migration, DevOps, ML" },
      { name: "Microsoft Azure Gold Partner", desc: "Infra, App Dev, Data Analytics" },
      { name: "Google Cloud Platform Partner", desc: "Data Analytics, ML, Kubernetes" }
    ],
    tech: [
      { name: "OpenAI Technology Partner", desc: "GPT models & specialized support" },
      { name: "NVIDIA AI Partner", desc: "GPU-accelerated computing" },
      { name: "SAP Implementation Partner", desc: "S/4HANA implementation" }
    ]
  },
  csr: {
    title: "Corporate Social Responsibility",
    education: {
      title: "Education Initiatives",
      items: ["Coding Bootcamps: 500+ students trained", "Scholarship Programs: 20/year", "Internship Programs: 50+/year"]
    },
    environment: {
      title: "Environmental Commitment",
      items: ["Carbon Neutral Operations", "Paperless Office (95% reduction)", "E-Waste Recycling"]
    },
    community: {
      title: "Community Engagement",
      items: ["Technology for Good (Pro-bono)", "Disaster Relief Support", "Local Employment Priority"]
    }
  },
  culture: {
    title: "Our Culture",
    desc: "Remote-First, People-Centered. We believe great work happens when people have flexibility and autonomy",
    points: [
      { title: "Work-Life Balance", desc: "Flexible hours, unlimited time off, and respect for personal time ensure our team stays energized and motivated" },
      { title: "Learning & Development", desc: "Annual learning budget for courses, conferences, and certifications. Regular internal knowledge-sharing sessions and tech talks" },
      { title: "Diversity & Inclusion", desc: "Diverse team across backgrounds, genders, and locations. Inclusive culture where every voice is valued" },
      { title: "Innovation Time", desc: "20% time for personal projects and exploration of new technologies. Many of our platform features originated from innovation time projects" }
    ],
    perks: [
      "Competitive compensation", "Health insurance", "Professional development budget", "Latest technology", "Regular events", "Mentorship", "Career growth"
    ]
  },
  whyChoose: {
    title: "Why Choose Webronic",
    points: [
      { title: "1. Proven Track Record", desc: "15+ years delivering successful projects across industries and geographies" },
      { title: "2. Technical Excellence", desc: "Deep expertise in AI/ML, cloud, IoT. 100+ professional certifications" },
      { title: "3. Industry Knowledge", desc: "Specialized in manufacturing, retail, finance, and healthcare" },
      { title: "4. End-to-End Services", desc: "Strategy, consulting, development, deployment, and support" },
      { title: "5. Global Delivery", desc: "Cultural understanding with cost-effective development" },
      { title: "6. Innovation Focus", desc: "Continuous investment in R&D and emerging technologies" },
      { title: "7. Transparent Communication", desc: "Honest assessments and realistic commitments" },
      { title: "8. Long-Term Partnership", desc: "Average client relationship exceeds 5 years" }
    ]
  },
  careers: {
    title: "Join Our Team",
    desc: "Webronic is always looking for talented individuals passionate about technology and innovation",
    positions: [
      "Senior Full-Stack Engineers",
      "AI/ML Engineers",
      "Cloud Architects",
      "DevOps Engineers",
      "UI/UX Designers",
      "Project Managers"
    ],
    ctaLink: "/careers"
  },
  contact: {
    title: "Contact Us",
    general: { email: "contact@webronic.com", phone: "+91 72000 88500", hours: "Mon-Fri, 9 AM - 6 PM IST" },
    sales: "contact@webronic.com",
    careers: "contact@webronic.com",
    media: "contact@webronic.com",
    social: [
      {
        platform: "Facebook",
        link: "https://www.facebook.com/thingsatweb",
        icon: Facebook,
      },
      {
        platform: "Instagram",
        link: "https://www.instagram.com/thingsatweb/",
        icon: Instagram,
      },
      {
        platform: "YouTube",
        link: "https://www.youtube.com/@thingsatweb",
        icon: Youtube,
      },
      {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/thingsatweb",
        icon: Linkedin,
      },
    ],

    newsletter: "Subscribe for monthly insights on technology trends, case studies, and company updates"
  }
};