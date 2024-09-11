import Image from 'next/image';

export default function ReworkLogo() {
  return (
    <div className="flex flex-row items-center leading-none text-white">
      <Image 
        src="/reworks.svg"
        alt="ReWorks"
        width={48}
        height={48}
        className="h-12 w-12" />
      <p className="text-[44px]">ReWorks</p>
    </div>
  );
}
