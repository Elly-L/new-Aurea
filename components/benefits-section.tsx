"use client"

import Image from "next/image"
import { useScrollAnimation, getAnimationClasses } from "@/hooks/use-scroll-animation"
import { ScrollReveal } from "@/components/scroll-reveal"

export function BenefitsSection() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation()
  const { ref: additionalRef, isInView: additionalInView } = useScrollAnimation()

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="left">
          <div className="glass-card rounded-3xl p-12 max-w-6xl mx-auto mb-16">
            <div ref={titleRef} className={`text-center mb-12 ${getAnimationClasses(titleInView, "up")}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance font-serif text-glow">
                Unlock Elite Performance — <span className="text-primary">Aurea</span> Delivers Excellence
              </h2>
              <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto font-sans leading-relaxed">
                Transform your business into an unstoppable force.{" "}
                <span className="text-primary font-medium">Auréa</span> doesn't just manage operations — it elevates
                every touchpoint, ensuring your brand commands respect and drives unprecedented growth.
              </p>
            </div>

            <div ref={cardsRef} className="grid md:grid-cols-2 gap-12">
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
                  <div className="flex items-center space-x-3 transition-transform duration-200 hover:translate-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">Precision scheduling that commands respect</span>
                  </div>
                  <div className="flex items-center space-x-3 transition-transform duration-200 hover:translate-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">Intelligent calendar mastery</span>
                  </div>
                  <div className="flex items-center space-x-3 transition-transform duration-200 hover:translate-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">Eliminate 80% of no-shows effortlessly</span>
                  </div>
                </div>
              </div>

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
                  <div className="flex items-center space-x-3 transition-transform duration-200 hover:translate-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">Luxury-grade client experiences</span>
                  </div>
                  <div className="flex items-center space-x-3 transition-transform duration-200 hover:translate-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">Elite 24/7 presence across all channels</span>
                  </div>
                  <div className="flex items-center space-x-3 transition-transform duration-200 hover:translate-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">Instant premium responses that impress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right" delay={0.2}>
          <div ref={additionalRef} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div
              className={`glass-card rounded-2xl p-6 text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(230,194,0,0.2)] ${getAnimationClasses(additionalInView, "up")}`}
              style={{ transitionDelay: "200ms" }}
            >
              <h3 className="text-xl font-semibold mb-3 text-primary group-hover:scale-110 transition-transform duration-300 font-serif">
                Dominate Every Channel
              </h3>
              <div className="flex justify-center items-center space-x-4 text-muted-foreground mb-2">
                <div className="transition-all duration-200 hover:scale-125 hover:rotate-1">
                  <Image
                    src="/whatsapp-logo.jpg"
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="transition-all duration-200 hover:scale-125 hover:-rotate-1">
                  <Image
                    src="/instagram-logo.jpg"
                    alt="Instagram"
                    width={24}
                    height={24}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="transition-all duration-200 hover:scale-125 hover:rotate-1">
                  <Image
                    src="/telegram-logo.jpg"
                    alt="Telegram"
                    width={24}
                    height={24}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
                <div className="transition-all duration-200 hover:scale-125 hover:-rotate-1">
                  <Image
                    src="/sms-logo.jpg"
                    alt="SMS"
                    width={24}
                    height={24}
                    className="opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
              <p className="text-muted-foreground text-sm font-sans">Omnipresent excellence across platforms</p>
            </div>

            <div
              className={`glass-card rounded-2xl p-6 text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(230,194,0,0.2)] ${getAnimationClasses(additionalInView, "up")}`}
              style={{ transitionDelay: "400ms" }}
            >
              <h3 className="text-xl font-semibold mb-3 text-primary group-hover:scale-110 transition-transform duration-300 font-serif">
                Unlock Team Potential
              </h3>
              <p className="text-muted-foreground font-sans leading-relaxed">
                Liberate your elite team from mundane tasks — focus on what drives exponential growth
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
