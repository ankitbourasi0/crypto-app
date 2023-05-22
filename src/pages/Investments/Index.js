import React, { useState } from "react";

const Investments = () => {
  const [checkbox1, setCheckbox1] = useState(false);

  const [checkbox2, setCheckbox2] = useState(false);
  return (
    <div className="w-full ">
      <div className="max-w-7xl mx-auto w-full pt-6 rounded-2xl bg-gray-900 text-white">
        <h2 className="text-left pl-6 font-semibold text-2xl mb-4 pb-4 border-b-2">
          Offline Activation
        </h2>
        <div className="flex flex-col  items-center w-full max-w-7xl">
          {/* Perfect Money  */}
          <div className="border-2 rounded-2xl max-w-[450px] w-full mt-10 mb-6 px-6 py-4 flex justify-between items-center">
            <img src="./images/perfectmoney.png" className="w-32 h-32" />
            <div className="text-right">
              <p className="font-semibold text-lg">Account Id</p>
              <h2 className="font-semibold text-3xl">U37175476</h2>
            </div>
          </div>

          <div className="w-full flex flex-col max-w-6xl mt-10 justify-center items-center">
            <div className="flex mb-4 items-center space-x-2 w-full pb-4 border-b-2">
              <input
                type="checkbox"
                className="rounded-sm p-2"
                onChange={() => setCheckbox1(!checkbox1)}
              />
              <p className="font-semibold text-xl">
                Click here for voucher investment
              </p>
            </div>

            <div className="flex mb-4 items-center space-x-2 w-full pb-4">
              <input
                type="checkbox"
                className="rounded-sm p-2"
                onChange={() => setCheckbox2(!checkbox2)}
              />
              <p className="font-semibold text-xl">
                Click here for downline activation
              </p>
            </div>

            {checkbox2 ? (
              checkbox2 && (
                <div className="flex  w-full  pr-6 space-x-10">
                  <div className="text-left w-1/2">
                    <p className="pl-2 font-semibold text-lg tracking-wide">
                      Downline Id
                    </p>
                    <input
                      className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6"
                      placeholder="TMT-FUN"
                    />
                  </div>

                  <div className="text-left w-1/2">
                    <p className="pl-2 font-semibold text-lg tracking-wide">
                      Downline Name
                    </p>
                    <input
                      className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6"
                      placeholder="Downline Name"
                    />
                  </div>
                </div>
              )
            ) : (
              <div> </div>
            )}

            <div className="flex w-full pr-6 space-x-10 my-4">
              <input
                className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6"
                placeholder="Enter Package Amount"
              />
              <input
                className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6"
                placeholder="Package Name"
              />
            </div>

            <div className="font-semibold text-xl text-left pr-6  w-full space-y-4 mb-10">
                  <p className="pl-2 text-yellow-600">
              Perfect Money Transaction Id

                  </p>
              <input
                className="border-2 border-gray-200 py-4 w-full  bg-gray-700 rounded-2xl px-6"
                placeholder="Enter Transaction Id"
              />
              <button className="rounded-xl py-3 w-full px-12 text-white font-bold text-xl bg-yellow-600">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investments;
