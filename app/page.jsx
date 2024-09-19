import ReworkLogo from "@ui/components/rework-logo";
import Search from "./ui/components/search";
import { CreateResume } from "./ui/components/create-buttons";

export default function Home() {

  return (
    <div className="flex items-start justify-center py-5 min-page-h">
      <main className="flex flex-col h-fullpx-5 py-6 gap-3 w-10/12 md:w-3/4 lg:w-1/2 min-h-[calc(100dvh-23rem)]">
      
        {/* hero section */}
        <section className="flex flex-col items-center justify-center w-full bg-background gap-7">
          <h1 className="text-7xl">
            <span className='text-primary-500'>Re</span>Works
          </h1>
          <Search className="w-full" placeholder={"Работа, зарплата, удобный график"}/>
          <CreateResume />
        </section>

        {/* top 50 job offers */}
        <section>
          {/* <h2>Резюме по проффесиям</h2> */}
        </section>

      </main>
    </div>
  );
}