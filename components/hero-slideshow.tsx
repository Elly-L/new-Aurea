"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { motion, AnimatePresence } from "framer-motion"

const slides = [
  {
    image: "/hero-slide-1.jpeg",
    title: "Elite AI Partners for Visionary Leaders.",
    subtitle:
      "Unlock exponential growth through precision automation — capture leads, secure bookings, and command excellence effortlessly.",
  },
  {
    image: "/hero-slide-2.jpeg",
    title: "Bespoke Intelligence Suites — Engineered for Market Dominance.",
    subtitle:
      "Transform every interaction into competitive advantage with AI that never sleeps, never compromises.",
  },
  {
    image: "/hero-slide-3.png",
    title: "Redefining Excellence Through Intelligent Automation.",
    subtitle:
      "Experience the pinnacle of business automation that elevates your brand and drives unprecedented results.",
  },
]

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showNav, setShowNav] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [currentSlide])

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

  const nextSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setIsAnimating(false)
    }, 300)
  }

  const prevSlide = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
      setIsAnimating(false)
    }, 300)
  }

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentSlide) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <section className="relative overflow-hidden">
      {/* Floating logo + button before nav */}
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

      {/* Desktop Background Images */}
      {slides.map(
        (slide, index) =>
          index === currentSlide && (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 hidden md:block ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={`Hero slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 dark:from-black/90 dark:via-black/60 dark:to-black/30" />
            </div>
          ),
      )}

      {/* Mobile Image (normal flow, not absolute) */}
      <div className="md:hidden relative w-full h-[260px]">
        <Image
          src={slides[currentSlide].image}
          alt={`Slide ${currentSlide + 1}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Mobile Content BELOW image */}
      <div className="block md:hidden px-6 py-6">
        <h1 className="text-2xl font-bold mb-3 text-black dark:text-white font-serif">
          {slides[currentSlide].title}
        </h1>
        <p className="text-sm mb-4 text-black/80 dark:text-white/90 font-sans leading-relaxed">
          {slides[currentSlide].subtitle}
        </p>
        <Button className="bg-primary text-white rounded-full px-5 py-2 shadow-md">
          Unlock Elite Access
        </Button>
      </div>

      {/* Desktop Content Overlay */}
      <div className="hidden md:flex relative z-10 min-h-screen items-end justify-start pb-16 pl-12">
        <ScrollReveal direction="up" delay={0.5}>
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold mb-3 text-white font-serif">
              {slides[currentSlide].title}
            </h1>
            <p className="text-base text-white/90 mb-4 font-sans leading-relaxed">
              {slides[currentSlide].subtitle}
            </p>
            <Button className="bg-primary text-white rounded-full px-5 py-2 shadow-md">
              Unlock Elite Access
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Slide controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200 btn-secondary-hover"
        disabled={isAnimating}
      >
        <svg
          className="w-6 h-6 relative z-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200 btn-secondary-hover"
        disabled={isAnimating}
      >
        <svg
          className="w-6 h-6 relative z-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-primary scale-125 shadow-lg" : "bg-white/40 hover:bg-white/60"
            }`}
            disabled={isAnimating}
          />
        ))}
      </div>
    </section>
  )
}
