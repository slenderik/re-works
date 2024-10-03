import Pagination from "@/ui/shared/pagination";
import { NewsFeed } from "@/ui/shared/page-feed";
import MainTemplate from "@/ui/templates/main-template";
import { SearchPageHeader } from "@/app/ui/shared/page-headers";
import { ITEMS_PER_PAGE, fetchNewsCount } from "@/lib/data";
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
        <SearchPageHeader
					title="Новости"
          href="news/"
					titleItemsCount={newsCount}
				/>

        <NewsFeed query={query} currentPage={currentPage}/>

        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>

      </MainTemplate>
    </WrapperTemplate>
  );
}
