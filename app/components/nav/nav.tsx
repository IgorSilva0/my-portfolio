import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { motion } from 'framer-motion';

const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Nav = () => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInDown}
        >
        <nav className={styles.navBar}>
            <div className={styles.socials}>
            <Link href={'https://www.linkedin.com/in/igor-silva-455362297/'} target='_blank'><FaLinkedin className={styles.icons}/></Link> 
            <Link href={'https://www.instagram.com/igor.honoratoo'} target='_blank'><FaInstagram className={styles.icons}/></Link>
            <Link href={'https://github.com/IgorSilva0'} target='_blank'><FaGithub className={styles.icons}/></Link>
            </div>
            <Image className={styles.signature} src={'/imgs/signatureWhite.png'} alt='Signature Png' width={140} height={60}/>
            <div className={styles.btns}>
            <Link href={'#projects'}><button>PROJECTS</button></Link> 
            <Link href={'#about'}><button>ABOUT</button></Link>  
            <Link href={'/'}><button>CONTACT</button></Link> 
            </div>
        </nav>
        </motion.div>
    )
}
export default Nav