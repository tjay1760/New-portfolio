

import {
  housebooking,
  shakyscookout,
  spacetravellers,
  budgetapp,
  bookstore,
  mathmagic,
  jarian,
  upwork,
  jkuat,
  finlays,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    python,
    ruby,troos,shakur,fuhidy, gtcsnap,maralife,totohouse,tulibooks,pwdsnap,pawaai,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "UI/UX Designer",
      icon: backend,
    },
    {
      title: "Content creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "ruby",
      icon: ruby,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Freelance",
      icon: upwork,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Conducting code reviews and providing constructive feedback to client websites",
      ],
    },
    {
      title: "Director",
      company_name: "Jarian Hortscapes",
      icon: jarian,
      iconBg: "#000",
      date: "Jan 2014 - Present",
      points: [
        " Designed and installed over 100 landscape designs for local and international clients",
        "Propagated and sold and installed over 200 species of ornamental plants",
      ],
    },
    {
      title: "Research Assistant",
      company_name: "JKUAT",
      icon: jkuat,
      iconBg: "#383E56",
      date: "Jan 2012 - Mar 2011",
      points: [
        "Educated farmers on the use of biopesticides and impact on improving harvest outcomes",
        "Drafted reports and publications on the efficacy of various biopesticides in pest control and management",
      ],
    },
    {
      title: "Research Assistant(Intern)",
      company_name: "Finlays",
      icon: finlays,
      iconBg: "#FFF",
      date: "Jan 2011 - April 2011",
      points: [
        " Completed a research Analyzing the efficacy of Silver Nitrate in improving the post-harvest life of flowers",

      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "John approaches tasks with a strong commitment to delivering high-quality results, often completing them ahead of schedule.",
      name: "Kgomotso Nacane",
      designation: "Software Developer",
      company: "Uncap",
      image: troos,
    },
    {
      testimonial:
        "John is a talented developer who uplifts every project and team. ",
      name: "Hassan Shakur",
      designation: "Software Developer",
      company: "Upwork",
      image: shakur,
    },
    {
      testimonial:
        "John is exactly the sort of software developer any company would love.",
      name: "Mohammed AlFuhidy",
      designation: "Software Engineer",
      company: "FastN",
      image: fuhidy,
    },
  ];
  
  const projects = [
        {
      name: "PWD System",
      description:
        "PWD System is a web app that manages the booking and monitoring of appointments for individuals with disabilities. The application is built using React for the frontend and NodeJs for the backend. It features a user management system, a reporting system, and a contact form.",
      tags: [
        {
          name: "NodeJs",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: pwdsnap,
      source_code_link: "https://github.com/tjay1760/Math-magic",
      live_link:'https://disabilityassessment.co.ke/',
      is_private: true,
    },
    {
      name: "GTC Utilities",
      description:
        "GTC Utilities is a property management web application that allows GTC Nairobi tenants to buy tokens online and through a mobile application online. The application is built using React for the frontend and NodeJs for the backend. It token purchasing utility using Mpesa. and a online user management system for the admin.",
      tags: [
        {
          name: "Nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: gtcsnap,
      source_code_link: "https://github.com/tjay1760/GTC-dashboard",
      live_link: "https://app.nairobigtc.co.ke:9443/",
      is_private: true,
    },
    {
      name: "Toto House",
      description:
        "Toto House is a non-profit organization that seeks to provide digital educational content to African Children. The website is built using React for the frontend and NodeJs for the backend. It features a book catalogue, a blog, and a contact form.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "CSS3",
          color: "pink-text-gradient",
        },
      ],
      image: totohouse,
      source_code_link: "https://github.com/tjay1760/toto-house",
      live_link: "https://toto-house.netlify.app/",
      is_private: true,
    },
    {
      name: "Tuli Books",
      description:
        "Tuli Books is an online bookkeeping Application that allows users to carryout financial transactions online. The website is built using React for the frontend and NodeJs for the backend. It features a sales and purchases management system, an inventory management system, and a reporting system.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJs",
          color: "green-text-gradient",
        },
        {
          name: "TailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: tulibooks,
      source_code_link: "https://tulibooks.com/",
      live_link:"https://github.com/tjay1760/Tuli-Books",
      is_private: true,
    },
    {
      name: "Pawa Ai",
      description:
        "Pawa Ai is an african based AI platform. The website is built using React for the frontend and NodeJs for the backend. It features a chatbot, a blog, and features page.",
      tags: [
        {
          name: "NextJs",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "strapi",
          color: "pink-text-gradient",
        },
      ],
      image: pawaai,
      source_code_link: "https://github.com/tjay1760/Budget-App",
      live_link: ' https://pawa-ai.com/',
      is_private: true,
    },
    {
      name: "Mara Life",
      description:
        "Mara Life is a client website for a biopesticide company based in Kenya. The website is built using React for the frontend and NodeJs for the backend. It features a product catalogue, a blog, and a contact form.",
      tags: [
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "strapi",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: maralife,
      source_code_link: "https://github.com/tjay1760/Mara-Life",
      live_link: "https://maralife.netlify.app/",
      is_private: false,
    },

  ];
  const softSkills = ["Leadership", "Analytical Thinking", "Time management", "Collaboration", "Teamwork","Creativity"]
  
  export { services, technologies, experiences, testimonials, projects, softSkills };