import Image from 'next/image';

export default function ReworkLogo() {
  return (
    <div className="flex flex-row items-baselineмоао text-black">
      <Image 
        src="/reworks.svg"
        alt="ReWorks"
        width={22}
        height={22}/>
      <p className="text-[27px] font-bold">
        <span className='text-primary'>Re</span>Works
      </p>
    </div>
  );
}
