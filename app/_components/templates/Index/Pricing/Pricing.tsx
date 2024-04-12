import Link from 'next/link'
import React from 'react'

export default function Pricing() {
    return (
        <div>
            <div className="container">
                <div className="flex flex-col gap-10 md:gap-14 2xl:gap-20">
                    <div className="flex flex-col md:flex-row gap-5">
                        <div className="flex flex-col gap-2.5 2xl:gap-3.5">
                            <h3 className='text-2xl md:text-3xl 2xl:text-4xl font-manrope-bold text-white'>
                                Choose the plan that's right for you
                            </h3>
                            <span className='text-sm md:text-base 2xl:text-lg font-manrope-regular text-gray-60'>
                                Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!
                            </span>
                        </div>
                        <div className="w-fit h-fit shrink-0 self-end border bg-black-6 border-black-12 py-2 2xl:py-2.5 px-2 2xl:px-2.5 rounded-xl">
                            <ul className="flex text-sm 2xl:text-lg gap-2 2xl:gap-2.5">
                                <li>
                                    <Link href='/' className="block py-3 2xl:py-3.5 px-5 2xl:px-6 text-gray-75 rounded-lg transition-colors hover:text-white hover:bg-black-10">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className="block py-3 2xl:py-3.5 px-5 2xl:px-6 text-gray-75 rounded-lg transition-colors hover:text-white hover:bg-black-10">
                                        Movies & Shows
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 2xl:gap-8">
                        <div className="p-6 md:p-10 2xl:p-12 bg-black-10 border border-black-15 rounded-xl flex flex-col gap-8 md:gap-10 2xl:gap-12">
                            <div className="flex flex-col gap-2.5 md:gap-3 2xl:gap-4">
                                <h4 className='font-manrope-bold text-lg md:text-xl 2xl:text-2xl text-white'>
                                    Basic Plan
                                </h4>
                                <span className='font-manrope-regular text-sm md:text-base 2xl:text-lg text-gray-60'>
                                    Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.
                                </span>
                            </div>
                            <div className="">
                                <span className='text-2xl md:text-3xl 2xl:text-4xl font-manrope-semibold text-white'>
                                    $9.99
                                </span>
                                <span className='text-sm md:text-base 2xl:text-lg text-gray-60 font-manrope-medium'>
                                    /month
                                </span>
                            </div>
                            <div className="flex gap-4 2xl:gap-5">
                                <button className='bg-black-8 text-sm 2xl:text-lg border border-black-15 rounded-md py-3.5 2xl:py-4 text-white w-full'>
                                    Start Free Trial
                                </button>
                                <button className='bg-red-45 text-sm 2xl:text-lg rounded-md py-3.5 2xl:py-4 text-white w-full'>
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                        <div className="p-6 md:p-10 2xl:p-12 bg-black-10 border border-black-15 rounded-xl flex flex-col gap-8 md:gap-10 2xl:gap-12">
                            <div className="flex flex-col gap-2.5 md:gap-3 2xl:gap-4">
                                <h4 className='font-manrope-bold text-lg md:text-xl 2xl:text-2xl text-white'>
                                    Basic Plan
                                </h4>
                                <span className='font-manrope-regular text-sm md:text-base 2xl:text-lg text-gray-60'>
                                    Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.
                                </span>
                            </div>
                            <div className="">
                                <span className='text-2xl md:text-3xl 2xl:text-4xl font-manrope-semibold text-white'>
                                    $9.99
                                </span>
                                <span className='text-sm md:text-base 2xl:text-lg text-gray-60 font-manrope-medium'>
                                    /month
                                </span>
                            </div>
                            <div className="flex gap-4 2xl:gap-5">
                                <button className='bg-black-8 text-sm 2xl:text-lg border border-black-15 rounded-md py-3.5 2xl:py-4 text-white w-full'>
                                    Start Free Trial
                                </button>
                                <button className='bg-red-45 text-sm 2xl:text-lg rounded-md py-3.5 2xl:py-4 text-white w-full'>
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                        <div className="p-6 md:p-10 2xl:p-12 bg-black-10 border border-black-15 rounded-xl flex flex-col gap-8 md:gap-10 2xl:gap-12">
                            <div className="flex flex-col gap-2.5 md:gap-3 2xl:gap-4">
                                <h4 className='font-manrope-bold text-lg md:text-xl 2xl:text-2xl text-white'>
                                    Basic Plan
                                </h4>
                                <span className='font-manrope-regular text-sm md:text-base 2xl:text-lg text-gray-60'>
                                    Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.
                                </span>
                            </div>
                            <div className="">
                                <span className='text-2xl md:text-3xl 2xl:text-4xl font-manrope-semibold text-white'>
                                    $9.99
                                </span>
                                <span className='text-sm md:text-base 2xl:text-lg text-gray-60 font-manrope-medium'>
                                    /month
                                </span>
                            </div>
                            <div className="flex gap-4 2xl:gap-5">
                                <button className='bg-black-8 text-sm 2xl:text-lg border border-black-15 rounded-md py-3.5 2xl:py-4 text-white w-full'>
                                    Start Free Trial
                                </button>
                                <button className='bg-red-45 text-sm 2xl:text-lg rounded-md py-3.5 2xl:py-4 text-white w-full'>
                                    Choose Plan
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
