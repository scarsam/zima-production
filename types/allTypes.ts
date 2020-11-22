export type ProductType = {
  title: string;
  slug: string;
  metadata: {
    product_image: {
      imgix_url: string;
    };
  };
};

export type SupplierType = {
  title: string;
  slug: string;
  metadata: {
    products: ProductType[];
  } | null;
};
