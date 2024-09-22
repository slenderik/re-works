import { NoSymbolIcon } from "@heroicons/react/24/outline";

export function EmptyPage ({text="Новости не найдены"}) {
  return (
    <div className="flex flex-col justify-center items-center min-page-h text-gray-500 font-medium text-lg">
      <NoSymbolIcon className="h-10 w-10" />
      <p>{text}</p>
    </div>
  );
}

export function EmptySearchPage ({textmd="Ничего не найдено"}) {
  return (
    <div className="flex flex-col justify-center items-center min-h-[calc(100dvh-23rem)] text-gray-500 font-medium text-lg">
      <NoSymbolIcon className="h-10 w-10" />
      <p>{textmd}</p>
    </div>
  );
}