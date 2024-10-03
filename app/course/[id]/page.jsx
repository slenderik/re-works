import Image from "next/image";
import { EmptyPage } from "@/ui/shared/empty-page";
import { fetchNews, fetchCourseById } from "@/lib/data";

export default async function NewsArticle({ params }) {
  const course = await fetchCourseById(params.id);

  if (!course) {
    return <EmptyPage text="Курс не найден" />;
  }

  const formattedDate = new Date(course.createDate).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex items-start justify-center py-5 min-page-h">
      <main className="flex flex-col h-full bg-white rounded-md px-5 py-6 gap-3 w-10/12 md:w-3/4 lg:w-1/2 shadow-lg whitespace-pre-wrap">
        
        <div className="flex justify-center w-full h-60 bg-background">
          {course.picture ?
            <Image
              src={course.picture}
              width={400}
              height={250}
              alt={course.alt}
              className="h-60 w-min"
            />
          : null}
        </div>

        <h1>{course.title}</h1>
        <p>{course.content}</p>
        <p className="text-gray-400">{formattedDate}</p>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const news = await fetchNews();
  return news.map((newsItem) => ({
    id: newsItem.id.toString(),
  }));
}