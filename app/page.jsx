import ReworkLogo from "@ui/components/rework-logo";
import Search from "./ui/components/search";
import { CreateResume } from "./ui/components/create-buttons";

export default function Home() {

  return (
    <div className="flex items-start justify-center py-5 min-page-h">
      <main className="flex flex-col h-full bg-background rounded-md px-5 py-6 gap-3 w-10/12 md:w-3/4 lg:w-1/2 shadow-lg min-h-[calc(100dvh-23rem)]">
      
        {/* hero section */}
        <section className="flex flex-col items-center justify-center w-full h-60 bg-background">
          <h1 className="text-9xl">
            <span className='text-primary-500'>Re</span>Works
          </h1>
          <Search className="w-full" placeholder={"Работа, зарплата, удобный график"}/>
          <CreateResume />
        </section>

        <section>
          {/* <h2>Резюме по проффесиям</h2> */}
        </section>

      </main>
    </div>
  );
}
{/* <main className="flex flex-col items-center justify-center min-page-h">
      <p>Hero page will be later</p>
      <p>Checkout /Resume</p>
    </main> */}