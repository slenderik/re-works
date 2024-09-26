"use client"

// Составлено через
// https://journal.tinkoff.ru/media/dokumenty-v-internete-shablon-02.te8p65rn2x9y..pdf

import { useEffect, useState } from 'react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed z-10 bottom-0 left-0 right-0 bg-white border-t border-gray-300 shadow-lg p-4 flex justify-between items-center">
      <div className="flex-1 mr-4 text-sm">
        БПОУ «КИТЭК» обрабатывает файлы cookie. Они помогают нам делать этот сайт удобнее для пользователей. 
        Продолжая работу с <a href="https://re-works.ru/">сайтом</a>, вы соглашаетесь с обработкой файлов cookie вашего браузера.
        Так же вы можете настоить обработку cookie в настройках браузера.
      </div>
      <div className="flex space-x-2">
        <button 
          onClick={handleAccept} 
          className="bg-primary-500 text-white rounded-full px-4 py-2 hover:bg-primary-600"
        >
          Согласен
        </button>
      </div>
    </div>
  );
}
