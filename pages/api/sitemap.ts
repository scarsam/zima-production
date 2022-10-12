import { NextApiRequest, NextApiResponse } from 'next'
import { getAllSuppliersWithSlug } from 'lib/api'
import { SitemapStream, streamToPromise } from 'sitemap'

export default async function sitemap(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const suppliers = (await getAllSuppliersWithSlug()) || []

  const smStream = new SitemapStream({
    hostname: 'https://zima.se',
  })
  smStream.write({
    url: '/',
  }),
    smStream.write({
      url: '/hyra-utrustning',
    }),
    suppliers.forEach((element) => {
      smStream.write({
        url: `suppliers/${element.slug}`,
      })
    })

  smStream.end()
  const sitemap = await streamToPromise(smStream).then((sm) => sm.toString())

  res.setHeader('Content-Type', 'text/xml')

  res.write(sitemap)

  res.end()
}
