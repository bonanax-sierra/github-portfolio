import project1Image from '../assets/images/project1.png'
import project2Image from '../assets/images/project2.jpg'

export const projects = [
  {
    id: 1,
    title: 'AutoPlug',
    description:
      'Telegram broadcaster dashboard — session management, group targeting, and real-time delivery status tracking.',
    tech: ['React', 'Next.js', 'Tailwind CSS', 'Telegram API'],
    image: project1Image,
    liveUrl: 'https://siofrappeservices.vercel.app/',
    githubUrl: null,
  },
  {
    id: 2,
    title: 'OTP-SaaS',
    description:
      'SaaS OTP generation and verification platform — secure, real-time, and API-ready for developer integration.',
    tech: ['React', 'Node.js', 'Tailwind CSS', 'API'],
    image: project2Image,
    liveUrl: 'https://otp-saas.vercel.app/',
    githubUrl: null,
  },
]

export const skillGroups = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JS ES6+', 'React', 'Vue', 'Tailwind', 'Bootstrap', 'WordPress'],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: ['PHP', 'Laravel', 'Python', 'NGINX', 'Docker'],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'SQL'],
  },
  {
    id: 'tools',
    label: 'Tools & AI',
    skills: ['Git', 'Figma', 'Prompt Engineering', 'AI Tools', 'Flutter'],
  },
]

export const experiences = [
  {
    id: 1,
    role: 'Software Engineering Intern',
    context: 'WordPress Themes',
    company: 'Thy Web Development Inc.',
    period: 'January 2026',
    description:
      'Built reusable components using PHP, SCSS, and JavaScript. Worked with the WordPress template hierarchy and contributed to UI/UX and performance improvements.',
    tech: ['PHP', 'SCSS', 'JavaScript', 'WordPress'],
  },
  {
    id: 2,
    role: 'Software Developer',
    context: 'Risk Analytics for Adolescents',
    company: 'POPCOM Capstone',
    period: 'August 2025',
    description:
      'Trained an AI model on real-world datasets. Handled data preprocessing, feature engineering, and model evaluation.',
    tech: ['Python', 'AI/ML', 'Data Analytics', 'Pandas'],
  },
]
