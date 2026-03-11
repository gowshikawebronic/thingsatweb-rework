export const lastUpdated = "December 2, 2025";

export type ContentBlock = {
  type: "paragraph" | "list" | "table" | "subsection" | "contact-box";
  text?: string; // Used for paragraphs or subsection titles
  items?: string[]; // Used for bullet lists
  tableHeaders?: string[]; // Used for table columns
  tableRows?: string[][]; // Used for table data
  subBlocks?: ContentBlock[]; // Used for nesting content inside subsections
};

export type PrivacySection = {
  title: string;
  content: ContentBlock[];
};

export const privacyData: PrivacySection[] = [
  {
    title: "INTRODUCTION",
    content: [
      {
        type: "paragraph",
        text: "Welcome to Thingsatweb Sweden AB’s Privacy Policy. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you use our services and tell you about your privacy rights and how the law protects you.",
      },
      {
        type: "subsection",
        text: "1.1 Controller Information",
        subBlocks: [
          {
            type: "paragraph",
            text: "Thingsatweb Sweden AB is the controller and responsible for your personal data (collectively referred to as “Thingsatweb”, “we”, “us” or “our” in this privacy policy).",
          },
          {
            type: "contact-box", // Special styling for company details
            text: "Company Details",
            items: [
              "Organization Number: 559299-2241",
              "Address: Sockerbruksgatan 7, 531 40 Lidköping, Sweden",
              "Phone: +46707770727",
              "Email: kontakt@thingsatweb.se",
              "Website: https://www.thingsatweb.se",
            ],
          },
        ],
      },
      {
        type: "subsection",
        text: "1.2 Data Protection Officer",
        subBlocks: [
          {
            type: "paragraph",
            text: "We have appointed a Data Protection Officer (DPO) who is responsible for overseeing questions in relation to this privacy policy. If you have any questions about this privacy policy, including any requests to exercise your legal rights, please contact:",
          },
          {
            type: "contact-box",
            text: "Data Protection Officer",
            items: [
              "Email: dpo@thingsatweb.se",
              "Phone: +46707770727",
              "Postal: DPO, Thingsatweb Sweden AB, Sockerbruksgatan 7, 531 40 Lidköping, Sweden",
            ],
          },
        ],
      },
      {
        type: "subsection",
        text: "1.3 Changes to This Policy",
        subBlocks: [
          {
            type: "paragraph",
            text: "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the “Last Updated” date. For material changes, we will provide additional notice through email or on our website.",
          },
        ],
      },
    ],
  },
  {
    title: "OUR SERVICES AND DATA PROCESSING ROLES",
    content: [
      {
        type: "subsection",
        text: "2.1 Services We Provide",
        subBlocks: [
          {
            type: "paragraph",
            text: "Thingsatweb Sweden AB provides comprehensive technology services including:",
          },
          {
            type: "list",
            items: [
              "Web Development and Design: Custom websites, e-commerce platforms (WooCommerce, Magento), WordPress development",
              "Mobile App Development: iOS and Android application development with AI integration",
              "IoT Solutions: Internet of Things implementations for real-time monitoring and predictive maintenance",
              "Digital Marketing: SEO optimization, Google Ads, social media marketing campaigns",
              "Domain and Hosting Services: Web hosting on Amazon AWS, domain registration, SSL certificates",
              "Cloud Infrastructure Management: AWS and Google Cloud Platform hosting and management",
            ],
          },
        ],
      },
      {
        type: "subsection",
        text: "2.2 Our Data Processing Roles",
        subBlocks: [
          {
            type: "paragraph",
            text: "We process personal data in two distinct capacities:",
          },
          {
            type: "paragraph",
            text: "As Data Controller:",
          },
          {
            type: "list",
            items: [
              "For our own business operations (website visitors, contact form submissions, marketing communications)",
              "For direct client relationships where we determine processing purposes",
              "For recruitment and employment data",
            ],
          },
          {
            type: "paragraph",
            text: "As Data Processor:",
          },
          {
            type: "list",
            items: [
              "When providing technology services to clients (we process data on their behalf)",
              "When managing cloud infrastructure containing client data",
              "When developing applications that handle end-user data for our clients",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "PERSONAL DATA WE COLLECT",
    content: [
      {
        type: "subsection",
        text: "3.1 Data We Collect as Controller",
        subBlocks: [
          {
            type: "paragraph",
            text: "When you interact with our website or request our services, we collect:",
          },
          {
            type: "list",
            items: [
              "Identity Data: First name and last name, Company name and title, Organization number (for business clients)",
              "Contact Data: Email address, Telephone number, Business address",
              "Technical Data: IP address, Browser type and version, Device information, Time zone setting and location, Operating system and platform",
              "Usage Data: Information about how you use our website, Pages visited and time spent, Referral source",
              "Marketing and Communications Data: Your preferences for receiving marketing from us, Your communication preferences",
            ],
          },
        ],
      },
      {
        type: "subsection",
        text: "3.2 Data We Process as Processor",
        subBlocks: [
          {
            type: "paragraph",
            text: "When providing services to our clients, we may process various types of personal data on their behalf, including but not limited to:",
          },
          {
            type: "list",
            items: [
              "End-user account information (names, emails, phone numbers)",
              "Transaction and payment data (tokenized payment information)",
              "Usage analytics and behavioral data",
              "Device and technical information",
              "Location data (when relevant to services)",
              "Any other data our clients collect through systems we develop and maintain",
            ],
          },
          {
            type: "paragraph",
            text: "Important: When we act as a processor, our clients (the data controllers) are responsible for informing their users about data collection and use. We process this data only according to our clients’ documented instructions and applicable data processing agreements.",
          },
        ],
      },
    ],
  },
  {
    title: "HOW WE COLLECT YOUR PERSONAL DATA",
    content: [
      {
        type: "subsection",
        text: "4.1 Direct Interactions",
        subBlocks: [
          {
            type: "paragraph",
            text: "You provide personal data directly when you:",
          },
          {
            type: "list",
            items: [
              "Submit contact forms on our website",
              "Request quotes or services",
              "Subscribe to newsletters or marketing communications",
              "Engage with us via email, phone, or social media",
              "Participate in surveys or provide feedback",
            ],
          },
        ],
      },
      {
        type: "subsection",
        text: "4.2 Automated Technologies",
        subBlocks: [
          {
            type: "paragraph",
            text: "We automatically collect technical and usage data when you visit our website using:",
          },
          {
            type: "list",
            items: [
              "Cookies and similar tracking technologies",
              "Server logs",
              "Analytics tools (Google Analytics)",
            ],
          },
        ],
      },
      {
        type: "subsection",
        text: "4.3 Third Parties",
        subBlocks: [
          {
            type: "paragraph",
            text: "We may receive personal data from:",
          },
          {
            type: "list",
            items: [
              "Business partners and referral sources",
              "Analytics providers",
              "Publicly available sources (business registries)",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "HOW WE USE YOUR PERSONAL DATA",
    content: [
      {
        type: "subsection",
        text: "5.1 Legal Basis for Processing",
        subBlocks: [
          {
            type: "paragraph",
            text: "We will only use your personal data when the law allows us to. Most commonly, we use your personal data in the following circumstances:",
          },
          {
            type: "list",
            items: [
              "Contract Performance (Article 6(1)(b) GDPR): To provide our services and fulfill our contractual obligations",
              "Legal Obligation (Article 6(1)(c) GDPR): To comply with legal requirements such as accounting and tax obligations",
              "Legitimate Interests (Article 6(1)(f) GDPR): For business development, service improvement, and security purposes",
              "Consent (Article 6(1)(a) GDPR): For marketing communications and optional data processing",
            ],
          },
        ],
      },
      {
        type: "subsection",
        text: "5.2 Purposes of Processing",
        subBlocks: [
          {
            type: "paragraph",
            text: "We use your personal data for the following purposes:",
          },
          {
            type: "table",
            tableHeaders: ["Purpose", "Data Categories", "Legal Basis"],
            tableRows: [
              [
                "Service delivery and project management",
                "Identity, Contact, Technical",
                "Contract Performance",
              ],
              [
                "Customer support and communication",
                "Identity, Contact, Communications",
                "Contract Performance, Legitimate Interests",
              ],
              [
                "Marketing and business development",
                "Identity, Contact, Marketing",
                "Consent, Legitimate Interests",
              ],
              [
                "Website analytics and improvement",
                "Technical, Usage",
                "Legitimate Interests",
              ],
              [
                "Security and fraud prevention",
                "Technical, Usage",
                "Legitimate Interests",
              ],
              [
                "Legal compliance and reporting",
                "All categories",
                "Legal Obligation",
              ],
            ],
          },
        ],
      },
      {
        type: "subsection",
        text: "5.3 Marketing Communications",
        subBlocks: [
          {
            type: "paragraph",
            text: "We will only send you marketing communications if you have opted in. You can opt out at any time by:",
          },
          {
            type: "list",
            items: [
              "Using unsubscribe links in emails",
              "Contacting dpo@thingsatweb.se",
              "Updating your preferences in your account settings",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "WHO WE SHARE YOUR DATA WITH",
    content: [
      {
        type: "subsection",
        text: "6.1 Service Providers (Data Processors)",
        subBlocks: [
          {
            type: "paragraph",
            text: "We share personal data with trusted third-party service providers who assist in delivering our services:",
          },
          {
            type: "table",
            tableHeaders: ["Service Provider", "Location", "Services", "Safeguards"],
            tableRows: [
              [
                "Amazon Web Services (AWS)",
                "Stockholm, Sweden",
                "Cloud hosting and infrastructure",
                "ISO 27001, SOC 2, AWS DPA",
              ],
              [
                "Google Cloud Platform",
                "Finland (EU)",
                "Backup and disaster recovery",
                "ISO 27001, Google Cloud DPA",
              ],
              [
                "Google Analytics",
                "USA (EU processing)",
                "Website analytics",
                "IP anonymization, SCCs",
              ],
              [
                "Email service providers",
                "EU/EEA",
                "Email communications",
                "GDPR compliance, DPAs",
              ],
            ],
          },
        ],
      },
      {
        type: "subsection",
        text: "6.2 Other Recipients",
        subBlocks: [
          {
            type: "paragraph",
            text: "We may also share your personal data with:",
          },
          {
            type: "list",
            items: [
              "Professional Advisors: Lawyers, accountants, auditors (under confidentiality obligations)",
              "Government Authorities: Tax authorities (Skatteverket), law enforcement when legally required",
              "Business Partners: With your consent or when necessary for service delivery",
            ],
          },
        ],
      },
      {
        type: "subsection",
        text: "6.3 Data Processing Agreements",
        subBlocks: [
          {
            type: "paragraph",
            text: "All our data processors are required to sign Data Processing Agreements (DPAs) that ensure they:",
          },
          {
            type: "list",
            items: [
              "Process data only on our documented instructions",
              "Implement appropriate security measures",
              "Assist with GDPR compliance obligations",
              "Delete or return data upon termination",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "INTERNATIONAL DATA TRANSFERS",
    content: [
      {
        type: "subsection",
        text: "7.1 Primary Data Location",
        subBlocks: [
          {
            type: "paragraph",
            text: "Your personal data is primarily stored and processed within the European Economic Area (EEA):",
          },
          {
            type: "list",
            items: [
              "Primary Location: AWS eu-north-1 (Stockholm, Sweden)",
              "Backup Location: Google Cloud europe-north1 (Hamina, Finland)",
            ],
          },
        ],
      },
      {
        type: "subsection",
        text: "7.2 Transfers Outside EEA",
        subBlocks: [
          {
            type: "paragraph",
            text: "When we transfer data outside the EEA, we ensure appropriate safeguards are in place:",
          },
          {
            type: "list",
            items: [
              "Standard Contractual Clauses (SCCs): EU Commission approved contracts for data transfers",
              "EU-US Data Privacy Framework: For certified US companies",
              "Adequacy Decisions: For countries deemed adequate by the EU Commission",
              "Transfer Impact Assessments: Risk assessments for all third-country transfers",
            ],
          },
          {
            type: "paragraph",
            text: "You can request copies of our transfer safeguards by contacting dpo@thingsatweb.se",
          },
        ],
      },
    ],
  },
  {
    title: "DATA SECURITY",
    content: [
      {
        type: "subsection",
        text: "8.1 Security Measures",
        subBlocks: [
          {
            type: "paragraph",
            text: "We implement appropriate technical and organizational measures to protect your personal data:",
          },
          {
            type: "paragraph",
            text: "Technical Measures:",
          },
          {
            type: "list",
            items: [
              "Encryption in transit (TLS 1.3) and at rest (AES-256)",
              "Multi-factor authentication for system access",
              "Regular security audits and vulnerability assessments",
              "Firewalls and intrusion detection systems",
              "Secure backup and disaster recovery procedures",
            ],
          },
          {
            type: "paragraph",
            text: "Organizational Measures:",
          },
          {
            type: "list",
            items: [
              "Limited access on need-to-know basis",
              "Employee confidentiality agreements",
              "Regular data protection training",
              "Incident response procedures",
              "Vendor security assessments",
            ],
          },
        ],
      },
      {
        type: "subsection",
        text: "8.2 Data Breach Response",
        subBlocks: [
          {
            type: "paragraph",
            text: "In the unlikely event of a personal data breach:",
          },
          {
            type: "list",
            items: [
              "We will notify Integritetsskyddsmyndigheten (Swedish Data Protection Authority) within 72 hours",
              "If the breach poses high risk to your rights, we will notify you directly",
              "We maintain a breach register as required by GDPR",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "DATA RETENTION",
    content: [
      {
        type: "paragraph",
        text: "We retain personal data only as long as necessary for the purposes collected:",
      },
      {
        type: "table",
        tableHeaders: ["Data Category", "Retention Period", "Legal Basis"],
        tableRows: [
          ["Client project data", "Duration of relationship + 3 years", "Legal claims defense"],
          ["Financial records", "7 years", "Swedish Accounting Act"],
          ["Marketing consents", "Until withdrawn", "Active consent required"],
          ["Website analytics", "14 months", "Google Analytics default"],
          ["Customer support logs", "3 years", "Service improvement"],
          ["Anonymized data", "Indefinite", "No longer personal data"],
        ],
      },
    ],
  },
  {
    title: "YOUR LEGAL RIGHTS",
    content: [
      {
        type: "paragraph",
        text: "Under GDPR, you have the following rights regarding your personal data:",
      },
      {
        type: "subsection",
        text: "10.1 Your Rights",
        subBlocks: [
          {
            type: "list",
            items: [
              "Right to Access (Article 15): Request a copy of your personal data",
              "Right to Rectification (Article 16): Correct inaccurate personal data",
              "Right to Erasure (Article 17): Request deletion of your data (‘right to be forgotten’)",
              "Right to Restriction (Article 18): Limit how we process your data",
              "Right to Data Portability (Article 20): Receive your data in machine-readable format",
              "Right to Object (Article 21): Object to certain processing activities",
              "Rights regarding Automated Decision-Making (Article 22): Not be subject to purely automated decisions",
            ],
          },
        ],
      },
      {
        type: "subsection",
        text: "10.2 How to Exercise Your Rights",
        subBlocks: [
          {
            type: "paragraph",
            text: "Contact our Data Protection Officer:",
          },
          {
            type: "contact-box",
            text: "DPO Contact",
            items: [
              "Email: dpo@thingsatweb.se",
              "Phone: +46707770727",
              "Mail: DPO, Thingsatweb Sweden AB, Sockerbruksgatan 7, 531 40 Lidköping, Sweden",
            ],
          },
        ],
      },
      {
        type: "subsection",
        text: "10.3 Response Timeline",
        subBlocks: [
          {
            type: "list",
            items: [
              "Acknowledgment: Within 3 business days",
              "Response: Within 30 days",
              "Complex requests: May extend to 90 days total (we’ll inform you of delays)",
            ],
          },
        ],
      },
      {
        type: "subsection",
        text: "10.4 Right to Complain",
        subBlocks: [
          {
            type: "paragraph",
            text: "If you’re not satisfied with our response, you have the right to complain to:",
          },
          {
            type: "contact-box",
            text: "Integritetsskyddsmyndigheten (IMY)",
            items: [
              "Website: imy.se",
              "Email: imy@imy.se",
              "Phone: 08-657 61 00",
              "Address: Box 8114, 104 20 Stockholm",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "COOKIES AND SIMILAR TECHNOLOGIES",
    content: [
      {
        type: "subsection",
        text: "11.1 What Are Cookies",
        subBlocks: [
          {
            type: "paragraph",
            text: "Cookies are small text files stored on your device when you visit our website. They help us provide you with a better experience and allow certain features to work.",
          },
        ],
      },
      {
        type: "subsection",
        text: "11.2 Types of Cookies We Use",
        subBlocks: [
          {
            type: "list",
            items: [
              "Essential Cookies (Always Active): Required for website functionality, Enable security features",
              "Analytics Cookies (With Consent): Google Analytics: Track website usage and visitor patterns, Help us improve our website and services",
              "Marketing Cookies (With Consent): Track advertising campaign effectiveness, Enable targeted advertising",
            ],
          },
        ],
      },
      {
        type: "subsection",
        text: "11.3 Managing Cookies",
        subBlocks: [
          {
            type: "paragraph",
            text: "You can control cookies through:",
          },
          {
            type: "list",
            items: [
              "Our cookie consent banner when you first visit",
              "Your browser settings (all browsers allow cookie blocking)",
              "Contacting us to update your preferences",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "THIRD-PARTY LINKS",
    content: [
      {
        type: "paragraph",
        text: "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies when you leave our site.",
      },
    ],
  },
  {
    title: "CHILDREN’S PRIVACY",
    content: [
      {
        type: "paragraph",
        text: "Our services are intended for business-to-business purposes and are not directed at children under 16. We do not knowingly collect personal data from children. If you believe we have collected data from a child, please contact us immediately.",
      },
    ],
  },
  {
    title: "CHANGES TO THIS PRIVACY POLICY",
    content: [
      {
        type: "paragraph",
        text: "We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. When we make material changes:",
      },
      {
        type: "list",
        items: [
          "We will update the “Last Updated” date at the top",
          "We will post a notice on our website",
          "We will notify you by email (for significant changes)",
        ],
      },
    ],
  },
  {
    title: "CONTACT INFORMATION",
    content: [
      {
        type: "subsection",
        text: "15.1 General Inquiries",
        subBlocks: [
          {
            type: "contact-box",
            text: "Thingsatweb Sweden AB",
            items: [
              "Address: Sockerbruksgatan 7, 531 40 Lidköping, Sweden",
              "Phone: +46707770727",
              "Email: kontakt@thingsatweb.se",
              "Website: https://www.thingsatweb.se",
            ],
          },
        ],
      },
      {
        type: "subsection",
        text: "15.2 Data Protection Inquiries",
        subBlocks: [
          {
            type: "contact-box",
            text: "Data Protection Officer",
            items: [
              "Email: dpo@thingsatweb.se",
              "Phone: +46707770727",
              "Post: DPO, Thingsatweb Sweden AB, Sockerbruksgatan 7, 531 40 Lidköping, Sweden",
            ],
          },
        ],
      },
      {
        type: "subsection",
        text: "15.3 Supervisory Authority",
        subBlocks: [
          {
            type: "contact-box",
            text: "Integritetsskyddsmyndigheten (IMY)",
            items: [
              "Website: www.imy.se",
              "Email: imy@imy.se",
              "Phone: 08-657 61 00",
            ],
          },
        ],
      },
    ],
  },
  {
    title: "GLOSSARY",
    content: [
      {
        type: "list",
        items: [
          "Personal Data: Information relating to an identified or identifiable person",
          "Processing: Any operation on personal data (collection, storage, use, deletion, etc.)",
          "Controller: Organization determining purposes and means of processing",
          "Processor: Organization processing data on controller’s behalf",
          "Data Subject: Individual whose personal data is processed",
          "GDPR: General Data Protection Regulation (EU) 2016/679",
          "DPA: Data Processing Agreement",
          "EEA: European Economic Area",
          "SCCs: Standard Contractual Clauses for international data transfers",
        ],
      },
    ],
  },
];