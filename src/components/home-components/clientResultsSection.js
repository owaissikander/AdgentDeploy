"use client"

import { motion, useInView, useReducedMotion } from "framer-motion"
import React, { useRef, useEffect, useState } from "react"

// =============================
// Custom count-up hook
// =============================
const useCountUp = (target, inView, duration = 1500) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let start = 0
    const end = target
    const range = end - start
    const stepTime = Math.max(20, Math.abs(Math.floor(duration / Math.abs(range || 1))))
    let current = start

    const timer = setInterval(() => {
      current = range > 0 ? current + 1 : current - 1
      setCount(current)
      if (current === end) clearInterval(timer)
    }, stepTime)

    return () => clearInterval(timer)
  }, [target, inView, duration])

  return count
}

// =============================
// Single card component
// =============================
const ResultCard = ({ temp, wind, isInView, prefersReduced, cardAnim }) => {
  const count = useCountUp(temp, isInView)

  return (
    <motion.div
      variants={cardAnim}
      whileHover={
        prefersReduced
          ? {}
          : {
              scale: 1.05,
              y: -6,
              boxShadow: "0 10px 25px rgba(59,130,246,0.3)",
            }
      }
      transition={{ type: "spring", stiffness: 150, damping: 12 }}
      className="group py-12 px-14 border-1 border-[#AEBCF6]
                 hover:bg-gradient-to-b hover:from-[#AEBCF6] hover:to-[#E3DAF8]
                 transition-all duration-200 flex flex-col justify-center items-center rounded-sm"
    >
      <span className="text-[#3B82F6] text-3xl font-semibold group-hover:text-white">
        {temp > 0 ? "+" : ""}
        {count}%
      </span>
      <span className="text-[#3B82F6] group-hover:text-white">
        {wind}
      </span>
    </motion.div>
  )
}

// =============================
// Main section component
// =============================
const TemperatureData = [
  { id: 1, temp: -40, wind: "CTR" },
  { id: 2, temp: 30, wind: "CPC" },
  { id: 3, temp: 20, wind: "ROI" },
  { id: 4, temp: -80, wind: "Time Spend" },
]

const ClientResultsSection = () => {
  const prefersReduced = useReducedMotion()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: prefersReduced ? 0 : 0.15 },
    },
  }

  const cardAnim = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="relative w-full">
      <div
        className="w-full relative px-8 py-16"
        style={{
          backgroundImage: 'url("/images/clientbgimage.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-[clamp(1rem,-0.2821rem+4.1026vw,2rem)] mb-6 text-center font-semibold">
          Client Results
        </h1>

        <motion.div
          ref={ref}
          className="max-w-7xl flex flex-col sm:flex-row justify-center mx-auto gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {TemperatureData.map((item) => (
            <ResultCard
              key={item.id}
              temp={item.temp}
              wind={item.wind}
              isInView={isInView}
              prefersReduced={prefersReduced}
              cardAnim={cardAnim}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ClientResultsSection
