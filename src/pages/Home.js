import React from "react";
// import { TbAlertTriangleFilled } from "react-icons/tb";
// import { GiSpellBook } from "react-icons/gi";
// import { SiBitcoincash } from "react-icons/si";
// import {BiSolidBank} from "react-icons/bi";
// import {BsFillCreditCard2BackFill} from "react-icons/bs";
// import {FaMoneyBillTransfer} from "react-icons/fa";

import "swiper/css";

const Home = () => {
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
      <div className="w-full flex min-h-[100vh] relative justify-center items-center ">
        <video
          autoplay="true"
          loop="true"
          muted="true"
          class="absolute z-0 w-auto 
            min-w-full object-cover max-h-screen max-w-none"
        >
          <source src="./images/video/bgvideofinal.mp4" />
        </video>
        <div className="flex w-full max-w-7xl top-40 absolute items-center">
          <div className="w-1/2 text-left">
            {/* <h1 className="text-5xl mt-10  mb-12 font-poppins ">
              Step into a World of <span className="font-extrabold font-poppins text-6xl  text-teal-300 -600 -700 -400 ">Financial Freedom with Ozo Trade.</span>
            </h1> */}
            <img src="./images/text2.png" className="mb-2 " />
            <p className="font-poppins text-justify mb-3 ">
              Ozo Trade is a leading investment platform that empowers
              individuals to invest their money wisely and achieve significant
              returns. With our user-friendly platform, you can confidently
              navigate the financial markets and make informed investment
              decisions. Join us today and unlock your earning potential.
            </p>
            <div className="flex space-x-3">
              {/* <button className="text-white my-2   bg-violet-700  shadow-white-700 shadow-md hover:bg-violet-800 hover:text-white  transition ease-in-out delay-150 hover:scale-95  hover:translate-y-1 border-2 rounded-full px-7 py-4 font-semibold text-lg tracking-wide">
                Buy Tokens
              </button> */}
              <button className="text-white w-56  shadow-white-700 shadow-md  hover:text-white transition ease-in-out delay-150 hover:scale-95  hover:translate-y-1 rounded-full  font-semibold text-lg tracking-wide">
                <img src="./images/button.png" />
              </button>
            </div>
          </div>

          {/* <div className="w-1/2 h-full  flex justify-center items-center">
            <img src="./images/video/logovideo.gif" className="max-w-[450px]" />
          </div> */}
        </div>
      </div>
      {/* <div className="w-full min-h-[3vh] bg-gradient-to-b opacity-40 from-cyan-950 ">
            </div> */}
      {/* What is OZo Trade  */}
      <div className="w-full flex h-full min-h-[100vh] relative justify-center items-center  ">
        <img
          src="./images/homesection.jpeg"
          className="z-0 opacity-40 object-cover "
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
            <img src="./images/navlogo.png" className="max-w-[550px]" />
          </div>
          <div className="w-1/2 text-left ">
            <h1 className="text-5xl   mb-12 font-semibold font-poppins">
              OZO Pay
            </h1>
            <p className="font-poppins text-lg text-justify">
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

      {/* Design 1  */}
      <div className="w-full min-h-[100vh] relative flex  items-center  ">
        <img
          src="./images/designbg1.jpg"
          className="z-0 opacity-80 object-cover  "
        />

        <div className=" absolute px-52 w-full font-poppins   bg-opacity-40 py-[202px] ">
          <h1 className="text-8xl font-semibold  mb-6">
            we take your money <br />
            matters seriously
          </h1>
          <p className="text-3xl font-semibold    ">
            so that you don’t have to.
          </p>
          <p className="text-xl font-semibold mb-10 ">
            never miss a due date with reminders to help you pay your bills on
            time,
            <br /> instant settlements mean you never wait for your payments to
            go through
            <br /> and statement analysis lets you know where your money goes,
            always.
          </p>
          <button className="rounded-full bg-white px-14 py-6 ">
            <span className="text-black text-2xl font-semibold">
              Experience the upgrade
            </span>{" "}
          </button>
        </div>
      </div>

      {/* Design 2  */}
      <div className="w-full min-h-[100vh] relative flex font-poppins items-center  ">
        <img
          src="./images/security2.jpg"
          className="z-0  opacity-50 object-cover "
        />

        <div className=" absolute px-52 w-full  bg-opacity-40 py-[202px] ">
          <h1 className="text-8xl font-semibold mb-6">
            security first.
            <br />
            and second.
          </h1>
          <p className="text-3xl font-semibold   ">
            what’s yours remains only yours.
          </p>
          <p className="text-xl font-semibold mb-10 ">
            Ozo ensures that all your personal data and transactions are
            encrypted,
            <br /> and secured so what’s yours remains only yours. there’s no
            room for
            <br /> mistakes because we didn’t leave any
          </p>
          <button className="rounded-full bg-white px-14 py-6 ">
            <span className="text-black text-2xl font-semibold">
              Become a member
            </span>{" "}
          </button>
        </div>
      </div>

      {/* Design 3  */}
      <div className="w-full min-h-[100vh]    font-poppins relative flex  items-center  ">
        <img
          src="./images/storybg.jpg"
          className="z-0 opacity-50  object-cover "
        />

        <div className=" absolute w-full flex px-16 bg-opacity-40  justify-around  ">
          <h1 className="text-7xl font-semibold  max-w-[500px] pb-2 max-h-max flex items-end ">
            the story of OZO begins with trust.
          </h1>
          <p className="text-xl max-w-[550px]   ">
            trust as a virtue has consistently played an essential role in every
            great human achievement. and consistently, its importance has been
            overlooked. not just by individuals, but by entire societies. we
            felt it was time someone gave it the spotlight it deserves.
            especially for the ones who live by this virtue: the trustworthy. 
            <br/>
            <br/>

            so
            we thought of creating a system that rewards its members for doing
            good and being trustworthy. this way, trust as a virtue becomes
            something to aspire to, just the way it should be. then we went one
            step ahead: we built it. we know we are on the right track because
            here you are.
            <br/>
            <br/>

             if you make it to OZO, congratulations and welcome.
            we have a lot of things planned for you.
          </p>
        </div>
      </div>

      {/* Calculator  */}
      <div className="w-full min-h-[100vh] font-poppins  relative  ">
      <img
          src="./images/bg.png"
          className="z-0  object-cover "
        />
       <div className="absolute flex top-40 items-center w-full">
       <div className="max-w-[550px] bg-neutral-900 -600 rounded-2xl  ml-48 py-12 px-10 ">
          <h1 className="mb-6 text-2xl border-b-2 pb-6 text-center ">Calculate Your Income</h1>
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 mb-5">
          <p  className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6" >Package Name</p>
          <p  className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6" >Daily Returns</p>
          <p  className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6"  >Referral Income</p>
          <p  className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6" >Binary Income</p>
          <p  className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6" >Capping Limit</p>
          <p  className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6" >Principle Returns</p>
          
          </div>
          <p  className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6 mb-6" >Earnings</p>
          <input  className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6" placeholder="Enter amount"/>


        </div>
        <div className="max-w-[550px]  border-r-4 pr-2 ml-16 flex items-center min-h-[40vh]">
        <h1 className="mb-6 text-7xl text-right ">get Income information with Ozo calculator.</h1>

        </div>
       </div>

      </div>

      <div className="flex max-w-7xl mx-auto min-h-[100vh] font-poppins  mb-12 w-full  justify-center items-center">
        {/* left  */}

        <div className="max-w-2xl w-full text-left ">
          <h1 className="font-semibold font-poppins text-5xl mb-6">
            Stunning Crypto Platform <br />
            <span className="text-4xl font-medium">
              It's Great For Your Icon
            </span>{" "}
          </h1>
          <p className="  text-base mb-6">
            From day one we designed and built a modern crypto template for
            beginners and experts alike. Make easy deposits and withdrawals,
            measure the performance of your portfolio, and track all your
            cryptocurrencies in one place.
          </p>

          <div className="space-y-6 ">
            <div className="flex items-center space-x-4">
              <img src="./images/transfer-money.png" className="w-12" />
              <div className="font-poppins  text-xl">
                Bank Transfer
                <p className="font-poppins text-base">
                  You can follow cryptos by investing from all banking
                  platforms.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src="./images/debit.png" className="w-12" />
              <div className="font-poppins  text-xl">
                Credit Card
                <p className="font-poppins text-base">
                  You can quickly buy and transfer cryptocurrencies with your
                  credit card.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img src="./images/safety.png" className="w-12" />
              <div className="font-poppins  text-xl">
                Safe Transfer
                <p className="font-poppins text-base">
                  You can exchange and send tokens in complete safety.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* right  */}
        <div className=" pl-2  flex justify-center items-center">
          <img src="./images/ai.png" className=" " />
        </div>
      </div>

      {/* Center Div  */}
      <div className="max-w-6xl w-full mx-auto  h-full p-16 min-h-[50vh] my-24  grid grid-cols-4 gap-8 ">
        <div className="min-w-[150px] min-h-[150px] hover:scale-105  transition duration-500 transform  flex flex-col space-y-4 justify-center text-white font-semibold text-xl items-center shadow-2xl rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-cyan-500 ">
          <img src="./images/icons/interface.png" className="w-16" />

          <p className="">Interface</p>
        </div>

        <div className=" min-h-[150px] min-w-[150px]  hover:scale-105 transition duration-500 transform flex flex-col space-y-4 justify-center  text-white font-semibold text-xl items-center shadow-2xl rounded-lg bg-gradient-to-r from-sky to-indigo-500 shadow-indigo-500">
          <img src="./images/icons/exchange.png" className="w-16" />

          <p className="">Exchange</p>
        </div>

        <div className=" min-h-[150px]  min-w-[150px]  hover:scale-105 transition duration-500 transform flex flex-col space-y-4 justify-center text-white font-semibold text-xl items-center shadow-2xl rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-fuchsia-500 ">
          <img src="./images/icons/secure.png" className="w-16" />

          <p className="">Security</p>
        </div>

        <div className="min-h-[150px]  min-w-[150px]  hover:scale-105 transition duration-500 transform flex flex-col space-y-4 justify-center  text-white font-semibold text-xl items-center shadow-2xl rounded-lg  bg-gradient-to-r from-purple-500 to-pink-500 shadow-purple-500 ">
          <img src="./images/icons/profit.png" className="w-16" />
          <p className="">Investment </p>
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

      {/* Cryptocurrency says  */}
      {/* Parent  */}
      <h1 className="text-4xl text-center font-poppins font-bold  mb-16 mt-24 w-full">
        Cryptocurrency Use Case
      </h1>

      <div className="grid grid-cols-2 mb-24 mx-auto max-w-7xl gap-x-16 gap-y-12">
        {/* 1  */}
        <div className="max-w-[480px]  relative space-x-6 w-full flex items-center">
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
        </div>
        {/* 2  */}
        <div className="max-w-[480px] space-x-6 relative w-full flex items-center">
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
        </div>
        {/* 3 */}
        <div className="max-w-[450px] relative space-x-6  w-full flex items-center">
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
        </div>
        {/* 4 */}
        <div className="max-w-[480px] relative space-x-6  w-full flex items-center">
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
        </div>
        {/* 5 */}
        <div className="max-w-[480px]  relative space-x-6  w-full flex items-center">
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
        </div>
        {/* 6 */}
        <div className="max-w-[480px]  relative space-x-6  w-full flex items-center">
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
        </div>
      </div>

      <h1 className="text-5xl font-poppins font-bold text-center  mt-24 w-full">
        Document
      </h1>
      <div className="max-w-6xl w-full mx-auto  h-full p-16 min-h-[50vh] mb-24  grid grid-cols-4 gap-8 ">
        <div className="min-w-[150px] min-h-[150px] hover:scale-105  transition duration-500 transform  flex flex-col space-y-4 justify-center text-white font-semibold text-xl items-center shadow-2xl rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow-purple-500 ">
          <img src="./images/icons/document.png" className="w-16" />

          <p className="">Privacy</p>
        </div>

        <div className=" min-h-[150px] min-w-[150px]  hover:scale-105 transition duration-500 transform flex flex-col space-y-4 justify-center  text-white font-semibold text-xl items-center shadow-2xl rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 shadow-cyan-500 ">
          <img src="./images/icons/document.png" className="w-16" />

          <p className="">Terms</p>
        </div>

        <div className=" min-h-[150px]  min-w-[150px]  hover:scale-105 transition duration-500 transform flex flex-col space-y-4 justify-center text-white font-semibold text-xl items-center shadow-2xl rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-fuchsia-500">
          <img src="./images/icons/document.png" className="w-16" />

          <p className="">Subscription</p>
        </div>

        <div className="min-h-[150px]  min-w-[150px]  hover:scale-105 transition duration-500 transform flex flex-col space-y-4 justify-center  text-white font-semibold text-xl items-center shadow-2xl rounded-lg  bg-gradient-to-r from-sky to-indigo-500 shadow-indigo-500">
          <img src="./images/icons/document.png" className="w-16" />
          <p className="">White Papers </p>
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
