import { Navbar } from "@/components/navbar"
import { RadioPlayer } from "@/components/radio-player"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <RadioPlayer />
    </main>
  )
}
