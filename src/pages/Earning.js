import React from "react";

const Earning = () => {
  return (
    <div className="w-full font-poppins">
      <div className="w-full text-center space-y-10 my-20 max-w-7xl mx-auto ">
        <h1 className="text-6xl font-bold">Services</h1>
        <p className="max-w-[700px] text-center w-full mx-auto">
          Quis incididunt sunt occaecat irure officia magna Lorem ad ut ipsum.
          commodo occaecat nostrud nisi proident sunt consectetur. Reprehenderit
          laborum labore ullamco sint excepteur incididunt pariatur sint.
        </p>
        <div className="rounded-2xl  bg-neutral-800 p-8 flex items-center justify-between">
          <div className="text-left flex justify-center  items-start space-y-3 flex-col">
            <p className="text-purple-900 text-xl">Services</p>
            <h2 className="text-3xl font-bold">
              We Offering Best of
              <br />
              Variety of Security
            </h2>
          </div>
          <div className="w-1/2 space-y-3 flex justify-center items-start flex-col ">
            <p className="max-w-[200px] w-full border-t-2 border-purple-900"></p>
            <p className="text-justify">
              Irure officia quis id magna minim tempor incididunt ea proident
              anim. Reprehenderit sint nulla sint pariatur incididunt ipsum duis
              Lorem magna.
            </p>
            <button className="px-6 py-3 font-bold bg-purple-900 rounded-md">
              Read more
            </button>
          </div>
        </div>
        {/* <h1 className="font-semibold font-poppins  text-5xl">
          INVESTMENT RETURNS
        </h1>
        <p className="font-poppins text-xl tracking-wider text-gray-400 text-justify">
          INVESTMENT RETURNS In a specific period, if you did some activity, the
          profit will be compared with the total amount you invested in it and
          paid daily. Return on Investment is famous because of its all-around
          and simplicity. It can be used as an elementary scope of an
          investment’s profitability. Tecmactrade is enlarging to an upgraded
          level, and the Return on Investment is produced in real-term
          transactions. The mathematics is not too difficult and is
          comparatively easy to explicate for its variety range of applications.
          If the return on the investment is positive, it's worth buying. You
          must choose the opportunities wisely because you have to avoid the
          negative Return on Investment.
          <br />
          <br />
          You must choose the opportunities wisely because you have to avoid the
          negative Return on Investment. You have to study and analyze the
          investment return and have to invest brilliantly. The future price of
          any trade has various packages for you in Tecmactrade to earn a fixed
          daily return from investment. Check all the investment packages of
          Tecmactrade and buy them.
        </p> */}

        <div className="w-full flex-col flex pt-16 justify-center  items-center mb-16">
          <h1 className="font-semibold font-poppins  text-5xl">
            Business Plan
          </h1>
          <div className="max-w-[calc(100%-1rem)] space-x-6 py-8 flex justify-between items-center w-full ">
            {/*Package 1*/}
            <div
              className={"w-full flex flex-col  justify-center items-center"}
            >
              <div className="max-w-[350px] shadow-2xl hover:cursor-pointer ease-in-out delay-150 hover:scale-95  hover:translate-y-1  shadow-purple-700 w-full transition duration-500 transform pb-5 bg-gradient-to-tr  from-purple-600   text-white border-2 flex-col rounded-2xl">
                <h1 className="my-3 text-center pb-4 border-b-2 text-3xl font-bold ">
                  Package 1
                </h1>
                {/* <h3 className={"my-3 text-center pb-4 text-3xl font-bo3d "}>
                  $25 - $4999
                </h3> */}
                <div className="w-full flex space-y-3 flex-col  items-center px-6">
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Minimum Deposit</p>
                    <p className="">100$ - 3999$</p>
                  </div>

                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Binary</p>
                    <p className="">10%</p>
                  </div>
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Package Duration</p>
                    <p className="">200days</p>
                  </div>
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>ROI</p>
                    <p className="">1.2%</p>
                  </div>
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Principle Returns</p>
                    <p className="">100%</p>
                  </div>
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Capping Limit</p>
                    <p className="">$600</p>
                  </div>
                  <div className="flex flex-col w-full text-sm  justify-center items-center">
                    <p className="font-bold">Total Returns</p>
                    <p className="">
                      240% +100% Principle amount back
                      <br />
                    </p>
                  </div>

                  <div className="border-t-2 pt-2">
                    <p>Referral bonus</p>

                    <div className="flex w-full text-sm  justify-between items-center">
                      <p>level 1</p>
                      <p className="">5%</p>
                    </div>
                    <div className="flex w-full text-sm  justify-between items-center">
                      <p>level 2</p>
                      <p className="">3%</p>
                    </div>
                    <div className="flex w-full text-sm  justify-between items-center">
                      <p>level 3</p>
                      <p className="">1.5%</p>
                    </div>
                    <div className="flex flex-col w-full text-sm  justify-centeritems-center">
                      <p className="font-bold">level 4 -7</p>
                      <p className="">
                        5% ozo token to be created 2 to ozo's token wallet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Package 2*/}

            <div
              className={"w-full flex flex-col  justify-center items-center"}
            >
              <div className="max-w-[350px] shadow-2xl hover:cursor-pointer ease-in-out delay-150 hover:scale-95  hover:translate-y-1  shadow-purple-700 w-full transition duration-500 transform pb-5 bg-gradient-to-tr  from-purple-600   text-white border-2 flex-col rounded-2xl">
                <h1 className="my-3 text-center pb-4 border-b-2 text-3xl font-bold ">
                  Package 2
                </h1>
                {/* <h3 className={"my-3 text-center pb-4 text-3xl font-bo3d "}>
                  $25 - $4999
                </h3> */}
                <div className="w-full flex space-y-3 flex-col  items-center px-6">
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Minimum Deposit</p>
                    <p className="">4000$-14999$</p>
                  </div>

                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Binary</p>
                    <p className="">10%</p>
                  </div>
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Package Duration</p>
                    <p className="">180days</p>
                  </div>
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>ROI</p>
                    <p className="">1.4%</p>
                  </div>
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Principle Returns</p>
                    <p className="">100%</p>
                  </div>
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Capping Limit</p>
                    <p className=""> 2100$</p>
                  </div>
                  <div className="flex flex-col w-full text-sm  justify-center items-center">
                    <p className="font-bold">Total Returns</p>
                    <p className="">252% +100% Principle amount back</p>
                  </div>

                  <div className="border-t-2 pt-2">
                    <p>Referral bonus</p>

                    <div className="flex w-full text-sm  justify-between items-center">
                      <p>level 1</p>
                      <p className="">1- 6%</p>
                    </div>
                    <div className="flex w-full text-sm  justify-between items-center">
                      <p>level 2</p>
                      <p className="">2- 4%</p>
                    </div>
                    <div className="flex w-full text-sm  justify-between items-center">
                      <p>level 3</p>
                      <p className="">3- 2%</p>
                    </div>
                    <div className="flex flex-col w-full text-sm  justify-centeritems-center">
                      <p className="font-bold">level 4 -7</p>
                      <p className="">
                        7- 5% ozo token to be created 2 to ozo's token wallet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Package 3*/}

            <div
              className={"w-full flex flex-col  justify-center items-center"}
            >
              <div className="max-w-[350px] shadow-2xl hover:cursor-pointer ease-in-out delay-150 hover:scale-95  hover:translate-y-1  shadow-purple-700 w-full transition duration-500 transform pb-5 bg-gradient-to-tr  from-purple-600   text-white border-2 flex-col rounded-2xl">
                <h1 className="my-3 text-center pb-4 border-b-2 text-3xl font-bold ">
                  Package 3
                </h1>
                {/* <h3 className={"my-3 text-center pb-4 text-3xl font-bo3d "}>
                  $25 - $4999
                </h3> */}
                <div className="w-full flex space-y-3 flex-col  items-center px-6">
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Minimum Deposit</p>
                    <p className="">15000$-34999$</p>
                  </div>

                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Binary</p>
                    <p className="">10%</p>
                  </div>
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Package Duration</p>
                    <p className="">160days</p>
                  </div>
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>ROI</p>
                    <p className="">1.6%</p>
                  </div>
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Principle Returns</p>
                    <p className="">100%</p>
                  </div>
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Capping Limit</p>
                    <p className="">$6000</p>
                  </div>
                  <div className="flex flex-col w-full text-sm  justify-center items-center">
                    <p className="font-bold">Total Returns</p>
                    <p className="">
                      256% +100% Principle amount back
                      <br />
                    </p>
                  </div>

                  <div className="border-t-2 pt-2">
                    <p>Referral bonus</p>

                    <div className="flex w-full text-sm  justify-between items-center">
                      <p>level 1</p>
                      <p className="">1- 7%</p>
                    </div>
                    <div className="flex w-full text-sm  justify-between items-center">
                      <p>level 2</p>
                      <p className="">2- 5%</p>
                    </div>
                    <div className="flex w-full text-sm  justify-between items-center">
                      <p>level 3</p>
                      <p className="">3- 3%</p>
                    </div>
                    <div className="flex flex-col w-full text-sm  justify-centeritems-center">
                      <p className="font-bold">level 4 -7</p>
                      <p className="">
                        7- 5% ozo token to be created 2 to ozo's token wallet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*Package 4*/}

            <div
              className={"w-full flex flex-col  justify-center items-center"}
            >
              <div className="max-w-[350px] shadow-2xl hover:cursor-pointer ease-in-out delay-150 hover:scale-95  hover:translate-y-1  shadow-purple-700 w-full transition duration-500 transform pb-5 bg-gradient-to-tr  from-purple-600   text-white border-2 flex-col rounded-2xl">
                <h1 className="my-3 text-center pb-4 border-b-2 text-3xl font-bold ">
                  Package 4
                </h1>
                {/* <h3 className={"my-3 text-center pb-4 text-3xl font-bo3d "}>
                  $25 - $4999
                </h3> */}
                <div className="w-full flex space-y-3 flex-col  items-center px-6">
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Minimum Deposit</p>
                    <p className="">35000$-100000$</p>
                  </div>

                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Binary</p>
                    <p className="">10%</p>
                  </div>
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Package Duration</p>
                    <p className="">140days</p>
                  </div>
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>ROI</p>
                    <p className="">1.8%</p>
                  </div>
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Principle Returns</p>
                    <p className="">100%</p>
                  </div>
                  <div className="flex w-full text-sm  justify-between items-center">
                    <p>Capping Limit</p>
                    <p className="">$15000</p>
                  </div>
                  <div className="flex flex-col w-full text-sm  justify-center items-center">
                    <p className="font-bold">Total Returns</p>
                    <p className="">
                      252% +100% Principle amount back
                      <br />
                    </p>
                  </div>

                  <div className="border-t-2 pt-2">
                    <p>Referral bonus</p>

                    <div className="flex w-full text-sm  justify-between items-center">
                      <p>level 1</p>
                      <p className="">1- 8%</p>
                    </div>
                    <div className="flex w-full text-sm  justify-between items-center">
                      <p>level 2</p>
                      <p className="">2- 6%</p>
                    </div>
                    <div className="flex w-full text-sm  justify-between items-center">
                      <p>level 3</p>
                      <p className="">3- 4%</p>
                    </div>
                    <div className="flex flex-col w-full text-sm  justify-centeritems-center">
                      <p className="font-bold">level 4-7</p>
                      <p className="">
                        7-5% ozo token to be created 2 to ozo's token wallet
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-24 relative">
        <img
          src="./images/designbg2.jpg"
          className="w-full max-h-[60vh] opacity-90"
        />

        <div className="flex absolute max-w-5xl w-full top-44 left-64 justify-between items-center">
          <div className="">
            <h2 className="text-3xl font-bold">
              Contact us for deeply
              <br />
              information and services
              <br />
              customize.
            </h2>
          </div>

          <div>
            <button className="px-6 py-3 text-2xl font-bold bg-purple-900 rounded-md">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="w-full flex min-h-[90vh] px-10 space-x-6 justify-between items-center">
        <div className="w-1/2 p-8 grid grid-cols-2 gap-4">
          <div className="max-w-[350px] w-full p-4 hover:scale-105 transition-all transform delay-150 duration-200 text-center space-x-2 hover:border-2 rounded-xl flex flex-col justify-center items-center   ">
            <img src="./images/icons/secure.png" className="w-12" />
            <h3 className="text-xl">Flexible Services</h3>
            <p className="text-sm  text-gray-400">
              Anim enim adipisicing nulla eiusmod tempor laboris officia amet
              officia duis commodo.
            </p>
          </div>

          <div className="max-w-[350px] w-full p-4 hover:scale-105 transition-all transform delay-150 duration-200 text-center space-x-2 hover:border-2 rounded-xl flex flex-col justify-center items-center   ">
            <img src="./images/icons/secure.png" className="w-12" />
            <h3 className="text-xl">24/7 Maintainance</h3>
            <p className="text-sm  text-gray-400">
              Anim enim adipisicing nulla eiusmod tempor laboris officia amet
              officia duis commodo.
            </p>
          </div>
          <div className="max-w-[350px] w-full p-4 hover:scale-105 transition-all transform delay-150 duration-200 text-center space-x-2 hover:border-2 rounded-xl flex flex-col justify-center items-center   ">
            <img src="./images/icons/secure.png" className="w-12" />
            <h3 className="text-xl">Expertize Services</h3>
            <p className="text-sm  text-gray-400">
              Anim enim adipisicing nulla eiusmod tempor laboris officia amet
              officia duis commodo.
            </p>
          </div>
          <div className="max-w-[350px] w-full p-4 hover:scale-105 transition-all transform delay-150 duration-200 text-center space-x-2 hover:border-2 rounded-xl flex flex-col justify-center items-center   ">
            <img src="./images/icons/secure.png" className="w-12" />
            <h3 className="text-xl">World highrated </h3>
            <p className="text-sm  text-gray-400">
              Anim enim adipisicing nulla eiusmod tempor laboris officia amet
              officia duis commodo.
            </p>
          </div>
        </div>
        <div className="space-y-3 w-1/2 px-4">
          <h2 className="text-xl text-purple-900">Why choose us </h2>
          <h1 className="text-3xl font-bold ">
            Enjoy Our Vecure Special Featured
          </h1>
          <p className="text-sm text-gray-400"> 
            Elit fugiat quis nostrud duis eu enim. Qui excepteur dolor cillum
            esse deserunt nisi cillum minim cillum. Nisi incididunt ipsum do
            velit sit voluptate cillum aliqua. Laboris aliquip veniam commodo
            aliquip qui nostrud. 
          </p>
          <ul className="text-base list-disc">
            <li> Occaecat sint ullamco irurelaborum magna</li>
            <li> nostrud dolor quis nulla </li>
            <li> reprehenderit deserunt duis deserunt ipsum.</li>
            <li> reprehenderit deserunt duis deserunt ipsum.</li>

          </ul>
          <button className="px-6 py-3 text-xl font-bold bg-purple-900 rounded-md">
              Contact Us
            </button>
        </div>
      </div>

      {/* <div className="border-t-2 mt-24 pt-24 w-full">
        <div className="w-full text-center space-y-10 my-20 max-w-7xl mx-auto ">
          <h1 className="font-semibold font-poppins  text-5xl">
            AFFILIATE NETWORK
          </h1>
          <p className="font-poppins text-xl tracking-wider text-gray-400 text-justify">
            A referral bonus gives an incentive for personnel to recruit
            certified applicants for his or her organisation. Attracting
            expertise may be difficult for companies so personnel may be a
            superb aid for locating greater candidates due to the fact they
            generally tend to have social networks made of people of comparable
            backgrounds.
            <br />
            <br />
            Each user who signs up with Tecmactrade receives two personalised
            referral links that give them access to the dashboard. Share the
            link to your referral give your network access to your individual
            referral connections. Watch out for your recommendations keep track
            of your referral system to manage them effectively. Receive benefits
            and rewards if your referrals bring business to Tecmactrade, you'll
            get upto 15% of their deposits. Meet the requirements, establish new
            relationships.
          </p>

          <div className="flex space-x-10 justify-center items-center py-16">
            <div className="w-1/2">
              <h3 className="font-semibold font-poppins text-xl my-6">
                REFERRAL BONUS
              </h3>
              <p className="text-lg font-poppins text-justify">
                Referral revenue is a small portion of the overall reward shared
                with your customer. For each qualified connection you send to
                Tecmactrade, you'll receive a bonus on their initial investment
                benefits from all transactions with investors who were
                interested. A unique affiliate link that you can share with
                anyone is available for you in your dashboard.
                <br />
                <br />
                You receive a commission on their every transactions after they
                sign up for Tecmactrade, so this commission is valid for all
                sales periods. It is not as constrained as binary in this
                instance, it consists of two legs in binary. You may select as
                many persons as you want.
                <br />
                <br />
                <div className="space-y-4 text-base text-justify">
                  <li className="">
                    On MICRO level you receive a commission of 9% within an
                    amount of starting from $25 - $4999 with a whopping 25%
                    principle returns.
                  </li>
                  <li>
                    On NANO level You receive a commission of 12% within an
                    amount of starting from $5000 - $39,999 with a whopping 35%
                    principle returns.
                  </li>
                  <li>
                    On PICO level You receive a commission of 15% within an
                    amount of starting from $40,000 - $100,000 with a whopping
                    50% principle returns.
                  </li>
                </div>
              </p>
            </div>

            <div className="w-1/2 mt-8 flex justify-center items-center">
              <img
                src="./images/image5earning.png"
                className="rounded-2xl w-[600px] h-[600px]"
              />
            </div>
          </div>

          <div className="flex space-x-10 justify-center items-center mt-6">
            <div className="w-1/2 mt-8 flex justify-center items-center">
              <img
                src="./images/image1earning.jpg"
                className="rounded-2xl w-full "
              />
            </div>
            <div className="w-1/2">
              <h3 className="font-semibold font-poppins text-xl my-6">
                BINARY BONUS
              </h3>
              <p className="text-lg font-poppins text-justify">
                BI, which means for two, suggests that your account will have
                two teams: a left team and a right team. These teams are formed
                by combining your Left and Right. Binary profits can help you
                achieve steady income, mutual benefit, and continuous revenue.
                The purpose of binary income is to provide users with consistent
                income from affiliates and user groups in their network tree.
                <br />
                <br />
                Binary compensation consists of payments that are mutually
                exclusive. Binary fundamentals the structure of a compensation
                plan, when it comes to binary compensation structures, there are
                two possibilities for establishing a downline. Distributors can
                only place new recruits on the left or right side (or leg) of
                their downline. The most notable feature of a binary plan is
                that each distributor can only have up to two recruits on the
                first level beneath them. Any income of 10% earned above the
                capping limit shall be forfeited and users shall not be entitled
                to that part of binary earnings of the current day.
                <br />
                <br />
                Example - Assume a user on the right side of an active account
                contributes $43,000 and another on the left side invests $16,000
                <br />
                <br />
                Let's compute the binary.
                <br />
                <br />
                The maximum amount that can be matched is $16,000. So binary
                will be 10% of $16,000 = $1,600, and the remaining balance of
                $27,000 will be carried forward and matched in the future
                $27,000.
                <div className="space-y-4 text-base text-justify">
                  <li className="">
                    On MICRO level you receive a commission of 9% within an
                    amount of starting from $25 - $4999 with a whopping 25%
                    principle returns.
                  </li>
                  <li>
                    On NANO level You receive a commission of 12% within an
                    amount of starting from $5000 - $39,999 with a whopping 35%
                    principle returns.
                  </li>
                  <li>
                    On PICO level You receive a commission of 15% within an
                    amount of starting from $40,000 - $100,000 with a whopping
                    50% principle returns.
                  </li>
                </div>
              </p>
            </div>
          </div>

          <h3 className="font-semibold font-poppins text-xl text-left my-6">
            MY CAREER
          </h3>
          <p className="font-poppins text-xl tracking-wider text-gray-400 text-justify">
            The career growth reward system is a technique that compensates you
            based on the level of trust you place in us, which is measured by
            the quantity of money in your account at Tecmactrade. It's a
            programme that rewards our users and pushes them to go upwards in
            their careers to earn EVEN GREATER REWARDS UP TO A HUNDRED THOUSAND
            DOLLARS. Yes, you read that correctly. You can receive a reward of
            $100,000 depending on the various slabs or stages of our
            professional growth ladder. But don't worry if you haven't yet
            reached the highest stage, you could always just begin at the bottom
            and work your way up.
            <br />
            <br />
            As Level 1, we offer awards starting at $300. So, no matter where
            you stand on the career ladder, one thing is certain: you will
            receive a fantastic gift as a token of thanks from Tecmactrade.
            Consider your account to be a plant, and the better you sow the seed
            with water and adequate nutrients, the greater the result, and this
            is where you can strike gold.
          </p>

          <h3 className="font-semibold font-poppins text-xl text-left my-6">
            EXTRA BONUS ON REFERRALS
          </h3>
          <p className="font-poppins text-xl tracking-wider text-gray-400 text-justify">
            Tecmactrade incentives for referrals can be in the form of extra
            payments, privileges, or opportunities. No matter what referral
            reward or incentive you end up choosing, always provide a bonus
            worth $25 with good customer experience. If 10 active sign-up are
            happy, then word of mouth is bound to happen, with incentives being
            more like an added referral bonus.
            <br />
            <br />
            Some programs include various levels of referral rewards and
            incentives, usually $150 bonus based on the 25 direct active
            sign-up, joining with actual referrals, it does create an
            opportunity for customers to become dedicated members of Tecmactrade
            referral marketing program.
            <br />
            <br />
            Now that you know the value a referral program holds, it’s time to
            move forward and create your own wealth, what your target customer
            looks like (and explain that to referrers), choose an incentive of
            $300 bonus, and make it easy for 50 direct active sign ups , and
            happy customers to recommend Tecmactrade.
            <br />
            <br />
            A referral program is a system whereby a brand identifies and
            reaches out to the people who like or love the brand, and asks them
            to tell friends and family about them. The program usually provides
            an easy $600 and safe implies sending a message to 100 active
            sign-ups in one click (e.g., sending emails or texts directly from a
            mobile phone), correctly tracking the success of the referral, and
            rewarding each validated transaction.
            <br />
            <br />
            Tecmactrade rewards for referrals can be shared with employees,
            customers or partners. Get a $1200 whooping bonus on the first 150
            direct active sign-ups. The better you sow the seed with water and
            proper nutrition the better you get the result, and that’s where you
            can hit the jackpot, customers will usually receive some kind of
            referral bonus or benefit when they refer a friend. Tecmactrade
            automates the payout of these referral rewards.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Earning;
