import Image from "next/image";
import { EmptyPage } from "@components/empty-page";
import { UserIcon } from "@heroicons/react/24/outline";
import { fetchVacancies, fetchVacancyById } from "@lib/data";

export default async function VacancyArticle({ params }) {
  const vacancyItems = await fetchVacancyById(params.id);
  console.log(vacancyItems);

  if (!vacancyItems) {
    return <EmptyPage text="Вакансия не найдена" />;
  }
  
  const formattedDate = new Date(vacancyItems.date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex items-start justify-center py-5 min-page-h gap-5">
      <main className="flex flex-col h-full bg-white rounded-md px-5 py-6 gap-3 w-10/12 md:w-3/4 lg:w-1/2 shadow-lg whitespace-pre-wrap">

        <h1>{vacancyItems.vacancy} <span className="text-primary-500">От {vacancyItems.salary}</span></h1>
        <p>{vacancyItems.description}</p>

        <div className="bg-white">
          <h3>Условия</h3>
          <p>{vacancyItems.conditions}</p>
        </div>

        <div className="bg-white">
          <h3>Требования</h3>
          <p>{vacancyItems.requirement}</p>
        </div>

        <div className="bg-white">
          <h3>Адрес</h3>
          <p>{vacancyItems.address}</p>
        </div>

        <p className="text-gray-400">Дата публикации: {formattedDate}</p>
      </main>

      <aside className="flex flex-col justify-center p-2 rounded-md bg-white">

        <div className="bg-slate-100 w-48 h-48">
          {vacancyItems.picture ? (
            <Image
              src={vacancyItems.picture}
              width={400}
              height={250}
              alt={vacancyItems.alt}
            />
          ) : (
            <UserIcon className='text-slate-300'/>
          )}
        </div>
        <p className="w-min">{vacancyItems.profile}</p>
        <p className="w-min">{vacancyItems.name}</p>
      </aside>
    </div>
  );
}

export async function generateStaticParams() {
  const vacancies = await fetchVacancies();
  return vacancies.map((vacancyItem) => ({
    id: vacancyItem._id.toString(),
  }));
}