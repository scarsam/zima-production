import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllSuppliersWithSlug, getObjectWithSlug } from 'lib/api';
import { SupplierType } from 'types/allTypes';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Supplier from 'components/Supplier';

interface SupplierProps {
  supplier: SupplierType;
  preview: boolean;
}

const SupplierPage: React.FC<SupplierProps> = ({ supplier, preview }) => {
  return (
    <Layout preview={preview} pageTitle={supplier.title}>
      <Container>
        <Supplier metadata={supplier.metadata} title={supplier.title} slug={supplier.slug} />
      </Container>
    </Layout>
  );
};

export default SupplierPage;

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
  const data = await getObjectWithSlug(params.slug, preview);
  // const content = await markdownToHtml(data.product?.metadata?.content || '');

  return {
    props: {
      preview,
      supplier: {
        ...data.object,
        content: 'markdown to html here',
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const suppliers = (await getAllSuppliersWithSlug()) || [];

  return {
    paths: suppliers.map((supplier) => `/suppliers/${supplier.slug}`),
    fallback: false,
  };
};
