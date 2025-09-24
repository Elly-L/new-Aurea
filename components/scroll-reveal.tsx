"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  className?: string
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true)
          }, delay * 1000)
        }
      },
      { threshold: 0.1, rootMargin: "-100px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getTransformClass = () => {
    if (isVisible) return "translate-x-0 translate-y-0 opacity-100"

    switch (direction) {
      case "up":
        return "translate-y-12 opacity-0"
      case "down":
        return "-translate-y-12 opacity-0"
      case "left":
        return "translate-x-12 opacity-0"
      case "right":
        return "-translate-x-12 opacity-0"
      default:
        return "translate-y-12 opacity-0"
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${getTransformClass()} ${className}`}
      style={{ transitionDuration: `${duration}s` }}
    >
      {children}
    </div>
  )
}
