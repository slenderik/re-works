import Pagination from "@/ui/shared/pagination";
import { VacancyFeed } from "@/ui/shared/page-feed";
import MainTemplate from "@/ui/templates/main-template";
import { SearchPageHeader } from "@/app/ui/shared/page-headers";
import { ITEMS_PER_PAGE, fetchVacancyCount } from "@/lib/data";
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
        <SearchPageHeader
					title="Курсы"
          href="vacancy/"
					titleItemsCount={vacancyCount}
				/>

        <VacancyFeed query={query} currentPage={currentPage}/>

        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>

      </MainTemplate>
    </WrapperTemplate>
  );
}
