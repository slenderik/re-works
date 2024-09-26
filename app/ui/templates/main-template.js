export default function MainTemplate({ children }) {
	return (
		// px-1 py-3 md:px-5 md:py-6 gap-3 w-10/12 md:w-3/4 lg:w-1/2
		<main className="flex flex-col h-full bg-white rounded-md px-5 py-6 gap-3 w-10/12 md:w-3/4 lg:w-1/2 shadow-lg min-h-[calc(100dvh-23rem)] whitespace-pre-wrap">
			{children}
		</main>
	);
}