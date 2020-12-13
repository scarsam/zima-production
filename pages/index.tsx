import { GetStaticProps } from 'next'
import { getLatestProducts, getAllSuppliersWithSlug } from 'lib/api'
import Product from 'components/Product'
import Layout from 'components/Layout'
import Contact from 'components/Contact'
import Container from 'components/Container'
import About from 'components/About'
import Hero from 'components/Hero'
import { ProductType, SupplierType } from 'types/allTypes'
import Link from 'next/link'

interface Props {
  products: ProductType[]
  suppliers: SupplierType[]
  preview: boolean
}

const Index: React.FC<Props> = ({ products, suppliers, preview }) => {
  return (
    <Layout preview={preview} suppliers={suppliers} pageTitle="Hem">
      <Hero
        title="Zima Produktion"
        subheader="Import, försäljning och uthyrning av ljudutrustning i toppklass sedan 1988"
        background="home-background"
      />
      <div>
        <Container>
          <Link href="hyra-utrustning">Hyra</Link>
          <div className="-mt-40">
            <h1 className="text-lg font-normal -ml-2 text-white">Senaste produkterna</h1>
            <div className="flex flex-wrap -m-4 py-5">
              {products.map((product) => {
                return (
                  <div key={product.title} className="xl:w-1/5 md:w-1/2 p-2">
                    <div className="border bg-white border-gray-100 p-6 rounded-lg text-center shadow-md font-extrabold leading-10 tracking-tight">
                      <Product
                        metadata={product.metadata}
                        title={product.title}
                        slug={product.slug}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
        <About />
      </div>
      <Contact />
    </Layout>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const products = (await getLatestProducts(preview)) || []
  const suppliers = (await getAllSuppliersWithSlug()) || []

  return {
    props: {
      preview,
      products,
      suppliers,
    },
  }
}
