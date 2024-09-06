import "@app/globals.css";
import "@app/reset.css";
import { inter } from '@ui/fonts';

export const metadata = {
  title: "ReWorks",
  keywords: "работа, работа для студентов, работа для студентов",
  description: `ReWork - портал для трудоустройства студентов. Здесь собраны актульные вакансии работы и подработки Омска. И резюме реальных студентов.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
