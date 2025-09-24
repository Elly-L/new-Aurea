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
      }, 1800) // give enough time for smooth docking before fade-out
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
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Circle wrapper */}
          <motion.div
            className="relative"
            initial={{
              scale: 0,
              opacity: 0,
              y: -30,
            }}
            animate={
              docked
                ? {
                    scale: 0.5,
                    opacity: 1,
                    width: 80,
                    height: 80,
                    x: "calc(50vw - 50%)", // ensures smooth transition from center
                    y: "calc(50vh - 50%)",
                    bottom: 20,
                    right: 20,
                  }
                : {
                    scale: 1,
                    opacity: 1,
                    width: 160,
                    height: 160,
                    y: 0,
                  }
            }
            transition={{
              duration: docked ? 1.4 : 1.2,
              ease: "easeInOut",
            }}
            style={{ willChange: "transform" }}
          >
            {/* Glowing ring */}
            {/* @ts-ignore */}
            <PulsingBorder
              colors={["#FFD700", "#FF6B35", "#8A2BE2"]}
              colorBack="#00000000"
              speed={1.2}
              roundness={1}
              thickness={0.22}
              softness={0.02}
              intensity={3.5}
              spots={4}
              spotSize={0.25}
              pulse={0.15}
              smoke={0}
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
