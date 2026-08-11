export const projects = [
  {
    number: '01',
    slug: 'zedprocure',
    title: 'ZedProcure',
    type: 'Full-stack platform',
    description:
      'A multi-tenant procurement platform built for Zambian organisations—connecting buyers, verified suppliers, bidding, escrow, invoicing, and accounting in one workflow.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
    github: 'https://github.com/JamieWamz/zedprocure',
    live: 'https://zedprocure.onrender.com',
    featured: true,
  },
  {
    number: '02',
    slug: 'mcp',
    title: 'Industrial Browser MCP',
    type: 'AI infrastructure',
    description:
      'An MCP server that helps AI agents browse technical documentation and extract structured diagnostic signals for predictive-maintenance workflows.',
    stack: ['TypeScript', 'Playwright', 'MCP'],
    github: 'https://github.com/JamieWamz/mcp-industrial-browser',
  },
  {
    number: '03',
    slug: 'goblox',
    title: 'Goblox',
    type: 'Developer tool',
    description:
      'A production-minded CLI task manager with clean architecture, persistent SQLite storage, migrations, filters, and export workflows.',
    stack: ['Go', 'Cobra', 'SQLite'],
    github: 'https://github.com/JamieWamz/goblox',
  },
  {
    number: '04',
    slug: 'crypto',
    title: 'ZMW Crypto Tracker',
    type: 'Data utility',
    description:
      'A real-time Python utility that converts cryptocurrency market data into Zambian Kwacha through external exchange-rate APIs.',
    stack: ['Python', 'REST APIs', 'OOP'],
    github: 'https://github.com/JamieWamz/zmw-crypto-tracker',
  },
]

export const skillGroups = [
  {
    label: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Go', 'C++', 'SQL'],
  },
  {
    label: 'Build',
    skills: ['React', 'Node.js', 'Express', 'Tailwind CSS', 'PostgreSQL', 'REST APIs'],
  },
  {
    label: 'Engineer',
    skills: ['Git', 'Docker', 'Playwright', 'GitHub Actions', 'Linux', 'Render'],
  },
]
