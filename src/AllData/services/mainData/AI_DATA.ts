
import { ServicePageData } from "../types";

export const AI_DATA: ServicePageData = {
  id: "ai-machine-learning",

  // --- NEW PREVIEW SECTION ---
  preview: {
    title: "AI & Machine Learning",
    tagline: "Enterprise Intelligence",
    description: "Transform your business with intelligent solutions. We architect, build, and deploy custom AI systems that drive measurable value and competitive advantage",
    image: "/assets/images/Service Images/AI & Machine Learning.png",
    icon: "Brain",
    points: [
      "Custom LLM Integration",
      "Predictive Analytics",
      "Computer Vision",
      "Automated Workflows"
    ],
    technologies: [
      { name: "Python", logo: "/assets/images/Technology/Python-logo-notext.svg" },
      { name: "TensorFlow", logo: "/assets/images/Technology/TensorFlow_logo.svg" },
      { name: "OpenAI", logo: "/assets/images/Technology/OpenAI_Logo.svg" },
      { name: "PyTorch", logo: "/assets/images/Technology/Pytorch_logo.png" },
      { name: "AWS", logo: "/assets/images/Technology/Amazon_Web_Services_Logo.svg" }
    ]
  },

  // 1. HERO SECTION
  hero: {
    badge: "AI & Machine Learning",
    titlePrefix: "Enterprise AI &",
    titleHighlight: "Machine Learning Services",
    description: "Transform Business with Intelligent Automation and Predictive Intelligence",
    features: [
      "Custom AI models trained on your data",
      "Production-ready machine learning solutions",
      "Enterprise-grade AI infrastructure",
      "24/7 AI operations support"
    ],
    ctaPrimary: "Schedule AI Consultation",
    ctaSecondary: "View AI Case Studies"
  },

  // 2. OVERVIEW SECTION
  overview: {
    badge: "Service Overview",
    heading: "Driving Competitive Advantage in the",
    highlight: "Data-Driven Economy",
    content: [
      "In today's data-driven economy, artificial intelligence and machine learning have evolved from emerging technologies into essential business capabilities that drive competitive advantage. Webronic Industries delivers enterprise-grade AI and machine learning solutions that transform how organizations operate, make decisions, and serve customers.",
      "Our AI practice combines deep technical expertise in machine learning algorithms with Deep experience in manufacturing, retail, financial services, and healthcare means we understand industry-specific challenges, regulations, and best practices.. We understand that successful AI implementation requires more than just powerful models-it demands a strategic approach that aligns technology capabilities with business objectives.",
      "Whether you're taking your first steps into AI or scaling existing initiatives, our team of data scientists, ML engineers, and domain experts guides you through every stage of the journey: from strategy and data preparation through model development, deployment, and continuous optimization.",
      "We work with leading AI platforms including OpenAI, Google AI, Azure AI, and AWS AI services, while also developing custom models tailored to your unique requirements. Our solutions are production-ready, scalable, and designed for long-term maintainability."
    ],
    differentiators: [
      {
        title: "AI-First Methodology",
        description: "Unlike traditional IT service companies, we embed artificial intelligence and machine learning across all our solutions.",
        icon: "BrainCircuit"
      },
      {
        title: "Global Scale",
        description: "100+ successful AI implementations globally",
        icon: "Globe2"
      },
      {
        title: "Cross-Industry Expertise",
        description: "Cross-industry expertise spanning 15+ sectors",
        icon: "Layers"
      },
      {
        title: "Strategic Partnerships",
        description: "Partnerships with OpenAI, Google, and NVIDIA",
        icon: "Network"
      },
      {
        title: "Proprietary Accelerators",
        description: "Proprietary AI accelerators and frameworks",
        icon: "Cpu"
      }
    ]
  },

  // 3. CORE SERVICES (Extracted from allServicesData)
  coreServices: {
    badge: "Core Capabilities",
    titleLine1: "AI Strategy &",
    titleHighlight: "Consulting Services",
    description: "Beginning your AI journey requires a clear roadmap aligned with business objectives. Our AI consulting services help you navigate the complex landscape of artificial intelligence and identify high-value opportunities.",
    cards: [
      {
        title: "AI Strategy & Consulting",
        desc: "Beginning your AI journey requires a clear roadmap aligned with business objectives. Our AI consulting services help you navigate the complex landscape of artificial intelligence and identify high-value opportunities.",
        icon: "Compass",
        color: "text-blue-600",
        bg: "bg-blue-50",
        subSections: [
          {
            heading: "Services Include",
            items: [
              { term: "AI Readiness Assessment", description: "Evaluate your organization’s data infrastructure, technical capabilities, and organizational readiness for AI adoption. We analyze your existing systems, data quality, team skills, and change management capacity to create a comprehensive readiness report." },
              { term: "Use Case Identification & Prioritization", description: "Discover high-value AI opportunities across your business processes through structured workshops and data analysis. We help you identify use cases with the optimal balance of business impact, technical feasibility, and implementation complexity." },
              { term: "Technology Selection & Architecture Design", description: "Choose the right AI platforms, frameworks, and tools for your specific requirements. Our architects design scalable AI infrastructure that integrates seamlessly with your existing technology stack." },
              { term: "ROI Modeling & Business Case Development", description: "Quantify expected benefits and create compelling business cases for AI investments. We develop detailed financial models showing cost savings, revenue opportunities, and risk mitigation value." },
              { term: "Implementation Roadmap", description: "Develop phased plans that balance quick wins with strategic initiatives. Our roadmaps typically span 12-24 months with quarterly milestones and clear success metrics." },
              { term: "Governance Framework", description: "Establish responsible AI practices, ethics guidelines, and compliance protocols. We help you implement AI governance that addresses bias, fairness, transparency, and regulatory requirements." }
            ]
          },
          {
            heading: "Typical Engagement",
            content: ["Customized to project scope"]
          },
          {
            heading: "Deliverables",
            content: ["AI strategy document, prioritized use case portfolio, technical architecture, implementation roadmap, ROI models"]
          }
        ]
      },
      {
        title: "Custom AI/ML Model Development",
        desc: "Every business has unique data and challenges that require tailored AI solutions. Our model development services create custom machine learning systems optimized for your specific use cases.",
        icon: "BrainCircuit",
        color: "text-purple-600",
        bg: "bg-purple-50",
        subSections: [
          {
            heading: "Model Types & Capabilities",
            items: [
              { term: "Supervised Learning Models", description: "Classification and regression models for prediction tasks including customer churn prediction, demand forecasting, quality defect detection, and fraud identification. We develop models using algorithms including random forests, gradient boosting, support vector machines, and neural networks." },
              { term: "Unsupervised Learning", description: "Clustering, dimensionality reduction, and anomaly detection systems for discovering hidden patterns in data. Applications include customer segmentation, anomaly detection in manufacturing, network intrusion detection, and recommendation systems." },
              { term: "Deep Learning Solutions", description: "Neural networks for complex pattern recognition tasks including:", subItems: ["Convolutional Neural Networks (CNN) for image analysis", "Recurrent Neural Networks (RNN) for sequence data", "Transformers for natural language processing", "Generative Adversarial Networks (GAN) for synthetic data generation"] },
              { term: "Ensemble Methods", description: "Combine multiple models for superior accuracy and robustness. We implement stacking, bagging, and boosting techniques to create production-grade predictive systems." },
              { term: "Transfer Learning", description: "Leverage pre-trained models and fine-tune for your specific data and use cases. This approach dramatically reduces training time and data requirements while maintaining high accuracy." },
              { term: "AutoML Solutions", description: "Automated model selection and hyperparameter tuning using tools including Google AutoML, H2O.ai, and custom automation frameworks. Accelerate time-to-value with automated machine learning pipelines." }
            ]
          },
          {
            heading: "Development Process",
            items: [
              { term: "1.", description: "Data exploration and feature engineering" },
              { term: "2.", description: "Model architecture selection" },
              { term: "3.", description: "Training and validation" },
              { term: "4.", description: "Hyperparameter optimization" },
              { term: "5.", description: "Model evaluation and testing" },
              { term: "6.", description: "Production deployment" }
            ]
          },
          {
            heading: "Frameworks Used",
            content: ["TensorFlow, PyTorch, scikit-learn, XGBoost, LightGBM, Keras, Hugging Face Transformers"]
          },
          {
            heading: "Typical Timeline",
            content: ["Varies based on complexity"]
          },
          {
            heading: "Deliverables",
            content: ["Trained models, documentation, API endpoints, performance metrics, training notebooks"]
          }
        ]
      },
      {
        title: "Natural Language Processing (NLP)",
        desc: "Extract insights and automate workflows with advanced natural language understanding capabilities powered by state-of-the-art language models.",
        icon: "MessageSquareText",
        color: "text-green-600",
        bg: "bg-green-50",
        subSections: [
          {
            heading: "NLP Services",
            items: [
              { term: "Text Analytics & Sentiment Analysis", description: "Analyze customer feedback, social media content, reviews, and survey responses to understand sentiment, extract themes, and identify trends. Our sentiment analysis models achieve 95%+ accuracy across multiple languages." },
              { term: "Named Entity Recognition (NER)", description: "Automatically identify and classify entities including names, organizations, locations, dates, monetary values, and custom customer specific entities from unstructured text." },
              { term: "Document Classification & Categorization", description: "Automatically route, tag, and organize documents based on content. Applications include email routing, content moderation, legal document classification, and medical record categorization." },
              { term: "Text Summarization", description: "Generate concise summaries of long documents including reports, articles, transcripts, and legal contracts using both extractive and abstractive summarization techniques." },
              { term: "Question Answering Systems", description: "Build intelligent chatbots and virtual assistants that understand natural language queries and provide accurate responses from your knowledge base." },
              { term: "Language Translation", description: "Translate content across 100+ languages with context-aware neural machine translation models that understand industry-specific terminology." },
              { term: "Information Extraction", description: "Extract structured data from unstructured documents including contracts, invoices, medical records, and research papers." },
              { term: "Conversational AI", description: "Develop sophisticated dialogue systems for customer service, internal support, and specialized domain applications." }
            ]
          },
          {
            heading: "Technologies Used",
            items: [
              { term: "-", description: "OpenAI GPT-4/GPT-3.5 for advanced language understanding" },
              { term: "-", description: "Google PaLM/Gemini for multimodal capabilities" },
              { term: "-", description: "Anthropic Claude for constitutional AI" },
              { term: "-", description: "Hugging Face Transformers for open-source models" },
              { term: "-", description: "Custom fine-tuned models for customer specific applications" }
            ]
          },
          {
            heading: "Use Cases",
            content: ["Customer service automation, document processing, content moderation, market research, compliance monitoring"]
          }
        ]
      },
      {
        title: "Computer Vision Solutions",
        desc: "Transform visual data into actionable insights with cutting-edge computer vision systems powered by deep learning.",
        icon: "Eye",
        color: "text-orange-600",
        bg: "bg-orange-50",
        subSections: [
          {
            heading: "Computer Vision Capabilities",
            items: [
              { term: "Object Detection & Recognition", description: "Identify and locate objects in images and video streams with bounding box precision. Applications include retail inventory management, security surveillance, quality inspection, and autonomous systems." },
              { term: "Image Classification", description: "Categorize images into predefined classes for applications including medical diagnosis, product categorization, content moderation, and defect classification." },
              { term: "Semantic Segmentation", description: "Pixel-level understanding of images for precise object delineation. Use cases include medical imaging analysis, autonomous driving, satellite imagery analysis, and agricultural monitoring." },
              { term: "Facial Recognition & Analysis", description: "Detect, recognize, and analyze faces for security access control, customer analytics, attendance systems, and personalized experiences (with appropriate privacy controls)." },
              { term: "Optical Character Recognition (OCR)", description: "Extract text from images and documents including invoices, receipts, forms, handwritten notes, and signage with 99%+ accuracy." },
              { term: "Anomaly Detection", description: "Identify defects, damage, or anomalies in manufacturing quality control, infrastructure inspection, medical imaging, and security monitoring." },
              { term: "Video Analytics", description: "Real time analysis of video streams for applications including:", subItems: ["Crowd counting and behavior analysis", "Traffic monitoring and management", "Retail analytics (customer flow, dwell time)", "Safety compliance monitoring"] },
              { term: "3D Computer Vision", description: "Depth estimation, 3D reconstruction, and spatial understanding for robotics, augmented reality, and autonomous systems." }
            ]
          },
          {
            heading: "Frameworks & Tools",
            content: ["TensorFlow Object Detection API, PyTorch with torchvision, OpenCV for image processing, YOLO for real time detection, Detectron2 for instance segmentation, Custom architectures optimized for edge deployment"]
          },
          {
            heading: "Performance Metrics",
            content: ["95%+ accuracy on standard benchmarks, <100ms inference time for real time applications"]
          }
        ]
      },
      {
        title: "Predictive Analytics & Forecasting",
        desc: "Anticipate future trends, behaviors, and outcomes with advanced predictive modeling and forecasting systems.",
        icon: "TrendingUp",
        color: "text-red-600",
        bg: "bg-red-50",
        subSections: [
          {
            heading: "Predictive Analytics Services",
            items: [
              { term: "Demand Forecasting", description: "Predict future demand with statistical and machine learning models that account for seasonality, trends, promotions, and external factors. Reduce inventory costs by 20-30% while maintaining service levels." },
              { term: "Customer Churn Prediction", description: "Identify customers at risk of churning before they leave. Our models analyze behavioral patterns, engagement metrics, and satisfaction indicators to predict churn probability with 85%+ accuracy." },
              { term: "Predictive Maintenance", description: "Forecast equipment failures before they occur using sensor data, maintenance history, and operational conditions. Reduce unplanned downtime by 50-75% and optimize maintenance schedules." },
              { term: "Financial Forecasting", description: "Predict revenue, cash flow, profitability, and key financial metrics using time series analysis and machine learning. Support strategic planning with scenario modeling and sensitivity analysis." },
              { term: "Risk Scoring & Assessment", description: "Assess credit risk, fraud risk, operational risk, and other business risks using predictive models trained on historical data and real time indicators." },
              { term: "Price Optimization", description: "Determine optimal pricing strategies using demand elasticity models, competitive analysis, and revenue optimization algorithms." }
            ]
          },
          {
            heading: "Techniques Used",
            items: [
              { term: "-", description: "Time series analysis (ARIMA, Prophet, LSTM)" },
              { term: "-", description: "Regression models (linear, ridge, lasso, elastic net)" },
              { term: "-", description: "Gradient boosting (XGBoost, LightGBM, CatBoost)" },
              { term: "-", description: "Neural networks for complex patterns" },
              { term: "-", description: "Ensemble methods for robust predictions" }
            ]
          },
          {
            heading: "Business Impact",
            content: ["15-30% improvement in forecast accuracy, 20-40% reduction in inventory costs, 10-25% increase in revenue through optimization"]
          }
        ]
      },
      {
        title: "Intelligent Process Automation",
        desc: "Combine AI with automation to transform business processes and reduce manual effort.",
        icon: "Bot",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
        subSections: [
          {
            heading: "Automation Services",
            items: [
              { term: "Robotic Process Automation (RPA) with AI", description: "Enhance traditional RPA with AI capabilities including document understanding, intelligent decision-making, and exception handling. Automate complex processes that require cognitive capabilities." },
              { term: "Intelligent Document Processing", description: "Automatically extract, classify, and process information from documents including invoices, contracts, forms, and reports. Reduce document processing time by 80-90%." },
              { term: "Workflow Automation", description: "Design and implement intelligent workflows that route, process, and manage tasks based on AI driven decisions. Integrate with existing systems including ERP, CRM, and custom applications." },
              { term: "Business Process Automation", description: "Automate end to end business processes including:", subItems: ["Invoice processing and accounts payable", "Customer onboarding and KYC", "Claims processing", "Order fulfillment", "HR processes (resume screening, interview scheduling)"] },
              { term: "AI powered Chatbots & Virtual Assistants", description: "Build conversational AI systems that handle customer inquiries, provide support, and automate routine interactions. Our chatbots resolve 70-80% of common queries without human intervention." },
              { term: "Email Automation & Routing", description: "Automatically classify, route, and respond to emails using NLP and machine learning. Prioritize urgent messages and draft responses for agent review." }
            ]
          },
          {
            heading: "Technologies",
            content: ["UiPath with AI Fabric, Automation Anywhere with IQ Bot, Blue Prism with Document Automation, Microsoft Power Automate, custom Python automation"]
          },
          {
            heading: "ROI",
            content: ["40-60% reduction in processing time, 30-50% cost savings, 90%+ accuracy in automated decisions"]
          }
        ]
      }
    ],
    footer: {
      left: {
        title: "Typical Engagement",
        type: "highlight",
        content: "6-8 Weeks"
      },
      right: {
        title: "Deliverables",
        type: "tags",
        content: ["AI strategy document", "Prioritized use cases", "Technical architecture", "ROI models"]
      }
    }
  },

  // 4. PROCESS SECTION (from AI_PROCESS_PHASES)
  // 4. PROCESS SECTION (from AI_PROCESS_PHASES)
  process: {
    title: "AI Development Process",
    description: "From initial discovery to continuous optimization, our structured approach ensures successful AI implementation and measurable business value",
    phases: [
      {
        phase: "Phase 1",
        title: "Discovery & Assessment",
        duration: "2-4 weeks",
        icon: "Search",
        color: "bg-[#2776ea]",
        objectives: [
          "Understand business requirements and success criteria",
          "Evaluate data availability and quality",
          "Assess technical infrastructure",
          "Define project scope and timeline"
        ],
        activities: [
          "Stakeholder interviews and workshops",
          "Data audit and exploratory analysis",
          "Technical feasibility assessment",
          "Risk identification and mitigation planning"
        ],
        deliverables: [
          "Project charter",
          "Data assessment report",
          "Technical architecture proposal",
          "Detailed project plan"
        ]
      },
      {
        phase: "Phase 2",
        title: "Data Preparation",
        duration: "3-6 weeks",
        icon: "Database",
        color: "bg-[#76ea27]",
        objectives: [
          "Collect and consolidate data from multiple sources",
          "Clean and preprocess data",
          "Engineer relevant features",
          "Create training/validation/test datasets"
        ],
        activities: [
          "Data extraction and integration",
          "Data quality improvement",
          "Feature engineering and selection",
          "Data augmentation (when needed)",
          "Labeling and annotation"
        ],
        deliverables: [
          "Clean, processed datasets",
          "Feature engineering documentation",
          "Data pipeline code",
          "Data quality metrics"
        ]
      },
      {
        phase: "Phase 3",
        title: "Model Development",
        duration: "4-8 weeks",
        icon: "Brain",
        color: "bg-[#2776ea]",
        objectives: [
          "Design and implement ML models",
          "Train models on prepared data",
          "Optimize for performance and efficiency",
          "Validate results"
        ],
        activities: [
          "Algorithm selection and baseline modeling",
          "Iterative model development",
          "Hyperparameter tuning",
          "Cross-validation and testing",
          "Model interpretability analysis"
        ],
        deliverables: [
          "Trained models",
          "Performance benchmarks",
          "Model documentation",
          "Training notebooks and code"
        ]
      },
      {
        phase: "Phase 4",
        title: "Evaluation & Testing",
        duration: "2-3 weeks",
        icon: "ClipboardCheck",
        color: "bg-[#76ea27]",
        objectives: [
          "Validate model performance on unseen data",
          "Conduct bias and fairness testing",
          "Perform error analysis",
          "Get stakeholder approval"
        ],
        activities: [
          "Comprehensive testing on holdout data",
          "A/B testing preparation",
          "Bias detection and mitigation",
          "User acceptance testing",
          "Documentation review"
        ],
        deliverables: [
          "Test results and metrics",
          "Error analysis report",
          "Bias assessment",
          "Model card documentation"
        ]
      },
      {
        phase: "Phase 5",
        title: "Deployment",
        duration: "2-4 weeks",
        icon: "Rocket",
        color: "bg-[#2776ea]",
        objectives: [
          "Deploy models to production environment",
          "Integrate with existing systems",
          "Implement monitoring and logging",
          "Conduct user training"
        ],
        activities: [
          "Production environment setup",
          "Model deployment and integration",
          "API development",
          "Monitoring configuration",
          "User training sessions"
        ],
        deliverables: [
          "Production deployment",
          "API documentation",
          "Monitoring dashboards",
          "User training materials"
        ]
      },
      {
        phase: "Phase 6",
        title: "Monitoring & Optimization",
        duration: "Ongoing",
        icon: "LineChart",
        color: "bg-[#76ea27]",
        objectives: [
          "Monitor model performance in production",
          "Detect and address model drift",
          "Continuously improve accuracy",
          "Optimize for cost and efficiency"
        ],
        activities: [
          "Performance monitoring",
          "Data drift detection",
          "Model retraining scheduling",
          "A/B testing of improvements",
          "Cost optimization"
        ],
        deliverables: [
          "Monthly performance reports",
          "Model updates and improvements",
          "Optimization recommendations",
          "ROI tracking"
        ]
      }
    ]
  },

  // 5. TECH STACK (from TECH_STACK_DATA)
  techStack: {
    heading: "Enterprise-Grade Technology Stack",
    description: "We leverage a robust ecosystem of cutting-edge frameworks, cloud platforms, and MLOps tools to build scalable, production-ready AI solutions",
    frameworks: [
      { name: "TensorFlow & Keras", desc: "Google’s comprehensive deep learning platform for building and deploying ML models. We use TensorFlow for complex neural networks, computer vision systems, and production ML pipelines." },
      { name: "PyTorch", desc: "Preferred framework for research and production ML with dynamic computational graphs. Excellent for NLP applications and custom model architectures." },
      { name: "scikit-learn", desc: "Industry-standard library for classical machine learning algorithms including regression, classification, clustering, and dimensionality reduction." },
      { name: "XGBoost/LightGBM/CatBoost", desc: "Gradient boosting frameworks for structured data problems. These tools consistently deliver state of the art results in predictive modeling competitions." },
      { name: "Hugging Face Transformers", desc: "Access to thousands of pre-trained language models for NLP tasks. We fine-tune BERT, GPT, T5, and other transformer models for custom applications." }
    ],
    llms: [
      { name: "OpenAI GPT-4/GPT-3.5", desc: "Advanced language models for text generation, summarization, question answering, and code generation. We implement GPT-4 for complex reasoning tasks and GPT-3.5 for cost-effective applications." },
      { name: "Anthropic Claude", desc: "Constitutional AI for safe, helpful, and honest interactions. Excellent for applications requiring nuanced understanding and ethical decision-making." },
      { name: "Google PaLM/Gemini", desc: "Multimodal AI capabilities handling text, images, and code. We leverage Gemini for applications requiring cross-modal understanding." },
      { name: "Open-Source Models", desc: "Llama 2 for on premise deployment, Mistral for efficient inference, Falcon for specialized applications, and custom fine-tuned models." }
    ],
    mlOps: [
      { name: "MLflow", desc: "End-to-end ML lifecycle management including experiment tracking, model registry, and deployment." },
      { name: "Kubeflow", desc: "ML workflows on Kubernetes for scalable training and deployment pipelines." },
      { name: "Apache Airflow", desc: "Workflow orchestration for data pipelines and scheduled ML jobs." },
      { name: "Docker & Kubernetes", desc: "Containerization and orchestration for reproducible, scalable deployments." },
      { name: "Weights & Biases", desc: "Experiment tracking, model visualization, and collaboration platform." }
    ],
    cloudPlatforms: [
      {
        provider: "AWS AI Services",
        color: "text-[#2776ea]",
        services: [
          { name: "SageMaker", desc: "End-to-end ML platform for training and deployment" },
          { name: "Rekognition", desc: "Computer vision and facial analysis" },
          { name: "Comprehend", desc: "Natural language processing" },
          { name: "Textract", desc: "Document text extraction" },
          { name: "Personalize", desc: "Recommendation systems" },
          { name: "Forecast", desc: "Time series forecasting" }
        ]
      },
      {
        provider: "Google Cloud AI",
        color: "text-[#76ea27]",
        services: [
          { name: "Vertex AI", desc: "Unified ML platform" },
          { name: "Vision AI", desc: "Image analysis and classification" },
          { name: "Natural Language AI", desc: "Text understanding" },
          { name: "Document AI", desc: "Intelligent document processing" },
          { name: "Recommendations AI", desc: "Personalized recommendations" }
        ]
      },
      {
        provider: "Azure AI",
        color: "text-blue-600",
        services: [
          { name: "Azure Machine Learning", desc: "Enterprise ML platform" },
          { name: "Cognitive Services", desc: "Pre-built AI capabilities" },
          { name: "Azure OpenAI Service", desc: "GPT-4 and other models" },
          { name: "Form Recognizer", desc: "Document understanding" },
          { name: "Computer Vision", desc: "Image analysis" }
        ]
      }
    ]
  },

  // 6. INDUSTRIES (from INDUSTRIES)
  industries: {
    heading: "Industry Applications",
    description: "Discover how we apply intelligent technology to solve specific challenges across diverse sectors",
    items: [
      {
        id: "manufacturing",
        label: "Manufacturing",
        icon: "Factory",
        theme: "blue",
        description: "Driving efficiency with computer vision and predictive maintenance",
        features: [
          {
            title: "Quality Inspection Automation",
            desc: "Computer vision systems that inspect products for defects with 99%+ accuracy, eliminating costly human errors and increasing inspection speed by 10x.",
            icon: "ScanEye",
            caseStudy: {
              title: "Automotive Parts Manufacturer",
              result: "Reduced defect escape rate from 2.3% to 0.1% while increasing inspection throughput by 400%"
            }
          },
          {
            title: "Predictive Maintenance",
            desc: "ML models analyzing sensor data to predict equipment failures 2-4 weeks in advance, enabling planned maintenance and preventing costly breakdowns.",
            icon: "Zap",
            caseStudy: {
              title: "Steel Manufacturing Plant",
              result: "Reduced unplanned downtime by 68% and maintenance costs by 35%"
            }
          },
          {
            title: "Production Optimization",
            desc: "AI driven optimization of production schedules, resource allocation, and process parameters to maximize throughput and minimize waste.",
            icon: "TrendingUp"
          }
        ]
      },
      {
        id: "retail",
        label: "Retail & E-commerce",
        icon: "ShoppingBag",
        theme: "green",
        description: "Personalizing customer experiences and optimizing supply chains",
        features: [
          {
            title: "Demand Forecasting",
            desc: "Advanced ML models predicting demand at SKU/store level with 85-90% accuracy, optimizing inventory levels and reducing stockouts by 40%.",
            icon: "TrendingUp"
          },
          {
            title: "Customer Segmentation & Personalization",
            desc: "Clustering and predictive models identifying customer segments and personalizing product recommendations, increasing conversion rates by 25-35%.",
            icon: "Users"
          },
          {
            title: "Dynamic Pricing Optimization",
            desc: "Real time pricing algorithms that maximize revenue while remaining competitive, increasing profit margins by 5-15%.",
            icon: "DollarSign"
          },
          {
            title: "Visual Search",
            desc: "Computer vision-powered product search allowing customers to find items using photos, increasing engagement and sales.",
            icon: "Image"
          }
        ]
      },
      {
        id: "finance",
        label: "Financial Services",
        icon: "Landmark",
        theme: "blue",
        description: "Fraud detection, credit risk assessment, and algorithmic trading",
        features: [
          {
            title: "Fraud Detection",
            desc: "Real time ML models analyzing transaction patterns to detect fraud with 95%+ accuracy while minimizing false positives that frustrate customers.",
            icon: "ShieldAlert"
          },
          {
            title: "Credit Risk Assessment",
            desc: "Predictive models evaluating credit risk using alternative data sources and advanced algorithms, improving approval rates for creditworthy customers.",
            icon: "Percent"
          },
          {
            title: "Algorithmic Trading",
            desc: "ML-powered trading strategies analyzing market data and executing trades at optimal times.",
            icon: "Activity"
          },
          {
            title: "Customer Service Automation",
            desc: "AI chatbots handling routine inquiries and transactions, reducing call center volume by 60% while maintaining high satisfaction.",
            icon: "MessageSquare"
          }
        ]
      },
      {
        id: "healthcare",
        label: "Healthcare",
        icon: "Activity",
        theme: "green",
        description: "Medical image analysis and clinical decision support",
        features: [
          {
            title: "Medical Image Analysis",
            desc: "Deep learning models analyzing X-rays, MRIs, CT scans, and pathology images to assist radiologists in diagnosis with accuracy matching specialist physicians.",
            icon: "Image"
          },
          {
            title: "Clinical Decision Support",
            desc: "AI systems providing evidence-based treatment recommendations and identifying potential drug interactions or contraindications.",
            icon: "Stethoscope"
          },
          {
            title: "Patient Risk Stratification",
            desc: "Predictive models identifying patients at high risk for adverse events, enabling proactive interventions.",
            icon: "Activity"
          },
          {
            title: "Medical Transcription",
            desc: "NLP-powered systems automatically transcribing and structuring physician notes, saving 2-3 hours daily per clinician.",
            icon: "FileText"
          }
        ]
      }
    ]
  },

  // 7. CASE STUDIES (from CASE_STUDIES)
  caseStudies: {
    heading: "Real World Success",
    description: "See how our AI solutions translate into measurable business value and ROI for industry leaders",
    items: [
      {
        id: 1,
        category: "Manufacturing AI",
        client: "Global electronics manufacturer with 8 production facilities",
        title: "Computer Vision Quality Inspection",
        icon: "Factory",
        color: "text-[#2776ea]",
        challenge: "Manual quality inspection missing 3-5% of defects, leading to costly warranty claims and brand damage",
        solution: "Deployed computer vision system using custom-trained CNN models to inspect circuit boards for 47 different defect types",
        implementation: [
          "Collected and labeled 500,000 training images",
          "Trained custom ResNet-based architecture",
          "Integrated with production line cameras",
          "Real time inference at 15 images/second",
          "Deployed across 120 inspection stations"
        ],
        results: [
          { label: "Defect Detection", value: "99.2% accuracy" },
          { label: "Defects Missed", value: "Reduced from 4.2% to 0.3%" },
          { label: "Inspection Speed", value: "400% increase" },
          { label: "ROI", value: "$8.5M annual savings" },
          { label: "Payback Period", value: "7 months" }
        ],
        quote: "The computer vision system has transformed our quality control. We’re catching defects we never saw before and doing it 4x faster.",
        author: "Director of Manufacturing Operations"
      },
      {
        id: 2,
        category: "Predictive Maintenance",
        client: "Chemical manufacturing facility with $50M annual production",
        title: "Predictive Maintenance for Chemical Plant",
        icon: "FlaskConical",
        color: "text-[#76ea27]",
        challenge: "Unplanned equipment failures causing average 120 hours downtime yearly, costing $2.5M in lost production",
        solution: "Implemented ML-powered predictive maintenance system using IoT sensor data",
        implementation: [
          "Installed 250 IoT sensors on critical equipment",
          "Collected 18 months of operational data",
          "Developed ensemble models (XGBoost + LSTM)",
          "Created maintenance scheduling optimization",
          "Integrated with CMMS system"
        ],
        results: [
          { label: "Failure Prediction Accuracy", value: "87% at 2-week lead time" },
          { label: "Unplanned Downtime", value: "Reduced by 72%" },
          { label: "Maintenance Costs", value: "Reduced by 28%" },
          { label: "Production Increase", value: "4% from improved uptime" },
          { label: "Annual Savings", value: "$2.1M" }
        ],
        quote: "We now fix equipment before it breaks. The system paid for itself in the first year through reduced downtime alone.",
        author: "Plant Operations Manager"
      },
      {
        id: 3,
        category: "Customer Service AI",
        client: "Insurance provider with 2M policyholders",
        title: "NLP-Powered Customer Service",
        icon: "MessageSquare",
        color: "text-purple-600",
        challenge: "Customer service center receiving 50,000 monthly inquiries with 45-minute average response time",
        solution: "Built AI chatbot using GPT-4 and custom NLP models to handle routine inquiries instantly",
        implementation: [
          "Fine-tuned GPT-4 on insurance knowledge base",
          "Integrated with policy management system",
          "Implemented sentiment analysis",
          "Created escalation logic for complex cases",
          "Deployed across web, mobile, and messaging channels"
        ],
        results: [
          { label: "Automation Rate", value: "73% of inquiries resolved" },
          { label: "Response Time", value: "Reduced from 45m to <2m" },
          { label: "Customer Satisfaction", value: "Increased from 3.2 to 4.1" },
          { label: "Cost Savings", value: "$3.2M annually" },
          { label: "Agent Productivity", value: "40% improvement" }
        ],
        quote: "Our AI assistant handles routine questions instantly while our agents focus on complex cases that need human expertise.",
        author: "VP of Customer Experience"
      }
    ]
  },

  // 8. FAQ (from FAQ_DATA)
  faq: {
    heading: "Everything you need to know about our process",
    items: [
      {
        question: "How much data do I need to build a custom AI model?",
        answer: "The data requirements vary significantly based on the problem complexity. For simple classification tasks, you might achieve good results with 1,000-10,000 labeled examples. Computer vision applications typically require 10,000-100,000 images. However, we can often leverage transfer learning and pre-trained models to achieve excellent results with smaller datasets. During our discovery phase, we’ll assess your data availability and recommend the best approach."
      },
      {
        question: "How long does it take to develop and deploy an AI solution?",
        answer: "Timelines depend on project scope and complexity. A simple predictive model might be deployed in 6-8 weeks, while complex computer vision systems can take 4-6 months. Our typical project timeline is 3-5 months from kickoff to production deployment. We follow an agile approach with regular milestones and demonstrations."
      },
      {
        question: "What ROI can I expect from AI implementation?",
        answer: "ROI varies by use case, but our clients typically see returns within 6-18 months. Common benefits include: 20-40% cost reduction in automated processes, 15-30% improvement in prediction accuracy, 50-75% reduction in processing time, and 10-25% revenue increase through optimization. We develop detailed ROI models during the strategy phase."
      },
      {
        question: "How do you ensure AI models remain accurate over time?",
        answer: "We implement comprehensive MLOps practices including continuous monitoring, automated drift detection, and scheduled retraining. Our monitoring systems track model performance metrics in real time and alert when degradation occurs. We typically retrain models quarterly or when performance drops below thresholds."
      },
      {
        question: "Can AI models explain their decisions?",
        answer: "Yes, we prioritize interpretability and explainability. For regulated industries, we use inherently interpretable models or apply techniques like SHAP values, LIME, or attention visualization to explain predictions. Our model documentation includes feature importance analysis and decision logic explanations."
      },
      {
        question: "How do you address bias and fairness in AI models?",
        answer: "We conduct systematic bias testing across protected attributes (race, gender, age, etc.). Our process includes diverse training data collection, bias detection during development, fairness metrics evaluation, and ongoing monitoring in production. We can also implement bias mitigation techniques like reweighting or adversarial debiasing."
      },
      {
        question: "What about data privacy and security?",
        answer: "We follow industry best practices for data security including encryption at rest and in transit, access controls, audit logging, and compliance with regulations (GDPR, HIPAA, etc.). Data can be processed on premise or in secure cloud native environments. We sign comprehensive NDAs and can accommodate specific security requirements."
      },
      {
        question: "Do I need to have data science expertise in house?",
        answer: "No, we provide end to end AI development including strategy, implementation, and deployment. We do recommend having someone on your team who can work with our data scientists, typically a business analyst or product manager who understands your domain. We also provide knowledge transfer and can train your team."
      },
      {
        question: "Can AI solutions integrate with our existing systems?",
        answer: "Yes, we specialize in integrating AI capabilities with existing enterprise systems including ERP, CRM, databases, and custom applications. We use standard APIs, microservices architecture, and can accommodate various integration patterns (REST, GraphQL, message queues, direct database access)."
      },
      {
        question: "What if the AI model doesn’t perform well enough?",
        answer: "We set clear success metrics upfront and work iteratively to achieve them. If initial models don’t meet targets, we explore data quality improvement, feature engineering, alternative algorithms, or ensemble methods. We don’t consider projects complete until performance meets agreed-upon thresholds."
      },
      {
        question: "How much does AI development cost?",
        answer: "Investment varies based on project scope and requirements. We provide detailed estimates after initial discovery and scoping."
      },
      {
        question: "Can you start with a pilot project before full implementation?",
        answer: "Absolutely. We recommend starting with a focused pilot to prove value before scaling. Pilots demonstrate capabilities on a subset of data and provide clear success metrics that inform the decision to scale."
      }
    ]
  },

  // 9. GET STARTED (from GET_STARTED_DATA)
  getStarted: {
    badge: "Take the Next Step",
    titleLines: ["Ready to start your", "AI Journey?"],
    description: "Whether you're exploring possibilities or ready to build, we have the right engagement model for you",
    cards: [
      {
        id: "assessment",
        title: "Free AI Readiness Assessment",
        description: "Not sure where to start with AI? Our complimentary assessment helps you:",
        icon: "Rocket",
        theme: "light",
        list: [
          "Identify high-value AI use cases",
          "Evaluate your data readiness",
          "Understand technical requirements",
          "Estimate potential ROI",
          "Create an implementation roadmap"
        ],
        cta: { text: "Request Your Free Assessment", link: "#assessment" }
      },
      {
        id: "workshop",
        title: "AI Strategy Workshop",
        description: "Join our AI solution architects for a half-day workshop to:",
        icon: "Users",
        theme: "dark",
        list: [
          "Explore AI applications in your industry",
          "Review your specific challenges",
          "Brainstorm potential solutions",
          "Develop preliminary business cases",
          "Outline next steps"
        ],
        cta: { text: "Schedule Workshop", link: "#workshop" }
      }
    ],
    contact: {
      title: "Contact Our AI Team",
      subtitle: "Direct access to experts",
      methods: [
        { label: "Email Us", value: "contact@webronic.com", icon: "Mail", iconColor: "text-[#2776ea]" },
        { label: "Call Us", value: "+91 72000 88500", icon: "Phone", iconColor: "text-[#76ea27]" }
      ]
    }
  },

  // 10. RELATED RESOURCES
  relatedResources: {
    services: [
      { title: "Data Analytics", id: "data-analytics", icon: "BarChart3", color: "text-blue-500", bg: "bg-blue-50" },
      { title: "Cloud Computing", id: "cloud-services", icon: "Cloud", color: "text-sky-500", bg: "bg-sky-50" },
      { title: "IoT Solutions", id: "iot-solutions", icon: "Cpu", color: "text-emerald-500", bg: "bg-emerald-50" }
    ],
    columns: [
      {
        title: "White Papers",
        icon: "FileText",
        items: [
          { label: "The Executive’s Guide to AI Implementation", href: "#" },
          { label: "Measuring ROI from AI Investments", href: "#" },
          { label: "Building Responsible AI Systems", href: "#" }
        ]
      },
      {
        title: "Case Studies",
        icon: "Layers",
        items: [
          { label: "Manufacturing AI Success Stories", href: "#" },
          { label: "Retail AI Transformation", href: "#" },
          { label: "Financial Services AI Innovation", href: "#" }
        ]
      },
      {
        title: "Blog Posts",
        icon: "BookOpen",
        items: [
          { label: "How to Prepare Your Data for Machine Learning", href: "#" },
          { label: "Common AI Implementation Challenges and Solutions", href: "#" },
          { label: "The Future of AI in Enterprise", href: "#" }
        ]
      }
    ]
  }
};