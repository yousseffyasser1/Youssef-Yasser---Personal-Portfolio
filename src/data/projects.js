import houseOfDessertImage from "../assets/R e-shop 1.png";
import sandaImage from "../assets/Sanda Project .jpeg";

export const projects = [
  {
    title: "Sanda - Smart Workforce Marketplace",
    slug: "sanda",
    type: "Full Stack / Capstone Project",
    shortDescription:
      "A MERN stack workforce marketplace for job posting, applications, assignments, QR attendance, payments, chat, notifications, and admin workflows.",
    longDescription:
      "Sanda is a capstone workforce marketplace connecting employers with verified workers for short-term jobs. It supports job posting, applications, applicant acceptance/rejection, assignment tracking, authentication, role-based access, payment-related frontend flows, wallet UI states, QR attendance, real-time chat, notifications, ratings, and admin workflows.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "React Query",
      "JWT",
      "Socket.io",
    ],
    featured: true,
    highlights:
      "Job lifecycle, applications, role-based access, payment feedback, wallet UI states, QR attendance, chat, notifications, admin workflows.",
    features: [
      "Employer, Worker, and Admin roles",
      "Job posting and applications",
      "Applicant acceptance/rejection",
      "Assignment tracking",
      "Authentication and role-based access",
      "Payment status feedback",
      "Wallet-related UI states",
      "QR check-in/check-out attendance",
      "Real-time chat and notifications",
      "Ratings and reviews",
      "Admin workflows",
      "Reusable forms and validation",
      "Loading states and safe API error handling",
    ],
    role:
      "Full Stack Developer with focus on frontend architecture, job lifecycle UI, admin workflows, API integration, reusable form components, loading states, safe API error handling, and Git/GitHub collaboration.",
    challenges: [
      "Managing multiple user roles and protected flows",
      "Keeping job lifecycle states clear across UI and API",
      "Handling payment and wallet feedback clearly",
      "Building reusable forms without breaking existing flows",
    ],
    learnings: [
      "Real-world role-based application structure",
      "API integration patterns",
      "Team Git workflow, pull requests, conflict resolution, build, lint, and test validation",
    ],
    image: sandaImage,
    liveUrl: "https://sanda-ten.vercel.app/",
    githubUrl: "",
    status: "Capstone project",
  },
  {
    title: "House Of Dessert - Full-Stack E-Commerce Application",
    slug: "house-of-dessert",
    type: "Full Stack / E-Commerce",
    shortDescription:
      "A responsive Arabic RTL e-commerce app with product catalog, cart, checkout, order management, authentication, payment workflow, and admin dashboard.",
    longDescription:
      "House Of Dessert is a responsive Arabic RTL e-commerce application for a premium dessert brand. It includes reusable UI components, product catalog, category filtering, product details, shopping cart, checkout flow, order management, authentication, payment workflow, and admin dashboard features.",
    stack: [
      "React",
      "JavaScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Zustand",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    featured: true,
    highlights: "",
    features: [
      "Arabic RTL interface",
      "Product catalog",
      "Category filtering",
      "Product details",
      "Shopping cart",
      "Cart persistence",
      "Checkout flow",
      "Payment method selection",
      "Order management",
      "Authentication",
      "Admin dashboard",
    ],
    role:
      "Full Stack Developer focused on Arabic RTL UI, reusable components, cart and checkout flows, state management, and scalable frontend architecture.",
    challenges: [
      "Building a clean Arabic RTL shopping experience",
      "Managing cart and checkout state",
      "Keeping the UI responsive and scalable",
    ],
    learnings: [
      "E-commerce UI structure",
      "Cart and checkout flow design",
      "Arabic RTL responsive layout practices",
    ],
    image: houseOfDessertImage,
    liveUrl: "",
    githubUrl: "",
    status: "Completed",
  },
  {
    title: "Chatify - AI Chat Application",
    slug: "chatify",
    type: "Frontend / Team Project",
    shortDescription:
      "An AI-powered chat application supporting instant messaging, group chats, voice/video calls, media sharing, AI chatbot, voice-to-text, and translation.",
    longDescription:
      "Chatify is a modern AI-powered chat application supporting instant messaging, group chats, voice/video calls, media sharing, AI chatbot features, voice-to-text, and multilingual translation.",
    stack: [
      "React.js",
      "Real-time Chat",
      "AI Chatbot",
      "Voice-to-Text",
      "GitHub",
    ],
    featured: true,
    highlights: "",
    features: [
      "Instant messaging",
      "Group chats",
      "Voice/video calls",
      "Media sharing",
      "AI chatbot",
      "Voice-to-text",
      "Multilingual translation",
    ],
    role:
      "Frontend Developer focused on responsive UI, clean component structure, and team collaboration using GitHub.",
    challenges: [],
    learnings: [],
    image: "",
    liveUrl: "",
    githubUrl: "",
    status: "Team project",
  },
  {
    title: "Personal Portfolio - Developer Brand Website",
    slug: "personal-portfolio",
    type: "Frontend / Personal Brand",
    shortDescription:
      "A premium dark portfolio website built to present my MERN Stack skills, projects, experience, CV, and contact channels.",
    longDescription:
      "A personal developer brand website designed and developed to showcase my MERN Stack positioning, selected projects, education, internships, technical skills, CV, and contact links through a clean dark/orange visual identity.",
    stack: ["React.js", "Vite", "Tailwind CSS", "React Router", "Vercel"],
    featured: false,
    highlights: "",
    features: [
      "Premium dark interface",
      "Responsive layout",
      "Project showcase",
      "Contact section",
      "CV download",
      "Personal branding",
    ],
    role:
      "Designed and developed the portfolio experience, project showcase, responsive layout, and personal branding.",
    challenges: [],
    learnings: [],
    image: "",
    liveUrl: "CURRENT_PORTFOLIO_LIVE_URL_HERE",
    githubUrl: "CURRENT_PORTFOLIO_GITHUB_REPO_HERE",
    status: "Live portfolio",
  },
];

export const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(0, 3);

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}
