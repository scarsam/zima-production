import dynamic from 'next/dynamic'
import { IndexPreview } from 'components/admin/IndexPreview'

const AdminWithNoSSR = dynamic(
  () =>
    import('netlify-cms-app').then((CMS: any) => {
      CMS.registerPreviewStyle('/admin/main.css')
      CMS.registerPreviewTemplate('index', IndexPreview)
      CMS.init()
    }) as any,
  { ssr: false }
)

export default AdminWithNoSSR
