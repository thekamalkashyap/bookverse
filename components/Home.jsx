import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { features } from "@/bookdata/features";
import { uiBooks } from "@/bookdata/uibooks";
import { categories } from "@/bookdata/categories";
import { IoSearch } from "react-icons/io5";
import { appImages } from "@/bookdata/appImages";
import { RiArrowDropDownLine } from "react-icons/ri";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Home() {
  return (
    <main className="absolute z-10 backdrop-blur-[3px] ">
      <div className="flex flex-col customCss">
        <section className="min-h-screen w-screen flex justify-center items-center flex-col text-white gap-2">
          <h1 className="text-4xl text-center lg:text-3xl">
            Hey! We Are{" "}
            <span className="text-6xl text-purple-400">Bookverse</span>
          </h1>
          <p className="text-sm text-gray-300 lg:text-lg text-center">
            The Emerging Platform To Read Books
          </p>
          <div className="flex items-center justify-center gap-4 bg-white rounded-lg text-black px-4 py-2 mt-8 border border-gray-500 w-11/12 lg:w-1/2">
            <IoSearch size={25} className="text-gray-500" />
            <input
              type="text"
              className="border-none outline-none text-sm w-full lg:text-xl"
              placeholder="Search By Title, Author, Category, Price"
            />
            <RiArrowDropDownLine size={30} className="text-gray-500" />
          </div>
        </section>
        <section className="min-h-screen w-screen flex flex-col items-center justify-center text-white ">
          <strong className="text-4xl font-semibold mb-20 text-center">
            Read Your Favourite Books In A Unique Way
          </strong>
          <div className="flex justify-evenly w-full lg:flex-row flex-col">
            {uiBooks.map((book, index) => {
              return <BookBox book={book} key={book.bookTitle} />;
            })}
          </div>
        </section>
        <section className="min-h-screen w-screen text-white flex flex-col items-center justify-center mt-16">
          <strong className="text-4xl font-semibold">How We Differ</strong>
          <p className="lg:w-1/2 w-11/12 text-center mb-20">
            We're crafting a revolutionary book-reading tool, crafted around
            advanced user experience and an interactive user interface design,
            using technologies like AI and blockchain, designed to effortlessly
            engage users in the joy of reading.
          </p>
          <div className="flex items-center justify-center flex-wrap gap-10">
            {features.map((feature, index) => (
              <FlipCard card={feature} key={feature.title} />
            ))}
          </div>
        </section>
        <section className="min-h-screen w-screen text-white flex flex-col items-center justify-center">
          <strong className="text-4xl font-semibold mb-8">Categories</strong>
          <Carousel
            responsive={responsive}
            className="h-36 w-screen"
            autoPlay
            infinite
            autoPlaySpeed={1000}
            arrows={false}
            rewind={true}
            customTransition="all 4s linear"
            transitionDuration={2000}
            rtl={false}
            itemClass="carousel-item-padding-80-px dimagkharab"
          >
            {categories.map((category, index) => (
              <CategoryCard card={category} key={category.name} />
            ))}
          </Carousel>
          <Carousel
            responsive={responsive}
            className="h-16 w-screen"
            autoPlay
            infinite
            rewind={true}
            autoPlaySpeed={1000}
            arrows={false}
            customTransition="all 4s linear"
            transitionDuration={2000}
            rtl={true}
            itemClass="carousel-item-padding-80-px dimagkharab"
          >
            {categories.map((category, index) => (
              <CategoryCard card={category} key={category.name} />
            ))}
          </Carousel>
        </section>
        <section className="min-h-screen w-screen flex items-center justify-center flex-col text-white">
          <strong className="text-6xl font-semibold mb-8">Our App</strong>
          <div className="flex items-center justify-center gap-16 flex-col lg:flex-row">
            {appImages.map((url) => {
              return (
                <figure>
                  <Image
                    className="w-auto h-[35rem] rounded-[1.8rem]"
                    alt="mockup"
                    height={560}
                    width={200}
                    src={url}
                  />
                </figure>
              );
            })}
          </div>
          <div className="flex flex-col items-center justify-center ">
            <strong className="text-4xl font-semibold my-8">Get App On</strong>
            <div className="flex items-center justify-center gap-4 lg:gap-16 mb-20 flex-col lg:flex-row">
              <div className="flex gap-3 bg-black rounded-xl px-8 py-2 cursor-pointer border border-gray-500 w-72">
                <Image
                  src={"/playstore.svg"}
                  alt="playstorelogo"
                  width={40}
                  height={40}
                />
                <div>
                  <p className="text-gray-500">GET IT ON</p>
                  <p className="text-xl">Google Play</p>
                </div>
              </div>
              <div className="flex gap-3 bg-black rounded-xl px-8 py-2 cursor-pointer border border-gray-500 w-72">
                <Image
                  src={"/apple.webp"}
                  alt="AppleLogo"
                  width={50}
                  height={40}
                  className=" invert shrink-0"
                />
                <div>
                  <p className="text-gray-500">DOWNLOAD ON THE</p>
                  <p className="text-xl">App store</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

const BookBox = ({ book }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <figure className="transition-all duration-300 delay-75 book my-10">
        <ul className="hardcover_front">
          <li>
            <Image
              className="w-auto h-[35rem]"
              alt="attitude is everything"
              src={book.image}
            />
          </li>
          <li></li>
        </ul>
        <ul className="page">
          <li></li>
          <li className="overflow-hidden h-full flex justify-center items-center p-2 text-[0.7rem] text-black">
            {book.content}
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
      <div className="text-end">
        <h3 className="text-xl font-semibold">{book.bookTitle}</h3>
        <span className="text-gray-400 self-end">{book.author}</span>
      </div>
    </div>
  );
};

const FlipCard = ({ card }) => {
  return (
    <div className="flipCard">
      <div className="side front glass">
        <card.icon className={`text-7xl text-purple-400`} />
        <strong className="text-center text-lg">{card.title}</strong>
      </div>
      <div className="side back glass">{card.detail}</div>
    </div>
  );
};

const CategoryCard = ({ card }) => {
  return (
    <div className="glass flex items-center justify-center p-8 py-3 gap-4">
      <strong className="text-center text-lg">{card.name}</strong>
      <Image src={card.icon} height={40} width={40} alt="notFound" />
    </div>
  );
};
