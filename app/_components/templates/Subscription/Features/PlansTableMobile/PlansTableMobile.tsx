import Link from 'next/link'
import React from 'react'

export default function PlansTableMobile() {
    return (
        <div className='flex lg:hidden flex-col gap-5'>
            <div className="w-fit h-fit border bg-gray-99 dark:bg-black-6 border-gray-90 dark:border-black-12 py-2 px-2 rounded-xl">
                <ul className="flex text-sm gap-2">
                    <li>
                        <Link href='/' className="block py-3 px-5 text-black-15 dark:text-gray-75 rounded-lg transition-colors hover:text-black-6 dark:hover:text-white hover:bg-gray-95 dark:hover:bg-black-10">
                            Basic
                        </Link>
                    </li>
                    <li>
                        <Link href='/' className="block py-3 px-5 text-black-15 dark:text-gray-75 rounded-lg transition-colors hover:text-black-6 dark:hover:text-white hover:bg-gray-95 dark:hover:bg-black-10">
                            Standard
                        </Link>
                    </li>
                    <li>
                        <Link href='/' className="block py-3 px-5 text-black-15 dark:text-gray-75 rounded-lg transition-colors hover:text-black-6 dark:hover:text-white hover:bg-gray-95 dark:hover:bg-black-10">
                            Premium
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-6 bg-gray-99 dark:bg-black-6 border-gray-90 dark:border-black p-6 rounded-xl">
                <div className="flex flex-col gap-1 text-sm font-manrope-medium">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        Price
                    </h6>
                    <span className='text-sm font-manrope-medium text-black-10 dark:text-gray-95'>
                        $12.99/Month
                    </span>
                </div>
                <div className="flex flex-col gap-1 text-sm font-manrope-medium">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        Free Trail
                    </h6>
                    <span className='text-sm font-manrope-medium text-black-10 dark:text-gray-95'>
                        7 Days
                    </span>
                </div>
                <div className="flex flex-col gap-1 text-sm font-manrope-medium col-span-2">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        Content
                    </h6>
                    <span className='text-sm font-manrope-medium text-black-10 dark:text-gray-95'>
                        Access to a wider selection of movies and shows, including most new releases and exclusive content
                    </span>
                </div>
                <div className="flex flex-col gap-1 text-sm font-manrope-medium col-span-2">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        Devices
                    </h6>
                    <span className='text-sm font-manrope-medium text-black-10 dark:text-gray-95'>
                        Watch on Two device simultaneously
                    </span>
                </div>
                <div className="flex flex-col gap-1 text-sm font-manrope-medium">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        Cancel Anytime
                    </h6>
                    <span className='text-sm font-manrope-medium text-black-10 dark:text-gray-95'>
                        Yes
                    </span>
                </div>
                <div className="flex flex-col gap-1 text-sm font-manrope-medium">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        HDR
                    </h6>
                    <span className='text-sm font-manrope-medium text-black-10 dark:text-gray-95'>
                        Yes
                    </span>
                </div>
                <div className="flex flex-col gap-1 text-sm font-manrope-medium">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        Dolby Atmos
                    </h6>
                    <span className='text-sm font-manrope-medium text-black-10 dark:text-gray-95'>
                        Yes
                    </span>
                </div>
                <div className="flex flex-col gap-1 text-sm font-manrope-medium">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        Ad - Free
                    </h6>
                    <span className='text-sm font-manrope-medium text-black-10 dark:text-gray-95'>
                        Yes
                    </span>
                </div>
                <div className="flex flex-col gap-1 text-sm font-manrope-medium">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        Offline Viewing
                    </h6>
                    <span className='text-sm font-manrope-medium text-black-10 dark:text-gray-95'>
                        Yes, for select titles.
                    </span>
                </div>
                <div className="flex flex-col gap-1 text-sm font-manrope-medium">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        Family Sharing
                    </h6>
                    <span className='text-sm font-manrope-medium text-black-10 dark:text-gray-95'>
                        5 family members.
                    </span>
                </div>
            </div>
        </div>
    )
}