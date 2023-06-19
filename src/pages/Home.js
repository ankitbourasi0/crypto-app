import React, { useEffect } from "react";
import { motion as m, useScroll, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "swiper/css";

// const container = {
//   hidden: { opacity: 1, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2
//     }
//   }
// };

const item = {
  hidden: { y: "10vh", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Interfacecontainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};
const squareVariants = {
  visible: { opacity: 1, scale: 2, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 },
};
const Home = () => {
  const { scrollYProgress } = useScroll();

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="w-full flex items-start justify-center  flex-col">
      {/* <video
        autoplay="true"
        loop="true"
        muted="true"
        class="absolute z-0 w-auto 
            min-w-full object-cover h-full opacity-40 max-w-none"
      >
        <source src="./images/video/bganimation.mp4" />
      </video> */}
      {/* Main Page  */}
      <div className="w-full flex min-h-[100vh] relative font-poppins justify-center items-center ">
        <video
          autoplay="true"
          loop="true"
          muted="true"
          class="absolute z-0 w-auto 
            min-w-full object-cover max-h-screen max-w-none"
        >
          <source src="./images/video/firstvideo.mp4" />
        </video>
        {/* <img src="./images/animation/mainintro.gif" className=""/> */}
        <div className="flex w-full max-w-7xl top-40 absolute items-center">
          <div className="w-1/2 text-left">
            {/* <h1 className="text-5xl mt-10  mb-12 font-poppins ">
              Step into a World of <span className="font-extrabold font-poppins text-6xl  text-teal-300 -600 -700 -400 ">Financial Freedom with Ozo Trade.</span>
            </h1> */}
            <m.div
              variants={item}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 0.8,
                ease: "anticipate",
              }}
            >
              <img src="./images/text2.png" className="mb-8 " />
            </m.div>
            <m.div
              variants={item}
              initial="hidden"
              animate="visible"
              transition={{
                duration: 1.6,
                ease: "anticipate",
              }}
              className="font-poppins text-justify mb-6 "
            >
              Ozo Trade is a leading investment platform that empowers
              individuals to invest their money wisely and achieve significant
              returns. With our user-friendly platform, you can confidently
              navigate the financial markets and make informed investment
              decisions. Join us today and unlock your earning potential.
            </m.div>
            <m.div
              initial={{ y: "20vh", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.8,
                ease: "anticipate",
              }}
              className="flex space-x-0"
            >
              {/* <button className="text-white my-2   bg-violet-700  shadow-white-700 shadow-md hover:bg-violet-800 hover:text-white  transition ease-in-out delay-150 hover:scale-95  hover:translate-y-1 border-2 rounded-full px-7 py-4 font-semibold text-lg tracking-wide">
                Buy Tokens
              </button> */}
              <button className="text-white w-56   shadow-white-700 shadow-md  hover:text-white transition ease-in-out delay-150 hover:scale-95  hover:translate-y-1 rounded-full  font-semibold text-lg tracking-wide">
                <img src="./images/button.png" className="h-16" />
              </button>
              <button className="text-white w-56     shadow-white-700 shadow-md  hover:text-white transition ease-in-out delay-150 hover:scale-95  hover:translate-y-1 rounded-full  font-semibold text-lg tracking-wide">
                <img src="./images/dashboard1.png" className="h-28" />
              </button>
            </m.div>
          </div>

          {/* <div className="w-1/2 h-full  flex justify-center items-center">
            <img src="./images/video/logovideo.gif" className="max-w-[450px]" />
          </div> */}
        </div>
      </div>
      {/* <div className="w-full min-h-[3vh] bg-gradient-to-b opacity-40 from-cyan-950 ">
            </div> */}

      {/* What is OZo Trade  */}
      <div className="w-full flex h-full max-h-[100vh] relative justify-center items-center  ">
        <img
          src="./images/laptop1.jpg"
          className="z-0 opacity-80  max-h-[100vh] w-full object-cover "
        />
        {/* <video
          autoplay="true"
          loop="true"
          muted="true"
          class="absolute z-0 w-auto opacity-70
            min-w-full object-cover max-h-screen max-w-none"
        >
          <source src="./images/video/2ndVideo.mp4" />
        </video> */}
        <div className="flex justify-center absolute top-40 items-center  px-16">
          <div className="w-1/2 h-full  flex justify-center items-center">
            {/* <img src="./images/laptop.png" className="" /> */}
          </div>
          <div className="w-1/2 text-left ">
            <m.h1
              className="text-5xl   mb-12 font-semibold font-poppins"
              initial={{ y: "20vh", opacity: 0 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  duration: 1.1,
                  ease: "anticipate",
                },
              }}
              // viewport={{ once: true }}
              // ref={ref}
              // variants={squareVariants}
              // animate={{ scale: 2 }}
              // initial="hidden"
            >
              OZO Pay
            </m.h1>
            <m.p
              initial={{ x: 200, opacity: 0 }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 1.6,
                  ease: "anticipate",
                },
              }}
              // viewport={{ once: true }}
              className="font-poppins text-lg text-justify"
            >
              Ozo pay is one of the platforms for trading cryptocurrencies and
              foreign exchange. We are focusing on better internet investment
              opportunities for the general public, assisting people in
              increasing their personal wealth and generating long-term
              profitability, transforming lives and help them in making wise
              financial decisions. Our service offers customers transparent and
              successful cryptocurrency investing solutions that enable them to
              enhance their personal money.
              <br />
              <br />
              As an organisation Tecmactrade is able to use statistical models,
              trade-related examples, and analytical algorithms to ensure a
              secure and simple market for everyone to join. We demonstrate many
              approaches with key information and trading guidelines for various
              coins. All of these have been successfully combined to produce
              favourable trading results.
            </m.p>
          </div>
        </div>
      </div>

      {/* Center Div  */}
      <div className="w-full flex justify-center mb-16 min-h-[100vh]  items-center relative ">
        {/* <video
          autoplay="true"
          loop="true"
          muted="true"
          class="absolute z-0 w-auto 
            min-w-full object-cover max-h-screen max-w-none"
        >
          <source src="./images/video/finalbgvideo1.mp4" />
        </video> */}

        <m.div className="max-w-6xl w-full mx-auto absolute  p-16 min-h-[50vh] my-24  grid grid-cols-4 gap-8 ">
          <m.div
             initial={{ scale: 0,opacity:0 }}
             whileInView={{
           
              opacity: 1, scale: 1,
             transition:{
              duration: 0.3,
        delay: 0.0,
        ease: [0, 0.71, 0.2, 1.01]
             }
             }}
             
            viewport={{ once: true }}
            className="min-w-[150px] min-h-[150px] hover:scale-105  transition duration-500 transform  flex flex-col space-y-4 justify-center text-white font-semibold text-xl items-center shadow-2xl rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-cyan-500 "
          >
            <img src="./images/icons/interface.png" className="w-16" />

            <p className="">Interface</p>
          </m.div>

          <m.div
             initial={{ scale: 0,opacity:0 }}
             whileInView={{
           
              opacity: 1, scale: 1,
             transition:{
              duration: 0.3,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01]
             }
             }}
            // viewport={{ once: true }}
            className=" min-h-[150px] min-w-[150px]  hover:scale-105 transition duration-500 transform flex flex-col space-y-4 justify-center  text-white font-semibold text-xl items-center shadow-2xl rounded-lg bg-gradient-to-r from-sky to-indigo-500 shadow-indigo-500"
          >
            <img src="./images/icons/exchange.png" className="w-16" />

            <p className="">Exchange</p>
          </m.div>
          <m.div
             initial={{ scale: 0,opacity:0 }}
             whileInView={{
           
              opacity: 1, scale: 1,
             transition:{
              duration: 0.3,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01]
             }
             }}
            // viewport={{ once: true }}
            className=" min-h-[150px]  min-w-[150px]  hover:scale-105 transition duration-500 transform flex flex-col space-y-4 justify-center text-white font-semibold text-xl items-center shadow-2xl rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-fuchsia-500 "
          >
            <img src="./images/icons/secure.png" className="w-16" />

            <p className="">Security</p>
          </m.div>

          <m.div
            initial={{ scale: 0,opacity:0 }}
            whileInView={{
          
             opacity: 1, scale: 1,
            transition:{
             duration: 0.3,
       delay: 0.4,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}
            // viewport={{ once: true }}
            className="min-h-[150px]  min-w-[150px]  hover:scale-105 transition duration-500 transform flex flex-col space-y-4 justify-center  text-white font-semibold text-xl items-center shadow-2xl rounded-lg  bg-gradient-to-r from-purple-500 to-pink-500 shadow-purple-500 "
          >
            <img src="./images/icons/profit.png" className="w-16" />
            <p className="">Investment </p>
          </m.div>
        </m.div>
      </div>

      {/* Design 1  */}
      <div className="w-full min-h-[100vh] relative flex mb-16 items-center  ">
        <img
          src="./images/skydiving.jpg"
          className="z-0 opacity-80 object-cover  "
        />

        <div className=" absolute px-52 w-full font-poppins   bg-opacity-40 py-[202px] ">
          <m.h1
            className="text-7xl font-semibold  mb-6"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
          >
            we take your money <br />
            matters seriously
          </m.h1>
          <m.p
            className="text-3xl font-semibold mb-4   "
            initial={{ x: -50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.4,
                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
          >
            so that you don’t have to.
          </m.p>
          <m.p
            className="text-xl font-semibold mb-10 "
            initial={{ x: -50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.6,
                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
          >
            never miss a due date with reminders to help you pay your bills on
            time,
            <br /> instant settlements mean you never wait for your payments to
            go through
            <br /> and statement analysis lets you know where your money goes,
            always.
          </m.p>
          <m.button
            className="rounded-full bg-white px-14 py-6 "
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 2.0,
                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
          >
            <span className="text-black text-2xl font-semibold">
              Experience the upgrade
            </span>{" "}
          </m.button>
        </div>
      </div>

      {/* Investment Package  */}
      <div className="w-full flex-col flex justify-center min-h-[100vh] items-center mb-16">
        <h1 className="text-5xl mt-16  mb-12 border-b-4 border-rose-600 pb-2 uppercase font-semibold font-poppins">
          Packages
        </h1>

        <div className="max-w-[calc(100%-6rem)]  p-8 flex justify-between items-center w-full ">
          {/*Micro */}
          <div className={"w-full flex flex-col  justify-center items-center"}>
            <div className="max-w-[350px] shadow-2xl hover:cursor-pointer ease-in-out delay-150 hover:scale-95  hover:translate-y-1  shadow-cyan-500 w-full transition duration-500 transform pb-5 bg-gradient-to-r from-cyan-500 to-blue-500  text-white border-4 flex-col rounded-2xl">
              <h1
                className={
                  "my-4 text-center pb-4 border-b-2 text-5xl font-bold "
                }
              >
                MICRO
              </h1>
              <h3 className={"my-4 text-center pb-4 text-3xl font-bold "}>
                $25 - $4999
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
              <h1
                className={
                  "my-4 text-center pb-4 border-b-2 text-5xl font-bold "
                }
              >
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
              <h1
                className={
                  "my-4 text-center pb-4 border-b-2 text-5xl font-bold "
                }
              >
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

      {/* Design 2  */}
      <div className="w-full min-h-[100vh] relative flex font-poppins items-center  ">
        <img
          src="./images/dogbg.jpg"
          className="z-0  opacity-60 object-cover "
        />

        <div className=" absolute px-52 w-full  bg-opacity-40 py-[202px] ">
          <m.h1
            className="text-8xl font-semibold mb-6"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
          >
            security first.
            <br />
            and second.
          </m.h1>
          <m.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.4,
                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
            className="text-3xl font-semibold mb-6   "
          >
            what’s yours remains only yours.
          </m.p>
          <m.p
            initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,

                ease: "anticipate",
              },
            }}
            // viewport={{ once: true }}
            className="text-xl font-semibold mb-10 "
          >
            Ozo ensures that all your personal data and transactions are
            encrypted,
            <br /> and secured so what’s yours remains only yours. there’s no
            room for
            <br /> mistakes because we didn’t leave any
          </m.p>
          <m.button initial={{ x: 50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay:0.2,
                ease: "anticipate",
              },
            }} className="rounded-full bg-white px-14 py-6 ">
            <span className="text-black text-2xl font-semibold">
              Become a member
            </span>{" "}
          </m.button>
        </div>
      </div>

      <div className="flex  mx-auto min-h-[100vh] font-poppins relative  w-full  justify-center items-center">
        {/* left  */}

        {/* <img
          src="./images/bg3.jpg"
          className="z-0 opacity-60 object-cover "
        /> */}
        <video
          autoplay="true"
          loop="true"
          muted="true"
          class="absolute z-0 w-auto opacity-50
            min-w-full object-cover max-h-screen max-w-none"
        >
          <source src="./images/video/ozotokenvideo1.mp4" />
        </video>
        <div className="absolute w-full ml-44  flex justify-start items-center">
          <div className="max-w-2xl w-full text-left ">
            <m.h1   initial={{ x: -50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: "anticipate",
              },
            }} className="font-semibold font-poppins text-5xl mb-6">
              Stunning Crypto Platform <br />
              <span className="text-4xl font-medium">
                It's Great For Your Icon
              </span>{" "}
            </m.h1 >
            <m.p  initial={{ x: -50, opacity: 0 }}
            whileInView={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                delay:0.3,
                ease: "anticipate",
              },
            }}  className="  text-base mb-6">
              From day one we designed and built a modern crypto template for
              beginners and experts alike. Make easy deposits and withdrawals,
              measure the performance of your portfolio, and track all your
              cryptocurrencies in one place.
            </m.p >

            <div className="space-y-6 ">
              <m.div  initial={{ y: -50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.5,
                delay:0.3,
                ease: "anticipate",
              },
            }}  className="flex items-center space-x-4">
                <img src="./images/transfer-money.png" className="w-12" />
                <div className="font-poppins  text-xl">
                  Bank Transfer
                  <p className="font-poppins text-base">
                    You can follow cryptos by investing from all banking
                    platforms.
                  </p>
                </div>
              </m.div>
              <m.div initial={{ y: -50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.5,
                delay:0.5,
                ease: "anticipate",
              },
            }}  className="flex items-center space-x-4">
                <img src="./images/debit.png" className="w-12" />
                <div className="font-poppins  text-xl">
                  Credit Card
                  <p className="font-poppins text-base">
                    You can quickly buy and transfer cryptocurrencies with your
                    credit card.
                  </p>
                </div>
              </m.div>
              <m.div initial={{ y: -50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.5,
                delay:0.7,
                ease: "anticipate",
              },
            }}   className="flex items-center space-x-4">
                <img src="./images/safety.png" className="w-12" />
                <div className="font-poppins  text-xl">
                  Safe Transfer
                  <p className="font-poppins text-base">
                    You can exchange and send tokens in complete safety.
                  </p>
                </div>
              </m.div>
            </div>
          </div>

          {/* right  */}
          {/* <div className=" pl-2  flex justify-center items-center">
            <img src="./images/ai.png" className=" " />
          
          </div> */}
        </div>
      </div>

      {/* Cryptocurrency says  */}
      {/* Parent  */}
      <m.h1 initial={{ y: -50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.5,
                delay:0.7,
                ease: "anticipate",
              },
            }} className="text-4xl text-center font-poppins font-bold  mb-16 mt-24 w-full">
        Cryptocurrency Use Case
      </m.h1>

      <m.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2,
          },
        }}
        className="grid grid-cols-2 mb-24 mx-auto max-w-7xl gap-x-16 gap-y-12"
      >
        {/* 1  */}
        <m.div
          initial={{
            y: 20,
            opacity: 0,
        
          }}
          whileInView={{
         
              
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.4,
                ease: "anticipate",
              },
         
          }}
          className="max-w-[480px]  relative space-x-6 w-full flex items-center"
        >
          {/* left  */}
          <img
            src="./images/animation/circleanimation.png"
            className="animate-spin-slow absolute left-0 w-32"
          />

          <img src="./images/icons/profit.png" className="w-16 pl-2 " />
          {/* right  */}
          <div className="font-poppins pl-6   text-lg">
            Purchases
            <p className="font-poppins mt-2 text-sm">
              You can invest in cryptocurrency regularly over time by scheduling
              purchases on a daily, weekly or monthly basis.
            </p>
          </div>
        </m.div>
        {/* 2  */}
        <m.div
          initial={{
            y: 20,
            opacity: 0,
           
          }}
          whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.8,
                ease: "anticipate",
              },
          }}
          className="max-w-[480px] space-x-6 relative w-full flex items-center"
        >
          {/* left  */}
          <img
            src="./images/animation/circleanimation.png"
            className="animate-spin-slow absolute left-0 w-32"
          />
          <img src="./images/icons/interface.png" className="w-16 pl-2 " />
          {/* right  */}
          <div className="font-poppins pl-6 text-lg">
            Easy Interface
            <p className="font-poppins mt-2 text-sm">
              You don't need to look for what or where. You can easily manage
              your accounts with our user-friendly panel.
            </p>
          </div>
        </m.div>
        {/* 3 */}
        <m.div
          initial={{
            y: 20,
            opacity: 0,
         
          }}
          whileInView={{
            
            
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.2,
                ease: "anticipate",
              },
          
          }}
          className="max-w-[450px] relative space-x-6  w-full flex items-center"
        >
          {/* left  */}
          <img
            src="./images/animation/circleanimation.png"
            className="animate-spin-slow absolute left-0 w-32"
          />

          <img src="./images/icons/secure.png" className="w-16 pl-2 " />
          {/* right  */}
          <div className="font-poppins pl-6 text-lg">
            High Security
            <p className="font-poppins mt-2 text-sm">
              With the highest level of system security, your crypto-asset
              investments and all your data are safe.
            </p>
          </div>
        </m.div>
        {/* 4 */}
        <m.div
          initial={{
            y: 20,
            opacity: 0,
       
          }}
          whileInView={{
            
         
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.6,
                ease: "anticipate",
              },
          
          }}
          className="max-w-[480px] relative space-x-6  w-full flex items-center"
        >
          {/* left  */}
          <img
            src="./images/animation/circleanimation.png"
            className="animate-spin-slow absolute left-0 w-32"
          />

          <img src="./images/icons/api.png" className="w-16 pl-2 " />
          {/* right  */}
          <div className="font-poppins pl-6   text-lg">
            API Support
            <p className="font-poppins mt-2 text-sm">
              Execute the orders yourself if you want, or let the algorithms you
              write do it for you.
            </p>
          </div>
        </m.div>
        {/* 5 */}
        <m.div
          initial={{
            y: 20,
            opacity: 0,
           
          }}
          whileInView={{
           
              
              y: 0,
              opacity: 1,
              transition: {
                duration: 2.0,
                ease: "anticipate",
              },
          
          }}
          className="max-w-[480px]  relative space-x-6  w-full flex items-center"
        >
          {/* left  */}
          <img
            src="./images/animation/circleanimation.png"
            className="animate-spin-slow absolute left-0 w-32"
          />

          <img src="./images/icons/analytics.png" className="w-16 pl-2 " />
          {/* right  */}
          <div className="font-poppins pl-6   text-lg">
            Market Analysis
            <p className="font-poppins mt-2 text-sm">
              Analysis that can guide your investment strategies; research
              reports, video analyzes and expert opinions.
            </p>
          </div>
        </m.div>
        {/* 6 */}
        <m.div
          initial={{
            y: 20,
            opacity: 0,
          
          }}
          whileInView={{
          
        
              y: 0,
              opacity: 1,
              transition: {
                duration: 2.4,
                ease: "anticipate",
              },
          
          }}
          className="max-w-[480px]  relative space-x-6  w-full flex items-center"
        >
          {/* left  */}
          <img
            src="./images/animation/circleanimation.png"
            className="animate-spin-slow absolute left-0 w-32"
          />

          <img src="./images/icons/certified.png" className="w-16 pl-2 " />
          {/* right  */}
          <div className="font-poppins pl-6  text-lg">
            Licensed Organization
            <p className="font-poppins mt-2 text-sm">
              We are among the important investment institutions with our
              world-class technological infrastructure.
            </p>
          </div>
        </m.div>
      </m.div>

      {/* Document  */}
      <m.h1 initial={{ y: -50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.5,
                delay:0.7,
                ease: "anticipate",
              },
            }} className="text-5xl font-poppins font-bold text-center  mt-24 w-full">
        Document
      </m.h1>
      <div  
        className="max-w-6xl w-full mx-auto  h-full p-16 min-h-[50vh] mb-24  grid grid-cols-4 gap-8 ">
        <m.div  initial={{ scale: 0,opacity:0 }}
            whileInView={{
          rotate:360,
             opacity: 1, scale: 1,
            transition:{
             duration: 0.2,
       delay: 0.1,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}className="min-w-[150px] min-h-[150px] hover:scale-105  transition duration-500 transform  flex flex-col space-y-4 justify-center text-white font-semibold text-xl items-center shadow-2xl rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow-purple-500 ">
          <img src="./images/icons/document.png" className="w-16" />

          <p className="">Privacy</p>
        </m.div>

        <m.div   initial={{ scale: 0,opacity:0 }}
            whileInView={{
              rotate:360,
             opacity: 1, scale: 1,
            transition:{
             duration: 0.2,
       delay: 0.2,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}className=" min-h-[150px] min-w-[150px]  hover:scale-105 transition duration-500 transform flex flex-col space-y-4 justify-center  text-white font-semibold text-xl items-center shadow-2xl rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-cyan-500 ">
          <img src="./images/icons/document.png" className="w-16" />

          <p className="">Terms</p>
        </m.div>

        <m.div  initial={{ scale: 0,opacity:0 }}
            whileInView={{
              rotate:360,
             opacity: 1, scale: 1,
            transition:{
             duration: 0.2,
       delay: 0.3,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className=" min-h-[150px]  min-w-[150px]  hover:scale-105 transition duration-500 transform flex flex-col space-y-4 justify-center text-white font-semibold text-xl items-center shadow-2xl rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-fuchsia-500">
          <img src="./images/icons/document.png" className="w-16" />

          <p className="">Subscription</p>
        </m.div>

        <m.div   initial={{ scale: 0,opacity:0 }}
            whileInView={{
              rotate:360,
             opacity: 1, scale: 1,
            transition:{
             duration: 0.2,
       delay: 0.4,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="min-h-[150px]  min-w-[150px]  hover:scale-105 transition duration-500 transform flex flex-col space-y-4 justify-center  text-white font-semibold text-xl items-center shadow-2xl rounded-lg  bg-gradient-to-r from-sky to-indigo-500 shadow-indigo-500">
          <img src="./images/icons/document.png" className="w-16" />
          <p className="">White Papers </p>
        </m.div>
      </div>

      {/* Design 3  */}
      <div className="w-full min-h-[100vh]    font-poppins relative flex  items-center  ">
        <img
          src="./images/story.png"
          className="z-0 opacity-80  object-cover "
        />

        <div className=" absolute w-full flex px-16 bg-opacity-40  justify-around  ">
          <m.h1 initial={{
            x:-50,
            opacity:0
          }}
          
          whileInView={{
            opacity:1,
            x:0,
            transition:{
              duration:0.75,
              easings:"easeInOut"
            }
          }}
          className="text-7xl font-semibold  max-w-[500px] pb-2 max-h-max flex items-end ">
            the story of OZO begins with trust.
          </m.h1>
          <m.p  initial={{
            x:150,
            opacity:0
          }}
          
          whileInView={{
            opacity:1,
            x:0,
            transition:{
              duration:0.75,
              easings:"easeInOut"
            }
          }} className="text-xl max-w-[550px]   ">
            trust as a virtue has consistently played an essential role in every
            great human achievement. and consistently, its importance has been
            overlooked. not just by individuals, but by entire societies. we
            felt it was time someone gave it the spotlight it deserves.
            especially for the ones who live by this virtue: the trustworthy.
            <br />
            <br />
            so we thought of creating a system that rewards its members for
            doing good and being trustworthy. this way, trust as a virtue
            becomes something to aspire to, just the way it should be. then we
            went one step ahead: we built it. we know we are on the right track
            because here you are.
            <br />
            <br />
            if you make it to OZO, congratulations and welcome. we have a lot of
            things planned for you.
          </m.p>
        </div>
      </div>

      {/* Calculator  */}
      <div className="w-full min-h-[100vh] font-poppins mb-24 relative  ">
        {/* <img src="./images/bg.png" className="z-0  object-cover " /> */}
        <video
          autoplay="true"
          loop="true"
          muted="true"
          class="absolute z-0 w-auto opacity-50
            min-w-full object-cover max-h-[110vh] max-w-none"
        >
          <source src="./images/video/finalbgvideo1.mp4" />
        </video>
        <div className="absolute flex top-40 items-center w-full">
          <m.div  initial={{ scale: 0.5,opacity:0 }}
            whileInView={{
            
             opacity: 1, scale: 1,
            transition:{
             duration: 0.4,
       delay: 0.4,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="max-w-[550px] bg-neutral-900 rounded-2xl  ml-48 py-12 px-10 ">
            <h1 className="mb-6 text-2xl border-b-2 pb-6 text-center ">
              Calculate Your Income
            </h1>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-5">
              <p className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6">
                Package Name
              </p>
              <p className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6">
                Daily Returns
              </p>
              <p className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6">
                Referral Income
              </p>
              <p className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6">
                Binary Income
              </p>
              <p className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6">
                Capping Limit
              </p>
              <p className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6">
                Principle Returns
              </p>
            </div>
            <p className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6 mb-6">
              Earnings
            </p>
            <input
              className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6"
              placeholder="Enter amount"
            />
          </m.div>
          <div className="max-w-[550px]  border-r-4 pr-2 ml-16 flex items-center min-h-[40vh]">
            <m.h1 initial={{
            x:75,
            opacity:0
          }}
          
          whileInView={{
            opacity:1,
            x:0,
            transition:{
              duration:0.75,
              easings:"easeInOut"
            }
          }} className="mb-6 text-7xl text-right ">
              get Income information with Ozo calculator.
            </m.h1>
          </div>
        </div>
      </div>

      {/* youtube videos oage  */}
      <div className="font-poppins mb-24   w-full max-h-[110vh]">
        <m.h1 initial={{ y: -50, opacity: 0 }}
            whileInView={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1.5,
                delay:0.7,
                ease: "anticipate",
              },
            }} className="text-6xl text-center mt-12">
          Finance simplified,
          <br />
          in your language
        </m.h1>

        <div className="w-full mt-24 flex justify-center space-x-14 items-center">
          <m.button  initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1.6,
                   delay:0.9,
                ease: "anticipate",
              },
            }} className="text-white w-56 border-2  py-4 shadow-grey-700 shadow-2xl  hover:text-white transition ease-in-out delay-150 hover:scale-95  hover:translate-y-1 rounded-full  font-semibold text-lg tracking-wide">
            Youtube
          </m.button>
          <m.button  initial={{ opacity: 0, scale: 0 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1.6,
                   delay:0.9,
                ease: "anticipate",
              },
            }} className="text-white w-56 border-2 py-4 shadow-grey-700 shadow-2xl  hover:text-white transition ease-in-out delay-150 hover:scale-95  hover:translate-y-1 rounded-full  font-semibold text-lg tracking-wide">
            Blogs
          </m.button>
        </div>
      </div>

      <div className="font-poppins  flex justify-center w-full relative h-full max-h-[50vh] text-black">
        <div className="max-w-[380px] max-h-[280px] ease-in-out z-10 duration-300 h-full hover:rotate-0 hover:z-50 hover:cursor-pointer transform transition delay-300 hover:-translate-y-36 absolute left-[280px] bottom-6  -rotate-6 px-6 py-8 w-full bg-white rounded-2xl shadow-xl">
          <h2 className="mb-4 text-gray-600">Lorem ipsum</h2>
          <p>
            lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="max-w-[420px] absolute z-20 left-[500px] ease-in-out  duration-300 bottom-0 hover:z-50  hover:rotate-0 hover:cursor-pointer transform transition delay-300 hover:-translate-y-36  rotate-12 max-h-[250px] h-full  rounded-2xl bg-white  p-3">
          <img src="./images/yt2.jpg" className="rounded-2xl" />
        </div>
        <div className="max-w-[420px] absolute z-30 bottom-12 hover:rotate-0  duration-300 ease-in-out hover:z-50 hover:cursor-pointer transform transition delay-300 hover:-translate-y-36 -rotate-3 right-[500px]  max-h-[250px] h-full rounded-2xl bg-white  p-3">
          <img src="./images/yt1.jpg" className="rounded-2xl" />
        </div>

        <div className="max-w-[380px] rotate-6 hover:rotate-0 hover:z-50  duration-300 ease-in-out hover:cursor-pointer transform delay-300 hover:-translate-y-36 z-40 -bottom-12 absolute right-[320px]  px-6 py-8   w-full bg-white rounded-2xl shadow-xl">
          <h2 className="mb-4 text-gray-600">Word of the day</h2>
          <h2 className="mb-4 text-3xl">Additionally Survillence Measure</h2>

          <p className="text-gray-500">
            rem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="w-full min-h-[200px] h-full mt-[350px] z-50 px-6 py-8  bg-black  shadow-xl">
          <div>afsevsevse</div>
        </div>
      </div>

      <div className="w-full max-h-[100px] h-full   px-6 py-8    shadow-xl">
        <div></div>
      </div>
      {/* FAQ  */}

      <div className="w-full my-28 ">
        <div className="font-poppins mx-auto max-w-6xl space-y-16 ">
          <h1  className="text-3xl text-center mb-16">FAQs</h1>

          <div className="text-xl   ">
            <p className="font-semibold mb-6">
              how does CRED reward their users?
            </p>
            <p className="text-gray-500">
              CRED partners with the best premier and luxury brands to bring you
              an unmatched experience at the end of every credit card bill
              payment cycle.
            </p>
          </div>
          <div className="text-xl   ">
            <p className="font-semibold mb-6">how to earn rewards on CRED?</p>
            <p className="text-gray-500">
              members can earn rewards in two different ways. CRED coins & gems.
              CRED Coin Rewards: - when you pay your credit card bill on CRED,
              for every rupee cleared on your bill you earn a CRED coin. - you
              can then use earned CRED coins to claim exclusive rewards from
              different brands. CRED Gem Rewards: - for every person that you
              refer to CRED who makes a bill payment, you earn 10 gems.
            </p>
          </div>

          <div className="text-xl   ">
            <p className="font-semibold mb-6">
              what do you get as a CRED Member?
            </p>
            <p className="text-gray-500">
              as a CRED member, you instantly make your credit card payment
              experience hassle-free by unlocking several perks only available
              to CRED members. - seamless bill payment experience through modes
              like upi, net banking and debit cards - timely credit card bill
              payment reminders - automate your credit card bill payments -
              expose hidden charges on your credit card with cred protect - get
              real-time alerts on duplicate transactions on your credit card -
              manage multiple credit cards on a single portal - keep a realtime
              check on your credit score
            </p>
          </div>

          <div className="text-xl   ">
            <p className="font-semibold mb-6">
              how does one become a member of CRED?
            </p>
            <p className="text-gray-500">
              you can apply to be a member by signing up on CRED with your name
              and valid mobile number(issued within India). CRED is India’s most
              trustworthy and creditworthy community. This means we are
              selective about the members we take. For membership an Experian
              credit score of 750 or above is mandatory.
            </p>
          </div>

          <div className="text-xl   ">
            <p className="font-semibold mb-6">how to know your credit score?</p>
            <p className="text-gray-500">
              upon becoming a member, you can check and refresh your credit
              score with a single click. CRED then proceeds to acquire your
              updated credit score through a CIBIL score soft inquiry. on CRED,
              you can access your credit score data anytime without any extra
              charges. as a member, this helps you keep regular checks on your
              credit score and re-evaluate your spending patterns to maintain a
              healthy credit status. CRED offers Equifax credit score checker,
              find your CRIF credit score for free, Experian credit score
              checker for free.
            </p>
          </div>
          <div className="text-xl   ">
            <p className="font-semibold mb-6">banks supported on CRED</p>
            <p className="text-gray-500">
              CRED supports credit card bill payment for American Express,
              Standard Chartered, Citibank, HSBC, HDFC, ICICI, SBI, AXIS, RBL,
              PNB, and other top Indian banks. We support VISA, MasterCard,
              American Express & RuPay cards.
            </p>
          </div>
        </div>
      </div>

      {/* <div className=" w-full flex min-h-[80vh] h-full relative justify-center items-center ">
        <img src="./images/bg5.png " className="object-cover  " />
      </div> */}
      {/* <div className=" w-full flex min-h-[80vh] h-full relative justify-center items-center ">
        <img src="./images/bg4.jpg " className="object-cover  " />
      </div> */}
      {/* What we do  */}
      {/* <div className="w-full flex justify-center mb-16 items-center flex-col">
        
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
      </div> */}

      {/* <div className="w-full font-poppins min-h-[100vh]">
        <h2 className="text-2xl text-center mb-6">ROADMAP</h2>
        <h1 className="text-4xl  text-center mb-6 font-semibold ">
          Ozo Pay STRATEGY AND PROJECT PLAN
        </h1>
        <div className="w-full min-h-[80vh] px-32  overflow-scroll  overflow-x-auto ">
       
          <div className="flex  space-x-4 py-4 px-4 ">
            <div className="max-w-[450px] p-8 rounded-2xl shadow-lg   bg-purple-800 -700 -400">
              <h1 className="font-semibold  text-xl mb-3">Manpower</h1>
              <p className="">
                CEO Benjamin B Turbin is on the hunt for talent. Hiring
                potential members, reaching out the experts to discuss the
                business idea and leads. Finally forming a learned team from the
                best available options for the smooth flow of operations.
              </p>
            </div>
            <div className="max-w-[450px] p-8 rounded-2xl shadow-lg   bg-rose-400">
              <h1 className="font-semibold  text-xl mb-3">
                Upgrading Services
              </h1>
              <p className="">
                A lot of backend struggle finally gives way for AI software
                integration. Helping the website to improve and creating our own
                trading systems using the AI software to analyse and provide
                secure and risk-free trades.
              </p>
            </div>
            <div className="max-w-[450px] p-8 rounded-2xl shadow-lg   bg-red-400">
              <h1 className="font-semibold  text-xl mb-3">Global Services</h1>
              <p className="">
                A global platform seeking to setup multiple branches and offices
                to spread the business on a global scale. Reaching out to
                business ventures, experts and audiences for setting up services
                and encouraging people to gain financial strength.
              </p>
            </div>
            <div className="max-w-[450px] p-8 rounded-2xl shadow-lg   bg-orange-400">
              <h1 className="font-semibold  text-xl mb-3">The First Idea</h1>
              <p className="">
                Forming a business to setup services related to cryptocurrency.
                Providing quality inputs, completing the checklists and setting
                an online base for users to reach out for investments and
                financing options for a better-quality life.
              </p>
            </div>
          </div>

         
          <div className="flex  space-x-4 py-4  px-4 ">
            <div className="max-w-[450px] p-8 rounded-2xl shadow-lg   bg-yellow-600">
              <h1 className="font-semibold  text-xl mb-3">
                Business Execution
              </h1>
              <p className="">
                The ideas, manpower and finances put together to execute a
                business like never before. Uploading the best software systems
                to generate fluent work systems. Protecting the integrity of the
                company against external issues.
              </p>
            </div>

            <div className="max-w-[450px] p-8 rounded-2xl shadow-lg   bg-brown-400">
              <h1 className="font-semibold  text-xl mb-3">
                A Website For Everyone
              </h1>
              <p className="">
                Acknowledging the changes and making improvements to help every
                user understand the website better. Making subtle changes to
                help users with easier options and reach global audience in
                their individual capacity.
              </p>
            </div>

            <div className="max-w-[450px] p-8 rounded-2xl shadow-lg   bg-light-green-500 -400">
              <h1 className="font-semibold  text-xl mb-3">A New Face</h1>
              <p className="">
                With different parameters in perfect synchronisation, we will
                look to strengthen the grip in the financial markets and be the
                complete business a user can access. Tecmactrade will be a new
              </p>
            </div>

            <div className="max-w-[450px] p-8 rounded-2xl shadow-lg   bg-light-blue-500 -400">
              <h1 className="font-semibold  text-xl mb-3">Manpower</h1>
              <p className="">
                CEO Benjamin B Turbin is on the hunt for talent. Hiring
                potential members, reaching out the experts to discuss the
                business idea and leads. Finally forming a learned team from the
                best available options for the smooth flow of operations.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* Testimonals  */}
      {/* <div class="py-16 w-full flex justify-center items-center h-full mb-20 ">
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
      </div> */}
    </div>
  );
};

export default Home;
