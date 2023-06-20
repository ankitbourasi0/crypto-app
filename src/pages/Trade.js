import React from "react";
import {motion as m} from "framer-motion"
const Trade = () => {
  return (
    <div className="w-full font-poppins  mb-8 ">
      <div className="w-full relative ">
        <img src="./images/designbg1.jpg" />
        <div className=" absolute top-56 left-32 w-full max-w-7xl mx-auto flex justify-center items-center flex-col ">
          <m.h1  initial={{ y:-50,opacity:0 }}
            whileInView={{
          
             opacity: 1, y:0,
            transition:{
             duration: 0.9,
       delay: 0.4,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="text-6xl text-center   mb-6">
          Enhanced Trade Standards: <br/>
          One Ozo Sets the Bar Higher for <br/>Exceptional Investment Opportunities
          </m.h1>
          <m.p  initial={{ opacity:0 }}
            whileInView={{
          
             opacity: 1,
            transition:{
             duration: 1.6,
       delay: 0.6,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="text-xl text-center mb-6">
          One Ozo is committed to raising the bar in trade standards, providing exceptional investment <br/> 
opportunities that surpass industry norms and deliver superior results for investors
          </m.p>
          <m.button   initial={{ opacity:0,scale:0 }}
            whileInView={{
          scale:1,
             opacity: 1,
            transition:{
             duration: 0.8,
       delay: 0.8,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="px-6 py-4 rounded-2xl bg-purple-900 text-xl font-semibold">
            Get Connect
          </m.button>
        </div>
      </div>

      <div className="w-full max-w-6xl mx-auto text-white flex justify-between space-x-10 items-center mt-44">
        <m.div  initial={{ opacity:0 }}
            whileInView={{
          
             opacity: 1,
            transition:{
             duration: 1.0,
       delay: 0.5,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="max-w-[350px] min-h-[340px] py-6 rounded-xl flex flex-col items-center justify-center text-center bg-neutral-900 px-6">
          <img
            src="./images/safety.png"
            className="bg-green-500 p-4 w-24 rounded-full mb-6"
          />
          <h1 className="text-2xl mb-4 font-bold">Transparency</h1>
          <p className="text-gray-500 text-[16px]">
          One Ozo maintains transparency in all trading activities, providing clear visibility into 
investments and ensuring trust and confidence
          </p>
        </m.div>
        <m.div  initial={{ opacity:0 }}
            whileInView={{
          
             opacity: 1,
            transition:{
             duration: 1.0,
       delay: 0.6,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="max-w-[350px] min-h-[340px] py-6 rounded-xl flex flex-col items-center justify-center text-center bg-neutral-900 px-6">
          <img
            src="./images/safety.png"
            className="bg-green-500 p-4 w-24 rounded-full mb-6"
          />
          <h1 className="text-2xl mb-4 font-bold">Accessibility</h1>
          <p className="text-gray-500 text-[16px]">
          One Ozo offers a user-friendly platform, enabling easy access to trading opportunities, 
empowering investors to seize profitable moments
          </p>
        </m.div>
        <m.div  initial={{ opacity:0 }}
            whileInView={{
          
             opacity: 1,
            transition:{
             duration: 1.0,
       delay: 0.7,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="max-w-[350px] min-h-[340px] py-6 rounded-xl flex flex-col items-center justify-center text-center bg-neutral-900 px-6">
          <img
            src="./images/safety.png"
            className="bg-green-500 p-4 w-24 rounded-full mb-6"
          />
          <h1 className="text-2xl mb-4 font-bold">Reliability</h1>
          <p className="text-gray-500 text-[16px]">
          One Ozo ensures reliable trade execution and dependable performance, backed by robust 
technology infrastructure and expert market analysis
          </p>
        </m.div>
      </div>

      <div className="w-full max-w-6xl mx-auto mt-28 mb-16 flex items-center justify-between min-h-[90vh] ">
        <div className="text-5xl max-w-[250px] w-full space-y-6">
          <m.div  initial={{ y:50,opacity:0 }}
            whileInView={{
          
             opacity: 1, y:0,
            transition:{
             duration: 0.9,
       delay: 0.3,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}>
            <h1 className="mb-3">50,000</h1>
            <p className="text-xl text-purple-900">Investor Base</p>
          </m.div>

          <m.div  initial={{ y:50,opacity:0 }}
            whileInView={{
          
             opacity: 1, y:0,
            transition:{
             duration: 0.9,
       delay: 0.4,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}>
            <h1 className="mb-3">$500</h1>
            <p className="text-xl text-purple-900">Investment Capital</p>
          </m.div>
          <m.div  initial={{ y:50,opacity:0 }}
            whileInView={{
          
             opacity: 1, y:0,
            transition:{
             duration: 0.9,
       delay: 0.5,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}>
            <h1 className="mb-3">100</h1>
            <p className="text-xl text-purple-900">Traders Team</p>
          </m.div>
          <m.div  initial={{ y:50,opacity:0 }}
            whileInView={{
          
             opacity: 1, y:0,
            transition:{
             duration: 0.9,
       delay: 0.6,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}>
            <h1 className="mb-3">85%</h1>
            <p className="text-xl text-purple-900">Trade Success Rate</p>
          </m.div>
          <m.div  initial={{ y:50,opacity:0 }}
            whileInView={{
          
             opacity: 1, y:0,
            transition:{
             duration: 0.9,
       delay: 0.6,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}>
            <h1 className="mb-3">97%</h1>
            <p className="text-xl text-purple-900">Investor Satisfaction</p>
          </m.div>
        </div>

        <div className="max-w-[900px] pl-10 w-full min-h-[70vh] relative h-full ">
          <m.div  initial={{ x:50,opacity:0 }}
            whileInView={{
          
             opacity: 1, x:0,
            transition:{
             duration: 0.9,
       delay: 0.8,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="max-w-[500px] min-h-[70vh] z-0  bg-gray-400 opacity-30 rounded-2xl  w-full "></m.div>

          <m.div  initial={{ x:-50,opacity:0 }}
            whileInView={{
          
             opacity: 1, x:0,
            transition:{
             duration: 0.9,
       delay: 0.95,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className=" z-10 absolute top-40 left-72">
            <h1 className="text-4xl tracking-wider mb-4 ">
            Impressive Investor Base<br/>
             and Satisfaction Rates: <br/>
             Unveiling One Ozo's Success
            </h1>
            <p className="max-w-[450px] tracking-wider text-sm w-full">
            One Ozo boasts a substantial number of investors, while maintaining a high percentage of 
satisfied clients. Our experienced team of traders ensures top-notch performance and service
            </p>
          </m.div>
        </div>
      </div>

      <div className="w-full  mb-24  min-h-[150vh] ">
        {/* <img src="./images/security1.jpg" className="opacity-50 " /> */}

        <div className="w-full mt-44">
          <m.h1   initial={{ y:-50,opacity:0 }}
            whileInView={{
          
             opacity: 1, y:0,
            transition:{
             duration: 0.9,
       delay: 0.6,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}  className="text-5xl mb-6 font-semibold text-center ">
            Our Services
          </m.h1>
          <m.p   initial={{ y:-50,opacity:0 }}
            whileInView={{
          
             opacity: 1, y:0,
            transition:{
             duration: 0.9,
       delay: 0.75,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}className="text-center max-w-[600px] mx-auto w-full text-xl mb-10 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </m.p>
        </div>
        <div className="w-full max-w-6xl  mx-auto text-white grid grid-cols-3 gap-6">
          <m.div  initial={{opacity:0 }}
            whileInView={{
          
             opacity: 1, 
            transition:{
             duration: 0.7,
       delay: 0.4,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }} className="max-w-[320px] py-6 rounded-xl   bg-neutral-900 px-6">
            <img
              src="./images/safety.png"
              className="bg-green-500 p-3 w-16 rounded-full mb-6"
            />
            <h1 className="text-2xl mb-4 font-bold">Proven Trading Strategies
</h1>
            <p className="text-gray-500">
            One Ozo implements tried and tested trading strategies, developed by industry experts, to 
optimize investment performance and generate consistent returns.
            </p>
          </m.div> 
          <m.div  initial={{opacity:0 }}
            whileInView={{
          
             opacity: 1, 
            transition:{
             duration: 0.7,
       delay: 0.5,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}  className="max-w-[320px] py-6 rounded-xl   bg-neutral-900 px-6">
            <img
              src="./images/safety.png"
              className="bg-green-500 p-3 w-16 rounded-full mb-6"
            />
            <h1 className="text-2xl mb-4 font-bold"> Advanced Market Analysis</h1>
            <p className="text-gray-500">
            With cutting-edge market analysis tools and techniques, One Ozo stays ahead of market trends, 
enabling informed investment decisions for maximum profitability.
            </p>
          </m.div>
          <m.div  initial={{opacity:0 }}
            whileInView={{
          
             opacity: 1, 
            transition:{
             duration: 0.7,
       delay: 0.6,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}  className="max-w-[320px] py-6 rounded-xl   bg-neutral-900 px-6">
            <img
              src="./images/safety.png"
              className="bg-green-500 p-3 w-16 rounded-full mb-6"
            />
            <h1 className="text-2xl mb-4 font-bold"> Risk Management
</h1>
            <p className="text-gray-500">
            One Ozo emphasizes effective risk management strategies to mitigate potential losses, ensuring 
a balanced and secure approach to trading.
            </p>
          </m.div>
          <m.div  initial={{opacity:0 }}
            whileInView={{
          
             opacity: 1, 
            transition:{
             duration: 0.7,
       delay: 0.7,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}  className="max-w-[320px] py-6 rounded-xl   bg-neutral-900 px-6">
            <img
              src="./images/safety.png"
              className="bg-green-500 p-3 w-16 rounded-full mb-6"
            />
            <h1 className="text-2xl mb-4 font-bold"> Competitive Trading Fees</h1>
            <p className="text-gray-500">
            One Ozo offers competitive trading fees, enabling investors to maximize their returns by 
reducing costs and expenses associated with trading
            </p>
          </m.div>
          <m.div  initial={{opacity:0 }}
            whileInView={{
          
             opacity: 1, 
            transition:{
             duration: 0.7,
       delay: 0.8,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}  className="max-w-[320px] py-6 rounded-xl   bg-neutral-900 px-6">
            <img
              src="./images/safety.png"
              className="bg-green-500 p-3 w-16 rounded-full mb-6"
            />
            <h1 className="text-2xl mb-4 font-bold"> Regulatory Compliance</h1>
            <p className="text-gray-500">
            One Ozo operates in accordance with strict regulatory standards, ensuring legal compliance and 
providing a trustworthy and secure trading environment
            </p>
          </m.div>
          <m.div  initial={{opacity:0 }}
            whileInView={{
          
             opacity: 1, 
            transition:{
             duration: 0.7,
       delay: 0.9,
       ease: [0, 0.71, 0.2, 1.01]
            }
            }}  className="max-w-[320px] py-6 rounded-xl   bg-neutral-900 px-6">
            <img
              src="./images/safety.png"
              className="bg-green-500 p-3 w-16 rounded-full mb-6"
            />
            <h1 className="text-2xl mb-4 font-bold">
            Continuous Innovation
            </h1>
            <p className="text-gray-500">
            One Ozo is committed to continuous innovation, regularly introducing new features, tools, and 
investment opportunities to enhance the trading experience for investors.
            </p>
          </m.div>
        </div>
      </div>

      <div></div>
      {/* <div className="w-full max-w-6xl mx-auto my-20">
        <h1 className="font-semibold font-poppins text-4xl my-6">
          TRADE <span className="text-cyan-500">STANDARDS</span> BY{" "}
          <span className="text-rose-500">OZOTRADE</span>
        </h1>
        <p className="text-lg font-poppins text-justify">
          As a premier trading platform, TECMACTRADE offers a wide range of
          services, including trading stocks, cryptocurrencies, and CFDs on a
          number of underlying assets. We continually trade to find a dependable
          income stream among the various markets. A cutting-edge, user-friendly
          trading platform enabling traders of all skill levels to conduct
          online transactions in a wide range of financial products which covers
          Bitcoin, Litecoin, Ethereum, and PerfectMoney. Our three investment
          programmes offer a consistent revenue stream to our clients.
        </p>
        <div className="flex space-x-10 justify-center items-center mt-6">
          <div className="w-1/2">
            <h3 className="font-semibold font-poppins text-xl my-6">
              FOREX TRADING AND CRYPTOCURRENCY
            </h3>
            <p className="text-lg font-poppins text-justify">
              A digital currency, or cryptocurrency, is an alternative payment
              method developed utilising encryption methods. Because of the
              usage of encryption technology, cryptocurrencies are functional
              both as a medium of exchange and an electronic bookkeeping system.
              You need a wallet to use cryptocurrency. A global decentralised or
              over-the-counter market for the trading of currencies is the
              foreign exchange market. For every currency, exchange rates are
              set by this market. It covers every facet of purchasing, selling,
              and exchanging currency at the going rate.
              <br />
              <br />
              Some people have started to think that trading in forex and
              cryptocurrencies are essentially the same thing over time. Others,
              though, have come to think that there is a significant difference
              between the two.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center"><img src="./images/trade.jpg" className="rounded-2xl w-[600px] h-[450px]"/></div>
        </div>

        <h3 className="font-semibold font-poppins text-xl my-6">
          IS THE MARKET FOR CRYPTO STILL GOOD?
        </h3>
        <p className="text-lg font-poppins text-justify">
          Cryptocurrency investment may be a smart move if you're ready to
          accept that it's a high risk wager with a chance of success but also
          that you run the very real risk of losing all of your money.
          <br />
          <br />
          Prices of cryptocurrencies will plummet in 2022 due to a global
          cryptocurrency price crash. have decreased, including the price of
          Bitcoin. Insofar as it's accurate, Tecmactrade has all the hazards
          related to cryptocurrencies covered. A team of trading professionals
          for both forex and cryptocurrencies has been assembled to research and
          evaluate and stop any type of loss and damage to the market. Trading
          does have dangers, to some extent. Trading with the appropriate
          company removes any worries.
        </p>

        <div className="flex space-x-10 justify-center items-center mt-6">
        
        <div className="w-1/2 flex justify-center items-center"><img src="./images/import.png" className="rounded-xl w-[600px] h-[450px]"/></div>
        <div className="w-1/2">
        <h3 className="font-semibold font-poppins text-xl my-6">
          HOW COME CRYPTOCURRENCIES MATTER?
        </h3>
        
        <p className="text-lg font-poppins text-justify">
          Due to its decentralised nature, blockchain-based cryptocurrencies
          allow for peer-to-peer financial transactions and contract signing
          platforms. The current financial system may be overturned, and finance
          may become more democratic. Over the past few years, the size of the
          cryptocurrency market has drastically risen.
          <br />
          <br />
          Ten years, as a result of fresh innovations and a market value of
          almost $948 billion. Other significant cryptocurrencies besides
          Bitcoin are Ethereum (ETH), Tether (USDT), Dollar Coin (USDC), Coin
          Binance (BNB), USD Binance (BUSD), XRP, Dogecoin (DOGE), Cardano
          (ADA), Polkadot (DOT).
        </p>
        </div>
        </div>

        <h3 className="font-semibold font-poppins text-xl my-6">
          ANALYZING CRYPTO CHART
        </h3>
        <p className="text-lg font-poppins text-justify">
          Most cryptocurrency price charts use candlesticks as their primary
          price indicator. Each candlestick stands for the cost. A green candle
          on the majority of cryptocurrency charts denotes a bullish trend or an
          increase in price, while a red candle signifies a bearish movement or
          a drop in price.
        </p>
        <h3 className="font-semibold font-poppins text-xl my-6">
          A COMPARISON OF CRYPTO AND FOREX TRADING
        </h3>
        <p className="text-lg font-poppins text-justify">
          Unlike cryptocurrencies, you can exit forex trades with ease. In the
          currency market, it is simple to exit a trade. Since 2019, the market
          price on a currency market has risen dramatically over time. You can
          easily withdraw or exit a trade when the price you arrive at during
          trading is closer to the one you see on the screen.
          <br />
          <br />
          However, once a cryptocurrency depreciates, it may be difficult for
          traders to exit the position, especially for the majority of coins,
          excluding Bitcoin and Ethereum.
          <br />
          <br />
          The market for cryptocurrencies is available for trade and investing.
          To invest is to make a currency purchase, with the intention of
          keeping it for a long time in the hope that its value would increase.
        </p>

        <h3 className="font-semibold font-poppins text-xl my-6">
          TRADERS OPTIONS
        </h3>
        <p className="text-lg font-poppins text-justify">
          Some investors are planning to trade for Bitcoin rather than buy it.
          Some investors don't plan to purchase Bitcoin but instead trade for
          the long term, using the tried-andtrue strategy of "buy low, sell
          high."
          <br />
          Cryptocurrencies are limited in supply since their circulation is
          managed by the industry's miners. It's also important to bring out the
          fact that crypto trading is accompanied by high market volatility.
          Currency prices fluctuate often on the market due to a number of
          variables, some of which are beyond of anyone's control. Overall, the
          cryptocurrency sector is growing, with Bitcoin at the forefront.
        </p>

        <h3 className="font-semibold font-poppins text-xl my-6">
          EXCHANGE LANDSCAPE
        </h3>
        <p className="text-lg font-poppins text-justify">
          It's incredibly fun and fascinating to trade currencies. There are
          numerous opportunities built into it. Truthfully, even with this, it
          is highly improbable due to the numerous risk factors you could
          experience.
          <br />
          As a novice, you may experience extreme anxiety when considering forex
          trading while also experiencing extreme joy. Bewildered and unsure of
          whether to be delighted or concerned about whether you will make a
          profit or a loss. One must therefore comprehend the fundamentals. A
          thorough understanding of how the forex market operates.
        </p>
      </div> */}
    </div>
  );
};

export default Trade;
