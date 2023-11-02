import {
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
  meta,
  kafka,
  metaverse,
  tripguide,
  threejs,
  customShirt,
  amex,
  disney,
  aws,
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  }
];

const technologies = [
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
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
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Jr. Software Engineer",
    company_name: "American Express",
    icon: amex,
    iconBg: "#E6DEDD",
    date: "June 2017 - Jan 2018",
    points: [
      "Integrated the Income REST API with Kafka, optimizing data flow and communication within the platform.",
      "Contributed to the design and development of the Customer Risk Inquiry Dashboard, enhancing user accessibility and experience for accessing crucial data.",
      "Led the uplift of the existing REST API to a cloud-hosted environment, achieving remarkable improvements in message processing time and time to market.",
      "Leveraged cloud technology for API uplift projects, significantly enhancing the performance, scalability, and deployment speed of the systems.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "American Express",
    icon: amex,
    iconBg: "#E6DEDD",
    date: "Jan 2018 - May 2019",
    points: [
      "Executed a migration of Mainframe data to a Big Data environment, aiming to solidify the foundation for the Customer 360 platform.",
      "Developed data cleansing and standardization modules using Hive UDFs, ensuring high data quality throughout the migration process.",
      'Worked primarily on the "Customer 360 Foundation" project, employing tech such as Hive, Java, Shell, and an in-house scheduler.',
      "Acted as a vital player in the data migration team, ensuring a smooth transition and laying groundwork for subsequent projects.",
    ],
  },
  {
    title: "Senior Engineer",
    company_name: "Disney",
    icon: disney,
    iconBg: "#E6DEDD",
    date: "May 2018 - Sep 2021",
    points: [
      "Headed a team of engineers, leading projects like the high-volume payment experience enhancement and a multi-region wallet application designed for scalability and security.",
      "Pioneered the development of key components for Disney Parks' retail transaction accounting application, leveraging AWS services for enhanced efficiency.",
      "Spearheaded communication, solution design, and requirements gathering for the accounting platform catering to multiple business lines.",
      "Mentored and onboarded junior engineers, guiding them through code and design reviews.",
    ],
  },
  {
    title: "Android Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Nov 2022",
    points: [
      "Led the implementation of key features like the Top Right Entry Point Composer Chooser menu and the creation experience for stories and reels, impacting billions of users and significantly increasing engagement metrics.",
      "Played a pivotal role in the Facebook Reels posting flow redesign, enhancing user clarity and experience.",
      "Championed the Java to Kotlin migration for a significant portion of the team's codebase, driving faster development and increased code robustness.",
      "Maintained core components, including the Camera Roll utility, essential to various teams across the Facebook app.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Horacio proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Customize Shirt with AI",
    description:
      "Web application that allows for the customization and 3D preview of a shirt. It can be customized by uploading your own logo or design or by asking ChatGPT",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: customShirt,
    source_code_link: "https://github.com/Horacio23/custom_shirt_threejs_ai",
    live_link: "https://custom-shirt-threejs.com"
  },
  {
    name: "Metaversus",
    description:
      "Web application that allows users to explore virtual worlds in the metaverse",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs 13",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: metaverse,
    source_code_link: "https://github.com/Horacio23/explore-metaverse",
    live_link: "https://explore-metaverse.com"
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };