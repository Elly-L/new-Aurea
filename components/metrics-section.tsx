"use client"

import { useState, useEffect, useRef } from "react"
import { useScrollAnimation, getAnimationClasses } from "@/hooks/use-scroll-animation"

interface MetricProps {
  value: number
  suffix: string
  label: string
  delay?: number
}

function AnimatedMetric({ value, suffix, label, delay = 0 }: MetricProps) {
  const [currentValue, setCurrentValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const counter = setInterval(() => {
        current += increment
        if (current >= value) {
          setCurrentValue(value)
          clearInterval(counter)
        } else {
          setCurrentValue(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, value, delay])

  // Reset animation every 10 seconds
  useEffect(() => {
    if (!isVisible) return

    const resetTimer = setInterval(() => {
      setCurrentValue(0)
      setTimeout(() => {
        const duration = 2000
        const steps = 60
        const increment = value / steps
        let current = 0

        const counter = setInterval(() => {
          current += increment
          if (current >= value) {
            setCurrentValue(value)
            clearInterval(counter)
          } else {
            setCurrentValue(Math.floor(current))
          }
        }, duration / steps)
      }, 500)
    }, 10000)

    return () => clearInterval(resetTimer)
  }, [isVisible, value])

  return (
    <div
      ref={ref}
      className="text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:-translate-y-1"
    >
      <div className="text-4xl md:text-6xl font-serif font-bold text-primary mb-2 group-hover:text-primary/80 transition-all duration-300 group-hover:scale-110">
        {currentValue}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground font-sans uppercase tracking-wider group-hover:text-foreground transition-colors duration-300">
        {label}
      </div>
    </div>
  )
}

export function MetricsSection() {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section className="py-20 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className={getAnimationClasses(isInView, "up")} style={{ transitionDelay: "0ms" }}>
            <AnimatedMetric value={98} suffix="%" label="Retention Rate" delay={0} />
          </div>
          <div className={getAnimationClasses(isInView, "up")} style={{ transitionDelay: "200ms" }}>
            <AnimatedMetric value={40} suffix="%" label="Less Manual Work" delay={200} />
          </div>
          <div className={getAnimationClasses(isInView, "up")} style={{ transitionDelay: "400ms" }}>
            <AnimatedMetric value={24} suffix="/7" label="Seamless Coverage" delay={400} />
          </div>
          <div className={getAnimationClasses(isInView, "up")} style={{ transitionDelay: "600ms" }}>
            <AnimatedMetric value={25} suffix="+" label="Enterprises Onboard" delay={600} />
          </div>
        </div>
      </div>
    </section>
  )
}
