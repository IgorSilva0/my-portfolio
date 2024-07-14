// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { SiNextdotjs, SiVercel, SiTailwindcss,
    SiDaisyui, SiTerraform, SiSupabase,
    SiTypescript, SiReact, SiJavascript, 
    SiPlaywright, SiSwr, SiCss3, SiPostgresql,
    SiSass, SiGithubactions, SiHtml5, SiGit,
    SiNodedotjs, SiExpress, SiJest, SiFramer,
    SiSwiper, SiFigma
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
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
        autoplay={{
          delay: 100, // No initial delay
          disableOnInteraction: false,
        }}
        speed={3500} // Slide transition duration in milliseconds (2 seconds in this case)
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
        <SwiperSlide className={styles.swiperSlide}><SiVercel className={styles.SiVercel}/><a>Vercel</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiTailwindcss className={styles.SiTailwindcss}/><a>Tailwind</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiGit className={styles.SiGit}/><a>Git</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiNextdotjs className={styles.SiNextdotjs}/><a>Next.js</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiNodedotjs className={styles.SiNodedotjs}/><a>Node.js</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiDaisyui className={styles.SiDaisyui}/><a>DaisyUI</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiTerraform className={styles.SiTerraform}/><a>Formik</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiSupabase className={styles.SiSupabase}/><a>Supabase</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiTypescript className={styles.SiTypescript}/><a>TypeScript</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiExpress className={styles.SiExpress}/><a>Express.js</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiJest className={styles.SiJest}/><a>Jest</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiFramer className={styles.SiFramer}/><a>Motion</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiSwiper className={styles.SiSwiper}/><a>Swiper</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiReact className={styles.SiReact}/><a>React</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiJavascript className={styles.SiJavascript}/><a>JavaScript</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiPlaywright className={styles.SiPlaywright}/><a>Playwright</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiSwr className={styles.SiSwr}/><a>Swr</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiCss3 className={styles.SiCss3}/><a>Css</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiPostgresql className={styles.SiPostgresql}/><a>Postgres</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiSass className={styles.SiSass}/><a>Sass</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiGithubactions className={styles.SiGithubactions}/><a>GH.Actions</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiHtml5 className={styles.SiHtml5}/><a>Html</a></SwiperSlide>
        <SwiperSlide className={styles.swiperSlide}><SiFigma className={styles.SiFigma}/><a>Figma</a></SwiperSlide>
      </Swiper>
    </motion.div>
  );
}