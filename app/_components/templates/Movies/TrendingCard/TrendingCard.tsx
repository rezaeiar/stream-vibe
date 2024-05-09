import { TrendingCardProps } from '@/app/_types/components/TrendingCard/TrendingCard.types'
import Image from 'next/image'
import { Link } from '@/navigation'
import React from 'react'

export default function TrendingCard({ time, view }: TrendingCardProps) {
    return (
        <Link href={'/movies/1'}>
            <div className="absolute top-0 left-0 h-full w-full dark:bg-gradient-to-t from-black-10/100 to-black-10/0 z-0"></div>
            <div className="z-0">
                <Image
                    src="/images/assets/trend.png"
                    alt="video-trailer"
                    width="100"
                    height="100"
                    sizes="100vw"
                    className="w-full"
                />
            </div>
            <div className="flex justify-between items-center text-black-6 dark:text-gray-99 z-50 relative text-[10px] lg:text-xs">
                <div className='px-1 lg:px-1.5 py-0.5 rounded-full bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 font-manrope-medium flex gap-0.5 items-center text-gray-60'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 lg:w-5 h-4 lg:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    {time}
                </div>
                <div className="px-1 lg:px-1.5 py-0.5 rounded-full bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 font-manrope-medium flex gap-0.5 items-center text-gray-60">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 lg:w-5 h-4 lg:h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    {view}K
                </div>
            </div>
        </Link>
    )
}
