import Image from 'next/image'
import React from 'react'

export default function Categories() {
    return (
        <div>
            <div className="container">
                <div className="flex flex-col gap-10 lg:gap-14 2xl:gap-20">
                    <div className="flex flex-col lg:flex-row gap-5 justify-between">
                        <div className="flex flex-col gap-2.5 2xl:gap-3.5">
                            <h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-manrope-bold text-white'>
                                Explore our wide variety of categories
                            </h3>
                            <span className='text-sm lg:text-base 2xl:text-lg font-manrope-regular text-gray-60'>
                                Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new
                            </span>
                        </div>
                        <div className="hidden lg:flex lg:gap-3 2xl:gap-4 items-center bg-black-6 lg:p-3 2xl:p-4 border border-black-12 lg:rounded-lg 2xl:rounded-xl">
                            <button className="flex lg:p-2.5 2xl:p-3.5 rounded-md border border-black-12 text-white bg-black-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 2xl:h-7 2xl:w-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                            </button>
                            <div className="flex gap-1">
                                <div className="h-1 w-4 bg-black-20 rounded-full"></div>
                                <div className="h-1 w-5 bg-red-45 rounded-full"></div>
                                <div className="h-1 w-4 bg-black-20 rounded-full"></div>
                                <div className="h-1 w-4 bg-black-20 rounded-full"></div>
                            </div>
                            <button className="flex lg:p-2.5 2xl:p-3.5 rounded-md border border-black-12 text-white bg-black-10">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 2xl:h-7 2xl:w-7">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 2xl:gap-8">
                        <div className="relative bg-black-10 border border-black-15 rounded-lg 2xl:rounded-xl p-5 lg:p-6 2xl:p-8 overflow-hidden">
                            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black-10/100 to-black-10/0 z-0"></div>
                            <div className="z-0">
                                <Image
                                    src="/images/assets/as1.png"
                                    alt="video-trailer"
                                    width="100"
                                    height="100"
                                    sizes="100vw"
                                    className="w-full"
                                />
                            </div>
                            <div className="flex justify-between items-center text-white z-50 relative">
                                <span className='text-sm lg:text-base 2xl:text-lg font-manrope-semibold'>
                                    Action
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative bg-black-10 border border-black-15 rounded-lg 2xl:rounded-xl p-5 lg:p-6 2xl:p-8 overflow-hidden">
                            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black-10/100 to-black-10/0 z-0"></div>
                            <div className="z-0">
                                <Image
                                    src="/images/assets/as1.png"
                                    alt="video-trailer"
                                    width="100"
                                    height="100"
                                    sizes="100vw"
                                    className="w-full"
                                />
                            </div>
                            <div className="flex justify-between items-center text-white z-50 relative">
                                <span className='text-sm lg:text-base 2xl:text-lg font-manrope-semibold'>
                                    Action
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative bg-black-10 border border-black-15 rounded-lg 2xl:rounded-xl p-5 lg:p-6 2xl:p-8 overflow-hidden">
                            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black-10/100 to-black-10/0 z-0"></div>
                            <div className="z-0">
                                <Image
                                    src="/images/assets/as1.png"
                                    alt="video-trailer"
                                    width="100"
                                    height="100"
                                    sizes="100vw"
                                    className="w-full"
                                />
                            </div>
                            <div className="flex justify-between items-center text-white z-50 relative">
                                <span className='text-sm lg:text-base 2xl:text-lg font-manrope-semibold'>
                                    Action
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative bg-black-10 border border-black-15 rounded-lg 2xl:rounded-xl p-5 lg:p-6 2xl:p-8 overflow-hidden">
                            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black-10/100 to-black-10/0 z-0"></div>
                            <div className="z-0">
                                <Image
                                    src="/images/assets/as1.png"
                                    alt="video-trailer"
                                    width="100"
                                    height="100"
                                    sizes="100vw"
                                    className="w-full"
                                />
                            </div>
                            <div className="flex justify-between items-center text-white z-50 relative">
                                <span className='text-sm lg:text-base 2xl:text-lg font-manrope-semibold'>
                                    Action
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                        <div className="relative bg-black-10 border border-black-15 rounded-lg 2xl:rounded-xl p-5 lg:p-6 2xl:p-8 overflow-hidden">
                            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black-10/100 to-black-10/0 z-0"></div>
                            <div className="z-0">
                                <Image
                                    src="/images/assets/as1.png"
                                    alt="video-trailer"
                                    width="100"
                                    height="100"
                                    sizes="100vw"
                                    className="w-full"
                                />
                            </div>
                            <div className="flex justify-between items-center text-white z-50 relative">
                                <span className='text-sm lg:text-base 2xl:text-lg font-manrope-semibold'>
                                    Action
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
