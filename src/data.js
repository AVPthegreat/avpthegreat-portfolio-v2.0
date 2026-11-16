// All site content lives here. Edit this file to update the page.

export const profile = {
  name: "Anant Vardhan Pandey",
  handle: "avpthegreat",
  location: "Bengaluru, India",
  tagline: "Founder of Faurus. I build AI agents and products that ship.",
  bio: [
    "I built and run Faurus, a coding and exam platform for colleges, on my own.",
    "I build AI agents: an on-call agent for production apps, a multi-agent code reviewer and a memory agent.",
    "I study at BITS Pilani (online, 3rd year) and Polaris School of Technology (2nd year) in Bengaluru.",
  ],
};

export const contact = {
  email: "contact@avpthegreat.tech",
  phone: "+91 8874497809",
  phoneHref: "tel:+918874497809",
  links: [
    { label: "GitHub", href: "https://github.com/AVPthegreat" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/avpthegreat/" },
  ],
};

export const experience = [
  {
    role: "Founder",
    org: "Faurus",
    href: "https://code.faurus.app",
    linkLabel: "code.faurus.app",
    summary: "Coding and exam platform for colleges, built and run solo.",
    points: [
      "10,000+ users",
      "2.3 lakh+ code submissions judged",
      "25 live sandboxed practice engines",
      "Live proctored exams",
      "Partnered with 5 IIITs and NITs",
    ],
  },
  // ADD MORE EXPERIENCE HERE: copy the object above and fill in real details only.
];

export const projects = [
  {
    name: "JaagteRaho",
    line: "AI on-call agent for production apps: catches errors, diagnoses them, proposes a proven fix, and calls you only for real incidents.",
    award: "HackGlobal 2026 (international hackathon): Top 10, special mention, MVP Builder award.",
    hardest: "Deciding when to wake a human.",
    tech: ["TypeScript", "Node.js", "Claude", "Telegram", "Twilio", "Docker"],
    links: [
      { label: "Live", href: "https://jaagteraho.139-84-156-94.sslip.io" },
      { label: "GitHub", href: "https://github.com/AVPthegreat/jaagteraho" },
    ],
  },
  {
    name: "Ido",
    line: "Multi-agent AI pull-request reviewer (a GitHub App) with a verifier and static analysis. Measured on 407 real PRs from 224 open-source projects, at about 2 cents per review.",
    hardest: "Staying quiet unless it can prove the bug.",
    tech: ["Python", "FastAPI", "Claude", "Semgrep", "Postgres", "Redis"],
    links: [
      { label: "Live", href: "https://ido-blond-eight.vercel.app" },
      { label: "See a live review", href: "https://github.com/AVPthegreat/minimi-bot/pull/4" },
    ],
  },
  {
    name: "Minimi Bot",
    line: "Chat agent with one tool (web search), built around dated memory: it re-checks “has this changed since last Tuesday?”, pings only at the right moment, and ties every price to a source. 112 of 113 live checks pass.",
    tech: ["TypeScript", "Node.js", "Claude", "SQLite"],
    links: [
      { label: "Live", href: "https://minimi.15-252-108-184.sslip.io" },
      { label: "GitHub", href: "https://github.com/AVPthegreat/minimi-bot" },
    ],
  },
  {
    name: "Faurus AI Viva",
    line: "Voice AI examiner grounded in each professor’s course material (RAG), with dual-camera proctoring over WebRTC. Used by students in a pilot.",
    tech: ["Python", "RAG", "Coqui TTS", "WebRTC"],
    links: [],
  },
  {
    name: "Systems from scratch",
    line: "A Docker-like container runtime (namespaces, cgroups, chroot) and an HTTP server over raw TCP sockets.",
    tech: [],
    links: [],
  },
];

export const earlierProjects = [
  { name: "Feel Mitra", line: "AI mental-wellbeing companion (2nd place at a hackathon)." },
  { name: "Career advisor", line: "A career advisor platform for students in India." },
  { name: "Chess rating manager", line: "A rating manager for local chess communities." },
];

export const achievements = [
  "HackGlobal 2026 (international): Top 10, special mention and MVP Builder award for JaagteRaho.",
  "2nd place with Feel Mitra, an AI wellness companion.",
  "Organiser and point of contact for campus tech initiatives with Y Combinator, OpenAI, Replit, Vibe Hack and Hackculture at Polaris School of Technology.",
  "Open-source pull requests to Failproof AI, Jitsi and Antrea (CNCF).",
  "Rated competitive chess player.",
];

export const skills = [
  { group: "Languages", items: "TypeScript, JavaScript, Python, Java, C++, SQL" },
  { group: "AI", items: "AI agents, multi-agent systems, agent evaluation, RAG, Claude API" },
  { group: "Frameworks", items: "Node.js, FastAPI, React, WebRTC" },
  { group: "Data & infra", items: "PostgreSQL, SQLite, Redis, MongoDB, Docker, Linux, AWS, Cloudflare" },
  { group: "Product", items: "Discovery, roadmaps, founder-led B2B sales" },
];
