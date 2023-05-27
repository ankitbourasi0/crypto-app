import React from 'react'
import {ImLocation} from 'react-icons/im'
import {HiMail} from "react-icons/hi"
import {BsFillTelephoneFill} from "react-icons/bs"

const ContactUs = () => {
    return (
        <div className="flex flex-col justify-center items-center  w-full min-h-[80vh] mb-24 space-y-8 font-poppins">
            <div className="py-12 space-y-4 w-full text-center">
                <h1 className="text-5xl font-semibold ">Contact</h1>
                <p className="text-2xl tracking-wider   font-semibold text-gray-500 ">
                    We are here to help.
                </p>
            </div>

            {/* Parent */}
            <div className="flex w-full justify-between max-w-6xl ">
                {/* left  */}
                <div className="text-gray-400 text-xl w-full max-w-3xl  text-left tracking-wide font-medium space-y-6">
                    <h2 className="text-white text-3xl font-semibold">Contact ZOZO</h2>
                    <p className={"flex items-center "}>

                        Have something to say? We are here to help.
                        <br/>
                        Fill up the form or send
                        email or call phone.
                    </p>

                    <div className="space-y-4">
                        <div>
                            <p className={"flex items-center"}>
                              <ImLocation fontSize={" 18px"} className={"mr-2"}/>  H-39 Civil Lines, Jail Road Khandwa</p>
                        </div>
                        <div>
                            <p className={"flex items-center"}>
                              <HiMail fontSize={" 18px"} className={"mr-2"}/>
                                ankitbourasiapple@gmail.com</p>
                        </div>
                        <div>
                            <p className={"flex items-center"}>
                              <BsFillTelephoneFill fontSize={" 18px"}  className={"mr-2"}/>
                                (+91) 9589 854 745</p>
                        </div>
                    </div>
                </div>
                {/* right  */}

                <div className="pl-12 w-1/2 w-full">
                    <form action="submit" className="flex flex-col space-y-6 ">
                        <input type="text" className="p-3 w-full rounded-md bg-neutral-900 border-2" placeholder="Full Name"/>
                        <input type="email" className="p-3 rounded-md bg-zinc-900 border-2"
                               placeholder="Email Address"/>
                        <input type="text" className="p-3 rounded-md bg-zinc-900  border-2" placeholder="Phone Number"/>

                        <textarea className="p-3 rounded-md border-2 bg-zinc-900 min-h-[120px] "
                                  placeholder="Your Message"></textarea>
                        <button className="py-4 bg-white rounded-lg ">
                            <p className=" text-lg text-black font-bold">Send Message</p>
                        </button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ContactUs