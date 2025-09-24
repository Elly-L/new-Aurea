import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function KeyBenefitsSection() {
  return (
    <section className="key-benefits-section py-20">
      <div className="container mx-auto px-6">
        {/* Keep visible on all screens */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text side */}
            <div className="space-y-8">
              <ScrollReveal direction="up">
                <h2 className="text-4xl md:text-5xl font-bold text-balance font-serif">
                  Aurea makes{" "}
                  <span className="text-destructive">running your business</span>{" "}
                  effortless
                </h2>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <ul className="space-y-4 text-muted-foreground font-sans leading-relaxed">
                  <li className="flex items-start space-x-3">
                    <span className="text-destructive">•</span>
                    <span>Instant responses to clients 24/7</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-destructive">•</span>
                    <span>Automated booking and reminders</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-destructive">•</span>
                    <span>No more missed calls or lost clients</span>
                  </li>
                </ul>
              </ScrollReveal>
            </div>

            {/* Image side */}
            <ScrollReveal direction="right">
              <div className="relative">
                <Image
                  src="/hero-slide-3.png"
                  alt="Happy spa client after smooth booking"
                  width={500}
                  height={500}
                  className="rounded-2xl shadow-xl 
                             w-auto h-auto max-w-full 
                             md:w-full md:h-auto"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
