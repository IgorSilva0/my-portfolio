'use client'
import styles from './styles/styles.module.scss';
import { motion } from 'framer-motion';
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import Image from 'next/image';
import Nav from './components/nav/nav';
import Project from './components/project/project';
import About from './components/about/about';
import { SoCImgs, SoCQuote } from '@/public/imgs/SoCBrain/imgs';
import { GCImgs, GCQuote } from '@/public/imgs/GamingCombo/imgs';
import { CImgs, CQuote } from '@/public/imgs/Countries/imgs';
import { useEffect, useState } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};
const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Home = () => {
  const [current, setCurrent] = useState('home')
  const [arrowVisible, setArrowVisible] = useState(0)

  const handleClick = (section: string) => {
    setCurrent(section);
    setArrowVisible(0);
    setTimeout(() => {
      const element = document.querySelector(`#${section}`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  useEffect(() => {
    let incrementValue = 0;
    const interval = 17; // Interval in milliseconds
    const maxIncrements = 100; // Number of increments

      const intervalId = setInterval(() => {
        setArrowVisible((prev) => prev + 0.01);
        incrementValue++;

        if (incrementValue >= maxIncrements) {
          clearInterval(intervalId);
        }
      }, interval);

      return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [current]);


  return (
    <>
      <section className={current === 'home' ? styles.sections : `${styles.sections} ${styles.hidden}`} id='home'>
        <Nav setCurrent={setCurrent}/>
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
          {current === 'home' ? <FaAnglesDown className={styles.arrowDown} style={{ opacity: arrowVisible }} onClick={()=>handleClick('mywork')}/> : null}
        </motion.div>
      </section>
      <section className={current === 'mywork' ? styles.sections : `${styles.sections} ${styles.hidden}`} id='mywork'>
        {current === 'mywork' ? <FaAnglesUp className={styles.arrowUp} style={{ opacity: arrowVisible }} onClick={()=>handleClick('home')}/> : null}
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
        {current === 'mywork' ? <FaAnglesDown className={styles.arrowDown} style={{ opacity: arrowVisible }} onClick={()=>handleClick('about')}/> : null}
      </section>
      <section className={current === 'about' ? styles.sections : `${styles.sections} ${styles.hidden}`} id='about'>
        {current === 'about' ? <FaAnglesUp className={styles.arrowUp} style={{ opacity: arrowVisible }} onClick={()=>handleClick('mywork')}/> : null}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown} className={styles.aboutIntro}
        > 
          <h1 className={styles.aboutTitle}>About</h1>
        </motion.div>
        {current === 'about' ? <FaAnglesDown className={styles.arrowDown} style={{ opacity: arrowVisible }} onClick={()=>handleClick('contact')}/> : null}
        <About />
      </section>
      <section className={current === 'contact' ? styles.sections : `${styles.sections} ${styles.hidden}`} id='contact'>
        {current === 'contact' ? <FaAnglesUp className={styles.arrowUp} style={{ opacity: arrowVisible }} onClick={()=>handleClick('about')}/> : null}
        <div className={styles.contactContainer}>
          <h1>Contact section under construction... 🤖</h1>
          <p>Email : igorsilvauk@gmail.com </p>
          <p>Phone : 07748122933 </p>
          <p>Based in Cheshire - UK</p>
        </div>
        {current === 'contact' ? <GiReturnArrow className={styles.arrowDown} style={{ opacity: arrowVisible, fontSize: '5rem' }} onClick={()=>handleClick('home')}/> : null}
      </section>
    </>
  );
}

export default Home;
