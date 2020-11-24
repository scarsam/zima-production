import Alert from 'components/Alert';
import Footer from 'components/Footer';

const Layout: React.FC<{ preview: boolean }> = ({ preview, children }) => {
  return (
    <div className="min-h-screen">
      {preview && <Alert />}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
