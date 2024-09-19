import Link from "next/link";
import Image from "next/image";

  
export function NewsCard({id, title, content, picture, date, alt="anime"}) {
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
            className="h-48 w-full object-cover md:max-h-52 md:w-48" //className="h-48 h-max-48 w-48 object-cover md:h-min"
          />
          : null}
        </div>

        <div className="p-5">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {formattedDate}
          </div>
          <Link
            href={`/news/${id}`}
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


export function ResumeCard() {
  return (
    <div className="flex flex-col items-center w-full р-96 bg-white">
      <Image
        src="/reworks.svg"
        width={96}
        height={96}
        alt="Resume"
        className="rounded-full w-24 h-24"
      />
      <h3 className="text-xl mt-4">John Doe</h3>
      <p className="text-gray-600">Frontend Developer</p>
    </div>
  );
}