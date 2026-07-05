export const contact = {
  email: "albertovazquez86av@gmail.com",
  github: "https://github.com/JesusV109",
  linkedin: "https://www.linkedin.com/in/jesus-vazquez-02b450202/",
};

export const profile = {
  name: "Jesus Vazquez",
  headline: "Software Engineer / IT Assistant — PDR",
  summary: "Software engineer and IT assistant working across full-stack internal software, business systems, data, warehouse operations, and infrastructure.",
};

export type Project = {
  title: string;
  category: string;
  description: string;
  details: string[];
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured?: boolean;
  hackathon?: boolean;
  label: string;
  status: string;
  problem: string;
  built: string;
  architecture?: string[];
};

export const projects: Project[] = [
  {
    title: "Ordex",
    label: "Built for operations",
    status: "type: logistics product",
    category: "Full-Stack Logistics App",
    description: "A full-stack warehouse logistics platform for tracking orders, pallets, inventory, locations, and warehouse workflows.",
    problem: "Warehouse data and daily actions need one searchable operating view.",
    built: "Orders, pallets, locations, inventory, search, and Firebase-backed workflows.",
    details: [
      "Built with Next.js, TypeScript, Firebase, Prisma, and Tailwind CSS.",
      "Includes order tracking, pallet and location workflows, search, and a warehouse-focused interface.",
    ],
    tags: ["Next.js", "TypeScript", "Firebase", "Prisma", "Tailwind"],
    github: "https://github.com/JesusV109/Ordex",
    demo: "Demo available on request",
    image: "/ordex.png",
    featured: true,
  },
  {
    title: "PDR Labeling System",
    label: "Internal systems",
    status: "status: deployed",
    category: "Internal Label Printing / Business System",
    description: "Internal label-printing architecture connecting a WPF desktop app, API, SQL Server, worker service, and BarTender/Zebra printing.",
    problem: "Reliable label generation has to cross desktop, data, service, and printer layers.",
    built: "Print orchestration, previews, reprints, printer configuration, and label logic.",
    architecture: ["WPF", "API", "SQL", "Worker", "BarTender", "Zebra"],
    details: [
      "Designed around a WPF app → API → SQL Server → worker → BarTender workflow.",
      "Supports print jobs, dynamic previews, printer configuration, reprints, SSCC logic, and carton, pallet, and item labels.",
    ],
    tags: ["C#", ".NET", "WPF", "SQL Server", "REST API", "BarTender", "Zebra Printers"],
    featured: true,
  },
  {
    title: "AI Ad Factory",
    label: "AI workflow",
    status: "type: ai workflow",
    category: "AI Automation Pipeline",
    description: "A self-hosted AI ad generation and review pipeline controlled through Telegram.",
    problem: "Generated creative needs repeatable review, scoring, and revision controls.",
    built: "A multi-agent pipeline with human approval and persistent revision memory.",
    architecture: ["Prompt", "Agents", "Score", "Review", "Store"],
    details: [
      "Combines script generation, creative direction, scoring, revision memory, and PostgreSQL storage.",
      "Uses multiple AI agents with explicit approve, reject, and revise review controls.",
    ],
    tags: ["n8n", "PostgreSQL", "Docker", "Telegram Bot API", "AI Agents", "Automation"],
    featured: true,
  },
  {
    title: "Kalshi BTC Research Bot",
    label: "Research bot",
    status: "type: research",
    category: "Prediction Market Research / Automation",
    description: "A Python research bot for BTC hourly prediction-market analysis and paper-trading experiments.",
    problem: "Strategy ideas need structured evidence before they become trading decisions.",
    built: "Candidate tracking, scoring, risk rules, paper positions, PnL, and research logs.",
    details: [
      "Tracks candidates, near passes, rejections, positions, PnL, and research logs.",
      "Applies scoring and risk rules to datasets for data-backed strategy testing.",
    ],
    tags: ["Python", "Pandas", "DuckDB", "CSV", "Ubuntu", "Automation"],
  },
  {
    title: "Hole in the Wall",
    label: "Hackathon",
    status: "type: rapid prototype",
    category: "HackPrinceton Hackathon Project",
    description: "A HackPrinceton hackathon project built as a fast, humorous prototype under time constraints.",
    problem: "Shape and demonstrate a playful product idea within a short hackathon deadline.",
    built: "Frontend and product flow with Firebase-backed functionality.",
    details: [
      "Built a rapid prototype in a team hackathon environment.",
      "Contributed to frontend/product flow and helped shape the project idea under a short deadline.",
      "Used a modern Next.js/React stack with Firebase-backed functionality.",
      "Practiced fast debugging, UI iteration, Git collaboration, and demo preparation.",
    ],
    tags: ["Next.js", "React", "Firebase", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/EHout20/hackprinceton",
    hackathon: true,
  },
  {
    title: "OptiBuy",
    label: "Hackathon / AI Shopping",
    status: "type: rapid prototype",
    category: "Columbia Hackathon Project",
    description: "A hackathon web app that helps users compare product prices, review price history, and use an AI shopping assistant to find better deals.",
    problem: "Bring product search, comparison, price history, and shopping assistance into one demo-ready flow.",
    built: "A full-stack prototype spanning comparison, analytics, alerts, and AI-assisted shopping.",
    details: [
      "Built a hackathon prototype for comparing prices across multiple ecommerce platforms.",
      "Worked on full-stack product flow involving search, comparison, price history, and AI assistant features.",
      "Used Next.js, TypeScript, Tailwind CSS, Prisma, Recharts, and authentication/data validation tools.",
      "Practiced rapid product development, team collaboration, and demo-focused execution.",
    ],
    tags: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui", "Prisma", "SQLite / PostgreSQL", "Recharts", "NextAuth.js", "Zod", "Lucide React"],
    github: "https://github.com/JennyXxie/OptiBuy",
    hackathon: true,
  },
  {
    title: "Carbon Footprint (HackRU)",
    label: "Hackathon project",
    status: "type: rapid prototype",
    category: "HackRU / Full-Stack Application",
    description: "A team-built application that uses Google Maps transit data to calculate transportation emissions and rank users.",
    problem: "Make transportation emissions easier to understand through a practical, time-limited prototype.",
    built: "Full-stack features, UI, data flow, and a project presentation under hackathon constraints.",
    details: [
      "Built under time constraints with a small team using Next.js, Prisma, Tailwind CSS, and Google Maps data.",
      "Contributed to rapid prototyping, debugging, full-stack integration, and presenting the finished project.",
    ],
    tags: ["Next.js", "Prisma", "Tailwind CSS", "Google Maps", "HackRU"],
    github: "https://github.com/JesusV109/hackru",
    hackathon: true,
  },
  {
    title: "safeCity",
    label: "Full-stack app",
    status: "type: public platform",
    category: "Incident Reporting Platform",
    description: "A full-stack incident reporting platform with interactive map visualization and an admin dashboard.",
    problem: "Community incident reports need a clear geographic and administrative workflow.",
    built: "Map-based reporting, incident visualization, and an administration interface.",
    details: ["Built as a practical public-safety and community reporting application."],
    tags: ["Next.js", "Leaflet / Maps", "Full-Stack"],
    github: "https://github.com/JesusV109/safeCity",
    image: "/safecity.svg",
  },
  {
    title: "Homelab & Linux Infrastructure",
    label: "Homelab",
    status: "type: homelab",
    category: "Infrastructure / Systems",
    description: "Hands-on Linux and homelab work spanning self-hosted services, virtualization, containers, networking, and remote development.",
    problem: "Self-hosted services need dependable routing, certificates, isolation, and access.",
    built: "A working infrastructure lab for deploying, observing, and troubleshooting services.",
    architecture: ["Linux", "Docker", "Proxy", "SSL", "Service"],
    details: [
      "Troubleshoots Linux servers, Apache, SSL, reverse proxies, and remote connectivity.",
      "Runs services with Proxmox and Docker and develops remotely over SSH.",
    ],
    tags: ["Linux", "Ubuntu", "Proxmox", "Docker", "SSH", "Apache", "SSL", "Reverse Proxy"],
  },
];

export const skills = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Java", "C#", "SQL", "HTML", "CSS"] },
  { category: "Frameworks / Frontend", items: ["Next.js", "React", "Node.js", "Tailwind CSS", "Prisma"] },
  { category: "Backend / Desktop", items: [".NET", "WPF", "REST APIs", "SQL Server", "Stored Procedures"] },
  { category: "AI / Data", items: ["AI Agents", "Automation Pipelines", "Pandas", "DuckDB", "Research Logging", "Prompt Engineering"] },
  { category: "Infrastructure", items: ["Linux", "Ubuntu", "Proxmox", "Docker", "SSH", "Apache", "Reverse Proxy", "SSL", "Windows Server", "Vercel"] },
  { category: "Business Systems", items: ["Dynamics 365 Business Central", "SSRS", "SQL Agent", "EDI", "SFTP", "BarTender", "Zebra Printers"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code", "PowerShell", "Bash", "n8n"] },
];

export const experiences = [
  {
    role: "Software Engineer / IT Assistant",
    company: "PDR",
    bullets: [
      "Build and maintain internal applications using C#, .NET, APIs, SQL Server, and warehouse and business workflow logic.",
      "Create API endpoints and backend workflows for internal tools used in logistics, reporting, label printing, and operations.",
      "Code and support Microsoft Dynamics 365 Business Central customizations, workflows, permissions, reports, data issues, and warehouse processes.",
      "Develop and troubleshoot SQL Server queries, stored procedures, SSRS reports, SQL Agent jobs, and operational data flows.",
      "Support EDI/SFTP workflows, file movement jobs, imports, exports, BarTender, Zebra printers, and print-job troubleshooting.",
      "Troubleshoot Windows and Linux servers, Apache, reverse proxies, SSL, hosted XML/reporting pages, and remote connectivity.",
      "Work directly with business users to turn warehouse, reporting, and operations problems into software fixes and internal tools.",
    ],
  },
  {
    role: "Web Developer",
    company: "YBF Beauty",
    bullets: [
      "Built and maintained Shopify storefront pages, product listings, and catalog updates.",
      "Improved responsive UI/UX and supported ecommerce content updates.",
      "Managed product and media assets while implementing frontend layout changes.",
    ],
  },
];
