import { fetchNewsCountPages, fetchFilteredNews } from "@lib/data";
import Search from "@components/search";
import NewsCard from "@ui/news/news-card";
import Pagination from "@components/pagination";
import { EmptySearchPage } from "@components/empty-page";

import { Suspense } from "react"; //TODO THIS
import Link from "next/link";


export const metadata  = {
  title: "Новости",
};

export default async function Page({searchParams}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchNewsCountPages(query);
  const news = await fetchFilteredNews(query, currentPage);

  return (
    <div className="flex items-start justify-center py-5 min-page-h">
      <main className="flex flex-col h-full bg-background rounded-md px-5 py-6 gap-3 w-10/12 md:w-3/4 lg:w-1/2 shadow-lg min-h-[calc(100dvh-23rem)]">

        <div className="w-full flex flex-row justify-between">
          <Link href="news/">
            <h1>Новости</h1>
          </Link>  
            <Search placeholder="Ищите по заголовоку словам или дате" />
        </div>

        <hr className="border-gray-200"/>

        {totalPages == 0 ? (
          <EmptySearchPage />
        ) : (
          news.map((newsItem) => (
            <NewsCard
              id={newsItem._id}
              key={newsItem._id}
              title={newsItem.title}
              content={newsItem.content}
              picture={newsItem.picture}
              date={newsItem.createDate}
            />
          ))
        )}

        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>

      </main>
    </div>
  );
}
