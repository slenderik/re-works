import Image from 'next/image';

export default function ReworkLogo() {
  return (
    <div className="flex flex-row items-center h-6 w-auto gap-1">
      <Image 
        src="/reworks.svg"
        alt="ReWorks"
        width={35}
        height={35}/>
      <p className="text-[27px] font-bold text-black">
        <span className='text-primary-500'>Re</span>Works
      </p>
    </div>
  );
}
