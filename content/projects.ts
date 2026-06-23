export type Project = {
  id: string;
  index: string;
  name: string;
  tagline: string;
  industry: string;
  url: string;
  status: "Completed" | "In Development";
  video: string;
  logo: string;
  /** Mini case-study, grounded in the real project brief. */
  problem: string;
  strategy: string;
  solution: string;
  outcome: string;
  contributions: string[];
  accent: string;
};

export const PROJECTS: Project[] = [
  {
    id: "rj4",
    index: "01",
    name: "RJ4",
    tagline: "A luxury lifestyle e-commerce experience built to feel as premium as the products.",
    industry: "Luxury Lifestyle & E-Commerce",
    url: "https://www.rjfour.com/",
    status: "Completed",
    video: "/videos/rj4.mp4",
    logo: "/logos/rj4.jpg",
    problem:
      "A premium lifestyle brand offering fragrances, beauty and luxury essentials needed an online presence that matched the elegance of its products.",
    strategy:
      "Design a sophisticated shopping experience built around brand storytelling and a conversion-focused structure.",
    solution:
      "A bespoke, mobile-responsive e-commerce build with refined UX and an optimised path to purchase.",
    outcome:
      "A digital flagship that reflects RJ4's quality and turns browsers into buyers.",
    contributions: [
      "Website Development",
      "User Experience Design",
      "E-Commerce Optimization",
      "Mobile Responsiveness",
      "Conversion-Focused Structure",
    ],
    accent: "#D4AF37",
  },
  {
    id: "campusshelf",
    index: "02",
    name: "CampusShelf",
    tagline: "A student marketplace engineered for trust, simplicity and growth.",
    industry: "Education Technology",
    url: "https://www.campus-shelf.com/",
    status: "Completed",
    video: "/videos/campusshelf.mp4",
    logo: "/logos/campusshelf.jpg",
    problem:
      "University students lacked a trusted place to buy, sell and exchange textbooks and academic materials.",
    strategy:
      "Architect a marketplace ecosystem designed for trust, simplicity and growth from day one.",
    solution:
      "A student-focused marketplace with a clean, conversion-oriented experience and growth-ready architecture.",
    outcome:
      "A platform that simplifies access to educational resources and scales with its community.",
    contributions: [
      "Website Development",
      "Product Strategy",
      "Marketplace Experience Design",
      "User Experience Optimization",
      "Growth-Oriented Architecture",
    ],
    accent: "#00FF88",
  },
  {
    id: "total-blinds",
    index: "03",
    name: "Total Blinds Concept",
    tagline: "A showroom-quality redesign that turns interest into booked consultations.",
    industry: "Interior Design & Window Treatment",
    url: "https://totalblindsconcept.com/",
    status: "In Development",
    video: "/videos/total-blinds.mp4",
    logo: "/logos/total-blinds.jpg",
    problem:
      "A window-treatment and interior brand needed to showcase transformation projects and convert visitors into qualified leads.",
    strategy:
      "Lead with the work — premium project visuals paired with a clear lead-generation journey.",
    solution:
      "A full website redesign focused on custom installations, conversion and a frictionless enquiry flow.",
    outcome:
      "A showroom-quality site engineered to turn interest into booked consultations.",
    contributions: [
      "Website Strategy",
      "Website Redesign",
      "Lead Generation Optimization",
      "User Experience Design",
      "Conversion Optimization",
    ],
    accent: "#D4AF37",
  },
  {
    id: "rj4-medspa",
    index: "04",
    name: "RJ4 MedSpa",
    tagline: "A luxury wellness platform positioned as a premium aesthetics destination.",
    industry: "Beauty, Wellness & Aesthetics",
    url: "https://medspa.rjfour.com/",
    status: "In Development",
    video: "/videos/rj4-medspa.mp4",
    logo: "/logos/rj4-medspa.jpg",
    problem:
      "A wellness and aesthetics brand needed positioning as a premium destination for skincare and aesthetic services.",
    strategy:
      "Pair luxury brand positioning with a clear, persuasive presentation of services.",
    solution:
      "A refined digital platform with a service-presentation strategy tuned for conversion.",
    outcome:
      "A premium experience that elevates perceived value and drives bookings.",
    contributions: [
      "Website Design",
      "Service Presentation Strategy",
      "Conversion Optimization",
      "User Experience Design",
      "Brand Positioning",
    ],
    accent: "#D4AF37",
  },
  {
    id: "interior-specifics",
    index: "05",
    name: "Interior Specifics",
    tagline: "A portfolio-led site that communicates authority and surfaces qualified leads.",
    industry: "Interior Design",
    url: "https://interiorspecifics.com/",
    status: "In Development",
    video: "/videos/interior-specifics.mp4",
    logo: "/logos/interior-specifics.jpg",
    problem:
      "A premium interior design firm needed to showcase expertise and projects while generating qualified leads.",
    strategy:
      "Build information architecture around expertise and outcomes, guiding visitors toward enquiry.",
    solution:
      "A portfolio-led experience with considered IA, strong UX and an embedded lead-generation strategy.",
    outcome:
      "A site that communicates authority and consistently surfaces qualified leads.",
    contributions: [
      "Website Strategy",
      "Information Architecture",
      "User Experience Design",
      "Lead Generation Strategy",
      "Conversion Optimization",
    ],
    accent: "#A1A1AA",
  },
  {
    id: "skirttique",
    index: "06",
    name: "Skirttique",
    tagline: "A global luxury skirt house — refined brand world and e-commerce experience.",
    industry: "Luxury / Modest Fashion",
    url: "https://skirttique.com",
    status: "In Development",
    video: "/videos/skirttique.mp4",
    logo: "/logos/skirttique.png",
    problem:
      "A custom-skirt fashion label needed to be repositioned from a simple wardrobe piece into a global luxury skirt house.",
    strategy:
      "Establish luxury brand positioning, storytelling and a customer journey built for an aspirational audience.",
    solution:
      "A premium e-commerce experience with visual identity, conversion optimisation and journey mapping.",
    outcome:
      "A refined brand world that elevates skirts into timeless fashion essentials.",
    contributions: [
      "Brand Strategy",
      "Luxury Brand Positioning",
      "Information Architecture",
      "E-Commerce Strategy",
      "Conversion Optimization",
      "Visual Identity Development",
    ],
    accent: "#D4AF37",
  },
];
