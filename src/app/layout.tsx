import { Container } from '../components/Container/Container';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';

import '../styles/main.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
