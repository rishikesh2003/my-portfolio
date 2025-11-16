export const personalInfo = {
  name: "Kyle Hancock",
  location: "New Hampshire, USA. EST (UTC-5)",
  email: "kyle@kylehancock.com",
  github: "https://github.com/kahancock",
  linkedin: "https://www.linkedin.com/in/kyle-a-hancock/",
  profilePicture: "/profile.jpeg",
  heroDescription:
    "Results-driven Senior Technology Leader with demonstrated success designing technological strategies to drive business transformation, improve efficiencies, and reduce costs. Regarded as a thought leader with a strong record of successfully aligning goals, defining vision, and driving organizational growth through technology. Sound business and technical acumen with a passion for building and leading high-performance teams that execute on business strategies.",
};

export const workExperience = [
  {
    company: "EBPI dba Jaspr Health",
    location: "Remote, Washington State",
    position: "System Admin / Dev Ops",
    period: "November 2024 - August 2025",
    achievements: [
      "- Led the effort to prepare for the certification of our application on the Oracle Healthcare Marketplace. This included compliance documentation, conducting in-house security audits, and validation of our application.",
      "- Modernized CICD platform to streamline processes in a large monorepo, including: dynamic pipelines, incorporation of expo builds (previously manual), introduction of customized Bitbucket runners to decrease pipeline build speed by 50% in some steps, and custom Bitbucket pipes.",
      "- Created proof of concept connecting the DJANGO backend to Azure Entra ID and other SAML providers for the addition of enterprise SSO in our app.",
      "- Architected and implemented the securing of our DJANGO backend to be inaccessible from the public internet and only be accessible via Tailscale VPN while still running in microservices within AWS.",
      "- Migrate decentralized & distributed file storage for the organization to Office 365 & SharePoint. Consolidate nearly 100 SharePoint sites, independent Box & other file storage apps to 1 SharePoint Hub for improved usability, searchability, and compliance monitoring.",
      "- Implemented MDM to move the company from strictly BYOD to managed devices to enable compliance and reporting.",
      "- Implement SSO against Microsoft Entra ID to all native applications, including: AWS, Ketryx, Atlassian (Jira, Confluence, Bitbucket) & Tailscale VPN.",
      "- Author a System security plan to provide a consolidated document for Security and Compliance, and state areas in need of improvement.",
      "- Create user documentation for both internal and external parties, including: internal user guides for applications, tailored guides for deploying our application in highly regulated medical settings using: Microsoft Endpoint Manager, JAMF, Omnissa Workspace One & Apple Configuration Manager.",
    ],
  },
  {
    company: "Research Improving People's Lives (RIPL)",
    location: "Remote, Rhode Island",
    position: "Sr. Director of Technology",
    period: "November 2022 - September 2024",
    achievements: [
      "- Led the rapid scaling (2x in 3 months) of the development team to accommodate new & expanded application builds.",
      "- Work with RIPL partners to implement RIPL products, generally within their cloud environment. This required a high degree of collaboration and technical planning to ensure access to and only to necessary internal resources. ",
      "- Continued to manage all vendor relations, cloud accounts (AWS, GCP, Azure), and deployment of internal applications and tooling.",
      "- Led the adoption and transition of our production application stack from AWS only to cloud flexible via the use of containerization, migration from DynamoDB to Postgres SQL, and streamlining CICD.",
      "- Led complete redesign of Research Data Lake (RDL) / Secure Data Enclave (SDE) to become cloud-flexible (rather than AWS only) and offer greater scalability using customized JupyterHub Notebooks running on Kubernetes.",
    ],
  },
  {
    company: "Research Improving People's Lives (RIPL)",
    location: "Remote, Rhode Island",
    position: "Director of Technical Product",
    period: "January 2022 - November 2022",
    achievements: [
      "- Led the build and production deployment of “Pathways2College” application. The Los Angeles School District used this application to help incentivize, educate, and guide students in choosing post-secondary career or educational paths by providing monthly incentives. Built on AWS with an external payment processor. ",
      "- Led the technical debt assessment of the existing RIPL “Recommendation Engine” application and subsequent scoping, planning and implementing a new API using Python FastAPI.",
      "- Authored compliance documentation for Secure Data Enclave vetted against NIST 800-171 and validated by a 3rd party security firm.",
      "- Managed all vendor relations, cloud accounts (AWS, GCP, Azure), and deployment of internal applications and tooling.",
    ],
  },
    {
    company: "Research Improving People's Lives (RIPL)",
    location: "Remote, Rhode Island",
    position: "Associate Director of Technology",
    period: "March 2021 - December 2021",
    achievements: [
      "- Work with RIPL data scientists & engineers to standardize tooling used within SDE and across all Secure Data Enclave partner environments, including Python, R, PGSQL, and PowerBI.",
      "- Build and implement a customized version of the RIPL SDE to meet a partner requirement of utilizing Microsoft Azure rather than AWS.",
      "- Designed and completed the internal transition from GCP to Microsoft Azure, Office 365, and SharePoint.",
      "- Implemented internal best practices, such as security tooling, dynamic grouping, and backups, which were previously not used in the organization.",
      "- Provided support for both existing and new staff using RIPL’s internal tech stack (O365, Zoom, Slack, GitHub, etc.)",
    ],
  },
    {
    company: "SAU 81",
    location: "Hudson, New Hampshire",
    position: "Director of Technology",
    period: "2015 - March 2021",
    achievements: [
      "- Authored and updated the Technology Strategic Plan to bring an environment with no support, updates or maintenance into a fully modern and supported environment.",
      "- Planned and executed a complete network redesign encompassing seven sites with zero unplanned downtime. This was used to scale from hundreds of basic devices into 10k+ devices, ultimately supporting VoIP, Physical Security, End-user computing, and IoT. ",
      "- Developed data security plan aligned to NIST standards and consulted directly with state of New Hampshire to implement standards in newly passed data security law for education.",
      "- Built custom software to assign permissions to Individual Educational Plans (IEPs) within an administrative portal that improved access and privacy.",
      "- Implement, update, and manage numerous data systems, including the Student Information System (SIS), Learning Management System (LMS), Human Resources Data System (HRIS), and Enterprise Resource Planning System (ERP). Author data integrations to move data between systems seamlessly and effectively. ",
      "- Responsible for overseeing all technical staff and day-to-day operations. ",
      "- Managed a $1.5 million annual operating budget, including planning and adoption, as well as all vendor relations, RFPs, and Bids.",

    ],
  },

    {
    company: "Early Career",
    location: "New Hampshire",
    position: "Multiple Roles",
    period: "2005 - 2015",
    achievements: [
      "- Held multiple roles in IT, including Systems Administrator, Network Administrator, and IT Manager during my early career."
    ],
  },
 
];

export const education = [
      {
    institution: "University of Phoenix",
    location: "Phoenix, Arizona",
    degree: "Masters of Information Systems",
    period: "2009 - 2013",
    achievements: [

    ],
  },
  {
    institution: "Plymouth State University",
    location: "Plymouth, New Hampshire",
    degree: "BSc Information Technology",
    period: "2005 - 2008",
    achievements: [
      "Magna Cum Laude",
    ],
  }

];
export const skills = {
  programmingLanguages: [
    "Python",
    "PowerShell",
    "Bash",
    "R Script",
    "SQL",
    "NoSQL",
    "PHP",
    "JavaScript",
    "YAML",
  ],
  development: [
    "Django", 
    "FastAPI", 
    "SAML", 
    "REST APIs", 
    "GraphQL", 
    "OIDC",
    "HTML",
    "CSS",
  ],
  databaseAndStorage: ["Microsoft SQL", "PostgrseSQL", "DynamoDB", "Redis", "Oracle DB"],
  cloudAndDevOps: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub", "Bitbucket", "Ansible", "Kubernetes"],
  toolsAndServices: [
    "Office 365",
    "Google Workspace",
    "VSCode",
    "Jira",
    "Confluence",
    "Monday.com",
    "Microsoft Endpoint Manager (Intune)",
    "JAMF",
    "Omnissa Workspace One",
    "Apple Configuration Manager",
    "Tailscale",
    "Okta",
    "Microsoft Entra ID (Active Directory)",
    "JupyterHub",
    "PowerBI",
    "Tableau",
    "Slack",
    "Zoom",
    "Microsoft Teams",
    "SharePoint",
    "Git",
    



  ],
};

export const licenses = [
  {
    name: "AWS Certified Solution Architect – Associate",
    issuer: "Amazon Web Services (AWS)",
    date: "July 2023",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "June 2023",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    date: "November 2020",
  },
  {
    name: "Microsoft Certified Technology Specialist - Administering and Deploying System Center 2012 Configuration Manager",
    issuer: "Microsoft",
    date: "April 2014",
  },
  {
    name: "Cloud Digital Leader Certification",
    issuer: "Google",
    date: "September 2024",
  },
  {
    name: "GitHub Foundations",
    issuer: "GitHub",
    date: "August 2024",
  },
  {
    name: "Snagit",
    issuer: "TechSmith",
    date: "January 2025",
  },
  {
    name: "Humans Subjects/IRB Social and Behavioral Research - Basic/Refresher",
    issuer: "CITI Program",
    date: "March 2021",
  },
  {
    name: "The RCR for Social and Behavioral Researchers",
    issuer: "CITI Program",
    date: "March 2021",
  },
   {
    name: "Certified Education Technology Leader™ (CETL®)",
    issuer: "Consortium for School Networking (CoSN)",
    date: "February 2020",
  },
];
