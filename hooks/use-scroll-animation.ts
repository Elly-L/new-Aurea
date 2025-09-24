"use client"

import { useRef, useEffect, useState } from "react"

export function useScrollAnimation(threshold = 0.1, once = true) {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setIsInView(false)
        }
      },
      {
        threshold,
        rootMargin: "-100px 0px -100px 0px",
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, once])

  return { ref, isInView }
}

// CSS class helpers for animations
export const fadeInUp = "transition-all duration-600 ease-out"
export const fadeInLeft = "transition-all duration-600 ease-out"
export const fadeInRight = "transition-all duration-600 ease-out"
export const scaleIn = "transition-all duration-600 ease-out"

// Helper function to get animation classes
export const getAnimationClasses = (isInView: boolean, direction: "up" | "left" | "right" | "scale" = "up") => {
  const base = "transition-all duration-600 ease-out"

  if (isInView) {
    return `${base} opacity-100 translate-x-0 translate-y-0 scale-100`
  }

  switch (direction) {
    case "up":
      return `${base} opacity-0 translate-y-15`
    case "left":
      return `${base} opacity-0 -translate-x-15`
    case "right":
      return `${base} opacity-0 translate-x-15`
    case "scale":
      return `${base} opacity-0 scale-80`
    default:
      return `${base} opacity-0 translate-y-15`
  }
}
