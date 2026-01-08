import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-white/10 bg-white/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] text-muted-foreground uppercase tracking-wider">v2.0 Released</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6 leading-[1.1]">
            Build smarter with
            <br />
            <span className="text-primary">intelligent AI</span>
          </h1>

          <p className="text-sm text-muted-foreground max-w-md mb-8 leading-relaxed">
            Automate workflows, generate insights, and scale operations with our advanced AI infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="#get-started"
              className="px-4 py-2 text-xs font-medium bg-white text-black rounded hover:bg-white/90 transition-colors duration-150 text-center"
            >
              Start Free
            </Link>
            <Link
              href="#demo"
              className="px-4 py-2 text-xs font-medium border border-white/10 rounded hover:bg-white/5 transition-colors duration-150 flex items-center justify-center gap-2"
            >
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
              View Demo
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5">
            <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-4">Trusted by</p>
            <div className="flex flex-wrap items-center gap-6">
              {["Stripe", "Vercel", "Linear", "Notion"].map((company) => (
                <span key={company} className="text-xs text-muted-foreground/50">
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
