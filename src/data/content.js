export const site = {
  name: 'Ayush Neupane',
  email: 'ayushneupane2022@gmail.com',
  siteUrl: 'https://ayush-neupane.com.np',
  githubUrl: 'https://github.com/ayushneupane312',
  githubHandle: 'ayushneupane312',
  linkedinUrl: 'https://www.linkedin.com/in/neupaneayush/',
  linkedinHandle: 'neupaneayush',
  profileImage: '/ayush-profile.png',
  tags: ['DevOps Engineer', 'Full Stack Developer'],
  headline: 'Automating Infrastructure, Delivering Excellence',
  tagline:
    'I bridge the gap between development and operations with scalable architecture, automated pipelines, and a strong Computer Science foundation.',
  humanLine:
    'Behind every pipeline is a person who wants their team to sleep through the night.',
};

export const about = {
  highlights: [
    {
      title: 'DevOps Mindset',
      text: 'Infrastructure as Code and automation-driven thinking — systems that are resilient, scalable, and self-healing.',
    },
    {
      title: 'Problem Solver',
      text: 'An engineering mindset that breaks complex problems into manageable, efficient solutions.',
    },
    {
      title: 'CS Foundations',
      text: 'Algorithms, data structures, and system design — optimized, maintainable code at the core.',
    },
  ],
  paragraphs: [
    "Hello! I'm Ayush, a DevOps Engineer and Full Stack Developer with a passion for building robust infrastructure and scalable web applications. My journey started with a curiosity about how software is delivered to users, which led me deep into CI/CD, containerization, and cloud computing.",
    'I recently completed my Bachelor of Computer Science (Hons), honing skills in software engineering and system architecture. My flagship project, PlayPal (Futsal Management System), demonstrates full-stack delivery with rigorous engineering standards.',
    "I'm focused on Kubernetes and advanced cloud-native patterns to deliver production-grade infrastructure.",
  ],
};

export const projects = [
  {
    id: 1,
    title: 'PlayPal — Futsal Management System',
    category: 'Full Stack',
    featured: true,
    description:
      'Booking and tournament management for futsal venues — role-based access, real-time availability, automated brackets.',
    tech: ['React', 'Node.js', 'MySQL', 'Express', 'Tailwind CSS'],
    links: {
      github: 'https://github.com/ayushneupane312/PlayPal_FYP',
      demo: 'https://playpal-web.onrender.com',
    },
  },
  {
    id: 2,
    title: 'Dockerized MERN Application',
    category: 'DevOps',
    description:
      'Production MERN stack with multi-stage Docker builds and Nginx reverse proxy.',
    tech: ['Docker', 'Compose', 'Nginx', 'MongoDB', 'React'],
    links: {
      github: 'https://github.com/ayushneupane312/PlayPal_FYP',
      demo: 'https://playpal-web.onrender.com',
    },
  },
  {
    id: 3,
    title: 'Portfolio CI/CD Pipeline',
    category: 'CI/CD',
    description:
      'GitHub Actions pipeline — lint, build, deploy to GitHub Pages with custom domain.',
    tech: ['GitHub Actions', 'Vite', 'Docker', 'Nginx'],
    links: {
      github: 'https://github.com/ayushneupane312/Website',
      demo: 'https://ayush-neupane.com.np',
    },
  },
  {
    id: 4,
    title: 'AI/ML Academic Research',
    category: 'Data Science',
    description: 'ML algorithms for analysis and pattern recognition with Python.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    links: { github: 'https://github.com/ayushneupane312/AI-ML', demo: null },
  },
  {
    id: 5,
    title: 'DevOps Practical Labs',
    category: 'Automation',
    description: 'Linux administration, scripting, and infrastructure automation exercises.',
    tech: ['Bash', 'Linux', 'Docker', 'Shell'],
    links: {
      github: 'https://github.com/ayushneupane312/DEVOPS_PRATICAL',
      demo: null,
    },
  },
];

export const experience = [
  {
    id: 1,
    role: 'DevOps & Infrastructure Projects',
    company: 'Personal & Academic',
    period: '2024 – Present',
    description:
      'Docker, CI/CD, Linux automation, and cloud-ready deployments.',
    achievements: [
      'Containerized apps with Docker and Docker Compose',
      'GitHub Actions pipelines for build, lint, and deploy',
      'Linux administration and shell automation',
      'Deployed full-stack apps to Render',
    ],
  },
  {
    id: 2,
    role: 'Full Stack Developer (Freelance)',
    company: 'Self-Employed',
    period: '2023 – 2024',
    description: 'Custom web solutions using the MERN stack.',
    achievements: [
      'Delivered production websites for clients',
      'Built PlayPal — futsal booking platform (FYP)',
      'Secure authentication and role-based access',
      'Optimized database queries and API performance',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Computer Science (Hons)',
  institution: 'Nepal',
  period: '2021 – 2025',
  description: 'Software engineering, systems architecture, and cloud computing.',
};

export const devOpsSkills = [
  { name: 'Docker', level: 90 },
  { name: 'GitHub Actions', level: 85 },
  { name: 'Linux', level: 85 },
  { name: 'Kubernetes', level: 70 },
  { name: 'Python', level: 90 },
  { name: 'Nginx', level: 80 },
  { name: 'Terraform', level: 60 },
  { name: 'AWS', level: 60 },
];

export const techStack = [
  'React',
  'Node.js',
  'Express',
  'MySQL',
  'MongoDB',
  'PostgreSQL',
  'Python',
  'JavaScript',
  'Bash',
  'Git',
];

export const navLinks = [
  { label: 'Signal', href: '#signal' },
  { label: 'Systems', href: '#systems' },
  { label: 'Proof', href: '#proof' },
  { label: 'Connect', href: '#connect' },
];
