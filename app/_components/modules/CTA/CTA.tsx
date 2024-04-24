import React from 'react'

export default function CTA() {
    return (
        <div>
            <div className="container">
                <div className="py-12 lg:py-20 2xl:py-24 px-8 lg:px-14 2xl:px-20 gap-y-12 gap-x-24 flex flex-col lg:flex-row items-center justify-center lg:justify-between rounded-xl overflow-hidden border border-gray-75 dark:border-black-15 bg-cta-pattern bg-cover relative bg-gray-90/30 dark:bg-transparent">
                    <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b lg:bg-gradient-to-r from-black-6/80 dark:from-black-6 to-red-45/30 dark:to-red-45/30"></div>
                    <div className="z-10 flex flex-col gap-2.5 2xl:gap-3.5">
                        <h3 className='text-white text-2xl lg:text-3xl 2xl:text-5xl font-manrope-bold text-center lg:text-start'>
                            Start your free trial today!
                        </h3>
                        <span className='text-gray-90 dark:text-gray-60 text-sm lg:text-base 2xl:text-lg font-manrope-regular text-center lg:text-start flex justify-center'>
                            This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
                        </span>
                    </div>
                    <button className='z-10 shrink-0 bg-red-45 text-sm 2xl:text-lg rounded-md py-3.5 2xl:py-4 px-5 2xl:px-6 text-white'>
                        Start a Free Trail
                    </button>
                </div>
            </div>
        </div>
    )
}
