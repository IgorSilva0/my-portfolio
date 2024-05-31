import styles from './styles/styles.module.scss';
import Image from 'next/image';
import Nav from './components/nav/nav';

const Home = () => {
  return (
    <section className={styles.section}>
      <Nav/> 
      <div className={styles.home}>
        <div className={styles.intro}>
          <h1>Full-Stack Engineer</h1>
          <p>Hi there! I&apos;m Igor Silva. Welcome to my portfolio.
             I&apos;m excited to share my journey and work with you.
             Here, you&apos;ll find a collection of projects that
             I&apos;m passionate about and proud of.
             Thanks for stopping by!</p>
        </div>
        <div className={styles.imgBox}>
          \\\Image\\\
        </div>
      </div>
    </section>
  );
}
export default Home