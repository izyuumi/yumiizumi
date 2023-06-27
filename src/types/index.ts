type SkillValue = Readonly<
  "react" | "ts" | "ionic" | "astro" | "php" | "mysql"
>;

type Skill = Readonly<{
  value: SkillValue;
  label: string;
  svg: string;
}>;

type Work = Readonly<{
  title: string;
  role?: string;
  period?: string;
  link?: string;
  skills?: SkillValue[];
  description?: string;
}>;

type Social = Readonly<{
  for: string;
  link: string;
  svg: string;
  ariaLabel: string;
}>;
