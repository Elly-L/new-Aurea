"use client"

import Image from "next/image"
import { useScrollAnimation, getAnimationClasses } from "@/hooks/use-scroll-animation"

export function SolutionSection() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation()

  return (
    <section className="py-12">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-3xl p-12 max-w-6xl mx-auto">
          {/* Title */}
          <div
            ref={titleRef}
            className={`text-center mb-12 ${getAnimationClasses(titleInView, "up")}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance font-serif text-glow">
              Meet <span className="text-primary">Aurea</span> — Your Elite AI Partner
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto font-sans">
              More than automation —{" "}
              <span className="text-primary font-medium">Aurea</span> is your strategic
              advantage. Operating seamlessly across WhatsApp, Instagram, and beyond, it
              transforms every touchpoint into opportunity while you focus on scaling your empire.
            </p>
          </div>

          {/* Cards */}
          <div ref={cardsRef} className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Card 1 */}
            <div
              className={`space-y-8 ${getAnimationClasses(cardsInView, "left")}`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="glass-card rounded-2xl p-6 group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(230,194,0,0.15)]">
                <h3 className="text-2xl font-semibold mb-6 text-center group-hover:text-primary transition-colors duration-300 font-serif text-champagne-glow">
                  Elite Performance Unlocked
                </h3>
                <div className="image-box mb-4 overflow-hidden transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/training-guide.png"
                    alt="Elite team leveraging Aurea AI for strategic advantage"
                    width={500}
                    height={350}
                    className="rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 
                               w-auto h-auto max-w-full md:w-full md:h-auto"
                  />
                </div>
                <div className="space-y-3 text-sm font-sans">
                  <div className="flex items-center space-x-2 transition-transform duration-200 hover:translate-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">Instant mastery of premium resources</span>
                  </div>
                  <div className="flex items-center space-x-2 transition-transform duration-200 hover:translate-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">AI-powered excellence at scale</span>
                  </div>
                  <div className="flex items-center space-x-2 transition-transform duration-200 hover:translate-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">Seamless elite team orchestration</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`space-y-8 ${getAnimationClasses(cardsInView, "right")}`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="glass-card rounded-2xl p-6 group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(230,194,0,0.15)]">
                <h3 className="text-2xl font-semibold mb-6 text-center group-hover:text-primary transition-colors duration-300 font-serif text-champagne-glow">
                  Precision Intelligence Interface
                </h3>
                <div className="image-box mb-4 overflow-hidden transition-transform duration-300 hover:scale-105">
                  <Image
                    src="/ai-interface.png"
                    alt="Advanced AI interface demonstrating elite order management and premium service"
                    width={500}
                    height={600}
                    className="rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 
                               w-auto h-auto max-w-full md:w-full md:h-auto"
                  />
                </div>
                <div className="space-y-3 text-sm font-sans">
                  <div className="flex items-center space-x-2 transition-transform duration-200 hover:translate-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">Intelligent order orchestration</span>
                  </div>
                  <div className="flex items-center space-x-2 transition-transform duration-200 hover:translate-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">Transparent AI decision-making</span>
                  </div>
                  <div className="flex items-center space-x-2 transition-transform duration-200 hover:translate-x-1">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-card-foreground">Omnichannel excellence delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
