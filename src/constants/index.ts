export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#projects",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Coming Soon - My Portfolio Project",
    desc: "An exciting project currently in development. This will showcase my skills and creativity in building modern web applications with cutting-edge technologies.",
    subdesc:
      "Built with Next.js 14, TypeScript, Tailwind CSS, and modern web technologies. Stay tuned for updates as this project evolves.",
    href: "https://github.com/Zelkanor",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Next.js",
        path: "/assets/react.svg",
      },
    ],
  },
];

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean
) => {
  return {
    cubeScale: isSmall ? 0.4 : isMobile ? 0.5 : isTablet ? 0.6 : 0.8,
    reactLogoScale: isSmall ? 0.15 : isMobile ? 0.18 : isTablet ? 0.3 : 0.4,
    ringScale: isSmall ? 0.4 : isMobile ? 0.45 : isTablet ? 0.5 : 0.6,
    targetScale: isSmall ? 1.2 : isMobile ? 1.4 : isTablet ? 1.6 : 1.8,
    cubePosition: isSmall
      ? [8, -3, -10]
      : isMobile
      ? [10, -4, -12]
      : isTablet
      ? [12, -3, -14]
      : [15, -4, -16],
    reactLogoPosition: isSmall
      ? [-8, 6, -10]
      : isMobile
      ? [-10, 7, -12]
      : isTablet
      ? [-12, 6, -14]
      : [-15, 8, -16],
    ringPosition: isSmall
      ? [0, -8, -10]
      : isMobile
      ? [0, -10, -12]
      : isTablet
      ? [0, -8, -14]
      : [0, -12, -16],
    targetPosition: isSmall
      ? [-6, 3, -10]
      : isMobile
      ? [-8, 4, -12]
      : isTablet
      ? [-10, 3, -14]
      : [-12, 5, -16],
  };
};
