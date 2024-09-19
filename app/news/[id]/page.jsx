import Image from "next/image";
import { EmptyNewsPage } from "@components/empty-page";
import { fetchNewsPages, fetchNewsById } from "@lib/data";

export default async function NewsArticle({ params }) {
  const news = await fetchNewsById(params.id);

  if (!news) {
    return <EmptyNewsPage text="Новость не найдена" />;
  }

  const formattedDate = new Date(news.createDate).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex items-start justify-center py-5 min-page-h">
      <main className="flex flex-col h-full bg-white rounded-md px-5 py-6 gap-3 w-10/12 md:w-3/4 lg:w-1/2 shadow-lg">
        
        <div className="flex justify-center w-full h-60 bg-background">
          {news.picture ?
            <Image
              src={news.picture}
              width={400}
              height={250}
              alt={news.alt}
              className="h-60 w-min"
            />
          : null}
        </div>

        <h1>{news.title}</h1>
        <p>{news.content}</p>
        <p>Дата публикации: {formattedDate}</p>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const news = await fetchNewsPages();
  return news.map((newsItem) => ({
    id: newsItem._id.toString(),
  }));
}