import Image from 'next/image'
import React from 'react'

export default function Cast() {
    return (
        <div className='flex flex-col gap-5 2xl:gap-8'>
            <div className="flex flex-col gap-3.5 p-6 lg:p-10 2xl:p-12 rounded-lg 2xl:rounded-xl bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 text-sm lg:text-base 2xl:text-lg font-manrope-medium">
                <h5 className='text-black-30 dark:text-gray-60'>
                    Description
                </h5>
                <span className='text-black-6 dark:text-gray-99'>
                    When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.
                </span>
            </div>
            <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-8 p-6 lg:p-10 2xl:p-12 rounded-lg 2xl:rounded-xl bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 text-sm lg:text-base 2xl:text-lg font-manrope-medium">
                <div className="flex justify-between items-center">
                    <h5 className='text-black-30 dark:text-gray-60 '>
                        Cast
                    </h5>
                    <div className="flex gap-2 lg:gap-2.5">
                        <div className="flex p-3 2xl:p-3.5 bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 text-black-30 dark:text-gray-60">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </div>
                        <div className="flex p-3 2xl:p-3.5 bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 text-black-30 dark:text-gray-60">
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
            <div className="flex flex-col gap-4 lg:gap-5 2xl:gap-8 p-6 lg:p-10 2xl:p-12 rounded-lg 2xl:rounded-xl bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 text-sm lg:text-base 2xl:text-lg font-manrope-medium">
                <div className="flex justify-between items-center">
                    <h5 className='text-black-30 dark:text-gray-60'>
                        Reviews
                    </h5>
                    <button className='bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 text-sm 2xl:text-lg rounded-md py-3.5 2xl:py-4 text-black-6 dark:text-gray-99 px-3'>
                        Add Your Review
                    </button>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2.5 2xl:gap-5">
                    <div className="bg-gray-99 dark:bg-black-6 border border-gray-75 dark:border-black-15 text-sm 2xl:text-lg rounded-md text-black-6 dark:text-gray-99 p-6 lg:p-8 2xl:p-10 flex flex-col gap-5">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <h6 className='text-black-6 dark:text-gray-99 font-manrope-medium text-base lg:text-lg 2xl:text-xl'>
                                    Aniket Roy
                                </h6>
                                <span className='text-sm lg:text-base 2xl:text-lg text-black-30 dark:text-gray-60 font-manrope-medium'>
                                    From India
                                </span>
                            </div>
                            <div className="p-1.5 bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-full flex items-center gap-1">
                                <div className="flex gap-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-45">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-45">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-45">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-45">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-45">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className='text-sm 2xl:text-lg font-manrope-medium text-black-30 dark:text-gray-60'>
                                    5
                                </span>
                            </div>
                        </div>
                        <span className='text-black-30 dark:text-gray-60 font-manrope-regular text-sm lg:text-base 2xl:text-lg'>
                            This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.
                        </span>
                    </div>
                    <div className="bg-gray-99 dark:bg-black-6 border border-gray-75 dark:border-black-15 text-sm 2xl:text-lg rounded-md text-black-6 dark:text-gray-99 p-6 lg:p-8 2xl:p-10 flex flex-col gap-5">
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <h6 className='text-black-6 dark:text-gray-99 font-manrope-medium text-base lg:text-lg 2xl:text-xl'>
                                    Aniket Roy
                                </h6>
                                <span className='text-sm lg:text-base 2xl:text-lg text-black-30 dark:text-gray-60 font-manrope-medium'>
                                    From India
                                </span>
                            </div>
                            <div className="p-1.5 bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-full flex items-center gap-1">
                                <div className="flex gap-0.5">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-45">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-45">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-45">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-45">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-red-45">
                                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <span className='text-sm 2xl:text-lg font-manrope-medium text-black-30 dark:text-gray-60'>
                                    5
                                </span>
                            </div>
                        </div>
                        <span className='text-black-30 dark:text-gray-60 font-manrope-regular text-sm lg:text-base 2xl:text-lg'>
                            This movie was recommended to me by a very dear friend who went for the movie by herself. I went to the cinemas to watch but had a houseful board so couldn’t watch it.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
