type PostProps = {
  title: string;
  image: {
    description: string;
    file: {
      url: string;
    };
  };
};

function Post({ image, title }: PostProps): JSX.Element {
  const { file, description } = image;

  return (
    <div className="post">
      <img alt={description} src={`https:${file.url}`} />
      <div className="description">{description}</div>
      <div className="text">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Post;
