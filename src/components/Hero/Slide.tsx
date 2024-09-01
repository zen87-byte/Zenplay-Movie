import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Link from "next/link";

export default function Slide({ items, currentId, event,  ...props }) {
  return (
    <>
      <div className="group w-full z-40">
        <Carousel {...props}>
          <CarouselContent className="w-full mx-auto">
            {items.map((item, index: number) => (
              <CarouselItem className="basis-1/8" key={index}>
                {/* <Link
                  href={`/movie/trending/${item.id}?title=${item.title}`}
                  passHref
                > */}
                  <button onClick={() =>event(index)}>
                    <img
                      className={`rounded-md w-24 md:w-24 lg:w-48 ${
                        currentId === index
                          ? "transition ease-in-out duration-1000 outline scale-110 "
                          : "brightness-50 border border-white"
                      } my-2`}
                      src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                      alt={`${item.title}`}
                    />
                  </button>
                {/* </Link> */}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
}
