import '@ui/global.css';
import { inter } from '@ui/fonts';
import Header from '@components/global-header';
import Footer from '@components/global-footer';

export const metadata = {
  title: {
    template: '%s | ReWorks',
    default: 'ReWorks',
  },
  keywords: "работа, работа для студентов",
  description: `Портал для трудоустройства студентов. Здесь собраны актульные вакансии работы и подработки Омска. И резюме реальных студентов.`,
  metadataBase: new URL('https://re-works.ru'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
