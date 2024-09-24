import Image from "next/image";
import { EmptyPage } from "@/ui/shared/empty-page";
import { fetchNews, fetchNewsById } from "@/lib/data";

export default async function NewsArticle({ params }) {
  const newItems = await fetchNewsById(params.id);

  if (!newItems) {
    return <EmptyPage text="Новость не найдена" />;
  }

  const formattedDate = new Date(newItems.createDate).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex items-start justify-center py-5 min-page-h">
      <main className="flex flex-col h-full bg-white rounded-md px-5 py-6 gap-3 w-10/12 md:w-3/4 lg:w-1/2 shadow-lg whitespace-pre-wrap ">
        
        <div className="flex justify-center w-full h-60 bg-background">
          {newItems.picture ?
            <Image
              src={newItems.picture}
              width={400}
              height={250}
              alt={newItems.alt}
              className="h-60 w-min"
            />
          : null}
        </div>

        <h1>{newItems.title}</h1>
        <p>{newItems.content}</p>
        <p className="text-gray-400">{formattedDate}</p>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const news = await fetchNews();
  return news.map((newsItem) => ({
    id: newsItem._id.toString(),
  }));
}