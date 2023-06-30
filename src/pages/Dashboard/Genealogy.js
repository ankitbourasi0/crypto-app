import React from 'react'

const Genealogy = () => {
  return (
    <div className="min-h-[90vh] bg-neutral-900 pt-4 pb-16   w-full">
         <div className='w-full max-w-6xl mx-auto'>

         <h1 className='text-5xl mt-12 mb-6 font-semibold'>
            Invite Friends
        </h1>

        <div className='w-full grid grid-cols-2 gap-x-8'>

        <div>
        <p className="mb-4">Left Referral Link</p>
        <input className="px-2 py-4 rounded-lg bg-black w-full" />
      </div>
      <div>
        <p className="mb-4">Right Referral Link</p>
        <input className="px-2 py-4 rounded-lg bg-black w-full" />
      </div>
        </div>

        <h1 className='text-4xl mt-12 mb-6 font-semibold'>
            Referral Details
        </h1>

            <div className='bg-black w-full items-center px-12 py-4 justify-between flex '>
            <input 
                type="checkbox"
                className="rounded-sm bg-black border-2 p-2"
                name="referral"
                id="referralDetail"
              />
                <div className=''>SI No</div>
                <div className=''>Registered</div>
                <div className=''>Network</div>
                <div className=''>User</div>
                <div className=''>Email</div>
                <div className=''>Country/phone</div>
                <div className=''>Position</div>
                <div className=''>Status</div>
                <div className=''>Investment</div>



            </div>
        </div>

    </div>
  )
}

export default Genealogy