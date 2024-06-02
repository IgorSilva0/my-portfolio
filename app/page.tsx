import styles from './styles/styles.module.scss';
import Image from 'next/image';
import Nav from './components/nav/nav';

const Home = () => {
  return (
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
          <Image className={styles.img} src={'/imgs/profile.png'} alt='Profile image' width={230} height={400}/>
        </div>
      </div>
    </section>
  );
}
export default Home