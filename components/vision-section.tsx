import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

export function VisionSection() {
  const industries = [
    { image: "/spa-business.png", name: "Spas", alt: "Spa treatment room with massage tables" },
    { image: "/clinic-business.png", name: "Clinics", alt: "Medical clinic reception area" },
    { image: "/hotel-business.png", name: "Hotels", alt: "Modern hotel room interior" },
    { image: "/real-estate-business.png", name: "Real Estate", alt: "Real estate handshake over house model" },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance font-serif">
              Built for businesses that <span className="text-primary">put clients first</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-pretty font-sans leading-relaxed">
              From spas to clinics, hotels to real estate, Aurea helps SMEs deliver the kind of service that keeps
              clients coming back.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((industry, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                  <div className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-transform">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={industry.image || "/placeholder.svg"}
                        alt={industry.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-semibold text-lg">{industry.name}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
