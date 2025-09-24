"use client"

import Image from "next/image"
import { useScrollAnimation, getAnimationClasses } from "@/hooks/use-scroll-animation"
import { ScrollReveal } from "@/components/scroll-reveal"

export function BenefitsSection() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation()
  const { ref: additionalRef, isInView: additionalInView } = useScrollAnimation()

  return (
    <section className="benefits-section py-20">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="left">
          {/* ====== Desktop wrapper ====== */}
          <div className="glass-card rounded-3xl p-12 max-w-6xl mx-auto mb-16 hidden md:block">
            {/* Title + subtitle */}
            <div
              ref={titleRef}
              className={`text-center mb-12 ${getAnimationClasses(titleInView, "up")}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance font-serif text-glow">
                Unlock Elite Performance — <span className="text-primary">Aurea</span> Delivers Excellence
              </h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto font-sans leading-relaxed">
                Transform your business into an unstoppable force.{" "}
                <span className="text-primary font-medium">Auréa</span> doesn't just manage operations — it elevates
                every touchpoint, ensuring your brand commands respect and drives unprecedented growth.
              </p>
            </div>

            {/* Inner cards (desktop) */}
            <div ref={cardsRef} className="grid md:grid-cols-2 gap-12">
              {/* Card 1 */}
              <div
                className={`glass-card rounded-3xl p-8 group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(230,194,0,0.15)] ${getAnimationClasses(cardsInView, "left")}`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="image-box mb-6 overflow-hidden transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/appointment-reminder.png"
                    alt="Elite appointment management system"
                    width={400}
                    height={300}
                    className="rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center group-hover:text-primary transition-colors duration-300 font-serif text-champagne-glow">
                  Never Miss an Opportunity
                </h3>
                <div className="space-y-3 text-muted-foreground font-sans">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">Precision scheduling that commands respect</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">Intelligent calendar mastery</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">Eliminate 80% of no-shows effortlessly</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className={`glass-card rounded-3xl p-8 group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(230,194,0,0.15)] ${getAnimationClasses(cardsInView, "right")}`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="image-box mb-6 overflow-hidden transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/appointment-confirmation.png"
                    alt="Premium client experience management"
                    width={400}
                    height={300}
                    className="rounded-2xl shadow-lg transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-center group-hover:text-primary transition-colors duration-300 font-serif text-champagne-glow">
                  Elevate Every Interaction
                </h3>
                <div className="space-y-3 text-muted-foreground font-sans">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">Luxury-grade client experiences</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">Elite 24/7 presence across all channels</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">Instant premium responses that impress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ====== Mobile version ====== */}
          <div className="block md:hidden space-y-12">
            {/* Title + subtitle for mobile */}
            <div
              ref={titleRef}
              className={`text-center mb-8 ${getAnimationClasses(titleInView, "up")}`}
            >
              <h2 className="text-2xl font-bold mb-3 font-serif">
                Unlock Elite Performance — <span className="text-primary">Aurea</span> Delivers Excellence
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Transform your business into an unstoppable force.{" "}
                <span className="text-primary font-medium">Auréa</span> doesn't just manage operations — it elevates
                every touchpoint, ensuring your brand commands respect and drives unprecedented growth.
              </p>
            </div>

            {/* Mobile cards */}
            <div className="space-y-10">
              {/* Card 1 */}
              <div
                className={`glass-card rounded-3xl p-6 ${getAnimationClasses(cardsInView, "left")}`}
              >
                <Image src="/appointment-reminder.png" alt="Elite appointment management system" width={400} height={300} className="rounded-xl mb-4" />
                <h3 className="text-lg font-semibold mb-3 text-center font-serif">Never Miss an Opportunity</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Precision scheduling that commands respect</li>
                  <li>Intelligent calendar mastery</li>
                  <li>Eliminate 80% of no-shows effortlessly</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div
                className={`glass-card rounded-3xl p-6 ${getAnimationClasses(cardsInView, "right")}`}
              >
                <Image src="/appointment-confirmation.png" alt="Premium client experience management" width={400} height={300} className="rounded-xl mb-4" />
                <h3 className="text-lg font-semibold mb-3 text-center font-serif">Elevate Every Interaction</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>Luxury-grade client experiences</li>
                  <li>Elite 24/7 presence across all channels</li>
                  <li>Instant premium responses that impress</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ====== Additional cards (unchanged) ====== */}
        <ScrollReveal direction="right" delay={0.2}>
          <div ref={additionalRef} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* ... your additional cards here ... */}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
