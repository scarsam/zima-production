import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from 'types/Product';

const Product: React.FC<ProductType> = ({ metadata, title, slug }) => {
  const { product_image } = metadata;

  return (
    <div className="product py-2">
      <Image src={product_image?.imgix_url} alt={title} width="500px" height="200px" />
      <div className="text">
        <h2>{title}</h2>
        <Link href={`/produkter/${slug}`}>
          <a>Link to product</a>
        </Link>
      </div>
    </div>
  );
};

export default Product;
