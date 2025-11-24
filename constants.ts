
import { 
  Code, 
  Database, 
  Globe, 
  Layout, 
  Server, 
  Terminal, 
  Cpu, 
  Cloud,
  Briefcase,
  Palette,
  Layers,
  Search,
  PenTool,
  Rocket,
  Zap
} from 'lucide-react';

export const RESUME_DATA = {
  personalInfo: {
    name: "Dasari Venkata Prasanna Kumar",
    title: "Full-Stack Engineer",
    email: "cherrybangari583@gmail.com",
    phone: "+91 91823 91382",
    location: "Andhra Pradesh, India",
    profilePic: "https://github.com/cherizz00.png",
    social: {
      linkedin: "https://www.linkedin.com/in/prasanna-kumar-399364261", 
      github: "https://github.com/cherizz00",
      portfolio: "#",
      resume: "https://drive.google.com/file/d/1p3bP1kCQPhM-XLCni-IPdv3nrv8Knszw/view?usp=sharing"
    },
    summary: "Results-driven Computer Science undergraduate specializing in Full-Stack Development. Skilled in React, Node.js, MongoDB, and Python, with hands-on experience in building scalable web applications and machine-learning-based predictive models. Strong problem-solving and collaborative abilities with a focus on delivering efficient, user-centric digital solutions."
  },
  experience: [
    {
      company: "Logicmojo",
      role: "Front-End Developer Intern",
      location: "Remote",
      period: "May 2025 – Jul 2025",
      tech: ["React.js", "Bootstrap", "Redux", "REST APIs"],
      description: [
        "Developed and optimized responsive front-end modules using React.js, Bootstrap, and modern ES6 JavaScript.",
        "Collaborated with backend engineers to integrate REST APIs and dynamic real-time rendering.",
        "Created reusable UI components and improved design accessibility for all devices.",
        "Designed and deployed clean dashboards enhancing user experience and navigation flow."
      ]
    }
  ],
  projects: [
    {
      name: "DeepFake Detection",
      tech: ["Deep Learning", "React", "Flask", "ResNeXt", "LSTM"],
      description: "Developed a web app to detect AI-generated videos using ResNeXt and LSTM models. Integrated React front-end with Flask backend for user uploads and authenticity prediction.",
      demoUrl: "", // Empty string implies no live demo, will fallback to repo
      repoUrl: "https://github.com/cherizz00/DeepFake-Detection" 
    },
    {
      name: "Employee Attrition Prediction",
      tech: ["Machine Learning", "Random Forest", "XGBoost"],
      description: "Built an ensemble ML model using Random Forest and XGBoost achieving 85% accuracy. Performed feature analysis and visualization for HR insights.",
      demoUrl: "",
      repoUrl: "https://github.com/cherizz00/Employee-Attrition"
    }
  ],
  skills: [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "Numpy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "National Institute of Technology, Durgapur",
      period: "2022 – 2026",
      coursework: "Data Structures, Algorithms, Machine Learning, Databases, Operating Systems"
    }
  ],
  responsibility: [
    {
      role: "Head – ATH",
      period: "July 2025 – Present",
      description: "Leading the Accommodation, Travel, and Hospitality team for Aarohan Fest, managing delegate logistics, guest coordination, and event hospitality operations."
    },
    {
      role: "Senior Fest Coordinator",
      period: "Aarohan 2025",
      description: "Managed planning, logistics, and sponsor engagement."
    },
    {
      role: "Core Member",
      period: "Centre for Cognitive Activities (CCA)",
      description: "Organized technical and creative college events."
    }
  ],
  certifications: [
    "Goldman Sachs Operations Simulation",
    "Google Qwiklabs (BigQuery & Dataflow)",
    "AWS Cloud Workshop – CDC NIT Durgapur"
  ],
  spokenLanguages: ["English", "Hindi", "Telugu", "Tamil"]
};

export const SERVICES_DATA = [
  {
    title: "Full-Stack Development",
    description: "Building scalable, responsive web applications from concept to deployment using the MERN stack.",
    icon: "Layout"
  },
  {
    title: "AI Integration",
    description: "Embedding intelligent features like predictive models, chatbots, and computer vision into web platforms.",
    icon: "Cpu"
  },
  {
    title: "Rapid Prototyping",
    description: "Turning ideas into interactive MVPs quickly to validate technical feasibility and user experience.",
    icon: "Code"
  },
  {
    title: "Cloud Architecture",
    description: "Designing secure and scalable cloud infrastructure on AWS (EC2, S3) for robust application deployment.",
    icon: "Cloud"
  }
];

export const MY_EDGE_DATA = [
  {
    title: "Business-First Mindset",
    description: "I don't just write code; I build solutions that solve real business problems and drive ROI.",
    icon: "Briefcase"
  },
  {
    title: "Design-Engineering Hybrid",
    description: "With a keen eye for UI/UX, I bridge the gap between design mockups and functional reality.",
    icon: "Palette"
  },
  {
    title: "Scalable Architecture",
    description: "I write clean, modular code designed to handle growth from day one, reducing future technical debt.",
    icon: "Layers"
  }
];

export const PROCESS_DATA = [
  {
    step: "01",
    title: "Discovery",
    description: "Requirements gathering, technical feasibility check, and user needs analysis.",
    icon: "Search",
    tags: ["Requirements", "Feasibility", "Planning"]
  },
  {
    step: "02",
    title: "Strategy & Design",
    description: "Architecting the database, API structure, and UI/UX workflows.",
    icon: "PenTool",
    tags: ["Architecture", "UI/UX", "Database Schema"]
  },
  {
    step: "03",
    title: "Development",
    description: "Agile coding sprints with regular updates and CI/CD integration.",
    icon: "Code",
    tags: ["Frontend", "Backend", "Integration"]
  },
  {
    step: "04",
    title: "Launch & Scale",
    description: "Deployment, performance optimization, and post-launch support.",
    icon: "Rocket",
    tags: ["Deployment", "Monitoring", "SEO"]
  }
];

export const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
