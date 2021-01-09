import Head from 'next/head'
import Alert from 'components/Alert'
import Footer from 'components/Footer'
import React from 'react'
import NavMenu from './shared/NavMenu'
import { SupplierType } from 'types/allTypes'

const Layout: React.FC<{ preview: boolean; pageTitle: string; suppliers: SupplierType[] }> = ({
  preview,
  pageTitle,
  children,
  suppliers,
}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Zima Production | {pageTitle}</title>
      </Head>
      <NavMenu suppliers={suppliers} />
      <section className="min-h-screen bg-primaryBg flex flex-col justify-between">
        {preview && <Alert />}
        <main>{children}</main>
        <Footer />
      </section>
    </>
  )
}

export default Layout
