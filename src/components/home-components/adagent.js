"use client"

import { Card, Chip } from "@heroui/react"
import Image from "next/image"
import { MdCheckCircle } from "react-icons/md"
import { motion, useReducedMotion } from "framer-motion"
import React from "react"

const Bullet = ({ children }) => (
  <li className="flex items-start gap-2">
    <MdCheckCircle size={20} color="#4192E0" className="mt-0.5" />
    <span>{children}</span>
  </li>
)

export default function AdAgent() {
  const prefersReduced = useReducedMotion()

  const cardAnim = {
    hidden: { opacity: 0, y: prefersReduced ? 0 : 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  }

  return (
    <section className="py-20 px-5">
      <div
        style={{
        //  backgroundImage: 'url("/images/bgimage2.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative max-w-7xl border border-[#D9D9D9] rounded-2xl mx-auto px-4 sm:px-8 py-10"
      >
        <h2 className="mb-8 text-center text-xl font-semibold sm:text-3xl">
          How AdGent optimizes your ads
        </h2>

        <div className="space-y-6 max-w-7xl mx-auto">
          {/* card 1 */}
          <motion.div
            variants={cardAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="rounded-2xl shadow-none border grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center border-[#D9D9D9] bg-white p-4 ">
              <div className="order-2 py-6 px-2  justify-start h-full sm:px-6 flex flex-col gap-3 col-span-6 lg:col-span-7 md:order-1">
                <Chip
                  size="sm"
                  radius="full"
                  className="mb-3 text-md border border-[#D9D9D9] p-4 bg-gray-100"
                >
                  01
                </Chip>
                <h3 className="text-2xl sm:text-4xl font-medium">
                  Fine-tune campaigns to boost ROI
                </h3>
                <ul className="mt-5 sm:mt-10 flex flex-col gap-2 text-gray-600">
                  <Bullet>24/7 ad monitoring across Meta and Google</Bullet>
                  <Bullet>Keeps optimizing keywords, targeting, and creatives</Bullet>
                </ul>
              </div>
              <div className="order-1 md:order-2 flex lg:justify-end col-span-6 lg:col-span-5">
                <div className="bg-[#F9F9F9] w-fit border border-[#E5E5E5] overflow-hidden rounded-xl">
                  <Image
                    src="/images/agent1.png"
                    width={2056}
                    height={2056}
                    className="w-full sm:w-[360px]"
                    alt="Company Logo"
                  />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* card 2 */}
          <motion.div
            variants={cardAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="rounded-2xl shadow-none border grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center border-[#D9D9D9] bg-white p-4 ">
              <div className="order-2 py-6 px-2  justify-start h-full sm:px-6 flex flex-col gap-3 col-span-6 lg:col-span-7 md:order-1">
                <Chip
                  size="sm"
                  radius="full"
                  className="mb-3 text-md border border-[#D9D9D9] p-4 bg-gray-100"
                >
                  02
                </Chip>
                <h3 className="text-2xl sm:text-4xl font-medium">The AI admaker</h3>
                <ul className="mt-5 sm:mt-10 flex flex-col gap-2 text-gray-600">
                  <Bullet>Generates ad copy and visuals</Bullet>
                  <Bullet>Tests ads to find winners</Bullet>
                </ul>
              </div>
              <div className="order-1 md:order-2 flex lg:justify-end col-span-6 lg:col-span-5">
                <div className="bg-[#F9F9F9] w-fit overflow-hidden rounded-2xl">
                  <Image
                    src="/images/agent4.png"
                    width={2056}
                    height={2056}
                    className="w-full sm:w-[360px]"
                    alt="Company Logo"
                  />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* card 3 */}
          <motion.div
            variants={cardAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="rounded-2xl shadow-none  border grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center border-[#D9D9D9] bg-white p-4 ">
              <div className="order-2 py-6 px-2 sm:px-6  justify-start h-full flex flex-col gap-3 col-span-6 lg:col-span-7 md:order-1">
                <Chip
                  size="sm"
                  radius="full"
                  className="mb-3 text-md border border-[#D9D9D9] p-4 bg-gray-100"
                >
                  03
                </Chip>
                <h3 className="text-2xl sm:text-4xl font-medium">
                  Real-time budget optimization
                </h3>
                <ul className="mt-5 sm:mt-10 flex flex-col gap-2 text-gray-600">
                  <Bullet>Moves budget across Google, Meta, Reddit & Microsoft</Bullet>
                  <Bullet>Optimizes budget using performance data</Bullet>
                </ul>
              </div>
              <div className="order-1 md:order-2 flex lg:justify-end col-span-6 lg:col-span-5">
                <div className="bg-[#F9F9F9] w-fit border border-[#E5E5E5] overflow-hidden rounded-xl">
                  <Image
                    src="/images/agent3.png"
                    width={2160}
                    height={1080}
                    className="w-fit sm:w-[360px]"
                    alt="Company Logo"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
