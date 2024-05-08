import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { CategoryCardProps } from '@/app/_types/components/CategoryCard/CategoryCard.types'

export default function CategoryCard({ title }: CategoryCardProps) {
    return (
        <Link href={'/'}>
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
                <span className='text-sm lg:text-base 2xl:text-lg font-manrope-semibold'>
                    {title}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-8 2xl:h-8 rtl:rotate-180">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
            </div>
        </Link>
    )
}
