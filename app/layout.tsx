import styles from './styles/styles.module.scss'
import { Roboto } from 'next/font/google'
import Card from './components/card/card'
import Nav from './components/nav/nav'

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
    <html lang="en">
      <body className={`${styles.body} ${roboto.className}`}> 
          <main className={styles.main}>
          
            <div className={styles.container}>
              <Nav/>
              <div className={styles.content}>
                {children}
              </div>
            </div>
            
            <Card/>
          </main>
      </body>
    </html>
  );
}
export default RootLayout