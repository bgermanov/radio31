"use client";

import { Music, Zap, User, Beer } from "lucide-react";

export function StationsSection() {
  return (
    <section className="relative px-4 py-16 md:py-24">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative mx-auto max-w-5xl">
        {/* Creator info */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/50 bg-card/50 px-4 py-2 backdrop-blur-sm">
            <User className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">Created by</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Boris Germanov
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Curating the perfect soundtracks for every mood. Two stations, two
            vibes, one passion for great music.
          </p>
        </div>

        {/* Stations grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Radio 31 - Chill */}
          <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Music className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Chill Vibes
                </span>
              </div>

              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Radio 31
              </h3>
              <p className="text-muted-foreground">
                Relax with our amazing selection of chill music. Perfect for
                studying, working, or just taking a moment to breathe.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Lo-fi", "Ambient", "Acoustic", "Jazz"].map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full border border-border/50 bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Radio 32 - Trap */}
          <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent/50 hover:bg-card/80">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-accent/10 blur-3xl transition-all duration-500 group-hover:bg-accent/20" />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Zap className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                  High Energy
                </span>
              </div>

              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Radio 32
              </h3>
              <p className="text-muted-foreground">
                Turn up the energy with hard-hitting trap beats. Perfect for
                workouts, driving or any other intense activity.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Trap", "Hip-Hop", "Bass", "EDM"].map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full border border-border/50 bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/*Radio 33*/}
          <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Beer className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Chalga Vibes
                </span>
              </div>

              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Radio 33
              </h3>
              <p className="text-muted-foreground">Napr si ebalo mecha.</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Po-huu da ne kaam", "Moderated by Atanas Cenov"].map(
                  (genre) => (
                    <span
                      key={genre}
                      className="rounded-full border border-border/50 bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                    >
                      {genre}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
          {/*Radio 34*/}
          <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Beer className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  BG Vibes
                </span>
              </div>

              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Radio 34
              </h3>
              <p className="text-muted-foreground">
                Blend of the highest quality bulgarian street music.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Trap", "Rap", "BG"].map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full border border-border/50 bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
          {/*Radio 35*/}
          <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

            <div className="relative">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Beer className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  House
                </span>
              </div>

              <h3 className="mb-2 text-xl font-semibold text-foreground">
                Radio 35
              </h3>
              <p className="text-muted-foreground">
                Organic, African and more types of House. Perfect for every
                single moment.
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {["House", "Techno", "Electronic"].map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full border border-border/50 bg-background/50 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
