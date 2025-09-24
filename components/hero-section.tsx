"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function HeroSection() {
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8
      if (window.scrollY > heroHeight) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="min-h-fit md:min-h-screen flex items-center justify-center relative overflow-hidden pt-6 md:pt-20">
      {/* Floating logo + button (only before nav appears) */}
      <AnimatePresence>
        {!showNav && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute top-6 left-6 z-50"
            >
              <Image
                src="/aurea-logo.png"
                alt="Aurea Intelligence"
                width={40}
                height={40}
                className="rounded-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute top-6 right-6 z-50"
            >
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 btn-primary-hover">
                Join the Waitlist
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Hero content */}
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance text-black">
            Your Smart Assistant for Clients — On{" "}
            <span className="text-primary">WhatsApp, Instagram & Beyond</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 mb-8 text-pretty">
            Capture leads, confirm bookings, send reminders, and follow up — all without lifting a finger.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full"
          >
            Join the Waitlist
          </Button>

          <div className="mt-10 md:mt-16 max-w-2xl mx-auto">
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
