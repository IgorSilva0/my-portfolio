'use client'
import styles from './styles/styles.module.scss';
import { motion } from 'framer-motion';
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
import { OnlineShopImgs, OnlineShopQuote } from '@/public/imgs/OnlineShop/imgs';
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
  const [home, setHome] = useState<Element | null>(null);

  const handleClick = async (section: Element | null) => {
    section!.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };

  useEffect(() => {
    setHome(document.querySelector(`#home`));
  }, []);

  function getCurrentDate(): string {
    const today = new Date();
    
    // Array of month names to convert numeric month to string
    const monthNames = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    const day = today.getDate();
    const month = monthNames[today.getMonth()];
    const year = today.getFullYear();

    return `Last updated: ${month} ${day}, ${year}`;
  }

  return (
    <>
      <section className={styles.sections} id='home'>
        <Nav />
        <NavMobile />
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
            <p className={styles.currently}>Currently, I&apos;m learning Python and building an online banking web app.</p>
            <span className={styles.lastupdate}>{getCurrentDate()}</span>
          </div>
          <div className={styles.imgBox}>
            <Image className={styles.img} src={'/imgs/profile.png'} alt='Profile image' width={265} height={450} />
          </div>
        </motion.div>
      </section>
      <section className={styles.sections} id='mywork'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown} className={styles.projectsIntro}
        >
          <h1 className={styles.projectsTitle}>My Work</h1>
        </motion.div>
        <div className={styles.projects}> 
          <Project imgs={OnlineShopImgs} quote={OnlineShopQuote} />
          <Project imgs={SoCImgs} quote={SoCQuote} />
          <Project imgs={CarRentalImgs} quote={CarRentalQuote} />
          <Project imgs={CImgs} quote={CQuote} />
          <Project imgs={GCImgs} quote={GCQuote} />
        </div>
      </section>
      <section className={styles.sections} id='about'>
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
      <section className={styles.sections} id='contact'>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInDown} className={styles.contactIntro}
        > 
          <h1 className={styles.contactTitle}>Contact</h1>
        </motion.div>
        <Contact/>
        <BiHomeHeart className={styles.returnHome} onClick={()=>handleClick(home)}/>
        <GiReturnArrow className={styles.arrowDown} style={{ opacity: 1, fontSize: '2rem' }} onClick={()=>handleClick(home)}/>
      </section>
    </>
  );
}
export default Home;
