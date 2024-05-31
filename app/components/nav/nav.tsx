import styles from './styles.module.scss'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const Nav = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.socials}>
            <Link href={'/'}><FaLinkedin className={styles.icons}/></Link>
            <Link href={'/'}><FaGithub className={styles.icons}/></Link>
            </div>
            <div className={styles.btns}>
            <Link href={'/about'}><button>ABOUT</button></Link>   
            <Link href={'/contact'}><button>CONTACT</button></Link>   
            <Link href={'/projects'}><button>PROJECTS</button></Link>
            </div>
        </nav>
    )
}
export default Nav