import styles from './styles.module.scss'
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6'


const Card = () => {
    return (
        <div className={styles.imgBg}>
            <img className={styles.img} src="./imgs/image.png" alt="Profile Image"/>
            <div className={styles.division}/>
            <p>Join my journey</p>
            <ul className={styles.social}>
                <a><li><FaGithub/></li></a>
                <a><li><FaLinkedinIn/></li></a>
                <a><li><FaXTwitter/></li></a>
                <a><li><FaInstagram/></li></a>
            </ul>
            <p>Key Strengths</p>
            <ul className={styles.social}>
                <a><li><FaGithub/></li></a>
                <a><li><FaLinkedinIn/></li></a>
                <a><li><FaXTwitter/></li></a>
                <a><li><FaInstagram/></li></a>
            </ul>
        </div>
    )
}
export default Card