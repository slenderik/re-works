import { fetchTopVacancies } from '@/lib/data';
import { VacancyMiniCard } from '@/app/ui/shared/card';


export default async function TopVacancy () {
  const vacancies = await fetchTopVacancies();

  return (
  <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
      {vacancies.map((vacancyItem) => (
        <VacancyMiniCard
          key={vacancyItem._id}
          id={vacancyItem._id}
          vacancy={vacancyItem.vacancy} 
          salary={vacancyItem.salary} 
          companyName={vacancyItem.companyName} 
        />
      ))}
    </div>
  );
}