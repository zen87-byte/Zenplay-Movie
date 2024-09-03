import React, { useEffect, useState } from "react";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@radix-ui/react-hover-card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useParams } from "next/navigation";
import { fetchCategory } from "@/utils/fetch";
import LoadingSuspense from "./Loading/Loading";

export function Collection() {
  const [collectionData, setCollectionData] = useState<any[]>([]);

  const router = useRouter();
  const path = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();

  const category = params.category;
  const page = searchParams.get("page");
  const items = collectionData;

  const currentPage: number = parseInt(page || "1");
  let fetchPage: number;
  if (currentPage == 1) {
    fetchPage = currentPage;
  } else {
    fetchPage = 2 * currentPage - 1;
  }

  useEffect(() => {
    const getCollectionData = async () => {
      try {
        if (category && page) {
          const res1 = await fetchCategory(
            `movie/${category}?language=en-US&page=${fetchPage}`
          );
          const res2 = await fetchCategory(
            `movie/${category}?language=en-US&page=${fetchPage + 1}`
          );

          const res = res1.results.concat(res2.results);
          setCollectionData(res);
          console.log("res", res.results);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getCollectionData();
  }, [category, page]);

  if (!items.length) {
    return <LoadingSuspense />;
  }

  return (
    <>
      <div className="xs:mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16">
        <div className="my-2">
          <button onClick={() => router.back()}>
            <Link href="/">&lt; Back</Link>
          </button>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-10 gap-2 md:gap-4 place-content-center">
          {items.map((item: any, index: number) => (
            <div key={index}>
              <Link
                href={`/movie/${category}/${item.id}?title=${item.title}`}
                passHref
              >
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Image
                      className="rounded-md m-auto w-32 md:w-40 lg:w-52 md"
                      src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                      alt={`${item.title}`}
                      width={500}
                      height={500}
                      loading="lazy"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent className="max-w-72 z-50 p-2 bg-[#030712] border rounded-md">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="line-clamp-5 text-xs">{item.overview}</p>
                  </HoverCardContent>
                </HoverCard>
              </Link>
            </div>
          ))}
        </div>
        <div className="my-4 sm:my-6 md:my-8 lg:my-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                {currentPage > 1 && (
                  <PaginationPrevious
                    href={`${path}?page=${currentPage - 1}`}
                  />
                )}
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={`${path}?page=${currentPage}`} isActive>
                  {currentPage}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={`${path}?page=${currentPage + 1}`}>
                  {currentPage + 1}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href={`${path}?page=${currentPage + 2}`}>
                  {currentPage + 2}
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href={`${path}?page=${currentPage + 1}`} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
}
