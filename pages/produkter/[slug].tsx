import Layout from 'components/Layout';
import Container from 'components/Container';

import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { getAllProductsWithSlug, getProduct } from 'lib/api';

export default function Product({ product, preview }) {
  const router = useRouter();
  if (!router.isFallback && !product?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? <p>Loading…</p> : <p>This is product page page: {product.title}</p>}
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
    fallback: true,
  };
}
