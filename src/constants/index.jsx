import {
  HomeIcon,
  UserCircleIcon,
  FolderIcon,
  PhoneIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";
import {
  portfolio,
  quirk,
  abakamay,
  guestbook,
  nike,
  platformer,
} from "../assets/images";

const tagCategoryMap = {
  Git: "warning",
  Gitlab: "warning",
  Github: "warning",
  Figma: "warning",
  Skype: "info",
  VueJs: "secondary",
  Quasar: "primary",
  Axios: "error",
  Flask: "primary",
  Python: "secondary",
  HTML: "primary",
  CSS: "primary",
  Javascript: "secondary",
  Firebase: "error",
  Flutter: "primary",
  Dart: "secondary",
  react: "primary",
  Tailwind: "primary",
  React: "primary",
  Godot: "warning",
  Gdscript: "primary",
};

const tagColors = {
  primary: "dark:bg-[#20221c] dark:text-primary bg-primary ",
  secondary: "dark:bg-[#20221f] dark:text-secondary bg-secondary",
  info: "dark:bg-[#20221f] dark:text-info bg-info",
  warning: "dark:bg-[#2b221a] dark:text-warning bg-warning",
  error: "dark:bg-[#2c1d1c] dark:text-error bg-warning",
};

const myTags = [
  "Junior Dev",
  "Game Dev",
  "Frontend Dev",
  "Traditional Artist",
  "Digital Artist",
  "Backend Dev",
  "Fullstack Dev"
];

const navigationLinks = [
  {
    href: "/",
    label: "Home",
    icon: <HomeIcon className="size-4 base-content group-hover:text-primary" />,
  },
  {
    href: "/about",
    label: "About",
    icon: (
      <UserCircleIcon className="size-4 base-content group-hover:text-primary" />
    ),
  },
  {
    href: "/portfolio",
    label: "Portfolio",
    icon: (
      <FolderIcon className="size-4 base-content group-hover:text-primary" />
    ),
  },
  {
    href: "/guestbook",
    label: "Guestbook",
    icon: (
      <BookOpenIcon className="size-4 base-content group-hover:text-primary" />
    ),
  },
  {
    href: "/contact",
    label: "Contact",
    icon: (
      <PhoneIcon className="size-4 base-content group-hover:text-primary" />
    ),
  },
];

const personalInfo = [
  {
    label: "Daniel Lagapa Estocado",
    icon: "fa-regular fa-id-card",
  },
  {
    name: "Gender",
    label: "Male",
    icon: "fa-solid fa-mars",
  },
  {
    name: "Nationality",
    label: "Filipino",
    icon: "fa-regular fa-flag",
  },

  {
    name: "Email",
    label: "estocado.daniel143@gmail.com",
    icon: "fa-regular fa-envelope",
  },
  {
    name: "Location",
    label: "Cavite, Philippines",
    icon: "fa-solid fa-location-dot",
  },
  {
    name: "Language",
    label: "English | Tagalog",
    icon: "fa-solid fa-language",
  },
  {
    name: "Phone",
    label: "09156444230",
    icon: "fa-solid fa-phone",
  },
];

const workExperience = [
  {
    company: {
      value: "Pixel8 Web Solutions and Consultancy Inc.",
      icon: "fa-solid fa-building",
    },
    position: {
      value: "Front End Developer (Trainee)",
      icon: "fa-solid fa-briefcase",
    },
    date: {
      value: "2023 Jul - 2023 Sep",
      icon: "fa-solid fa-calendar-days",
    },
    specialization: {
      value: "IT / Computer - Software Development",
      icon: "fa-solid fa-code",
    },
    indsutry: {
      value: "Computer / Information Technology (Software)",
      icon: "fa-solid fa-industry",
    },
    goal: {
      value:
        "The goal of Pixel8 Web Solutions and Consultancy Inc.'s frontend development department is to develop the designs produced by the UI/UX design team into fully usable systems and programs. ",
      icon: "fa-solid fa-scroll",
    },
    tags: ["VueJs", "Quasar", "Axios", "Git", "Gitlab", "Figma", "Skype"],
  },
];

const education = [
  {
    label: "Bachelor's / College Degree",
    school: "Cavite State University - Main Campus Indang",
    graduated: "2025 Sep (Running for Graduation)",
    course: "Bachelor of Science in Computer Science",
  },
  {
    label: "Senior High School Diploma",
    school: "Trece Martires City SHS",
    graduated: "2020 Apr",
    strand: "Science, Technology, Engineering and Mathematics (STEM)",
  },
  {
    label: "High School Diploma",
    school: "Trece Martires City National High School",
    graduated: "2018 Apr",
  },
];

// TODO: add social media links
const socials = [
  {
    label: "Facebook",
    icon: "fa-brands fa-facebook-f",
    link: "https://www.facebook.com/danielestocado639",
  },
  {
    label: "Messenger",
    icon: "fa-brands fa-facebook-messenger",
    link: "https://m.me/danielestocado639",
  },
  {
    label: "Github",
    icon: "fa-brands fa-github-alt",
    link: "https://github.com/DanielEstocado",
  },
  {
    label: "LinkedIn",
    icon: "fa-brands fa-linkedin-in",
    link: "http://linkedin.com/in/daniel-estocado-297b8728b/",
  },
  {
    label: "daily.dev",
    icon: "fa-solid fa-code",
    link: "https://app.daily.dev/daniel143",
  },
  {
    label: "Gmail",
    icon: "fa-regular fa-envelope",
    link: "mailto:estocado.daniel143@gmail.com",
  },
];

const myProjects = [
  {
    title: "Abakamay",
    description:
      'Development of Filipino "Abakada" Sign Language Through Data-Driven Image Processing Approach',
    tags: [
      "Flask",
      "Python",
      "HTML",
      "CSS",
      "Javascript",
      "Firebase",
      "Git",
      "Gitlab",
    ],
    status: "Not Deployed",
    imgUrl: abakamay,
  },
  {
    title: "Quirk",
    description: "Android and Web Based Quiz Game using Flutter-Firebase",
    tags: ["Flutter", "Dart", "Firebase"],
    status: "Deployed",
    imgUrl: quirk,
  },
  {
    title: "My portfolio",
    description:
      "This is my personal portfolio website, where I showcase my skills and projects",
    tags: ["React", "Tailwind", "Javascript", "Git", "Github"],
    status: "In Progress",
    imgUrl: portfolio,
  },
  {
    title: "My Guestbook",
    description:
      "A personal project where you can login using your Google or Github account to leave a message",
    tags: ["React", "Tailwind", "Javascript", "Git", "Github", "Firebase"],
    status: "Deployed",
    imgUrl: guestbook,
  },
  {
    title: "Nike Website Clone Design",
    description: "A modern and responsive Nike-themed website clone",
    tags: ["React", "Tailwind", "Javascript", "Git", "Github"],
    status: "Deployed",
    imgUrl: nike,
  },
  {
    title: "Platformer Game",
    description:
      "A simple and quick platformer game that encompasses basic game algorithms and UI",
    tags: ["Godot", "Gdscript"],
    status: "Not Deployed",
    imgUrl: platformer,
  },
];

export {
  navigationLinks,
  socials,
  personalInfo,
  workExperience,
  education,
  tagColors,
  myProjects,
  tagCategoryMap,
  myTags
};
