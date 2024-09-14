import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100dvh-8rem)] px-3">
      <h2 className="text-6xl font-bold">
        <span className='text-primary-500'>404 </span>
        Not Work
        </h2>
      <p className="text-xl">Не работает, потому что такой страницы нет</p>
      <Link className="mt-14 rounded-md bg-primary-500 font-semibold text-xl text-white px-7 py-4" href="/">Вернуться домой</Link>
    </div>
  )
}