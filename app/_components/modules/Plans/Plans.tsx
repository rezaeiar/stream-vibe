"use client"
import { useTranslations } from 'next-intl'
import PlanCard from '../PlanCard/PlanCard'
import { useState } from 'react'

export default function Plans() {
    const t = useTranslations("plans")
    const [subscriptionType, setSubscriptionType] = useState("monthly")
    return (
        <div id='plans'>
            <div className="container">
                <div className="flex flex-col gap-10 lg:gap-14 2xl:gap-20">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div className="flex flex-col gap-2.5 2xl:gap-3.5">
                            <h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-manrope-bold rtl:font-vazir-bold text-black-6 dark:text-white'>
                                {t("title")}
                            </h3>
                            <span className='text-sm lg:text-base 2xl:text-lg font-manrope-regular rtl:font-vazir-regular text-black-30 dark:text-gray-60'>
                                {t("description")}
                            </span>
                        </div>
                        <div className="w-fit h-fit shrink-0 self-end border bg-gray-99 dark:bg-black-6 border-gray-90 dark:border-black-12 py-2 2xl:py-2.5 px-2 2xl:px-2.5 rounded-xl">
                            <ul className="flex text-sm 2xl:text-lg gap-2 2xl:gap-2.5 font-manrope-medium rtl:font-vazir-medium">
                                <li>
                                    <button className={`block py-3 2xl:py-3.5 px-5 2xl:px-6 text-black-15 dark:text-gray-75 rounded-lg transition-colors hover:text-black-6 dark:hover:text-white hover:bg-gray-95 dark:hover:bg-black-10 ${subscriptionType === "monthly" ? "bg-gray-95 ": "dark:bg-black-10"}`} onClick={() => setSubscriptionType("monthly")}>
                                        {t("Monthly")}
                                    </button>
                                </li>
                                <li>
                                    <button className={`block py-3 2xl:py-3.5 px-5 2xl:px-6 text-black-15 dark:text-gray-75 rounded-lg transition-colors hover:text-black-6 dark:hover:text-white hover:bg-gray-95 dark:hover:bg-black-10 ${subscriptionType === "yearly" ? "bg-gray-95 ": "dark:bg-black-10"}`} onClick={() => setSubscriptionType("yearly")}>
                                        {t("Yearly")}
                                    </button>
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
