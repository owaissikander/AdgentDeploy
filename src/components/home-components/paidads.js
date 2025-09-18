'use client'

import Image from 'next/image'
import { Card, Button, Input } from '@heroui/react'
import { motion, useReducedMotion } from 'framer-motion'
import React from 'react'

const data = [
  { id: 1, desc: '100+ settings before your ad goes live' },
  { id: 2, desc: 'PPC takes years to master' },
  { id: 3, desc: 'Ads slip without daily monitoring' },
]

export default function PaidAds() {
  const prefersReduced = useReducedMotion()

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="relative py-6 w-full max-w-7xl mx-auto">
      {/* main flex */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-10 p-8">
        {/* image with animation */}
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={
              prefersReduced
                ? {}
                : { y: [0, -10, 0] }
            }
            transition={
              prefersReduced
                ? {}
                : { duration: 6, repeat: Infinity, ease: 'easeInOut' }
            }
          >
            <Image
              width={1040}
              height={1040}
              src="/images/budgetimage.webp"
              alt="Ad visual"
              className="w-96 h-80 bg-cover  rounded-2xl"
            />
          </motion.div>
        </motion.div>

        {/* right content */}
        <motion.div
          className="w-full max-w-xl"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            variants={item}
            className="text-2xl sm:text-3xl mb-4 text-center sm:text-start font-bold"
          >
            80% of paid ads lose money
          </motion.div>

          {data.map((d) => (
            <motion.div
              key={d.id}
              variants={item}
              className="w-full my-4 px-6 border-1 border-[#D9D9D9] rounded-lg py-4"
            >
              {d.desc}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* input section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full flex flex-col mt-6 px-5 sm:px-0 justify-center items-center"
      >
        <div className="text-1xl sm:text-2xl mb-4 font-bold">
          Free ad account review
        </div>

        <Input
          className="w-full sm:max-w-2xl"
          classNames={{
            inputWrapper: 'pl-4 pr-0 border-[#000000]',
          }}
          type="email"
          required
          size="lg"
          variant="bordered"
          radius="full"
          placeholder="Enter your email"
          endContent={
            <motion.div
              whileHover={prefersReduced ? {} : { scale: 1.05, y: -1 }}
              whileTap={prefersReduced ? {} : { scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 350, damping: 22 }}
            >
              <Button
                size="lg"
                radius="full"
                className="bg-black w-[160px] text-white"
              >
                Get audit
              </Button>
            </motion.div>
          }
          aria-label="Email address"
        />
      </motion.div>
    </section>
  )
}
