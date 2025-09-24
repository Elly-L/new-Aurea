import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ProblemSection() {
  return (
    <section className="problem-section py-20">
      <div className="container mx-auto px-6">
        <div className="glass-card rounded-3xl p-12 max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-balance font-serif">
              Running a business is hard.{" "}
              <span className="text-destructive">
                Clients slip through the cracks.
              </span>
            </h2>
          </ScrollReveal>

          <div className="relative flex flex-col lg:flex-row items-center gap-12">
            {/* Image side */}
            <div className="lg:w-1/2 relative">
              <ScrollReveal direction="left">
                <div className="image-box">
                  <Image
                    src="/stressed-spa-owner.png"
                    alt="Overwhelmed spa business owner dealing with multiple issues"
                    width={500}
                    height={600}
                    className="rounded-2xl shadow-xl 
                               w-auto h-auto max-w-full 
                               md:w-full md:h-auto"
                  />
                </div>
              </ScrollReveal>

              {/* Floating chat bubbles (hidden on mobile) */}
              <div className="hidden md:block chat-bubble chat-bubble-1 top-4 -right-4 lg:-right-8">
                <p className="text-sm font-medium text-red-600">
                  Messy inbox with missed messages
                </p>
              </div>

              <div className="hidden md:block chat-bubble chat-bubble-2 top-1/2 -left-4 lg:-left-8">
                <p className="text-sm font-medium text-red-600">
                  Manual booking coordination
                </p>
              </div>

              <div className="hidden md:block chat-bubble chat-bubble-3 bottom-8 -right-4 lg:-right-8">
                <p className="text-sm font-medium text-red-600">
                  Overwhelmed staff
                </p>
              </div>
            </div>

            {/* Text side */}
            <div className="lg:w-1/2 space-y-6">
              <ScrollReveal direction="right" delay={0.2}>
                <div className="glass-card rounded-2xl p-6">
                  <h3 className="text-xl font-semibold mb-3 text-destructive">
                    Before Aurea
                  </h3>
                  <ul className="space-y-3 text-muted-foreground font-sans leading-relaxed">
                    <li className="flex items-start space-x-2">
                      <span className="text-destructive">•</span>
                      <span>Missed calls and messages cost you bookings</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-destructive">•</span>
                      <span>Staff overwhelmed with manual coordination</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-destructive">•</span>
                      <span>Clients feel neglected and book elsewhere</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-destructive">•</span>
                      <span>No-shows due to poor communication</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
