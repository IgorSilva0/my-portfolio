import styles from './styles.module.scss'
import Link from 'next/link'

const Nav = () => {
    return (
        <nav className={styles.navBar}>
            <Link href={'/'}><button>HOME</button></Link>    
            <Link href={'/about'}><button>ABOUT</button></Link>   
            <Link href={'/contact'}><button>CONTACT</button></Link>   
            <Link href={'/projects'}><button>PROJECTS</button></Link>   
        </nav>
    )
}
export default Nav