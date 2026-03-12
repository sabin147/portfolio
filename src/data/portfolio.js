// ============================================================
//  PORTFOLIO DATA — Edit this file to update your portfolio
//  After editing, run: git add . && git commit -m "update" && git push
// ============================================================

export const meta = {
  name: 'Sabin Ghimire',
  role: 'CS & Mathematics Student @ Roskilde University',
  tagline: 'Eager to learn, grow, and contribute',
  location: 'Copenhagen, Denmark 🇩🇰',
  email: 'sabinghimire071@gmail.com',
  linkedin: 'https://www.linkedin.com/in/sabin-ghimire-17491626a',
  github: 'https://github.com',
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
    dates: 'Sep 2021 — Jan 2024',
    role: 'Intern Developer',
    company: 'BeckIT',
    type: 'Internship',
    desc: 'Designed and built a full-stack restaurant management prototype using C#, ASP.NET Web API and SQL Server, with a responsive Vue.js + Bootstrap frontend. The project was selected as the foundation for the final dissertation and extended with four additional features: Login, Subscription, Reservation, and user-specific dashboards.',
    tags: ['C#', '.NET Web API', 'SQL Server', 'Vue.js', 'Bootstrap'],
  },
  {
    dates: 'Aug 2023 — Jan 2024',
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
    category: 'Full-Stack · Dissertation',
    name: 'Pizzeria Management System',
    desc: 'Full-stack restaurant prototype featuring role-based auth, ordering, subscription, and reservation systems. Built with C# and ASP.NET Web API backend, Vue.js + Bootstrap frontend. Selected as the foundation for my final dissertation.',
    tags: ['C#', 'ASP.NET', 'SQL Server', 'JWT', 'Vue.js'],
    link: '#',
    featured: true,
    year: '2024',
  },
  {
    number: '02',
    category: 'IoT · Transit',
    name: 'Rejseplanen Trip Visualizer',
    desc: 'Physical prototype that renders real-time Danish transit progress on an LED strip. ESP32 communicates via MQTT; data fetched from the Rejseplanen API and visualized with p5.js.',
    tags: ['ESP32', 'p5.js', 'MQTT', 'REST API'],
    link: '#',
    featured: false,
    year: '2023',
  },
  {
    number: '03',
    category: 'AI · Mobile',
    name: 'Smart Waste Sorter',
    desc: 'Cross-platform mobile app that classifies waste from camera images using GPT-4o vision. React Native frontend, Node.js backend, SQLite local storage.',
    tags: ['React Native', 'Node.js', 'GPT-4o', 'SQLite'],
    link: '#',
    featured: false,
    year: '2023',
  },
  {
    number: '04',
    category: 'Algorithms · Theory',
    name: 'Pre-Marshalling Visualizer',
    desc: 'Interactive visualization of the Pre-Marshalling Problem (NP-hard). Implements a BFS-based solver with complexity analysis and step-through mode.',
    tags: ['BFS', 'NP-hard', 'Complexity Theory', 'Visualization'],
    link: '#',
    featured: false,
    year: '2022',
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
    dates: 'Sep 2024 — 2027',
    current: true,
  },
  {
    degree: 'AP Degree in Computer Science',
    field: 'Computer Science',
    school: 'Zealand Academy of Technologies and Business',
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
