import { FaPlus, FaStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import Link from "next/link";
import { FaRegPlayCircle } from "react-icons/fa";

const Overview = ({ data }: {data: any}) => {
  return (
    <>
      <div className="text-xs sm:text-sm md:text-base lg:text-lg">
        <div className="w-full text-xl md:text-4xl font-bold">
          <h1>{data.title}</h1>
        </div>
        <div>
          <div className="my-2 flex items-center gap-2">
            <FaStar fill="yellow" />
            <p>{data.vote_average}</p>
            <GoDotFill />
            <p>{data.release_date.slice(0, 4)}</p>
          </div>
        </div>
        <div className="flex gap-2 md:gap-4 my-2">
          {data.genres.map((item: any, index: number) => (
            <button
              key={index}
              className="border border-white rounded-xl px-3 py-1 text-xs"
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="my-4 line-clamp-3">{data.overview}</div>
        <div>
          <div className="my-2 md:my-4 flex gap-4">
            <Link href={`/movie/now_playing/${data.id}?title=${data.title}`}>
              <button className="flex items-center gap-2 px-2 md:px-4 py-1 bg-white text-black rounded-md">
                <FaRegPlayCircle />
                <p>Watch Now</p>
              </button>
            </Link>
            <Link href={`/movie/now_playing/${data.id}?title=${data.title}`}>
              <button className="flex items-center gap-2 px-2 md:px-4 py-1 border border-white rounded-md">
                <FaPlus />
                <p>More Info</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
