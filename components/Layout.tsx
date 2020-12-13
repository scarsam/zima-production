import Head from 'next/head'
import Alert from 'components/Alert'
import Footer from 'components/Footer'
import React from 'react'
import NavMenu from './shared/NavMenu'

const Layout: React.FC<{ preview: boolean; pageTitle: string }> = ({
  preview,
  pageTitle,
  children,
}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Zima Production | {pageTitle}</title>
      </Head>
      <NavMenu />
      <section className="min-h-screen">
        {preview && <Alert />}
        <main>{children}</main>
        <Footer />
      </section>
    </>
  )
}

export default Layout
