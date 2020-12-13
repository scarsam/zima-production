import Link from 'next/link'
import Product from 'components/Product'
import { SupplierType } from 'types/allTypes'

const Supplier: React.FC<SupplierType> = ({ title, metadata, slug }) => {
  const productList = metadata?.products || []

  return (
    <div className="py-2">
      <div className="text">
        <h2>{title}</h2>
        <Link href={`/${slug}`}>
          <a>Link to supplier website</a>
        </Link>
        {productList.length > 1 ? (
          productList.map((product) => (
            <div key={product.title}>
              <h2>Products:</h2>
              <Product metadata={product.metadata} title={product.title} slug={product.slug} />
            </div>
          ))
        ) : (
          <p>No products from this Supplier</p>
        )}
      </div>
    </div>
  )
}

export default Supplier
