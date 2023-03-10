import '../styles/globals.css'

import Head from "next/head";
import Header from '../app/components/Header';
import { Footer } from '../app/components/Footer';
import Homep from '../app/components/Homep';
import Aboutus from '../app/components/Aboutus';


export default function App({ Component, pageProps }) {
  return(
 <>
 <Header/>
 <Homep/>

<Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
   <link rel="shortcut icon" href="https://site3.ewebcore.net/wp-content/themes/ewebcore1/assets/img/favicon.png"/>
  <link rel="stylesheet" href="https://site3.ewebcore.net/wp-content/themes/ewebcore1/assets/css/plugins.css"/>
  <link rel="stylesheet" href="https://site3.ewebcore.net/wp-content/themes/ewebcore1/assets/css/style.css"/>
  <link rel="preload" href="https://site3.ewebcore.net/wp-content/themes/ewebcore1/assets/css/fonts/dm.css" as="style" onload="this.rel='stylesheet'"/>
</Head>
<Component {...pageProps} />
<Footer/>
</>
  )

}
