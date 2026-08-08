export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'impact', label: 'Impact' },
  { id: 'skills', label: 'Skills' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'blogs', label: 'Blogs' },
  { id: 'contact', label: 'Contact' },
]

export const socialLinks = [
  { name: 'LinkedIn', icon: 'mdi:linkedin', url: 'https://www.linkedin.com/in/gangeshh-srivastava-648551107/' },
  { name: 'GitHub', icon: 'mdi:github', url: 'https://github.com/GangeshSrivastava' },
  { name: 'Medium', icon: 'mdi:medium', url: 'https://medium.com/@gang14.oo7' },
  { name: 'Email', icon: 'mdi:email-outline', url: 'mailto:gang14.oo7@gmail.com' },
]

export const impactStats = [
  { target: 8, suffix: '', label: 'Years of engineering experience', icon: 'mdi:calendar-clock' },
  { target: 20, suffix: '+', label: 'Projects delivered', icon: 'mdi:rocket-launch-outline' },
  { target: 10, suffix: 'M+', label: 'Requests supported', icon: 'mdi:server-network' },
  { target: 99.9, suffix: '%', label: 'Availability target', icon: 'mdi:shield-check-outline' },
]

export const skillCategories = [
  {
    title: 'Languages & Platforms',
    skills: [
      { name: 'Golang', icon: 'simple-icons:go', level: 95 },
      { name: 'AWS', icon: 'simple-icons:amazonwebservices', level: 75 },
      { name: 'Python', icon: 'simple-icons:python', level: 80 },
    ],
  },
  {
    title: 'Data Storage',
    skills: [
      { name: 'NoSQL (Cassandra, MongoDB)', icon: 'simple-icons:mongodb', level: 85 },
      { name: 'SQL (MySQL, Postgres)', icon: 'simple-icons:postgresql', level: 80 },
      { name: 'Redis', icon: 'simple-icons:redis', level: 80 },
    ],
  },
  {
    title: 'Others',
    skills: [
      { name: 'RabbitMQ', icon: 'simple-icons:rabbitmq', level: 85 },
      { name: 'GraphQL', icon: 'simple-icons:graphql', level: 70 },
      { name: 'DevOps', icon: 'mdi:docker', level: 65 },
    ],
  },
]

export const techIcons = [
  'simple-icons:go',
  'simple-icons:amazonwebservices',
  'simple-icons:docker',
  'simple-icons:kubernetes',
  'simple-icons:postgresql',
  'simple-icons:mongodb',
  'simple-icons:redis',
  'simple-icons:graphql',
  'simple-icons:python',
  'simple-icons:nginx',
  'simple-icons:githubactions',
  'simple-icons:linux',
]

export const projects = [
  {
    featured: true,
    meta: 'Real estate platform',
    title: 'Property Finder',
    icon: 'mdi:home-city-outline',
    text: 'A leading real estate marketplace helping people discover homes and connect with agents. Contributed to scalable backend services and APIs that support property search, listings, and a dependable user experience.',
    tags: ['Go', 'APIs', 'Scale'],
  },
  {
    meta: 'Government platform',
    title: 'GovDrive - NIC',
    icon: 'mdi:cloud-lock-outline',
    text: 'A secure personal-data platform for object storage, supporting upload, download, sharing, and synchronization workflows.',
    tags: ['Go', 'Security', 'Storage'],
  },
  {
    meta: 'Communications',
    title: 'Kaleyra',
    icon: 'mdi:message-processing-outline',
    text: 'Kaleyra is a CPaaS (communication platform as a service) provider for voice and messaging (SMS, WhatsApp, etc.).',
    tags: ['CPaaS', 'APIs', 'Scale'],
  },
  {
    meta: 'Data privacy',
    title: 'Ketch',
    icon: 'mdi:shield-account-outline',
    text: 'Ketch helps users manage their data on different integration apps. It allows users to access, update, and delete their information via cookie/session or consent acceptance as per GDPR law.',
    tags: ['GDPR', 'Privacy', 'Integrations'],
  },
  {
    meta: 'Health technology',
    title: 'HelpNow',
    icon: 'mdi:stethoscope',
    text: 'HelpNow is a doctor-patient platform for all types of medical concerns where patients and doctors can sign up, connect, and perform audio/video calling.',
    tags: ['Healthcare', 'WebRTC', 'APIs'],
  },
  {
    meta: 'Gaming platform',
    title: 'ESDL',
    icon: 'mdi:gamepad-variant-outline',
    text: 'E-Sport Development League is a gaming platform that allows users to register and request to join a team for a particular season according to their skills.',
    tags: ['Gaming', 'Matchmaking', 'Backend'],
  },
  {
    meta: 'Workforce platform',
    title: 'ShiftPixy',
    icon: 'mdi:briefcase-clock-outline',
    text: 'ShiftPixy (API & notification) is a web platform to provide multiple works/jobs as part-time or full-time in different schedules.',
    tags: ['Notifications', 'APIs', 'Scheduling'],
  },
]

export const blogs = [
  {
    title: 'Database Migration',
    icon: 'mdi:database-sync-outline',
    text: 'Widely used to improve data performance throughout the application. This blog discusses writing clean migration scripts.',
    url: 'https://medium.com/@gang14.oo7/database-migration-is-often-the-most-common-process-for-any-product-2cbee921b354',
  },
  {
    title: 'Unit Testing in Go',
    icon: 'mdi:test-tube',
    text: 'Unit testing is crucial to minimize errors during development. This blog highlights key practices for testing in Golang.',
    url: 'https://medium.com/@gang14.oo7/unit-test-golang-da6d18d9cf41',
  },
  {
    title: 'Understanding GDPR',
    icon: 'mdi:gavel',
    text: 'GDPR is an important regulation to protect user data. This article provides a quick overview of GDPR essentials.',
    url: 'https://medium.com/@gang14.oo7/general-data-protection-regulation-gdpr-035257171240',
  },
]

export const contactDetails = [
  { label: 'Email', value: 'gang14.oo7@gmail.com', href: 'mailto:gang14.oo7@gmail.com', icon: 'mdi:email-outline' },
  { label: 'Phone', value: '+91 8178854799', href: 'tel:+918178854799', icon: 'mdi:phone-outline' },
]

export const heroRoles = [
  'reliable systems',
  'scalable APIs',
  'cloud platforms',
  'data pipelines',
]

export const experience = [
  {
    role: 'Senior Go Engineer',
    company: 'TTF Technology',
    period: 'Aug 2025 – Jul 2026',
    type: 'Full-time',
    icon: 'mdi:home-city-outline',
    description: 'Senior Go engineer building scalable backend services and APIs for Property Finder, a leading real estate marketplace.',
    projects: ['Property Finder'],
    tags: ['Go', 'APIs', 'Microservices'],
  },
  {
    role: 'Senior Go Engineer',
    company: 'CIPL',
    period: 'Jul 2024 – May 2026',
    type: 'Full-time',
    icon: 'mdi:cloud-lock-outline',
    description: 'Senior Go engineer on GovDrive, a secure government personal-data platform for object storage, sharing, and synchronization.',
    projects: ['GovDrive'],
    tags: ['Go', 'Security', 'Storage'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Gopherslab',
    period: 'Nov 2019 – May 2024',
    type: 'Full-time',
    icon: 'mdi:domain',
    description: 'Delivered backend systems across CPaaS, healthcare, data privacy, and gaming platforms for multiple product teams.',
    projects: ['Kaleyra', 'HelpNow', 'Ketch', 'ESDL'],
    tags: ['Go', 'CPaaS', 'GDPR', 'APIs'],
  },
  {
    role: 'Software Engineer',
    company: 'Ondemand Techies',
    period: 'Sep 2018 – Oct 2019',
    type: 'Full-time',
    icon: 'mdi:briefcase-clock-outline',
    description: 'Built API and notification services for ShiftPixy, a workforce scheduling platform for part-time and full-time jobs.',
    projects: ['ShiftPixy'],
    tags: ['Go', 'APIs', 'Notifications'],
  },
]

export const processSteps = [
  {
    icon: 'mdi:magnify-scan',
    title: 'Discover',
    text: 'Understand requirements, constraints, and success metrics with stakeholders before writing code.',
  },
  {
    icon: 'mdi:draw-pen',
    title: 'Design',
    text: 'Architect services for scalability, observability, and clean API contracts.',
  },
  {
    icon: 'mdi:hammer-wrench',
    title: 'Build',
    text: 'Ship incrementally with tests, code reviews, and CI/CD pipelines.',
  },
  {
    icon: 'mdi:rocket-launch-outline',
    title: 'Operate',
    text: 'Monitor, iterate, and optimize based on real production data and feedback.',
  },
]
