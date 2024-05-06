import styles from './styles.module.scss'
import Image from 'next/image';
import { FaGithub, FaLinkedinIn, FaXTwitter, FaInstagram } from 'react-icons/fa6'


const Card = () => {
    return (
        <div className={styles.card}>
            <Image
            className={styles.img}
            src="/imgs/image.png" // Adjust the path accordingly
            alt="Profile Image"
            width="320"
            height="384"
            />
            <div className={styles.division}/>
            <div className={styles.socialContainer}>
                <p>JOIN MY JOURNEY</p>
                <ul className={styles.social}>
                    <a href='https://github.com/IgorSilva0' target='_blank'><li><FaGithub/></li></a>
                    <a href='https://www.linkedin.com/in/igor-silva-455362297/' target='_blank'><li><FaLinkedinIn/></li></a>
                    <a href='https://twitter.com/IgorSilva894785' target='_blank'><li><FaXTwitter/></li></a>
                    <a href='https://www.instagram.com/igor.honoratoo/' target='_blank'><li><FaInstagram/></li></a>
                </ul>
                <p>KEY STRENGTHS</p>
                <ul className={styles.social}>
                    <a><li><FaGithub/></li></a>
                    <a><li><FaLinkedinIn/></li></a>
                    <a><li><FaXTwitter/></li></a>
                    <a><li><FaInstagram/></li></a>
                    <a><li><FaGithub/></li></a>
                    <a><li><FaLinkedinIn/></li></a>
                    <a><li><FaXTwitter/></li></a>
                    <a><li><FaInstagram/></li></a>
                </ul>
            </div>
        </div>
    )
}
export default Card