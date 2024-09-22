import Image from "next/image";
import { EmptyPage } from "@components/empty-page";
import { fetchResumes, fetchResumeById } from "@lib/data";

export default async function ResumeArticle({ params }) {
  const resumeItem = await fetchResumeById(params.id);

  if (!resumeItem) {
    return <EmptyPage text="Резюме не найдено" />;
  }

  const formattedDate = new Date(resumeItem.date).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex items-start justify-center py-5 min-page-h">
      <main className="flex flex-col h-full bg-white rounded-md px-5 py-6 gap-3 w-10/12 md:w-3/4 lg:w-1/2 shadow-lg whitespace-pre-wrap ">
        
        <h1>{resumeItem.vacancy} <span className="text-primary-500">От {resumeItem.salary}</span></h1>
        

        <div className='flex flex-row'>
          <div className='relative text-gray-400 flex flex-col gap-1'>
            <p>Желаемый график</p>
            <p>Желаемая занятость</p>
          </div>

          <div className='relative text-black flex flex-col gap-1'>
            <p>{resumeItem.employment}</p>
            <p>{resumeItem.schedule}</p>
          </div>
        </div>

        
        <div className="flex justify-center w-full h-60 bg-background">
          {resumeItem.picture ?
            <Image
              src={resumeItem.picture}
              width={400}
              height={250}
              alt={resumeItem.alt}
              className="h-60 w-min"
            />
          : null}
        </div>

        <div className="bg-white">
          <h3>О себе</h3>

          <div className='flex flex-row'>
            <div className='relative text-gray-400 flex flex-col gap-1'>
              <p>Возраст</p>
              <p>Пол</p>
              <p>Семейное положение</p>
              <p>Описание</p>
            </div>

            <div className='relative text-black flex flex-col gap-1'>
              <p>{resumeItem.age}</p>
              <p>{resumeItem.sex}</p>
              <p>{resumeItem.familyStatus}</p>
              <p>{resumeItem.about}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white">
          <h3>Образование</h3>

          <div className='flex flex-row'>
            <div className='relative text-gray-400 flex flex-col gap-1'>
              <p>Образование</p>
              <p>Специальность</p>
            </div>

            <div className='relative text-black flex flex-col gap-1'>
              <p>{resumeItem.education}</p>
              <p>{resumeItem.educationSpecial}</p>
            </div>
          </div>
        </div>

        <div className="bg-white">
          <h3>Общий опыт работы</h3>

          <div className='flex flex-row'>
            <div className='relative text-gray-400 flex flex-col gap-1'>
              <p>Опыт работы</p>
              <p>Достижения</p>
            </div>

            <div className='relative text-black flex flex-col gap-1'>
              <p>{resumeItem.experience}</p>
              <p>{resumeItem.achievements}</p>
            </div>
          </div>
        </div>

        <p className="text-gray-400">Дата публикации: {formattedDate}</p>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  const resumes = await fetchResumes();
  return resumes.map((resumeItem) => ({
    id: resumeItem._id.toString(),
  }));
}