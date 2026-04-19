// components/navbar.tsx
import { Radio } from "lucide-react";

export function Navbar({ onSelectRadio, activeRadio }) {
  const radios = [
    { id: 31, label: "Radio31" },
    { id: 32, label: "Radio32" },
    { id: 33, label: "Radio33" },
    { id: 34, label: "Radio34" },
    { id: 35, label: "Radio35" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex gap-4">
          {radios.map((r) => (
            <button
              key={r.id}
              onClick={() => [
                onSelectRadio(r.id),
                document
                  .getElementById("player")
                  ?.scrollIntoView({ behavior: "smooth" }),
              ]}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${
                activeRadio === r.id
                  ? "bg-primary/20 text-primary"
                  : "text-foreground hover:bg-accent"
              }`}
            >
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-lg ${activeRadio === r.id ? "bg-primary" : "bg-muted"}`}
              >
                <Radio
                  className={`h-4 w-4 ${activeRadio === r.id ? "text-primary-foreground" : "text-muted-foreground"}`}
                />
              </div>
              <span className="text-sm font-bold tracking-tight">
                {r.label}
              </span>
            </button>
          ))}
        </div>

        {/* Live Indicator */}
        <div className="flex items-center gap-2">
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
