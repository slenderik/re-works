'use client';

import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function BigSearch({ placeholder }) {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const [query, setQuery] = useState(searchParams.get('query')?.toString() || '');

  const handleSearch = (term) => {
    const params = new URLSearchParams();
    params.set('page', '1');
    
    if (term) {
      params.set('query', term); 
    } else {
      params.delete('query');
    }

    // Redirect to /vacancy with the updated query parameters
    replace(`/vacancy?${params.toString()}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    handleSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex h-14 w-2/3 gap-2">
      <label htmlFor="big-search" className="sr-only">
        Поиск работы
      </label>
      <input
        id="big-search"
        type="search"
        accessKey="s"
        className="w-full rounded-md border px-4 h-14 border-gray-200 placeholder:text-gray-500"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      
      <label htmlFor="big-search-button" className="sr-only">
        Найти
      </label>
      <button
        type="submit"
        className="flex bg-primary-500 h-14 w-14 rounded-md items-center justify-center"
        id="big-search-button"
      >
        <MagnifyingGlassIcon className="text-white w-9 h-9" />
      </button>
    </form>
  );
}
