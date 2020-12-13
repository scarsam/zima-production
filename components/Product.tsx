import Image from 'next/image'
// import Link from 'next/link';
import { ProductType } from 'types/allTypes'

const Product: React.FC<ProductType> = ({ metadata, title, slug }) => {
  console.log(slug)
  const { product_image } = metadata

  return (
    <div className="py-2">
      <Image src={product_image?.imgix_url} alt={title} width="500px" height="200px" />
      <>
        <h2>{title}</h2>
        {/* <Link href={`/produkter/${slug}`}>
          <a>Link to product</a>
        </Link> */}
      </>
    </div>
  )
}

export default Product
