const useCases = [
  { title: "Support", desc: "AI agents handling tickets 24/7.", stat: "80%", label: "faster" },
  { title: "Content", desc: "Generate copy and docs at scale.", stat: "10x", label: "output" },
  { title: "Analysis", desc: "Extract insights from raw data.", stat: "95%", label: "accuracy" },
  { title: "Code", desc: "AI pair programming assistant.", stat: "3x", label: "velocity" },
]

export function UseCasesSection() {
  return (
    <section id="use-cases" className="relative py-20 lg:py-28">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mb-12">
          <h2 className="text-2xl font-medium mb-3">
            Use <span className="text-primary">cases</span>
          </h2>
          <p className="text-xs text-muted-foreground leading-relaxed">
            How teams use NexusAI to transform operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {useCases.map((item, i) => (
            <div
              key={i}
              className="group p-4 rounded border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-150"
            >
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-xl font-medium text-primary">{item.stat}</span>
                <span className="text-[10px] text-muted-foreground">{item.label}</span>
              </div>
              <h3 className="text-xs font-medium mb-1">{item.title}</h3>
              <p className="text-[11px] text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 rounded border border-white/5 bg-white/[0.02] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xs font-medium mb-0.5">Ready to start?</h3>
            <p className="text-[11px] text-muted-foreground">Deploy your first AI model in minutes.</p>
          </div>
          <button className="px-3 py-1.5 text-xs font-medium bg-white text-black rounded hover:bg-white/90 transition-colors duration-150">
            Get Started
          </button>
        </div>
      </div>
    </section>
  )
}
