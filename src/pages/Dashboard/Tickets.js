import React from 'react'

const Tickets = ({tickets}) => {
  return (
    <div className='w-full bg-neutral-900  py-16'>
     
    {tickets == "Submit" && <Submit/>}
    {tickets == "list" && <List/> }


    </div>
  )
}

export default Tickets


const Submit=()=>{
    return  <div className="max-w-5xl w-full mx-auto ">
    <h1 className="text-5xl font-semibold my-10">Tickets</h1>

    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="mb-2">Choose Department</p>
        <input className="px-2 py-2 rounded-lg bg-black w-full" />
      </div>

      <div>
        <p className="mb-2">Choose Related Service</p>
        <input className="px-2 py-2 rounded-lg bg-black w-full" />
      </div>
      </div>  
      <div>
        <p className="mb-2">Subject</p>
        <input className="px-2 py-2 rounded-lg bg-black w-full" />
      </div>

      <div>
        <p className="mb-2">Message</p>
        <textarea className="px-2 py-2 rounded-lg bg-black w-full min-h-[150px]" />
      </div>
   
    <div className="mt-4 mb-4">
      <p className="mb-2">Attachment (optional)</p>
      <input className="px-2 py-2 rounded-lg bg-black w-full" />
    </div>
    <button className="w-full max-w-[250px]  bg-gradient-to-r text-black from-blue-500 to-fuchsia-700 rounded-full p-3">
        Submit
      </button>
   
  </div>
}

const List = ()=>{
    return<div className='max-w-6xl mx-auto w-full'>
        <div className='flex rounded-2xl p-4 justify-between bg-gradient-to-tr from-indigo-400 to-fuchsia-600  max-h-[280px]'>
            <div className='w-full max-w-[350px] min-h-[180px] p-4 flex flex-col justify-between items-stretch rounded-xl text-gray-600 bg-white '>
            <h3 className='text-xl '>Tickets</h3>
            <div className='flex justify-between'>
                <p className='text-2xl text-black '>780</p> <span className='rounded-xl px-4 flex text-rose-700 bg-rose-300 font-semibold py-2'>12% <img src='./images/icons/down.png' className='w-6  h-5'/></span>
            </div>
            <p className='text-xl'>Total Tickets</p>
            </div>

            <div className='w-full max-w-[350px] min-h-[180px] p-4 flex flex-col justify-between items-stretch rounded-xl text-gray-600 bg-white '>
            <h3 className='text-xl '>Open Tickets</h3>
            <div className='flex justify-between'>
                <p className='text-2xl text-black '>6250</p> <span className='rounded-xl px-4 text-green-600  flex font-semibold bg-green-200 py-2'>32% <img src='./images/icons/up.png' className='w-6  h-5'/></span>
            </div>
            <p className='text-xl'>In the order</p>
            </div>


            <div className='w-full max-w-[350px] min-h-[180px] p-4 flex flex-col justify-between items-stretch rounded-xl text-gray-600 bg-white '>
            <h3 className='text-xl '> Closed Tickets</h3>
            <div className='flex justify-between'>
                <p className='text-2xl text-black '>17</p> <span className='rounded-xl px-4 text-green-600  flex font-semibold bg-green-200 py-2'>18% <img src='./images/icons/up.png' className='w-6  h-5'/></span>
            </div>
            <p className='text-xl'>Answered</p>
            </div>
        </div>

        <div className='w-full'>
        <h1 className='text-4xl my-12 font-semibold'>
            Tickets
        </h1>

            <div className='bg-black w-full px-12 py-4 justify-between flex '>
                <div className=''>Department</div>
                <div className=''>Category</div>
                <div className=''>Last Update</div>
                <div className=''>Status</div>
                <div className=''>Position</div>

            </div>
        </div>
    </div>
}