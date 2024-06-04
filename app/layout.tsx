import styles from './styles/styles.module.scss'
import { Roboto, Montserrat } from 'next/font/google';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

const montserrat = Montserrat({
  weight: '500',
  subsets: ['latin'],
});


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Igor`s Portfolio",
  description: "Created with ❣️",
};

const RootLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <html lang="en" className={styles.html}>
      <body className={ `${styles.body}  ${montserrat.className}`}>    
        <div className={styles.content}>
          {children}
        </div>
      </body>
    </html>
  );
}
export default RootLayout