import { Profile, Skill, Project, EducationItem, Certification } from '../types/portfolio';

export const defaultProfile: Profile = {
  name: '[Your Name]',
  role: 'Aspiring Web Developer & Digital Creator',
  headline: "Hi, I'm [Your Name] — Aspiring Web Developer & Digital Creator.",
  shortBio: "Passionate about crafting clean, modern, and user-friendly web experiences. Dedicated to writing well-structured code, mastering contemporary frontend frameworks, and turning creative concepts into responsive digital solutions.",
  fullAbout: [
    "I am an aspiring web developer driven by a curiosity for how digital products are built and optimized. My journey into tech started with curiosity about web design and quickly grew into a dedicated discipline of writing clean HTML, expressive CSS, and dynamic JavaScript.",
    "I focus on building intuitive, accessible, and high-performance websites that look great across every screen size. Whether translating complex design mockups into pixel-perfect interfaces or solving logic puzzles in code, I take pride in attention to detail and continuous improvement.",
    "Currently expanding my expertise in modern web technologies, component-based architectures, and UI/UX design principles. I am actively seeking opportunities to contribute to dynamic teams, collaborate on impactful projects, and grow as a software engineer."
  ],
  email: 'sthasoubhagya@gmail.com',
  location: 'Available Globally / Remote',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
  twitterUrl: 'https://x.com',
  avatarUrl: '/assets/aistudio/63a29ef8-18bb-4763-8041-ec1d93fbd118_4bd0ec54.png',
  availability: 'Open to Junior & Entry-Level Roles, Internships & Freelance',
  yearsExperience: '1+ Years',
  completedProjects: '12+',
  satisfiedRate: '100%',
};

export const defaultSkills: Skill[] = [
  {
    id: 'html-css',
    name: 'HTML & CSS',
    category: 'frontend',
    level: 95,
    proficiency: 'Advanced',
    icon: 'Code2',
    description: 'Semantic HTML5 structure, modern CSS3 layout engines (Flexbox, Grid), CSS custom properties, and Tailwind CSS styling.',
    tags: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Tailwind CSS', 'Semantic Markup']
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    level: 88,
    proficiency: 'Proficient',
    icon: 'FileCode',
    description: 'Modern ECMAScript (ES6+), DOM manipulation, event handling, asynchronous programming (Promises, Async/Await), and REST API integration.',
    tags: ['ES6+', 'DOM API', 'Async/Await', 'Fetch API', 'JSON', 'Modular JS']
  },
  {
    id: 'responsive-design',
    name: 'Responsive Web Design',
    category: 'responsive',
    level: 94,
    proficiency: 'Advanced',
    icon: 'Smartphone',
    description: 'Mobile-first design methodology, fluid typography, flexible breakpoints, vector graphics, and cross-browser consistency.',
    tags: ['Mobile-First', 'Media Queries', 'Cross-Browser', 'Fluid Layouts', 'Touch UX']
  },
  {
    id: 'website-builders',
    name: 'Website Builders',
    category: 'tools',
    level: 85,
    proficiency: 'Proficient',
    icon: 'Layers',
    description: 'Building, customizing, and deploying websites with popular platforms including WordPress, Webflow, Framer, and Wix.',
    tags: ['WordPress', 'Webflow', 'Framer', 'Wix', 'CMS Management', 'Custom Themes']
  },
  {
    id: 'computer-applications',
    name: 'Basic Computer Applications',
    category: 'tools',
    level: 92,
    proficiency: 'Advanced',
    icon: 'Terminal',
    description: 'Git version control, GitHub workflows, VS Code configuration, Terminal / CLI commands, Chrome DevTools, and office productivity suites.',
    tags: ['Git & GitHub', 'VS Code', 'Command Line / Bash', 'DevTools', 'MS Office', 'Google Workspace']
  },
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design',
    category: 'design',
    level: 82,
    proficiency: 'Skilled',
    icon: 'Palette',
    description: 'User-centered interface design, wireframing, high-fidelity prototypes in Figma, typography hierarchy, color psychology, and accessibility.',
    tags: ['Figma', 'Wireframing', 'Color Theory', 'Visual Hierarchy', 'User Research', 'Design Systems']
  },
  {
    id: 'react-ecosystem',
    name: 'React & Frontend Ecosystem',
    category: 'frontend',
    level: 80,
    proficiency: 'Skilled',
    icon: 'Atom',
    description: 'Component-driven development, React hooks, state management, SPA routing, and integrating interactive user experiences.',
    tags: ['React', 'React Hooks', 'Vite', 'Component Lifecycle', 'State Management']
  }
];

export const defaultProjects: Project[] = [
  {
    id: 'project-nexusflow',
    title: 'NexusFlow Task & Project Hub',
    category: 'web',
    categoryLabel: 'Web Application',
    shortDescription: 'A sleek productivity and workflow management dashboard with drag-and-drop task sorting, status filters, and persistent local storage.',
    fullDescription: 'NexusFlow is a full-featured task and workflow management dashboard created to solve organization challenges for remote teams and solo creators. Built with modern JavaScript and component architecture, it allows users to categorize projects, set priority tags, search items dynamically, and view analytical completion metrics.',
    technologies: ['JavaScript ES6+', 'HTML5', 'Tailwind CSS', 'LocalStorage API', 'Chart.js'],
    keyFeatures: [
      'Interactive Kanban board with drag-and-drop status stages',
      'Instant search and multi-criteria tag filtering',
      'Visual completion metrics and progress analytics',
      'Zero latency client-side persistence using LocalStorage',
      'Responsive design adapting flawlessly between smartphone and 4K displays'
    ],
    liveUrl: 'https://example.com/nexusflow',
    githubUrl: 'https://github.com/example/nexusflow',
    gradient: 'from-purple-600/30 via-indigo-600/20 to-slate-900',
    accentColor: 'purple',
    mockupType: 'dashboard',
    featured: true
  },
  {
    id: 'project-aurastore',
    title: 'Aura Minimalist E-Commerce Storefront',
    category: 'responsive',
    categoryLabel: 'Responsive Storefront',
    shortDescription: 'A high-performance modern e-commerce storefront with interactive cart drawer, product filter engine, and responsive checkout UI.',
    fullDescription: 'Aura is a digital storefront designed with modern minimalism and smooth shopper ergonomics. Features dynamic catalog filtering by category and price range, an animated shopping bag sliding panel, product image galleries, and a frictionless checkout mockup.',
    technologies: ['JavaScript', 'HTML5 & CSS Grid', 'Tailwind CSS', 'Responsive UI', 'Figma'],
    keyFeatures: [
      'Smooth fly-out slide cart drawer with instant quantity counters',
      'Dynamic product filtering by category, price, and customer rating',
      'Optimized responsive layouts with custom SVG icons and fluid typography',
      'Accessible keyboard navigation and clean WCAG contrast compliant colors'
    ],
    liveUrl: 'https://example.com/aurastore',
    githubUrl: 'https://github.com/example/aurastore',
    gradient: 'from-blue-600/30 via-cyan-600/20 to-slate-900',
    accentColor: 'blue',
    mockupType: 'browser',
    featured: true
  },
  {
    id: 'project-pulseweather',
    title: 'PulseWeather Dynamic Forecast App',
    category: 'web',
    categoryLabel: 'Web Application',
    shortDescription: 'Real-time weather forecast application with geolocation lookup, 5-day predictive cards, and animated weather condition cards.',
    fullDescription: 'PulseWeather delivers real-time meteorological conditions for cities worldwide. Leveraging modern asynchronous JavaScript and REST APIs, it provides instant temperature conversion, UV index, humidity levels, hourly trends, and animated visual backdrops responding to sunny, rainy, or snowy conditions.',
    technologies: ['JavaScript', 'REST API', 'Asynchronous JS', 'CSS Animations', 'Geolocation API'],
    keyFeatures: [
      'Browser Geolocation auto-detection with custom city search',
      'Dynamic background themes shifting with local weather states',
      'Interactive Celsius to Fahrenheit temperature toggle',
      '5-day meteorological outlook with responsive forecast cards'
    ],
    liveUrl: 'https://example.com/pulseweather',
    githubUrl: 'https://github.com/example/pulseweather',
    gradient: 'from-cyan-600/30 via-teal-600/20 to-slate-900',
    accentColor: 'cyan',
    mockupType: 'mobile',
    featured: true
  },
  {
    id: 'project-zenithagency',
    title: 'Zenith Studio Creative Agency Website',
    category: 'responsive',
    categoryLabel: 'Responsive Website',
    shortDescription: 'A boutique digital agency landing page featuring smooth scroll triggers, interactive service accordions, and high-impact hero typography.',
    fullDescription: 'Created as a flagship demonstration of modern web craftsmanship, Zenith Studio blends bold typography, dark aesthetics, and subtle micro-interactions. The site features client testimonials, service offerings with hover previews, and an interactive pricing table.',
    technologies: ['HTML5', 'Modern CSS3', 'JavaScript', 'Responsive Design', 'Webflow Concept'],
    keyFeatures: [
      'Sticky navigation with dynamic backdrop blur on scroll',
      'Interactive service showcase cards with animated highlight effects',
      'Mobile-first responsive drawer navigation with fluid animations',
      'Lightweight bundle footprint for lightning fast page loads'
    ],
    liveUrl: 'https://example.com/zenithagency',
    githubUrl: 'https://github.com/example/zenithagency',
    gradient: 'from-violet-600/30 via-purple-600/20 to-slate-900',
    accentColor: 'violet',
    mockupType: 'browser',
    featured: false
  },
  {
    id: 'project-devsnippet',
    title: 'DevSnippet Code & Syntax Highlighter',
    category: 'web',
    categoryLabel: 'Web Tool',
    shortDescription: 'A developer utility for organizing, formatting, and copying reusable code snippets with multi-language syntax formatting.',
    fullDescription: 'DevSnippet helps programmers collect their most frequently used boilerplate code, regex formulas, and algorithms. Includes one-click copy to clipboard with toast notifications, language categorization, and tag searching.',
    technologies: ['JavaScript', 'HTML5', 'CSS Custom Properties', 'Clipboard API', 'VS Code Theme'],
    keyFeatures: [
      'Support for JavaScript, HTML, CSS, Python, and SQL snippets',
      'One-click clipboard copying with visual confirmation feedback',
      'Tag-based filtering and instant search indexing',
      'Dark editor UI inspired by modern developer environments'
    ],
    liveUrl: 'https://example.com/devsnippet',
    githubUrl: 'https://github.com/example/devsnippet',
    gradient: 'from-emerald-600/30 via-teal-600/20 to-slate-900',
    accentColor: 'emerald',
    mockupType: 'code',
    featured: false
  },
  {
    id: 'project-foodiehub',
    title: 'FoodieHub Recipe Discovery & Meal Planner',
    category: 'design',
    categoryLabel: 'UI/UX & Web Prototype',
    shortDescription: 'An intuitive culinary discovery web platform with interactive ingredient checklists, step-by-step guides, and responsive card layouts.',
    fullDescription: 'FoodieHub combines clean UI/UX research with responsive frontend execution. Designed first in Figma with wireframes and user flow mapping, then coded into a responsive web application featuring nutritional breakdowns and ingredient serving scalers.',
    technologies: ['Figma', 'UI/UX Wireframing', 'HTML5', 'CSS Grid', 'JavaScript'],
    keyFeatures: [
      'Comprehensive Figma design system with reusable UI component library',
      'Interactive serving multiplier that dynamically recalculates ingredient quantities',
      'Step-by-step interactive cooking mode with checklist checkboxes',
      'Tested across phone, tablet, and desktop viewports'
    ],
    liveUrl: 'https://example.com/foodiehub',
    githubUrl: 'https://github.com/example/foodiehub',
    gradient: 'from-amber-600/30 via-orange-600/20 to-slate-900',
    accentColor: 'amber',
    mockupType: 'browser',
    featured: false
  }
];

export const defaultEducation: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Science in Computer Science / Information Technology',
    institution: '[Your University / College Name]',
    period: '2021 — 2025 (or Expected)',
    location: '[City, Country]',
    gradeOrHonor: 'First Division / Honors',
    description: 'Comprehensive study of computer systems, data structures, algorithms, object-oriented programming, database management, and software engineering principles.',
    keyLearnings: [
      'Data Structures & Algorithm Design',
      'Web Application Architecture & Databases',
      'Software Testing & Agile Methodologies',
      'Computer Networks & Operating Systems'
    ]
  },
  {
    id: 'edu-2',
    degree: 'Full-Stack & Modern Web Development Immersion',
    institution: 'Professional Developer Bootcamp & Accredited Online Curriculum',
    period: '2023 — 2024',
    location: 'Online / Remote',
    gradeOrHonor: 'Completed with Capstone Distinction',
    description: 'Hands-on intensive program focused on frontend engineering, modern JavaScript standards, responsive layout systems, Git team collaboration, and deploying production web applications.',
    keyLearnings: [
      'Semantic HTML5, CSS3, Flexbox & CSS Grid Mastery',
      'JavaScript ES6+, Asynchronous Programming & REST APIs',
      'Modern Component-Driven Development with React & Tailwind',
      'Version Control, Pull Requests & Continuous Deployment'
    ]
  },
  {
    id: 'edu-3',
    degree: 'Higher Secondary Education in Science / Computer Studies',
    institution: '[Your Higher Secondary School / Academy]',
    period: '2019 — 2021',
    location: '[City, Country]',
    description: 'Focused curriculum in Mathematics, Physics, and Foundational Computer Applications with practical programming assignments in C and fundamentals of computing.',
    keyLearnings: [
      'Mathematical Foundations & Discrete Logic',
      'Introductory Programming Logic & Problem Solving',
      'Computer Hardware & System Software Basics'
    ]
  }
];

export const defaultCertifications: Certification[] = [
  {
    id: 'cert-1',
    title: 'Responsive Web Design Certification',
    issuer: 'freeCodeCamp Developer Curriculum',
    issueDate: '2023',
    skills: ['HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Responsive Typography', 'Web Accessibility (a11y)'],
    credentialId: 'FCC-RWD-2023-VERIFIED'
  },
  {
    id: 'cert-2',
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp Developer Curriculum',
    issueDate: '2024',
    skills: ['ES6 Syntax', 'Array & Object Methods', 'Regular Expressions', 'Algorithm Scripting', 'Object Oriented Programming'],
    credentialId: 'FCC-JS-2024-VERIFIED'
  },
  {
    id: 'cert-3',
    title: 'Modern Frontend Development & UI Design Foundations',
    issuer: 'Meta / Coursera Professional Certificate',
    issueDate: '2024',
    skills: ['UI/UX Principles', 'Figma Prototyping', 'Component Architecture', 'User Journey Mapping'],
    credentialId: 'META-FRONTEND-2024'
  }
];
