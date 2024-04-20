import React from 'react'

export default function Episodes() {
    return (
        <div className='p-6 lg:p-8 2xl:p-10 rounded-lg lg:rounded-xl bg-black-10 border border-black-15 flex flex-col gap-6 lg:gap-8 2xl:gap-10'>
            <h3 className='text-2xl font-manrope-semibold text-white'>
                Seasons and Episodes
            </h3>
            <div className="flex flex-col gap-4 lg:gap-5 bg-black-6 border border-black-15 py-8 px-12 rounded-xl">
                <div className="flex items-center justify-between">
                    <div className="flex gap-2.5 items-center">
                        <h4 className='text-2xl font-manrope-semibold text-white'>
                            Season 01
                        </h4>
                        <span className='text-lg text-gray-60 font-manrope-medium'>
                            9 Episodes
                        </span>
                    </div>
                    <div className="flex">
                        <div className="flex p-3 2xl:p-3.5 bg-black-8 border border-black-15 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 text-gray-60">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="border-t py-10">
                        Hi
                    </div>
                    <div className="border-t py-10">
                        Hi
                    </div>
                </div>
            </div>
        </div>
    )
}
