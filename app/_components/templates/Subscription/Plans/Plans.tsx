import React from 'react'
import PlansTable from './PlansTable/PlansTable'

export default function Plans() {
    return (
        <div className='hidden lg:block'>
            <div className="container">
                <div className="flex flex-col gap-14 2xl:gap-20">
                    <div className="flex flex-col gap-2.5 2xl:gap-3.5">
                        <h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-manrope-bold text-white'>
                            We Provide you streaming experience across various devices.
                        </h3>
                        <span className='text-sm lg:text-base 2xl:text-lg font-manrope-regular text-gray-60'>
                            With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere.
                        </span>
                    </div>
                    <PlansTable />
                </div>
            </div>
        </div>
    )
}
