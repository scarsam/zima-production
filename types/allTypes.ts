export type ProductType = {
  title: string
  slug?: string
  metadata: {
    supplier: SupplierType
    product_image: {
      imgix_url: string
    }
    external_href: string
  }
}

export type SupplierType = {
  title: string
  slug: string
  metadata: {
    products: ProductType[]
    url: string
  } | null
}

export type RentType = {
  title: string
  content: string
}

export type MusicType = {
  title: string
  slug: string
  metadata: {
    file: {
      url: string
    }
    songkey: string
  }
}
