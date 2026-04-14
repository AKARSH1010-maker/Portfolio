import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Akarsh",
  lastName: "Singh Sisoudia",
  name: `Akarsh Singh Sisoudia`,
  role: "B.Tech CSE (AI & ML) Student | Full Stack Developer",
  email: "akarshsisoudia7@gmail.com",
  location: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on my latest projects and learnings</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/AKARSH1010-maker",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/akarshsisoudia",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Developer & AI/ML Enthusiast</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">HackHub</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/hackhub-hackathon-management-platform",
  },
  subline: (
    <>
      I'm Akarsh, a B.Tech Computer Science student specializing in AI & ML. I build modern web applications, analytics dashboards, and AI-based projects using{" "}
      <Text as="span" size="xl" weight="strong">
        React, Next.js, Python
      </Text>
      , and machine learning tools.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },

  avatar: {
    display: false,
  },

  calendar: {
    display: false,
    link: "https://cal.com",
  },

  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a Computer Science student specializing in Artificial Intelligence and Machine Learning,
        passionate about building real-world projects that combine clean UI, strong logic, and
        practical problem-solving. My work includes full stack web applications, responsive frontend
        projects, analytics dashboards, and AI-powered tools. I enjoy turning ideas into working
        products and continuously improving my development, data, and problem-solving skills.
      </>
    ),
  },

  work: {
    display: true,
    title: "Projects",
    experiences: [
      {
        company: "HackHub",
        timeframe: "2024",
        role: "Hackathon Management Platform",
        achievements: [
          <>
            Developed a full stack hackathon management platform with role-based dashboards for Admin
            and Participants using Next.js, Tailwind CSS, Firebase Authentication, and Firestore.
          </>,
          <>
            Implemented real-time coordination, team management, announcements, leaderboard tracking,
            event scheduling, secure Google Authentication, dynamic routing, and responsive SaaS-style UI.
          </>,
        ],
        images: [],
      },

      {
        company: "Task Manager",
        timeframe: "2024",
        role: "Full Stack Task Management App",
        achievements: [
          <>
            Built a full stack task management application with CRUD operations, task filtering,
            REST API integration, and responsive UI using React.js, Node.js, Express.js, and Axios.
          </>,
          <>
            Deployed frontend and backend for production use with modular services architecture
            and environment-based configuration.
          </>,
        ],
        images: [],
      },

      {
        company: "Sales Analytics Dashboard",
        timeframe: "2024",
        role: "E-commerce Customer Segmentation & Analytics",
        achievements: [
          <>
            Built an interactive analytics dashboard for data cleaning, sales analysis, KPI tracking,
            and RFM-based customer segmentation using Python, Streamlit, Pandas, and Scikit-learn.
          </>,
          <>
            Added CSV upload, business insights, interactive filters, dynamic charts, and
            downloadable reports with a modern responsive UI.
          </>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "SRM University NCR Campus",
        description: <>B.Tech, Computer Science (AI & ML), 2023–2027 | CGPA: 7.75/10</>,
      },
      {
        name: "City Montessori School",
        description: <>Senior Secondary (XII), 2023 | 93.25%</>,
      },
      {
        name: "City Montessori School",
        description: <>Secondary (X), 2021 | 92.73%</>,
      },
    ],
  },

  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Languages & Frameworks",
        description: (
          <>Python, Java, C++, JavaScript, React.js, Next.js, Node.js, Express.js, Tailwind CSS, HTML, CSS</>
        ),
        tags: [{ name: "JavaScript", icon: "javascript" }],
        images: [],
      },
      {
        title: "Data & AI",
        description: (
          <>Pandas, NumPy, Scikit-learn, TensorFlow, OpenCV, Matplotlib, Streamlit</>
        ),
        tags: [{ name: "Python", icon: "python" }],
        images: [],
      },
      {
        title: "Backend & Tools",
        description: (
          <>Firebase, Firestore, REST APIs, Git, GitHub, Vercel, Railway</>
        ),
        tags: [{ name: "GitHub", icon: "github" }],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech and development...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Full stack and data projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Project gallery – ${person.name}`,
  description: `A project showcase by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };