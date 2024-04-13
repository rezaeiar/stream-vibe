import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='bg-black-6'>
            <div className="container">
                <div className="flex flex-col">
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-5 2xl:gap-8 py-12 lg:py-20 2xl:py-28">
                        <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6">
                            <h4 className='text-white text-base lg:text-lg 2xl:text-xl font-manrope-semibold'>
                                Home
                            </h4>
                            <ul className='flex flex-col gap-2 lg:gap-2.5 2xl:gap-3.5'>
                                <li>
                                    <Link href='/' className='text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Categories
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Devices
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6">
                            <h4 className='text-white text-base lg:text-lg 2xl:text-xl font-manrope-semibold'>
                                Movies
                            </h4>
                            <ul className='flex flex-col gap-2 lg:gap-2.5 2xl:gap-3.5'>
                                <li>
                                    <Link href='/' className='text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Gernes
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Trending
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        New Release
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Popular
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6">
                            <h4 className='text-white text-base lg:text-lg 2xl:text-xl font-manrope-semibold'>
                                Shows
                            </h4>
                            <ul className='flex flex-col gap-2 lg:gap-2.5 2xl:gap-3.5'>
                                <li>
                                    <Link href='/' className='text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Gernes
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Trending
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        New Release
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Popular
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6">
                            <h4 className='text-white text-base lg:text-lg 2xl:text-xl font-manrope-semibold'>
                                Support
                            </h4>
                            <ul className='flex flex-col gap-2 lg:gap-2.5 2xl:gap-3.5'>
                                <li>
                                    <Link href='/' className='text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6">
                            <h4 className='text-white text-base lg:text-lg 2xl:text-xl font-manrope-semibold'>
                                Subscription
                            </h4>
                            <ul className='flex flex-col gap-2 lg:gap-2.5 2xl:gap-3.5'>
                                <li>
                                    <Link href='/' className='text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Plans
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Features
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6">
                            <h4 className='text-white text-base lg:text-lg 2xl:text-xl font-manrope-semibold'>
                                Connect With Us
                            </h4>
                            <div className="flex gap-2.5">
                                <Link href='' className="flex p-3 2xl:p-4 rounded-md border border-black-15 bg-black-10">
                                    <Image
                                        src="/images/socials/facebook.svg"
                                        alt="facebook-logo"
                                        width="100"
                                        height="100"
                                        sizes="100vw"
                                        className="w-5 h-5"
                                    />
                                </Link>
                                <Link href='' className="flex p-3 2xl:p-4 rounded-md border border-black-15 bg-black-10">
                                    <Image
                                        src="/images/socials/twiter.svg"
                                        alt="twiter-logo"
                                        width="100"
                                        height="100"
                                        sizes="100vw"
                                        className="w-5 h-5"
                                    />
                                </Link>
                                <Link href='' className="flex p-3 2xl:p-4 rounded-md border border-black-15 bg-black-10">
                                    <Image
                                        src="/images/socials/linkedin.svg"
                                        alt="linkedin-logo"
                                        width="100"
                                        height="100"
                                        sizes="100vw"
                                        className="w-5 h-5"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between pb-5 lg:pb-10 2xl:pb-12 gap-5 text-sm lg:text-base 2xl:text-lg font-manrope-regular text-gray-60 pt-5 2xl:pt-6 border-t border-black-15">
                        <span>
                            @2024 streamvib, All Rights Reserved
                        </span>
                        <ul className="flex justify-between items-center gap-5">
                            <li>
                                <Link href=''>
                                    Terms of Use
                                </Link>
                            </li>
                            <span className='h-5 w-px bg-black-15'></span>
                            <li>
                                <Link href=''>
                                    Privacy Policy
                                </Link>
                            </li>
                            <span className='h-5 w-px bg-black-15'></span>
                            <li>
                                <Link href=''>
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}