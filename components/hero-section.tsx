import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance text-black">
            Your Smart Assistant for Clients — On <span className="text-primary">WhatsApp, Instagram & Beyond</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 text-pretty">
            Capture leads, confirm bookings, send reminders, and follow up — all without lifting a finger.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-4 rounded-full"
          >
            Join the Waitlist
          </Button>

          <div className="mt-16 max-w-2xl mx-auto">
            <Image
              src="/success-booking.png"
              alt="Successful booking confirmation with Aurea AI"
              width={600}
              height={400}
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
