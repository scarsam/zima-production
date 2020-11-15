import Cosmic from 'cosmicjs';

const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG;
const READ_KEY = process.env.COSMIC_READ_KEY;

const bucket = Cosmic().bucket({
  slug: BUCKET_SLUG,
  read_key: READ_KEY,
});

const is404 = (error) => /not found/i.test(error.message);

export async function getPreviewProductBySlug(slug) {
  const params = {
    slug,
    props: 'slug',
    status: 'all',
  };

  try {
    const data = await bucket.getObject(params);
    return data.object;
  } catch (error) {
    // Don't throw if an slug doesn't exist
    if (is404(error)) return;
    throw error;
  }
}

export async function getAllProductsWithSlug() {
  const params = {
    type: 'products',
    props: 'slug',
  };
  const data = await bucket.getObjects(params);
  return data.objects;
}

export async function getAllProducts(preview) {
  const params = {
    type: 'products',
    props: 'title,slug,metadata,created_at',
    sort: '-created_at',
    ...(preview && { status: 'all' }),
  };
  const data = await bucket.getObjects(params);
  return data.objects;
}

export async function getProduct(slug, preview) {
  const params = {
    slug,
    props: 'slug,title,metadata,created_at',
    ...(preview && { status: 'all' }),
  };

  const object = await bucket.getObject(params).catch((error) => {
    // Don't throw if an slug doesn't exist
    if (is404(error)) return;
    throw error;
  });

  return {
    product: object?.object,
  };
}
