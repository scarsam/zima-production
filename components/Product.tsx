import Image from 'next/image'
import { ProductType } from 'types/allTypes'

const Product: React.FC<ProductType> = ({ metadata, title }) => {
  const { product_image } = metadata

  return (
    <div className="min-h-3/2">
      <Image
        src={product_image?.imgix_url}
        alt={title}
        width={200}
        height={100}
        layout="responsive"
        objectFit="contain"
        objectPosition="top"
      />
      <h2>{title}</h2>
    </div>
  )
}

export default Product
