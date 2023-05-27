import React, {useState} from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";

const Investments = () => {
    //offline Activation
    const [checkbox1, setCheckbox1] = useState(false);

    const [checkbox2, setCheckbox2] = useState(false);

//Package Activation
    const [investmentBox, setInvestmentBox] = useState(false)
    const [packageName, setPackageName] = useState("Micro")

    const [open, setOpen] = useState(false);

    const handleOpen = (e) => {

     let packname =  e.target.name
      setPackageName(packname);
      setOpen(!open)
      e.preventDefault()

    };

    return (

        <React.Fragment>
            <div className="w-full px-12 py-4 flex flex-col justify-center items-center">
                <h1 className={"my-4 pb-4 border-b-2 border-voilet text-4xl w-full max-w-xl font-bold "}>Package
                    Activation</h1>
                <div className="max-w-[calc(100%-3rem)]  p-8 flex justify-between items-center w-full ">

                    {/*Micro */}
                    <div className={"w-full flex flex-col  justify-center items-center"}>
                        <div
                            className="max-w-[350px] shadow-2xl shadow-cyan-500 w-full transition duration-500 transform pb-5 bg-gradient-to-r from-cyan-500 to-blue-500  text-white border-4 flex-col rounded-2xl">
                            <h1 className={"my-4 pb-4 border-b-2 text-5xl font-bold "}>MICRO</h1>
                            <h3 className={"my-4 pb-4 text-3xl font-bold "}>$25 - $4999</h3>
                            <div className={"w-full flex space-y-3 flex-col  items-center px-6"}>
                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>DAILY ROI</p>
                                    <p className={"font-semibold"}>1.60% - 1.90%</p>
                                </div>

                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>DURATION</p>
                                    <p className={"font-semibold"}>150 DAYS</p>
                                </div>
                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>RETURNS</p>
                                    <p className={"font-semibold"}>240% - 285%</p>
                                </div>
                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>REFERRAL</p>
                                    <p className={"font-semibold"}>9.00 %</p>
                                </div>
                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>BINARY</p>
                                    <p className={"font-semibold"}>10%</p>
                                </div>
                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>CAPPING LIMIT</p>
                                    <p className={"font-semibold"}>$1500</p>
                                </div>
                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>PRINCIPLE RETURNS</p>
                                    <p className={"font-semibold"}>25%</p>
                                </div>
                            </div>
                        </div>
                      <button onClick={(e)=> handleOpen(e)} name="Micro"
                                className={"my-4 hover:scale-110 transform transition duration-500 mx-auto bg-gray-900 text-white rounded-full py-4 px-12 font-bold text-xl uppercase"}>Continue
                        </button>

                    </div>

                    {/*NANO */}
                    <div className={"w-full flex flex-col justify-center items-center"}>

                        <div
                            className="max-w-[350px] shadow-2xl shadow-cyan-500  hover:cursor-pointer  transition duration-500 transform w-full pb-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white border-4 flex-col rounded-2xl">
                            <h1 className={"my-4 pb-4 border-b-2 text-5xl font-bold "}>NANO</h1>
                            <h3 className={"my-4 pb-4 text-3xl font-bold "}>$5000 - $39999</h3>
                            <div className={"w-full flex space-y-3 flex-col  items-center px-6"}>
                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>DAILY ROI</p>
                                    <p className={"font-semibold"}>1.90% - 2.20%</p>
                                </div>

                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>DURATION</p>
                                    <p className={"font-semibold"}>140 DAYS</p>
                                </div>
                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>RETURNS</p>
                                    <p className={"font-semibold"}>266% - 308%</p>
                                </div>
                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>REFERRAL</p>
                                    <p className={"font-semibold"}>12.00 %</p>
                                </div>
                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>BINARY</p>
                                    <p className={"font-semibold"}>10%</p>
                                </div>
                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>CAPPING LIMIT</p>
                                    <p className={"font-semibold"}>$4000</p>
                                </div>
                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>PRINCIPLE RETURNS</p>
                                    <p className={"font-semibold"}>35%</p>
                                </div>
                            </div>
                        </div>
                      <button onClick={(e)=> handleOpen(e)} name="Nano"
                                className={"my-4 hover:scale-110 transform transition duration-500  mx-auto bg-gray-900 text-white rounded-full py-4 px-12 font-bold text-xl uppercase"}>Continue
                        </button>

                    </div>

                    {/*PICO*/}
                    <div className={"w-full flex flex-col justify-center items-center"}>
                        <div
                            className="max-w-[350px] shadow-2xl shadow-cyan-500     hover:cursor-pointer transition duration-500 transform w-full bg-gradient-to-r from-sky to-indigo-500 pb-5  text-white border-4 flex-col rounded-2xl">
                            <h1 className={"my-4 pb-4 border-b-2 text-5xl font-bold "}>PICO</h1>
                            <h3 className={"my-4 pb-4 text-3xl font-bold "}>$40000 - $100000</h3>
                            <div className={"w-full flex space-y-3 flex-col  items-center px-6"}>
                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>DAILY ROI</p>
                                    <p className={"font-semibold"}>2.20% - 2.50%</p>
                                </div>

                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>DURATION</p>
                                    <p className={"font-semibold"}>130 DAYS</p>
                                </div>
                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>RETURNS</p>
                                    <p className={"font-semibold"}>286% - 325%</p>
                                </div>
                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>REFERRAL</p>
                                    <p className={"font-semibold"}>15.00 %</p>
                                </div>
                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>BINARY</p>
                                    <p className={"font-semibold"}>10.00 %</p>
                                </div>
                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>CAPPING LIMIT</p>
                                    <p className={"font-semibold"}>$10000</p>
                                </div>
                                <div className={"flex w-full text-lg font-bold justify-between items-center"}>
                                    <p>PRINCIPLE RETURNS</p>
                                    <p className={"font-semibold"}>50%</p>
                                </div>
                            </div>
                        </div>
                      <button onClick={(e)=> handleOpen(e)} name="Pico"
                                className={"my-4 hover:scale-110 transform transition duration-500  mx-auto bg-gray-900 text-white rounded-full py-4 px-12 font-bold text-xl uppercase"}>Continue
                        </button>

                    </div>

                </div>


            </div>


            <Dialog open={open} handler={handleOpen} className={"rounded-3xl"}>
              <DialogHeader className={""}><span className={"px-4"}>{packageName}</span></DialogHeader>
                <DialogBody divider className={"pl-8"}>

                    <div className="flex mb-4 items-center space-x-2 w-full pb-4">
                        <input
                            type="checkbox"
                            className="rounded-md p-3 text-gray-900 border-2 "
                            onChange={() => setInvestmentBox(!investmentBox)}
                        />
                        <p className="font-semibold text-xl">
                            Click here for voucher investment
                        </p>
                    </div>
                    {investmentBox ?
                        <select className={"px-4 py-3 rounded-2xl border-2 w-full"}>
                            <option value="Tec">TEC Wallet</option>
                            <option value="Mac">MAC Wallet</option>
                            <option value="Trade">Trade</option>
                        </select>
                        : <input type={"text"} placeholder={"Enter Amount"} className={"px-4 py-3 rounded-2xl border-2 w-full"}/>}

                </DialogBody>
                <DialogFooter className={""}>
                    <Button
                        variant="gradient"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1 "
                    >
                        <span className={"font-semibold text-lg     "}>Cancel</span>
                    </Button>
                    <Button variant="gradient" onClick={handleOpen}>
                        <span className={"font-semibold text-lg"}>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </React.Fragment>




//    <div className="w-full ">
//      <div className="max-w-7xl mx-auto w-full pt-6 rounded-2xl bg-gray-900 text-white">
//        <h2 className="text-left pl-6 font-semibold text-2xl mb-4 pb-4 border-b-2">
//          Offline Activation
//        </h2>
//        <div className="flex flex-col  items-center w-full max-w-7xl">
//          {/* Perfect Money  */}
//          <div className="border-2 rounded-2xl max-w-[450px] w-full mt-10 mb-6 px-6 py-4 flex justify-between items-center">
//            <img src="./images/perfectmoney.png" className="w-32 h-32" />
//            <div className="text-right">
//              <p className="font-semibold text-lg">Account Id</p>
//              <h2 className="font-semibold text-3xl">U37175476</h2>
//            </div>
//          </div>
//
//          <div className="w-full flex flex-col max-w-6xl mt-10 justify-center items-center">
//            <div className="flex mb-4 items-center space-x-2 w-full pb-4 border-b-2">
//              <input
//                type="checkbox"
//                className="rounded-sm p-2"
//                onChange={() => setCheckbox1(!checkbox1)}
//              />
//              <p className="font-semibold text-xl">
//                Click here for voucher investment
//              </p>
//            </div>
//
//            <div className="flex mb-4 items-center space-x-2 w-full pb-4">
//              <input
//                type="checkbox"
//                className="rounded-sm p-2"
//                onChange={() => setCheckbox2(!checkbox2)}
//              />
//              <p className="font-semibold text-xl">
//                Click here for downline activation
//              </p>
//            </div>
//
//            {checkbox2 ? (
//              checkbox2 && (
//                <div className="flex  w-full  pr-6 space-x-10">
//                  <div className="text-left w-1/2">
//                    <p className="pl-2 font-semibold text-lg tracking-wide">
//                      Downline Id
//                    </p>
//                    <input
//                      className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6"
//                      placeholder="TMT-FUN"
//                    />
//                  </div>
//
//                  <div className="text-left w-1/2">
//                    <p className="pl-2 font-semibold text-lg tracking-wide">
//                      Downline Name
//                    </p>
//                    <input
//                      className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6"
//                      placeholder="Downline Name"
//                    />
//                  </div>
//                </div>
//              )
//            ) : (
//              <div> </div>
//            )}
//
//            <div className="flex w-full pr-6 space-x-10 my-4">
//              <input
//                className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6"
//                placeholder="Enter Package Amount"
//              />
//              <input
//                className="border-2 border-gray-200 py-4 w-full bg-gray-700 rounded-2xl px-6"
//                placeholder="Package Name"
//              />
//            </div>
//
//            <div className="font-semibold text-xl text-left pr-6  w-full space-y-4 mb-10">
//                  <p className="pl-2 text-yellow-600">
//              Perfect Money Transaction Id
//
//                  </p>
//              <input
//                className="border-2 border-gray-200 py-4 w-full  bg-gray-700 rounded-2xl px-6"
//                placeholder="Enter Transaction Id"
//              />
//              <button className="rounded-xl py-3 w-full px-12 text-white font-bold text-xl bg-yellow-600">
//                Continue
//              </button>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
    );
};

export default Investments;
