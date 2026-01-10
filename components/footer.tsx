import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative py-10 md:py-12 lg:py-16 border-t border-white/5">
      <div className="w-full max-w-7xl md:max-w-full mx-auto px-5 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 md:gap-6">
          <div className="flex items-center gap-4 md:gap-5 lg:gap-6">
            <Link href="/" className="flex items-center gap-2 md:gap-2.5">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-primary" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2L2 7l10 5 10-5-10-5z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17l10 5 10-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12l10 5 10-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-xs sm:text-sm md:text-base font-medium">nexus.ai</span>
            </Link>
            <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">© 2026</span>
          </div>

          <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
            {["Privacy", "Terms", "Docs"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[10px] sm:text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors duration-150"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 md:gap-5">
            {/* X (Twitter) */}
            <a
              href="https://x.com/env_aditya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-150"
              aria-label="X"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/adityadomle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-150"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
