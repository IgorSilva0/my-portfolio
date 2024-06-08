import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from './styles.module.scss'; // Import the SCSS file

export default function NavMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.navbarmobile}>
      <Menu isOpen={isOpen} />
      <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
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

const Menu = ({ isOpen }: { isOpen: boolean }) => {
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
            {["Portfolio", "About", "Contact", "Search"].map((item) => (
              <motion.li key={item} variants={itemVariants}>
                {item}
              </motion.li>
            ))}
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
      />
      <motion.path
        d="M 2 9.423 L 20 9.423"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      />
      <motion.path
        d="M 2 16.346 L 20 16.346"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        animate={isOpen ? { d: "M 3 2.5 L 17 16.5" } : { d: "M 2 16.346 L 20 16.346" }}
      />
    </svg>
  </button>
);
