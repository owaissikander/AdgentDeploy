"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import React from "react"

const Boxdata = [
  {
    id: 1,
    desc: "Set up and launch campaigns",
    image: "/images/featuresectionimage/zero.svg",
  },
  {
    id: 2,
    desc: "Manages keywords & negatives",
    image: "/images/featuresectionimage/zero2.webp",
  },
  {
    id: 3,
    desc: "Rebalance budget for better ROI",
    image: "/images/featuresectionimage/zero1.webp",
  },
  {
    id: 4,
    desc: "Benchmark ads against competitors",
    image: "/images/featuresectionimage/zero3.webp",
  },
  {
    id: 5,
    desc: "Audit and optimize ad settings",
    image: "/images/featuresectionimage/zero5.webp",
  },
  {
    id: 6,
    desc: "Generate optimized ad creatives",
    image: "/images/featuresectionimage/zero4.webp",
  },
];

const FeaturesSection = () => {
  const prefersReduced = useReducedMotion()

  // container animation for staggering
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.15,
      },
    },
  }

  // card animation: 3D + scale pop
  const cardAnim = {
    hidden: { opacity: 0, y: 60, rotateX: prefersReduced ? 0 : -20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        type: "spring",
        stiffness: 120,
      },
    },
  }

  return (
    <section className="relative w-full py-20 px-5 mx-auto">
      <div
        className="relative max-w-7xl border border-[#D9D9D9] rounded-2xl mx-auto px-4 sm:px-8 py-10"
        style={{
         // backgroundImage: 'url("/images/bgimage.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2 className="mb-8 text-center text-xl font-semibold sm:text-3xl">
          Replace agencies with AdGent AI
        </h2>

        <motion.div
          className="w-full max-w-7xl mx-auto p-1 sm:p-6 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {Boxdata.map((item, index) => (
            <motion.div
              key={item.id}
              variants={cardAnim}
              whileHover={
                prefersReduced
                  ? {}
                  : {
                      scale: 1.05,
                      y: -6,
                      rotateX: 2,
                      rotateY: -2,
                      boxShadow: "0 12px 25px rgba(0,0,0,0.12)",
                    }
              }
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="p-6 rounded-xl bg-white cursor-pointer"
            >
              <div className="text-xl sm:text-2xl pr-6">{item.desc}</div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
              >
                <Image
                  src={item.image}
                  height={1040}
                  width={1040}
                  className="w-full object-contain mt-6"
                  alt={item.desc}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection
