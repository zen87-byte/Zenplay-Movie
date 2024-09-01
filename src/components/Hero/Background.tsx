import Image from "next/image";

export default function Background({ imageSrc }: { imageSrc: string }) {
  console.log(imageSrc);
  return (
    <>
      <div className="-z-50 transition-[width] duration-1000 ease-linear">
        <Image
          src={`https://image.tmdb.org/t/p/original/${imageSrc}`}
          style={{ objectFit: "cover", objectPosition: "top" }}
          alt=""
          fill={true}
          className="-z-50"
          priority
        />
      </div>
      <div className="absolute -z-10 w-1/3 w-full h-full left-0 bottom-0 bg-gradient-to-t from-[#030712] to-60%" />
      <div className="absolute -z-10 w-1/3 w-full h-full left-0 bottom-0 bg-gradient-to-r from-[#030712]" />
    </>
  );
}
