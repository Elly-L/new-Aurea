"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface ShaderBackgroundProps {
  children: React.ReactNode
}

export default function ShaderBackground({ children }: ShaderBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background relative overflow-hidden transition-colors duration-300"
    >
      <div className="absolute inset-0 w-full h-full">
        {/* Light theme gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white opacity-100 dark:opacity-0 transition-opacity duration-300" />

        {/* Dark theme luxury gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D0D] via-[#1C1C1C] to-[#0D0D0D] opacity-0 dark:opacity-100 transition-opacity duration-300" />

        {/* Animated luxury accent overlay */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse" />
      </div>

      {/* SVG Filters for luxury effects */}
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="luxury-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
        </defs>
      </svg>

      {children}
    </div>
  )
}
