import styles from './styles/styles.module.scss'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Igor`s Portfolio",
  description: "Created with ❣️",
};

const RootLayout = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <html lang="en" className={styles.html}>
      <body className={ `${styles.body} ${roboto.className} `}>     
            <div className={styles.content}>
              {children}
            </div>
      </body>
    </html>
  );
}
export default RootLayout