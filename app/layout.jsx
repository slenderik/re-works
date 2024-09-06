import '@app/styles/globals.css';
import '@app/styles/reset.css';
import { inter } from '@ui/fonts';
import { GlobalHeader } from '@ui/global-header';
import { GlobalFooter } from '@ui/global-footer';

export const metadata = {
  title: "ReWorks",
  keywords: "работа, работа для студентов, работа для студентов",
  description: `ReWork - портал для трудоустройства студентов. Здесь собраны актульные вакансии работы и подработки Омска. И резюме реальных студентов.`,
  metadataBase: new URL('https://re-works.ru'),
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <GlobalHeader />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
