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
    role: "forward deployed engineer",
    location: "kyoto, japan",
    period: "jan 2025 – present",
    details: [
      "lead engineer on system migration for the <strong>japanese national police agency</strong> — analyzing 6 codebases (one 4m lines, originally 700 engineers)",
      "pioneered ai-agent-driven migration using <strong>claude code</strong> and <strong>codex</strong> — 3 engineers analyzed half the portfolio in 3 months",
      "manage <strong>128-node h100/h200 gpu cluster</strong> running self-hosted llms via vllm and litellm",
      "sold <strong>80+ gpu node contracts</strong> at nvidia gtc 2025",
      "built a real-time <strong>political sentiment platform</strong> — knowledge graph over live x data with postgres, next.js, and three.js",
    ],
  },
];

export default experiences;
