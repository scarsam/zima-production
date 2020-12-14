import Image from 'next/image'
import { ProductType } from 'types/allTypes'

const Product: React.FC<ProductType & { hoverEffect?: boolean }> = ({
  metadata,
  title,
  hoverEffect = true,
}) => {
  const { product_image } = metadata

  return (
    <div
      className={`${
        hoverEffect
          ? 'transition transform duration-500 ease-in-out hover:-translate-y-1 hover:border-teal-500 hover:border-2'
          : ''
      } border bg-white border-gray-100 p-6 rounded-lg text-center shadow-md font-extrabold leading-10 tracking-tight cursor-pointer`}
    >
      <div className="min-h-3/2">
        <Image
          src={`${product_image?.imgix_url}?q=&w=400`}
          alt={title}
          width={200}
          height={100}
          layout="responsive"
          objectFit="contain"
          objectPosition="top"
        />
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default Product
