import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllSuppliersWithSlug, getObjectWithSlug } from 'lib/api'
import { SupplierType } from 'types/allTypes'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Hero from 'components/Hero'
import Product from 'components/Product'

interface SupplierProps {
  supplier: SupplierType
  suppliers: SupplierType[]
  preview: boolean
}

const SupplierPage: React.FC<SupplierProps> = ({ supplier, suppliers, preview }) => {
  const products = supplier?.metadata?.products || []

  return (
    <Layout preview={preview} pageTitle={supplier.title} suppliers={suppliers}>
      <Hero title={supplier.title} background="homepage-background" />
      <Container>
        <div className="-mt-40 mb-20">
          <h1 className="text-lg font-normal -ml-2 text-white">Produkter</h1>
          <div className="flex flex-wrap -m-4 py-5">
            {products.map((product) => {
              return (
                <div key={product.title} className="md:w-1/5 w-1/2 p-2">
                  <Product metadata={product.metadata} title={product.title} />
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default SupplierPage

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const data = await getObjectWithSlug(params.slug, preview)
  const suppliers = (await getAllSuppliersWithSlug()) || []
  // const content = await markdownToHtml(data.product?.metadata?.content || '');

  return {
    props: {
      preview,
      suppliers,
      supplier: {
        ...data.object,
        content: 'markdown to html here',
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const suppliers = (await getAllSuppliersWithSlug()) || []

  return {
    paths: suppliers.map((supplier) => `/suppliers/${supplier.slug}`),
    fallback: false,
  }
}
