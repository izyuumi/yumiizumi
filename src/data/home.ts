export interface HomeCopy {
  title: string;
  description: string;
  heading: string;
  lead: string;
  body: string;
  actions: { label: string; href: string }[];
  workHeading: string;
  work: { title: string; href?: string; body: string }[];
  writingHeading: string;
  writingNote?: string;
  writingAll: string;
  moreHeading: string;
  more: { label: string; href: string; note?: string }[];
  theme: { group: string; system: string; light: string; dark: string };
}

/** Slugs of two published posts featured on the homepage. */
export const featuredPostSlugs = [
  "how-i-think-about-privacy",
  "ai-restaurant-reservation",
] as const;

export const en: HomeCopy = {
  title: "Yumi Izumi",
  description:
    "Yumi Izumi — forward-deployed engineer working on AI systems, LLM safeguards, and privacy.",
  heading: "Privacy and AI",
  lead: "I'm Yumi, a forward-deployed engineer with a cybersecurity background.",
  body: "I build AI systems for institutions, research LLM safeguards, and care about keeping people in control of their data.",
  actions: [
    { label: "get in touch", href: "https://yumi.to/cal" },
    { label: "github", href: "https://github.com/izyuumi" },
  ],
  workHeading: "selected work",
  work: [
    {
      title: "AI in production",
      href: "https://rutilea.com",
      body: "At RUTILEA I lead a system migration for Japanese government agencies and manage a 128-node H100/H200 cluster running self-hosted LLMs.",
    },
    {
      title: "LLM safeguards",
      body: "As a CyberVSR research assistant at Rochester Institute of Technology, I studied jailbreaks and the protections models use against harmful prompts.",
    },
    {
      title: "Why privacy matters",
      href: "https://yumi.to/tedx",
      body: "A TEDx talk on digital privacy.",
    },
  ],
  writingHeading: "writing",
  writingAll: "all posts",
  moreHeading: "elsewhere",
  more: [
    { label: "about", href: "/about" },
    { label: "writing", href: "/blog" },
    { label: "projects", href: "https://github.com/izyuumi" },
    { label: "email", href: "mailto:mail@yumi.to" },
  ],
  theme: { group: "Theme", system: "System", light: "Light", dark: "Dark" },
};

export const ja: HomeCopy = {
  title: "Yumi Izumi",
  description:
    "Yumi Izumi — AIシステム、LLMの安全性、プライバシーに取り組むフォワードデプロイドエンジニア。",
  heading: "プライバシーとAI",
  lead: "Yumiです。サイバーセキュリティ出身のフォワードデプロイドエンジニアです。",
  body: "組織向けのAIシステムをつくり、LLMの安全性を研究しています。自分のデータを自分で管理できることを大切にしています。",
  actions: [
    { label: "連絡する", href: "https://yumi.to/cal" },
    { label: "GitHub", href: "https://github.com/izyuumi" },
  ],
  workHeading: "主な仕事",
  work: [
    {
      title: "実運用のAI",
      href: "https://rutilea.com",
      body: "RUTILEAで、官公庁向けのシステム移行を主導し、自社運用LLMのためのH100/H200 128ノードのクラスタを管理しています。",
    },
    {
      title: "LLMの安全性",
      body: "ロチェスター工科大学CyberVSRの研究アシスタントとして、ジェイルブレイクと有害なプロンプトへの防御手法を研究しました。",
    },
    {
      title: "プライバシーはなぜ大切か",
      href: "https://yumi.to/tedx",
      body: "デジタルプライバシーについてのTEDxトーク。",
    },
  ],
  writingHeading: "書いたもの",
  writingNote: "記事はすべて英語です。",
  writingAll: "記事一覧",
  moreHeading: "リンク",
  more: [
    { label: "経歴とプロジェクト", href: "/about", note: "英語" },
    { label: "ブログ", href: "/blog", note: "英語" },
    { label: "GitHub", href: "https://github.com/izyuumi" },
    { label: "メール", href: "mailto:mail@yumi.to" },
  ],
  theme: {
    group: "テーマ",
    system: "システム",
    light: "ライト",
    dark: "ダーク",
  },
};
