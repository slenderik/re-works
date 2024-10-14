export default function MainTemplate({ children }) {
	return (
		<main className="
			flex flex-col bg-white rounded-md w-10/12 max-w-5xl
			px-1 md:px-3 py-3 md:py-6
			gap-3 shadow-lg h-full whitespace-pre-wrap">
			{children}
		</main>
	);
}