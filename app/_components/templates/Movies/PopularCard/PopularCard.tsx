import Image from 'next/image'
import React from 'react'
import { Link } from '@/navigation'
import { PopularCardProps } from '@/app/_types/components/PopularCard/PopularCard.types'

export default function PopularCard({ title }: PopularCardProps) {
    return (
        <Link href={'/movies/1'}>
            <div className="absolute top-0 left-0 h-full w-full dark:bg-gradient-to-t from-black-10/100 to-black-10/0 z-0"></div>
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
            <div className="flex justify-between items-center text-black-6 dark:text-gray-99 z-50 relative">
                <div className="flex flex-col gap-1">
                    <div className="bg-red-45 rounded text-gray-99 font-manrope-semibold lg:p-1.5 2xl:p-2 text-xs 2xl:text-sm">
                        Top 10 In
                    </div>
                    <span className='text-sm lg:text-base 2xl:text-lg font-manrope-semibold'>
                        {title}
                    </span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 rtl:rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </div>
        </Link>
    )
}
