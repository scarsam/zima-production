import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

import Layout from 'components/Layout'
import Container from 'components/Container'
import { getAllProductsWithSlug, getObjectWithSlug } from 'lib/api'
import { ProductType } from 'types/allTypes'
interface ProductProps {
  product: ProductType
  preview: boolean
}

const Product: React.FC<ProductProps> = ({ product, preview }) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Layout preview={false} pageTitle="Loading..." suppliers={[]}>
        <Container>
          <p>Loading...</p>
        </Container>
      </Layout>
    )
  }

  return (
    <Layout preview={preview} pageTitle={product.title} suppliers={[]}>
      <Container>
        <p>This is product page page: {product.title}</p>
      </Container>
    </Layout>
  )
}

export default Product

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const data = await getObjectWithSlug(params.slug, preview)
  // const content = await markdownToHtml(data.product?.metadata?.content || '');

  return {
    props: {
      preview,
      product: {
        ...data.object,
        content: 'markdown to html here',
      },
    },
    revalidate: 30,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const products = (await getAllProductsWithSlug()) || []

  return {
    paths: products.map((product) => `/produkter/${product.slug}`),
    fallback: true,
  }
}
