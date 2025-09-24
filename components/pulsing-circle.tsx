"use client"

import { PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function PulsingCircle() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative w-20 h-20 flex items-center justify-center">
        {/* Pulsing Border Circle */}
        <PulsingBorder
          colors={["#BEECFF", "#E77EDC", "#FF4C3E", "#00FF88", "#FFD700", "#FF6B35", "#8A2BE2"]}
          colorBack="#00000000"
          speed={1.5}
          roundness={1}
          thickness={0.1}
          softness={0.2}
          intensity={5}
          spotsPerColor={5}
          spotSize={0.1}
          pulse={0.1}
          smoke={0.5}
          smokeSize={4}
          scale={0.65}
          rotation={0}
          frame={9161408.251009725}
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
          }}
        />

        {/* Center logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image src="/aurea-logo.png" alt="Aurea Logo" width={24} height={24} className="z-10" />
        </div>

        {/* Rotating text */}
        <motion.svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          style={{ transform: "scale(1.6)" }}
        >
          <defs>
            <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
          </defs>
          {/* 👇 Tailwind handles theme switching */}
          <text className="text-sm font-medium fill-black dark:fill-white">
            <textPath href="#circle" startOffset="0%">
              Aurea Intelligence . Aurea Intelligence
            </textPath>
          </text>
        </motion.svg>
      </div>
    </div>
  )
}
