import Canvas from "@/components/Canvas";
export default function Home() {
  return (
    <main className="bg-[#110d0c]">
      <div className="fixed w-screen h-screen">
        <Canvas />
      </div>
      <div id="content" className="absolute top-0 left-0 pb-16">
        <div className="px-4 sm:px-10 md:px-16 flex justify-center items-center lg:grid grid-cols-6 grid-rows-6 text-white  bg-blend-overlay bg-cover bg-no-repeat h-[50vh] md:h-[calc(100vh-4rem)]">
          <div className="flex flex-col col-span-4 col-start-1 row-span-3 row-start-2 gap-4 sm:gap-6 lg:gap-8 xl:col-start-2 xl:col-span-3">
            <h1 className="text-3xl font-bold md:text-5xl lg:text-6xl">
              Explore the world <br /> like never before!
            </h1>
            <p className="text-sm font-medium sm:w-1/2 md:w-3/4 sm:text-xl md:text-2xl">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </p>
            <form
              className="flex items-center justify-center w-full px-4 rounded-full glass sm:w-2/3 xl:w-full"
              action=""
            >
              <input
                className="w-full py-2 text-white bg-transparent rounded-full focus:outline-none"
                type="text"
                placeholder="Search Destination"
              />
            </form>
          </div>
        </div>
        <div className="flex flex-col gap-12 px-[15rem] text-sm font-medium text-white sm:text-xl md:text-2xl">
          <p className="p-4 glass">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit
            amet risus tempus, imperdiet magna a, hendrerit dolor. Pellentesque
            fringilla tortor tellus, et vestibulum risus ultricies eget. Donec
            sed scelerisque justo. Ut dignissim, massa eu pharetra suscipit,
            lectus turpis pulvinar nunc, eget sollicitudin purus mauris at
            velit. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Vestibulum id vulputate magna.
            Phasellus semper vestibulum tortor non tristique. Donec pulvinar
            urna placerat vehicula scelerisque.
          </p>
          <p className="p-4 glass">
            Fusce feugiat a nulla eget blandit. Nunc tempor odio diam, et
            facilisis ligula volutpat at. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Maecenas
            porta luctus faucibus. Vivamus venenatis lacus vel tristique
            eleifend. Nam ac purus eget nibh fringilla accumsan. Ut lobortis
            metus gravida semper fermentum. Nulla suscipit pharetra odio ornare
            tincidunt. Sed euismod ultrices imperdiet. Praesent dignissim sit
            amet dui sit amet sollicitudin. Duis metus sapien, sodales vitae
            enim vitae, placerat bibendum erat. Donec varius commodo urna nec
            dapibus.
          </p>
          <p className="p-4 glass">
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam
            facilisis est non est tincidunt dictum. Integer ut gravida turpis.
            Aliquam pharetra lectus nec eros scelerisque, et vestibulum velit
            porttitor. Suspendisse malesuada metus justo. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Vestibulum ac ornare libero, at vestibulum ex. Proin
            fermentum fermentum justo tristique aliquam. Maecenas eget
            vestibulum velit. Donec venenatis ante at placerat scelerisque. Cras
            ultricies diam sit amet sem elementum pharetra. Aliquam ullamcorper
            euismod metus, id facilisis nulla porta eu. Curabitur tristique odio
            in leo sollicitudin, vitae dictum tortor consequat. Aliquam erat
            volutpat.
          </p>
          <p className="p-4 glass">
            Duis ut risus in diam faucibus volutpat. Morbi ut ligula id ante
            sollicitudin mattis eu sit amet dolor. Curabitur sollicitudin auctor
            tincidunt. Maecenas dapibus, metus eu euismod tempus, magna dolor
            consequat nunc, et luctus turpis metus et sapien. Pellentesque
            malesuada sapien eget massa faucibus semper. In volutpat, erat in
            sagittis aliquam, ex velit rutrum elit, in sodales massa eros mollis
            dolor. Etiam lorem orci, interdum in lectus nec, consequat vehicula
            neque. Morbi consectetur lorem nibh, ac accumsan
          </p>
          <p className="p-4 glass">
            est scelerisque ac. Duis posuere odio vel felis condimentum
            pellentesque. Cras enim elit, efficitur ut feugiat et, scelerisque
            eget dui. Nulla sed nibh sed lacus finibus tempor quis eu lacus.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla tincidunt facilisis arcu et laoreet.
            Etiam velit lorem, finibus sed velit sed, lobortis vestibulum dolor.
            Phasellus fermentum tincidunt nibh, eu egestas turpis vestibulum
            vitae. Curabitur nec felis at dolor pulvinar luctus. Phasellus sed
            enim dolor.
          </p>
        </div>
        <div>
          <ul className="flex items-center justify-center my-12">
            <li className=" w-[50vw] flex justify-center items-center ">
              <figure className="book">
                <ul className="hardcover_front">
                  <li>
                    <img src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/41gr3r3FSWL.jpg" />
                  </li>
                  <li></li>
                </ul>
                <ul className="page">
                  <li></li>
                  <li className="overflow-hidden h-full flex justify-center items-center p-2 text-[0.5rem] text-black">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
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
              <div className="text-white m-2 p-3 w-[20rem] glass ">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </li>
            <li className=" w-[50vw] flex justify-center items-center ">
              <figure className="book">
                <ul className="hardcover_front">
                  <li>
                    <img src="https://edit.org/images/cat/book-covers-big-2019101610.jpg" />
                  </li>
                  <li></li>
                </ul>
                <ul className="page">
                  <li></li>
                  <li className="overflow-hidden h-full flex justify-center items-center p-2 text-[0.5rem] text-black ">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
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
              <div className="text-white m-2 p-3 w-[20rem] glass ">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
