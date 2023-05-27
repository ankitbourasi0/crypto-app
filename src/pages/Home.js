import React from "react";
import { TbAlertTriangleFilled } from "react-icons/tb";
import { GiSpellBook } from "react-icons/gi";
import { SiBitcoincash } from "react-icons/si";

import "swiper/css";
const Home = () => {
  
  return (
    <div className="w-full flex items-start justify-center  flex-col">
      {/* Main Page  */}
      <div className="w-full flex min-h-[90vh] relative justify-center items-center ">
        <img src="./images/vec.jpeg" className="z-0 opacity-40  bg-black/40"/>
        <div className="flex w-full max-w-7xl top-40 absolute items-center">
          <div className="w-1/2 text-left">

            <h1 className="text-5xl mt-10  mb-12 font-semibold font-poppins">
              Highly Profitable Cryptocurrency Platform
            </h1>
            <p className="font-poppins text-justify mb-6 ">
              Buy and sell the highest volume cryptocurrencies. Send money
              safely to whomever you want, whenever you want. Trade crypto with
              your credit card or bank transfer anytime from anywhere in the
              world.
            
            </p>
           <div className="flex space-x-3">
           <button className="text-white my-2   bg-violet-700  shadow-white-700 shadow-md hover:bg-violet-800 hover:text-white  transition ease-in-out delay-150 hover:scale-95  hover:translate-y-1 border-2 rounded-full px-7 py-4 font-semibold text-lg tracking-wide">
                 Buy Tokens
                </button>
                <button className="text-white my-2  bg-violet-700 shadow-white-700 shadow-md hover:bg-violet-800 hover:text-white transition ease-in-out delay-150 hover:scale-95  hover:translate-y-1 border-2 rounded-full px-7 py-4 font-semibold text-lg tracking-wide">
                Download Business Plan
                </button>
           </div>
          </div>

          <div className="w-1/2 h-full  flex justify-center items-center">
            <img src="./images/logo2.png" className="max-w-[450px]" />
          </div>
        </div>
      </div>

      {/* What is OZo Trade  */}
      <div className="w-full flex min-h-[90vh] relative justify-center items-center  ">
   
        <img src="./images/vec.jpeg" className="z-0 opacity-40 "/>

        <div className="flex justify-center absolute items-center px-16">
        <div className="w-1/2 h-full  flex justify-center items-center">
          <img src="./images/logo2.png" className="max-w-[450px]" />
        </div>
        <div className="w-1/2 text-left">
          <h1 className="text-5xl mt-16  mb-12 font-semibold font-serif">
            OZO Trade
          </h1>
          <p className="font-poppins text-justify">
            Tecmactrade is one of the platforms for trading cryptocurrencies and
            foreign exchange. We are focusing on better internet investment
            opportunities for the general public, assisting people in increasing
            their personal wealth and generating long-term profitability,
            transforming lives and help them in making wise financial decisions.
            Our service offers customers transparent and successful
            cryptocurrency investing solutions that enable them to enhance their
            personal money.
            <br />
            <br />
            As an organisation Tecmactrade is able to use statistical models,
            trade-related examples, and analytical algorithms to ensure a secure
            and simple market for everyone to join. We demonstrate many
            approaches with key information and trading guidelines for various
            coins. All of these have been successfully combined to produce
            favourable trading results.
          </p>
        </div>
        </div>
      </div>

      {/* What we do  */}
      <div className="w-full flex justify-center mb-16 items-center flex-col">
        
        <h1 className="text-4xl mt-16  mb-12 uppercase font-semibold font-poppins">
          What WE do
        </h1>
        <h1 className="text-4xl text-center mb-12 uppercase font-semibold font-poppins">
          THE VALUE OF THESE <span className="text-blue-500"> MODELS</span> IS
          IN <br />
          THE <span className="text-green-500"> MINIMIZATION</span> OF{" "}
          <span className="text-rose-600">RISK</span>
        </h1>
        <div className="flex space-x-4 font-poppins text-2xl items-center max-w-[calc(100%-4rem)]">
          <div className="max-w-[400px] bg-zinc-900  backdrop-blur-md  border-2 p-8 min-h-[350px]  rounded-2xl flex justify-center items-center flex-col  shadow-md">
            <GiSpellBook fontSize={"56px"} className="mb-2" />
            <h3 className="">Knowledge</h3>
            <p className="text-lg">
              Our team of experts has a deep understanding of the crypto market.
              We monitor the market 24/7, looking for opportunities to make a
              profit. We use our knowledge and experience to make informed
              trading decisions.
            </p>
          </div>

          <div className="max-w-[400px] bg-neutral-900 border-2 p-8 min-h-[355px] flex justify-center items-center flex-col rounded-2xl shadow-md">
            <SiBitcoincash fontSize={"56px"} className="" />
            <h3 className="">Earnings</h3>
            <p className="text-lg">
              We have a proven track record of success in the crypto market. We
              have generated consistent profits for our clients. We are
              confident that we can continue to generate profits for our clients
              in the future.
            </p>
          </div>

          <div className="max-w-[400px] bg-neutral-900  border-2 p-8  min-h-[350px]  flex justify-center items-center flex-col rounded-2xl shadow-md">
            <TbAlertTriangleFilled fontSize={"56px"} className="mb-1" />
            <h3 className="">Risk Reduction</h3>
            <p className="text-lg">
              We use statistical modeling and machine learning to identify and
              execute trades. We believe that the value of these models is in
              the minimization of risk. We use a variety of risk management
              techniques to protect our capital.
            </p>
          </div>
        </div>
      </div>

      {/* Investment Package  */}
      <div className="w-full flex-col flex justify-center items-center mb-16">
        <h1 className="text-5xl mt-16  mb-12 border-b-4 border-rose-600 pb-2 uppercase font-semibold font-poppins">
          Packages
        </h1>

        <div className="max-w-[calc(100%-6rem)]  p-8 flex justify-between items-center w-full ">
          {/*Micro */}
          <div className={"w-full flex flex-col  justify-center items-center"}>
            <div className="max-w-[350px] shadow-2xl hover:cursor-pointer ease-in-out delay-150 hover:scale-95  hover:translate-y-1  shadow-cyan-500 w-full transition duration-500 transform pb-5 bg-gradient-to-r from-cyan-500 to-blue-500  text-white border-4 flex-col rounded-2xl">
              <h1 className={"my-4 text-center pb-4 border-b-2 text-5xl font-bold "}>
                MICRO
              </h1>
              <h3 className={"my-4 text-center pb-4 text-3xl font-bold "}>$25 - $4999</h3>
              <div
                className={"w-full flex space-y-3 flex-col  items-center px-6"}
              >
                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>DAILY ROI</p>
                  <p className={"font-semibold"}>1.60% - 1.90%</p>
                </div>

                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>DURATION</p>
                  <p className={"font-semibold"}>150 DAYS</p>
                </div>
                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>RETURNS</p>
                  <p className={"font-semibold"}>240% - 285%</p>
                </div>
                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>REFERRAL</p>
                  <p className={"font-semibold"}>9.00 %</p>
                </div>
                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>BINARY</p>
                  <p className={"font-semibold"}>10%</p>
                </div>
                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>CAPPING LIMIT</p>
                  <p className={"font-semibold"}>$1500</p>
                </div>
                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>PRINCIPLE RETURNS</p>
                  <p className={"font-semibold"}>25%</p>
                </div>
              </div>
            </div>
          </div>

          {/*NANO */}
          <div className={"w-full flex flex-col justify-center items-center"}>
            <div className="max-w-[350px] shadow-2xl  ease-in-out delay-150 hover:scale-95  hover:translate-y-1  shadow-purple-500  hover:cursor-pointer  transition duration-500 transform w-full pb-5 bg-gradient-to-r  from-purple-500 to-pink-500 text-white border-4 flex-col rounded-2xl">
              <h1 className={"my-4 text-center pb-4 border-b-2 text-5xl font-bold "}>
                NANO
              </h1>
              <h3 className={"my-4 text-center pb-4 text-3xl font-bold "}>
                $5000 - $39999
              </h3>
              <div
                className={"w-full flex space-y-3 flex-col  items-center px-6"}
              >
                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>DAILY ROI</p>
                  <p className={"font-semibold"}>1.90% - 2.20%</p>
                </div>

                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>DURATION</p>
                  <p className={"font-semibold"}>140 DAYS</p>
                </div>
                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>RETURNS</p>
                  <p className={"font-semibold"}>266% - 308%</p>
                </div>
                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>REFERRAL</p>
                  <p className={"font-semibold"}>12.00 %</p>
                </div>
                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>BINARY</p>
                  <p className={"font-semibold"}>10%</p>
                </div>
                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>CAPPING LIMIT</p>
                  <p className={"font-semibold"}>$4000</p>
                </div>
                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>PRINCIPLE RETURNS</p>
                  <p className={"font-semibold"}>35%</p>
                </div>
              </div>
            </div>
          </div>

          {/*PICO*/}
          <div className={"w-full flex flex-col justify-center items-center"}>
            <div className="max-w-[350px] shadow-2xl ease-in-out delay-150 hover:scale-95  hover:translate-y-1  shadow-cyan-500     hover:cursor-pointer transition duration-500 transform w-full bg-gradient-to-r from-sky to-indigo-500 pb-5  text-white border-4 flex-col rounded-2xl">
              <h1 className={"my-4 text-center pb-4 border-b-2 text-5xl font-bold "}>
                PICO
              </h1>
              <h3 className={"my-4 pb-4 text-center text-3xl font-bold "}>
                $40000 - $100000
              </h3>
              <div
                className={"w-full flex space-y-3 flex-col  items-center px-6"}
              >
                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>DAILY ROI</p>
                  <p className={"font-semibold"}>2.20% - 2.50%</p>
                </div>

                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>DURATION</p>
                  <p className={"font-semibold"}>130 DAYS</p>
                </div>
                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>RETURNS</p>
                  <p className={"font-semibold"}>286% - 325%</p>
                </div>
                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>REFERRAL</p>
                  <p className={"font-semibold"}>15.00 %</p>
                </div>
                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>BINARY</p>
                  <p className={"font-semibold"}>10.00 %</p>
                </div>
                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>CAPPING LIMIT</p>
                  <p className={"font-semibold"}>$10000</p>
                </div>
                <div
                  className={
                    "flex w-full text-lg font-bold justify-between items-center"
                  }
                >
                  <p>PRINCIPLE RETURNS</p>
                  <p className={"font-semibold"}>50%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonals  */}
      <div class="py-16 w-full flex justify-center items-center h-full mb-20 ">
        <div class="container m-auto px-6 text-gray-600 dark:text-gray-300 md:px-12 xl:px-6">
          <div class="mb-20 space-y-4 px-6 md:px-0">
            <h2 class="text-center text-2xl font-bold font-poppins  text-white md:text-4xl">
              What's our customers say
            </h2>
          </div>
          <div class="md:columns-2 lg:columns-3 gap-8 space-y-8">
            <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div class="flex gap-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1362367807887974401/kuJ1OFT1_400x400.jpg"
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
                <div>
                  <h6 class="text-lg font-medium text-gray-900 dark:text-white">
                    Eric Ampire
                  </h6>
                  <p class="text-sm text-gray-700 dark:text-gray-400">
                    Mobile dev
                  </p>
                </div>
              </div>
              <p class="mt-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                aliquid quo eum quae quos illo earum ipsa doloribus nostrum
                minus libero aspernatur laborum cum, a suscipit, ratione ea
                totam ullam! Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Architecto laboriosam deleniti aperiam ab veniam sint non
                cumque quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>
            <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div class="flex gap-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1372441824560771075/DTcuXT0Z_400x400.jpg"
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
                <div>
                  <h6 class="text-lg font-medium text-gray-900 dark:text-white">
                    Rodrigo Aguilar
                  </h6>
                  <p class="text-sm text-gray-700 dark:text-gray-400">
                    Creator of Tailwind Awesome
                  </p>
                </div>
              </div>
              <p class="mt-8">
                {" "}
                Lorem ipsum dolor laboriosam deleniti aperiam ab veniam sint non
                cumque quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>

            <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div class="flex gap-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1362367807887974401/kuJ1OFT1_400x400.jpg"
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
                <div>
                  <h6 class="text-lg font-medium text-gray-900 dark:text-white">
                    Adam Wathan
                  </h6>
                  <p class="text-sm text-gray-700 dark:text-gray-400">
                    Creator of Tailwindcss
                  </p>
                </div>
              </div>
              <p class="mt-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto laboriosam deleniti aperiam ab veniam sint non cumque
                quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>
            <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div class="flex gap-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="./images/woman1.jpg"
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
                <div>
                  <h6 class="text-lg font-medium text-gray-900 dark:text-white">
                    Dan Kyungu
                  </h6>
                  <p class="text-sm text-gray-700 dark:text-gray-400">
                    Mobile dev
                  </p>
                </div>
              </div>
              <p class="mt-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto laboriosam deleniti aperiam ab veniam sint non cumque
                quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>

            <div class="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div class="flex gap-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="./images/woman1.jpg"
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
                <div>
                  <h6 class="text-lg font-medium text-gray-900 dark:text-white">
                    John Doe
                  </h6>
                  <p class="text-sm text-gray-700 dark:text-gray-400">
                    Creator dev
                  </p>
                </div>
              </div>
              <p class="mt-8">
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto laboriosam deleniti aperiam ab veniam sint non cumque
                quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>
            <div class="aspect-auto p-8 border border-gray-400 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div class="flex gap-4">
                <img
                  class="w-12 h-12 rounded-full"
                  src="./images/man.jpg"
                  alt=""
                  width=""
                  height=""
                  loading="lazy"
                />
                <div>
                  <h6 class="text-lg font-medium text-gray-900 dark:text-white">
                    Randy Doe
                  </h6>
                  <p class="text-sm text-gray-700 dark:text-gray-400">
                    Mobile dev
                  </p>
                </div>
              </div>
              <p class="mt-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Architecto laboriosam deleniti aperiam ab veniam sint non cumque
                quis tempore cupiditate. Sint libero voluptas veniam at
                reprehenderit, veritatis harum et rerum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
