
import styles from './styles.module.scss'

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Contact(){
  const codeString = `
import { FC } from "react";

type List = {
  wish:
      "job opportunities" |
      "learning resources"| 
      "challenging tasks";
};

const MyWishlist: FC<List> = ({ wish }) => (
  <>
    <h2>Igor&apos;s Wishlist</h2>
    <p>Wishes: {wish}</p>
  </>
);
  
export default MyWishlist;

`;
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp} className={styles.contactBox}
    >
        <div className={styles.contactInfo}>
            <div className={styles.info}>
                <h1>Get in Touch</h1>
                <p>
                    <a href="mailto:igorsilvauk@gmail.com">
                        <MdEmail /> igorsilvauk@gmail.com
                    </a>
                </p>
                <p>
                    <a href="tel:+4407748122933">
                        <MdPhone /> +44 07748122933
                    </a>
                </p>
                <p>
                    <a 
                        href="https://www.google.com/maps/place/Knutsford/@53.3003858,-2.3937703,14z/data=!3m1!4b1!4m6!3m5!1s0x487a510bd8c2a3f9:0x147a9ae5b7b7fd59!8m2!3d53.3005939!4d-2.371833!16zL20vMDE0Yjgz?entry=ttu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <MdLocationOn /> Cheshire - UK
                    </a>
                </p>
                <p>
                    <a 
                        href="https://www.linkedin.com/in/igor-silva-455362297/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin /> Igor Silva
                    </a>
                </p>
                <p className={styles.btn}> 
                  <a  
                  href='/cv/IgorSilva.pdf' 
                  target='_blank' 
                  rel="noopener noreferrer"
                  >
                    View My CV
                  </a>
                </p>
            </div>
        </div>
        <div className={styles.codeBox}>
            <SyntaxHighlighter language="typescript" style={vscDarkPlus}>
                {codeString}
            </SyntaxHighlighter>
        </div>
    </motion.div>
  );
}