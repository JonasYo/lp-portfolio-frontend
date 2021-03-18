import * as React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Head from 'next/head'

const Layout = props =>
  <div id="layout">
    {/*language=PostCSS*/}
    <style jsx global>{`
        #layout {
            background-color: #131627;
        }
    `}
    </style>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
    </Head>
    <Header/>
    <main>
      {props.children}
    </main>
    <footer>
        <Footer/>
    </footer>
  </div>

export default Layout;