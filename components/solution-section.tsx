"use client"

import Image from "next/image"
import { useScrollAnimation, getAnimationClasses } from "@/hooks/use-scroll-animation"

export function SolutionSection() {
  const { ref: titleRef, isInView: titleInView } = useScrollAnimation()
  const { ref: cardsRef, isInView: cardsInView } = useScrollAnimation()

  return (
    <section className="solution-section py-12">
      <div className="container mx-auto px-6">

        {/* ===== DESKTOP (outer card visible) ===== */}
        {/* NOTE: wrapper hides on mobile; glass-card is nested inside so mobile CSS targeting
            `.solution-section > .container > .glass-card` won't match the nested element. */}
        <div className="hidden md:block">
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
                      className="rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 w-full h-auto"
                    />
                  </div>
                  <div className="space-y-3 text-sm font-sans">
                    <div className="flex items-center space-x-2 hover:translate-x-1 transition-transform duration-200">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-card-foreground">Instant mastery of premium resources</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:translate-x-1 transition-transform duration-200">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-card-foreground">AI-powered excellence at scale</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:translate-x-1 transition-transform duration-200">
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
                      className="rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110 w-full h-auto"
                    />
                  </div>
                  <div className="space-y-3 text-sm font-sans">
                    <div className="flex items-center space-x-2 hover:translate-x-1 transition-transform duration-200">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-card-foreground">Intelligent order orchestration</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:translate-x-1 transition-transform duration-200">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-card-foreground">Transparent AI decision-making</span>
                    </div>
                    <div className="flex items-center space-x-2 hover:translate-x-1 transition-transform duration-200">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-card-foreground">Omnichannel excellence delivery</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== MOBILE (outer card removed, full-width images) ===== */}
        <div className="block md:hidden max-w-6xl mx-auto">
          {/* Title */}
          <div
            ref={titleRef}
            className={`text-center mb-8 ${getAnimationClasses(titleInView, "up")}`}
          >
            <h2 className="text-3xl font-bold mb-4 font-serif">
              Meet <span className="text-primary">Aurea</span> — Your Elite AI Partner
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto font-sans">
              More than automation —{" "}
              <span className="text-primary font-medium">Aurea</span> is your strategic
              advantage. Operating seamlessly across WhatsApp, Instagram, and beyond, it
              transforms every touchpoint into opportunity while you focus on scaling your empire.
            </p>
          </div>

          {/* Cards */}
          <div ref={cardsRef} className="space-y-12">
            {/* Card 1 */}
            <div className={`${getAnimationClasses(cardsInView, "up")}`}>
              <Image
                src="/training-guide.png"
                alt="Elite team leveraging Aurea AI for strategic advantage"
                width={500}
                height={350}
                className="w-full h-auto mb-4 rounded-xl shadow-lg"
              />
              <div className="space-y-2 px-2">
                <h3 className="text-lg font-semibold font-serif text-primary text-center">
                  Elite Performance Unlocked
                </h3>
                <ul className="space-y-2 text-sm font-sans">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Instant mastery of premium resources</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>AI-powered excellence at scale</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Seamless elite team orchestration</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`${getAnimationClasses(cardsInView, "up")}`}
              style={{ transitionDelay: "200ms" }}
            >
              <Image
                src="/ai-interface.png"
                alt="Advanced AI interface demonstrating elite order management and premium service"
                width={500}
                height={600}
                className="w-full h-auto mb-4 rounded-xl shadow-lg"
              />
              <div className="space-y-2 px-2">
                <h3 className="text-lg font-semibold font-serif text-primary text-center">
                  Precision Intelligence Interface
                </h3>
                <ul className="space-y-2 text-sm font-sans">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Intelligent order orchestration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Transparent AI decision-making</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Omnichannel excellence delivery</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
