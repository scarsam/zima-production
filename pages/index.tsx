import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getAllProducts } from 'lib/api'
import Product from 'components/Product'
import { ProductType } from 'types/Product'
import NavMenu from 'components/shared/NavMenu'

interface Products {
  products: [ProductType]
}

const Index: React.FC<Products> = ({ products }) => {
  return (
    <div>
      <Head>
        <title>home</title>
        <meta name="description" content="test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavMenu />
      <main className="p-4">
        <div className="products">
          {products.map((p) => {
            return <Product key={p.title} metadata={p.metadata} title={p.title} slug={p.slug} />
          })}
        </div>
      </main>
    </div>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const products = (await getAllProducts(preview)) || []

  return {
    props: {
      products,
    },
  }
}
