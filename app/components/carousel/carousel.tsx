'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import { SiNextdotjs, SiVercel, SiTailwindcss,
         SiDaisyui, SiTerraform, SiSupabase,
         SiTypescript, SiReact, SiJavascript, 
         SiPlaywright, SiSwr, SiCss3, SiPostgresql,
         SiSass, SiGithubactions
        } from "react-icons/si";

const iconComponents:any = {
  'SiNextdotjs': SiNextdotjs,
  'SiVercel': SiVercel,
  'SiTailwindcss': SiTailwindcss,
  'SiDaisyui': SiDaisyui,
  'SiTerraform': SiTerraform,
  'SiSupabase': SiSupabase,
  'SiTypescript': SiTypescript,
  'SiPlaywright': SiPlaywright,
  'SiReact': SiReact,
  'SiJavascript': SiJavascript,
  'SiSwr': SiSwr,
  'SiCss3': SiCss3,
  'SiPostgresql': SiPostgresql,
  'SiSass': SiSass,
  'SiGithubactions': SiGithubactions,
};

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import styles from './styles.module.scss';


export default function Project({imgs, quote}: any) {

  const onLiveClick = ()=>{
    alert(quote.alert)
  }

  return (
    <div className={styles.project}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.swiper}
      >
        {imgs.map((item:any, key:number)=>(
          <SwiperSlide className={styles.swiperSlide} key={key}>
            <img src={item.src} alt={item.alt}/>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.quoteBox}>
        <h3>{quote.title}</h3>
        <p>
          {quote.text}
        </p>
        <div className={styles.stack}>
          {quote.stack.map((item:any, key:number) => {
            const IconComponent = iconComponents[item];
            return IconComponent ? <IconComponent key={key} className={styles[item]} /> : null;
          })}
        </div>
        <div className={styles.btnsBox}>
          <a href={quote.repo} target='_blank'>Source Code</a>
          {quote.alert ? (
            <a href={quote.live} target='_blank' onClick={onLiveClick}>Live Demo</a>
          ) : quote.live ? (
            <a href={quote.live} target='_blank'>Live Demo</a>
          ) : (
            null
          )}
        </div>
      </div>
    </div>
  );
}
