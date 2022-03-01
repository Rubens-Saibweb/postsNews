import '../styles/globals.scss'

import { Header } from '../components/Header'
import { AppProps } from 'next/dist/shared/lib/router/router'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
    <Header/>
    <Component {...pageProps} />
    </>

  ) 
}

export default MyApp


// npx json-server api.json -p 3333 -w