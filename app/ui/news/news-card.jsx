import Image from "next/image";

export default function NewsCard() {
  return (
    <div className="flex flex-col items-center w-full py-4 px-6 bg-white">
      <Image
        src="/news.jpg"
        width={400}
        height={250}
        alt="News"
        className="rounded-lg w-full h-40"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales
          facilisis sapien.
        </h3>
        <p className="text-sm font-medium text-gray-800">
          Nulla facilisi. Donec vel ipsum vel ipsum dignissim congue. Aliquam
          ullamcorper, nisi vitae condimentum pellentesque, nulla sapien
          pellentesque sapien, id finibus ligula tellus a nisi
        </p>
      </div>
    </div>
  );
  }

  
export function Card(title, value) {
  return (
    
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
      <div className="flex p-4">
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`${lusitana.className}
          truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
      {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
    </div>
  );
}
