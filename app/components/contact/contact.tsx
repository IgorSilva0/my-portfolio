
import styles from './styles.module.scss'

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { motion } from 'framer-motion';

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

export default function Contact(){
  const codeString = `
  1 import { FC } from "react";
  2
  3 type WishlistProps = {
  4  wish: "job opportunities" | "learning resources" | "challenging tasks";
  5 };
  6
  7 const JuniorDevWishlist: FC<WishlistProps> = ({ wish }) => (
  8  <>
  9    <h2>Junior Dev Wishlist</h2>
  10    <p>Wishes: {wish}</p>
  11  </>
  12 );
  13
  14 export default JuniorDevWishlist;
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
                <p>Email : igorsilvauk@gmail.com </p>
                <p>Phone : 07748122933 </p>
                <p>Based in Cheshire - UK</p>
                <a href='https://imgur.com/a/cv-draft-lqbesXc' target='_blank'>Link to my CV (draft)</a>
                <p className={styles.thankYou}>Thank you for visiting my Portfolio!</p>
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

