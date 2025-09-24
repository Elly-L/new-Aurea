"use client"

import { useState } from "react"
import LoadingIntro from "@/components/loading-intro"
import PulsingCircle from "@/components/pulsing-circle"
import ShaderBackground from "@/components/shader-background"
import { Navigation } from "@/components/navigation"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { MetricsSection } from "@/components/metrics-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { KeyBenefitsSection } from "@/components/key-benefits-section"
import { BenefitsSection } from "@/components/benefits-section"
import { VisionSection } from "@/components/vision-section"
import { CTASection } from "@/components/cta-section"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function ShaderShowcase() {
  const [showLoading, setShowLoading] = useState(true)

  return (
    <>
      {showLoading && <LoadingIntro onDone={() => setShowLoading(false)} />}
      <ShaderBackground>
        <PulsingCircle />
        <Navigation />
        <HeroSlideshow />
        <ScrollReveal direction="up">
          <MetricsSection />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <ProblemSection />
        </ScrollReveal>
        <ScrollReveal direction="left">
          <SolutionSection />
        </ScrollReveal>
        <KeyBenefitsSection />
        <BenefitsSection />
        <ScrollReveal direction="up">
          <VisionSection />
        </ScrollReveal>
        <ScrollReveal direction="down">
          <TestimonialsSection />
        </ScrollReveal>
        <ScrollReveal direction="up">
          <CTASection />
        </ScrollReveal>
      </ShaderBackground>
    </>
  )
}
