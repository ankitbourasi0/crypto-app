import React from "react";

const Profile = () => {
  return (
    <div className= "flex  justify-between  px-10 mx-auto">

      


      <div className="space-y-4 w-full ">
     {/* Profile Card */}
     <div className="flex flex-col justify-center  max-w-[500px] h-72  p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 text-white bg-[#1B1D21]">
        <img
          src="https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBob3RvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="w-48 rounded-full h-48 object-cover mx-auto dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y divide-gray-700">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">Ankit Bourasi</h2>
            <p className="px-5 text-xs sm:text-base font-semibold dark:text-gray-400">
              TMT - NTRY
            </p>
          </div>
        </div>
      </div>

      {/* Chain  */}
      <div className="flex justify-between items-center w-full rounded-3xl shadow-md max-w-[500px]  py-8 px-6 space-y-3 bg-[#1B1D21] text-gray-200">
        <div className="flex flex-col justify-center items-center space-y-3">
          <p className="text-2xl font-bold">9</p>
          <p className="text-xl font-semibold">Left Users</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-1">
          <p className="text-2xl font-bold pb-1">0</p>
          <p className="text-xl font-semibold">Right Users</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-2">
          <p className="text-2xl font-bold">9</p>
          <p className="text-xl font-semibold">Total Users</p>
        </div>
      </div>

      {/* Personal Information */}
      <div className="rounded-3xl shadow-md max-w-[500px] p-10 space-y-3 bg-[#1B1D21] text-gray-200">
        <h2 className="font-semibold text-2xl mb-2 pb-4 border-b-2 text-left">
          Personal Information
        </h2>
        <div className="flex font-semibold text-lg justify-between">
          <p>Name</p> <p className=""> Ankit Bourasi</p>
        </div>
        <div className="flex font-semibold text-lg justify-between">
          <p>User Id</p> <p> TMT-NTRY</p>
        </div>
        <div className="flex font-semibold text-lg justify-between">
          <p>Country</p> <p> India</p>
        </div>
        <div className="flex font-semibold text-lg justify-between">
          <p>Security Pin</p> <p> 6728</p>
        </div>
        <div className="flex font-semibold text-lg justify-between">
          <p>Sponsor Name</p> <p> TMT</p>
        </div>
        <div className="flex font-semibold text-lg justify-between">
          <p>Sponsor Id</p> <p> TMT-TRJC</p>
        </div>
      </div>
      </div>
1B1D21
      <div className="rounded-3xl bg-[#1B1D21]  p-10 text-white max-w-7xl  w-full h-[70vh] ">
        <h1 className="text-left font-semibold text-3xl mb-8">Personal</h1>
          
          <div className="flex flex-col space-y-4 items-center">
          <input  className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6" placeholder="Name"/>
          <input  className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6" placeholder="Email"/>
          <div className="flex justify-around space-x-6 items-center  w-full">

          <input  className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6" placeholder="Country"/>
          <input  className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6" placeholder="Phone"/>
        
          </div>
            <input  className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6" placeholder="Add Birthday"/>

            <button className="rounded-xl py-3 w-full px-12 text-white font-bold text-xl bg-yellow-600" >Save</button>

          </div>
          
      </div>
    </div>
  );
};

export default Profile;
