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
    title: "xcode-discord-rpc",
    url: "https://yumi.to/xcode-discord-rpc",
    period: "october 2023",
    featured: true,
    kind: "oss",
    stars: 73,
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
    title: "dime",
    url: "https://github.com/rarfell/dimeApp",
    period: "since october 2023",
    featured: true,
    kind: "app",
    stars: 1600,
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
    title: "why privacy matters",
    url: "https://yumi.to/tedx",
    period: "late 2020",
    kind: "talk",
  },
];

export default projects;
