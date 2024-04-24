import React from 'react'
import Link from 'next/link'
import PlanCard from '../PlanCard/PlanCard'

export default function Plans() {
    return (
        <div id='plans'>
            <div className="container">
                <div className="flex flex-col gap-10 lg:gap-14 2xl:gap-20">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="flex flex-col gap-2.5 2xl:gap-3.5">
                            <h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-manrope-bold text-black-6 dark:text-white'>
                                Choose the plan that's right for you
                            </h3>
                            <span className='text-sm lg:text-base 2xl:text-lg font-manrope-regular text-black-30 dark:text-gray-60'>
                                Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!
                            </span>
                        </div>
                        <div className="w-fit h-fit shrink-0 self-end border bg-gray-99 dark:bg-black-6 border-gray-90 dark:border-black-12 py-2 2xl:py-2.5 px-2 2xl:px-2.5 rounded-xl">
                            <ul className="flex text-sm 2xl:text-lg gap-2 2xl:gap-2.5">
                                <li>
                                    <Link href='/' className="block py-3 2xl:py-3.5 px-5 2xl:px-6 text-black-15 dark:text-gray-75 rounded-lg transition-colors hover:text-black-6 dark:hover:text-white hover:bg-gray-95 dark:hover:bg-black-10">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className="block py-3 2xl:py-3.5 px-5 2xl:px-6 text-black-15 dark:text-gray-75 rounded-lg transition-colors hover:text-black-6 dark:hover:text-white hover:bg-gray-95 dark:hover:bg-black-10">
                                        Movies & Shows
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 2xl:gap-8">
                        <PlanCard title="Basic Plan" description="Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles." price={9.99} />
                        <PlanCard title="Standard Plan" description="Access to a wider selection of movies and shows, including most new releases and exclusive content" price={12.99} />
                        <PlanCard title="Premium Plan" description="Access to a widest selection of movies and shows, including all new releases and Offline Viewing" price={14.99} />
                    </div>
                </div>
            </div>
        </div>
    )
}
