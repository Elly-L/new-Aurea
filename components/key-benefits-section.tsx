"use client"

import { useScrollAnimation, getAnimationClasses } from "@/hooks/use-scroll-animation"
import { ScrollReveal } from "@/components/scroll-reveal"

export function KeyBenefitsSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section ref={ref} className={`py-2 ${getAnimationClasses(isInView, "up")}`}>
      <div className="container mx-auto px-6">
        <ScrollReveal direction="right">
          <div className="glass-card rounded-3xl p-12 max-w-6xl mx-auto">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance font-serif text-glow">
                Unlock Elite Performance — <span className="text-primary">Aurea</span> Delivers Excellence
              </h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-4xl mx-auto leading-relaxed font-sans">
                <span className="text-primary font-medium">Auréa</span> elevates every interaction with precision and
                care. By automating the essentials — from scheduling to follow-ups — it reclaims your time, strengthens
                client trust, and ensures your brand feels effortless, polished, and always present.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
