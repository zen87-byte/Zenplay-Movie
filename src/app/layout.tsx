import "@/styles/globals.css";
import { ThemeProvider } from "./provider";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import React, { Suspense } from "react";
import LoadingSuspense from "@/components/Loading/Loading";
import Footer from "@/components/footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      {/* <Head>
        <title />
        <meta
          name="description"
          content="Watch best and popular movie for free"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* <AuthProvider> */}
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {/* <Suspense fallback={<LoadingSuspense />}> */}
          <div className="overflow-hidden relative w-full min-h-screen flex flex-grow flex-col">
            <Navbar />
            <main className="w-full flex-grow relative">{children}</main>
            <Footer />
          </div>
          {/* </Suspense> */}
        </ThemeProvider>
      </body>
      {/* </AuthProvider> */}
    </html>
  );
}
