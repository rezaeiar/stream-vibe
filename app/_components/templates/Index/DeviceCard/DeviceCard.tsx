import { DeviceCardProps } from '@/app/_types/components/DeviceCard/DeviceCard.tupes'
import Image from 'next/image'
import React from 'react'

export default function DeviceCard({ title, description, image }: DeviceCardProps) {
    return (
        <div className="flex flex-col gap-5 lg:gap-6 2xl:gap-8 p-6 lg:p-10 2xl:p-12 rounded-lg border border-gray-75 dark:border-black-15 bg-gradient-to-bl from-gray-99 dark:from-red-45/20 via-gray-99 dark:via-black-6 to-gray-99 dark:to-black-6 shadow-lg dark:shadow-none">
            <div className="flex items-center gap-2.5 lg:gap-3 2xl:gap-4">
                <div className="flex p-2.5 lg:p-3 2xl:p-4 rounded-md border border-gray-75 dark:border-black-15 bg-gray-95 dark:bg-black-10">
                    <Image
                        src={`/images/icons/${image}`}
                        alt="smartphone"
                        width="100"
                        height="100"
                        sizes="100vw"
                        className="w-6 h-6 lg:w-8 lg:h-8 2xl:w-10 2xl:h-10"
                    />
                </div>
                <h3 className='text-black-6 dark:text-gray-99 font-manrope-semibold text-lg lg:text-xl 2xl:text-2xl'>
                    {title}
                </h3>
            </div>
            <span className='text-black-30 dark:text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-regular'>
                {description}
            </span>
        </div>
    )
}
