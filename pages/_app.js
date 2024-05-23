import "@/styles/globals.css";
import { Syne } from "next/font/google";
import React from "react";

const syne = Syne({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={syne.className}>
      <Component {...pageProps} />
    </main>
  );
}
