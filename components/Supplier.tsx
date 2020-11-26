import Link from 'next/link';
import Product from 'components/Product';
import { SupplierType } from 'types/allTypes';

const Supplier: React.FC<SupplierType> = ({ title, metadata, slug }) => {
  const productList = metadata?.products || [];

  return (
    <div className="py-2">
      <div className="text">
        <h2>{title}</h2>
        <Link href={`/${slug}`}>
          <a>Link to supplier</a>
        </Link>
        {productList.map((product) => (
          <div key={product.title}>
            <h2>Products:</h2>
            <Product metadata={product.metadata} title={product.title} slug={product.slug} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Supplier;
