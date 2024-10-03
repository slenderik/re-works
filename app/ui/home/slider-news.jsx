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
  
  // I use useRouter this to avoid a warnings with <Link> because it doesn't support dynamic links.
  const handleNavigation = (id) => {
    router.push(`/news/${id}`);
};

if (loading) {
  return <div>Loading...</div>;
}

return (
  <div className='relative w-full h-80'>
    <Swiper
      slidesPerView={2}
      grid={{ rows: 2 }}
      spaceBetween={30}
      pagination={{
        clickable: true,
        el: '.custom-pagination',
      }}
      modules={[Grid, Pagination, Navigation]}
      className="w-full h-full mx-auto pb-2"
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

    <div className="custom-pagination flex justify-center space-x-2 mt-4">
      {news.map((_, index) => (
        <button
          key={index}
          className="w-3 h-3 rounded-full bg-gray-400 hover:bg-gray-600 transition duration-200"
          onClick={() => Swiper.slideTo(index)} // Assuming you have a reference to the swiper instance
        />
      ))}
    </div>
  </div>
);};

export default NewsSlider;