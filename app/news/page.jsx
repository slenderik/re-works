import NewsCard from '@ui/news/news-card';
import { fetchNews } from '@lib/data';


export const metadata  = {
  title: 'Новости',
};

export default async function Home() {
  const news = await fetchNews();

  return (
    <div className="flex gap-7 items-start justify-center py-5 min-h-[calc(100dvh-8rem)]">

    <main className="flex flex-col bg-background rounded-md px-5 py-6 gap-3 w-1/2 shadow-lg">
      <h1 className="w-full font-bold text-2xl">Новости</h1>
      <form>
        <input 
          type="search" 
          accessKey="s" 
          placeholder="" 
          className="input-search"
        />
        <input 
          type="submit" 
          accessKey="f" 
          value="Найти" 
          className="input-submit"
        />
      </form>
      <hr className="border-gray-300 py-4"/>
      
      {[...Array(10)].map((_, i) => (
        <NewsCard key={i} />
      ))}
    </main>
  </div>
  );
}
