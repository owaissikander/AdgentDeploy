'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { Button, Card, Input } from '@heroui/react';

export default function Home() {
  const images = [
    "/images/image4.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image1.png", // Adidas wali
    "/images/image5.png",
    "/images/image6.png",
    "/images/image7.png",
  ];

  return (



    <div className="max-w-5xl relative pt-10 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ amount: 0.4, once: true }}
      >
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          initialSlide={3}
          loopedSlides={images.length}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 3.5,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          // autoplay={false}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative transition-transform duration-300">
                <Image
                  width={2160}
                  height={2160}
                  className="h-[490px] sm:h-[550px] min-w-[230px] sm:min-w-[350px] w-full !overflow-hidden !rounded-lg"
                  src={src}
                  alt={`Slide ${i}`}
                />
              </div>
            </SwiperSlide>
          ))}


        </Swiper>
      </motion.div>
      <div className="absolute inset-0 flex z-40 top-0 items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ amount: 0.4, once: true }}
        >
          <Card className="max-w-3xl sm:w-full rounded-2xl p-4 border border-white sm:p-8 bg-white/40 backdrop-blur-md">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl sm:text-4xl font-semibold mb-6 text-center sm:text-left"
            >
              Let AI manage your paid ads
            </motion.h2>

            <Input
              className="w-full sm:max-w-2xl"
              classNames={{
                inputWrapper: 'pl-4 pr-0 border-[#000000]',
              input:"placeholder:text-black"
              }}
              type="text"
              required
              size="md"
              variant="bordered"

              radius="full"
              placeholder="Get 3x more from your paid ads"
              endContent={
                <motion.div

                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                >
                  <Button
                    size="md"
                    radius="full"
                    className="bg-black w-[120px]   sm:w-[160px] text-white"
                  >
                    Get early access
                  </Button>
                </motion.div>
              }
              aria-label="Email address"
            />
          </Card>
        </motion.div>
      </div>
    </div>

  );
}