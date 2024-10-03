import Link from "next/link";
import Search from "@/ui/shared/search";

export function SearchPageHeader ({
  title = "Заголовок забыли!",
  href="/",
  titleItemsCount = 0,
  SearchPlaceholder = "Ищите по заголовку, тексту или дате"
}){
  return (
    <>
      <div className="w-full flex flex-row justify-between">
        <div className="flex flex-row gap-1 items-baseline">
          <Link href={href}>
            <h1>{title}</h1>
          </Link>
          <p className="text-gray-400 font-semibold">{titleItemsCount}</p>
        </div>

        <Search placeholder={SearchPlaceholder} />
      </div>

      <hr className="border-gray-200"/>
    </>
  );
}