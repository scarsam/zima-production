import { AppProps } from 'next/app'
import { FormspreeProvider } from '@formspree/react'
import 'styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <FormspreeProvider project="1555466010272726961">
      <Component {...pageProps} />
    </FormspreeProvider>
  )
}

export default MyApp
