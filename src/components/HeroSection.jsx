"use client";

import { ArrowDown } from "lucide-react";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/ui/marquee";

export const HeroSection = () => {
  const skills = [
    {
      name: "HTML",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "JavaScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "MySQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Laravel",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 pb-32"
    >
      {/* --- Hero Text --- */}
      <div className="z-10 text-left max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight opacity-0 animate-fade-in">
          Hi, I&apos;m{" "}
          <span className="text-primary opacity-0 animate-fade-in-delay-1 font-['Rethink_Sans']">
            Charlene Mae
          </span>
        </h1>

        <p
          className="text-lg md:text-xl text-muted-foreground mt-6 opacity-0 animate-fade-in-delay-3"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          A passionate web developer who loves creating responsive and visually
          appealing websites. I enjoy turning ideas into interactive and
          user-friendly digital experiences.
        </p>

        <div className="pt-6 opacity-0 animate-fade-in-delay-4">
          <a
            href="https://rxresu.me/charlenemaerafael/resume-1"
            className="cosmic-button"
          >
            View Resume
          </a>
        </div>
      </div>

      {/* --- Skills Header & Description --- */}
      <div className="absolute bottom-36 left-0 w-full z-10 mb-4 px-6 md:px-16">
        <div className="w-full">
          <h2 className="text-left text-2xl sm:text-2xl md:text-4xl font-['Rethink_Sans'] font-bold text-[36px] text-primary opacity-0 animate-fade-in-delay-2 leading-snug">
            Skills
          </h2>
          <p
            className="text-left text-muted-foreground mt-2 text-[14px] sm:text-sm md:text-base lg:text-lg opacity-0 animate-fade-in-delay-3 leading-relaxed max-w-2xl"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            A versatile set of technologies I use to design and develop clean,
            responsive, and high-performing web applications that deliver great
            user experiences.
          </p>
        </div>
      </div>

      {/* --- Marquee Section --- */}
      <div className="absolute bottom-12 w-full overflow-hidden bg-background/50 py-6 opacity-0 animate-fade-in-delay-4">
        <Marquee>
          <MarqueeFade side="left" />
          <MarqueeFade side="right" />
          <MarqueeContent speed={40} pauseOnHover autoFill loop={0}>
            {skills.map((skill) => (
              <MarqueeItem
                key={skill.name}
                className="flex items-center justify-center h-20 w-20 mx-8"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="h-12 w-12 object-contain opacity-80 hover:opacity-100 transition filter grayscale invert brightness-125 contrast-90"
                />
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </Marquee>
      </div>

      {/* --- Scroll Indicator --- */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
