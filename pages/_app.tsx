import { AppProps } from 'next/app';
import 'styles/tailwind.css';

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return <Component {...pageProps} />;
}

export default MyApp;
