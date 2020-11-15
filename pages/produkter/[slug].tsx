import Layout from 'components/Layout';
import Container from 'components/Container';
import { getAllProductsWithSlug, getProduct } from 'lib/api';

export default function Product({ product, preview }) {
  return (
    <Layout preview={preview}>
      <Container>
        <p>This is product page page: {product.title}</p>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params, preview = null }) {
  const data = await getProduct(params.slug, preview);
  // const content = await markdownToHtml(data.product?.metadata?.content || '');

  return {
    props: {
      preview,
      product: {
        ...data.product,
        content: 'markdown to html here',
      },
    },
  };
}

export async function getStaticPaths() {
  const products = (await getAllProductsWithSlug()) || [];

  return {
    paths: products.map((product) => `/produkter/${product.slug}`),
    fallback: false,
  };
}
