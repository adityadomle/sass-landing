"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const features = [
  {
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Fast Processing",
    desc: "Sub-second response times with optimized inference.",
  },
  {
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
        />
      </svg>
    ),
    title: "Advanced Models",
    desc: "State-of-the-art reasoning capabilities.",
  },
  {
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    title: "Enterprise Security",
    desc: "SOC 2 certified with end-to-end encryption.",
  },
  {
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
    ),
    title: "Developer API",
    desc: "RESTful APIs with SDKs for all languages.",
  },
  {
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
        />
      </svg>
    ),
    title: "Analytics",
    desc: "Real-time usage and performance metrics.",
  },
  {
    icon: (
      <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: "Team Access",
    desc: "Role-based permissions and workspaces.",
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const section = sectionRef.current
    const trigger = triggerRef.current

    if (!section || !trigger) return

    let ctx = gsap.context(() => {
      gsap.fromTo(
        section,
        {
          x: 0,
        },
        {
          x: () => -(section.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: trigger,
            start: "top top",
            end: () => `+=${section.scrollWidth - window.innerWidth}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        }
      )
    }, trigger)

    return () => ctx.revert()
  }, [])
  return (
    <section className="overflow-hidden">
      <div ref={triggerRef}>
        <div className="relative h-screen flex flex-col justify-center py-24 sm:py-28 md:py-32 lg:py-40 xl:py-48 bg-black">
          <div className="w-full max-w-7xl md:max-w-full mx-auto px-5 sm:px-6 md:px-12 lg:px-16 xl:px-20 mb-12">
            <div className="max-w-md md:max-w-2xl lg:max-w-3xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-5">
                Built for <span className="text-primary">scale</span>
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                Everything you need to build production AI applications.
              </p>
            </div>
          </div>

          <div ref={sectionRef} className="flex gap-4 md:gap-5 lg:gap-6 xl:gap-8 active:cursor-grabbing px-5 sm:px-6 md:px-12 lg:px-16 xl:px-20 w-fit">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group w-[300px] md:w-[400px] lg:w-[450px] shrink-0 p-5 md:p-6 lg:p-7 xl:p-8 rounded border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-150"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded bg-white/5 flex items-center justify-center text-primary mb-4 md:mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-xs sm:text-sm md:text-base font-medium mb-2 md:mb-2.5">{feature.title}</h3>
                <p className="text-[11px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
