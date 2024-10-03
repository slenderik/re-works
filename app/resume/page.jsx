import Pagination from "@/ui/shared/pagination";
import { ResumeFeed } from "@/ui/shared/page-feed";
import { ITEMS_PER_PAGE, fetchResumeCount } from "@/lib/data";
import MainTemplate from "@/ui/templates/main-template";
import { SearchPageHeader } from "@/ui/shared/PageHeaders";
import WrapperTemplate from "@/ui/templates/wrapper-template";


export const metadata  = {
  title: "Резюме",
};

export default async function ResumePage({searchParams}) {

  const query = searchParams.query || "";
  const currentPage = Number(searchParams.page) || 1;

  const resumeCount = await fetchResumeCount(query);
  const totalPages = Math.ceil(resumeCount / ITEMS_PER_PAGE);

  return (
    <WrapperTemplate>
      <MainTemplate>
        <SearchPageHeader
					title="Резюме"
          href="resume/"
					titleItemsCount={resumeCount}
          SearchPlaceholder="Ищите по професии"
				/>

        <ResumeFeed query={query} currentPage={currentPage}/>

        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>

      </MainTemplate>
    </WrapperTemplate>
  );
}
