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
import { capitalizeString, toAlphabetString } from "@/utils/method";

export default function HeroCollection({ category }: { category: string }) {
  const [cardData, setCarddata] = useState<any>([]);
  const collectionTitle = capitalizeString(toAlphabetString(category));

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

  if (!cardData) {
    return;
  }

  return (
    <div className="w-full group">
      <div className="my-2 px-4 flex justify-between">
        <h1 className="font-semibold">{collectionTitle}</h1>
        <p className="text-xs">
          <Link href={`movie/${category}/all?page=1`}>See All &gt;</Link>
        </p>
      </div>
      <div className="px-4 w-full">
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
    </div>
  );
}
