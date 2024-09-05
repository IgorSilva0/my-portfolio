'use client'
import styles from './styles/styles.module.scss';
import { motion } from 'framer-motion';
import { FaAnglesDown, FaAnglesUp } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import Image from 'next/image';
import Nav from './components/nav/nav';
import Project from './components/project/project';
import About from './components/about/about';
import Contact from './components/contact/contact';
import { SoCImgs, SoCQuote } from '@/public/imgs/SoCBrain/imgs';
import { GCImgs, GCQuote } from '@/public/imgs/GamingCombo/imgs';
import { CImgs, CQuote } from '@/public/imgs/Countries/imgs';
import { CarRentalImgs, CarRentalQuote } from '@/public/imgs/CarRental/imgs';
import { useEffect, useState } from 'react';
import NavMobile from './components/nav/navMobile';
import { BiHomeHeart } from "react-icons/bi";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};
const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Home = () => {
  const [current, setCurrent] = useState('home');
  const [arrowVisible, setArrowVisible] = useState(0);

  const [home, setHome] = useState<Element | null>(null);
  const [mywork, setMywork] = useState<Element | null>(null);
  const [about, setAbout] = useState<Element | null>(null);
  const [contact, setContact] = useState<Element | null>(null);

  const handleClick = async (section: Element | null) => {
    setArrowVisible(0);
    section!.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  useEffect(() => {
    setHome(document.querySelector(`#home`));
    setMywork(document.querySelector(`#mywork`));
    setAbout(document.querySelector(`#about`));
    setContact(document.querySelector(`#contact`));
  }, []);

  return (
    <>
      <section className={current === 'home' ? styles.sections : `${styles.sections} ${styles.hidden}`} id='home'>
        <Nav setCurrent={setCurrent} setArrowVisible={setArrowVisible}/>
        <NavMobile setCurrent={setCurrent} setArrowVisible={setArrowVisible}/>
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
          {current === 'home' ? <FaAnglesDown className={styles.arrowDown} style={{ opacity: arrowVisible }} onClick={()=>{handleClick(mywork); setCurrent("mywork")}}/> : null}
        </motion.div>
      </section>
      <section className={current === 'mywork' ? styles.sections : `${styles.sections} ${styles.hidden}`} id='mywork'>
        {current === 'mywork' ? <FaAnglesUp className={styles.arrowUp} style={{ opacity: arrowVisible }} onClick={()=>{handleClick(home); setCurrent("home")}}/> : null}
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
          <Project imgs={CarRentalImgs} quote={CarRentalQuote} />
          <Project imgs={CImgs} quote={CQuote} />
          <Project imgs={GCImgs} quote={GCQuote} />
        </div>
        {current === 'mywork' ? <FaAnglesDown className={styles.arrowDown} style={{ opacity: arrowVisible }} onClick={()=>{handleClick(about); setCurrent("about")}}/> : null}
      </section>
      <section className={current === 'about' ? styles.sections : `${styles.sections} ${styles.hidden}`} id='about'>
        {current === 'about' ? <FaAnglesUp className={styles.arrowUp} style={{ opacity: arrowVisible }} onClick={()=>{handleClick(mywork); setCurrent("mywork")}}/> : null}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown} className={styles.aboutIntro}
        > 
          <h1 className={styles.aboutTitle}>About</h1>
        </motion.div>
        {current === 'about' ? <FaAnglesDown className={styles.arrowDown} style={{ opacity: arrowVisible }} onClick={()=>{handleClick(contact); setCurrent("contact")}}/> : null}
        <About />
      </section>
      <section className={current === 'contact' ? styles.sections : `${styles.sections} ${styles.hidden}`} id='contact'>
        {current === 'contact' ? <FaAnglesUp className={styles.arrowUp} style={{ opacity: arrowVisible }} onClick={()=>{handleClick(about); setCurrent("about")}}/> : null}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown} className={styles.contactIntro}
        > 
          <h1 className={styles.contactTitle}>Contact</h1>
        </motion.div>
        <Contact/>
        <BiHomeHeart className={styles.returnHome} onClick={()=>{handleClick(home); setCurrent("home")}}/>
        {current === 'contact' ? <GiReturnArrow className={styles.arrowDown} style={{ opacity: arrowVisible, fontSize: '2rem' }} onClick={()=>{handleClick(home); setCurrent("home")}}/> : null}
      </section>
    </>
  );
}
export default Home;
