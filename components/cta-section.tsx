import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CTASection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance font-serif">
              Be among the first to experience <span className="text-primary">Aurea</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty font-sans leading-relaxed">
              Early access is limited. Join the waitlist and be the first to transform client care.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-emerald-300/30 to-emerald-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></span>
              <span className="relative z-10">Join the Waitlist</span>
              <svg className="ml-2 w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
