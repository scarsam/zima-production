import Image from 'next/image';
import Link from 'next/link';

type ProductProps = {
  title: string;
  slug: string;
  image: {
    url: string;
  };
};

function Product({ image, title, slug }: ProductProps): JSX.Element {
  const { url } = image;

  return (
    <div className="product">
      <Image src={url} alt={title} width="500px" height="200px" />
      <div className="text">
        <h2>{title}</h2>
        <Link href={`/produkter/${slug}`}>
          <a>Link to product</a>
        </Link>
      </div>
    </div>
  );
}

export default Product;
