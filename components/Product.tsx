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
  const { product_image } = metadata
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
        } border bg-white border-gray-100 p-6 rounded-lg text-center shadow-md font-extrabold leading-10 tracking-tight`}
      >
        <div>
          <Image
            src={`${product_image?.imgix_url}?q=&w=400`}
            style={{ objectFit: 'contain', objectPosition: 'top' }}
            alt={title}
            width={200}
            height={100}
            layout="responsive"
          />
          <h2>{title}</h2>
        </div>
      </div>
      {showModal && (
        <Modal
          setShowModal={(show) => setShowModal(show)}
          title={title}
          image={
            <Image
              src={`${product_image?.imgix_url}?q=&w=400`}
              style={{ objectFit: 'contain', objectPosition: 'top' }}
              alt={title}
              width={200}
              height={100}
              layout="responsive"
            />
          }
        />
      )}
    </>
  )
}

export default Product
