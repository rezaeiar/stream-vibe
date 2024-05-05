import React from 'react'
import PlansTable from '../FeaturesTable/FeaturesTable'
import PlansTableMobile from '../PlansTableMobile/PlansTableMobile'
import { useTranslations } from 'next-intl'

export default function Features() {
    const t = useTranslations("features")
    return (
        <div id='features'>
            <div className="container">
                <div className="flex flex-col gap-14 2xl:gap-20">
                    <div className="flex flex-col gap-2.5 2xl:gap-3.5">
                        <h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-manrope-bold rtl:font-vazir-bold text-black-6 dark:text-white'>
                            {t("title")}
                        </h3>
                        <span className='text-sm lg:text-base 2xl:text-lg font-manrope-regular rtl:font-vazir-regular text-black-30 dark:text-gray-60'>
                            {t("description")}
                        </span>
                    </div>
                    <PlansTable />
                    <PlansTableMobile />
                </div>
            </div>
        </div>
    )
}
