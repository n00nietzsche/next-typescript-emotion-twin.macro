import { FC } from 'react'
import Head from 'next/head'
import { GlobalStyles } from 'twin.macro'
import { AppProps } from 'next/app'
import './index.css'

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>
        Nextjs App with TypeScript, ESlint, Jest, Emotion, Tailwind and Twin
      </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
