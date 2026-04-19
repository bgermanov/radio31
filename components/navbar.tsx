// components/navbar.tsx
import { Radio } from "lucide-react";

export function Navbar({
  onSelectedRadio,
  activeRadio,
}: {
  onSelectedRadio: (id: number) => void;
  activeRadio: number;
}) {
  const radios = [
    { id: 31, label: "Radio31" },
    { id: 32, label: "Radio32" },
    { id: 33, label: "Radio33" },
    { id: 34, label: "Radio34" },
    { id: 35, label: "Radio35" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8">
        {/* Left spacer to help center the buttons */}
        <div className="flex shrink-0 items-center gap-2 opacity-0 pointer-events-none">
          <span className="relative flex h-2 w-2" />
          <span className="text-xs font-medium uppercase">Live</span>
        </div>

        {/* Centered radio buttons */}
        <div className="flex gap-1 sm:gap-2 lg:gap-4">
          {radios.map((r) => (
            <button
              key={r.id}
              onClick={() => {
                onSelectedRadio(r.id);
                document
                  .getElementById("player")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`flex items-center gap-2 px-2 sm:px-3 py-2 rounded-md transition-colors ${
                activeRadio === r.id
                  ? "bg-primary/20 text-primary"
                  : "text-foreground hover:bg-accent"
              }`}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-lg relative ${
                  activeRadio === r.id ? "bg-primary" : "bg-muted"
                }`}
              >
                <Radio
                  className={`h-4 w-4 ${
                    activeRadio === r.id
                      ? "text-primary-foreground"
                      : "text-muted-foreground"
                  }`}
                />
                {/* Radio number badge */}
                <span
                  className={`absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full text-[9px] font-bold ${
                    activeRadio === r.id
                      ? "bg-primary-foreground text-primary"
                      : "bg-muted-foreground/20 text-foreground"
                  }`}
                >
                  {r.id}
                </span>
              </div>
              <span className="hidden sm:inline text-sm font-bold tracking-tight">
                {r.label}
              </span>
            </button>
          ))}
        </div>

        {/* Live Indicator */}
        <div className="flex shrink-0 items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
          </span>
          <span className="text-xs font-medium uppercase text-primary">
            Live
          </span>
        </div>
      </nav>
    </header>
  );
}
