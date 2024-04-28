import CategoryCard from '@/app/_components/modules/CategoryCard/CategoryCard'
import PopularCard from '@/app/_components/modules/PopularCard/PopularCard'
import React from 'react'

export default function MoviesContainer() {
    return (
        <div className="">
            <div className="container">
                <div className='relative border border-gray-75 dark:border-black-15 rounded-xl p-12 flex flex-col gap-28'>
                    <button className='absolute -top-6 left-12 bg-red-45 text-sm 2xl:text-lg rounded-md py-3.5 2xl:py-4 px-5 text-gray-99 w-fit'>
                        Movies
                    </button>
                    <div className="flex flex-col gap-10 lg:gap-14 2xl:gap-20">
                        <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">
                            <h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-manrope-bold text-black-6 dark:text-gray-99'>
                                Our Genres
                            </h3>
                            <div className="hidden lg:flex lg:gap-3 2xl:gap-4 items-center bg-gray-99 dark:bg-black-6 lg:p-3 2xl:p-4 border border-gray-90 dark:border-black-12 lg:rounded-lg 2xl:rounded-xl">
                                <button className="flex lg:p-2.5 2xl:p-3.5 rounded-md border border-gray-90 dark:border-black-12 text-black-6 dark:text-gray-99 bg-gray-95 hover:bg-gray-97 dark:bg-black-10 dark:hover:bg-black-12 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 2xl:h-7 2xl:w-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                    </svg>
                                </button>
                                <div className="flex gap-1">
                                    <div className="h-1 w-4 bg-gray-70 dark:bg-black-20 rounded-full"></div>
                                    <div className="h-1 w-5 bg-red-45 rounded-full"></div>
                                    <div className="h-1 w-4 bg-gray-70 dark:bg-black-20 rounded-full"></div>
                                    <div className="h-1 w-4 bg-gray-70 dark:bg-black-20 rounded-full"></div>
                                </div>
                                <button className="flex lg:p-2.5 2xl:p-3.5 rounded-md border border-gray-90 dark:border-black-12 text-black-6 dark:text-gray-99 bg-gray-95 hover:bg-gray-97 dark:bg-black-10 dark:hover:bg-black-12 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 2xl:h-7 2xl:w-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 2xl:gap-8">
                            <CategoryCard title='Action' />
                            <CategoryCard title='Adventure' />
                            <CategoryCard title='Comedy' />
                            <CategoryCard title='Drama' />
                            <CategoryCard title='Horror' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 lg:gap-14 2xl:gap-20">
                        <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">
                            <h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-manrope-bold text-black-6 dark:text-gray-99'>
                                Popular Top 10 In Genres
                            </h3>
                            <div className="hidden lg:flex lg:gap-3 2xl:gap-4 items-center bg-gray-99 dark:bg-black-6 lg:p-3 2xl:p-4 border border-gray-90 dark:border-black-12 lg:rounded-lg 2xl:rounded-xl">
                                <button className="flex lg:p-2.5 2xl:p-3.5 rounded-md border border-gray-90 dark:border-black-12 text-black-6 dark:text-gray-99 bg-gray-95 hover:bg-gray-97 dark:bg-black-10 dark:hover:bg-black-12 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 2xl:h-7 2xl:w-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                    </svg>
                                </button>
                                <div className="flex gap-1">
                                    <div className="h-1 w-4 bg-gray-70 dark:bg-black-20 rounded-full"></div>
                                    <div className="h-1 w-5 bg-red-45 rounded-full"></div>
                                    <div className="h-1 w-4 bg-gray-70 dark:bg-black-20 rounded-full"></div>
                                    <div className="h-1 w-4 bg-gray-70 dark:bg-black-20 rounded-full"></div>
                                </div>
                                <button className="flex lg:p-2.5 2xl:p-3.5 rounded-md border border-gray-90 dark:border-black-12 text-black-6 dark:text-gray-99 bg-gray-95 hover:bg-gray-97 dark:bg-black-10 dark:hover:bg-black-12 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 2xl:h-7 2xl:w-7">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-5 2xl:gap-8">
                            <PopularCard title='Action' />
                            <PopularCard title='Adventure' />
                            <PopularCard title='Comedy' />
                            <PopularCard title='Drama' />
                            <PopularCard title='Horror' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}