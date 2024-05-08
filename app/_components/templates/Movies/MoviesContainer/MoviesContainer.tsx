import NewReleaseCard from '@/app/_components/modules/NewReleaseCard/NewReleaseCard'
import PopularCard from '@/app/_components/modules/PopularCard/PopularCard'
import TrendingCard from '@/app/_components/modules/TrendingCard/TrendingCard'
import OurGenres from '@/app/_components/modules/OurGenres/OurGenres'
import { useTranslations } from 'next-intl'
import Popular from '../Popular/Popular'

export default function MoviesContainer() {
    const t = useTranslations("movies-container")
    return (
        <div>
            <div className="container">
                <div className='relative lg:border border-gray-75 dark:border-black-15 rounded-xl p-0 lg:p-10 2xl:p-12 flex flex-col gap-28'>
                    <button className='absolute hidden lg:block -top-6 left-12 rtl:right-12 bg-red-45 text-sm 2xl:text-lg rounded-md py-3.5 2xl:py-4 px-5 text-gray-99 w-fit font-manrope-medium rtl:font-vazir-medium'>
                        {t("Movies")}
                    </button>
                    <OurGenres title='Our Genres' />
                    <Popular />
                    <div className="flex flex-col gap-10 lg:gap-14 2xl:gap-20">
                        <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">
                            <h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-manrope-bold text-black-6 dark:text-gray-99'>
                                Trending Now
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
                            <TrendingCard time='1h 30min' view={2} />
                            <TrendingCard time='1h 10min' view={5} />
                            <TrendingCard time='2h 40min' view={12} />
                            <TrendingCard time='2h 10min' view={1} />
                            <TrendingCard time='1h' view={18} />
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 lg:gap-14 2xl:gap-20">
                        <div className="flex flex-col lg:flex-row gap-5 items-center justify-between">
                            <h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-manrope-bold text-black-6 dark:text-gray-99'>
                                New Releases
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
                            <NewReleaseCard dateOfRelease='13 April 2023' />
                            <NewReleaseCard dateOfRelease='15 June 2003' />
                            <NewReleaseCard dateOfRelease='13 March 2018' />
                            <NewReleaseCard dateOfRelease='12 April 2023' />
                            <NewReleaseCard dateOfRelease='30 Mey 2010' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}