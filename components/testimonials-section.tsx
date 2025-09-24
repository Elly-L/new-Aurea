"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Petra Somen",
    role: "Spa Owner",
    company: "Serenity Wellness Spa",
    image: "/ceo.jpeg",
    content:
      "Aurea transformed our client experience completely. We went from missing 30% of calls to capturing every opportunity. Our booking rate increased by 85% in just two months.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Michael Rodriguez",
    role: "Medical Director",
    company: "Elite Medical Clinic",
    image: "/doc.jpeg",
    content:
      "The precision and professionalism Aurea brings to our patient communications is remarkable. Our no-show rate dropped to under 5%, and patient satisfaction scores are at an all-time high.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amanda Foster",
    role: "Hotel Manager",
    company: "Boutique Grand Hotel",
    image: "/hotel.jpeg",
    content:
      "Aurea doesn't just manage our reservations—it elevates every guest interaction. Our team can focus on creating memorable experiences while Aurea handles the seamless coordination.",
    rating: 5,
  },
]

// Partner logos
const companies = [
  { name: "Technology Corp", logo: "/logo-technology.png" },
  { name: "McDowell's", logo: "/logo-mcdowells.png" },
  { name: "AI Solutions", logo: "/logo-ai.png" },
  { name: "AquaSync", logo: "/logo-aquasync.png" },
  { name: "Serenity Spa", logo: "/serenity.png" },
]

// Duplicate array for seamless scrolling
const duplicatedCompanies = [...companies, ...companies]

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-muted/30 backdrop-blur-sm overflow-hidden">
      {/* Heading */}
      <div className="container mx-auto px-6 mb-12">
        <ScrollReveal direction="up">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-serif">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-sans leading-relaxed">
              Join the world's most ambitious brands who trust Aurea Intelligence to
              transform their customer interactions.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} direction="up" delay={index * 0.2}>
              <div className="glass-card rounded-3xl p-8 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-primary/20">
                    <Image
                      src={
                        testimonial.image ||
                        "/placeholder.svg?height=64&width=64&query=professional headshot"
                      }
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground font-serif">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground font-sans">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-primary font-sans">{testimonial.company}</p>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-muted-foreground italic font-sans leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  "{testimonial.content}"
                </blockquote>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Continuous sliding logos */}
      <ScrollReveal direction="up" delay={0.05}>
        <div className="relative">
          <div className="partner-logos-frame overflow-hidden">
            <div className="flex animate-scroll">
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`${company.name}-${index}`}
                  className="flex-shrink-0 mx-4 flex items-center justify-center partner-logo-item"
                  style={{ minWidth: "120px" }}
                >
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={100}
                    height={50}
                    className="object-contain max-h-[50px] opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
