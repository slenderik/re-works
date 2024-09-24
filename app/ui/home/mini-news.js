"use server"

import { NewsMiniCard } from '@/ui/shared/card';
import { fetchNews } from '@/lib/data';


// export async function getServerSideProps() {
//   const news = await client.db("works").collection('news').find().toArray();
//   console.log(news);

//   return {
//     props: {
//       news: JSON.parse(JSON.stringify(news)),
//     },
//   };
// }

export default async function getMiniNewsCardsAction() {
  const news = await fetchNews();
  console.log("server: " + news.lenght());
  return news;
  // return news.map((newsItem) => (
  //   <NewsMiniCard
  //     key={newsItem._id}
  //     id={newsItem._id}
  //     title={newsItem.title}
  //     content={newsItem.content}
  //     date={newsItem.createDate}
  //     picture={newsItem.picture || null}
  //   />
  // ));
}
