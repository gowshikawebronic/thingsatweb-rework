import { ProductPageData } from "@/app/product/types";

export const STORETECH_DATA: ProductPageData = {
    id: "storetech",

    // --- UNIVERSAL HERO ---
    hero: {
        badge: "Cloud-Native Platform",
        titlePrefix: "StoreTech - Automated",
        titleHighlight: "Retail Ecosystem",
        description: "Consolidate traditional multi-vendor retail technology stacks into a single PAX terminal-based platform, reducing deployment time from 4-6 weeks to 10 days while cutting operational costs by 60%.",
        ctaPrimary: "Request Demo",
        // ctaSecondary: "View Live Installations",
        features: [
            "150-170 Deployed Locations",
            "50M+ Transactions Processed",
            "99.7% Success Rate",
            "Zero Downtime (5 Years)"
        ]
    },

    // --- UNIVERSAL OVERVIEW ---
    overview: {
        badge: "Platform Overview",
        heading: "The Next Generation of",
        highlight: "Retail Automation",
        content: [
            "StoreTech represents the next generation of retail automation: a comprehensive, cloud-native platform that powers unmanned convenience stores, smart self-checkout systems, IoT-enabled refrigerated units, and intelligent vending machines across 150+ global locations spanning Europe and India.",
            "Unlike traditional retail technology requiring multiple vendors, complex integrations, and extensive deployment timelines, StoreTech consolidates everything into a unified platform built on PAX IM30 Android terminals. This integrated approach dramatically reduces deployment complexity while delivering superior reliability and performance.",
            "StoreTech isn't a prototype or MVP - it's a battle-tested platform processing real transactions at scale. With over 50 million transactions processed and maintaining a 99.7% success rate, StoreTech has proven that autonomous retail isn't just viable - it's superior to traditional staffed operations in efficiency, consistency, and customer satisfaction."
        ],
        differentiators: [
            {
                title: "Single Unified Platform",
                description: "Consolidate self-checkout, inventory, payments, access control, and IoT management into one system.",
                icon: "Layers"
            },
            {
                title: "Proven at Scale",
                description: "150-170 active locations across Sweden, Norway, and India with 50M+ transactions processed.",
                icon: "TrendingUp"
            },
            {
                title: "Rapid Deployment",
                description: "Launch in just 10 days compared to 4-6 weeks due to pre-integrated hardware and cloud architecture.",
                icon: "Zap"
            },
            {
                title: "Cost Efficiency",
                description: "Reduce operational costs by 60% through automation, 24/7 operation, and zero-staff requirements.",
                icon: "DollarSign"
            },
            {
                title: "GDPR Compliant",
                description: "Full data privacy compliance for European markets with secure data handling and residency.",
                icon: "ShieldCheck"
            }
        ]
    },

    // --- UNIVERSAL TECH STACK ---
    techStack: {
        heading: "Built on Enterprise-Grade Infrastructure",
        description: "A robust, scalable architecture combining Android terminals, cloud microservices, and IoT protocols for reliability.",
        badge: "Technology Stack",
        frameworks: [
            {
                name: "PAX IM30 Terminals",
                desc: "8-inch Android touchscreens with integrated scanner, NFC, and EMV payment capability."
            },
            {
                name: "IoT Smart Devices",
                desc: "Smart fridges, intelligent vending, and door access controllers connected via MQTT."
            },
            {
                name: "Security Cameras",
                desc: "AI-powered vision systems for fraud detection and inventory monitoring."
            }
        ],
        cloudPlatforms: [
            {
                provider: "Backend Infrastructure",
                color: "text-green-600",
                services: [
                    { name: "Node.js", desc: "Microservices architecture" },
                    { name: "DynamoDB", desc: "NoSQL transactional storage" },
                    { name: "PostgreSQL", desc: "Relational data for products" },
                    { name: "Redis", desc: "High-performance caching" }
                ]
            },
            {
                provider: "AWS Cloud",
                color: "text-orange-500",
                services: [
                    { name: "AWS Lambda", desc: "Serverless functions" },
                    { name: "IoT Core", desc: "Device lifecycle management" },
                    { name: "CloudFront", desc: "Global content delivery" },
                    { name: "S3", desc: "Secure media storage" }
                ]
            },
            {
                provider: "Mobile & Connectivity",
                color: "text-blue-600",
                services: [
                    { name: "Flutter", desc: "Cross-platform mobile apps" },
                    { name: "MQTT", desc: "Lightweight IoT messaging" },
                    { name: "TLS 1.3", desc: "End-to-end encryption" },
                    { name: "BankID", desc: "Identity verification integration" }
                ]
            },
            {
                provider: "Security & Compliance",
                color: "text-red-600",
                services: [
                    { name: "PCI DSS L1", desc: "Level 1 compliant payment processing" },
                    { name: "AES-256", desc: "At-rest encryption for databases & storage" },
                    { name: "GDPR", desc: "Data minimization, consent management, right to erasure" },
                    { name: "RBAC + MFA", desc: "Role-based access with multi-factor authentication" },
                    { name: "AWS Shield", desc: "DDoS protection with WAF for API security" },
                    { name: "X.509 Certs", desc: "Device authentication for IoT endpoints" }
                ]
            }
        ]
    },

    // --- UNIVERSAL PROCESS ---
    process: {
        title: "From Contract to Go-Live",
        description: "Our standardized deployment timeline ensures rapid launch with minimal disruption to your operations. Total timeline: 3-4 weeks from contract signature to full operation.",
        phases: [
            {
                phase: "Phase 1",
                title: "Site Assessment & Planning",
                duration: "Week 1-2",
                icon: "SearchCheck",
                color: "bg-blue-500",
                objectives: ["Site evaluation (space, power, internet)", "Network infrastructure assessment", "Product assortment planning", "Integration planning"],
                activities: ["Site visit and evaluation (space, power, internet connectivity)", "Customer flow analysis and optimal terminal placement", "Network infrastructure assessment (WiFi coverage, bandwidth)", "Product assortment planning (300-500 SKUs based on demographics)", "Hardware requirements specification (terminals, fridges, cameras)", "Integration planning (existing POS, accounting, ERP systems)", "Regulatory compliance review (food safety, alcohol licensing)", "Timeline and budget finalization", "Kickoff meeting with stakeholders"],
                deliverables: ["Site assessment report", "Equipment list and layout diagram", "Network diagram", "Integration specification", "Project plan with milestones", "Fixed-price quote"]
            },
            {
                phase: "Phase 2",
                title: "Equipment Installation & Setup",
                duration: "Week 2-3",
                icon: "Wrench",
                color: "bg-orange-500",
                objectives: ["Hardware procurement and shipping", "Network infrastructure installation", "Terminal mounting and connectivity", "Security system setup"],
                activities: ["Hardware procurement and shipping (PAX terminals, IoT devices, cameras)", "Network infrastructure installation (routers, switches, cabling)", "Terminal mounting and connectivity (power, internet, peripherals)", "Smart fridge/vending machine placement and integration", "Security camera installation and configuration", "Digital signage mounting (if applicable)", "Access control system installation (door locks, BankID reader)", "Backup internet connectivity (4G router installation)", "Power backup UPS installation (critical systems)"],
                deliverables: ["Network connectivity and bandwidth testing", "Terminal hardware diagnostics", "IoT device communication testing", "Camera recording and storage verification", "Access control functionality testing"]
            },
            {
                phase: "Phase 3",
                title: "Software Configuration & Integration",
                duration: "Week 3",
                icon: "Settings",
                color: "bg-purple-500",
                objectives: ["Cloud account setup", "Product catalog import", "Payment gateway integration", "User accounts and permissions"],
                activities: ["Cloud account setup and configuration", "Location profile creation (address, hours, contact info)", "Product catalog import (SKUs, prices, images, barcodes)", "Pricing and promotion rules configuration", "Payment gateway integration and testing", "Loyalty program setup", "Inventory thresholds and reorder points configuration", "User accounts and permissions (staff, managers, admins)", "Integration with existing systems (POS, ERP, accounting)", "Mobile app configuration (location in app, branding)", "Alert and notification setup (low stock, system errors)"],
                deliverables: ["End-to-end transaction testing (scan, pay, receipt)", "Payment processing verification (all payment methods)", "Inventory sync testing", "Integration testing (data flow to/from external systems)", "Mobile app testing (booking, payments, loyalty)"]
            },
            {
                phase: "Phase 4",
                title: "Training & Soft Launch",
                duration: "Week 4",
                icon: "Users",
                color: "bg-green-500",
                objectives: ["Staff onboarding", "Admin portal training", "Beta customer testing", "Performance fine-tuning"],
                activities: ["Staff training sessions (restocking, terminal operation, troubleshooting)", "Admin portal training (dashboard, reporting, configuration)", "Customer onboarding materials creation (signage, app instructions)", "Soft launch with limited access (employees, beta customers)", "Monitor system performance and gather feedback", "Fine-tune settings based on initial usage", "Fix any identified issues", "Customer support readiness (knowledge base, response procedures)"],
                deliverables: ["Video tutorials (terminal usage, troubleshooting)", "Printed quick reference guides", "Admin user manual", "Customer FAQ handouts", "Mobile app tutorials"]
            },
            {
                phase: "Phase 5",
                title: "Go-Live & Support",
                duration: "Day 1+",
                icon: "Rocket",
                color: "bg-red-500",
                objectives: ["Public launch", "Marketing campaign activation", "24/7 monitoring", "Continuous optimization"],
                activities: ["Full public access enabled", "Marketing campaign activation (grand opening, promotions)", "Press release and social media announcements", "Customer communication (email, push notifications)", "Monitor closely for first 48 hours"],
                deliverables: ["24/7 system monitoring by StoreTech operations team", "Proactive alerts and incident response", "Weekly performance reports (sales, transactions, issues)", "Monthly business reviews (analytics, optimization opportunities)", "Quarterly system updates and new features", "Continuous optimization based on data"]
            }
        ]
    },

    // --- UNIVERSAL GET STARTED ---
    getStarted: {
        badge: "Get Started",
        titleLines: ["Ready to Transform", "Your Retail Operations?"],
        description: "See StoreTech in action with a demo or pilot program.",
        cards: [
            {
                id: "demo",
                theme: "light",
                title: "Request Demo",
                description: "30-minute platform walkthrough or visit operational locations in Sweden.",
                icon: "Play",
                list: ["Virtual Demo: 30-min web walkthrough", "In-Person Demo: Visit live locations", "Custom Demo: Tailored to your use case", "Live Q&A with engineering team"],
                cta: { text: "Schedule Demo", link: "/contact" }
            },
            {
                id: "pilot",
                theme: "dark",
                title: "Pilot Program",
                description: "Deploy in one location with full support to evaluate results before scaling.",
                icon: "Rocket",
                list: ["10-Day Setup & Go-Live", "Full Training Included", "Dedicated Success Manager", "ROI Analysis & Custom Proposal"],
                cta: { text: "Start Pilot", link: "/contact" }
            }
        ],
        contact: {
            title: "Contact StoreTech Team",
            subtitle: "Get in touch with our sales team",
            methods: [
                { label: "Website", value: "www.store-tech.se", icon: "Globe", iconColor: "text-blue-600" },
                { label: "Email", value: "sales@store-tech.se", icon: "Mail", iconColor: "text-red-500" },
                // { label: "Phone (Sweden)", value: "+46 XXX XXX XXX", icon: "Phone", iconColor: "text-green-600" },
                { label: "Phone (India)", value: "+91 72000 88500", icon: "Phone", iconColor: "text-orange-500" }
            ]
        }
    },

    // --- NEW: PRODUCT FEATURES ---
    productFeatures: {
        badge: "Core Features",
        heading: "Intelligent Retail Capabilities",
        description: "Three powerful pillars working in harmony to deliver autonomous retail.",
        features: [
            {
                id: "checkout",
                title: "AI-Powered Checkout",
                desc: "Computer vision-enabled self-checkout with barcode scanning, AI product recognition, automated age verification, and advanced fraud detection.",
                icon: "ScanLine",
                color: "text-blue-600",
                bg: "bg-blue-50",
                fullDescription: [
                    "Transform the checkout experience with our intelligent PAX IM30 terminal-based system combining barcode scanning, AI-powered product recognition, automated age verification, and fraud detection into a seamless customer journey.",
                    "Machine learning models trained on millions of transactions identify suspicious patterns in real-time, while multilingual support in 15+ languages ensures accessibility for all customers."
                ],
                tabs: [
                    {
                        id: "journey",
                        label: "Customer Journey",
                        content: {
                            type: "steps",
                            steps: [
                                { step: 1, title: "Product Scanning", description: "Customers scan items using intuitive PAX IM30 touchscreen terminal. High-speed laser barcode reader processes items instantly (200 scans/second). For products without barcodes, computer vision identifies items through image recognition. Weight verification ensures scanned items match expected weight. Visual confirmation on screen showing product name, price, and image." },
                                { step: 2, title: "Intelligent Verification", description: "AI algorithms verify scanned items against visual confirmation. Computer vision compares cart contents with scanned items. Detects potential fraud patterns including suspicious scanning behavior and item substitution. Weight discrepancy detection flags mismatches for review. Multi-item scanning detection catches scanning one item while placing multiple." },
                                { step: 3, title: "Age Verification", description: "For age-restricted products (alcohol, tobacco, medications): BankID Integration (Sweden) provides automatic age verification through national digital ID. Document Scanning lets customers upload photo ID with AI verifying authenticity and age. Staff Override enables remote staff approval via video call for edge cases. Full compliance with regional regulations (18+ for alcohol, tobacco)." },
                                { step: 4, title: "Payment Processing", description: "Multiple payment options supported: Contactless Cards (Visa, Mastercard, Amex tap-to-pay). Mobile Payments (Apple Pay, Google Pay, Swish for Sweden). Integrated Wallet with pre-loaded balance from StoreTech customer app. QR Code Payments via dynamic QR codes for bank app payments. Subscription Accounts for monthly billing corporate customers. Split Payments across multiple methods in a single transaction." },
                                { step: 5, title: "Receipt & Exit", description: "Digital receipt via email or SMS (paperless option). PDF receipt available in customer app. Transaction logged in customer purchase history. Exit gates unlock automatically upon successful payment. Loyalty points credited to customer account instantly." }
                            ]
                        }
                    },
                    {
                        id: "specs",
                        label: "Terminal Specs",
                        content: {
                            type: "specs",
                            specs: [
                                { label: "Model", value: "PAX IM30 Android Terminal" },
                                { label: "Display", value: "8-inch capacitive touchscreen (800x1280, 16M colors)" },
                                { label: "Processor", value: "Quad-core ARM Cortex-A7, 2GB RAM" },
                                { label: "Storage", value: "16GB Flash storage" },
                                { label: "OS", value: "Android 7.1 Nougat" },
                                { label: "Printer", value: "Integrated thermal printer (optional, 58mm paper)" },
                                { label: "Scanner", value: "1D/2D barcode scanner (range: 5-25cm)" },
                                { label: "NFC", value: "13.56MHz contactless reader (ISO 14443 A/B)" },
                                { label: "EMV", value: "Chip card reader (Level 1 & Level 2 certified)" },
                                { label: "Magstripe", value: "Magnetic stripe reader (Track 1, 2, 3)" },
                                { label: "WiFi", value: "802.11 b/g/n (2.4GHz)" },
                                { label: "Cellular", value: "4G LTE (backup connectivity)" },
                                { label: "Bluetooth", value: "Bluetooth 4.0" },
                                { label: "Battery", value: "Li-ion 7.4V 5200mAh (4+ hours backup)" },
                                { label: "Dimensions", value: "235mm x 78mm x 58mm, 650g" },
                                { label: "Temp Range", value: "-10°C to 50°C operating temperature" }
                            ]
                        }
                    },
                    {
                        id: "fraud",
                        label: "Fraud Detection",
                        content: {
                            type: "list",
                            items: [
                                { term: "Item Substitution Detection", description: "Scanning cheap item while bagging expensive item — ML models detect price/weight mismatches in real-time." },
                                { term: "Quantity Discrepancies", description: "Weight doesn't match number of items scanned. System cross-references expected vs actual weight per SKU." },
                                { term: "Unusual Shopping Patterns", description: "Shopping behavior deviating from normal patterns flagged by AI trained on millions of transactions." },
                                { term: "Repeated Suspicious Behavior", description: "Customer history flagged for review with escalating alerts. Repeat offenders auto-flagged on entry." },
                                { term: "Real-time Intervention", description: "Security alerts sent instantly to remote monitoring team for immediate action and incident response." },
                                { term: "AI Video Review", description: "AI flags specific video segments for human review, reducing manual monitoring labor by 90%." }
                            ]
                        }
                    },
                    {
                        id: "multilingual",
                        label: "Multilingual",
                        content: {
                            type: "list",
                            items: [
                                { term: "15+ Languages", description: "Full interface available in 15+ languages with automatic detection based on customer app preference." },
                                { term: "Manual Selection", description: "Language selector available directly on terminal for walk-in customers without the app." },
                                { term: "Voice Guidance", description: "Audio guidance and voice instructions for visually impaired customers with screen reader support." },
                                { term: "Adjustable Height", description: "Interface height adjustable for accessibility. Terminal placement designed for wheelchair access." },
                                { term: "Accessible UI", description: "High-contrast mode, large text options, and touch-friendly button sizing for elderly and differently-abled users." }
                            ]
                        }
                    },
                    {
                        id: "performance",
                        label: "Performance",
                        content: {
                            type: "specs",
                            specs: [
                                { label: "Avg Transaction Time", value: "45 seconds (scan to receipt)" },
                                { label: "Scanning Accuracy", value: "99.7% correct identification" },
                                { label: "Payment Success", value: "99.9% first-attempt authorization" },
                                { label: "Customer Satisfaction", value: "4.6/5.0 average rating" },
                                { label: "False Positive Rate", value: "<0.5% fraud alert false positives" },
                                { label: "Fraud Rate", value: "<0.1% of transactions (industry avg: 0.5%)" },
                                { label: "Dispute Rate", value: "<0.05% chargebacks (industry avg: 0.2%)" },
                                { label: "Battery Backup", value: "4+ hours uninterrupted operation" }
                            ]
                        }
                    }
                ]
            },
            {
                id: "inventory",
                title: "Inventory Cloud",
                desc: "Unified real-time stock management across smart fridges, vending machines, checkout systems, and central warehouse using MQTT IoT protocol.",
                icon: "Database",
                color: "text-orange-600",
                bg: "bg-orange-50",
                fullDescription: [
                    "StoreTech's Inventory Cloud synchronizes stock levels in real-time across smart fridges, vending machines, checkout systems, and central warehouse using MQTT IoT protocol and cloud-based data synchronization.",
                    "Every sale, restock, or inventory adjustment instantly updates across the entire network: customer purchases → cloud database update → MQTT broadcast to all devices (milliseconds) → reorder threshold check → automated reorder trigger → supplier notification via API."
                ],
                tabs: [
                    {
                        id: "features",
                        label: "Key Capabilities",
                        content: {
                            type: "list",
                            items: [
                                { term: "Real-Time Sync", description: "Every sale, restock, or adjustment instantly updates across the entire network via MQTT in milliseconds. All connected devices receive updates simultaneously." },
                                { term: "AI Reordering", description: "Machine learning models analyze historical sales, weather correlation, local events, promotional activity, seasonal variations, and stock-out history to predict demand." },
                                { term: "Multi-Location Dashboard", description: "Single unified view controls inventory across unmanned stores (200-500 SKUs), smart fridges (20-50 SKUs), vending machines (30-80 SKUs), self-checkout kiosks, and central warehouse." },
                                { term: "Real-Time Visibility", description: "Current stock levels by location/device/product. Stock movement history (sales, deliveries, adjustments). Low stock alerts, out-of-stock notifications, overstock identification, and expiration date tracking (FIFO)." },
                                { term: "Order Routing Intelligence", description: "Nearest warehouse with stock identified. Optimal delivery route calculated. Multiple locations consolidated into single delivery run. Priority routing for critical stock-outs. Cost-optimized logistics." },
                                { term: "Supplier API Integration", description: "Direct API connections with suppliers via RESTful APIs, EDI, email-based PO, or supplier portal. Automated procurement from PO to payment." }
                            ]
                        }
                    },
                    {
                        id: "iot",
                        label: "IoT Integration",
                        content: {
                            type: "list",
                            items: [
                                { term: "Smart Refrigerators", description: "Real-time temperature monitoring every 5 minutes. Temperature threshold alerts (out of safe range). Door open/close event tracking with left-open alerts. Energy consumption monitoring. Compressor status monitoring. Defrost cycle tracking. Predictive maintenance alerts for unusual temperatures or excessive cycling." },
                                { term: "Vending Machines", description: "Product slot monitoring with empty slot detection. Dispense mechanism status (jams, failures). Payment system diagnostics (card reader issues, coin mechanism). Service requirement detection on multiple failed dispenses. Out-of-stock slots by position. Sales velocity by slot for product placement optimization." },
                                { term: "Checkout Terminals", description: "Online/offline status monitoring. Transaction volume tracking. Payment success rates. Hardware diagnostics (scanner, printer, card reader). Software version tracking. Receipt paper low alerts." },
                                { term: "Mobile Restocking App", description: "Flutter app with prioritized task list (urgent restocks at top). Turn-by-turn navigation to locations. Barcode scanning for delivery verification. Inventory count updates. Expiration date scanning and tracking. Damaged product reporting with photos. Stock rotation management (FIFO compliance). Delivery completion confirmation." },
                                { term: "Inventory Audit", description: "Cycle counting workflows for regular stock verification. Discrepancy reporting with photo documentation. Variance investigation tools. Adjustment approvals with audit trail." }
                            ]
                        }
                    },
                    {
                        id: "mqtt",
                        label: "MQTT Protocol",
                        content: {
                            type: "list",
                            items: [
                                { term: "Lightweight Communication", description: "Minimal bandwidth usage, highly efficient for IoT devices with limited resources and intermittent connectivity." },
                                { term: "Quality of Service", description: "QoS levels 0, 1, and 2 ensure appropriate message delivery guarantees — from fire-and-forget to exactly-once delivery." },
                                { term: "Low Power", description: "Minimal battery consumption for IoT endpoints, ideal for battery-powered sensors and remote devices." },
                                { term: "TLS Encrypted", description: "TLS 1.2+ encryption for all device communication. Device authentication via X.509 certificates for secure endpoint verification." },
                                { term: "Bidirectional Messaging", description: "Real-time bidirectional communication. Last Will and Testament (LWT) for automatic connection monitoring and device status tracking." },
                                { term: "Scalable Architecture", description: "Topic-based routing and filtering supporting thousands of devices. Retained messages for device state. Eclipse Mosquitto broker on AWS." }
                            ]
                        }
                    },
                    {
                        id: "forecasting",
                        label: "AI Forecasting",
                        content: {
                            type: "list",
                            items: [
                                { term: "Historical Sales Patterns", description: "Analysis of hourly, daily, weekly, and seasonal sales trends. Day-of-week patterns (weekday vs weekend) for accurate baseline predictions." },
                                { term: "Weather Correlation", description: "Cold drinks in hot weather, hot drinks in cold — auto-adjusting stock recommendations. Temperature impact on beverage selection modeled." },
                                { term: "Event-Based Demand Spikes", description: "Concerts, sports events, holidays, and nearby stadium game days trigger proactive demand predictions and pre-ordering." },
                                { term: "Promotional Impact", description: "Discount impact on sales volume modeled. Seasonal variations (ice cream summer spike, hot chocolate winter spike) factored into forecasts." },
                                { term: "7-Day Demand Forecast", description: "85%+ accuracy demand predictions for proactive ordering. Automated safety stock calculations based on lead time variability." },
                                { term: "Reorder Optimization", description: "Optimal order quantity balancing carrying costs vs ordering costs. Lead time consideration (supplier delivery schedules). MOQ respected. EOQ calculations." },
                                { term: "Route Planning", description: "Multi-location consolidated ordering for volume discounts. Priority routing for critical stock-outs. Cost-optimized logistics to minimize delivery costs." }
                            ]
                        }
                    },
                    {
                        id: "analytics",
                        label: "Analytics Dashboard",
                        content: {
                            type: "list",
                            items: [
                                { term: "Turnover Rates", description: "Product turnover by product, category, and location. Slow-moving inventory identification with aging analysis. Fast-moving product alerts to increase stock levels." },
                                { term: "Expiration Monitoring", description: "Expiration date monitoring and alerts. FIFO management for perishables. Waste reduction insights with spoilage tracking across all locations." },
                                { term: "Fill Rate & Stock-Outs", description: "Fill rate percentage — demand satisfied from available stock. Stock-out frequency measurement with service level tracking." },
                                { term: "Inventory Valuation", description: "Inventory value by location. Carrying cost calculations. Dead stock value (obsolete inventory). Shrinkage tracking (theft, damage, errors)." },
                                { term: "GMROI Analysis", description: "Gross Margin Return on Investment calculated per product and per location. Identifies most and least profitable inventory segments." },
                                { term: "Supplier Performance", description: "Lead time accuracy (promised vs actual). Order fill rate (complete vs partial deliveries). Quality issues tracking (damaged goods, wrong items). Pricing trends. Delivery reliability scores." }
                            ]
                        }
                    },
                    {
                        id: "supplier",
                        label: "Supplier API",
                        content: {
                            type: "list",
                            items: [
                                { term: "Automated Purchase Orders", description: "Auto-generated when reorder point is hit. Electronic PO transmission directly to supplier systems." },
                                { term: "Delivery Scheduling", description: "Delivery scheduling and confirmation workflows. Advance shipping notifications (ASN) for inbound tracking." },
                                { term: "Electronic Invoicing", description: "Invoice matching to PO for payment processing. Automatic reconciliation reduces manual accounting effort." },
                                { term: "Catalog Synchronization", description: "Product catalog sync including new products, pricing updates, and promotional planning coordination with suppliers." },
                                { term: "Integration Methods", description: "RESTful APIs for modern suppliers. EDI (Electronic Data Interchange) for traditional suppliers. Email-based PO for small suppliers. Supplier portal for manual entry with automated notifications." },
                                { term: "Promo Coordination", description: "Promotional planning and coordination with supplier partners. Automated discount management and seasonal campaign alignment." }
                            ]
                        }
                    }
                ]
            },
            {
                id: "loyalty",
                title: "Loyalty Engine",
                desc: "Integrated customer rewards, AI-powered personalized promotions, subscription management, and seamless mobile wallet purchasing experiences.",
                icon: "Heart",
                color: "text-red-600",
                bg: "bg-red-50",
                fullDescription: [
                    "Build lasting customer relationships with native mobile applications featuring loyalty points, personalized promotions, subscription management, and seamless purchasing experiences.",
                    "The StoreTech Customer Mobile App includes a multi-tier loyalty points program, AI-powered recommendation engine, subscription services for recurring revenue, integrated mobile wallet, and comprehensive communication channels."
                ],
                tabs: [
                    {
                        id: "engagement",
                        label: "Earning Points",
                        content: {
                            type: "list",
                            items: [
                                { term: "Base Earning", description: "1 point per $1 spent on all purchases across all locations and device types." },
                                { term: "Welcome Bonus", description: "100 points welcome bonus on first purchase to encourage initial engagement." },
                                { term: "Birthday Bonus", description: "500 points birthday bonus credited automatically on customer's birthday." },
                                { term: "Anniversary Bonus", description: "250 points bonus credited annually on account anniversary date." },
                                { term: "Streak Bonuses", description: "Bonus points for consecutive daily purchases — 7-day streaks, 30-day streaks with escalating rewards." },
                                { term: "Referral Rewards", description: "500 points per friend referred. Both referrer and referred friend receive rewards upon first purchase." }
                            ]
                        }
                    },
                    {
                        id: "personalization",
                        label: "Personalization",
                        content: {
                            type: "list",
                            items: [
                                { term: "Product Recommendations", description: "'You might also like…' based on similar customers' purchase patterns using ML recommendation engine." },
                                { term: "Repurchase Reminders", description: "'You usually buy milk every Thursday' — smart notifications based on purchase frequency analysis." },
                                { term: "New Product Introductions", description: "Matched to customer preferences and past purchase history for relevant discovery." },
                                { term: "Seasonal Suggestions", description: "'Try our new summer drinks' — only relevant seasonal products shown based on customer's past interests." },
                                { term: "Cross-sell Opportunities", description: "Complementary products suggested (chips with soda, cream with coffee) based on basket analysis." },
                                { term: "Location-Based Offers", description: "Geofenced notifications when customer is near their favorite store — personalized deals triggered by proximity." },
                                { term: "Time-Based Promotions", description: "Breakfast offers in morning, lunch deals midday, snack promotions in afternoon — matched to shopping patterns." },
                                { term: "Promotion Types", description: "Percentage discounts, BOGO offers, bundle deals (meal combos), threshold discounts ($5 off $25), free products, double points days, and flash sales." }
                            ]
                        }
                    },
                    {
                        id: "tiers",
                        label: "Points & Tiers",
                        content: {
                            type: "list",
                            items: [
                                { term: "Bronze (0-999 pts)", description: "Standard 1pt/$1 earning rate. Welcome bonus of 100 points on sign-up." },
                                { term: "Silver (1k-4.9k pts)", description: "1.25x point multiplier on all purchases. Anniversary bonus of 250 points." },
                                { term: "Gold (5k-9.9k pts)", description: "1.5x point multiplier + exclusive offers. Birthday bonus of 500 points. Access to limited-time promotions." },
                                { term: "Platinum (10k+ pts)", description: "2x point multiplier + VIP perks + early access to new products. Priority support and exclusive partner rewards." },
                                { term: "Redemption Options", description: "500 pts = $5 discount. 1000 pts = $12 discount (20% bonus). Free product rewards at point thresholds. Exclusive product access for high tiers. Partner rewards (coffee shops, restaurants)." },
                                { term: "Referral Program", description: "500 points per referred friend. Both parties rewarded. Gift loyalty points to friends. Social login via Facebook and Google." }
                            ]
                        }
                    },
                    {
                        id: "subscriptions",
                        label: "Subscriptions",
                        content: {
                            type: "list",
                            items: [
                                { term: "Coffee Unlimited", description: "$49/month for unlimited coffee purchases across all locations. Most popular plan." },
                                { term: "Beverage Unlimited", description: "$89/month for unlimited drinks of all categories — hot, cold, specialty." },
                                { term: "Lunch Subscription", description: "$199/month for daily lunch options. Corporate wellness programs (employer-paid) available." },
                                { term: "10-Coffee Pack", description: "$35 pre-paid (vs $40 regular, 12.5% discount). No expiration date." },
                                { term: "5-Lunch Pack", description: "$45 pre-paid (vs $50 regular, 10% discount). Bulk discounts for upfront payment." },
                                { term: "20-Drink Package", description: "$55 pre-paid (vs $60 regular). Gift packages available — purchased for others." },
                                { term: "Corporate Plans", description: "Employer-paid subscriptions with usage analytics for capacity planning. Predictable revenue for operators. Higher customer lifetime value and retention." }
                            ]
                        }
                    },
                    {
                        id: "wallet",
                        label: "Mobile Wallet",
                        content: {
                            type: "list",
                            items: [
                                { term: "Fund Sources", description: "Add funds via credit/debit card or bank transfer. Multiple funding methods supported simultaneously." },
                                { term: "Auto-Reload", description: "Automatic top-up when balance drops below configurable threshold (e.g., $10). Never run out of balance." },
                                { term: "Quick Checkout", description: "No card or phone needed — just the app for instant payment at any terminal. Fastest checkout method." },
                                { term: "Payment History", description: "Complete payment history and digital receipts. Budget tracking with spending insights and category breakdowns." },
                                { term: "Split Payments", description: "Use wallet + card combination for larger purchases. Corporate expense account integration supported." },
                                { term: "Gift Transfer", description: "Send wallet balance to friends and family as gifts. Perfect for birthdays and special occasions." },
                                { term: "Biometric Security", description: "Fingerprint and Face ID authentication. Transaction PIN option for additional security layer." },
                                { term: "Fraud Protection", description: "Suspicious activity detection with real-time transaction alerts. Wallet freeze capability for lost phone. Instant notifications on every transaction." }
                            ]
                        }
                    },
                    {
                        id: "channels",
                        label: "Communication",
                        content: {
                            type: "list",
                            items: [
                                { term: "Push Notifications", description: "New product alerts (based on preferences). Personalized promotions. Low wallet balance reminders. Tier advancement celebrations. Event announcements. Abandoned cart reminders. Birthday/anniversary greetings. Streak achievements." },
                                { term: "In-App Messaging", description: "Customer support chat (automated + human). Order history and receipts access. Product information and nutritional data. Feedback and rating prompts. Survey invitations with reward points for completion." },
                                { term: "Email Marketing", description: "Weekly deals newsletter. Monthly loyalty statement. Personalized product recommendations. Seasonal campaigns. Re-engagement campaigns for inactive customers." },
                                { term: "Social Sharing", description: "Share favorite products on social media. Refer friends (both get rewards). Gift loyalty points to friends. Social login (Facebook, Google)." },
                                { term: "User-Generated Content", description: "Product reviews and ratings. Photo uploads (product shots). Favorite lists (curated product collections). Tips and recommendations from community." },
                                { term: "Streak Rewards", description: "Consecutive daily purchase bonuses with escalating rewards. Achievement celebrations and badges. 7-day and 30-day streak milestones." }
                            ]
                        }
                    },
                    {
                        id: "retailerAnalytics",
                        label: "Retailer Analytics",
                        content: {
                            type: "list",
                            items: [
                                { term: "Customer Lifetime Value", description: "CLV tracking per customer segment. Average order value (AOV). Purchase frequency (transactions per month). €850 average CLV over 12 months." },
                                { term: "Retention & Churn", description: "Retention rate (% customers returning monthly). Churn rate (% customers leaving). RFM segmentation (Recency-Frequency-Monetary) for targeted campaigns." },
                                { term: "App Engagement", description: "App downloads and monthly active users. Push notification open rates. Promotion redemption rates. Wallet usage rate. Subscription conversion rate." },
                                { term: "Product Insights", description: "Category preference by customer segment. Cross-sell success rates. Product affinity analysis. Seasonal buying patterns. Price sensitivity analysis." },
                                { term: "Campaign Performance", description: "Promotion ROI (incremental sales vs discount cost). Customer acquisition cost (CAC). Campaign response rates with A/B test results. Channel effectiveness (push vs email vs in-app)." }
                            ]
                        }
                    }
                ]
            }
        ]
    },

    // --- NEW: USE CASES ---
    useCases: {
        badge: "Deployment Scenarios",
        heading: "Versatile Deployment Options",
        description: "StoreTech adapts to various retail environments, from standalone automated stores to hybrid retail integration.",
        cases: [
            {
                title: "Unmanned Convenience Store",
                description: "Fully automated 24/7 store operation without onsite staff. Customers access via mobile app or BankID, shop freely, and pay at self-checkout terminals. Ideal for suburban communities, corporate campuses, student housing, and transit hubs.",
                icon: "Store",
                benefits: [
                    "60% lower operational costs vs traditional staffed stores",
                    "24/7 revenue generation (vs 12-16h limited hours)",
                    "Zero-theft environment via AI monitoring and access control",
                    "Real-time inventory visibility across all products",
                    "Automated reordering eliminates manual stock management",
                    "Remote management — operate multiple locations from anywhere"
                ],
                deploymentStats: [
                    { label: "Size", value: "500-1500 sq ft" },
                    { label: "SKUs", value: "200-500 products" },
                    { label: "Access", value: "App/BankID" },
                    { label: "Staff", value: "Zero onsite" }
                ],
                economics: {
                    title: "Store Economics",
                    items: [
                        { label: "Setup Cost", value: "€40k - €75k" },
                        { label: "Monthly OpEx", value: "€2k - €4k" },
                        { label: "Revenue", value: "€15k - €50k/mo" },
                        { label: "Profit Margin", value: "29.8%" },
                        { label: "ROI Payback", value: "3.9 months" }
                    ]
                }
            },
            {
                title: "Smart Self-Checkout in Traditional Retail",
                description: "Enhance existing retail stores with StoreTech self-checkout terminals. Handle peak traffic efficiently while maintaining staff for customer assistance and high-value interactions. Reduce queue times and labor costs simultaneously.",
                icon: "ShoppingCart",
                benefits: [
                    "40% faster checkout throughput during peak hours",
                    "Staff redeployed from cashier to customer service roles",
                    "Increased checkout capacity without additional floor space",
                    "Reduced labor costs with 1 attendant per 6 terminals",
                    "Integrated loyalty and promotion at point of sale",
                    "Real-time sales analytics and staff productivity metrics"
                ],
                deploymentStats: [
                    { label: "Lanes", value: "2-8 terminals" },
                    { label: "Staff", value: "1 per 6 units" },
                    { label: "Integration", value: "Existing POS" },
                    { label: "Setup Time", value: "1-2 weeks" }
                ],
                economics: {
                    title: "Cost Savings",
                    items: [
                        { label: "Terminal Cost", value: "€800/unit" },
                        { label: "Monthly License", value: "€499-799/mo" },
                        { label: "Labor Savings", value: "70% reduction" },
                        { label: "Throughput Gain", value: "40% faster" }
                    ]
                }
            },
            {
                title: "Smart Vending Network",
                description: "Centrally managed network of smart vending machines with cashless payments, real-time telemetry, and predictive restocking. Deploy in hospitals, offices, gyms, transit hubs, and universities for grab-and-go convenience.",
                icon: "Coffee",
                benefits: [
                    "50% reduction in restocking labor hours",
                    "Predictive refill scheduling eliminates stock-outs",
                    "Cashless mobile payments (Apple Pay, Google Pay, Swish)",
                    "30% revenue increase via 24/7 operation and dynamic pricing",
                    "Remote monitoring of all machines from central dashboard",
                    "Sales velocity tracking per slot for optimal product placement"
                ],
                deploymentStats: [
                    { label: "Network", value: "200+ machines" },
                    { label: "Locations", value: "Offices, hospitals, gyms" },
                    { label: "Products", value: "30-80 SKUs/machine" },
                    { label: "Payments", value: "Cashless only" }
                ],
                economics: {
                    title: "Network Economics",
                    items: [
                        { label: "Machine Cost", value: "€3k-8k/unit" },
                        { label: "Monthly Revenue", value: "€500-2k/machine" },
                        { label: "Restocking Savings", value: "50% labor reduction" },
                        { label: "Stock-Out Rate", value: "<2%" }
                    ]
                }
            },
            {
                title: "Smart Refrigerated Units",
                description: "IoT-enabled coolers for hotels, apartments, office lobbies, and co-working spaces. Customers unlock via app or NFC card, grab items, and are auto-charged upon door close. Weight sensors and computer vision track inventory automatically.",
                icon: "Thermometer",
                benefits: [
                    "No checkout terminal needed — grab-and-go experience",
                    "24/7 freshness monitoring with real-time temperature alerts",
                    "Micro-location placement in lobbies, hallways, break rooms",
                    "Automatic inventory tracking via weight sensors",
                    "Spoilage prevention with FIFO expiration management",
                    "Revenue sharing model with host locations"
                ],
                deploymentStats: [
                    { label: "Units", value: "Single/Double door" },
                    { label: "Access", value: "App/NFC card" },
                    { label: "Products", value: "20-50 SKUs" },
                    { label: "Monitoring", value: "5-min intervals" }
                ],
                economics: {
                    title: "Unit Economics",
                    items: [
                        { label: "Unit Cost", value: "€2k-5k" },
                        { label: "Monthly Revenue", value: "€300-1k/unit" },
                        { label: "Commission", value: "Host location split" },
                        { label: "Shrinkage", value: "<1% loss rate" }
                    ]
                }
            }
        ]
    },

    // --- NEW: BUSINESS MODEL ---
    businessModel: {
        badge: "Pricing Model",
        heading: "Transparent SaaS Pricing",
        description: "Flexible licensing options to suit your scale, plus comprehensive hardware and service packages.",
        streams: [
            {
                title: "1. Platform License (SaaS)",
                description: "Monthly subscription including software, cloud hosting, automatic updates, and technical support.",
                icon: "CreditCard",
                pricing: [
                    { plan: "Starter", price: "€499/mo", features: ["1 Location", "Up to 5k Txns/mo", "Standard Support", "Basic Analytics"] },
                    { plan: "Professional", price: "€799/mo", features: ["1-3 Locations", "Up to 15k Txns/mo", "Priority Support", "Advanced Analytics", "Multi-location Dashboard"] },
                    { plan: "Enterprise", price: "€1,299/mo", features: ["Unlimited Locations", "Unlimited Txns", "24/7 Dedicated Support", "Dedicated Account Mgr", "Custom Integrations", "SLA Guarantee"] }
                ]
            },
            {
                title: "2. Hardware & Setup",
                description: "One-time hardware costs and professional installation services.",
                icon: "Server",
                pricing: [
                    { plan: "PAX IM30 Terminal", price: "€800+", features: ["Purchase outright", "Or Lease at €50/mo", "Includes NFC, EMV, scanner"] },
                    { plan: "Professional Setup", price: "€5k-15k", features: ["Site assessment", "Hardware installation", "Network config", "Software setup", "Staff training"] },
                    { plan: "Transaction Fee", price: "1.5-2.5%", features: ["Payment processing", "Fraud protection", "Chargeback handling", "Multi-currency support"] }
                ]
            },
            {
                title: "3. Managed Services & Support",
                description: "Tiered support from basic email to fully managed 24/7 operations.",
                icon: "Headphones",
                pricing: [
                    { plan: "Basic", price: "Included", features: ["Email support", "Business hours (M-F)", "Knowledge base access"] },
                    { plan: "Premium", price: "€500/mo", features: ["24/7 phone support", "Priority response (<1h)", "Monitoring & alerts", "Remote troubleshooting"] },
                    { plan: "Fully Managed", price: "€2k-5k/mo", features: ["Complete operations management", "Restocking coordination", "Proactive monitoring", "Incident response", "Device management", "Firmware updates"] }
                ]
            },
            {
                title: "4. Data & Analytics Services",
                description: "Advanced insights, API access, and white-label reporting for data-driven decisions.",
                icon: "BarChart",
                pricing: [
                    { plan: "Advanced Analytics", price: "€1k-5k/mo", features: ["Custom dashboards", "ML-powered insights", "Predictive analytics", "Customer segmentation"] },
                    { plan: "API Access", price: "€500/mo", features: ["REST API integration", "Real-time data feeds", "Custom data exports", "Webhook notifications"] },
                    { plan: "White-Label Reporting", price: "Custom", features: ["Custom-branded reports", "Franchisee dashboards", "Scheduled report delivery"] }
                ]
            }
        ],
        profitability: {
            title: "Profitability Example (Small Unmanned Store)",
            metrics: [
                { label: "Monthly Revenue", value: "€43,200", subtext: "Avg €12/txn × 120 txns/day × 30 days" },
                { label: "StoreTech Platform", value: "€799", subtext: "Professional tier SaaS subscription" },
                { label: "Rent", value: "€1,500", subtext: "Monthly location lease cost" },
                { label: "Utilities", value: "€400", subtext: "Electricity, internet connectivity" },
                { label: "Product Costs (COGS)", value: "€25,920", subtext: "60% cost of goods sold" },
                { label: "Restocking Labor", value: "€1,200", subtext: "Part-time restocking staff" },
                { label: "Marketing", value: "€500", subtext: "Customer acquisition & promotions" },
                { label: "Total Monthly Costs", value: "€30,319", subtext: "All operating expenses combined" },
                { label: "Monthly Profit", value: "€12,881", subtext: "29.8% net profit margin" },
                { label: "Annual Profit", value: "€154,572", subtext: "Projected annual net income" },
                { label: "ROI Payback", value: "3.9 Months", subtext: "On €50k initial investment" }
            ]
        }
    },

    // --- NEW: SUCCESS METRICS ---
    successMetrics: {
        badge: "Performance",
        heading: "Proven Reliability & Scale",
        description: "Key metrics from 5 years of operation across 150+ locations.",
        metrics: [
            { value: "99.97%", label: "System Uptime", description: "Measured monthly across all locations. Zero critical failures (total system outages) in 5 years of operation.", icon: "Activity" },
            { value: "99.7%", label: "Txn Success", description: "Successful transaction completion rate. 99.9% first-attempt payment authorization success.", icon: "CheckCircle" },
            { value: "50M+", label: "Transactions", description: "Lifetime transactions processed across 150-170 active locations in Sweden, Norway, and India.", icon: "BarChart" },
            { value: "€500M+", label: "GMV", description: "Gross Merchandise Value transacted through the StoreTech platform to date.", icon: "DollarSign" },
            { value: "4.6/5", label: "Satisfaction", description: "Overall customer rating average. App ratings: 4.5/5.0 iOS, 4.4/5.0 Google Play. Support satisfaction: 4.8/5.0.", icon: "Star" },
            { value: "10 Days", label: "Deployment", description: "Average deployment speed vs 4-6 weeks for traditional retail setups. Contract to go-live.", icon: "Clock" },
            { value: "NPS 42", label: "Net Promoter", description: "Net Promoter Score of 42 — considered excellent for the retail industry.", icon: "ThumbsUp" },
            { value: "85%", label: "Retention", description: "Monthly active user retention rate. Customer Lifetime Value averages €850 over 12 months.", icon: "Users" },
            { value: "200K+", label: "App Users", description: "Registered mobile app users across all locations and deployment types.", icon: "Smartphone" },
            { value: "1.2M/mo", label: "Run Rate", description: "Current monthly transaction run rate across the entire StoreTech network.", icon: "TrendingUp" },
            { value: "<2h", label: "MTTR", description: "Mean Time to Resolution for any reported issue. <15 min acknowledgment, <1 hour initial diagnosis.", icon: "Wrench" },
            { value: "80%", label: "Remote Fix", description: "Issues resolved without site visit. 99.5% of issues detected before customer impact via preventive maintenance.", icon: "Wifi" },
            { value: "60%", label: "Cost Savings", description: "Operational cost reduction vs traditional staffed stores. 70% reduction in staffing hours required.", icon: "PiggyBank" },
            { value: "35%", label: "Revenue Uplift", description: "Revenue per location increase via 24/7 operation vs limited hours. 40% inventory turnover improvement.", icon: "TrendingUp" },
            { value: "45%", label: "Shrinkage Cut", description: "Lower theft/loss through access control, AI cameras, and fraud detection systems.", icon: "ShieldCheck" },
            { value: "<2%", label: "Stock-Out Rate", description: "Real-time monitoring and predictive ordering keeps stock-out rate below 2%. 98.5% perfect order rate.", icon: "Package" }
        ]
    },

    // --- UNIVERSAL RELATER RESOURCES ---
    relatedResources: {
        services: [
            { title: "Tanlux ERP", id: "tanlux", icon: "Box", color: "text-orange-600", bg: "bg-orange-50" },
            { title: "Value Charts", id: "value-chart", icon: "BarChart", color: "text-blue-600", bg: "bg-blue-50" },
            { title: "FP Analyzer", id: "fpanalyxer", icon: "PieChart", color: "text-purple-600", bg: "bg-purple-50" },
        ],
        columns: []
    }
};

