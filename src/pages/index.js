import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Home from '@/components/Home/Home'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <main >
      <Head>
        <title>Zim Academy</title>
      </Head>
      <Home/>
    </main>
  )
}
