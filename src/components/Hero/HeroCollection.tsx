import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";
import { fetchCategory } from "@/utils/fetch";
import { useState, useEffect } from "react";
import LoadingSuspense from "../Loading/Loading";

export default function HeroCollection({category}: {category: string }){
  const [cardData, setCarddata] = useState<any>([]);

  useEffect(() => {
    const getCardData = async () => {
      try {
        const res = await fetchCategory(`movie/${category}`);
        setCarddata(res.results);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    getCardData();
  }, []);

  if(!cardData){
    return <LoadingSuspense/>
  }

  return (
    <div className="group px-4 w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {cardData.map(
            (
              item: {
                id: number;
                poster_path: string;
                title: string;
                overview: string;
              },
              index: number
            ) => (
              <CarouselItem
                className="basis-1/3 sm:basis-1/6 lg:basis-1/12"
                key={index}
              >
                <Link
                  href={`/movie/${category}/${item.id}?title=${item.title}`}
                  passHref
                >
                  <div>
                    <Image
                      width={1000}
                      height={1000}
                      className="rounded-md w-32 z-40"
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={`${item.title}`}
                    />
                  </div>
                </Link>
              </CarouselItem>
            )
          )}
        </CarouselContent>
        <CarouselPrevious className="invisible group-hover:visible" />
        <CarouselNext className="invisible group-hover:visible" />
      </Carousel>
    </div>
  );
};
