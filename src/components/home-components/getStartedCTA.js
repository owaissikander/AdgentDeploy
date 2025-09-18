"use client"

import { Button } from "@heroui/react"
import { motion, useReducedMotion } from "framer-motion"
import React from "react"

const GetStartedCTA = () => {
  const prefersReduced = useReducedMotion()

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.15,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="relative px-5 sm:px-0 w-full pb-10 pt-20">
      <div
        className="w-full p-5 sm:p-10 mt-8 relative max-w-7xl rounded-2xl mx-auto"
        style={{
         // backgroundImage: 'url("/images/getbgimage.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col px-4 sm:px-6 py-6 justify-center rounded-lg border overflow-hidden border-[#D9D9D9] bg-[#FFFFFF] mx-auto gap-6"
        >
          <motion.h1
            variants={item}
            className="text-[clamp(1rem,-0.2821rem+4.1026vw,3rem)] text-center font-semibold"
          >
            Let AI Run Your Ads
          </motion.h1>

          <motion.p
            variants={item}
            className="text-center text-[#000] font-thin"
          >
            Spend 90% less time on ads
          </motion.p>

          <motion.div
            variants={item}
            whileHover={prefersReduced ? {} : { scale: 1.05 }}
            whileTap={prefersReduced ? {} : { scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="self-center"
          >
            <Button
              size="lg"
              radius="full"
              className="bg-black text-white w-[220px]"
            >
              Get audit
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default GetStartedCTA
