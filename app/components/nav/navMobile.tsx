import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from './styles.module.scss'; // Import the SCSS file
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default function NavMobile({setCurrent,setArrowVisible}:any) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.navbarmobile}>
      <Menu isOpen={isOpen} setIsOpen={setIsOpen} setCurrent={setCurrent} setArrowVisible={setArrowVisible}/>
      <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      <Image src={'/imgs/signatureWhite.png'} width={100} height={50} alt="Signature Image"/>

      <Link href={'https://github.com/IgorSilva0'} target='_blank'><FaGithub className={styles.icons}/></Link>
    </div>
  );
}

const menuVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 20,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
  },
  closed: {
    opacity: 0,
    x: "-100%",
    transition: {
      type: "spring",
      stiffness: 20,
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -20 },
};

const Menu = ({ isOpen, setIsOpen, setCurrent, setArrowVisible }: any) => {
  const [mywork, setMywork] = useState<Element | null>(null);
  const [about, setAbout] = useState<Element | null>(null);
  const [contact, setContact] = useState<Element | null>(null);

  const handleClick = async (section: Element | null) => {
    setArrowVisible(0);
    setIsOpen(false);
    section!.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
  };
  
  useEffect(() => {
    setMywork(document.querySelector(`#mywork`));
    setAbout(document.querySelector(`#about`));
    setContact(document.querySelector(`#contact`));
  }, [])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.nav
          className={styles.menu}
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <motion.ul>
            <motion.li variants={itemVariants}>
              <a onClick={()=>{handleClick(mywork)}}>My Work</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a onClick={()=>{handleClick(about)}}>About</a>
            </motion.li>
            <motion.li variants={itemVariants}>
              <a onClick={()=>{handleClick(contact)}}>Contact</a>
            </motion.li>
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

const MenuToggle = ({ toggle, isOpen }: { toggle: () => void, isOpen: boolean }) => (
  <button onClick={toggle} className={styles.menuToggle}>
    <svg width="23" height="18" viewBox="0 0 23 18">
      <motion.path
        d="M 2 2.5 L 20 2.5"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        animate={isOpen ? { d: "M 3 16.5 L 17 2.5" } : { d: "M 2 2.5 L 20 2.5" }}
        initial={false}
      />
      <motion.path
        d="M 2 9.423 L 20 9.423"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        initial={false}
      />
      <motion.path
        d="M 2 16.346 L 20 16.346"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        animate={isOpen ? { d: "M 3 2.5 L 17 16.5" } : { d: "M 2 16.346 L 20 16.346" }}
        initial={false}
      />
    </svg>
  </button>
);