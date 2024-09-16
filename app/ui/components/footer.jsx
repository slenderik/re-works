import Link from 'next/link';
import NavLinks from '@components/nav-links';

export default function Footer() {
  return (
    <footer className="flex w-full h-16 px-4 justify-between items-center bg-white md:justify-between lg:justify-evenly shadow-md">
      
      <div>
        <div className="flex flex-row items-center gap-1 h-9">
          <Link
            className="flex items-end justify-start"
            href="/"
          >
            <div className="text-black">
              <div className="flex flex-row items-center h-6 w-auto gap-1">
                <p className="text-[27px] font-bold text-black">
                  <span className='text-primary-500'>Re</span>Works
                </p>
              </div>
            </div>
          </Link>
          
          <div className="rounded-lg bg-[#343A40] text-white px-2 py-1 font-semibold text-sm hover:underline">
            <a href="https://www.omsktec.ru/" target="_blank" rel="noopener noreferrer">
              <p>проект КИТЭКа</p>
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-1 items-center justify-center text-gray-500 text-sm">
          <p>2024 &copy; ReWorks. Все права защищены.</p>
        </div>

      </div>

      <NavLinks/>
    </footer>
  );
}
