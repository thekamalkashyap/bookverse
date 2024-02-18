import BGCanvas from "@/components/Canvas";
import "@/styles/globals.css";
import "@/styles/book.css";
import "@/styles/flip.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="fixed w-screen h-screen top-0 left-0 z-[-1]">
        <BGCanvas />
      </div>
      <>
      <Head>
        <title>Bookverse - The Emerging Platform To Read Books</title>
        <meta name="description" content="We're crafting a revolutionary book-reading tool, crafted around advanced user experience and an interactive user interface design, using technologies like AI and blockchain, designed to effortlessly engage users in the joy of reading." />
      </Head>
      <Component {...pageProps} />
      </>
    </>
  );
}
