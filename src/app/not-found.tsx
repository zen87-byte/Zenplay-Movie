"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-8">404</h1>
      <h1 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">
        Page Not Found
      </h1>
      <p className="text-sm md:text-md lg:text-lg mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <p
        className="px-4 py-2 text-white underline hover:opacity-80 cursor-pointer"
        onClick={() => router.back()}
      >
        Go back home
      </p>
    </div>
  );
}
