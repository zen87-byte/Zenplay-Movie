"use client";
import Hero from "@/components/Hero/Hero";
import LoadingSuspense from "@/components/Loading/Loading";
import { fetchCategory } from "@/utils/fetch";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <button
          className="bg-transparent border border-solid border-black rounded"
          onClick={() => {
            signOut({ redirect: false }).then(() => {
              router.push("/");
            });
          }}
        >
          Sign Out
        </button>
      );
    } else if (status === "loading") {
      return <span className="text-[#888] text-sm mt-7">Loading...</span>;
    } else {
      return (
        <Link
          href="/login"
          className="bg-transparent border border-solid border-black rounded"
        >
          Sign In
        </Link>
      );
    }
  };

  return (
    <>
      <div>
        <Hero />
        <div className="bg-gradient-to-b h-screen from-[#030712] via-[#0C0D24]">
          {showSession()}
        </div>
      </div>
    </>
  );
}
