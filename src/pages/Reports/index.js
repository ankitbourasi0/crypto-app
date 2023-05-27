import React from "react";

const Reports = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      {/* Center Div  */}
      <div className="max-w-6xl w-full  h-full p-16 min-h-[80vh]  grid grid-cols-2 gap-8 ">
        {/* ROI Report          */}
        <div className="min-w-[250px]  hover:scale-105  transition duration-500 transform  flex justify-center text-white font-semibold text-4xl items-center shadow-md rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500  ">
          <button className="w-full h-full uppercase"> ROI Reports</button>
        </div>

        {/* RI Report  */}
        <div className="min-w-[250px]  hover:scale-105 transition duration-500 transform flex justify-center  text-white font-semibold text-4xl items-center shadow-md rounded-lg bg-gradient-to-r from-sky to-indigo-500 ">
          <button className="w-full h-full uppercase">RI Report</button>
        </div>

        {/* BI Report */}
        <div className="min-w-[250px]   hover:scale-105 transition duration-500 transform flex justify-center text-white font-semibold text-4xl items-center shadow-md rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
          <button className="w-full h-full uppercase">BI Report</button>
        </div>

        {/* Career Report  */}
        <div className="min-w-[250px]  hover:scale-105 transition duration-500 transform flex justify-center  text-white font-semibold text-4xl items-center shadow-md rounded-lg  bg-gradient-to-r from-purple-500 to-pink-500 ">
          <button className="w-full h-full uppercase">Career Report</button>
        </div>
      </div>

      
     
    </div>
  );
};

export default Reports;
