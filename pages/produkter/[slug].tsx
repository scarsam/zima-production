import { GetStaticProps, GetStaticPaths } from 'next';

import Layout from 'components/Layout';
import Container from 'components/Container';
import { getAllProductsWithSlug, getProduct } from 'lib/api';

export type ProductType = {
  title: string;
  slug: string;
  metadata: {
    product_image: {
      imgix_url: string;
    };
  };
};

interface ProductProps {
  product: ProductType;
  preview: boolean;
}

const Product: React.FC<ProductProps> = ({ product, preview }) => {
  return (
    <Layout preview={preview}>
      <Container>
        <p>This is product page page: {product.title}</p>
      </Container>
    </Layout>
  );
};

export default Product;

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
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
};

export const getStaticPaths: GetStaticPaths = async () => {
  const products = (await getAllProductsWithSlug()) || [];

  return {
    paths: products.map((product) => `/produkter/${product.slug}`),
    fallback: false,
  };
};
