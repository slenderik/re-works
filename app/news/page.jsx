import Link from "next/link";
import Search from "@components/search";
import Pagination from "@components/pagination";
import { NewsFeed } from "@components/page-feed"
import { fetchNewsCountPages } from "@lib/data";;

export const metadata  = {
  title: "Новости",
};

export default async function NewsPage({searchParams}) {

  const query = searchParams.query || "";
  const currentPage = Number(searchParams.page) || 1;

  const totalPages = await fetchNewsCountPages(query);

  return (
    <div className="flex items-start justify-center p-5 min-page-h">
      <main className="flex flex-col h-full bg-white rounded-md px-5 py-6 gap-3 w-10/12 md:w-3/4 lg:w-1/2 shadow-lg min-h-[calc(100dvh-23rem)]">

        <div className="w-full flex flex-row justify-between">
          <Link href="news/">
            <h1>Новости</h1>
          </Link>  
            <Search placeholder="Ищите по заголовоку словам или дате" />
        </div>

        <hr className="border-gray-200"/>

        <NewsFeed query={query} currentPage={currentPage}/>

        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>

      </main>
    </div>
  );
}
