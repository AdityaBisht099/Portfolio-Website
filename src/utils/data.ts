export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  liveUrl: string
  category: string
}

export interface Skill {
  name: string
  level: number
  category: 'dsa' | 'frontend' | 'backend' | 'database' | 'tools' | 'aiml' | 'other'
  icon: string
}

export interface Experience {
  id: number
  title: string
  company: string
  period: string
  description: string[]
  technologies: string[]
}

export interface Education {
  id: number
  degree: string
  institution: string
  period: string
  description: string[]
  gpa?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Collaborative Whiteboard (Collab-Board)",
    description: "A real-time collaborative whiteboard enabling users to draw, add shapes, and interact on an infinite canvas.",
    image: "/images/collabBoard.jpg",
    technologies: ["Next.js", "TailWind CSS", "Node.js", "MongoDB", "Redis", "Vercel"],
    githubUrl: "https://github.com/AdityaBisht07/",
    liveUrl: "https://collab-board-six.vercel.app/",
    category: "backend"
  },
  {
    id: 2,
    title: "Route F5",
    description: "A student-focused platform aimed at simplifying career planning, academic decision-making, and peer-to-peer community interaction",
    image: "/images/project2.jpg",
    technologies: ["Next.js", "TailWind CSS", "MongoDB", "A.I. Augmentation"],
    githubUrl: "https://github.com/AdityaBisht07/Route-F5",
    liveUrl: "https://algorithm-visualizer.example.com",
    category: "fullstack"
  }
]

export const skills: Skill[] = [
  // Programming & DSA
  { name: "Java", level: 70, category: "dsa", icon: "java" },
  { name: "Python", level: 65, category: "dsa", icon: "python" },
  { name: "C++", level: 58, category: "dsa", icon: "cpp" },
  { name: "Data Structures", level: 75, category: "dsa", icon: "dsa" },
  { name: "Algorithms", level: 78, category: "dsa", icon: "algo" },
  { name: "Problem Solving", level: 73, category: "dsa", icon: "problem-solving" },
  
  // Web Development
  { name: "HTML", level: 85, category: "frontend", icon: "html" },
  { name: "CSS", level: 80, category: "frontend", icon: "css" },
  { name: "JavaScript", level: 70, category: "frontend", icon: "javascript" },
  { name: "Next.js", level: 73, category: "frontend", icon: "nextjs" },
  { name: "TailwindCSS", level: 72, category: "frontend", icon: "tailwind" },
  { name: "React (Basics)", level: 75, category: "frontend", icon: "react" },
  { name: "REST APIs", level: 64, category: "frontend", icon: "api" },
  { name: "Astro (Basics)", level: 60, category: "frontend", icon: "astro" },
  
  // AI & Machine Learning
  { name: "Python (NumPy, Pandas)", level: 75, category: "aiml", icon: "python-ml" },
  { name: "Scikit-learn", level: 70, category: "aiml", icon: "sklearn" },
  { name: "TensorFlow Basics", level: 65, category: "aiml", icon: "tensorflow" },
  { name: "ML Models", level: 70, category: "aiml", icon: "ml" },
  { name: "Data Preprocessing", level: 75, category: "aiml", icon: "data" },
  { name: "Regression & Classification", level: 70, category: "aiml", icon: "ml-algo" },
  
  // Databases
  { name: "MongoDB", level: 65, category: "database", icon: "mongodb" },
  { name: "MySQL", level: 75, category: "database", icon: "mysql" },
  { name: "PostgreSQL", level: 64, category: "database", icon: "postgresql" },
  { name: "Query Optimization", level: 61, category: "database", icon: "optimization" },
  
  // Tools & Version Control
  { name: "Git", level: 85, category: "tools", icon: "git" },
  { name: "GitHub", level: 85, category: "tools", icon: "github" },
  { name: "VS Code", level: 90, category: "tools", icon: "vscode" },
  { name: "Figma (Basics)", level: 60, category: "tools", icon: "figma" },
  { name: "Canva", level: 70, category: "tools", icon: "canva" },
  
  // Other Skills
  { name: "Critical Thinking", level: 85, category: "other", icon: "thinking" },
  { name: "Collaboration", level: 80, category: "other", icon: "collaboration" },
  { name: "Agile Basics", level: 65, category: "other", icon: "agile" },
  { name: "Project Management", level: 75, category: "other", icon: "project" },
  { name: "Debugging", level: 80, category: "other", icon: "debugging" }
]

// Radar chart skills data
export const radarSkills = [
  { name: "Problem Solving", level: 85 },
  { name: "AI/ML", level: 80 },
  { name: "Algorithms", level: 75 },
  { name: "Java", level: 75 },
  { name: "Team Management", level: 70 },
  { name: "Web Development", level: 80 },
]

export const experience: Experience[] = [
  {
    id: 1,
    title: "Freelance Developer",
    company: "Self-Employed",
    period: "2023 - Present",
    description: [
      "Developed custom web applications and solutions for various clients",
      "Built responsive websites using modern technologies like Next.js and React",
      "Implemented AI-augmented workflows to enhance development efficiency",
      "Provided technical consulting and problem-solving expertise for startups and small businesses",
      "Maintained high client satisfaction through quality deliverables and timely communication"
    ],
    technologies: ["Next.js", "React", "JavaScript", "Python", "MongoDB", "TailwindCSS", "Git"]
  }
]

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Technology (CSE)",
    institution: "Graphic Era Hill University",
    period: "2022 - 2026",
    description: [
      "Currently pursuing with a strong interest in DSA, AI/ML, and software development",
      "Active contributor to coding communities",
      "Completed foundational projects and courses in Python, Java, and web development"
    ]
  }
]

export const personalInfo = {
  name: "Aditya Bisht",
  role: "Aspiring Software Engineer | AI/ML Enthusiast (Fresher)",
  tagline: "Logic in Action",
  bio: "I solve complex problems using algorithms and data structures. My AI-augmented workflow speeds up development tasks, letting me focus on core logic and building efficient, scalable solutions.",
  email: "adityabishtofficial547@gmail.com",
  phone: "+91 8923792584",
  location: "Haldwani, Uttarakhand, India",
  github: "https://github.com/AdityaBisht07",
  linkedin: "https://linkedin.com/in/adityabisht07",
  twitter: "https://twitter.com/adityabisht07",
}
