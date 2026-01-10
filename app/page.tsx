import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { UseCasesSection } from "@/components/use-cases-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen md:h-full md:w-full bg-background relative">
      <div className="fixed inset-0 dot-pattern pointer-events-none" />

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 md:w-[600px] md:h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <Footer />
    </main>
  )
}
