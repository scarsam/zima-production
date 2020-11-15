import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllProducts } from 'lib/api';
import Product from 'components/Product';

export type ProductType = {
  title: string;
  slug: string;
  metadata: {
    product_image: {
      imgix_url: string;
    };
  };
};

interface Products {
  products: [ProductType];
}

export default function Index({ products }: Products): JSX.Element {
  return (
    <div className="p-4">
      <Head>
        <title>home</title>
        <meta name="description" content="test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="products">
          {products.map((p) => {
            <p>hi</p>;
            return (
              <Product
                key={p.title}
                image={p.metadata.product_image}
                title={p.title}
                slug={p.slug}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview }) => {
  const products = (await getAllProducts(preview)) || [];

  return {
    props: {
      products,
    },
  };
};
