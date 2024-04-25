import { FAQCardProps } from '@/app/_types/components/FAQCard/FAQCard.types'
import React from 'react'

export default function FAQCard({ index, title }: FAQCardProps) {
    return (
        <li className='flex items-center justify-between py-5 lg:py-6 2xl:py-8 relative'>
            <div className="flex items-center gap-4 2xl:gap-6">
                <div className="bg-gray-90 dark:bg-black-12 border border-gray-75 dark:border-black-15 rounded-md lg:rounded-lg 2xl:rounded-xl font-manrope-semibold text-base lg:text-lg 2xl:text-xl text-black-6 dark:text-gray-99 aspect-square text-center flex items-center justify-center w-12 lg:w-14 2xl:w-16">
                    {index + 1}
                </div>
                <span className='font-manrope-medium text-lg lg:text-xl 2xl:text-2xl text-black-6 dark:text-gray-99'>
                    {title}
                </span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 2xl:h-8 2xl:w-8 text-black-6 dark:text-gray-99">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <div className="h-px w-full absolute bottom-0 left-0 bg-gradient-to-r from-red-45/0 via-red-45/100 to-red-45/0"></div>
        </li>
    )
}
