const Container: React.FC<{ className?: string }> = ({ children, className }) => {
  return <div className={`container px-4 sm:px-1 mx-auto px-5 ${className}`}>{children}</div>;
};

export default Container;
