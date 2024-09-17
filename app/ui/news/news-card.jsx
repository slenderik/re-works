import Link from "next/link";
import Image from "next/image";

  
export default function NewsCard({title, content, picture, date, alt="anime"}) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  // Используем русскую локаль и настройки
  const formattedDate = date.toLocaleDateString('ru-RU', options);

  return (
    <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-h-52 hover:scale-105 hover:transition">
      <div className="md:flex">

        <div className="md:shrink-0">
          {picture ?
          <Image
            src={picture}
            width={400}
            height={250}
            alt={alt}
            className="h-48 w-full object-cover md:max-h-52 md:w-48"
          />
          : null}
        </div>

        <div className="p-5">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {formattedDate}
          </div>
          <Link
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            {title}
          </Link>
          <p className="mt-2 text-slate-500 line-clamp-2">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
