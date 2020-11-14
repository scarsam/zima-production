import { GetStaticProps } from 'next';
import Head from 'next/head';
import { fetchEntries } from 'utils/contentfulPosts';
import Post from 'components/Post';

export type PostType = {
  title: string;
  image: {
    fields: {
      title: string;
      description: string;
      file: {
        url: string;
      };
    };
  };
};

interface Posts {
  posts: [PostType];
}

export default function Index({ posts }: Posts): JSX.Element {
  return (
    <div className="p-4">
      <Head>
        <title>home</title>
        <meta name="description" content="test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="posts">
          {posts.map((p) => {
            return <Post key={p.title} image={p.image.fields} title={p.title} />;
          })}
        </div>
      </main>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
};
