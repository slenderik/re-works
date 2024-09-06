import Image from 'next/image';

export default function ReworkLogo() {
  return (
    <div className="">
      <Image 
        src="/logo.png"
        alt="ReWorks"
        width={1000}
        height={760}
        className="hidden md:block"
      />
    </div>
  );
}