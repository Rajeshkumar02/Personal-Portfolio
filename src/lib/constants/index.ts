import {
  Github,
  Linkedin,
  Mail,
  Monitor,
  Server,
  Database,
  Settings,
  Code,
  Smartphone,
  Cloud,
  Shield,
  LucideIcon,
} from "lucide-react";

// Personal Information
export const PERSONAL_INFO = {
  name: "Rajeshkumar S",
  title: "Software Engineer",
  description:
    "Passionate Software Engineer crafting innovative digital solutions with modern technologies.",
  tagline: "Let's build something amazing together.",
  location: "TamilNadu, India",
  email: "dev.rajeshkumar.s@gmail.com",
  phone: "+91 97868 14641",
  avatar: "/avatar.jpg", // Add your avatar image to public folder
};

// Contact Information
export const CONTACT_INFO = {
  email: PERSONAL_INFO.email,
  phone: PERSONAL_INFO.phone,
  location: PERSONAL_INFO.location,
  address: "TamilNadu, Coimbatore, India",
  timezone: "Asia/Kolkata",
};

// Social Media Links
export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    href: "https://github.com/Rajeshkumar02",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rajeshkumar2002",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: `mailto:${CONTACT_INFO.email}`,
    icon: Mail,
  },
];

// Navigation Items
export const NAVIGATION_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

// Quick Links (for footer)
export const QUICK_LINKS = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Skills",
  "Contact",
];

// Skills Data
interface Skill {
  name: string;
  icon: LucideIcon;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  experience: string; // Experience duration like "2+ years", "6 months", etc.
  description: string;
}

export const SKILLS_DATA: Record<string, Skill[]> = {
  "Frontend Development": [
    {
      name: "React.js",
      icon: Monitor,
      level: "Advanced",
      experience: "2+ years",
      description: "Building dynamic user interfaces",
    },
    {
      name: "Next.js",
      icon: Monitor,
      level: "Advanced",
      experience: "1+ years",
      description: "Full-stack React framework",
    },
    {
      name: "TypeScript",
      icon: Code,
      level: "Advanced",
      experience: "2+ years",
      description: "Type-safe JavaScript development",
    },
    {
      name: "Tailwind CSS",
      icon: Monitor,
      level: "Advanced",
      experience: "2+ years",
      description: "Utility-first CSS framework",
    },
    {
      name: "JavaScript",
      icon: Code,
      level: "Expert",
      experience: "3+ years",
      description: "Modern ES6+ features",
    },
    {
      name: "HTML5 & CSS3",
      icon: Monitor,
      level: "Expert",
      experience: "3+ years",
      description: "Semantic markup and styling",
    },
  ],
  "Backend Development": [
    {
      name: "Node.js",
      icon: Server,
      level: "Advanced",
      experience: "2+ years",
      description: "Server-side JavaScript runtime",
    },
    {
      name: "Express.js",
      icon: Server,
      level: "Advanced",
      experience: "2+ years",
      description: "Web application framework",
    },
    {
      name: "Python",
      icon: Code,
      level: "Intermediate",
      experience: "1+ year",
      description: "Backend development and scripting",
    },
    {
      name: "RESTful APIs",
      icon: Server,
      level: "Advanced",
      experience: "2+ years",
      description: "API design and implementation",
    },
  ],
  "Database & Tools": [
    {
      name: "MongoDB",
      icon: Database,
      level: "Advanced",
      experience: "2+ years",
      description: "NoSQL database management",
    },
    {
      name: "PostgreSQL",
      icon: Database,
      level: "Intermediate",
      experience: "1+ year",
      description: "Relational database system",
    },
    {
      name: "Redis",
      icon: Database,
      level: "Intermediate",
      experience: "6 months",
      description: "In-memory data structure store",
    },
    {
      name: "Git & GitHub",
      icon: Settings,
      level: "Advanced",
      experience: "2+ years",
      description: "Version control and collaboration",
    },
    {
      name: "Docker",
      icon: Settings,
      level: "Beginner",
      experience: "4 months",
      description: "Containerization platform",
    },
  ],
  "Mobile & Cloud": [
    {
      name: "React Native",
      icon: Smartphone,
      level: "Intermediate",
      experience: "8 months",
      description: "Cross-platform mobile development",
    },
    {
      name: "AWS",
      icon: Cloud,
      level: "Beginner",
      experience: "4 months",
      description: "Cloud computing services",
    },
    {
      name: "Firebase",
      icon: Cloud,
      level: "Advanced",
      experience: "2+ years",
      description: "Backend-as-a-Service platform",
    },
  ],
};

// Professional Strengths
export const PROFESSIONAL_STRENGTHS = [
  {
    title: "Problem Solving",
    description: "Breaking down complex challenges into manageable solutions",
  },
  {
    title: "Team Collaboration",
    description: "Working effectively in cross-functional development teams",
  },
  {
    title: "Continuous Learning",
    description: "Staying updated with latest technologies and best practices",
  },
  {
    title: "Code Quality",
    description: "Writing clean, maintainable, and well-documented code",
  },
];

// Experience Data
export const EXPERIENCE_DATA = [
  {
    id: 1,
    company: "Span Technology Services pvt. ltd.",
    position: "Software Engineer",
    role: "Software Engineer", // For backwards compatibility
    period: "Jul 2024 - Present",
    duration: "Jul 2024 - Present", // For backwards compatibility
    location: "Coimbatore, India",
    type: "Full-time",
    description:
      "Enhanced expertise in modern technologies including Next.js, Kafka, and Redis while working on tax form–related enterprise projects. Contributed to the development of a live Chrome extension and strengthened skills in error handling and debugging.",
    achievements: [
      "Received the “ShiningStar” award within three months of joining.",
      "Received the “SuperStar” award within eight months for exceptional performance.",
      "Improved error handling processes and debugging efficiency.",
      "Developed and deployed a live Chrome extension used in production.",
    ],
    technologies: [
      "Next.js",
      "Bootstrap",
      "Jest",
      "Kafka",
      "Redis",
      "Plasmo",
      "PostgreSQL",
    ],
    color: "from-blue-500 to-indigo-600",
    accentColor: "blue-500",
  },
  {
    id: 2,
    company: "KPR info Sol.",
    position: "Jr Sotware Engineer",
    role: "Jr Sotware Engineer",
    period: "Jun 2023 - Jul 2024",
    duration: "Jun 2023 - Jul 2024",
    location: "Coimbatore, India",
    type: "Full-time",
    description:
      "Gained hands-on experience with industry-standard development practices while working on multiple projects. Developed and deployed applications for Android TV and iOS TV as a solo developer. Implemented real-time tracking systems in one of the applications and contributed to the successful delivery of several projects.",
    achievements: [
      "Built and deployed Android TV and iOS TV applications independently.",
      "Implemented a real-time tracking system for a client application.",
      "Supported and contributed to multiple ongoing projects.",
      "Strengthened skills in industry-standard web and mobile development practices.",
    ],
    technologies: [
      "JavaScript",
      "Typescript",
      "Node.js",
      "MongoDB",
      "Express.js",
      "React",
      "React Native",
      "Tailwind CSS",
    ],
    color: "from-emerald-500 to-teal-600",
    accentColor: "emerald-500",
  },
  {
    id: 3,
    company: "Ucfer",
    position: "Web Development Intern",
    role: "Web Development Intern",
    period: "May 2021 - Jun 2021",
    duration: "May 2021 - Jun 2021",
    location: "Coimbatore, India",
    type: "Internship",
    description:
      "Gained foundational knowledge of web development concepts, including responsive design, UI implementation, and industry best practices. Successfully completed all assigned tasks on time, demonstrating reliability, adaptability, and a strong willingness to learn.",
    achievements: [
      "Developed responsive landing pages and user interfaces.",
      "Understood core concepts of web development.",
      "Completed all assigned work within deadlines.",
      "Applied learning to real-world tasks and projects.",
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP"],
    color: "from-purple-500 to-pink-600",
    accentColor: "purple-500",
  },
];

// Projects Data
export const PROJECTS_DATA = [
  {
    id: 1,
    title: "OpenHooks",
    description:
      "An NPM package and CLI tool for managing and installing reusable React custom hooks from a centralized GitHub repository. Includes a full documentation site built with Fumadocs.",
    image: "/projects/openhooks.jpg",
    technologies: ["JavaScript", "React", "Node.js", "Fumadocs", "pnpm"],
    liveUrl: "https://openhooks.is-a.dev",
    githubUrl: "https://github.com/Rajeshkumar02/OpenHooks",
    featured: true,
  },
  {
    id: 2,
    title: "Nova Blog",
    description:
      "A personal tech blog web application built with Next.js, MDX, and Shadcn UI. Features a clean, responsive design for publishing and reading technical articles. Deployed on Vercel for fast performance and scalability.",
    image: "/projects/nova-blog.jpg",
    technologies: ["React", "Next.js", "MDX", "Shadcn UI", "Tailwind CSS"],
    liveUrl: "https://nova-blog-tech.vercel.app/",
    githubUrl: "https://github.com/Rajeshkumar02/Nova-Blog",
    featured: true,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio built with Next.js and TypeScript to showcase projects, skills, and experience. Features modern design, smooth Framer Motion animations, and optimized performance.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://rajeshkumar.is-a.dev",
    githubUrl: "https://github.com/Rajeshkumar02/Personal-Portfolio",
    featured: false,
  },
  {
    id: 4,
    title: "Formify-js",
    description:
      "A React form validation library that provides a simple hook for managing form state, error messages, and validation rules. Includes built-in regex patterns for common validation scenarios.",
    image: "/projects/formify-js.jpg",
    technologies: ["JavaScript", "React", "Regex", "NPM"],
    liveUrl: "https://www.npmjs.com/package/formify-js",
    githubUrl: "https://github.com/Rajeshkumar02/formify-js",
    featured: false,
  },
  {
    id: 5,
    title: "Expense Tracker Mobile",
    description:
      "A cross-platform mobile app for tracking personal expenses, built with React Native (Expo) and Firebase. Supports adding, editing, and deleting expenses, categorizing transactions, syncing data in real time, and viewing a visual summary of spending habits.",
    image: "/projects/expense-tracker-mobile.jpg",
    technologies: ["React Native", "Expo", "Firebase", "AsyncStorage"],
    liveUrl: "",
    githubUrl: "https://github.com/Rajeshkumar02/Expense_Tracker_Mobile",
    featured: false,
  },
];

// About Stats
export const ABOUT_STATS = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Education", value: "B.E." },
  { label: "Companies Worked", value: "2" },
];

// Meta Information for SEO
export const META_INFO = {
  title: `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
  description: PERSONAL_INFO.description,
  keywords:
    "software developer, full stack developer, react developer, nodejs developer, javascript, typescript, web development",
  author: PERSONAL_INFO.name,
  siteUrl: "https://rajeshkumar.is-a.dev",
  image: "/og-image.jpg",
};

// Contact Form Validation Messages
export const VALIDATION_MESSAGES = {
  name: {
    required: "Name is required",
    minLength: "Name must be at least 2 characters",
    maxLength: "Name must be less than 50 characters",
  },
  email: {
    required: "Email is required",
    invalid: "Invalid email address",
  },
  subject: {
    required: "Subject is required",
    minLength: "Subject must be at least 5 characters",
    maxLength: "Subject must be less than 100 characters",
  },
  message: {
    required: "Message is required",
    minLength: "Message must be at least 10 characters",
    maxLength: "Message must be less than 1000 characters",
  },
};

// Command Line Animation Data
export const COMMAND_LINES = [
  "> whoami",
  `${PERSONAL_INFO.name} - ${PERSONAL_INFO.title}`,
  "> cat skills.txt",
  "Next.js • React • TypeScript • Node.js • Python",
  "> ls experience/",
  "5+ years of building scalable applications",
  '> echo "Welcome to my portfolio"',
  "Welcome to my portfolio",
  "> _",
];

// Hero Section Content
export const HERO_CONTENT = {
  greeting: "Hi, I'm",
  name: PERSONAL_INFO.name.split(" ")[0], // First name only for hero
  description:
    "Passionate about creating elegant solutions with modern technologies. Building scalable applications and turning ideas into reality.",
  cta: {
    primary: "Get in Touch",
    secondary: "Download CV",
  },
};

// Animation Variants
export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  fadeInRight: {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6 },
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};
