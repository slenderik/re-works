export default function WrapperTemplate({ children }) {
	return (
		// md:p-5
		<div className="flex items-start justify-center p-5 min-page-h">
			{children}
		</div>
	);
}