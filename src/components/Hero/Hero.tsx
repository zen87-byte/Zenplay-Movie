import HeroCollection from "./HeroCollection";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <>
      <div className="w-full">
        <HeroCarousel />
        <div className="px-4 md:px-6 lg:px-8 xl:px-12 my-4 bg-gradient-to-b from-[#030712] via-[#0C0D24]">
          <div>
            <HeroCollection category="popular" />
          </div>
          <div>
            <HeroCollection category="top_rated" />
          </div>
          <div>
            <HeroCollection category="upcoming" />
          </div>
        </div>
      </div>
    </>
  );
}
