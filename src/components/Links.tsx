"use client";

import { Button } from "@/components/ui/button";
import { Home, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { useEffect, useRef } from "react";

type SocialLink = {
  name: string;
  icon?: React.ReactNode;
  url: string;
};

const Twitter: SocialLink = {
  name: "X (Twitter)",
  icon: <TwitterIcon />,
  url: "https://x.com/izyuuumi",
};

const GitHub: SocialLink = {
  name: "GitHub",
  icon: <GithubIcon />,
  url: "https://github.com/izyuumi",
};

const LinkedIn: SocialLink = {
  name: "LinkedIn",
  icon: <LinkedinIcon />,
  url: "https://www.linkedin.com/in/yumiizumi/",
};

const CalDotCom: SocialLink = {
  name: "Cal.com",
  url: "https://yumi.to/cal",
};

const Website: SocialLink = {
  name: "Website",
  icon: (
    <div>
      <Home />
    </div>
  ),
  url: "https://yumi.to",
};

const socialLinks: SocialLink[] = [
  Website,
  GitHub,
  LinkedIn,
  Twitter,
  CalDotCom,
];

export default function OneLink() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 25;
      const rotateY = (centerX - x) / 25;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0) rotateY(0)";
      card.style.transition = "transform 0.5s ease";
    };

    const handleMouseEnter = () => {
      card.style.transition = "transform 0.1s ease";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-50 dark:bg-zinc-900 p-4">
      <div
        ref={cardRef}
        className="card-container relative w-full max-w-md overflow-hidden rounded-xl bg-white dark:bg-black p-8 shadow-sm transition-transform duration-300"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div className="flex flex-col items-center space-y-8">
          <div className="animate-fade-in relative h-24 w-24 overflow-hidden rounded-full">
            <img
              src="/pfp.jpg"
              alt="Profile Picture"
              width={96}
              height={96}
              className="object-cover"
            />
          </div>

          <div
            className="animate-fade-in text-center"
            style={{ animationDelay: "100ms" }}
          >
            <section className="text-sm font-medium">
              <span className="text-slate-500 dark:text-zinc-400">泉 優海</span>
            </section>
            <h1 className="text-2xl font-medium text-slate-800 dark:text-zinc-100">
              Yumi Izumi
            </h1>
            <p className="mt-2 text-sm text-slate-500 dark:text-zinc-400">
              Rustacean 🦀 in Kyoto
            </p>
          </div>

          <div className="mt-2 grid w-full gap-3">
            {socialLinks.map((link, index) => (
              <Button
                key={link.name}
                variant="outline"
                className="animate-slide-up flex h-12 items-center justify-center gap-3 rounded-lg border border-slate-200 dark:border-zinc-100 bg-white dark:bg-black px-4 text-slate-700 dark:text-zinc-200 transition-all hover:border-slate-300 dark:hover:border-zinc-50 hover:bg-slate-50 dark:hover:bg-zinc-800 hover:shadow-sm"
                style={{ animationDelay: `${200 + index * 50}ms` }}
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              </Button>
            ))}
          </div>
          <p
            className="animate-fade-in mt-2 text-xs text-slate-400 dark:text-zinc-400"
            style={{ animationDelay: "600ms" }}
          >
            izyuumi
          </p>
        </div>
      </div>
    </div>
  );
}
