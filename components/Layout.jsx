import React from 'react';
import Head from 'next/head';
import Menu from './Menu';
import Footer from './Footer';
import Script from 'next/script';
function Layout({ children }) {
  return (
    <div className='layout'>
      <Head>
        <title>Gemini Brands</title>
        <link 
            rel="stylesheet" 
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"crossOrigin="anonymous" />
      </Head>
      <Script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
      <header>
        <Menu />
      </header>
      <main className='layout-container'>
        { children }
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout;