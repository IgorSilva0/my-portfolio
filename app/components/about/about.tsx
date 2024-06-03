
import styles from './styles.module.scss'
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

export default function About() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp} className={styles.about}>
      <div className={styles.imgBox}>
        <Image className={styles.img} src={'/imgs/about.png'} alt='About image' width={370} height={450}/>  
      </div>
      <div className={styles.aboutContent}>
        <h3>My Journey</h3>
        <p> 
            My career has always been driven by a deep love for technology and a knack for solving problems, which have both played a huge role in shaping who I am professionally.
            <br/>
            <br/>
            I previously worked as a customer representative for Google, where I developed essential skills in problem-solving, collaboration, and communication. However, my fascination with technology began much earlier. From a young age, I was captivated by computers, starting with my first one at age 10. By 15, I was already building game servers and creating websites for friends, showcasing my early dedication to the tech world.
            <br/>
            <br/>
            Motivated by this passion, I transitioned from customer service to a technology-focused career. I enrolled in an intensive coding bootcamp at the School of Code, where I formalized my expertise in full-stack development, Agile methodologies, and version control. This experience reinforced my commitment to a career in software development and fueled my enthusiasm for contributing to technological advancements.
            <br/>
            <br/>
            Beyond my professional life, I enjoy engaging in DIY projects, particularly those involving cars. I have a knack for researching and solving computer issues, and I find great satisfaction in building and fixing systems. My love for technology extends beyond the screen, into any project where I can apply my technical skills.
        </p>
      </div>
    </motion.div>
  );
}
