import Image from 'next/image'
import React from 'react'

export default function Episodes() {
    return (
        <div className='p-6 lg:p-8 2xl:p-10 rounded-lg lg:rounded-xl bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 flex flex-col gap-6 lg:gap-8 2xl:gap-10'>
            <h3 className='text-lg lg:text-xl 2xl:text-2xl font-manrope-semibold text-black-6 dark:text-gray-99'>
                Seasons and Episodes
            </h3>
            <div className="flex flex-col gap-4 2xl:gap-5">
                <div className="flex flex-col gap-4 lg:gap-5 bg-gray-99 dark:bg-black-6 border border-gray-75 dark:border-black-15 py-7 2xl:py-8 px-5 lg:px-10 2xl:px-12 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2.5 items-center">
                            <h4 className='text-base lg:text-xl 2xl:text-2xl font-manrope-semibold text-black-6 dark:text-gray-99'>
                                Season 01
                            </h4>
                            <span className='text-sm lg:text-base 2xl:text-lg text-black-30 dark:text-gray-60 font-manrope-medium'>
                                9 Episodes
                            </span>
                        </div>
                        <div className="flex">
                            <div className="flex p-3 2xl:p-3.5 bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 text-black-30 dark:text-gray-60">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <div className="border-t border-gray-75 dark:border-black-15 py-5 lg:py-8 2xl:py-10 flex flex-col lg:flex-row gap-4">
                            <div className="flex items-center gap-4">
                                <span className='font-semibold text-2xl text-black-30 dark:text-gray-60'>
                                    01
                                </span>
                                <div className="w-full lg:w-36">
                                    <Image
                                        src="/images/assets/episode.jpg"
                                        alt="video-trailer"
                                        width="100"
                                        height="100"
                                        sizes="100vw"
                                        className="rounded-xl border border-gray-75 dark:border-black-15 w-full"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-col justify-center gap-2.5 2xl:gap-3.5">
                                    <h3 className='font-manrope-semibold text-base lg:text-lg 2xl:text-xl text-black-6 dark:text-gray-99'>
                                        Chapter One : The Vanishing of Will Byers
                                    </h3>
                                    <span className='font-manrope-regular text-black-30 dark:text-gray-60 text-base 2xl:text-lg hidden lg:block'>
                                        Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-75 dark:border-black-15 py-5 lg:py-8 2xl:py-10 flex flex-col lg:flex-row gap-4">
                            <div className="flex items-center gap-4">
                                <span className='font-semibold text-2xl text-black-30 dark:text-gray-60'>
                                    02
                                </span>
                                <div className="w-full lg:w-36">
                                    <Image
                                        src="/images/assets/episode.jpg"
                                        alt="video-trailer"
                                        width="100"
                                        height="100"
                                        sizes="100vw"
                                        className="rounded-xl border border-gray-75 dark:border-black-15 w-full"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-col justify-center gap-2.5 2xl:gap-3.5">
                                    <h3 className='font-manrope-semibold text-base lg:text-lg 2xl:text-xl text-black-6 dark:text-gray-99'>
                                        Chapter One : The Vanishing of Will Byers
                                    </h3>
                                    <span className='font-manrope-regular text-black-30 dark:text-gray-60 text-base 2xl:text-lg hidden lg:block'>
                                        Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 lg:gap-5 bg-gray-99 dark:bg-black-6 border border-gray-75 dark:border-black-15 py-7 2xl:py-8 px-5 lg:px-10 2xl:px-12 rounded-xl">
                    <div className="flex items-center justify-between">
                        <div className="flex gap-2.5 items-center">
                            <h4 className='text-base lg:text-xl 2xl:text-2xl font-manrope-semibold text-black-6 dark:text-gray-99'>
                                Season 01
                            </h4>
                            <span className='text-sm lg:text-base 2xl:text-lg text-black-30 dark:text-gray-60 font-manrope-medium'>
                                9 Episodes
                            </span>
                        </div>
                        <div className="flex">
                            <div className="flex p-3 2xl:p-3.5 bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 text-black-30 dark:text-gray-60">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="hidden flex-col">
                        <div className="border-t border-gray-75 dark:border-black-15 py-5 lg:py-8 2xl:py-10 flex flex-col lg:flex-row gap-4">
                            <div className="flex items-center gap-4">
                                <span className='font-semibold text-2xl text-black-30 dark:text-gray-60'>
                                    01
                                </span>
                                <div className="w-full lg:w-36">
                                    <Image
                                        src="/images/assets/episode.jpg"
                                        alt="video-trailer"
                                        width="100"
                                        height="100"
                                        sizes="100vw"
                                        className="rounded-xl border border-gray-75 dark:border-black-15 w-full"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-col justify-center gap-2.5 2xl:gap-3.5">
                                    <h3 className='font-manrope-semibold text-base lg:text-lg 2xl:text-xl text-black-6 dark:text-gray-99'>
                                        Chapter One : The Vanishing of Will Byers
                                    </h3>
                                    <span className='font-manrope-regular text-black-30 dark:text-gray-60 text-base 2xl:text-lg hidden lg:block'>
                                        Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-gray-75 dark:border-black-15 py-5 lg:py-8 2xl:py-10 flex flex-col lg:flex-row gap-4">
                            <div className="flex items-center gap-4">
                                <span className='font-semibold text-2xl text-black-30 dark:text-gray-60'>
                                    02
                                </span>
                                <div className="w-full lg:w-36">
                                    <Image
                                        src="/images/assets/episode.jpg"
                                        alt="video-trailer"
                                        width="100"
                                        height="100"
                                        sizes="100vw"
                                        className="rounded-xl border border-gray-75 dark:border-black-15 w-full"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <div className="flex flex-col justify-center gap-2.5 2xl:gap-3.5">
                                    <h3 className='font-manrope-semibold text-base lg:text-lg 2xl:text-xl text-black-6 dark:text-gray-99'>
                                        Chapter One : The Vanishing of Will Byers
                                    </h3>
                                    <span className='font-manrope-regular text-black-30 dark:text-gray-60 text-base 2xl:text-lg hidden lg:block'>
                                        Lucas, Mike and Dustin try to talk to the girl they found in the woods. Hopper questions an anxious Joyce about an unsettling phone call.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
