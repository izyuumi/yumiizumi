"use client";

import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useEffect, useRef } from "react";

type SocialLink = {
  name: string;
  icon: React.ReactNode;
  url: string;
};

const Instagram: SocialLink = {
  name: "Instagram",
  icon: (
    <div className="text-pink-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="256"
        height="256"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 256 256"
      >
        <path
          fill="currentColor"
          d="M128 23.064c34.177 0 38.225.13 51.722.745 12.48.57 19.258 2.655 23.769 4.408 5.974 2.322 10.238 5.096 14.717 9.575 4.48 4.479 7.253 8.743 9.575 14.717 1.753 4.511 3.838 11.289 4.408 23.768.615 13.498.745 17.546.745 51.723 0 34.178-.13 38.226-.745 51.723-.57 12.48-2.655 19.257-4.408 23.768-2.322 5.974-5.096 10.239-9.575 14.718-4.479 4.479-8.743 7.253-14.717 9.574-4.511 1.753-11.289 3.839-23.769 4.408-13.495.616-17.543.746-51.722.746-34.18 0-38.228-.13-51.723-.746-12.48-.57-19.257-2.655-23.768-4.408-5.974-2.321-10.239-5.095-14.718-9.574-4.479-4.48-7.253-8.744-9.574-14.718-1.753-4.51-3.839-11.288-4.408-23.768-.616-13.497-.746-17.545-.746-51.723 0-34.177.13-38.225.746-51.722.57-12.48 2.655-19.258 4.408-23.769 2.321-5.974 5.095-10.238 9.574-14.717 4.48-4.48 8.744-7.253 14.718-9.575 4.51-1.753 11.288-3.838 23.768-4.408 13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155 3.555 52.297 1.392 61.602.77 75.226.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774.622 13.625 2.785 22.93 5.95 31.071 3.27 8.417 7.647 15.556 14.763 22.672 7.116 7.116 14.254 11.492 22.672 14.763 8.142 3.165 17.446 5.328 31.07 5.95 13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95 8.418-3.27 15.556-7.647 22.672-14.763 7.116-7.116 11.493-14.254 14.764-22.672 3.164-8.142 5.328-17.446 5.95-31.07.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0Zm0 62.27C91.698 62.27 62.27 91.7 62.27 128c0 36.302 29.428 65.73 65.73 65.73 36.301 0 65.73-29.428 65.73-65.73 0-36.301-29.429-65.73-65.73-65.73Zm0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667-19.103 42.667-42.667 42.667Zm83.686-110.994c0 8.484-6.876 15.36-15.36 15.36-8.483 0-15.36-6.876-15.36-15.36 0-8.483 6.877-15.36 15.36-15.36 8.484 0 15.36 6.877 15.36 15.36Z"
        />
      </svg>
    </div>
  ),
  url: "https://www.instagram.com/izyuumi/",
};

const Twitter: SocialLink = {
  name: "X (Twitter)",
  icon: (
    <div className="text-blue-400">
      <svg
        viewBox="0 0 256 209"
        width="256"
        height="209"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
      >
        <path
          d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
          fill="#55acee"
        />
      </svg>
    </div>
  ),
  url: "https://x.com/izyuuumi",
};

const GitHub: SocialLink = {
  name: "GitHub",
  icon: (
    <svg
      width="1024"
      height="1024"
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
        transform="scale(64)"
        fill="#1B1F23"
      />
    </svg>
  ),
  url: "https://github.com/izyuumi",
};

const LinkedIn: SocialLink = {
  name: "LinkedIn",
  icon: (
    <svg
      width="256"
      height="256"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 256"
    >
      <path
        d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
        fill="#0A66C2"
      />
    </svg>
  ),
  url: "https://www.linkedin.com/in/yumiizumi/",
};

const CalDotCom: SocialLink = {
  name: "Cal.com",
  icon: (
    <div className="text-blue-500">
      <svg
        width="101"
        height="22"
        viewBox="0 0 101 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0582 20.817C4.32115 20.817 0 16.2763 0 10.6704C0 5.04589 4.1005 0.467773 10.0582 0.467773C13.2209 0.467773 15.409 1.43945 17.1191 3.66311L14.3609 5.96151C13.2025 4.72822 11.805 4.11158 10.0582 4.11158C6.17833 4.11158 4.04533 7.08268 4.04533 10.6704C4.04533 14.2582 6.38059 17.1732 10.0582 17.1732C11.7866 17.1732 13.2577 16.5566 14.4161 15.3233L17.1375 17.7151C15.501 19.8453 13.2577 20.817 10.0582 20.817Z"
          fill="#292929"
        />
        <path
          d="M29.0161 5.88601H32.7304V20.4612H29.0161V18.331C28.2438 19.8446 26.9566 20.8536 24.4927 20.8536C20.5577 20.8536 17.4133 17.4341 17.4133 13.2297C17.4133 9.02528 20.5577 5.60571 24.4927 5.60571C26.9383 5.60571 28.2438 6.61477 29.0161 8.12835V5.88601ZM29.1264 13.2297C29.1264 10.95 27.5634 9.06266 25.0995 9.06266C22.7274 9.06266 21.1828 10.9686 21.1828 13.2297C21.1828 15.4346 22.7274 17.3967 25.0995 17.3967C27.5451 17.3967 29.1264 15.4907 29.1264 13.2297Z"
          fill="#292929"
        />
        <path d="M35.3599 0H39.0742V20.4427H35.3599V0Z" fill="#292929" />
        <path
          d="M40.7291 18.5182C40.7291 17.3223 41.6853 16.3132 42.9908 16.3132C44.2964 16.3132 45.2158 17.3223 45.2158 18.5182C45.2158 19.7515 44.278 20.7605 42.9908 20.7605C41.7037 20.7605 40.7291 19.7515 40.7291 18.5182Z"
          fill="#292929"
        />
        <path
          d="M59.4296 18.1068C58.0505 19.7885 55.9543 20.8536 53.4719 20.8536C49.0404 20.8536 45.7858 17.4341 45.7858 13.2297C45.7858 9.02528 49.0404 5.60571 53.4719 5.60571C55.8623 5.60571 57.9402 6.61477 59.3193 8.20309L56.4508 10.6136C55.7336 9.71667 54.7958 9.04397 53.4719 9.04397C51.0999 9.04397 49.5553 10.95 49.5553 13.211C49.5553 15.472 51.0999 17.378 53.4719 17.378C54.9062 17.378 55.8991 16.6306 56.6346 15.6215L59.4296 18.1068Z"
          fill="#292929"
        />
        <path
          d="M59.7422 13.2297C59.7422 9.02528 62.9968 5.60571 67.4283 5.60571C71.8598 5.60571 75.1144 9.02528 75.1144 13.2297C75.1144 17.4341 71.8598 20.8536 67.4283 20.8536C62.9968 20.8349 59.7422 17.4341 59.7422 13.2297ZM71.3449 13.2297C71.3449 10.95 69.8003 9.06266 67.4283 9.06266C65.0563 9.04397 63.5117 10.95 63.5117 13.2297C63.5117 15.4907 65.0563 17.3967 67.4283 17.3967C69.8003 17.3967 71.3449 15.4907 71.3449 13.2297Z"
          fill="#292929"
        />
        <path
          d="M100.232 11.5482V20.4428H96.518V12.4638C96.518 9.94119 95.3412 8.85739 93.576 8.85739C91.921 8.85739 90.7442 9.67958 90.7442 12.4638V20.4428H87.0299V12.4638C87.0299 9.94119 85.8346 8.85739 84.0878 8.85739C82.4329 8.85739 80.9802 9.67958 80.9802 12.4638V20.4428H77.2659V5.8676H80.9802V7.88571C81.7525 6.31607 83.15 5.53125 85.3014 5.53125C87.3425 5.53125 89.0525 6.5403 89.9903 8.24074C90.9281 6.50293 92.3072 5.53125 94.8079 5.53125C97.8603 5.54994 100.232 7.86702 100.232 11.5482Z"
          fill="#292929"
        />
      </svg>
    </div>
  ),
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
  Instagram,
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
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-50 p-4">
      <div
        ref={cardRef}
        className="card-container relative w-full max-w-md overflow-hidden rounded-xl bg-white p-8 shadow-sm transition-transform duration-300"
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
              <span className="text-slate-500">泉 優海</span>
            </section>
            <h1 className="text-2xl font-medium text-slate-800">Yumi Izumi</h1>
            <p className="mt-2 text-sm text-slate-500">Rustacean 🦀 in Kyoto</p>
          </div>

          <div className="mt-2 grid w-full gap-3">
            {socialLinks.map((link, index) => (
              <Button
                key={link.name}
                variant="outline"
                className="animate-slide-up flex h-12 items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white px-4 text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm"
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
            className="animate-fade-in mt-2 text-xs text-slate-400"
            style={{ animationDelay: "600ms" }}
          >
            izyuumi
          </p>
        </div>
      </div>
    </div>
  );
}
