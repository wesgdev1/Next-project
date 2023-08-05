import '@/styles/globals.css'
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react';


type NexPageWithLayout=NextPage &{
  getLayout?:(page:ReactElement)=>ReactNode
}

type AppPropsWitchLayout =AppProps&{
  Component:NexPageWithLayout
}




export default function App({ Component, pageProps }: AppPropsWitchLayout) {

  const getLayout=Component.getLayout || ((page)=>page);
  // return <Component {...pageProps} />

  return getLayout(<Component {...pageProps} />)
}
