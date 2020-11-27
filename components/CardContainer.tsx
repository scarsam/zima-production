import Container from 'components/Container';

const CardContainer: React.FC<{ offset: boolean }> = ({ children, offset }) => {
  return (
    <Container className={`sm:shadow-xl bg-white rounded-md ${offset ? '-mt-20' : ''} `}>
      <div className="px-0 py-10 sm:px-20 sm:py-20 sm:mb-20">{children}</div>
    </Container>
  );
};

export default CardContainer;
