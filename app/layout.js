import styles from './styles.module.css';
import "../styles/global.css";
import { Inter } from '@next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.className}>
      <body className={styles.container}>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
