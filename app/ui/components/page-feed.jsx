import { NewsCard } from '@/ui/components/card';
import { EmptySearchPage } from '@/ui/components/empty-page';

export default function FeedPage({itemsArray}) {
  return (
    <>
      {itemsArray.length === 0 ? (
        <EmptySearchPage />
      ) : (
        itemsArray.map((newsItem) => (
          <NewsCard
            id={newsItem._id}
            key={newsItem._id}
            title={newsItem.title}
            content={newsItem.content}
            picture={newsItem.picture}
            date={newsItem.createDate}
          />
        ))
      )}
    </>
  );
}