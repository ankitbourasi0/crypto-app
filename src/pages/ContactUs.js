import React from "react";
import { ImLocation } from "react-icons/im";
import { HiMail } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";

const ContactUs = () => {
  return (
    <div className="font-poppins w-full">
      <div className="w-full flex justify-center items-center space-x-10 min-h-[450px]  bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-fuchsia-500">
        <div className="mr-6">
          <h1 className="text-6xl mb-6">Contact Us</h1>
          <p className="font-semibold">
            Questions? Comments? Want to <br />
            schedule a demo? We'd love to chat!
          </p>
        </div>

        <div className="max-w-[380px] bg-black  rounded-2xl  flex justify-center items-center space-x-6 px-10 py-8">
          <div className="w-14 bg-white  p-2 rounded-full">
            <img src="./images/icons/gmail.png" className="w-16" />
          </div>
          <div>
            <h1 className="text-2xl">Email us</h1>
            <span className="text-lg">Support@Ozo.com</span>
          </div>
        </div>

        <div className="max-w-[380px] bg-black rounded-2xl  flex justify-center items-center space-x-6 px-10 py-8">
          <div className="w-14 bg-white p-1 rounded-full">
            <img src="./images/icons/call.png" />
          </div>
          <div>
            <h1 className="text-2xl">Phone number</h1>
            <span className="text-lg">(123) 456 789</span>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mt-24 mb-44 mx-auto flex space-x-10">
        <div className="text-left px-10 ">
          <h1 className="text-6xl mb-6">
            Send Us A <br /> Message
          </h1>
          <span className="text-xl text-gray-500">
            Fill out the form and our team will get <br />
            back to you as quickly as we can.
          </span>

          <div className=" w-full  my-10 space-y-6">
            <div className="flex justify-start items-center space-x-6 ">
              <img src="./images/icons/facebook.png" className="w-10 h-10" />
              <p className="text-xl">
                Facebook <br />
                <span className="text-base text-gray-500">One ozo</span>
              </p>
            </div>

            <div className="flex justify-start items-center space-x-6 ">
              <img src="./images/icons/instagram.png" className="w-10 h-10" />
              <p className="text-xl text-gray-500 ">
                Instagram
                <br />
                <span className="text-base">One ozo</span>
              </p>
            </div>

            <div className="flex justify-start items-center space-x-6 ">
              <img src="./images/icons/youtube.png" className="w-10 h-10" />
              <p className="text-xl">
                Youtube
                <br />
                <span className="text-base text-gray-500     ">One ozo</span>
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-3xl pl-6   w-full">
          <div className=" grid grid-cols-2 gap-8">
            <div className="flex flex-col ">
              <label className="mb-4 text-xl pl-4">Full name</label>
              <input
                className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-full px-6"
                placeholder="Your full name"
              />
            </div>
            <div className="flex flex-col ">
              <label className="mb-4 text-xl pl-4">Email address</label>
              <input
                className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-full px-6"
                placeholder="Your email address"
              />
            </div>
            <div className="flex flex-col ">
              <label className="mb-4 text-xl pl-4">Phone number</label>
              <input
                className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-full px-6"
                placeholder="12 3456 4789"
              />
            </div>
            <div className="flex flex-col ">
              <label className="mb-4 text-xl pl-4">Company name</label>
              <input
                className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-full px-6"
                placeholder="Company Co"
              />
            </div>
          </div>
          <div className="flex flex-col ">
            <label className="mt-10 mb-6 text-xl pl-4">Messages</label>
            <textarea
              className="border-2 border-gray-200 min-h-[20vh] py-4 w-full bg-gray-700 rounded-2xl px-6"
              placeholder=" Type you message here"
            ></textarea>

            <button className="px-4 py-4 text-xl hover:bg-purple-900 rounded-full bg-purple-800 mt-6 max-w-[300px] w-full">
              Send Message
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl mb-44 min-h-[450px] mx-auto border-4 shadow-2xl shadow-fuchsia-800 rounded-2xl bg-neutral-900 flex justify-center items-center flex-col text-center">
        <p className="text-xl px-3 py-2 mb-6 bg-gray-300 text-black font-semibold rounded-full">
          Join us now
        </p>
        <h1 className="text-5xl">
          Enter a new investment of
          <br /> digital connected
        </h1>
        <p className="text-gray-400 max-w-[600px] mt-6"> 
          "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
          exact original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>

        <div className="flex w-full max-w-[450px] space-x-6">
          <button className="px-4 py-4 text-xl hover:bg-purple-900 rounded-full bg-purple-800 mt-6  w-full">
            Start free
          </button>
          <button className="px-4 py-4 text-xl hover:bg-purple-900 rounded-full  border-2 mt-6  w-full">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
