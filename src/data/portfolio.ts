import { Project, Skill, Testimonial } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image: "https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveDemo: "https://example.com",
    github: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, team collaboration, and project tracking.",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["TypeScript", "React", "Firebase", "Framer Motion"],
    liveDemo: "https://example.com",
    github: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "CSS3"],
    liveDemo: "https://example.com",
    github: "https://github.com",
    featured: false
  },
  {
    id: 4,
    title: "Social Media Platform",
    description: "Modern social networking platform with real-time messaging, media sharing, and social features.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["Next.js", "PostgreSQL", "Socket.io", "AWS S3"],
    liveDemo: "https://example.com",
    github: "https://github.com",
    featured: true
  }
];

export const skills: Skill[] = [
  { name: "React", level: 95, category: 'frontend', icon: "⚛️" },
  { name: "TypeScript", level: 90, category: 'frontend', icon: "📘" },
  { name: "Node.js", level: 85, category: 'backend', icon: "🟢" },
  { name: "Python", level: 80, category: 'backend', icon: "🐍" },
  { name: "Tailwind CSS", level: 95, category: 'frontend', icon: "🎨" },
  { name: "MongoDB", level: 75, category: 'backend', icon: "🍃" },
  { name: "PostgreSQL", level: 85, category: 'backend', icon: "🐘" },
  { name: "Docker", level: 70, category: 'tools', icon: "🐳" },
  { name: "AWS", level: 75, category: 'tools', icon: "☁️" },
  { name: "Figma", level: 80, category: 'design', icon: "🎨" }
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    content: "Outstanding developer who delivered exceptional results. The attention to detail and code quality exceeded our expectations.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Senior Developer",
    company: "StartupXYZ",
    content: "Incredible problem-solving skills and ability to work under pressure. A true professional who brings innovative solutions.",
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Design Director",
    company: "Creative Agency",
    content: "Perfect blend of technical expertise and creative vision. Transformed our ideas into beautiful, functional applications.",
    avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
  }
];