import React from "react";

const Legal = () => {
  return (
    <div className="w-full flex justify-center min-h-screen items-center ">
      <div className=" p-16 max-w-6xl justify-center items-center space-y-5  flex-col w-full flex">
        <img src="./images/usa.png" className="w-[450px]" />
        <h2 className="font-poppins text-5xl">USA</h2>
       <div className="flex w-full  justify-center  items-center space-x-3 ">
       <button className="rounded-full    border-2 font-poppins font-semibold text-xl text-blac bg-violet-700 py-5 px-16 hover:bg-white hover:text-violet-700 hover:border-2 hover:border-violet-700">
          Check
        </button>
        <button className="rounded-full  font-poppins font-semibold text-xl text-blac bg-violet-700 py-5 px-12 hover:bg-white hover:text-violet-700 hover:border-2 hover:border-violet-700">
          Download
        </button>
       </div>
      </div>
    </div>
  );
};

export default Legal;
