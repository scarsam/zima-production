import { createBucketClient } from '@cosmicjs/sdk'

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG ?? '',
  readKey: process.env.COSMIC_READ_KEY ?? '',
})

const is404 = (error): boolean => {
  if (/not found/i.test(error.message)) {
    return true
  }

  if (/no object found/i.test(error.message)) {
    return true
  }

  if (error.status === 404) {
    return true
  }

  return false
}

export async function getPreviewProductBySlug(slug: string | string[]): Promise<{ slug: string }> {
  try {
    const data = await cosmic.objects.find({ slug }).props('slug').status('all')
    return data.object
  } catch (error) {
    // Don't throw if an slug doesn't exist
    if (is404(error)) return
    throw error
  }
}

export async function getAllProductsWithSlug(): Promise<{ slug: string }[]> {
  const data = await cosmic.objects.find({ type: 'products' }).props('slug')
  return data.objects
}

export async function getAllSuppliersWithSlug(): Promise<{ slug: string }[]> {
  const data = await cosmic.objects
    .find({ type: 'suppliers' })
    .props('slug,title')
    .sort('-created_at')

  return data.objects
}

export async function getAllProducts(
  preview: boolean
): Promise<
  { slug: string; title: string; metadata: { [key: string]: unknown }; created_at: string }[]
> {
  const data = await cosmic.objects
    .find({ type: 'products' })
    .props('title,slug,metadata,created_at')
    .sort('-created_at')
    .status(preview ? 'all' : 'published')
  return data.objects
}

export async function getAllSuppliers(
  preview: boolean
): Promise<
  { slug: string; title: string; metadata: { [key: string]: unknown }; created_at: string }[]
> {
  const data = await cosmic.objects
    .find({ type: 'suppliers' })
    .props('title,slug,metadata,created_at')
    .sort('-created_at')
    .status(preview ? 'all' : 'published')
  return data.objects
}

export async function getAllRentObjects(preview: boolean): Promise<
  {
    slug: string
    title: string
    content: string
    metadata: { [key: string]: unknown }
    created_at: string
  }[]
> {
  const data = await cosmic.objects
    .find({ type: 'hyra' })
    .props('title,slug,metadata,created_at,content')
    .sort('-created_at')
    .status(preview ? 'all' : 'published')
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
  try {
    const object = await cosmic.objects
      .findOne({ slug })
      .props('slug,title,metadata,created_at')
      .status(preview ? 'all' : 'published')
      .depth(2)

    return {
      object: object.object,
    }
  } catch (error) {
    // Don't throw if an slug doesn't exist
    if (!is404(error)) {
      throw error
    }
  }

  return {
    object: {
      slug: '',
      title: '',
      metadata: {},
      created_at: '',
    },
  }
}

export async function getLatestProducts(
  preview: boolean
): Promise<
  { slug: string; title: string; metadata: { [key: string]: unknown }; created_at: string }[]
> {
  const data = await cosmic.objects
    .find({
      type: 'products',
      'metadata.display_on_home_page': {
        $eq: true,
      },
    })
    .props('title,slug,metadata,created_at')
    .sort('-created_at')
    .limit(5)
    .status(preview ? 'all' : 'published')
    .depth(2)

  return data.objects
}

export async function getAllMusicWithSlug(): Promise<{ slug: string }[]> {
  const data = await cosmic.objects
    .find({ type: 'music' })
    .props('title,slug,metadata,created_at')
    .depth(10)

  return data.objects
}
