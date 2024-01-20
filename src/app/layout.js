import { Inter } from 'next/font/google'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainNavbar from './components/MainNavbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'memo.bouquet',
  description: 'for your every special moment',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavbar/>
        {children}
      </body>
    </html>
  )
}
