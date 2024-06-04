// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { SiNextdotjs, SiVercel, SiTailwindcss,
    SiDaisyui, SiTerraform, SiSupabase,
    SiTypescript, SiReact, SiJavascript, 
    SiPlaywright, SiSwr, SiCss3, SiPostgresql,
    SiSass, SiGithubactions, SiHtml5, SiGit,
    SiNodedotjs, SiExpress, SiJest, SiFramer,
    SiSwiper
   } from "react-icons/si";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import styles from './styles.module.scss';

// import required modules
import { Autoplay } from 'swiper/modules';

import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

export default function Stack() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp} className={styles.stack}
    >
      <h3>My Stack</h3>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 5000, // adjust the delay as needed
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 80,
          },
        }}
        modules={[Autoplay]}
        className={styles.swiper}
        loop={true} // Enable continuous loop
      >
        <SwiperSlide className={styles.swiperSlide}><SiVercel className={styles.SiVercel}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiTailwindcss className={styles.SiTailwindcss}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiGit className={styles.SiGit}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiNextdotjs className={styles.SiNextdotjs}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiNodedotjs className={styles.SiNodedotjs}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiDaisyui className={styles.SiDaisyui}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiTerraform className={styles.SiTerraform}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiSupabase className={styles.SiSupabase}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiTypescript className={styles.SiTypescript}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiExpress className={styles.SiExpress}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiJest className={styles.SiJest}/></SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}><SiFramer className={styles.SiFramer}/></SwiperSlide>

        <SwiperSlide className={styles.swiperSlide}><SiSwiper className={styles.SiSwiper}/></SwiperSlide>


        <SwiperSlide className={styles.swiperSlide}><SiReact className={styles.SiReact}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiJavascript className={styles.SiJavascript}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiPlaywright className={styles.SiPlaywright}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiSwr className={styles.SiSwr}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiCss3 className={styles.SiCss3}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiPostgresql className={styles.SiPostgresql}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiSass className={styles.SiSass}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiGithubactions className={styles.SiGithubactions}/></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiHtml5 className={styles.SiHtml5}/></SwiperSlide>
        
      </Swiper>
    </motion.div>
  );
}