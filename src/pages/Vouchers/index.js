import React, { useState } from "react";

const Vouchers = () => {
  const [changeVoucherItems, setVoucherItems] = useState("Generate");
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="flex flex-col items-center ">
      <div className="w-full max-w-7xl   space-x-4  justify-center flex  ">
        <div className="min-w-[250px] px-6 py-3 hover:scale-105 transition duration-500 transform flex justify-center  text-white font-semibold text-3xl items-center shadow-md rounded-lg bg-gradient-to-r from-sky to-indigo-500 ">
          <button
            className="w-full h-full "
            onClick={() => setVoucherItems("Generate")}
          >
            Generate Voucher
          </button>
        </div>
        <div className="min-w-[250px] px-6 py-3 hover:scale-105 transition duration-500 transform flex justify-center text-white font-semibold text-3xl items-center shadow-md rounded-lg bg-gradient-to-r from-voilet to-fyuchia ">
          <button
            className="w-full h-full "
            onClick={() => setVoucherItems("List")}
          >
            Voucher List
          </button>
        </div>
      </div>

      <div className="w-full my-16 flex justify-center items-center  ">
        {changeVoucherItems === "Generate" && (
          <div className="rounded-2xl max-w-3xl w-full bg-gray-900 text-white py-6 px-10 shadow-md ">
            <h2 className="font-semibold text-3xl mb-6 border-b-2 text-left pb-4">
              Generate Voucher
            </h2>
            <div className="flex flex-col items-center space-y-4">
              <select
                value={value}
                onChange={handleChange}
                className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6"
              >
                <option value="Tec">TEC Wallet</option>

                <option value="Mac">MAC Wallet</option>

                <option value="Trade">Trade</option>
              </select>
              <input
                className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6"
                placeholder="Amount"
              />

              <button className="rounded-xl py-3 w-full px-12 text-white font-bold text-xl bg-yellow-600">
                Continue
              </button>
            </div>
          </div>
        )}
        {changeVoucherItems == "List" && (
          <div className="font-bold text-2xl">List Is Empty</div>
        )}
      </div>
    </div>
  );
};

export default Vouchers;
