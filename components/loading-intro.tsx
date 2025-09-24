"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PulsingBorder } from "@paper-design/shaders-react"
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

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#0D0D0D] via-[#1A1A1A] to-[#D4AF37]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Circle wrapper */}
          <motion.div
            className="relative"
            initial={{
              scale: 1,
              width: 160,
              height: 160,
            }}
            animate={
              docked
                ? {
                    scale: 0.5,
                    width: 80,
                    height: 80,
                    bottom: 20,
                    right: 20,
                    position: "absolute",
                  }
                : {
                    scale: 1,
                    width: 160,
                    height: 160,
                    position: "relative",
                  }
            }
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ willChange: "transform" }}
          >
            {/* Glowing ring + subtle fireballs */}
            {/* @ts-ignore */}
            <PulsingBorder
              colors={["#FFD700", "#FF6B35", "#8A2BE2"]}
              colorBack="#00000000"
              speed={1.2}
              roundness={1}
              thickness={0.22}   // visible ring thickness
              softness={0.02}    // sharp edges, slight blend
              intensity={3.5}    // balanced glow
              spots={4}          // a few fireballs
              spotSize={0.25}    // small subtle sparks
              pulse={0.15}       // gentle breathing
              smoke={0}          // no heavy smoke blur
              smokeSize={0}
              scale={1}
              rotation={0}
              frame={9161408.251009725}
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />

            {/* Logo inside */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Image src="/aurea-logo.png" alt="Aurea Logo" width={40} height={40} />
            </div>
          </motion.div>

          {!docked && <TypingBrand />}
        </motion.div>
      )}
    </AnimatePresence>
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
      <span
        className="text-white text-lg md:text-2xl font-light tracking-wide"
        style={{ fontFamily: "Cormorant Garamond, Playfair Display, serif" }}
      >
        {display}
        <span className="inline-block w-1.5 h-5 md:h-6 bg-white ml-2 animate-pulse align-[-2px]" />
      </span>
    </div>
  )
}
