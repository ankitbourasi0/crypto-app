import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full bg-black min-h-[110vh] font-poppins">
      <div className="w-full flex flex-col justify-center items-center  min-h-[20vh] bg-gradient-to-tr from-fuchsia-950 to-black">
        <div className="rounded-full  z-0 flex justify-between items-center bg-neutral-900 py-2 w-full max-w-7xl px-6 mx-auto">
         <div className="flex ">
         <img src="./images/logo.png" className="w-10"/>
<h1 className="text-2xl z-10 font-medium text-white">ONE OZO</h1>
         </div>

<div className="">
    <ul className="flex  text-base items-center justify-around">
        <li className="  bg-white rounded-full text-gray-900 px-2 py-1 ">
            Overview
        </li>
        <li className="  rounded-full  px-2 py-1 ">
            Investment
        </li>
        <li className="  rounded-full  px-2 py-1 ">
            Genealogy
        </li>
        <li className="  rounded-full  px-2 py-1 ">
            Overview
        </li>
        <li className="  rounded-full  px-2 py-1 ">
            Transfers
        </li>
        <li className="  rounded-full  px-2 py-1 ">
            Withdrawals
        </li>
        <li className="  rounded-full  px-2 py-1 ">
            Tickets
        </li>
    </ul>
</div>
<div className="flex space-x-2">
<div className="rounded-full flex justify-center items-center w-10 bg-black">
<img src="./images/dashboard/search.png" className=" p-[10px]"/>

</div>
<div className="rounded-full flex justify-center items-center w-10 bg-black">
<img src="./images/dashboard/notification.png" className=" p-[10px]"/>

</div>

<div className="rounded-full flex justify-center items-center w-10 bg-black">
<img src="./images/dashboard/image.png" className=" p-[10px]"/>

</div>
</div>

        </div>
      </div>
      <div className="flex w-full  py-4 px-12">
        {/* left  */}
        <div className="w-full px-4">
          <div className="flex w-full justify-around mb-3 ">
            {/* 1 */}
            <div className="rounded-xl max-w-[350px] max-h-[220px] w-full bg-neutral-900 space-y-10 p-4">
              <div className="w-full flex items-center space-x-4">
                <div className="p-1 border-4 border-fuchsia-600 -400 w-[70px] flex justify-center items-center rounded-full">
                  <img
                    src="./images/dashboard/investment.png"
                    className="p-2"
                  />
                </div>
                <h3 className="font-medium text-xl">Total investment</h3>
              </div>
              <div className="pl-2">
                <h2 className="text-2xl font-medium mb-2">$981.567.000</h2>
                <p className="text-gray-500">
                  90-Day <span className="text-[#29CD0E]">+5.599</span>
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="rounded-xl max-w-[350px] max-h-[220px]  w-full bg-neutral-900 space-y-10 p-4">
              <div className="w-full flex items-center space-x-4">
                <div className="p-1 border-4 flex justify-center items-center  border-fuchsia-600 -400 w-[70px] rounded-full">
                  <img
                    src="./images/dashboard/growth.png"
                    className="p-[10px]"
                  />
                </div>
                <h3 className="font-medium text-xl">Total returns</h3>
              </div>
              <div className="pl-2">
                <h2 className="text-2xl font-medium mb-2">$129.897.000</h2>
                <p className="text-gray-500">
                  Target: <span className="text-gray-500">$250.800.000</span>
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="rounded-xl max-w-[350px] max-h-[220px] w-full bg-neutral-900 space-y-10 p-4">
              <div className="w-full flex items-center space-x-4">
                <div className="p-1 border-4 flex justify-center items-center  border-fuchsia-600 -400 w-[70px] rounded-full">
                  <img
                    src="./images/dashboard/withdrawal.png"
                    className="p-[10px]"
                  />
                </div>
                <h3 className="font-medium text-xl">Total withdrawal</h3>
              </div>
              <div className="pl-2">
                <h2 className="text-2xl font-medium mb-2">-$450.000</h2>
                <p className="text-gray-500">
                  Remaining <span className="text-gray-500">999.980</span>
                </p>
              </div>
            </div>
          </div>

          {/* 2nd row  */}
          <div className="w-full flex justify-around ">
            {/* 1 */}
            <div className="rounded-xl max-w-[260px] max-h-[220px] w-full bg-neutral-900 space-y-4 p-4">
              <div className="w-full flex items-center justify-between ">
                <h3 className="font-medium text-lg">Deposit wallet</h3>

                <div className="p-1 -400 w-[60px] flex justify-center items-center rounded-full">
                  <img
                    src="./images/dashboard/investment2.png"
                    className="p-2"
                  />
                </div>
              </div>
              <div className="">
                <h2 className="text-xl font-medium mb-2">$45.215.000</h2>
                <button className=" bg-gradient-to-b from-fuchsia-300 to-purple-800 rounded-full px-4 py-1 text-sm ">
                  Recharge
                </button>
              </div>
            </div>
            {/* 2 */}
            <div className="rounded-xl max-w-[260px] max-h-[220px] w-full bg-neutral-900 space-y-4 p-4">
              <div className="w-full flex items-center justify-between ">
                <h3 className="font-medium text-lg">ROI wallet</h3>

                <div className="p-1 -400 w-[60px] flex justify-center items-center rounded-full">
                  <img
                    src="./images/dashboard/investment2.png"
                    className="p-2"
                  />
                </div>
              </div>
              <div className="">
                <h2 className="text-xl font-medium mb-2">$50.215.000</h2>
                <button className=" bg-gradient-to-b from-fuchsia-300 to-purple-800 rounded-full px-4 py-1 text-sm ">
                  Re-invest
                </button>
              </div>
            </div>
            {/* 3 */}
            <div className="rounded-xl max-w-[260px] max-h-[220px] w-full bg-neutral-900 space-y-4 p-4">
              <div className="w-full flex items-center justify-between ">
                <h3 className="font-medium text-lg">R&B wallet</h3>

                <div className="p-1 -400 w-[60px] flex justify-center items-center rounded-full">
                  <img
                    src="./images/dashboard/investment2.png"
                    className="p-2"
                  />
                </div>
              </div>
              <div className="">
                <h2 className="text-xl font-medium mb-2">$60.215.000</h2>
                <button className=" bg-gradient-to-b from-fuchsia-300 to-purple-800 rounded-full px-4 py-1 text-sm ">
                  Withdraw
                </button>
              </div>
            </div>
            {/* 4 */}

            <div className="rounded-xl max-w-[260px] text-gray-900 max-h-[220px] w-full bg-gradient-to-b from-fuchsia-300 to-purple-800  space-y-4 p-4">
              <div className="w-full flex items-center justify-between ">
                <h3 className="font-medium text-lg">OZO Token</h3>

                <div className="p-1 -400 w-[60px] flex justify-center items-center rounded-full">
                  <img
                    src="./images/dashboard/investment2.png"
                    className="p-2 text-gray-900"
                  />
                </div>
              </div>
              <div className="">
                <h2 className="text-xl font-medium mb-2">$70.215.000</h2>
                <button className="bg-black rounded-full px-4 py-1 text-sm text-white ">
                  Reinvest
                </button>
              </div>
            </div>
          </div>

          {/* Refer and earn  */}
          <h1 className="text-xl pl-2 mb-2 mt-8 ">Refer and earn</h1>
          <div className="w-full flex px-2  justify-between">
            {/* left  */}
            <div className="rounded-xl p-4 max-w-[480px] max-h-[250px]  w-full bg-gradient-to-b from-fuchsia-300 to-purple-800  text-gray-900">
              <h1 className="text-xl pl-4 mb-2">Referral link</h1>
              <div className="w-full pl-4 mb-4 relative flex">
                <div className="bg-neutral-900 text-white rounded-lg px-4 py-1">
                  Left link
                </div>
                <input className="border-t-2  absolute left-20 top-0 py-[2px] border-r-2 border-b-2 bg-transparent px-4 border-neutral-900 rounded-t-lg  rounded-r-lg  rounded-b-lg" />
              </div>
              <div className="w-full pl-4 relative flex">
                <div className="bg-neutral-900 text-white rounded-lg px-4 py-1">
                  Right link
                </div>
                <input className="border-t-2  absolute left-20 top-0 py-[2px] border-r-2 border-b-2 bg-transparent px-4 border-neutral-900 rounded-t-lg  rounded-r-lg  rounded-b-lg" />
              </div>
            </div>
            {/* right  */}
            <div className="bg-neutral-900 p-6 rounded-3xl">
          <h1 className="text-xl pl-2 mb-3">Quick Actions</h1>
<div className="flex space-x-3 mb-2">
    <button className="border-2 p-4 rounded-xl flex  items-center  border-neutral-600"><img src="./images/dashboard/investment2.png" className="w-8 mr-2"/> <p className="mr-4">Deposit</p> <img src="./images/dashboard/next.png" className="w-6 h-6 mr-2"/></button>
    <button className="border-2 p-4 rounded-xl flex   items-center border-neutral-600"><img src="./images/dashboard/investment2.png" className="w-6 mr-2"/> <p className="mr-4">Package</p> <img src="./images/dashboard/next.png" className="w-6 h-6 mr-2"/></button>

</div>
<div className="grid grid-cols-4 gap-2 text-sm ">
    <button className="border-2 px-[4px] py-2 rounded-xl flex flex-col justify-center items-center  border-neutral-600"><img src="./images/dashboard/investment2.png" className="w-8 "/>Withdraw</button>
    <button className="border-2 px-[4px] py-2 rounded-xl flex flex-col justify-center items-center  border-neutral-600"><img src="./images/dashboard/investment2.png" className="w-8 "/>Transfer</button>
    <button className="border-2 px-[4px] py-2 rounded-xl flex flex-col justify-center items-center  border-neutral-600"><img src="./images/dashboard/investment2.png" className="w-8 "/> ROI wallet</button>
    <button className="border-2 px-[4px] py-2 rounded-xl flex flex-col justify-center items-center  border-neutral-600"><img src="./images/dashboard/investment2.png" className="w-8 "/>Wallet</button>

    <button className="border-2 px-[4px] py-2 rounded-xl flex flex-col justify-center items-center  border-neutral-600"><img src="./images/dashboard/investment2.png" className="w-8 "/>Ticket</button>
    <button className="border-2 px-[4px] py-2 rounded-xl flex flex-col justify-center items-center  border-neutral-600"><img src="./images/dashboard/investment2.png" className="w-8 "/>Binary tree</button>
    <button className="border-2 px-[4px] py-2 rounded-xl flex flex-col justify-center items-center  border-neutral-600"><img src="./images/dashboard/investment2.png" className="w-8 "/>Invite</button>
    <button className="border-2 px-[4px] py-2 rounded-xl flex flex-col justify-center items-center  border-neutral-600"><img src="./images/dashboard/investment2.png" className="w-8 "/>Support</button>

</div>
            </div>
          </div>
        </div>

        {/* right  */}
        <div className="px-6 py-8 max-w-[330px] w-full bg-neutral-900 rounded-xl ">
          <h2 className="font-medium text-xl">
            Total earning
            <br />
            through one ozo
          </h2>
          <div className="bg-gray-800 border-2 text-center rounded-xl my-6 max-w-[200px] w-full mx-auto py-4 border-zinc-400  ">
            <p>Total Earning</p>
            <p className="text-xl ">$989.450</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
