
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import { SiNextdotjs, SiVercel, SiTailwindcss,
  SiDaisyui, SiTerraform, SiSupabase,
  SiTypescript, SiReact, SiJavascript, 
  SiPlaywright, SiSwr, SiCss3, SiPostgresql,
  SiSass, SiGithubactions, SiHtml5, SiGit,
  SiNodedotjs, SiExpress, SiJest, SiSwiper , SiShadcnui
 } from "react-icons/si";
 import { FaStripe } from "react-icons/fa6";
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
  'SiSwiper': SiSwiper,
  'SiShadcnui' : SiShadcnui,
  'FaStripe': FaStripe,
};

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import styles from './styles.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Project({imgs, quote}: any) {

  const onLiveClick = ()=>{
    alert(quote.alert)
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp} className={styles.project}
    >
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
            <Image src={item.src} alt={item.alt} width={200} height={270}/>
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
    </motion.div>
  );
}
