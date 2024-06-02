'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-flip';

import styles from './styles.module.scss';



export default function TestSwiper() {
  return (
    <div>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className={styles.swiper}
      >
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          <div>
            <p>Hello</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
