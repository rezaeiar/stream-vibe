import React from 'react'
import { PlanCardProps } from '@/app/_types/components/PlanCard/PlanCard.types'

export default function PlanCard({ title, description, price }: PlanCardProps) {
    return (
        <div className="p-6 lg:p-10 2xl:p-12 bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 rounded-xl flex flex-col gap-8 lg:gap-10 2xl:gap-12">
            <div className="flex flex-col gap-2.5 lg:gap-3 2xl:gap-4">
                <h4 className='font-manrope-bold text-lg lg:text-xl 2xl:text-2xl text-black-6 dark:text-white'>
                    {title}
                </h4>
                <span className='font-manrope-regular text-sm lg:text-base 2xl:text-lg text-black-30 dark:text-gray-60'>
                    {description}
                </span>
            </div>
            <div className="">
                <span className='text-2xl lg:text-3xl 2xl:text-4xl font-manrope-semibold text-black-6 dark:text-white'>
                    ${price}
                </span>
                <span className='text-sm lg:text-base 2xl:text-lg text-black-30 dark:text-gray-60 font-manrope-medium'>
                    /month
                </span>
            </div>
            <div className="flex gap-4 2xl:gap-5 font-manrope-semibold">
                <button className='bg-gray-97 dark:bg-black-8 text-sm 2xl:text-lg border border-gray-75 dark:border-black-15 rounded-md py-3.5 2xl:py-4 text-black-6 dark:text-white w-full'>
                    Start Free Trial
                </button>
                <button className='bg-red-45 hover:bg-red-60 transition-all text-sm 2xl:text-lg rounded-md py-3.5 2xl:py-4 text-white w-full'>
                    Choose Plan
                </button>
            </div>
        </div>
    )
}