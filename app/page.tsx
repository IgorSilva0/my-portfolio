'use client'
import styles from './styles/styles.module.scss';
import { motion } from 'framer-motion';
import { FaAnglesDown } from "react-icons/fa6";
import Image from 'next/image';
import Nav from './components/nav/nav';
import Project from './components/carousel/carousel';
import About from './components/about/about';
import { SoCImgs, SoCQuote } from '@/public/imgs/SoCBrain/imgs';
import { GCImgs, GCQuote } from '@/public/imgs/GamingCombo/imgs';
import { CImgs, CQuote } from '@/public/imgs/Countries/imgs';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};
const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Home = () => {
  return (
    <>
      <section className={styles.section} id='home'>
        <Nav />
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp} className={styles.home}>
          <div className={styles.intro}>
            <p className={styles.welcome}>Welcome to my portfolio</p>
            <h1 className={styles.title}>
              I&apos;m <p className={styles.name}>Igor Silva</p>, a <br />Full-Stack Engineer.
            </h1>
            <p className={styles.txt}>
              I&apos;m excited to share my journey with you. Here, you&apos;ll find a collection of projects that I&apos;m passionate about and proud of.
            </p>
            <p className={styles.thanks}>Thanks for stopping by!</p>
          </div>
          <div className={styles.imgBox}>
            <Image className={styles.img} src={'/imgs/profile.png'} alt='Profile image' width={265} height={450} />
          </div>
        </motion.div>
      </section>
      <section className={styles.projectsSection} id='projects'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown} className={styles.projectsIntro}
        >
          <h1 className={styles.projectsTitle}>My Work</h1>
        </motion.div>
        <div className={styles.projects}>
          <Project imgs={SoCImgs} quote={SoCQuote} />
          <Project imgs={CImgs} quote={CQuote} />
          <Project imgs={GCImgs} quote={GCQuote} />
        </div>
      </section>
      <section className={styles.about} id='about'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown} className={styles.aboutIntro}
        >
          <h1 className={styles.aboutTitle}>About</h1>
        </motion.div>
        <About />
      </section>
    </>
  );
}

export default Home;
