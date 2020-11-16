import Alert from 'components/Alert';

const Layout: React.FC<{ preview: boolean }> = ({ preview, children }) => {
  return (
    <div className="min-h-screen">
      {preview && <Alert />}
      <main>{children}</main>
    </div>
  );
};

export default Layout;
