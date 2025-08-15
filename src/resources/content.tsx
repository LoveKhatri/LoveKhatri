import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import {
  SiTypescript,
  SiFigma,
  SiDocker,
  SiJavascript,
  SiGo,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiNginx,
  SiApachekafka,
  SiExpress,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiPostman,
  SiVsco,
} from "react-icons/si";

const person: Person = {
  firstName: "Love",
  lastName: "",
  name: "Love",
  role: "Backend Developer",
  avatar: "/images/avatar.jpg",
  email: "hello@lovekhatri.dev",
  location: "Asia/Calcutta",
  languages: ["English", "Hindi"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.name}'s Newsletter</>,
  description: (
    <>
      I occasionally share updates on my projects, backend development tips, and
      thoughts on building scalable systems.
    </>
  ),
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/LoveKhatri",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lovekhatri/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building the engines that power digital experiences</>,
  featured: {
    display: true,
    title: (
      <>
        Recent Project: <strong className="ml-4">Automica</strong>
      </>
    ),
    href: "/projects/automica",
  },
  subline: (
    <>
      I'm Love, a backend developer passionate about creating scalable, reliable, and efficient systems.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hi, I’m Love — a backend developer who enjoys building the systems that
        run behind the scenes. I work with technologies like TypeScript, PostgreSQL,
        Redis, and Docker to create reliable, scalable backend solutions.
        I’ve contributed to projects serving millions of users and also built my own
        products from scratch.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "ApolloApp (Freelance Project)",
        timeframe: "Aug 2024 - May 2025",
        role: "Backend Developer",
        achievements: [
          <>Developed backend for an AI-powered educational platform with features like test plan generation, quiz/flashcard creation, and assignment grading.</>,
        ],
        images: [],
      },
      {
        company: "Vexvo Pvt. Ltd.",
        timeframe: "May 2023 – July 2023",
        role: "Backend Intern",
        achievements: [
          <>Revamped two major modules (Giveaways and Tickets) for the Discortics Discord bot.</>,
          <>Worked on TypeScript migration and backend performance improvements.</>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "B.Tech in Artificial Intelligence & Machine Learning",
        description: <>Maharshi Dayanand University, Rohtak (2023-2026)</>,
      },
      {
        name: "Diploma in Computer Engineering",
        description: <>Govt. Polytechnic Sonipat (2020–2023)</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Backend & Languages",
        description: (
          <>JavaScript, TypeScript, Next.js, Node.js, Go, Python</>
        ),
      },
      {
        title: "Databases & ORM",
        description: (
          <>SQL (PostgreSQL, MySQL), MongoDB, Redis, ORMs (Prisma, Drizzle)</>
        ),
      },
      {
        title: "Tools & Infrastructure",
        description: (
          <>Docker, Git/GitHub, Nginx, Kafka, RabbitMQ</>
        ),
      },
      {
        title: "Design & Prototyping",
        description: <>Figma (UI prototyping)</>,
      },
    ],
  }

};

const work: Work = {
  path: "/projects",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `A collection of personal, freelance, and open-source projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Thoughts, experiments, and development notes",
  description: `Read what ${person.name} has been working on lately.`,
};

export { person, social, newsletter, home, about, blog, work, gallery };
