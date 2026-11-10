import {
  SiCss3,
  SiExpress,
  SiFigma,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiWordpress,
} from "react-icons/si";
import {
  FiCode,
  FiGlobe,
  FiLayers,
  FiLayout,
  FiLink,
  FiMail,
  FiMapPin,
  FiPenTool,
  FiScissors,
  FiSearch,
  FiSend,
  FiServer,
  FiSliders,
  FiSmartphone,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import sportsImg from "../assets/img/sports-club.webp";
import toyImg from "../assets/img/the-the-toy.webp";
import recipeImg from "../assets/img/recipe.webp";
import hotelImg from "../assets/img/the-zamaluxe-x4j2.vercel.app_.webp";

export const profile = {
  name: "Md. Alimuzzaman Zamaddar",
  shortName: "Alimuzzaman",
  role: "Frontend Developer",
  specialty: "React & Next.js Specialist · Full-Stack Developer",
  headline: "I make the web feel a little more human.",
  description:
    "I'm a frontend developer in Dhaka who sweats the small stuff — loading states, empty states, the details you only notice when they're missing. React, Next.js, and a healthy amount of curiosity.",
  email: "alimuzzamanzamaddar@gmail.com",
  github: "https://github.com/alimuzzaman-zamaddar",
  resume: "/resume.pdf",
  location: "Dhaka, Bangladesh",
  availability: "Available for new opportunities",
};

export const navLinks = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

export const stats = [
  {
    value: 1000,
    suffix: "+",
    label: "Projects worked on",
    detail: "Customization & client-specific solutions",
  },
  {
    value: 1.6,
    suffix: "+",
    decimals: 1,
    label: "Years in WordPress",
    detail: "Themes, customization & maintenance",
  },
  {
    value: 2,
    label: "Professional teams",
    detail: "Agency and studio experience",
  },
  {
    value: "Intl.",
    label: "Fiverr clients",
    detail: "Cross-border collaboration",
  },
];

export const techIcons = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  JavaScript: SiJavascript,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  PostgreSQL: SiPostgresql,
  "REST APIs": FiLink,
  WordPress: SiWordpress,
  Git: SiGit,
  GitHub: SiGithub,
  Figma: SiFigma,
};

export const skillGroups = [
  {
    title: "Frontend Development",
    description: "Interfaces that feel fast, fluid and considered.",
    icon: FiLayout,
    accent: "#8B5CF6",
    items: [
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#F8FAFC" },
      { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Responsive UI", icon: FiSmartphone, color: "#A78BFA" },
    ],
  },
  {
    title: "Backend Development",
    description: "APIs and data flows that support the product.",
    icon: FiServer,
    accent: "#22D3EE",
    items: [
      { name: "Node.js", icon: SiNodedotjs, color: "#539E43" },
      { name: "Express.js", icon: SiExpress, color: "#F8FAFC" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "REST API Integration", icon: FiLink, color: "#22D3EE" },
    ],
  },
  {
    title: "CMS & Development Tools",
    description: "The practical toolkit behind shipped work.",
    icon: FiSliders,
    accent: "#A3E635",
    items: [
      { name: "WordPress", icon: SiWordpress, color: "#21759B" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#F8FAFC" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    title: "Design & Architecture",
    description: "From Figma files to maintainable components.",
    icon: FiPenTool,
    accent: "#F472B6",
    items: [
      { name: "Responsive Design", icon: FiLayout, color: "#A78BFA" },
      { name: "UI Implementation", icon: FiPenTool, color: "#22D3EE" },
      { name: "Component-Based Architecture", icon: FiLayers, color: "#A3E635" },
      { name: "Third-Party API Integration", icon: FiGlobe, color: "#F472B6" },
    ],
  },
];


export const services = [
  {
    title: "Frontend Development",
    description:
      "Polished, accessible interfaces built with semantic HTML, modern CSS and thoughtful interaction design.",
    icon: FiLayout,
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "React & Next.js",
    description:
      "Component-driven applications and marketing sites with clean state, routing and data-fetching patterns.",
    icon: FiCode,
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end features across the UI, Node/Express APIs and PostgreSQL data models.",
    icon: FiServer,
    tags: ["Node.js", "Express", "PostgreSQL"],
  },
  {
    title: "WordPress Development",
    description:
      "Custom themes, theme customization and maintenance for content-driven business websites.",
    icon: SiWordpress,
    tags: ["Themes", "Customization", "Maintenance"],
  },
  {
    title: "Website Customization",
    description:
      "Careful improvements to existing websites — layout, responsiveness, performance and client-specific requirements.",
    icon: FiSliders,
    tags: ["Responsive", "UI fixes", "Client solutions"],
  },
  {
    title: "API Integration",
    description:
      "Connecting frontends to REST APIs and third-party services with reliable loading and error states.",
    icon: FiLink,
    tags: ["REST", "Third-party APIs", "Data flow"],
  },
];

export const process = [
  {
    step: "01",
    title: "Discover",
    description:
      "Understand the goal, the users and the constraints before writing a line of code.",
    icon: FiSearch,
  },
  {
    step: "02",
    title: "Design",
    description:
      "Translate requirements and Figma files into a clear interface and component structure.",
    icon: FiPenTool,
  },
  {
    step: "03",
    title: "Build",
    description:
      "Develop responsive, maintainable frontend code and integrate the APIs it depends on.",
    icon: FiCode,
  },
  {
    step: "04",
    title: "Ship",
    description:
      "Test across screen sizes, polish the details and deploy to production.",
    icon: FiSend,
  },
];

export const experience = [
  {
    company: "Softvence Agency",
    parent: "Betopia Group",
    role: "Frontend Developer",
    period: "Present",
    current: true,
    summary:
      "Developing production-level web applications with a focus on React, Next.js and clean, responsive interfaces.",
    points: [
      "Build responsive web interfaces with React and Next.js.",
      "Integrate REST APIs and connect UI to backend data.",
      "Work on production-level applications alongside development teams.",
      "Contribute to frontend structure, reusable components and UI quality.",
    ],
    tech: ["React", "Next.js", "Tailwind CSS", "REST APIs"],
  },
  {
    company: "Backbenchers Studio",
    parent: "",
    role: "WordPress Developer",
    period: "1.6+ years",
    current: false,
    summary:
      "Delivered WordPress websites and client-specific customizations across a high volume of projects.",
    points: [
      "Developed and customized WordPress websites for clients.",
      "Customized themes, layouts and site functionality to fit requirements.",
      "Maintained websites and resolved client-facing issues.",
      "Worked with international clients on Fiverr projects.",
      "Worked on 1,000+ web solution projects including customization.",
    ],
    tech: ["WordPress", "Theme customization", "Client support", "Fiverr"],
  },
];

export const featuredProjects = [
  {
    id: "guides-to-morocco",
    number: "01",
    name: "Guides to Morocco",
    category: "Travel platform",
    role: "Frontend Developer",
    description:
      "A platform connecting travelers with certified local guides across Morocco. I worked on the Next.js frontend, responsive content pages and API-driven experiences.",
    highlights: ["Next.js frontend", "API integration", "Blog & dynamic content", "Deployment"],
    tech: ["Next.js", "React", "Tailwind CSS", "REST API"],
    live: "https://www.guidestomorocco.com/",
    repo: null,
    clientWork: true,
    cover: {
      wordmark: "Guides",
      subline: "to Morocco",
      tagline: "Certified local guides across the Kingdom",
      icon: FiMapPin,
      accent: "#FBBF24",
      background:
        "radial-gradient(120% 120% at 15% 10%, rgba(251,191,36,0.38), transparent 55%), radial-gradient(90% 90% at 90% 90%, rgba(249,115,22,0.28), transparent 60%), linear-gradient(135deg, #1a1207 0%, #2c1a0c 55%, #0b0f18 100%)",
    },
  },
  {
    id: "3pro-salons",
    number: "02",
    name: "3Pro Salons",
    category: "Salon management",
    role: "Frontend & dashboard development",
    description:
      "A salon management application covering bookings, services and team workflows. I contributed to the dashboard and frontend interfaces, including staff and team management screens, backed by API integration.",
    highlights: ["Dashboard & frontend", "API integration", "Staff management interfaces", "Responsive UI"],
    tech: ["React", "Next.js", "Tailwind CSS", "REST API"],
    live: "https://3prosalons.com/",
    repo: null,
    clientWork: true,
    cover: {
      wordmark: "3Pro",
      subline: "Salons",
      tagline: "Beautifully managed salon experiences",
      icon: FiScissors,
      accent: "#FB7185",
      background:
        "radial-gradient(120% 120% at 85% 10%, rgba(244,114,182,0.36), transparent 55%), radial-gradient(90% 90% at 10% 90%, rgba(139,92,246,0.3), transparent 60%), linear-gradient(135deg, #1b0a16 0%, #2a1027 55%, #0b0f18 100%)",
    },
  },
  {
    id: "mytaxbreaker",
    number: "03",
    name: "MyTaxBreaker",
    category: "Tax & invoicing",
    role: "Frontend Developer",
    description:
      "A tax-related web application with invoice and dashboard functionality. I contributed to React/Next.js interface development and connected dashboard views to API data.",
    highlights: ["React / Next.js", "Invoice functionality", "Dashboard views", "API integration"],
    tech: ["React", "Next.js", "REST API", "Tailwind CSS"],
    live: null,
    repo: null,
    clientWork: true,
    cover: {
      wordmark: "MyTax",
      subline: "Breaker",
      tagline: "Clear dashboards for complex tax work",
      icon: FiTrendingUp,
      accent: "#A3E635",
      background:
        "radial-gradient(120% 120% at 20% 10%, rgba(163,230,53,0.3), transparent 55%), radial-gradient(90% 90% at 90% 90%, rgba(34,211,238,0.24), transparent 60%), linear-gradient(135deg, #0a1508 0%, #10201a 55%, #0b0f18 100%)",
    },
  },
];

export const archiveProjects = [
  {
    name: "Z Sports Academy",
    description:
      "A MERN academy platform with student, instructor and admin dashboards, class enrollment and payment history.",
    image: sportsImg,
    tech: "React · Node.js · MongoDB",
    live: "https://zamaddar-sports-club.web.app/",
    repo: "https://github.com/alimuzzaman-zamaddar/z-sports-academy",
  },
  {
    name: "The Transformer Toy Store",
    description:
      "A responsive ecommerce experience for discovering and ordering toys, with search and detailed product pages.",
    image: toyImg,
    tech: "React · Express · Tailwind",
    live: "https://the-toy-store-9536d.web.app/",
    repo: "https://github.com/alimuzzaman-zamaddar/the-transformers-store-client",
  },
  {
    name: "The Wok N Roll Recipe",
    description:
      "A recipe web app where visitors can explore menu items, chefs and dish details behind authentication.",
    image: recipeImg,
    tech: "React · Node.js · Firebase",
    live: "https://the-wok-n-roll-recipe.web.app/",
    repo: "https://github.com/alimuzzaman-zamaddar/the-wok-n-roll-client",
  },
  {
    name: "The Royal Zamaluxe",
    description:
      "A luxury hotel website built with Next.js, using animation and editorial sections to present the property.",
    image: hotelImg,
    tech: "Next.js · Animation",
    live: "https://the-zamaluxe-x4j2.vercel.app/",
    repo: "https://github.com/alimuzzaman-zamaddar/the-zamaluxe",
  },
];

export const socials = [
  {
    label: "GitHub",
    href: profile.github,
    icon: SiGithub,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: FiMail,
  },
];

export const aboutHighlights = [
  {
    title: "Frontend engineering",
    description: "React, Next.js and interfaces built to feel effortless.",
    icon: FiCode,
  },
  {
    title: "Full-stack capability",
    description: "Node, Express, PostgreSQL and REST API integration.",
    icon: FiServer,
  },
  {
    title: "CMS background",
    description: "1.6+ years of WordPress development and customization.",
    icon: SiWordpress,
  },
  {
    title: "Client experience",
    description: "Agency work and international Fiverr collaborations.",
    icon: FiUsers,
  },
];

export const contactOptions = [
  "Frontend development",
  "React / Next.js development",
  "Full-stack web application",
  "WordPress development",
  "Website customization",
  "Something else",
];

