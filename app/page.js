import Search from "@/ui/shared/search";
import NewsSlider from "@/app/ui/home/slider-news";
import TopVacancy from "@/ui/home/top-vacancy"; 
import { fetchVacancyCount } from "@/lib/data";
import { CreateResume } from "@/ui/shared/create-buttons";
import WrapperTemplate from "@/ui/templates/wrapper-template";
import BigSearch from "@/ui/home/big-search"

export default function Home() {
  const vacancyCount = fetchVacancyCount();

  return (
    <WrapperTemplate>
      <main className="flex flex-col h-fullpx-5 py-6 gap-3 w-10/12 md:w-3/4 lg:w-1/2 min-h-[calc(100dvh-23rem)]">
      
        {/* hero section */}
        <section className="flex flex-col items-center justify-center w-full gap-7">
          <h1 className="text-6xl text-primary-500 pb-5">Найдите свою работу</h1>
          <p>{vacancyCount} вакансий уже на портале и каждый год пополняем надёжными работодателями</p>

          <BigSearch placeholder={"Ищите по специальности, зарплате или графику"}/>
        </section>

        {/* top 50 job offers */}
        <section>
          <h2>Топовые вакансии</h2>
          <TopVacancy />
        </section>

        <section>
          <h2>Новости портала</h2>
          <NewsSlider />
        </section>
      </main>
    </WrapperTemplate>
  );
}