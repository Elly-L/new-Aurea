"use client"

import Image from "next/image"

export default function PulsingCircle() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative w-20 h-20 flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full rounded-full">
          {/* Outer pulsing ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-pulse opacity-60" />

          {/* Inner glow ring */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-r from-primary/40 via-accent/40 to-primary/40 animate-pulse delay-500" />

          {/* Core ring */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <Image src="/aurea-logo.png" alt="Aurea Logo" width={24} height={24} className="z-10" />
        </div>

        <svg
          className="absolute inset-0 w-full h-full animate-spin"
          viewBox="0 0 100 100"
          style={{
            transform: "scale(1.6)",
            animationDuration: "20s",
            animationTimingFunction: "linear",
          }}
        >
          <defs>
            <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          </defs>
          <text className="text-sm fill-foreground font-medium">
            <textPath href="#circle" startOffset="0%">
              Aurea Intelligence . Aurea Intelligence
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  )
}
