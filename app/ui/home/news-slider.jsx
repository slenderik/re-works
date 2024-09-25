"use client";

import React, { useEffect, useState } from 'react';
import { NewsMiniCard } from '@/app/ui/shared/card';
import { useRouter } from 'next/navigation';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation } from 'swiper/modules';

const NewsSlider = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchNewsData = async () => {
      const response = await fetch('/api/news');
      const data = await response.json();
      setNews(data);
      setLoading(false);
    };

    fetchNewsData();
  }, []);

  const handleNavigation = (id) => {
    router.push(`/news/${id}`);
};

if (loading) {
  return <div>Loading...</div>;
}

return (
  <div className='w-full h-80'>
    <Swiper
      slidesPerView={2}
      grid={{ rows: 2 }}
      spaceBetween={30}
      navigation={true}
      modules={[Grid, Pagination, Navigation]}
      className="w-full h-full mx-auto"
    >
      {news.map((newsItem) => (
        <SwiperSlide key={newsItem.id} className='h-[calc((100%-30px)/2)]'>
          <NewsMiniCard
            onClick={() => handleNavigation(newsItem.id)}
            id={newsItem.id} 
            title={newsItem.title}
            content={newsItem.description ? newsItem.description : newsItem.content.substring(0, 100)}
            date={newsItem.publicDate}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
};

export default NewsSlider;