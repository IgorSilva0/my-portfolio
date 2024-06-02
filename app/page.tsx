import styles from './styles/styles.module.scss';
import { FaAnglesDown } from "react-icons/fa6";
import Image from 'next/image';
import Nav from './components/nav/nav';
import Code from './components/code/code'
import TestSwiper from './components/carousel/carousel';

const Home = () => {
  return (
    <>
    <section className={styles.section}>
      <Nav/> 
      <div className={styles.home}>
        <div className={styles.intro}>
          <p className={styles.welcome}>Welcome to my portfolio</p>
          <h1 className={styles.title}>I&apos;m <p className={styles.name}>Igor Silva</p>, a <br/>Full-Stack Engineer.</h1>
          <p className={styles.txt}>I&apos;m excited to share my journey with you.
             Here, you&apos;ll find a collection of projects that
             I&apos;m passionate about and proud of.
          </p>
          {/* <p className={styles.txt}>I'm always excited to learn and dive into new technologies,
             frameworks, and programming languages.
          </p> */}
          <p className={styles.thanks}>Thanks for stopping by!</p>
        </div>
        <div className={styles.imgBox}>
          <Image className={styles.img} src={'/imgs/profile.png'} alt='Profile image' width={265} height={450}/>
        </div>
      </div>
      <FaAnglesDown className={styles.angles} />
    </section>
    <section className={styles.projectsSection}>
      <div className={styles.projectsIntro}>
          <h1 className={styles.projectsTitle}>My Work</h1>
      </div>
      <div className={styles.projects}>
          <TestSwiper/>
      </div>
    </section>
    </>
  );
}
export default Home