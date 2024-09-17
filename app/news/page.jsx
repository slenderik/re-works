import { fetchNewsPages, fetchFilteredNews } from '@lib/data';
import Search from '@components/search';
import NewsCard from '@ui/news/news-card';

import { Suspense } from 'react'; //TODO THIS


export const metadata  = {
  title: 'Новости',
};

export default async function Page({searchParams}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchNewsPages(query);
  const news = await fetchFilteredNews(query, currentPage);
  console.log(news.createDate);

  return (
    <div className="flex items-start justify-center py-5 min-h-[calc(100dvh-8rem)]">
      <main className="flex flex-col bg-background rounded-md px-5 py-6 gap-3 w-10/12 md:w-3/4 lg:w-1/2 shadow-lg">
        <div className=''>
          <h1 className="w-full font-bold text-2xl">Новости</h1>
          <Search placeholder="Ищите по заголовоку, словам или дате" />
        </div>

        <hr className="border-gray-200 py-4"/>
        
        {news.map((news) => (
          <NewsCard
            key={news._id}
            title={news.title}
            content={news.content}
            picture={news.picture}
            date={news.createDate}
          />
          ))}
      </main>
    </div>
  );
}
