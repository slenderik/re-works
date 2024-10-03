export default function WrapperTemplate({ children }) {
	return (
		<div className="flex items-start justify-center p-1 md:p-5 min-page-h">
			{children}
		</div>
	);
}