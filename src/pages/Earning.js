import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

const Earning = () => {
  const [open, setOpen] = useState(false);
  const [openCRO, setOpenCro] = useState(false);
  const [openTOKEN, setOpenTOKEN] = useState(false);

  const [term, setTerm] = useState("3 Months");
  const [cro, setCRO] = useState("4,000 to 40,000");
  const [token, setToken] = useState("Bitcoin");

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
      </div>

      <div className="w-full mt-44  text-center ">
        <h1 className="text-5xl font-medium mb-6">Calculate Your Rewards</h1>
        <h3 className="text-3xl font-medium">
          Select a token, amount, CRO lockup and term
          <br /> to calculate your rewards *
        </h3>

        <div className="max-w-5xl text-xl mt-16 mb-6 text-left bg-neutral-900 px-16 mx-auto rounded-3xl divide-x-2 py-2 flex  justify-between items-center font-medium uppercase">
          <div className="flex flex-col relative px-2">
            <span>Token</span>
            <button
              onClick={() => setOpenTOKEN((prev) => !prev)}
              className="flex items-center space-x-2"
            >
              <span> {token}</span>
              {!token ? (
                <AiOutlineCaretDown className="h-8 text-white" />
              ) : (
                <AiOutlineCaretUp className="h-8 text-white" />
              )}
            </button>
            {openTOKEN && (
              <div className="absolute z-10 text-sm font-light no-scrollbar font-medium  min-w-[200px]  space-y-2  w-full rounded-lg  bg-neutral-900 top-24 max-h-[400px] overflow-y-scroll  text-white">
                <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("Bitcoin");
                    }}
                    to="earning"
                  >
                    Bitcoin
                  </button>
                </div>

                <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("Cronos");
                    }}
                    to="earning"
                  >
                    Cronos
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("Ethereum");
                    }}
                    to="earning"
                  >
                    Ethereum
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("Tether");
                    }}
                    to="earning"
                  >
                    Tether
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("USD Coin");
                    }}
                    to="earning"
                  >
                    USD Coin
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("Dai");
                    }}
                    to="earning"
                  >
                    Dai
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("Pax Dollar");
                    }}
                    to="earning"
                  >
                    Pax Dollar
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("Algorand");
                    }}
                    to="earning"
                  >
                    Algorand
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("Avalanche");
                    }}
                    to="earning"
                  >
                    Avalanche
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("Binanace Coin");
                    }}
                    to="earning"
                  >
                    Binanace Coin
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("Cardano");
                    }}
                    to="earning"
                  >
                    Cardano
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("Celer Network");
                    }}
                    to="earning"
                  >
                    Celer Network
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("COSMOS");
                    }}
                    to="earning"
                  >
                    COSMOS
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("Elrond");
                    }}
                    to="earning"
                  >
                    Elrond
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("Fantom");
                    }}
                    to="earning"
                  >
                    Fantom
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("NEAR Protocol");
                    }}
                    to="earning"
                  >
                    NEAR Protocol
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("Polkadot");
                    }}
                    to="earning"
                  >
                    Polkadot
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("Polygon");
                    }}
                    to="earning"
                  >
                    Polygon
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("Solana");
                    }}
                    to="earning"
                  >
                    Solana
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("VeChain");
                    }}
                    to="earning"
                  >
                    VeChain
                  </button>
                </div> <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setOpenTOKEN((prev) => !prev);
                      setToken("Zilliqa");
                    }}
                    to="earning"
                  >
                    Zilliqa
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="flex flex-col px-6">
            <span>AMOUNT (USD)</span>
            <input
              type="text"
              className="bg-transparent border-0 focus-within:border-none"
            />
          </div>
          <div className="px-6 relative">
            <span>CRO LOCKUP</span>
            <div>
              <button
                onClick={() => setOpenCro((prev) => !prev)}
                className="flex items-center space-x-2"
              >
                <span> {cro} USD</span>
                {!openCRO ? (
                  <AiOutlineCaretDown className="h-8 text-white" />
                ) : (
                  <AiOutlineCaretUp className="h-8 text-white" />
                )}
              </button>
            </div>

            {openCRO && (
              <div className="absolute z-10 text-xl  font-medium  min-w-[200px]  space-y-2  w-full rounded-lg   bg-neutral-900 top-24 text-white">
                <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setCRO("Less than 4,000");
                      setOpenCro((prev) => !prev);
                    }}
                  >
                    Less than 4,000
                  </button>
                </div>
                <div className="hover:bg-gray-900 px-4  py-3  rounded-lg">
                  <button
                    onClick={() => {
                      setCRO("4,000 to 40,000");
                      setOpenCro((prev) => !prev);
                    }}
                    to="refferal"
                  >
                    4,000 to 40,000
                  </button>
                </div>
                <div
                  onClick={() => {
                    setCRO("40,000 or more");
                    setOpenCro((prev) => !prev);
                  }}
                  className="hover:bg-gray-900 px-4  py-3  rounded-lg"
                >
                  <button to="extrabonus">40,000 or more</button>
                </div>
              </div>
            )}
          </div>
          <div className="px-6 relative">
            <span>TERM</span>
            <div>
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center space-x-2"
              >
                <span> {term}</span>
                {!open ? (
                  <AiOutlineCaretDown className="h-8 text-white" />
                ) : (
                  <AiOutlineCaretUp className="h-8 text-white" />
                )}
              </button>
            </div>
            {open && (
              <div className="absolute z-10 text-xl  font-medium  min-w-[200px]  space-y-2  w-full rounded-lg   bg-neutral-900 top-24 text-white">
                <div className="hover:bg-gray-900 px-4 py-3 rounded-lg">
                  <button
                    onClick={() => {
                      setTerm("Flexible");
                      setOpen((prev) => !prev);
                    }}
                  >
                    Flexible
                  </button>
                </div>
                <div className="hover:bg-gray-900 px-4  py-3  rounded-lg">
                  <button
                    onClick={() => {
                      setTerm("1 Months");
                      setOpen((prev) => !prev);
                    }}
                    to="refferal"
                  >
                    1 Months
                  </button>
                </div>
                <div
                  onClick={() => {
                    setTerm("3 Months");
                    setOpen((prev) => !prev);
                  }}
                  className="hover:bg-gray-900 px-4  py-3  rounded-lg"
                >
                  <button to="extrabonus">3 Months</button>
                </div>
              </div>
            )}
          </div>
        </div>

        <p className="text-center text-sm mb-10">
          Click here to learn more about our tiered rewards rate structure.
        </p>
        <div className="max-w-4xl mb-20 w-full mx-auto  flex justify-between py-8 px-5">
          <div>
            <h2 className="text-7xl  font-medium">Earn</h2>
            <p className="text-9xl font-semibold">
              $451<span className="text-xs">usd</span>
            </p>
            <p className="text-2xl font-medium">per year paid in CRO</p>
          </div>

          <div className="space-y-16">
            <div>
              <h2 className="text-5xl font-medium">0.97%</h2>

              <p className="text-2xl">Optimised rewards p.a.</p>
            </div>
            <div>
              <h2 className="text-5xl font-medium">
                $186.92<span className="text-xs">USD</span>
              </h2>
              <p className="text-2xl">Rewards paid weekly</p>
            </div>
          </div>
        </div>

        <button className="border mb-6 px-12 text-xl py-3 font-medium rounded-full">
          Start Earning Today
        </button>
      </div>

      <div className="w-full flex-col  relative flex pt-16 justify-center  items-center mb-16">
        <img src="./images/package.png" />
      </div>
      <div className="w-full mt-24 mb-44 relative">
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
    </div>
  );
};

export default Earning;
