import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, title, description, location, price, star, total }) {
  return (
    <div
      className="flex border-b px-2 py-5 pr-4 hover:opacity-80 cursor-pointer
    hover:shadow-lg transition duration-200 ease-out first:border-t"
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} layout="fill" objectFit="cover" alt="" className="rounded-2xl" />
      </div>
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-5 w-5" />
        </div>
        <h4 className="text-xl">{title}</h4>

        <div className="border-b w-10 pt-2" />
        <p className="flex-grow text-xs text-gray-500">{description}</p>
        <div className="flex justify-between pb-5">
          <div className="flex items-center">
            <StarIcon className="h-5 w-5 text-red-500" />
            <p className="font-semibold">{star}</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">{price}</p>
            <p className="font-light">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;
