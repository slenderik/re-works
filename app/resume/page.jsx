import Link from "next/link";
import Search from "@/ui/shared/search";
import Pagination from "@/ui/shared/pagination";
import { ResumeFeed } from "@/ui/shared/page-feed";
import { ITEMS_PER_PAGE, fetchResumeCount } from "@/lib/data";
import MainTemplate from "@/ui/templates/main-template";
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
        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-row gap-1 items-baseline">
            <Link href="resume/">
              <h1>Резюме</h1>
            </Link>
            <p className="text-gray-400 font-semibold">{resumeCount}</p>
          </div>

          <Search placeholder="Ищите по професии" />
        </div>

        <hr className="border-gray-200"/>

        <ResumeFeed query={query} currentPage={currentPage}/>

        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>

      </MainTemplate>
    </WrapperTemplate>
  );
}
