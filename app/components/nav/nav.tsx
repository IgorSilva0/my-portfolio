import styles from './styles.module.scss'
import Link from 'next/link'
import Image from 'next/image';
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Nav = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.socials}>
            <Link href={'/'}><FaLinkedin className={styles.icons}/></Link>
            <Link href={'/'}><FaGithub className={styles.icons}/></Link>
            </div>
            <Image className={styles.signature} src={'/imgs/signatureWhite.png'} alt='Signature Png' width={140} height={60}/>
            <div className={styles.btns}>
            <Link href={'/'}><button>PROJECTS</button></Link>
            <Link href={'/'}><button>CONTACT</button></Link>  
            <Link href={'/'}><button>ABOUT</button></Link>   
            </div>
        </nav>
    )
}
export default Nav