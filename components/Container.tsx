const Container: React.FC<{ className?: string }> = ({ children, className }) => {
  return <div className={`container px-5 sm:px-1 mx-auto ${className}`}>{children}</div>;
};

export default Container;
