export const metadata  = {
	title: "Работодателям",
};

export default function EmployersPage () {
	return (
		<div className="flex items-start justify-center p-5 min-page-h">
      <main className="flex flex-col h-full bg-white rounded-md px-5 py-6 gap-3 w-10/12 md:w-3/4 lg:w-1/2 shadow-lg min-h-[calc(100dvh-23rem)]">
        <h1>Работодателям</h1>
        <p>У нас 536 активных вакансий на портале и каждый год пополняем перспективными студентами</p>
      </main>
    </div>
	);
}