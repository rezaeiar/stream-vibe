import Image from 'next/image'
import React from 'react'

export default function Cast() {
    return (
        <div className='flex flex-col gap-5 2xl:gap-8'>
            <div className="flex flex-col gap-3.5 p-6 lg:p-10 2xl:p-12 rounded-lg 2xl:rounded-xl bg-black-10 border border-black-15 text-sm lg:text-base 2xl:text-lg font-manrope-medium">
                <h5 className='text-gray-60'>
                    Description
                </h5>
                <span className='text-white'>
                    When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
                </span>
            </div>
            <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-8 p-6 lg:p-10 2xl:p-12 rounded-lg 2xl:rounded-xl bg-black-10 border border-black-15 text-sm lg:text-base 2xl:text-lg font-manrope-medium">
                <div className="flex justify-between items-center">
                    <h5 className='text-gray-60'>
                        Cast
                    </h5>
                    <div className="flex gap-2 lg:gap-2.5">
                        <div className="flex p-3 2xl:p-3.5 bg-black-8 border border-black-15 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 text-gray-60">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </div>
                        <div className="flex p-3 2xl:p-3.5 bg-black-8 border border-black-15 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 text-gray-60">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-4 lg:grid-cols-8 gap-2.5 2xl:gap-5">
                    <div className="aspect-square">
                        <Image
                            src="/images/assets/cast.png"
                            alt="logo-mobile"
                            width="100"
                            height="100"
                            sizes="100vw"
                            className="w-full"
                        />
                    </div>
                    <div className="aspect-square">
                        <Image
                            src="/images/assets/cast.png"
                            alt="logo-mobile"
                            width="100"
                            height="100"
                            sizes="100vw"
                            className="w-full"
                        />
                    </div>
                    <div className="aspect-square">
                        <Image
                            src="/images/assets/cast.png"
                            alt="logo-mobile"
                            width="100"
                            height="100"
                            sizes="100vw"
                            className="w-full"
                        />
                    </div>
                    <div className="aspect-square">
                        <Image
                            src="/images/assets/cast.png"
                            alt="logo-mobile"
                            width="100"
                            height="100"
                            sizes="100vw"
                            className="w-full"
                        />
                    </div>
                    <div className="aspect-square">
                        <Image
                            src="/images/assets/cast.png"
                            alt="logo-mobile"
                            width="100"
                            height="100"
                            sizes="100vw"
                            className="w-full"
                        />
                    </div>
                    <div className="aspect-square">
                        <Image
                            src="/images/assets/cast.png"
                            alt="logo-mobile"
                            width="100"
                            height="100"
                            sizes="100vw"
                            className="w-full"
                        />
                    </div>
                    <div className="aspect-square">
                        <Image
                            src="/images/assets/cast.png"
                            alt="logo-mobile"
                            width="100"
                            height="100"
                            sizes="100vw"
                            className="w-full"
                        />
                    </div>
                    <div className="aspect-square">
                        <Image
                            src="/images/assets/cast.png"
                            alt="logo-mobile"
                            width="100"
                            height="100"
                            sizes="100vw"
                            className="w-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
