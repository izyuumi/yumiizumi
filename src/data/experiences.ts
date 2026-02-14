export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  details: string[];
}

const experiences: Experience[] = [
  {
    id: "exp-fde",
    company: "rutilea, inc.",
    role: "software engineer (forward deployed)",
    location: "kyoto, japan",
    period: "jan 2025 – present",
    details: [
      "lead engineer on system migration for the <strong>japanese national police agency</strong> — analyzing 6 codebases (one 4m lines, originally 700 engineers)",
      "pioneered ai-agent-driven migration using <strong>claude code</strong> and <strong>codex</strong> — 3 engineers analyzed half the portfolio in 3 months",
      "manage <strong>128-node h100/h200 gpu cluster</strong> running self-hosted llms via vllm and litellm",
      "sold <strong>80+ gpu node contracts</strong> at nvidia gtc 2025",
      "built a real-time <strong>political sentiment platform</strong> — knowledge graph over live x data with postgres, next.js, and three.js",
      "as intern (may–aug 2024): built a production <strong>automated call center backend in rust</strong> powered by gpt-4o, claude 3.5, llama 3, and gemma 2",
    ],
  },
  {
    id: "exp-rit",
    company: "rochester institute of technology",
    role: "cybervsr research assistant",
    location: "remote",
    period: "may 2024 – aug 2024",
    details: [
      "conducted 3-month research on <strong>llm safeguarding and jailbreaking</strong> under dr. j. yang",
      "successfully jailbroken <strong>gpt-4o, gpt-3.5 turbo, llama 2, and llama 3</strong> using prompting techniques (dan variants, godmode)",
      "studied llm space representations of queries and protection methods against harmful prompts",
    ],
  },
  {
    id: "exp-swappify",
    company: "swappify",
    role: "co-founder & cto",
    location: "university park, pa",
    period: "mar 2023 – mar 2024",
    details: [
      "led <strong>11 engineers</strong> building a full-stack mobile app for second-hand clothing trades",
      "built with ionic/react/typescript, supabase/postgresql, and deno",
      "managed the full development lifecycle with weekly syncs between engineering and business teams",
    ],
  },
];

export default experiences;
