import Link from "next/link";
import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/outline";

  
export function NewsCard({
  id,
  title,
  content,
  picture,
  date,
  alt=""
}) {
  const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="relative w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-h-52 hover:scale-105 hover:transition">
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
          <div className="relative tracking-wide text-sm text-gray-400">
            {formattedDate}
          </div>
          <Link
            href={`/news/${id}`}
            className="block mt-1 text-lg leading-tight font-medium text-black after:content-[''] after:absolute after:inset-0 hover:underline">
            <h3>{title}</h3>
          </Link>
          <p className="relative mt-2 text-slate-500 line-clamp-2">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}


export function ResumeCard({
  id,
  vacancy,
  salary,
  date,
  sex,
  age,
  employment,
  experience,
  avatar,
  alt="Аватарка",
}) {
  const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const formattedSalary = new Intl.NumberFormat('ru-RU').format(salary).replace(/\s/g, '.');
  return (
    <div className="relative w-full mx-auto p-5 bg-white rounded-xl shadow-md overflow-hidden md:max-h-52 hover:scale-105 hover:transition">
      {/* Header */}

      <div className='text-xl font-semibold flex gap-2 py-2 items-baseline'>
        <Link className="after:content-[''] after:absolute after:inset-0 hover:underline" href={`/resume/${id}`}>
          <p>
            {vacancy}
          </p>
        </Link>
        <p className='text-primary-100 text-lg'>
          {formattedSalary}
        </p>
      </div>

      {/* Info */}
      <div className='flex flex-row'>
        <div className='relative text-gray-400 hidden flex-col gap-1 md:flex'>
          <p>Пол</p>
          <p>Возраст</p>
          <p>Занятость</p>
          <p>Опыт работы</p>
          <p>{formattedDate} </p>
        </div>

        <div className='relative text-black flex flex-col gap-1'>
          <p>{sex}</p>
          <p>{age}</p>
          <p>{employment}</p>
          <p>{experience}</p>
        </div>
      </div>


      {/* Image */}
      <div className="absolute right-5 top-5 h-36 w-36 bg-slate-100 rounded-xl">
        {avatar ? (
          <Image
            src={avatar}
            width={200}
            height={200}
            alt={alt}
            className="h-48 w-full object-cover md:max-h-52 md:w-48"
          />
        ) : (
          <UserIcon className='text-slate-300'/>
        )}
      </div>

    </div>
  );
}


export function VacancyCard({
  id,
  vacancy,
  salary,
  employment,
  profile,
  address,
  date,
}) {
  const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const formattedSalary = new Intl.NumberFormat('ru-RU').format(salary).replace(/\s/g, '.');
  return (
    <div className="relative w-full mx-auto p-5 bg-white rounded-xl shadow-md overflow-hidden md:max-h-52 hover:scale-105 hover:transition">

      {/* Header */}
      <div className='text-xl font-semibold flex gap-2 py-2 items-baseline'>
        <Link className="after:content-[''] after:absolute after:inset-0 hover:underline" href={`/vacancy/${id}`}>
          <p>
            {vacancy}
          </p>
        </Link>
        <p className='text-primary-100 text-lg'>
          {formattedSalary}
        </p>
      </div>

      {/* Info */}
      <div className='flex flex-row gap-3'>
        <div className='relative text-gray-400 hidden flex-col whitespace-nowrap gap-1 md:flex'>
          <p>Занятость</p>
          <p>Адрес</p>
          <p>{formattedDate}</p>
        </div>

        <div className='relative text-black flex flex-col gap-1'>
          <p>{employment}</p>
          <p>{address}</p>
          <p className="text-gray-400 line-clamp-1">{profile}</p>
        </div>
      </div>
    </div>
  );
}


export function NewsMiniCard ({
  id,
  title = "No Title",
  content,
  picture,
  date,
  onClick,
  alt=""
}) {
  const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div onClick={onClick} className="px-6 py-4 bg-white rounded-xl shadow-md hover:shadow-lg hover:transition">
      <div className="md:flex rounded-md">

        <div className="md:shrink-0">
          {picture ?
          <Image
            src={picture}
            width={400}
            height={250}
            alt={alt}
            className="h-48 object-cover md:max-h-52 md:w-48"
          />
          : null}
        </div>

        <div className="">
          <h3 className="line-clamp-1">{title}</h3>
          <p className="mt-2 text-slate-500 text-base line-clamp-2">{content}</p>
          <p className="tracking-wide text-sm text-gray-400">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
}

export function VacancyMiniCard({
  id,
  vacancy,
  salary,
  companyName
}) {
  const formattedSalary = new Intl.NumberFormat('ru-RU').format(salary).replace(/\s/g, '.');
  return (
    <div className="relative w-64 h-24 bg-white rounded-md overflow-hidden pl-9 pr-2 shadow-sm hover:shadow-md hover:transition">
      <div className="h-full w-4 bg-primary-500 absolute left-0"></div>
      <Link className="after:content-[''] after:absolute after:inset-0 hover:underline" href={`/vacancy/${id}`}>
        <h3 className="line-clamp-1">{vacancy}</h3>
      </Link>
      <p>{formattedSalary}</p>
      <p className="line-clamp-1">{companyName}</p>
    </div>
  );
}