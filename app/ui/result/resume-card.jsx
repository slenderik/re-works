import Image from "next/image";

export default function ResumeCard() {
  return (
    <div className="flex flex-col items-center w-full р-96 bg-white">
      <Image
        src="/reworks.svg"
        width={96}
        height={96}
        alt="Resume"
        className="rounded-full w-24 h-24"
      />
      <h3 className="text-xl mt-4">John Doe</h3>
      <p className="text-gray-600">Frontend Developer</p>
    </div>
  );
}