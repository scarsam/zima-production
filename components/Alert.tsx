import Container from 'components/Container';

const Alert: React.FC = () => {
  return (
    <div className={'border-b bg-black border-accent-7 text-white'}>
      <Container>
        <div className="py-2 text-center text-sm">
          This is page is a preview.{' '}
          <a
            href="/api/exit-preview"
            className="underline hover:text-cyan duration-200 transition-colors"
          >
            Click here
          </a>{' '}
          to exit preview mode.
        </div>
      </Container>
    </div>
  );
};

export default Alert;
