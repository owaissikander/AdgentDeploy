"use client"

import { Button } from "@heroui/react"
import { Logo } from "../../../public/logo/logo"
import { motion, useReducedMotion } from "framer-motion"
import React from "react"

export default function Footer() {
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
    hidden: { opacity: 0, y: prefersReduced ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <footer className="w-full pb-10 sm:py-10 px-5 bg-gradient-to-b from-white via-white to-gray-50">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row items-center sm:justify-between"
      >
        {/* left section */}
        <motion.div
          variants={container}
          className="flex justify-between w-full sm:flex-col items-center sm:items-start gap-2"
        >
          <motion.div variants={item}>
            <Logo className="w-40 sm:w-48 h-auto" />
          </motion.div>
          <motion.p
            variants={item}
            className="sm:text-sm text-[13px] text-gray-600"
          >
            First AI to manage paid search
          </motion.p>
        </motion.div>

        {/* button */}
        {/* <motion.div
          variants={item}
          whileHover={prefersReduced ? {} : { scale: 1.05 }}
          whileTap={prefersReduced ? {} : { scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Button
            size="md"
            radius="full"
            className="bg-black w-[160px] text-white"
          >
            Get started
          </Button>
        </motion.div> */}
      </motion.div>

      {/* divider + bottom text */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mt-4 sm:mt-8 max-w-7xl border-t border-black pt-4 sm:pt-6"
      >
        <motion.div
          variants={item}
          className="flex flex-col items-center justify-end gap-4 text-sm text-gray-600 sm:flex-row"
        >
          <p>
            Contact Us:{" "}
            <a
              href="mailto:ads@adgent.co"
              className="hover:text-gray-900 transition-colors"
            >
              ads@adgent.co
            </a>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}
