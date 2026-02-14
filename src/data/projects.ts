export interface Project {
  title: string;
  url: string;
  period: string;
  featured?: boolean;
  kind?: "research" | "oss" | "talk" | "app";
  stars?: number;
}

const projects: Project[] = [
  {
    title: "Jailbreaking LLM Safeguards Research",
    url: "https://docs.google.com/presentation/d/1z4dqKKMfw3dYWaXNm-hmQ5vag2vlJF5-pHJg4wVRCt4/edit?usp=sharing",
    period: "may through august of 2024",
    featured: true,
    kind: "research",
  },
  {
    title: "LAME",
    url: "https://github.com/izyumidev/LAME",
    period: "since january 2024",
    featured: true,
    kind: "oss",
  },
  {
    title: "html2md-rs",
    url: "https://github.com/izyuumi/html2md-rs",
    period: "since january 2024",
    featured: true,
    kind: "oss",
    stars: 26,
  },
  {
    title: "yumi.to",
    url: "https://yumi.to/_q",
    period: "october 2023",
    kind: "app",
  },
  {
    title: "onlynow",
    url: "https://onlynow.yumi.to/",
    period: "december 2023",
    kind: "app",
  },
  {
    title: "xcode-discord-rpc",
    url: "https://yumi.to/xcode-discord-rpc",
    period: "october 2023",
    featured: true,
    kind: "oss",
    stars: 73,
  },
  {
    title: "dime",
    url: "https://github.com/rarfell/dimeApp",
    period: "since october 2023",
    kind: "app",
  },
  {
    title: "why privacy matters",
    url: "https://yumi.to/tedx",
    period: "late 2020",
    kind: "talk",
  },
];

export default projects;
