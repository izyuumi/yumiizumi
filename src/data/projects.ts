export interface Project {
  title: string;
  url: string;
  period: string;
  featured?: boolean;
  kind?: "research" | "oss" | "talk" | "app";
  role: string;
  description: string;
}

const projects: Project[] = [
  {
    title: "xcode-discord-rpc",
    url: "https://yumi.to/xcode-discord-rpc",
    period: "october 2023",
    featured: true,
    kind: "oss",
    role: "creator",
    description: "show xcode activity as discord rich presence",
  },
  {
    title: "html2md-rs",
    url: "https://github.com/izyuumi/html2md-rs",
    period: "since january 2024",
    featured: true,
    kind: "oss",
    role: "creator",
    description: "convert html into markdown with rust",
  },
  {
    title: "dime",
    url: "https://github.com/rarfell/dimeApp",
    period: "since october 2023",
    featured: true,
    kind: "app",
    role: "contributor",
    description: "open-source personal finance app for ios",
  },
  {
    title: "yumi.to",
    url: "https://yumi.to/_q",
    period: "october 2023",
    kind: "app",
    role: "creator",
    description: "personal url shortener and link hub",
  },
  {
    title: "onlynow",
    url: "https://onlynow.yumi.to/",
    period: "december 2023",
    kind: "app",
    role: "creator",
    description: "a focused view of what matters now",
  },
  {
    title: "why privacy matters",
    url: "https://yumi.to/tedx",
    period: "late 2020",
    kind: "talk",
    role: "speaker",
    description: "tedx talk on why digital privacy matters",
  },
];

export default projects;
