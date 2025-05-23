import { HomeIcon, UserCircleIcon, FolderIcon, PhoneIcon, BookOpenIcon } from '@heroicons/react/24/solid'
import { portfolio } from '../assets/images';



const tagColors = {
  primary: "dark:bg-[#20221c] dark:text-primary bg-primary ",
  secondary: "dark:bg-[#20221f] dark:text-secondary bg-secondary",
  info: "dark:bg-[#20221f] dark:text-info bg-info",
  warning: "dark:bg-[#2b221a] dark:text-warning bg-warning",
  error: "dark:bg-[#2c1d1c] dark:text-error bg-warning",
};

const navigationLinks = [
   { href: "#home", label: "Home", icon: <HomeIcon className="size-4 base-content group-hover:text-primary" /> },
   { href: "#about", label: "About", icon: <UserCircleIcon className="size-4 base-content group-hover:text-primary" /> },
   { href: "#projects", label: "Projects", icon: <FolderIcon className="size-4 base-content group-hover:text-primary" /> },
   { href: "#contact", label: "Contact", icon: <PhoneIcon className="size-4 base-content group-hover:text-primary" /> },
   { href: "#guestbook", label: "Guestbook", icon: <BookOpenIcon className="size-4 base-content group-hover:text-primary" /> }
 ];

 

 const personalInfo = [
   {
      label: "Daniel Lagapa Estocado",
      icon: "fa-regular fa-id-card"
   },
   {
      name: "Gender",
      label: "Male",
      icon: "fa-solid fa-mars"
   },
   {
      name: "Nationality",
      label: "Filipino",
      icon: "fa-regular fa-flag"
   },
   
   {
      name: "Email",
      label: "estocado.daniel143@gmail.com",
      icon: "fa-regular fa-envelope"
   },
   {
      name: "Location",
      label: "Cavite, Philippines",
      icon: "fa-solid fa-location-dot"
   },
   {
      name: "Language",
      label: "English | Tagalog",
      icon: "fa-solid fa-language"
   },
   {
      name: "Phone",
      label: "09156444230",
      icon: "fa-solid fa-phone"
   },
 ]


 const workExperience = [
   {
     company: { 
       value: "Pixel8 Web Solutions and Consultancy Inc.", 
       icon: "fa-solid fa-building"
     },
     position: { 
       value: "Front End Developer (Trainee)", 
       icon: "fa-solid fa-briefcase" 
     },
     date: { 
       value: "2023 Jul - 2023 Sep", 
       icon: "fa-solid fa-calendar-days" 
     },
     specialization: { 
       value: "IT / Computer - Software Development", 
       icon: "fa-solid fa-code"
     },
     indsutry: {
      value: "Computer / Information Technology (Software)",
      icon: "fa-solid fa-industry"
     },
     goal: {
      value: "The goal of Pixel8 Web Solutions and Consultancy Inc.'s frontend development department is to develop the designs produced by the UI/UX design team into fully usable systems and programs. ",
      icon: "fa-solid fa-scroll"
     },
     tags: {
      VueJs: "primary",
      Quasar: "primary",
      Axios: "primary",
      Git: "warning",
      Gitlab: "warning",
      Figma: "warning",
      Skype: "info",
     }
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
 ]

// TODO: add social media links
 const socials =[
   {
      label: "Facebook",
      icon: "fa-brands fa-facebook-f"
   },
   {
      label: "Messenger",
      icon: "fa-brands fa-facebook-messenger"
   },
   {
      label: "Github",
      icon: "fa-brands fa-github-alt"
   },
   {
      label: "LinkedIn",
      icon : "fa-brands fa-linkedin-in"
   },
   {
      label: "daily.dev",
      icon: "fa-solid fa-code"
   },
   {
      label: "Gmail",
      icon: "fa-regular fa-envelope"
   }
 ]

 const myProjects = [
   {
       title: "Abakamay",
       description: "This is my personal portfolio website, where I showcase my skills and projects ",
       tags: {
         Flask: "primary",
         Python: "primary",
         HTML: "primary",
         CSS: "primary",
         Javascript: "primary",
         Firebase: "primary",
         Git: "warning",
         Gitlab: "warning",
       },
       status: "Not Deployed",
       imgUrl: portfolio
   },
   {
       title: "Quirk",
       description: "This is my personal portfolio website, where I showcase my skills and projects.",
       tags: {
         flutter: "primary",
         Dart: "primary",
         firebase: "primary",
       },
       status: "Deployed",
       imgUrl: portfolio
   },
   {
       title: "My portfolio",
       description: "This is my personal portfolio website, where I showcase my skills and projects.",
       tags: {
         react: "primary",
         tailwindcss: "primary",
       },
       status: "In Progress",
       imgUrl: portfolio
   },

 ]
   
 


 export { navigationLinks, socials, personalInfo, workExperience,education, tagColors, myProjects };