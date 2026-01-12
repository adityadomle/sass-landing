import { Check } from "lucide-react"
import Link from "next/link"

const tiers = [
  {
    name: "Starter",
    price: "$0",
    description: "For individuals and hobbyists.",
    features: ["5,000 requests per month", "Basic analytics", "Community support", "1 API key"],
    cta: "Start Free",
    href: "/signup",
    featured: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "For scaling teams and startups.",
    features: [
      "100k requests per month",
      "Advanced analytics",
      "Priority email support",
      "5 API keys",
      "Custom rate limits",
    ],
    cta: "Get Started",
    href: "/signup",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations.",
    features: [
      "Unlimited requests",
      "Enterprise security",
      "Dedicated account manager",
      "SSO & SAML",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    href: "#",
    featured: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="relative py-24 sm:py-28 md:py-32 lg:py-40 xl:py-48 border-t border-white/5">
      <div className="w-full max-w-7xl md:max-w-full mx-auto px-5 sm:px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="max-w-md md:max-w-2xl lg:max-w-3xl mb-14 md:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-5">
            Simple <span className="text-primary">pricing</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
            Choose the plan that fits your needs. No hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-6 md:p-8 rounded-lg border ${tier.featured
                ? "border-primary/50 bg-primary/[0.03]"
                : "border-white/5 bg-white/[0.02] hover:border-white/10"
                } transition-all duration-200`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-[10px] sm:text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6 md:mb-8">
                <h3 className="text-lg md:text-xl font-medium mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-3xl md:text-4xl font-semibold">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-muted-foreground text-sm">/mo</span>}
                </div>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>

              <ul className="flex-1 space-y-3 mb-6 md:mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/80">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={tier.href}
                className={`w-full py-2.5 text-center text-sm font-medium rounded transition-colors ${tier.featured
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-white/5 text-white hover:bg-white/10 border border-white/5"
                  }`}
              >
                {tier.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
