import { NewReleaseCardProps } from '@/app/_types/components/NewReleaseCard/NewReleaseCard.types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NewReleaseCard({ dateOfRelease }: NewReleaseCardProps) {
    return (
        <Link href={'/'} className="relative bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 rounded-lg 2xl:rounded-xl p-5 lg:p-6 2xl:p-8 overflow-hidden flex flex-col gap-3 lg:gap-4 2xl:gap-5">
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
            <div className="flex justify-between items-center text-black-6 dark:text-gray-99 z-50 relative text-xs lg:text-sm">
                <div className='p-1 w-full text-center lg:p-1.5 rounded-full bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 font-manrope-medium'>
                    <span className='text-black-30 dark:text-gray-60 mr-0.5'>
                        Released at
                    </span>
                    <span className='text-black-15 dark:text-gray-75'>
                        {dateOfRelease}
                    </span>
                </div>
            </div>
        </Link>
    )
}
