import Link from "next/link";
import Search from "@/ui/shared/search";
import Pagination from "@/ui/shared/pagination";
import { VacancyFeed } from "@/ui/shared/page-feed";
import { ITEMS_PER_PAGE, fetchVacancyCount } from "@/lib/data";
import MainTemplate from "@/ui/templates/main-template";
import WrapperTemplate from "@/ui/templates/wrapper-template";

export const metadata  = {
  title: "Вакансии",
};

export default async function VacancyPage({searchParams}) {

  const query = searchParams.query || "";
  const currentPage = Number(searchParams.page) || 1;

  const vacancyCount = await fetchVacancyCount(query);
  const totalPages = Math.ceil(vacancyCount / ITEMS_PER_PAGE);

  return (
    <WrapperTemplate>
      <MainTemplate>

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

      </MainTemplate>
    </WrapperTemplate>
  );
}
