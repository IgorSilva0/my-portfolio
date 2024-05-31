import styles from './styles/styles.module.scss';
import Image from 'next/image';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.intro}>
        <h1>Hi my name is Igor</h1>
      </div>
      <div className={styles.imgBox}>
        <Image src={'imgs/image.jpeg'} alt='Profile image' width={100} height={110}/>
      </div>
    </div>
    
  );
}
export default Home