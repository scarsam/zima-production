export default function Container({ children }): JSX.Element {
  return <div className="container mx-auto px-5">{children}</div>;
}
