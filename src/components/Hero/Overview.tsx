import { FaStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import ActionButton from "./ActionButton";

const Overview = ({ data }) => {
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
          {data.genres.map((item, index: number) => (
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
          <ActionButton action_1="Watch Now" action_2="More Info" />
        </div>
      </div>
    </>
  );
};

export default Overview;
