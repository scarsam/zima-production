import { ReactNode } from 'react';
import Alert from 'components/Alert';

interface LayoutProps {
  preview: boolean;
  children: ReactNode;
}

export default function Layout({ preview, children }: LayoutProps): JSX.Element {
  return (
    <>
      <div className="min-h-screen">
        {preview && <Alert />}
        <main>{children}</main>
      </div>
    </>
  );
}
