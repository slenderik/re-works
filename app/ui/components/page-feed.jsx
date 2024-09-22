import {
  NewsCard,
  ResumeCard,
} from '@/ui/components/card';
import { EmptySearchPage } from '@/ui/components/empty-page';
import { fetchFilteredNews,  fetchFilteredResumes } from "@lib/data";

export async function NewsFeed({query, currentPage}) {
  const news = await fetchFilteredNews(query, currentPage);

  return (
    <>
      {news.length === 0 ? (
        <EmptySearchPage />
      ) : (
        news.map((newsItem) => (
          <NewsCard
            id={newsItem._id}
            key={newsItem._id}
            title={newsItem.title}
            content={newsItem.content}
            picture={newsItem.image}
            date={newsItem.publicDate}
          />
        ))
      )}
    </>
  );
}


export async function ResumeFeed({query, currentPage}) {  
  const resumes = await fetchFilteredResumes(query, currentPage);

  return (
    <>
      {resumes.length === 0? (
        <EmptySearchPage />
      ) : (
        resumes.map((resumeItem) => (
          <ResumeCard
            key={resumeItem._id}

            id={resumeItem._id}
            sex={resumeItem.pol}
            age={resumeItem.age}
            name={resumeItem.name}
            vacancy={resumeItem.vacancy}
            salary={resumeItem.salary}
            date={resumeItem.createdAt}
            employment={resumeItem.employment}
            experience={resumeItem.experience}
            avatar={resumeItem.image1}
          />
        ))
      )}
    </>
  );
}