import Link from "next/link";
import Search from "@/ui/shared/search";
import Pagination from "@/ui/shared/pagination";
import { NewsFeed } from "@/ui/shared/page-feed";
import { ITEMS_PER_PAGE, fetchNewsCount } from "@/lib/data";
import MainTemplate from "@/ui/templates/main-template";
import WrapperTemplate from "@/ui/templates/wrapper-template";

export const metadata  = {
  title: "Новости",
};

export default async function NewsPage({searchParams}) {

  const query = searchParams.query || "";
  const currentPage = Number(searchParams.page) || 1;

  const newsCount = await fetchNewsCount(query);
  const totalPages = Math.ceil(newsCount / ITEMS_PER_PAGE);

  return (
    <WrapperTemplate>
      <MainTemplate>

        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-row gap-1 items-baseline">
            <Link href="news/">
              <h1>Новости</h1>
            </Link>
            <p className="text-gray-400 font-semibold">{newsCount}</p> 
          </div>
          <Search placeholder="Ищите по заголовоку словам или дате" />
        </div>

        <hr className="border-gray-200"/>

        <NewsFeed query={query} currentPage={currentPage}/>

        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>

      </MainTemplate>
    </WrapperTemplate>
  );
}
