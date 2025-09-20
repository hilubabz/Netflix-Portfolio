import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { FaJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiFastapi } from "react-icons/si";
import { RiVercelLine } from "react-icons/ri";
import { SiRender } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { AiOutlineDotNet } from "react-icons/ai";
import { SiCanva } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { HiLightningBolt } from "react-icons/hi";
import { SiAdobephotoshop } from "react-icons/si";

const skills=[
  {
    name: "Frontend",
    skill: [
      {
        language: "HTML",
        description: "Markup Language for Structuring Web Pages",
        icon: <FaHtml5 className="text-red-700 text-5xl" />,
      },
      {
        language: "CSS",
        description: "Style sheet language for designing web pages",
        icon: <FaCss3Alt className="text-red-700 text-5xl" />,
      },
      {
        language: "JavaScript",
        description: "Programming language for dynamic web development",
        icon: <FaJs className="text-red-700 text-5xl" />,
      },
      {
        language: "React.js",
        description: "JavaScript framework for building user interfaces",
        icon: <FaReact className="text-red-700 text-5xl" />,
      },
      {
        language: "Next.js",
        description: "React framework for server-rendered UIs",
        icon: <RiNextjsFill className="text-red-700 text-5xl" />,
      },
      {
        language: "Tailwind CSS",
        description: "Utility-first CSS framework for styling",
        icon: <RiTailwindCssFill className="text-red-700 text-5xl" />,
      },
    ],
  },
  
  {
    name: "Backend",
    skill: [
      {
        language: "Express.js",
        description: "Minimal Node.js framework for building APIs and web apps",
        icon: <SiExpress className="text-red-700 text-5xl" />,
      },
      {
        language: "Next.js",
        description: "Node.js framework for APIs and server-side logic",
        icon: <RiNextjsFill className="text-red-700 text-5xl" />
      },
      {
        language: "PHP",
        description: "Server-side scripting language for web applications",
        icon: <FaPhp className="text-red-700 text-5xl" />,
      },
      {
        language: "Fast API",
        description: "Python framework for high-performance APIs",
        icon: <SiFastapi className="text-red-700 text-5xl" />,
      },
    ],
  },

  {
    name: "Databases",
    skill: [
      {
        language: "MySQL",
        description: "Relational database management system for structured data",
        icon: <SiMysql className="text-red-700 text-5xl" />,
      },
      {
        language: "MongoDB",
        description: "NoSQL database for storing JSON-like documents",
        icon: <DiMongodb className="text-red-700 text-5xl" />
      },
    ],
  },

  {
    name: "AI/ML",
    skill: [
      {
        language: "Python",
        description: "High-Level Programming Language for AI/ML",
        icon: <FaPython className="text-red-700 text-5xl" />,
      }
    ],
  },

  {
    name: "Cloud Deployment",
    skill: [
      {
        language: "Netlify",
        description: "Platform for deploying static sites and modern web apps",
        icon: <SiNetlify className="text-red-700 text-5xl" />,
      },
      {
        language: "Vercel",
        description: "Platform for deploying frontend and full-stack serverless apps",
        icon: <RiVercelLine className="text-red-700 text-5xl" />,
      },
      {
        language: "Render",
        description: "Cloud platform for hosting web apps, APIs, and databases",
        icon: <SiRender className="text-red-700 text-5xl" />
      },
    ],
  },

  {
    name: "Designing and Graphic Tools",
    skill: [
      {
        language: "Figma",
        description: "Cloud-based tool for UI/UX and interface design",
        icon: <FiFigma className="text-red-700 text-5xl" />
      },
      {
        language: "Canva",
        description: "Online platform for graphic design and social media visuals",
        icon: <SiCanva className="text-red-700 text-5xl" />,
      },
      {
        language: "Photoshop",
        description: "Industry-standard software for image editing and graphic design",
        icon: <SiAdobephotoshop className="text-red-700 text-5xl" />
      },
      {
        language: "Draw.io",
        description: "Tool for creating diagrams, flowcharts, and visual models",
        icon: <RiVercelLine className="text-red-700 text-5xl" />
      },
    ],
  },

  {
    name: "API Testing",
    skill: [
      {
        language: "Postman",
        description: "API development and testing platform",
        icon: <SiPostman className="text-red-700 text-5xl" />
      },
      {
        language: "Thunder Client",
        description: "Lightweight VS Code extension for testing APIs",
        icon: <HiLightningBolt className="text-red-700 text-5xl" />,
      },
    ],
  },

  {
    name: "Collaboration Tools",
    skill: [
      {
        language: "Git & GitHub",
        description: "Platform for version control, collaboration, and code hosting",
        icon: <FaGithub className="text-red-700 text-5xl" />
      },
    ],
  },

  {
    name: "Additional Familiarity",
    skill: [
      {
        language: "Java",
        description: "Versatile programming language for web, desktop, and enterprise applications",
        icon: <FaJava className="text-red-700 text-5xl" />
      },
      {
        language: ".NET",
        description: "Framework for building web, desktop, and backend applications using C#",
        icon: <AiOutlineDotNet className="text-red-700 text-5xl" />
      },
      {
        language: "Playwright",
        description: "Automation framework for end-to-end web testing",
        icon: <FaJs className="text-red-700 text-5xl" />
      },
    ],
  },
];

export default skills