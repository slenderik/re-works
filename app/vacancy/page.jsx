import Link from "next/link";
import Search from "@/ui/shared/search";
import Pagination from "@/ui/shared/pagination";
import { VacancyFeed } from "@/ui/shared/page-feed"
import { ITEMS_PER_PAGE, fetchVacancyCount } from "@/lib/data";;

export const metadata  = {
  title: "Вакансии",
};

export default async function VacancyPage({searchParams}) {

  const query = searchParams.query || "";
  const currentPage = Number(searchParams.page) || 1;

  const vacancyCount = await fetchVacancyCount(query);
  const totalPages = Math.ceil(vacancyCount / ITEMS_PER_PAGE);

  return (
    <div className="flex items-start justify-center p-5 min-page-h">
      <main className="flex flex-col h-full bg-white rounded-md px-5 py-6 gap-3 w-10/12 md:w-3/4 lg:w-1/2 shadow-lg min-h-[calc(100dvh-23rem)]">

        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-row gap-1 items-end">
            <Link href="news/">
              <h1>Вакансии</h1>
            </Link>
            <p className="text-gray-400 font-semibold">{vacancyCount}</p> 
          </div>
          <Search placeholder="Ищите по профессии" />
        </div>

        <hr className="border-gray-200"/>

        <VacancyFeed query={query} currentPage={currentPage}/>

        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>

      </main>
    </div>
  );
}
