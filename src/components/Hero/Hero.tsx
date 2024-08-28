import { detailsType, fetchCategory } from "@/utils/fetch";
import { CarouselApi } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import LoadingSuspense from "../Loading/Loading";
import Overview from "./Overview";
import { fetchDetails } from "@/utils/fetch";
import Slide from "./Slide";
import Background from "./Background";

export default function Hero() {
  const [api, setApi] = useState<CarouselApi | undefined>();
  const [details, setDetails] = useState<detailsType | undefined>();
  const [currentId, setCurrentId] = useState(0);
  const [heroData, setHeroData] = useState<any[] | undefined>();
  const [current, setCurrent] = useState<number | undefined>();

  const handleThumb = useCallback(
    (index: number) => {
      setCurrentId(index);
      setCurrent(heroData ? heroData[index].id : undefined);
      api && api.scrollTo(index);
    },
    [api, heroData]
  );

  useEffect(() => {
    const getHero = async () => {
      try {
        const res = await fetchCategory("movie/now_playing");
        setHeroData(res.results);
        setCurrent(res.results[0]?.id); // Set the first item as the current item
        console.log(res);
      } catch (e) {
        console.log(e);
      }
    };

    getHero();
  }, []);

  useEffect(() => {
    if (!api || !heroData) return;

    api.on("select", () => {
      const currentId = api.selectedScrollSnap();
      setCurrentId(currentId);
      setCurrent(heroData[currentId].id);
    });

    api.on("reInit", () => api.scrollNext());
  }, [api, heroData]);

  useEffect(() => {
    const getDetails = async () => {
      if (current) {
        const res = await fetchDetails(current);
        setDetails(res);
      }
    };
    getDetails();
  }, [current]);

  if (!details || !heroData) {
    return <LoadingSuspense />;
  }

  return (
    <div className="w-full">
      <div className="relative w-full">
        <div className="relative overflow-hidden">
          <div>
            <Background imageSrc={details.backdrop_path} />
          </div>
          <div className="w-full relative pt-48 px-4 md:px-8 lg:px-16">
            <div className="w-4/5 md:w-2/5">
              <Overview data={details} />
            </div>
            <div className="w-full my-8">
              <Slide
                event={handleThumb}
                items={heroData}
                currentId={currentId}
                setApi={setApi}
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 5000,
                  }),
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
