import { Inter } from "next/font/google";
import "@/app/reset.css";
import "@/app/globals.css";

export const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReWorks",
  keywords: "работа, работа для студентов, работа для студентов",
  description: `ReWork - портал для трудоустройства студентов. Здесь собраны актульные вакансии работы и подработки Омска. И резюме реальных студентов.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}
