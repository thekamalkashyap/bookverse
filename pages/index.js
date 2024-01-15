import BGCanvas from "@/components/Canvas";
import appSS from "../public/ss.png";
import attitudeBookCover from "../public/attitude.jpg";
import Image from "next/image";

const features = [
  {
    title: "Listen in background",
    detail: `Enjoy seamless multitasking with the 'Listen in Background'
    feature, making it effortless to savor music or podcasts while
    running, exercising, or cooking.`,
  },
  {
    title: "Subscribe premium at best offers",
    detail: `Unlock exclusive benefits and uninterrupted content with our Premium subscription at unbeatable offers, enhancing your experience to the fullest.`,
  },
  {
    title: "Get AI Show recommendation",
    detail: `Experience personalized excellence with AI-driven recommendations, tailoring content to your preferences effortlessly`,
  },
  {
    title: "Playback Speed. Listen in 1.5X and 2X",
    detail: `Accelerate your auditory journey with adjustable playback speeds, allowing you to listen faster and more efficient experience`,
  },
  {
    title: "Notes and other premium features",
    detail: `Elevate your productivity with premium features, including advanced note-taking capabilities and a suite of exclusive tools designed to enhance your overall user experience`,
  },
];

export default function Home() {
  return (
    <main className="bg-[#110d0c]">
      <div className="fixed w-screen h-screen">
        <BGCanvas />
      </div>
      <div id="content" className="absolute top-0 left-0">
        <div className="flex items-center justify-center w-screen h-screen text-white">
          <div className=" w-[37rem] flex justify-center items-start flex-col gap-4 mr-28">
            <h1 className="text-6xl text-[#83d4f9] font-bold tracking-tighter ">
              Heyy!, we're Bookverse
            </h1>
            <h3 className="text-3xl font-semibold">
              The emerging platform to read book.
            </h3>
            <p className="text-lg text-gray-200">
              We're crafting a revolutionary book-reading tool, crafted around
              advanced user experience and an interactive user interface design,
              using technologies like AI and blockchain, designed to
              effortlessly engage users in the joy of reading.
            </p>
          </div>
          <figure>
            <Image className="w-auto h-[35rem]" alt="mockup" src={appSS} />
          </figure>
        </div>
        <div className="flex items-center justify-center w-screen h-screen text-white">
          <div className=" w-[37rem] redGlass p-6 flex justify-center items-end text-right flex-col gap-4 mr-20">
            <h1 className="text-4xl text-[#fecb4c] font-bold tracking-tighter ">
              Read your favourite book with us
            </h1>
            <div>
              <h3 className="text-3xl font-semibold">Attitude is everything</h3>
              <span>by Jeff Keller</span>
            </div>
            <p className="text-lg text-gray-200">
              Remember: not everyone will like you, your goals or your actions.
              But don’t let the fear of criticism stop you from doing what you
              want. Accept criticism as part of life, and learn from it where
              possible. And, most importantly, stay true to your own values and
              convictions. If others don’t approve, so what
            </p>
          </div>
          <figure className="transition-all duration-300 delay-75 book hover:ml-24">
            <ul className="hardcover_front">
              <li>
                <Image
                  className="w-auto h-[35rem]"
                  alt="attitude is everything"
                  src={attitudeBookCover}
                />
              </li>
              <li></li>
            </ul>
            <ul className="page">
              <li></li>
              <li className="overflow-hidden h-full flex justify-center items-center p-2 text-[0.7rem] text-black">
                Remember: not everyone will like you, your goals or your
                actions. But don’t let the fear of criticism stop you from doing
                what you want. Accept criticism as part of life, and learn from
                it where possible. And, most importantly, stay true to your own
                values and convictions. If others don’t approve, so what
              </li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <ul className="hardcover_back">
              <li></li>
              <li></li>
            </ul>
            <ul className="book_spine">
              <li></li>
              <li></li>
            </ul>
          </figure>
        </div>
        <div className="flex flex-col items-center justify-center gap-16 mb-20 text-white">
          <h2 className="text-5xl font-bold text-[#83d4f9]">How we differ</h2>
          <div className="flex flex-wrap items-center justify-center gap-10 px-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex glass h-[14rem] p-4 items-start justify-center w-[30rem]"
              >
                <span className="mx-2 font-bold text-8xl">{index + 1}</span>
                <div>
                  <h3 className="mb-2 text-3xl font-bold ">{feature.title}</h3>
                  <p className="">{feature.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
