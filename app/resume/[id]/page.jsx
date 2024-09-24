import Image from "next/image";
import { EmptyPage } from "@/ui/shared/empty-page";
import { UserIcon } from "@heroicons/react/24/outline";
import { fetchResumes, fetchResumeById } from "@/lib/data";


export default async function ResumeArticle({ params }) {
  const resumeItem = await fetchResumeById(params.id);
  const {
    date,
    salary,
    vacancy,
    schedule,
    employment,
    age,
    sex,
    familyStatus,
    about,
    education,
    educationSpecial,
    achievements,
    experience,
  } = await fetchResumeById(params.id);

  if (!resumeItem) {
    return <EmptyPage text="Резюме не найдено" />;
  }

  const formattedDate = new Date(date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex items-start justify-center py-1 md:py-5 min-page-h gap-5">
      <main className="flex flex-col h-full bg-white rounded-md px-1 py-3 md:px-5 md:py-6 gap-3 w-10/12 md:w-3/4 lg:w-1/2 shadow-lg whitespace-pre-wrap ">
        
        <h1>{vacancy} <span className="text-primary-500">От {salary}</span></h1>
        

        <div className='flex flex-row gap-3'>
          <div className='relative text-gray-400 flex flex-col gap-1'>
            <p>Желаемый график</p>
            <p>Желаемая занятость</p>
          </div>

          <div className='relative text-black flex flex-col gap-1'>
            <p>{employment}</p>
            <p>{schedule}</p>
          </div>
        </div>

        <div className="bg-white flex flex-col gap-3">
          <h3>О себе</h3>

          <div className='flex flex-row gap-3'>
            <div className='relative text-gray-400 flex flex-col gap-1'>
              <p>Возраст</p>
              <p>Пол</p>
              <p>Семейное пол.</p>
            </div>

            <div className='relative text-black flex flex-col gap-1'>
              <p>{age}</p>
              <p>{sex}</p>
              <p>{familyStatus}</p>
            </div>
          </div>
            <p>{about}</p>
        </div>
        
        <div className="bg-white">
          <h3>Образование</h3>

          <div className='flex flex-row gap-3'>
            <div className='relative text-gray-400 flex flex-col gap-1'>
              <p>Образование</p>
              <p>Специальность</p>
            </div>

            <div className='relative text-black flex flex-col gap-1'>
              <p>{education}</p>
              <p>{educationSpecial}</p>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <h3>Общий опыт работы</h3>

          <div className='flex flex-row gap-3'>
            <div className='relative text-gray-400 flex flex-col gap-1'>
              <p>Опыт работы</p>
              <p>Достижения</p>
            </div>

            <div className='relative text-black flex flex-col gap-1'>
              <p>{experience}</p>
              <p>{achievements}</p>
            </div>
          </div>
        </div>

        <p className="text-gray-400">Дата публикации: {formattedDate}</p>
      </main>
      <aside className="flex justify-center p-2 rounded-md bg-white">

        <div className="bg-slate-100 w-48 h-48">
          {resumeItem.picture ? (
            <Image
              src={resumeItem.picture}
              width={400}
              height={250}
              alt={resumeItem.alt}
            />
          ) : (
            <UserIcon className='text-slate-300'/>
          )}
        </div>
      </aside>
    </div>
  );
}

export async function generateStaticParams() {
  const resumes = await fetchResumes();
  return resumes.map((resumeItem) => ({
    id: resumeItem._id.toString(),
  }));
}