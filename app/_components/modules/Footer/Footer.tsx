import Image from 'next/image'
import { Link } from '@/navigation'
import React from 'react'
import { useTranslations } from 'next-intl'

export default function Footer() {
    const t = useTranslations("footer")
    return (
        <div className='bg-gray-99 dark:bg-black-6 border-t dark:border-none border-gray-95 shadow-lg dark:shadow-none'>
            <div className="container">
                <div className="flex flex-col">
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-5 2xl:gap-8 py-12 lg:py-20 2xl:py-28">
                        <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6">
                            <h4 className='text-black-6 dark:text-white text-base lg:text-lg 2xl:text-xl font-manrope-semibold'>
                                <Link href={'/movies'}>
                                    {t("Home")}
                                </Link>
                            </h4>
                            <ul className='flex flex-col gap-2 lg:gap-2.5 2xl:gap-3.5'>
                                <li>
                                    <Link href='/#categories' className='text-black-30 dark:text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Categories
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/#devices' className='text-black-30 dark:text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Devices
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/#plans' className='text-black-30 dark:text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Plans
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/#faq' className='text-black-30 dark:text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6">
                            <h4 className='text-black-6 dark:text-white text-base lg:text-lg 2xl:text-xl font-manrope-semibold'>
                                Movies
                            </h4>
                            <ul className='flex flex-col gap-2 lg:gap-2.5 2xl:gap-3.5'>
                                <li>
                                    <Link href='/' className='text-black-30 dark:text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Gernes
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='text-black-30 dark:text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Trending
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='text-black-30 dark:text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        New Release
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='text-black-30 dark:text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Popular
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6">
                            <h4 className='text-black-6 dark:text-white text-base lg:text-lg 2xl:text-xl font-manrope-semibold'>
                                Shows
                            </h4>
                            <ul className='flex flex-col gap-2 lg:gap-2.5 2xl:gap-3.5'>
                                <li>
                                    <Link href='/' className='text-black-30 dark:text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Gernes
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='text-black-30 dark:text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Trending
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='text-black-30 dark:text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        New Release
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className='text-black-30 dark:text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Popular
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6">
                            <h4 className='text-black-6 dark:text-white text-base lg:text-lg 2xl:text-xl font-manrope-semibold'>
                                Support
                            </h4>
                            <ul className='flex flex-col gap-2 lg:gap-2.5 2xl:gap-3.5'>
                                <li>
                                    <Link href='/support#contact-us' className='text-black-30 dark:text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6">
                            <h4 className='text-black-6 dark:text-white text-base lg:text-lg 2xl:text-xl font-manrope-semibold'>
                                Subscription
                            </h4>
                            <ul className='flex flex-col gap-2 lg:gap-2.5 2xl:gap-3.5'>
                                <li>
                                    <Link href='/subscription#plans' className='text-black-30 dark:text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Plans
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/subscription#features' className='text-black-30 dark:text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-medium'>
                                        Features
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-6">
                            <h4 className='text-black-6 dark:text-white text-base lg:text-lg 2xl:text-xl font-manrope-semibold'>
                                Connect With Us
                            </h4>
                            <div className="flex gap-2.5">
                                <Link href='' className="flex p-3 2xl:p-4 rounded-md border border-gray-90 dark:border-black-15 bg-gray-95 dark:bg-black-10">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 448 512"
                                        className='h-5 w-5 text-black-6 dark:text-white'>
                                        <path
                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                                    </svg>
                                </Link>
                                <Link href='https://github.com/rezaeiar' className="flex p-3 2xl:p-4 rounded-md border border-gray-90 dark:border-black-15 bg-gray-95 dark:bg-black-10">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 496 512"
                                        className='h-5 w-5 text-black-6 dark:text-white'>
                                        <path
                                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                                    </svg>
                                </Link>
                                <Link href='https://linkedin.com/in/rezaeiar' className="flex p-3 2xl:p-4 rounded-md border border-gray-90 dark:border-black-15 bg-gray-95 dark:bg-black-10">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 448 512"
                                        className='w-5 h-5 text-black-6 dark:text-white'>
                                        <path
                                            d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between pb-5 lg:pb-10 2xl:pb-12 gap-5 text-sm lg:text-base 2xl:text-lg font-manrope-regular text-black-30 dark:text-gray-60 pt-5 2xl:pt-6 border-t border-gray-75 dark:border-black-15">
                        <span>
                            @2024 streamvib, All Rights Reserved
                        </span>
                        <ul className="flex justify-between items-center gap-5">
                            <li>
                                <Link href=''>
                                    Terms of Use
                                </Link>
                            </li>
                            <span className='h-5 w-px bg-gray-75 dark:bg-black-15'></span>
                            <li>
                                <Link href=''>
                                    Privacy Policy
                                </Link>
                            </li>
                            <span className='h-5 w-px bg-gray-75 dark:bg-black-15'></span>
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