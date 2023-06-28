import React from "react";

const Signup = () => {
  return (
    <div className="w-full max-w-full  font-poppins max-h-[100vh] relative ">
      <img
        src="./images/signupbg.jpg"
        className="w-full object-cover max-h-[100vh]"
      />
      <div className="w-1/2 px-24 text-center absolute top-20 ">
        <h1 className="mb-6 text-5xl font-semibold">Welcome to one ozo</h1>
        <p className="mb-6">
          Please register if you don't have an account and
          <br />
          login if you already have an account{" "}
        </p>

        <div className="flex space-x-6 mb-4 max-w-[350px] text-center font-semibold  items-center">
          <p className="">Do you have a sponsor?</p>
          <div className="space-x-3">
            <input
              type="radio"
              name="sponsor"
              id="yes"
              value={"yes"}
              className=""
            />
            <label htmlFor="yes">Yes</label>
          </div>
          <div className="space-x-3">
            <input
              type="radio"
              name="sponsor"
              id="no"
              value={"no"}
              className=""
            />

            <label htmlFor="no">No</label>
          </div>
        </div>

        <div className="max-w-1/2 w-full">
            <h1 className="text-xl text-left font-semibold">Sponsor Details</h1>

          <div className="flex space-x-6 mb-6 mt-2 w-full">
          <input placeholder="Sponsor ID" className="w-full rounded-md  bg-neutral-900 py-1 px-4"/>
            <input placeholder="Sponsor Name" className="w-full bg-neutral-900 rounded-md b py-1 px-4"/>

          </div>

          <div className="flex space-x-6 mb-6 max-w-[350px] font-semibold  items-center">
          <p className="">Position</p>
          <div className="space-x-3">
            <input
              type="radio"
              name="position"
              id="right"
              value={"right"}
              className=""
            />
            <label htmlFor="right">Right</label>
          </div>
          <div className="space-x-3">
            <input
              type="radio"
              name="position"
              id="left"
              value={"left"}
              className=""
            />

            <label htmlFor="left">Left</label>
          </div>

         
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <input placeholder="First name" type="text" className="w-full rounded-md  bg-neutral-900 py-1 px-4"/>

          <input placeholder="Last name" type="text" className="w-full rounded-md  bg-neutral-900 py-1 px-4"/>
          <input placeholder="Choose your Country" type="text" className="w-full rounded-md  bg-neutral-900 py-1 px-4"/>
          <input placeholder="Contact number" type="text" className="w-full rounded-md  bg-neutral-900 py-1 px-4"/>

          <input placeholder="Email" type="email" className="w-full rounded-md  bg-neutral-900 py-1 px-4"/>
          <input placeholder="Confirm Email" type="email" className="w-full rounded-md  bg-neutral-900 py-1 px-4"/>
          <input placeholder="Create password" type="password" className="w-full rounded-md  bg-neutral-900 py-1 px-4"/>
          <input placeholder="Confirm password" type="password" className="w-full rounded-md  bg-neutral-900 py-1 px-4"/>

            </div>
            <button className="w-full py-2 bg-gradient-to-tr from-indigo-400 to bg-fuchsia-500 rounded-lg">Sign up</button>
            <p className="text-center my-2 text-sm">Already have an account? sign in</p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
