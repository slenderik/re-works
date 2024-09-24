"use client"

import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import React from 'react';
import { useEffect, useState } from 'react';
import { NewsMiniCard } from '@/ui/shared/card';
import { Grid, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getMiniNews } from '@/ui/home/mini-news';
import { fetchNews } from '@/lib/data';



const styles = "text-center text-[18px] bg-white h-[calc((100%-30px)/2)] !important flex justify-center items-center";

export default function NewsSlider() {
  const [news, setNews] = React.useState([]);
  // Используем useSWR для получения данных
  // const { data: news, error } = useSWR("/api/news/", fetcher);

  // // Проверка данных, что приходит из API
  // console.log("News data:", news);

  // // Обработка ошибок
  // if (error) return <div>Failed to load news.</div>;
  // // Показ загрузки, пока данные не пришли
  // if (!news) return <div>Loading...</div>;

  // // Проверяем, является ли `news` массивом
  // if (!Array.isArray(news)) {
  //   return <div>Data format is incorrect. Expected an array.</div>;
  // }

  useEffect(() => {
    console.log("Mount news component")
    const renderNews = async () => {
      setNews(await fetchNews())
    }

    renderNews()
  }, [])

  return (
    <>
      {news.map((el) => <div key={el.vacancy}>{el.vacancy}</div>)}
    </>
    // <>
    //   <Swiper
    //     slidesPerView={3}
    //     grid={{
    //       rows: 2,
    //     }}
    //     spaceBetween={30}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     modules={[Grid, Pagination]}
    //     className="w-full h-40"
    //   >
    //     <SwiperSlide className={styles}>
    //       {news.map((el) => <div>{el.vacancy}</div>)}
    //       {/* <getMiniNews /> */}
    //     </SwiperSlide>
    //   </Swiper>
    // </>
  );
}
