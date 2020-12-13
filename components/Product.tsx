import Image from 'next/image'
import { ProductType } from 'types/allTypes'

const Product: React.FC<ProductType> = ({ metadata, title }) => {
  const { product_image } = metadata

  return (
    <div className="py-2">
      <Image src={product_image?.imgix_url} alt={title} width="500px" height="200px" />
      <h2>{title}</h2>
    </div>
  )
}

export default Product
