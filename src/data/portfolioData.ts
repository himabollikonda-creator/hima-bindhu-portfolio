import {
  PersonalInfo,
  SkillCategory,
  Certification,
  ExperienceItem,
  HackathonItem,
  LeadershipItem,
  StrengthsAndLanguagesData,
} from "../types";
import himaAvatar from "../assets/images/himabindhu.jpg";

export const personalInfo: PersonalInfo = {
  name: "Bollikonda Hima Bindhu",
  title: "B.Tech CSE (AI & ML) Student | Aspiring Developer",
  tagline: "Turning curiosity into code — exploring AI, web development, and real-world problem solving.",
  bio: "B.Tech Computer Science (AI & ML) student, currently in 2nd year at Sir Padampat Singhania University, Udaipur (2025–2029). Hands-on exposure to web development, cloud, and software testing through internships, virtual job simulations, and hackathons. Comfortable with Python, C, DSA, OOP, and SQL, with a growing interest in applying AI/ML to real-world problems. Active in hackathons and startup/entrepreneurship events, and currently serving as a Campus Ambassador leading student engagement initiatives. Quick learner with strong problem-solving skills and a track record of picking up new tools and domains independently.",
  avatarUrl: himaAvatar,
  email: "himabollikonda@gmail.com",
  phone: "+91 84649 03090",
  location: "Udaipur, Rajasthan, India",
  linkedin: "https://linkedin.com/in/hima-bindhu-0106993b3",
  github: "https://github.com/himabindhu-b",
  institution: "Sir Padampat Singhania University (SPSU)",
  degree: "Bachelor of Technology in Computer Science",
  specialization: "Artificial Intelligence & Machine Learning",
  year: "Currently in 2nd Year",
  timeline: "2025 – 2029",
};

export const skillCategories: SkillCategory[] = [
  {
    category: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "Python", level: 88, tags: ["Data Analysis", "AI/ML", "Automation"] },
      { name: "C Language", level: 82, tags: ["Logic", "Memory Management", "Algorithms"] },
      { name: "SQL", level: 80, tags: ["Queries", "Relational DB", "DBMS"] },
    ],
  },
  {
    category: "Core Computer Science",
    iconName: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms", level: 85, tags: ["Arrays", "Trees", "Graphs", "Searching/Sorting"] },
      { name: "Object-Oriented Programming (OOP)", level: 86, tags: ["Inheritance", "Polymorphism", "Abstraction"] },
      { name: "Database Management (DBMS)", level: 82, tags: ["Relational Schema", "SQL", "Indexing"] },
    ],
  },
  {
    category: "Domains & Technologies",
    iconName: "Layers",
    skills: [
      { name: "Web Development", level: 85, tags: ["HTML5/CSS3", "JavaScript", "React", "Tailwind"] },
      { name: "Cloud Fundamentals", level: 78, tags: ["Infrastructure", "AWS/Cloud Concepts", "Deployment"] },
      { name: "Software Testing", level: 80, tags: ["Functional Testing", "Quality Assurance", "Test Cases"] },
      { name: "AI/ML Fundamentals", level: 82, tags: ["Core Concepts", "Model Logic", "Ethics"] },
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Technology Job Simulation",
    issuer: "Deloitte",
    platform: "Forage",
    date: "Apr 2026",
    description: "Completed practical software coding and development tasks reflecting real-world consulting and tech solutions at Deloitte.",
    skills: ["Software Engineering", "Problem Solving", "Coding Practices"],
    icon: "Briefcase",
  },
  {
    id: "cert-2",
    title: "AI for Beginners",
    issuer: "HP LIFE / HP Foundation",
    date: "Jun 2026",
    description: "Comprehensive training covering core AI concepts, practical applications, ethical AI considerations, and real-world machine learning usage.",
    skills: ["AI Concepts", "Machine Learning Ethics", "AI Applications"],
    icon: "Sparkles",
  },
  {
    id: "cert-3",
    title: "Cloud Infrastructure Analyst",
    issuer: "NASSCOM",
    platform: "Skill India Digital Hub",
    date: "Jun 2026",
    description: "In-depth program on cloud architecture fundamentals, virtual machine provisioning, storage security, and infrastructure monitoring.",
    skills: ["Cloud Architecture", "Infrastructure", "Virtualization"],
    icon: "Cloud",
  },
  {
    id: "cert-4",
    title: "Software Test Engineer",
    issuer: "NASSCOM",
    platform: "Skill India Digital Hub",
    date: "Jun 2026",
    description: "Specialized training in software quality assurance, test case execution, defect tracking, and software lifecycle validation.",
    skills: ["Quality Assurance", "Software Testing", "Defect Tracking"],
    icon: "CheckCircle2",
  },
];

export const experienceList: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Web Development Intern",
    company: "Thiranex",
    location: "Remote / Project-Based",
    type: "Internship",
    period: "May 2026 – Jun 2026",
    highlights: [
      "Worked on practical web development projects under senior industry mentorship during a intensive one-month tenure.",
      "Built responsive user interfaces, optimized front-end performance, and ensured clean CSS styling across modern browsers.",
      "Participated in periodic performance reviews, code quality feedback sessions, and sprint deliverables.",
    ],
    skills: ["Web Development", "HTML/CSS", "JavaScript", "Responsive Design", "Git"],
  },
];

export const hackathonsList: HackathonItem[] = [
  {
    id: "hack-1",
    event: "HackFluence 2026",
    organizer: "CodeBenders x Dropp",
    roleOrTeam: "Team Novahire",
    description: "AI & Creator Economy Innovation Hackathon focusing on building scalable AI solutions for the creator ecosystem.",
    tags: ["AI Solution", "Creator Economy", "Team Novahire"],
    icon: "Trophy",
  },
  {
    id: "hack-2",
    event: "Hackarena 2.0",
    organizer: "Ignite Room",
    roleOrTeam: "Zonals Round Competitor",
    description: "Advanced technological hackathon competition testing real-time problem solving, algorithmic efficiency, and prototype execution.",
    tags: ["Zonals Round", "Tech Competition", "Rapid Prototyping"],
    icon: "Award",
  },
  {
    id: "hack-3",
    event: "Startup Pitch Arena",
    organizer: "Synergy Club, NIT Kurukshetra",
    roleOrTeam: "National-Level Finalist",
    description: "National-level startup pitch competition presenting technology-driven business models and AI product ideas.",
    tags: ["National Level", "Entrepreneurship", "Pitching"],
    icon: "Rocket",
  },
  {
    id: "hack-4",
    event: "The Big Brand Theory",
    organizer: "Entrepreneurship Cell, IIT (BHU) Varanasi",
    roleOrTeam: "Participant",
    description: "Brand strategy and technology positioning challenge focused on market strategy and modern digital transformation.",
    tags: ["IIT BHU", "E-Cell", "Brand Strategy"],
    icon: "Lightbulb",
  },
];

export const leadershipList: LeadershipItem[] = [
  {
    id: "lead-1",
    role: "Campus Ambassador",
    organization: "Stoxra Student Leadership Program",
    period: "Jun 2026 – Present",
    highlights: [
      "Represent Stoxra's Student Leadership Program at Sir Padampat Singhania University (SPSU); build and expand the campus student community.",
      "Organize and participate in technical workshops, hackathons, and networking sessions to promote peer learning.",
      "Connect students to valuable internship opportunities, skill development workshops, and national-level programs.",
    ],
    skills: ["Community Building", "Event Organization", "Leadership", "Public Speaking", "Networking"],
  },
];

export const strengthsAndLanguagesData: StrengthsAndLanguagesData = {
  strengths: [
    {
      name: "Quick Learner",
      description: "Proven track record of picking up new programming frameworks, cloud concepts, and developer tools independently.",
      icon: "Zap",
    },
    {
      name: "Problem-Solving Ability",
      description: "Logical mindset rooted in Data Structures, Algorithms, and structured debugging across programming challenges.",
      icon: "Brain",
    },
    {
      name: "Adaptability",
      description: "Thrives in fast-paced hackathons, virtual simulations, and cross-functional student leadership initiatives.",
      icon: "Compass",
    },
  ],
  languages: [
    { name: "English", level: "Professional Working Proficiency", proficiency: 92 },
    { name: "Telugu", level: "Native / Bilingual", proficiency: 100 },
    { name: "Hindi", level: "Full Professional / Fluent", proficiency: 90 },
  ],
};
