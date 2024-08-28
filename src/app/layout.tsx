import "@/styles/globals.css";
import { ThemeProvider } from "./provider";
import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import React, { Suspense } from "react";
import LoadingSuspense from "@/components/Loading/Loading";
import Footer from "@/components/footer/Footer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <Head>
          <title />
          <meta
            name="description"
            content="Watch best and popular movie for free"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* <AuthProvider> */}
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            disableTransitionOnChange
          >
            {/* <Suspense fallback={<LoadingSuspense />}> */}
            <div className="overflow-hidden relative w-full">
              <Navbar />
              <main className="w-full flex-grow relative">{children}</main>
              <div className="self-end">
                <Footer />
              </div>
            </div>
            {/* </Suspense> */}
          </ThemeProvider>
        </body>
        {/* </AuthProvider> */}
      </html>
    </>
  );
}
