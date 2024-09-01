import Link from "next/link";
import HeroCollection from "./HeroCollection";
import { useEffect, useState } from "react";
import { fetchCategory } from "@/utils/fetch";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <>
      <div className="w-full">
        <HeroCarousel />
        <div className="px-4 md:px-6 lg:px-8 xl:px-12 my-4 bg-gradient-to-b from-[#030712] via-[#0C0D24]">
          <div>
            <div className="my-2 px-8 flex justify-between">
              <h1 className="font-semibold">Popular</h1>
              <p className="text-xs">
                <Link href="movie/popular/all?page=1">See All &gt;</Link>
              </p>
            </div>
            <HeroCollection category="popular" />
          </div>
          <div>
            <div className="my-2 px-8 flex justify-between">
              <h1 className="font-semibold">Top Rated</h1>
              <p className="text-xs">
                <Link href="movie/top_rated/all?page=1">See All &gt;</Link>
              </p>
            </div>
            <HeroCollection category="top_rated" />
          </div>
          <div>
            <div className="my-2 px-8 flex justify-between">
              <h1 className="font-semibold">Coming Soon</h1>
              <p className="text-xs">
                <Link href="movie/upcoming/all?page=1">See All &gt;</Link>
              </p>
            </div>
            <HeroCollection category="upcoming" />
          </div>
        </div>
      </div>
    </>
  );
}
