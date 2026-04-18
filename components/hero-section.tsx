"use client";

import { useEffect, useState } from "react";
import { Radio, Headphones, Waves, Zap } from "lucide-react";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
          style={{
            animation: mounted ? "pulse 4s ease-in-out infinite" : "none",
          }}
        />
        <div
          className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-accent/20 blur-3xl"
          style={{
            animation: mounted ? "pulse 5s ease-in-out infinite 1s" : "none",
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl"
          style={{
            animation: mounted ? "pulse 6s ease-in-out infinite 2s" : "none",
          }}
        />

        {/* Sound wave lines */}
        <div className="absolute bottom-0 left-0 right-0 flex h-32 items-end justify-center gap-1 opacity-20">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="w-1 rounded-full bg-primary"
              style={{
                height: mounted ? `${Math.random() * 100}%` : "20%",
                animation: mounted
                  ? `soundWave ${0.5 + Math.random() * 0.5}s ease-in-out infinite alternate`
                  : "none",
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>

        {/* Floating icons */}
        <div
          className="absolute left-[10%] top-[30%] text-primary/30"
          style={{
            animation: mounted ? "float 6s ease-in-out infinite" : "none",
          }}
        >
          <Headphones className="h-12 w-12 md:h-16 md:w-16" />
        </div>
        <div
          className="absolute right-[15%] top-[20%] text-accent/30"
          style={{
            animation: mounted ? "float 7s ease-in-out infinite 1s" : "none",
          }}
        >
          <Waves className="h-10 w-10 md:h-14 md:w-14" />
        </div>
        <div
          className="absolute left-[20%] bottom-[30%] text-primary/20"
          style={{
            animation: mounted ? "float 5s ease-in-out infinite 0.5s" : "none",
          }}
        >
          <Zap className="h-8 w-8 md:h-12 md:w-12" />
        </div>
        <div
          className="absolute right-[25%] bottom-[40%] text-accent/20"
          style={{
            animation: mounted ? "float 8s ease-in-out infinite 2s" : "none",
          }}
        >
          <Radio className="h-10 w-10 md:h-14 md:w-14" />
        </div>
      </div>

      {/* Hero content */}
      <div className="container relative mx-auto px-4 text-center">
        {/* Badge */}
        <div
          className={`mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-700 ${
            mounted ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          Broadcasting Live 24/7
        </div>

        {/* Main heading */}
        <h1
          className={`mb-6 text-4xl font-bold tracking-tight text-foreground transition-all duration-700 delay-100 sm:text-5xl md:text-6xl lg:text-7xl ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="block text-balance">Experience Music Like</span>
          <span className="mt-2 block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Never Before
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className={`mx-auto mb-8 max-w-2xl text-lg text-muted-foreground transition-all duration-700 delay-200 md:text-xl ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Your premier destination for non-stop music, curated playlists, and
          live DJ sets. Tune in and let the rhythm take over.
        </p>

        {/* Stats */}
        <div
          className={`mx-auto flex max-w-md flex-wrap items-center justify-center gap-8 transition-all duration-700 delay-300 ${
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              24/7
            </div>
            <div className="text-sm text-muted-foreground">Live Streaming</div>
          </div>
          <div className="h-12 w-px bg-border" />

          <div className="h-12 w-px bg-border" />
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground md:text-4xl">
              10K+
            </div>
            <div className="text-sm text-muted-foreground">Tracks Played</div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes soundWave {
          0% {
            height: 20%;
          }
          100% {
            height: 80%;
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
}
