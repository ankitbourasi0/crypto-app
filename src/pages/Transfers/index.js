import React,{useState} from 'react'

const Transfers = () => {
  const [transferWallet, setTransferWallet] = useState("Generate");
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className=' w-full min-h-[90vh]'>
       <div className="w-full max-w-7xl   space-x-4  justify-center flex  ">
        <div className="min-w-[250px] px-6 py-3 hover:scale-105 transition duration-500 transform flex justify-center  text-white font-semibold text-3xl items-center shadow-md rounded-lg bg-amber-400 ">
          <button
            className="w-full h-full "
            onClick={() => setTransferWallet("Intra")}
          >
           Intra Wallet
          </button>
        </div>
        <div className="min-w-[250px] px-6 py-3 hover:scale-105 transition duration-500 transform flex justify-center text-white font-semibold text-3xl items-center shadow-md rounded-lg bg-amber-400 ">
          <button
            className="w-full h-full "
            onClick={() => setTransferWallet("Inter")}
          >
            Inter Wallet
          </button>
        </div>
        <div className="min-w-[250px] px-6 py-3 hover:scale-105 transition duration-500 transform flex justify-center text-white font-semibold text-3xl items-center shadow-md rounded-lg bg-amber-400">
          <button
            className="w-full h-full "
            onClick={() => setTransferWallet("History")}
          >
           Transfer History
          </button>
        </div>
      </div>
    </div>
  )
}

export default Transfers