// ============================================================
//  PORTFOLIO DATA — Edit this file to update your portfolio
//  After editing, run: git add . && git commit -m "update" && git push
// ============================================================

import { link } from "framer-motion/client";

export const meta = {
  name: 'Sabin Ghimire',
  role: 'CS & Mathematics Student @ Roskilde University',
  tagline: 'Eager to learn, grow, and contribute',
  location: 'Copenhagen, Denmark 🇩🇰',
  email: 'sabinghimire071@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sabin-ghimire-17491626a',
  github: 'https://github.com/sabin147',
  phone: '+45 31862094',
  address: 'Dalslandsgade 8H, 5, -603',
  availableFor: 'Student roles, internships, and part-time positions.',
  focus: 'Learning and contributing.',
  stack: 'C#, ASP.NET, SQL, Vue.js, React Native, Python, OOP, SOLID Principles',
};

// ─── SKILLS ───────────────────────────────────────────────────
// To add a skill: add a new string to any tags array.
// To add a category: copy a block and change label/color/tags.
export const skills = [
  {
    label: 'Backend',
    color: '#0066FF',
    tags: ['C#', 'ASP.NET Web API', 'REST APIs', 'JWT Auth', 'Node.js'],
  },
  {
    label: 'Database',
    color: '#18181B',
    tags: ['SQL Server', 'SQLite', 'Database Design', 'ER Diagrams', 'MongoDB'],
  },
  {
    label: 'Frontend',
    color: '#71717A',
    tags: ['Vue.js', 'Bootstrap', 'React Native', 'HTML / CSS', 'JavaScript'],
  },
  {
    label: 'Concepts',
    color: '#18181B',
    tags: ['OOP', 'SOLID Principles', 'MQTT', 'Git', 'BFS / Algorithms'],
  },
];

// ─── EXPERIENCE ───────────────────────────────────────────────
// To add a role: copy one block, paste at top (most recent first).
export const experiences = [
  {
    dates: 'Sep 2024 — Present',
    role: 'On-call Waiter',
    company: 'Bella Group',
    type: 'Part-time',
    desc: 'Served guests at large-scale events and conferences with efficiency and professionalism — sharp communication and composure under high-pressure environments.',
    tags: ['Communication', 'Service', 'Teamwork'],
  },
  {
    dates: 'Aug 2023 — Jan 2024',
    role: 'Intern Developer',
    company: 'BeckIT',
    type: 'Internship',
    desc: 'Designed and built a full-stack restaurant management prototype using C#, ASP.NET Web API and SQL Server, with a responsive Vue.js + Bootstrap frontend. The project was selected as the foundation for the final dissertation and extended with four additional features: Login, Subscription, Reservation, and user-specific dashboards.',
    tags: ['C#', '.NET Web API', 'SQL Server', 'Vue.js', 'Bootstrap'],
  },
  {
    dates: '2018 — 2019',
    role: 'Data Entry Clerk',
    company: 'Everest Bank Ltd. / Tax Office',
    type: 'Part-time',
    desc: 'Entered taxpayer records and tax payment details into Excel and bank finance software with meticulous attention to data accuracy at high volume.',
    tags: ['Excel', 'Data Entry', 'Finance Software'],
  },
];

// ─── PROJECTS ─────────────────────────────────────────────────
// To add a project: copy one block, paste anywhere (order is display order).
// Set `featured: true` to make it span full width.
// `link` can be a GitHub URL or '#' if not yet public.
export const projects = [
  {
    number: '01',
    category: 'AI · Mobile · RUC',
    name: 'Smart Waste Sorter',
    desc: 'Cross-platform mobile app that classifies waste from camera images using GPT-4o vision. React Native frontend, Node.js backend, SQLite local storage. Features real-time classification, history tracking, and result pages with comprehensive waste sorting guidance.',
    tags: ['React Native', 'Node.js', 'GPT-4o Vision', 'SQLite', 'TypeScript', 'Full-Stack'],
    link: 'https://github.com/sabin147/SmartWaste',
    featured: false,
    year: '2025',
  },
  {
    number: '02',
    category: 'IoT · Transit · Hardware · RUC',
    name: 'Rejseplanen Trip Visualizer',
    desc: 'Physical prototype that renders real-time Danish transit progress on an LED strip. ESP32 communicates via MQTT; data fetched from the Rejseplanen API and visualized with p5.js. Demonstrates hardware-software integration and real-time data processing.',
    tags: ['ESP32', 'MQTT', 'p5.js', 'REST API', 'IoT', 'Hardware'],
    link: 'https://github.com/sabin147/rejseplanen-trip-tracker',
    featured: false,
    year: '2023',
  },
  {
    number: '03',
    category: 'Game Development · React · Vite',
    name: 'Nepali Imposter - Vibe Coded',
    desc: '🎭 A fun social deduction word game (like Mafia/Werewolf) where players describe Nepali words while one random Imposter bluffs without knowing the word. Built with React + Vite + Tailwind CSS, featuring category-based gameplay, real-time voting, beautiful Nepali UI, and engaging game mechanics.',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Game Logic', 'Nepali Language', 'Real-time'],
    link: 'https://imposter-nepali-game.vercel.app',
    github: 'https://github.com/sabin147/Nepali-Imposter-Game',
    featured: false,
    year: '2026',
  },
  {
    number: '04',
    category: 'Math · Research · Ongoing · RUC 2026',
    name: 'Learning in Adaptive Oscillator Networks',
    desc: 'Implementing OCR via synchronization in Kuramoto-type phase oscillator networks — a biologically inspired alternative to backpropagation. Models neuronal learning through coupled oscillator dynamics, Hebbian weight rules, and phase-locking. Bridges nonlinear dynamics, statistical physics, and machine learning.',
    tags: ['Python', 'Kuramoto Model', 'Nonlinear Dynamics', 'Neural Networks', 'Applied Math', 'Research'],
    link: 'https://github.com/sabin147/adaptive-oscillator-ocr',
    featured: false,
    year: '2026',
  },
  {
    number: '05',
    category: 'Statistical Analysis · Academic · RUC 2025',
    name: 'Exam Time vs Score — Statistical Analysis',
    desc: 'Collaborative research project investigating the relationship between exam duration and performance across 134 student observations. Conducted comprehensive statistical analysis using descriptive statistics, normality testing (Q-Q plots, histograms), confidence intervals, linear regression, and correlation analysis (Pearson & Spearman).',
    tags: ['Python', 'Jupyter', 'Statistics', 'Linear Regression', 'pandas', 'scipy', 'Data Analysis'],
    link: 'https://github.com/sabin147/exam-score-analysis',
    featured: false,
    year: '2025',
  },
  {
    number: '06',
    category: 'Physics Simulation · Academic · RUC 2025',
    name: 'Mass-Spring Oscillator — Simulation & Experiment',
    desc: 'Two-part academic project combining numerical simulation of oscillatory motion with real LC circuit experiments. Implemented Leap-Frog integration to simulate mass-spring dynamics and empirically derived T = 2π√(m/k). Measured resonance frequencies in LC circuits using oscilloscope (8.77 kHz and 12.94 kHz).',
    tags: ['Python', 'Jupyter', 'Numerical Methods', 'Physics', 'Leap-Frog Integration', 'LC Circuit'],
    link: 'https://github.com/sabin147/mass-spring-oscillator',
    featured: false,
    year: '2025',
  },
  {
    number: '07',
    category: 'Statistical Analysis · Academic · RUC 2025',
    name: 'COVID Treatment & Age — Statistical Modelling',
    desc: 'Analysis of survival outcomes of COVID patients treated with hydroxychloroquine vs. standard treatment across age groups. Applied logistic regression, chi-square tests, and Simpson\'s Paradox analysis using Python to investigate treatment efficacy and age-related factors.',
    tags: ['Python', 'Statistics', 'Logistic Regression', 'pandas', 'Data Analysis', 'Medical Research'],
    link: 'https://github.com/sabin147/covid-statistical-analysis',
    featured: false,
    year: '2025',
  },
  {
    number: '08',
    category: 'Web Design · Portfolio · Vibe Coded',
    name: 'Personal Portfolio Website',
    desc: '✨ A beautifully designed portfolio site showcasing my projects, skills, and journey. Built with React + Vite + Framer Motion for smooth animations and transitions. Fully responsive design with modern UI/UX principles.',
    tags: ['React', 'Vite', 'Framer Motion', 'Tailwind CSS', 'Web Design'],
    link: 'https://sabinghimire.dev',
    github: 'https://github.com/sabin147/portfolio',
    featured: false,
    year: '2026',
  },
  {
    number: '09',
    category: 'Academic Report · Research · RUC 2025',
    name: 'Is Technological Singularity Happening?',
    desc: 'Group research report analyzing the feasibility of the Technological Singularity. Examines proponents (Kurzweil, Vinge, Good) against critics (Modis, Cochrane) through exponential vs. logistic growth models, complexity theory, and science studies methodology.',
    tags: ['Research', 'AI Theory', 'Complexity Theory', 'Critical Analysis', 'Academic Writing'],
    link: 'https://github.com/sabin147/singularity-report',
    featured: false,
    year: '2025',
  },
  {
    number: '10',
    category: 'Educational · Design Patterns · C#',
    name: 'BangBang - Design Patterns Library',
    desc: 'Educational C# project demonstrating core software design patterns including Factories, State Pattern, and Decorators. Comprehensive implementation of Gang of Four design patterns with detailed documentation and code examples.',
    tags: ['C#', 'Design Patterns', 'OOP', 'Educational', 'Gang of Four'],
    link: 'https://github.com/sabin147/BangBang',
    featured: false,
    year: '2023',
  },
  {
    number: '11',
    category: 'Algorithms · Theory · NP-Hard',
    name: 'Mathematical Analysis and Development of an Algorithm for the Pre-Marshalling Problem',
    desc: 'Interactive visualization of the Pre-Marshalling Problem (NP-hard). Implements a BFS-based solver with complexity analysis and step-through mode. Demonstrates algorithmic thinking and computational complexity theory.',
    tags: ['BFS', 'NP-hard', 'Complexity Theory', 'Algorithms', 'Visualization'],
    link: 'https://github.com/Jiaxu-ruc/Pre-Marshalling',
    featured: false,
    year: '2022',
  },
  {
    number: '11',
    category: 'Full-Stack · Dissertation Project · BeckIT',
    name: 'Pizzeria Management System',
    desc: 'Full-stack restaurant prototype featuring role-based auth, ordering, subscription, and reservation systems. Built with C# and ASP.NET Web API backend, Vue.js + Bootstrap frontend. Selected as the foundation for my final dissertation.',
    tags: ['C#', 'ASP.NET', 'SQL Server', 'JWT', 'Vue.js'],
     links: [
      { label: 'Frontend', url: 'https://github.com/sabin147/Pizzeria' },
      { label: 'Backend', url: 'https://github.com/sabin147/Noodles' }
    ],
    featured: false,
    year: '2023',
  },
  

  // ── ADD YOUR NEXT PROJECT HERE ──────────────────────────────
  // {
  //   number: '05',
  //   category: 'Web · Vibe Coded',
  //   name: 'My New Project',
  //   desc: 'Brief description of what it does and the problem it solves.',
  //   tags: ['React', 'Node.js'],
  //   link: 'https://github.com/yourname/project',
  //   featured: false,
  //   year: '2025',
  // },
];

// ─── EDUCATION ────────────────────────────────────────────────
export const education = [
  {
    degree: 'International Bachelor in Natural Science',
    field: 'Mathematics + Computer Science',
    school: 'Roskilde University',
    link: 'https://ruc.dk/en',
    dates: 'Sep 2024 — 2027',
    current: true,
  },
  {
    degree: 'AP Degree in Computer Science',
    field: 'Computer Science',
    school: 'Zealand Academy of Technologies and Business',
    link: 'https://zealand.com/',
    dates: 'Sep 2021 — Jan 2024',
    current: false,
  },
];

// ─── LANGUAGES ───────────────────────────────────────────────
export const languages = [
  { lang: 'English', level: 'Fluent' },
  { lang: 'Nepali', level: 'Native' },
  { lang: 'Hindi', level: 'Fluent' },
  { lang: 'Danish', level: 'Learning' },
];
