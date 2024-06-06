
import styles from './styles.module.scss'

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

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
    <h2>Igor's Wishlist</h2>
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
                <h1>Contact section under construction... 🤖</h1>
                <p><MdEmail/> igorsilvauk@gmail.com </p>
                <p><MdPhone/> +44 07748122933 </p>
                <p><MdLocationOn/> Cheshire - UK</p>
                <a href='https://imgur.com/a/cv-draft-lqbesXc' target='_blank'>Link to my CV (draft)</a>
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

