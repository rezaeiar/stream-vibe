import Image from 'next/image'
import React from 'react'

export default function ContactForm() {
    return (
        <div>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 2xl:gap-20">
                    <div className="col-span-1 flex flex-col gap-8 lg:gap-10 2xl:gap-12">
                        <div className="flex flex-col gap-2.5 2xl:gap-3.5">
                            <h3 className='font-manrope-bold text-3xl lg:text-4xl 2xl:text-5xl text-white'>
                                Welcome to our support page!
                            </h3>
                            <p className='font-manrope-regular text-sm lg:text-base 2xl:text-lg text-gray-60'>
                                We're here to help you with any problems you may be having with our product.
                            </p>
                        </div>
                        <div className="border-4 rounded-md aspect-square border-black-15">
                            <Image
                                src="/images/banners/contact-form.png"
                                alt="video-trailer"
                                width="100"
                                height="100"
                                sizes="100vw"
                                className="w-full"
                            />
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-2 bg-black-6 border border-black-15 rounded-xl p-6 lg:p-10 2xl:p-12 grid grid-cols-1 lg:grid-cols-2 gap-x-5 2xl:gap-x-12 gap-y-5 lg:gap-y-10 2xl:gap-y-12 h-fit">
                        <div className="flex flex-col gap-3 2xl:gap-4 font-manrope-semibold text-white">
                            <label htmlFor="" className="text-base 2xl:text-lg">
                                First Name
                            </label>
                            <input type="text" placeholder='Enter First Name' className='focus:border-red-51 outline-none p-4 2xl:p-5 text-sm 2xl:text-lg text-gray-60 font-manrope-regular bg-black-8 border border-black-15 rounded-md 2xl:rounded-lg' />
                        </div>
                        <div className="flex flex-col gap-3 2xl:gap-4 font-manrope-semibold text-white">
                            <label htmlFor="" className="text-base 2xl:text-lg">
                                Last Name
                            </label>
                            <input type="text" placeholder='Enter Last Name' className='focus:border-red-51 outline-none p-4 2xl:p-5 text-sm 2xl:text-lg text-gray-60 font-manrope-regular bg-black-8 border border-black-15 rounded-md 2xl:rounded-lg' />
                        </div>
                        <div className="flex flex-col gap-3 2xl:gap-4 font-manrope-semibold text-white">
                            <label htmlFor="" className="text-base 2xl:text-lg">
                                Email
                            </label>
                            <input type="text" placeholder='Enter Email' className='focus:border-red-51 outline-none p-4 2xl:p-5 text-sm 2xl:text-lg text-gray-60 font-manrope-regular bg-black-8 border border-black-15 rounded-md 2xl:rounded-lg' />
                        </div>
                        <div className="flex flex-col gap-3 2xl:gap-4 font-manrope-semibold text-white">
                            <label htmlFor="" className="text-base 2xl:text-lg">
                                Phone Number
                            </label>
                            <input type="text" placeholder='Enter Phone Number' className='focus:border-red-51 outline-none p-4 2xl:p-5 text-sm 2xl:text-lg text-gray-60 font-manrope-regular bg-black-8 border border-black-15 rounded-md 2xl:rounded-lg' />
                        </div>
                        <div className="flex flex-col gap-3 2xl:gap-4 font-manrope-semibold text-white col-span-1 lg:col-span-2">
                            <label htmlFor="" className="text-base 2xl:text-lg">
                                Message
                            </label>
                            <textarea id="" className='focus:border-red-51 outline-none p-4 2xl:p-5 text-sm 2xl:text-lg text-gray-60 font-manrope-regular bg-black-8 border border-black-15 rounded-md 2xl:rounded-lg aspect-[5/1] resize-none' placeholder='Enter your Message'></textarea>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-y-5 justify-between lg:items-center col-span-2">
                            <div className="text-gray-60 font-manrope-regular text-base 2xl:text-lg flex gap-2 2xl:gap-2.5">
                                <input type="checkbox" id="" />
                                <span>
                                    I agree with Terms of Use and Privacy Policy
                                </span>
                            </div>
                            <button className='bg-red-45 text-sm 2xl:text-lg rounded-md py-3.5 2xl:py-4 px-5 text-white lg:w-fit'>
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
