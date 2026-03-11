 
 "use client";
 
 import type { ReactNode } from "react";
 import {
   Smartphone,
   Globe,
   Server,
   Megaphone,
   Search,
   Cpu,
   ChevronDown,
 } from "lucide-react";
 
 export type Technology = {
   name: string;
   logo: string;
 };
 
 export type Service = {
   id: number;
   icon: ReactNode;
   title: string;
   tagline: string;
   description: string;
   points: string[];
   technologies: Technology[];
   image: string;
   cta: string;
 };
 
 export const services: Service[] = [
    {
      id: 1,
      icon: <Globe size={22} strokeWidth={1.5} />,
      title: "Web Development",
      tagline: "We don’t just build websites, we build websites that sell",
      description:
        "Our web solutions are crafted to convert visitors into customers while staying fast, secure, and scalable",
      image: "./assets/images/webdevelopment.png",
      points: [
        "E-commerce Portal Development",
        "E-learning Portal Development",
        "Content Management Systems (CMS)",
        "Website Designing & Re-Designing",
        "CRM & Custom Web Applications",
        "Progressive Web Applications (PWA)",
      ],
      technologies: [
        { name: "HTML", logo: "./assets/icons/html.png" },
        { name: "CSS", logo: "./assets/icons/css.png" },
        { name: "Magento", logo: "./assets/icons/magneto.png" },
        { name: "WordPress", logo: "./assets/icons/wordpress.png" },
        { name: "PHP", logo: "./assets/icons/php.png" },
        { name: "MySQL", logo: "./assets/icons/mysql.png" },
        { name: "Node.js", logo: "./assets/icons/node.png" },
        { name: "WooCommerce", logo: "./assets/icons/woocom.png" },
        { name: "jQuery", logo: "./assets/icons/jquery.png" },
      ],
      cta: "Create Your Website",
    },
    {
      id: 2,
      icon: <Smartphone size={22} strokeWidth={1.5} />,
      title: "App Development",
      tagline: "You’ve got ideas. We’ve got developers",
      description:
        "From concept to deployment, we build mobile apps that are intuitive, scalable, and performance-driven",
      image: "./assets/images/appdevelopment.png",
      points: [
        "Android Applications",
        "iOS Applications",
        "TV Applications",
        "Cross-Platform Apps",
        "Wearable Applications",
      ],
      technologies: [
        { name: "Android", logo: "./assets/icons/image.png" },
        { name: "iOS", logo: "./assets/icons/ios.png" },
      ],
      cta: "Build Your App",
    },
    {
      id: 3,
      icon: <Megaphone size={22} strokeWidth={1.5} />,
      title: "Digital Marketing",
      tagline: "Fed up of being unnoticed? We bring the spotlight",
      description:
        "Our data-driven marketing strategies ensure your brand reaches the right audience at the right time",
      image: "./assets/images/digitalmarketing.png",
      points: [
        "Google Business Profile Setup",
        "Social Media Marketing",
        "Creative Assets & Content Creation",
        "Analytics & Performance Tracking",
        "Targeted Marketing Campaigns",
      ],
      technologies: [
        { name: "Google Ads", logo: "./assets/icons/googleads.png" },
        { name: "Google Analytics", logo: "./assets/icons/googleanalytics.png" },
        { name: "Bing Ads", logo: "./assets/icons/bing.png" },
        { name: "Facebook Ads", logo: "./assets/icons/facebook.png" },
        { name: "LinkedIn Ads", logo: "./assets/icons/linkedin.png" },
        { name: "Instagram", logo: "./assets/icons/instagram.png" },
        { name: "YouTube", logo: "./assets/icons/youtube.png" },
        {
          name: "Google Business Profile",
          logo: "./assets/icons/googlebusprof.png",
        },
      ],
      cta: "Boost Your Business",
    },
    {
      id: 4,
      icon: <Search size={22} strokeWidth={1.5} />,
      title: "Search Engine Optimization",
      tagline: "Why stay low when you can be at the top?",
      description:
        "We optimize your digital presence to rank higher, drive organic traffic, and improve visibility",
      image: "./assets/images/seo.png",
      points: [
        "Website & SEO Analysis",
        "Google Ranking Improvement",
        "SEO Score Analysis",
        "Keyword Optimization",
        "Search Engine Marketing",
      ],
      technologies: [
        { name: "Google Search Console", logo: "./assets/icons/googleads.png" },
        { name: "Ahrefs", logo: "./assets/icons/googleanalytics.png" },
        { name: "SEMrush", logo: "./assets/icons/bing.png" },
        { name: "Yoast SEO", logo: "./assets/icons/yoast.png" },
      ],
      cta: "Optimize Your Website",
    },
    {
      id: 5,
      icon: <Cpu size={22} strokeWidth={1.5} />,
      title: "IoT Solutions",
      tagline: "Get IoT. Get smart",
      description:
        "We design intelligent IoT ecosystems that enable automation, real-time insights, and predictive analytics",
      image: "./assets/images/Service Images/IoT - Webronic Industires Private Limited.png",
      points: [
        "Future-Ready IoT Applications",
        "Accurate Data Collection",
        "Industrial IoT (IIoT) Solutions",
        "Smart Home & Office Solutions",
        "Wearable & Connected Devices",
        "Advanced Analytics",
      ],
      technologies: [
        { name: "Raspberry Pi", logo: "./assets/icons/raspberry.png" },
        { name: "TensorFlow", logo: "./assets/icons/tensorflow.png" },
        { name: "NodeMCU", logo: "./assets/icons/nodemcu.png" },
        { name: "Arduino", logo: "./assets/icons/arduino.png" },
        { name: "OpenCV", logo: "./assets/icons/opencv.png" },
        { name: "OpenVINO", logo: "./assets/icons/openvino.png" },
        { name: "PyTorch", logo: "./assets/icons/pytorch.png" },
      ],
      cta: "Make Your Business Smart",
    },
    {
      id: 6,
      icon: <Server size={22} strokeWidth={1.5} />,
      title: "Domain & Hosting",
      tagline: "Faster. Secure. Reliable",
      description:
        "High-performance hosting solutions tailored to your business needs with maximum uptime",
      image: "./assets/images/domainhosting.png",
      points: [
        "Business-Specific Hosting",
        "Linux & Windows Hosting",
        "Dedicated & VPS Hosting",
        "Cloud Hosting Solutions",
        "Domain Name Registration",
      ],
      technologies: [
        { name: "AWS", logo: "./assets/icons/aws.png" },
        { name: "Microsoft Azure", logo: "./assets/icons/azure.png" },
        { name: "Google Cloud", logo: "./assets/icons/googlecloud.png" },
        { name: "Hostinger", logo: "./assets/icons/hostinger.png" },
        { name: "HostGator", logo: "./assets/icons/hostgator.png" },
        { name: "GoDaddy", logo: "./assets/icons/godaddy.png" },
        { name: "Bluehost", logo: "./assets/icons/bluehost.png" },
        { name: "BigRock", logo: "./assets/icons/bigrock.png" },
        { name: "One.com", logo: "./assets/icons/one.com.png" },
      ],
      cta: "Take Your Business Online",
    },
  ];
