/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image'
import { ProductType } from 'types/allTypes'
import Modal from 'components/shared/Modal'
import { useState } from 'react'

const Product: React.FC<ProductType & { hoverEffect?: boolean }> = ({
  metadata,
  title,
  hoverEffect = true,
}) => {
  const { product_image, external_href } = metadata
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <div
        role="button"
        onClick={() => !hoverEffect && setShowModal(true)}
        className={`${
          hoverEffect
            ? 'transition transform duration-500 ease-in-out hover:-translate-y-1 hover:border-teal-500 hover:border-2 cursor-pointer'
            : ''
        } border-2 border-transparent bg-white border-gray-100 p-6 rounded-lg text-center shadow-md font-extrabold tracking-tight h-full`}
      >
        <div className="h-28 relative">
          <Image
            src={`${product_image?.imgix_url}?q=&w=400`}
            alt={title}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h2 className="pt-4">{title}</h2>
      </div>
      {showModal && (
        <Modal
          setShowModal={(show) => setShowModal(show)}
          title={title}
          externalHref={external_href}
          image={
            <Image
              src={`${product_image?.imgix_url}?q=&w=800`}
              alt={title}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
            />
          }
        />
      )}
    </>
  )
}

export default Product
