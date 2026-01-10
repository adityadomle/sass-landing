import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative pt-36 pb-24 sm:pt-40 sm:pb-28 md:pt-48 md:pb-40 lg:pt-56 lg:pb-48">
      <div className="w-full max-w-7xl md:max-w-full mx-auto px-5 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-3xl md:max-w-4xl lg:max-w-5xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-3.5 md:py-2 rounded border border-white/10 bg-white/5 mb-7 md:mb-8">
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider">v2.0 Released</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight mb-7 md:mb-10 lg:mb-12 leading-[1.1]">
            Build smarter with
            <br />
            <span className="text-primary">intelligent AI</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-md md:max-w-2xl mb-9 md:mb-12 lg:mb-16 leading-relaxed">
            Automate workflows, generate insights, and scale operations with our advanced AI infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:gap-5">
            <Link
              href="#get-started"
              className="px-5 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3.5 text-xs sm:text-sm md:text-base font-medium bg-white text-black rounded hover:bg-white/90 transition-colors duration-150 text-center"
            >
              Start Free
            </Link>
            <Link
              href="#demo"
              className="px-5 py-2.5 md:px-6 md:py-3 lg:px-8 lg:py-3.5 text-xs sm:text-sm md:text-base font-medium border border-white/10 rounded hover:bg-white/5 transition-colors duration-150 flex items-center justify-center gap-2"
            >
              <svg className="w-3 h-3 md:w-4 md:h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              View Demo
            </Link>
          </div>

          <div className="mt-20 md:mt-28 lg:mt-32 pt-10 md:pt-12 lg:pt-14 border-t border-white/5">
            <p className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mb-5 md:mb-6">Trusted by</p>
            <div className="flex flex-wrap items-center gap-6 md:gap-8 lg:gap-10">
              {["Stripe", "Vercel", "Linear", "Notion"].map((company) => (
                <span key={company} className="text-xs md:text-sm lg:text-base text-muted-foreground/50">
                  {company}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
