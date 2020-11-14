import Head from "next/head";
import { attributes } from "../content/index.md";

export default function Index(): React.ReactNode {
  const { header, hero } = attributes;

  return (
    <div className="p-4">
      <Head>
        <title>{header.title}</title>
        <meta name="description" content={header.description} />
        <link rel="icon" href="/favicon.ico" />
        **
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
        **
      </Head>

      <main>
        <h1 className="text-6xl">{hero.heading}</h1>

        <p className="mt-0 mb-4 text-gray-600">{hero.detail}</p>
      </main>
    </div>
  );
}
