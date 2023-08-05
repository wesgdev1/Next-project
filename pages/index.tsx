import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import {Nabvar} from '../components/Nabvar'
import {MainLayaout} from '../components/layaouts/MainLayaout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <MainLayaout>

          <h1 className={"title"}>
            ir a <Link href="/about">About</Link>
          </h1>
          <p>
            Get started by editing&nbsp;
            <code className={"code"}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={"vercelLogo"}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>

   </MainLayaout>
  )
}
