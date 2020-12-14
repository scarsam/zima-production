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
        background="contact-background"
      />
      <div>
        <Container>
          <div className="-mt-40">
            <h1 className="text-lg font-normal -ml-2 text-white">Senaste produkterna</h1>
            <div className="flex flex-wrap -m-4 py-5">
              {products.map((product) => {
                return (
                  <Link key={product.title} href={`/suppliers/${product.metadata?.supplier?.slug}`}>
                    <div className="md:w-1/5 w-1/2 p-2">
                      <Product metadata={product.metadata} title={product.title} />
                    </div>
                  </Link>
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
