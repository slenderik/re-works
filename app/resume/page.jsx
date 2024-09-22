import Link from "next/link";
import Search from "@components/search";
import Pagination from "@components/pagination";
import { ResumeFeed } from "@components/page-feed"
import { ITEMS_PER_PAGE, fetchResumeCount } from "@lib/data";;

export const metadata  = {
  title: "Резюме",
};

export default async function ResumePage({searchParams}) {

  const query = searchParams.query || "";
  const currentPage = Number(searchParams.page) || 1;

  const resumeCount = await fetchResumeCount(query);
  const totalPages = Math.ceil(resumeCount / ITEMS_PER_PAGE);

  return (
    <div className="flex items-start justify-center p-5 min-page-h">
      <main className="flex flex-col h-full bg-white rounded-md px-5 py-6 gap-3 w-10/12 md:w-3/4 lg:w-1/2 shadow-lg min-h-[calc(100dvh-23rem)]">

        <div className="w-full flex flex-row justify-between">
          <div className="flex flex-row gap-1 items-end">
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

      </main>
    </div>
  );
}
