import { fetchTopVacancies } from '@/lib/data';
import { VacancyMiniCard } from '@/app/ui/shared/card';


export default async function TopVacancy () {
  const vacancies = await fetchTopVacancies();

  return (
    <div className='w-full'>
      <div className='w-full flex gap-y-3 flex-wrap justify-between'>
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
    </div>
  );
}