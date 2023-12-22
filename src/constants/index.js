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
    ruby,
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
      designation: "Student",
      company: "Microverse",
      image: "https://media.licdn.com/dms/image/D4D35AQHu61_Ddvlb8w/profile-framedphoto-shrink_800_800/0/1689996057907?e=1703808000&v=beta&t=mqo5m1qLQ_Ji-bWbn6sjYWZjRygd1aW5fYI8yhX9KDI",
    },
    {
      testimonial:
        "John is a talented developer who uplifts every project and team. ",
      name: "Hassan Shakur",
      designation: "Student",
      company: "Microverse",
      image: "https://media.licdn.com/dms/image/D4E35AQHW44XlSKKpFQ/profile-framedphoto-shrink_800_800/0/1700224390643?e=1703808000&v=beta&t=wdvltw1IzenENoLHBsTqajOgdXDaKlmuy7wB14_df6k",
    },
    {
      testimonial:
        "John is exactly the sort of software developer any company would love.",
      name: "Mohammed AlFuhidy",
      designation: "Software Engineer",
      company: "FastN",
      image: "https://media.licdn.com/dms/image/D4E03AQEHg3Ab4txdVg/profile-displayphoto-shrink_800_800/0/1700552456670?e=1708560000&v=beta&t=yn8TP9wpDEih95pw-8yf6yV_t_u-EehLrXnunplIzsM",
    },
  ];
  
  const projects = [
    {
      name: "House Booking",
      description:
        "House Booking is a web application that offers a diverse selection of luxurious houses. Find your slice of paradise, effortlessly choose your shelter, and make memories that last a lifetime with a house of your choice.",
      tags: [
        {
          name: "ruby",
          color: "blue-text-gradient",
        },
        {
          name: "postgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: housebooking,
      source_code_link: "https://github.com/Kgomotso196/House-Booking-Frontend",
      live_link: "https://houseboooking01.onrender.com/"
    },
    {
      name: "Space Travellers",
      description:
        "Space Travelers Hub is a single-page web application that fetches rockets and missions from the SpaceX API. Users can book and cancel their reservations for rockets, missions, and myProfile to show the reserved rockets and missions.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "CSS3",
          color: "pink-text-gradient",
        },
      ],
      image: spacetravellers,
      source_code_link: "https://github.com/Mofuhidy/space-travelers--hub",
      live_link: "https://endearing-profiterole-e64e44.netlify.app/"
    },
    {
      name: "Bookstore",
      description:
        "The bookstore is a web application developed in react that helps users manage their book reads. Users can also be able to view the progress of their current reads.",      
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "HTML5",
          color: "pink-text-gradient",
        },
      ],
      image: bookstore,
      source_code_link: "https://github.com/tjay1760/mybookstore",
      live_link:"https://magical-hotteok-98fc4f.netlify.app/"
    },
    {
      name: "Budget App",
      description:
        "The budget app is a ruby on rails project that helps users with their financial analysis. With the project users can be able to manage their spending and track expenses.",
      tags: [
        {
          name: "Ruby",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: budgetapp,
      source_code_link: "https://github.com/tjay1760/Budget-App",
      live_link: ' https://budgetapp-g2pb.onrender.com/'
    },
    {
      name: "Shakys Cookout ",
      description:
        "The budget app is a ruby on rails project that helps users with their financial analysis. With the project users can be able to manage their spending and track expenses.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: shakyscookout,
      source_code_link: "https://github.com/tjay1760/Shakys-Cookout",
      live_link: "https://gorgeous-youtiao-23872f.netlify.app/"
    },
    {
      name: "Math Magicians",
      description:
        "MAth magicians is a web app that aloows users to perfo their calculations. Always inspired with a random quote to aid their maths",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: mathmagic,
      source_code_link: "https://github.com/tjay1760/Math-magic",
      live_link:'https://soft-malabi-8cf566.netlify.app/'
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };