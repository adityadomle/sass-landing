const useCases = [
  { title: "Support", desc: "AI agents handling tickets 24/7.", stat: "80%", label: "faster" },
  { title: "Content", desc: "Generate copy and docs at scale.", stat: "10x", label: "output" },
  { title: "Analysis", desc: "Extract insights from raw data.", stat: "95%", label: "accuracy" },
  { title: "Code", desc: "AI pair programming assistant.", stat: "3x", label: "velocity" },
]

export function UseCasesSection() {
  return (
    <section id="use-cases" className="relative py-24 sm:py-28 md:py-32 lg:py-40 xl:py-48">
      <div className="w-full max-w-7xl md:max-w-full mx-auto px-5 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-md md:max-w-2xl lg:max-w-3xl mb-14 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-5">
            Use <span className="text-primary">cases</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
            How teams use NexusAI to transform operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-6 xl:gap-8">
          {useCases.map((item, i) => (
            <div
              key={i}
              className="group p-5 md:p-6 lg:p-7 xl:p-8 rounded border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-150"
            >
              <div className="flex items-baseline gap-1.5 md:gap-2 mb-3 md:mb-4">
                <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary">{item.stat}</span>
                <span className="text-[10px] md:text-xs text-muted-foreground">{item.label}</span>
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-medium mb-2 md:mb-2.5">{item.title}</h3>
              <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 md:mt-16 lg:mt-20 p-5 md:p-6 lg:p-7 rounded border border-white/5 bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 md:gap-5">
          <div>
            <h3 className="text-xs sm:text-sm md:text-base font-medium mb-1 md:mb-1.5">Ready to start?</h3>
            <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground">Deploy your first AI model in minutes.</p>
          </div>
          <button className="px-4 py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 text-xs sm:text-sm md:text-base font-medium bg-white text-black rounded hover:bg-white/90 transition-colors duration-150">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
