export interface Experience {
  id: string;
  company: string;
  role: string;
  department?: string;
  period: string;
  duration: string;
  location: string;
  highlights: string[];
  isCurrent: boolean;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  dates: string;
  activities?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
}

export interface Metric {
  value: string;
  label: string;
}

export const SITE_CONFIG = {
  name: "Jordin Lissone",
  credentials: "M.S.",
  headline: "Data Risk & Privacy Professional",
  location: "New York City Metropolitan Area",
  linkedin: "https://www.linkedin.com/in/jordinlissone/",
  email: "contact@jordinlissone.com",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const HERO_METRICS: Metric[] = [
  { value: "$2M+", label: "Regulatory Exposure Reduced" },
  { value: "500K+", label: "Sensitive Records Managed" },
  { value: "40+", label: "Compliance Gaps Identified" },
  { value: "10K+", label: "Users Secured" },
];

export const HERO_BIO =
  "Data Risk & Privacy professional specializing in regulatory compliance, data governance, and privacy risk across highly regulated industries. Experienced in DMA/DSA compliance, breach response, enterprise data lineage, and fraud risk assessment.";

export const ABOUT_TEXT =
  "I specialize in regulatory compliance, data governance, and privacy risk across highly regulated industries. My work has spanned EU Digital Markets Act and Digital Services Act compliance programs, breach response documentation and data remediation for healthcare organizations, enterprise data lineage mapping and governance implementations using Alation, OneTrust, and Collibra, and fraud risk assessments and security control design for large retailers and telecom clients.";

export const CORE_SKILLS = [
  "Data Governance",
  "Data Lineage",
  "Privacy & Compliance",
  "Regulatory Compliance",
  "Risk Assessments",
  "Breach Response",
  "Third Party Risk Management",
  "Alation",
  "OneTrust",
  "Collibra",
  "Process Automation",
  "Python",
  "NIST Framework",
];

export const EXPERIENCES: Experience[] = [
  {
    id: "pwc",
    company: "PwC",
    role: "Cyber Risk & Regulatory Associate",
    department: "Data Risk & Privacy",
    period: "Oct 2022 - Nov 2025",
    duration: "3 yrs 2 mos",
    location: "New York, NY",
    isCurrent: false,
    highlights: [
      "Led DMA compliance testing across 15+ web properties, identifying 40+ compliance gaps and reducing regulatory exposure by $2M+ in potential fines",
      "Produced 30+ client-ready compliance reports used by legal and product stakeholders for regulatory filings",
      "Developed breach response technical documentation for a healthcare client covering 3 data systems and 6 operational teams",
      "Built Python scripts to track file burn-down rates across 500K+ sensitive records, accelerating remediation timelines by 25%",
      "Coordinated metric collection across 10+ stakeholders for EU DSA VLOSE/VLOP Transparency Report, enabling on-time regulatory submission",
      "Designed conditional access baseline policies for 10,000+ users, reducing unauthorized access risk",
      "Mapped data lineage across 20+ systems for a student loan bank in Alation, increasing data discoverability by 40%",
      "Identified 8 high-risk fraud control gaps in a national retailer's gift card ecosystem, with remediation projected to reduce fraud losses 15-20% annually",
    ],
  },
  {
    id: "apple",
    company: "Apple",
    role: "Technical Specialist",
    period: "Sep 2019 - Oct 2022",
    duration: "3 yrs 10 mos",
    location: "Albany, NY Metropolitan Area",
    isCurrent: false,
    highlights: [
      "Resolved 2,500+ technical support cases across iOS/macOS with 93%+ customer satisfaction rating",
      "Delivered onboarding and technical training to 20+ new advisors",
      "Served as Tier 2 escalation point, reducing average resolution time by 20%",
    ],
  },
  {
    id: "iq4",
    company: "iQ4",
    role: "Cyber Threat Analyst",
    period: "Sep 2019 - Jan 2020",
    duration: "5 mos",
    location: "",
    isCurrent: false,
    highlights: [
      "Applied NIST framework across 5 organizational control domains",
      "Identified 15+ vulnerabilities, contributing to remediation plans that lowered risk posture",
      "Helped build an incident response playbook reducing simulated breach response time by ~40%",
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    id: "ms",
    degree: "M.S. Management Information Systems",
    school: "University at Albany, SUNY",
    dates: "2020 - 2022",
  },
  {
    id: "bs",
    degree: "B.S. Cyber Security / Information Science",
    school: "University at Albany, SUNY",
    dates: "2018 - 2021",
    activities:
      "CDO - SUNY Albany Cyber Defense Organization; CCDC 2019 competitor",
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "ai-gov",
    name: "AI Governance Certification",
    issuer: "LinkedIn",
    year: "2024",
  },
  {
    id: "privacyops",
    name: "PrivacyOps Certification",
    issuer: "Securiti AI",
    year: "2024",
  },
];
