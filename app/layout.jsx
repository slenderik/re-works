import '@ui/global.css';
import { vk_sans_display } from '@app/fonts';
import Header from '@components/header';
import Footer from '@components/footer';


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
      <body className={vk_sans_display.className} >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
