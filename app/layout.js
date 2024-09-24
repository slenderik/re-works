import "./globals.css";
import localFont from "next/font/local";
import Header from "@/ui/shared/header";
import Footer from "@/ui/shared/footer";


const vkSansDisplay = localFont({
  variable: "--font-vk-sans-display",
  weight: "400 700",
  src: [
	  {
			path: './fonts/VKSansDisplayRegular.woff2',
			weight: '400',
			style: 'normal',
	  },
	  {
			path: './fonts/VKSansDisplayMedium.woff2',
			weight: '500',
			style: 'normal',
	  },
	  {
			path: './fonts/VKSansDisplayMediumItalic.woff2',
			weight: '500',
			style: 'italic',
	  },
	  {
			path: './fonts/VKSansDisplayDemiBold.woff2',
			weight: '600',
			style: 'normal',
	  },
	  {
			path: './fonts/VKSansDisplayDemiBoldItalic.woff2',
			weight: '600',
			style: 'italic',
	  },
	  {
			path: './fonts/VKSansDisplayBold.woff2',
			weight: '700',
			style: 'normal',
	  },
	  {
			path: './fonts/VKSansDisplayBoldItalic.woff2',
			weight: '700',
			style: 'italic',
	  },
	],
});


export const metadata = {
  publisher: "КИТЭК",
  applicationName: "ReWorks",
  authors: [{name: "slenderik", url: "https://t.me/slenderik"}],

  metadataBase: new URL("https://re-works.ru"),
  keywords: ["ReWorks", "работа", "работа для студентов"],
  description: `Портал для трудоустройства студентов. Здесь собраны актульные вакансии работы и подработки Омска. И резюме реальных студентов.`,

  title: {
    template: "%s | ReWorks",
    default: "ReWorks",
  },

  openGraph: {
    title: "ReWorks",
    description: "Портал для трудоустройства студентов.",
    url: "https://re-works.ru",
    siteName: "ReWorks",
    images: [],
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={`${vkSansDisplay.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
