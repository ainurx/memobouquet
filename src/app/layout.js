import { Playfair_Display } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/MainNavbar'

const playfair_Display = Playfair_Display({ weight: ['400'], subsets: ['latin'] })

export const metadata = {
  title: 'memo.bouquet',
  description: 'for your every special moment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ fontFamily: playfair_Display.style.fontFamily }}>
      <body className={playfair_Display.className}>
        <MainNavbar/>
        {children}
      </body>
    </html>
  )
}
