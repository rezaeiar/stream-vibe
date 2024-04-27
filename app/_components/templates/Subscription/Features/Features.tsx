import React from 'react'
import PlansTable from './PlansTable/PlansTable'
import PlansTableMobile from './PlansTableMobile/PlansTableMobile'

export default function Features() {
    return (
        <div id='features'>
            <div className="container">
                <div className="flex flex-col gap-14 2xl:gap-20">
                    <div className="flex flex-col gap-2.5 2xl:gap-3.5">
                        <h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-manrope-bold text-black-6 dark:text-white'>
                            Compare our plans and find the right one for you
                        </h3>
                        <span className='text-sm lg:text-base 2xl:text-lg font-manrope-regular text-black-30 dark:text-gray-60'>
                            StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.
                        </span>
                    </div>
                    <PlansTable />
                    <PlansTableMobile />
                </div>
            </div>
        </div>
    )
}
