import Pagination from "@/ui/shared/pagination";
import { CoursesFeed } from "@/ui/shared/page-feed";
import MainTemplate from "@/ui/templates/main-template";
import { SearchPageHeader } from "@/app/ui/shared/page-headers";
import { ITEMS_PER_PAGE, fetchCourseCount } from "@/lib/data";
import WrapperTemplate from "@/ui/templates/wrapper-template";


export const metadata  = {
  title: "Курсы",
};

export default async function CoursesPage({searchParams}) {

  const query = searchParams.query || "";
  const currentPage = Number(searchParams.page) || 1;

  const courseCount = await fetchCourseCount(query);
  const totalPages = Math.ceil(courseCount / ITEMS_PER_PAGE);

  return (
		<WrapperTemplate>
			<MainTemplate>
				<SearchPageHeader
					title="Курсы"
          href="course/"
					titleItemsCount={courseCount}
				/>

				<CoursesFeed query={query} currentPage={currentPage}/>

				<div className="mt-5 flex w-full justify-center">
					<Pagination totalPages={totalPages} />
				</div>

			</MainTemplate>
		</WrapperTemplate>
	);
}
