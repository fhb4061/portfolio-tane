export type PortfolioSectionId =
  | "about"
  | "skills"
  | "experience"
  | "certs-awards"
  | "contact";

export type PortfolioNavItem = {
  id: PortfolioSectionId;
  label: string;
};

export type PortfolioContact = {
  email: string;
  linkedinUrl: string;
  linkedinLabel: string;
};

export type PortfolioContent = {
  name: string;
  headline: string;
  heroSummary: string;
  about: string;
  skills: string[];
  experienceSummary: string;
  certificationsSummary: string;
  contact: PortfolioContact;
  navItems: PortfolioNavItem[];
};

export const portfolioContent: PortfolioContent = {
  name: "Jonathan Lopeti",
  headline: "Senior Full-Stack Engineer",
  heroSummary:
    "I build production-ready software across frontend and backend systems, combining full-stack developer execution with engineering-level architectural thinking.",
  about:
    "I am a Senior Full-Stack Engineer focused on building internal products that improve operations, delivery speed, and platform reliability.",
  skills: [
    "Frontend: React, Next.js, TypeScript",
    "Backend: Node.js, APIs, service integration",
    "Data: SQL, schema design, data workflows",
    "Platform: CI/CD, testing, cloud deployment",
  ],
  experienceSummary: "Experience entries will list company, role, timeline, and quantified impact bullets.",
  certificationsSummary: "Add certifications, recognitions, or speaking achievements here.",
  contact: {
    email: "jonathanlopeti@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/tane-lopeti",
    linkedinLabel: "linkedin.com/in/tane-lopeti",
  },
  navItems: [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "certs-awards", label: "Certs" },
    { id: "contact", label: "Contact" },
  ],
};
