import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllProducts, getAllSuppliers } from 'lib/api';
import Product from 'components/Product';
import Supplier from 'components/Supplier';
import Layout from 'components/Layout';
import { ProductType, SupplierType } from 'types/allTypes';

interface Products {
  products: ProductType[];
  suppliers: SupplierType[];
  preview: boolean;
}

const Index: React.FC<Products> = ({ products, suppliers, preview }) => {
  return (
    <>
      <Head>
        {/* Make this a component and put it inside Layout */}
        <title>home</title>
        <meta name="description" content="test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout preview={preview}>
        <div>
          <h1 className="text-2xl font-bold">Products</h1>
          {products.map((product) => {
            return (
              <Product
                key={product.title}
                metadata={product.metadata}
                title={product.title}
                slug={product.slug}
              />
            );
          })}
        </div>
        <div>
          <h1 className="text-2xl font-bold mt-40 border-t-2">Suppliers</h1>
          {suppliers.map((supplier) => {
            return (
              <Supplier
                key={supplier.title}
                metadata={supplier.metadata}
                title={supplier.title}
                slug={supplier.slug}
              />
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const products = (await getAllProducts(preview)) || [];
  const suppliers = (await getAllSuppliers(preview)) || [];

  return {
    props: {
      preview,
      products,
      suppliers,
    },
  };
};
