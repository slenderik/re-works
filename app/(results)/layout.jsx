import ResumeCard from '@ui/result/resume-card';
export default function Layout() {
  return (
    <>
      <div className="flex gap-7 items-start justify-center py-5">

        <main className="flex flex-col bg-background rounded-md px-5 py-6 gap-3 w-1/2 shadow-lg">
          <h1 className="w-full font-bold text-2xl">Резюме * Поиск сотрудников</h1>
          <form>
            <input 
              type="search" 
              accessKey="s" 
              placeholder="" 
              className="input-search"
            />
            <input 
              type="submit" 
              accessKey="f" 
              value="Найти" 
              className="input-submit"
            />
          </form>
          <hr className="border-gray-300 py-4"/>
          
          {[...Array(10)].map((_, i) => (
            <ResumeCard key={i} />
          ))}
        </main>

        <aside className="hidden md:flex flex-row bg-white rounded-md px-5 py-6 gap-3 shadow-md">
          <p>Фильтры</p>
          <hr className="border-gray-300 py-4 w-full"/>
        </aside>

      </div>
    </>
  );
}