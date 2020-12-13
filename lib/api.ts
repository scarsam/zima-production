import Cosmic from 'cosmicjs'

const BUCKET_SLUG = process.env.COSMIC_BUCKET_SLUG
const READ_KEY = process.env.COSMIC_READ_KEY

const bucket = Cosmic().bucket({
  slug: BUCKET_SLUG,
  read_key: READ_KEY,
})

const is404 = (error): boolean => /not found/i.test(error.message)

export async function getPreviewProductBySlug(slug: string | string[]): Promise<{ slug: string }> {
  const params = {
    slug,
    props: 'slug',
    status: 'all',
  }

  try {
    const data = await bucket.getObject(params)
    return data.object
  } catch (error) {
    // Don't throw if an slug doesn't exist
    if (is404(error)) return
    throw error
  }
}

export async function getAllProductsWithSlug(): Promise<{ slug: string }[]> {
  const params = {
    type: 'products',
    props: 'slug',
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export async function getAllSuppliersWithSlug(): Promise<{ slug: string }[]> {
  const params = {
    type: 'suppliers',
    props: 'title,slug',
    sort: '-created_at',
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export async function getAllProducts(
  preview: boolean
): Promise<
  { slug: string; title: string; metadata: { [key: string]: unknown }; created_at: string }[]
> {
  const params = {
    type: 'products',
    props: 'title,slug,metadata,created_at',
    sort: '-created_at',
    ...(preview && { status: 'all' }),
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export async function getAllSuppliers(
  preview: boolean
): Promise<
  { slug: string; title: string; metadata: { [key: string]: unknown }; created_at: string }[]
> {
  const params = {
    type: 'suppliers',
    props: 'title,slug,metadata,created_at',
    sort: '-created_at',
    ...(preview && { status: 'all' }),
  }
  const data = await bucket.getObjects(params)
  return data.objects
}

export async function getObjectWithSlug(
  slug: string | string[],
  preview: boolean
): Promise<{
  object: {
    slug: string
    title: string
    metadata: { [key: string]: unknown }
    created_at: string
  }
}> {
  const params = {
    slug,
    props: 'slug,title,metadata,created_at',
    ...(preview && { status: 'all' }),
  }

  const object = await bucket.getObject(params).catch((error) => {
    // Don't throw if an slug doesn't exist
    if (is404(error)) return
    throw error
  })

  return {
    object: object?.object,
  }
}

export async function getLatestProducts(
  preview: boolean
): Promise<
  { slug: string; title: string; metadata: { [key: string]: unknown }; created_at: string }[]
> {
  const params = {
    type: 'products',
    props: 'title,slug,metadata,created_at',
    sort: '-created_at',
    limit: '5',
    ...(preview && { status: 'all' }),
  }
  const data = await bucket.getObjects(params)
  return data.objects
}
