"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function LoadingIntro({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(true)
  const [docked, setDocked] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDocked(true)
      const doneTimer = setTimeout(() => {
        setShow(false)
        onDone()
      }, 1500)
      return () => clearTimeout(doneTimer)
    }, 5000)

    return () => clearTimeout(timer)
  }, [onDone])

  if (!show) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#D4AF37] transition-opacity duration-600 ease-in-out">
      {/* Circle wrapper */}
      <div
        className={`relative transition-all duration-1000 ease-in-out ${
          docked ? "fixed bottom-5 right-5 w-20 h-20 scale-50" : "w-40 h-40 scale-100"
        }`}
        style={{ willChange: "transform" }}
      >
        <div className="absolute inset-0 w-full h-full rounded-full">
          {/* Outer luxury ring with gold gradient */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#EAD7BD] to-[#D4AF37] animate-pulse opacity-80" />

          {/* Middle ring with champagne accent */}
          <div
            className="absolute inset-2 rounded-full bg-gradient-to-r from-[#EAD7BD] via-[#D4AF37] to-[#EAD7BD] animate-pulse opacity-60"
            style={{ animationDelay: "300ms" }}
          />

          {/* Inner glow ring */}
          <div
            className="absolute inset-4 rounded-full bg-gradient-to-r from-[#D4AF37]/40 via-[#EAD7BD]/40 to-[#D4AF37]/40 animate-pulse"
            style={{ animationDelay: "700ms" }}
          />

          {/* Core background */}
          <div className="absolute inset-6 rounded-full bg-[#0D0D0D]/80 backdrop-blur-sm" />
        </div>

        {/* Logo inside */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src="/aurea-logo.png" alt="Aurea Logo" width={40} height={40} />
        </div>
      </div>

      {!docked && <TypingBrand />}
    </div>
  )
}

function TypingBrand() {
  const text = "Aurea Intelligence"
  const [display, setDisplay] = useState("")
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setDisplay(text.slice(0, i + 1))
      i += 1
      if (i >= text.length) {
        clearInterval(interval)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className="mt-4 text-center">
      <span className="text-white text-lg md:text-2xl font-light tracking-wide font-serif">
        {display}
        <span className="inline-block w-1.5 h-5 md:h-6 bg-white ml-2 animate-pulse align-[-2px]" />
      </span>
    </div>
  )
}
