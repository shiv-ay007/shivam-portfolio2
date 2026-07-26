export const personalData = {
  name: "Shivam Yadav",
  title: "Full Stack MERN Developer & Tech Specialist",
  subtitles: [
    "MERN  Stack Specialist",
    "Python Developer",
    "Full Stack Engineer @ DigiCoders",
    "UI/UX & AI Application Developer"
  ],
  company: "DigiCoders Technologies Pvt. Ltd.",
  location: "Prayagraj / Lucknow, Uttar Pradesh",
  email: "Shivam.yadav.cse01@gmail.com",
  phone: "+91 7266079663",
  bio: "Passionate Full Stack Developer with over 2+ years of hands-on experience crafting scalable, high-performance web applications. Having successfully delivered 30+ frontend and 15+ full-stack projects for clients, I excel in transforming complex requirements into smooth, intuitive, and robust digital products.",
  socials: {
    linkedin: "https://www.linkedin.com/in/shivam-yadav-cse01",
    github: "https://github.com/shiv-ay007",
    instagram: "https://www.instagram.com/shivamm_yadav007?igsh=bnhlN3RlOG5qNWw4",
    whatsapp: "https://wa.me/qr/GVMNC5RZGQAQH1"
  },
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Frontend Projects", value: "15+" },
    { label: "Full Stack Apps", value: "10+" },
    { label: "Client Satisfaction", value: "100%" }
  ],
  awards: [
    {
      title: "Secured School Top Rank in Class X (2021)",
      issuer: "🏆 Achieved School Top Rank in Class X (2021) at B.P.O.I.C. Inter College, Prayagraj.",
      detail: "Secured the 1st Rank in Class X at B.P.O.I.C. Inter College, Prayagraj by demonstrating consistent academic excellence and outstanding performance across all subjects."
    },
    {
      title: " Received Prize from HCL Technologies for outstanding performance in a technical event",
      issuer: "HCL TECH LUCKNOW",
      detail: "Awarded by HCL Technologies for outstanding performance in a technical event, recognizing technical skills, innovation, and exceptional performance."
    }
  ]
};

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "DigiCoders Technologies Pvt. Ltd., Lucknow",
    period: "2026 - Present",
    type: "Full-Time-Intership",
    description: "Developing robust full-stack enterprise applications using MERN stack, Node.js, Express, React, and MongoDB. Completed over 30+ frontend and 15+ full-stack client solutions.",
    highlights: [
      "Designed and deployed responsive web apps with React.js & modern UI frameworks.",
      "Engineered secure RESTful APIs and database schemas using MongoDB & Node.js.",
      "Optimized front-end rendering performance, achieving faster load times."
    ]
  },
  // {
  //   role: "MERN / MEAN & PHP Developer Intern",
  //   company: "DigiCoders Technologies Pvt. Ltd., Prayagraj",
  //   period: "2026 - Present",
  //   type: "Internship (6 Months)",
  //   description: "Built scalable web apps using React, MySQL, JavaScript, and MERN stack. Worked directly on live client client modules and administrative dashboards.",
  //   highlights: [
  //     "Integrated third-party APIs and payment gateways.",
  //     "Maintained legacy applications and migrated components to React.js."
  //   ]
  // },
  {
    role: "Python Programming Trainee",
    company: "Techpile Technology Private limited",
    period: "Summer 2025",
    type: "Summer Training",
    description: "Completed intensive 2-month summer training in Core Python & Automation. Won the 'Best Performance Award'.",
    highlights: [
      "Built automated data processing scripts and python backend modules."
    ]
  },
  // {
  //   role: "UI Development Trainee",
  //   company: "Kamadgiri Software Solutions, Chitrakoot",
  //   period: "2023",
  //   type: "UI Training (45 Days)",
  //   description: "Mastered responsive layout design, HTML5, CSS3, JavaScript, and UI animation techniques. Won the 'Star Performance Award'.",
  //   highlights: [
  //     "Developed high-fidelity web templates with pixel-perfect design."
  //   ]
  // }
];

export const skills = [
  { name: "React.js", level: 92, category: "Frontend", icon: "/images/react.png" },
  { name: "Node.js", level: 88, category: "Backend", icon: "/images/nodejs.svg" },
  { name: "Express.js", level: 86, category: "Backend", icon: "/images/ex.png" },
  { name: "MongoDB", level: 85, category: "Database", icon: "/images/mongoDB.png" },
  { name: "JavaScript (ES6+)", level: 94, category: "Frontend", icon: "/images/jawascript.jpg" },
  { name: "Python", level: 50, category: "Languages", icon: "/images/python.jpg" },
  // { name: "PHP", level: 80, category: "Languages", icon: "/images/php.png" },
  // { name: "C Language", level: 78, category: "Languages", icon: "/images/c.png" },
  { name: "GitHub & Git", level: 90, category: "Tools", icon: "/images/github.jpg" },
  { name: "HTML5 / CSS3", level: 96, category: "Frontend", icon: "/images/shivam logo.png" },
  { name: "REST APIs", level: 90, category: "Backend", icon: "/images/nodejs.svg" },
  // { name: "Cyber Security Basics", level: 75, category: "Tools", icon: "/images/download.jpg" }
];

export const services = [
  {
    id: "01",
    title: "Full-Stack Web Development",
    description: "Building fast, scalable, and responsive web applications from scratch using MERN Stack (MongoDB, Express, React, Node) and PHP.",
    features: ["Single Page Applications", "Admin Dashboards", "Database Design", "Authentication & Security"],
    icon: "Code2"
  },
  {
    id: "02",
    title: "Backend Engineering & REST APIs",
    description: "Creating resilient, secure backend systems, REST APIs, and microservices with Node.js, Express, Python, and SQL/NoSQL databases.",
    features: ["REST API Architecture", "JWT & OAuth Auth", "Database Optimization", "Server Deployment"],
    icon: "Server"
  },
  {
    id: "03",
    title: "UI/UX & Frontend Design",
    description: "Crafting modern, eye-catching, glassmorphic interfaces with smooth animations, custom themes, and full mobile responsiveness.",
    features: ["Glassmorphism & Dark Themes", "Micro-Animations", "Responsive Mobile First Layouts", "Accessibility & Speed"],
    icon: "Layout"
  },
  {
    id: "04",
    title: "AI Integration & Automation",
    description: "Embedding custom AI Assistants, intelligent chatbots, auto-responders, and smart search capabilities into modern web applications.",
    features: ["AI Chatbot Embedding", "Prompt Engineering", "Smart Data Matchers", "Automated Workflows"],
    icon: "Bot"
  }
];

export const projects = [
  {
    id: 1,
    title: "Enterprise MERN E-Commerce Platform",
    category: "Full Stack",
    image: "/images/project001.png",
    description: "A comprehensive e-commerce ecosystem with product filtering, cart management, secure checkout, payment gateway integration, and admin portal.",
    tags: ["React.js", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    features: [
      "User authentication & JWT authorization",
      "Real-time inventory and order management",
      "Responsive shopping cart with dynamic pricing",
      "Admin panel for product & user analytics"
    ],
    liveUrl: "https://github.com/shiv-ay007",
    githubUrl: "https://github.com/shiv-ay007"
  },
  {
    id: 2,
    title: "Smart Educational & LMS Dashboard",
    category: "Web App",
    image: "/images/project01.png",
    description: "Interactive Learning Management System for students and educators with video lesson streaming, quiz generation, and progress tracking.",
    tags: ["React.js", "Express.js", "MongoDB", "Node.js", "TalwindCSS"],
    features: [
      "Course enrollment & payment tracking",
      "Interactive quizzes with instant scoring",
      "Student performance visual analytics",
      "Downloadable certificates & resources"
    ],
    liveUrl: "https://github.com/shiv-ay007",
    githubUrl: "https://github.com/shiv-ay007"
  },
  {
    id: 3,
    title: "Corporate Agency & SaaS Portal",
    category: "UI/UX",
    image: "/images/project03.png",
    description: "High-converting corporate agency site featuring glassmorphic design, smooth GSAP-inspired scroll animations, and dynamic lead capture.",
    tags: ["React", "JavaScript ES6+", "CSS3 Glassmorphism", "Node.js"],
    features: [
      "High performance glassmorphic UI components",
      "Interactive contact & quote calculator",
      "Lightweight fast load speeds",
      "SEO optimized structure"
    ],
    liveUrl: "https://github.com/shiv-ay007",
    githubUrl: "https://github.com/shiv-ay007"
  }
];

export const aiKnowledgeBase = [
  {
    keywords: ["who", "about", "shivam", "bio", "introduction"],
    response: "Shivam Yadav is a passionate Full Stack Developer working at DigiCoders Technologies Pvt. Ltd., Lucknow. He has 2+ years of experience and has successfully built over 30 frontend and 15 full-stack client projects using MERN stack, PHP, and Python."
  },
  {
    keywords: ["skill", "technologies", "stack", "react", "node", "python", "php"],
    response: "Shivam specializes in React.js, Node.js, Express.js, MongoDB, JavaScript (ES6+), Python, PHP, C, HTML5/CSS3, REST APIs, and Git/GitHub. He is also experienced in Cyber Security basics and AI integration!"
  },
  {
    keywords: ["experience", "digicoders", "job", "company", "work"],
    response: "Shivam works at DigiCoders Technologies Pvt. Ltd., Lucknow as a Full Stack Developer. Previously, he completed a 6-month internship at DigiCoders Prayagraj, 2-month Python training at Tcybill Technologies (won Best Performance Award), and UI training at Kamadgiri Software (won Star Performance Award)."
  },
  {
    keywords: ["project", "portfolio", "built", "work"],
    response: "Shivam has completed 30+ frontend projects and 15+ full-stack projects! Highlights include an Enterprise MERN E-Commerce Platform, Smart LMS Dashboard, and Corporate Agency Portals."
  },
  {
    keywords: ["contact", "email", "phone", "location", "hire", "whatsapp", "reach"],
    response: "You can reach Shivam directly via:\n- 📧 Email: Shivamyadav.cse01@gmail.com\n- 📞 Phone: +91 7266079663\n- 📍 Location: Prayagraj / Lucknow, UP\n- 💬 WhatsApp: Click the WhatsApp icon in the contact section!"
  },
  {
    keywords: ["award", "certificate", "star", "best"],
    response: "Shivam has earned prestigious awards:\n1. ⭐ 'Star Performance Award' from Kamadgiri Software Solutions (UI Training)\n2. 🏆 'Best Performance Award' from Tcybill Technologies (Python Training)"
  },
  {
    keywords: ["services", "hire", "can you build", "offer"],
    response: "Shivam offers:\n1. Full-Stack MERN & PHP Development\n2. Secure REST API & Database Engineering\n3. Modern Glassmorphic UI/UX Web Apps\n4. Custom AI Chatbot & Automation Integration"
  }
];

export const defaultAiPrompts = [
  "Shivam's Tech Stack kya hai?",
  "DigiCoders me Shivam ka experience batao",
  "Shivam se contact kaise karein?",
  "Shivam ke Top Projects kaun se hain?",
  "Awards aur Certificates ke baare me batao"
];
