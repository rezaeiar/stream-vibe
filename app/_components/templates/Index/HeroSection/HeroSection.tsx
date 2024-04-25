import Image from 'next/image'
import React from 'react'

export default function HeroSection() {
    return (
        <div className='relative bg-gray-90 dark:bg-transparent'>
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-gray-99/10 dark:from-black-6/60 via-black-6/60 to-gray-97 dark:to-black-8/100 z-10"></div>
            <Image
                src="/images/banners/hero-section.png"
                alt="video-trailer"
                width="100"
                height="100"
                sizes="100vw"
                className="h-full w-full object-cover absolute top-0 left-0 z-0"
            />
            <div className="conatiner">
                <div className="relative rounded-xl overflow-hidden text-white flex flex-col items-center justify-end px-6 py-4 gap-12 z-20">
                    <div className="pt-40 lg:pt-48">
                        <Image
                            src="/images/icons/play.svg"
                            alt="video-trailer"
                            width="100"
                            height="100"
                            sizes="100vw"
                            className="w-52 lg:w-72 2xl:w-96"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-center gap-8 lg:gap-12 2xl:gap-14 w-full">
                        <div className="flex flex-col gap-2.5 2xl:gap3.5">
                            <h1 className='text-black-6 dark:text-gray-99 text-3xl lg:text-5xl 2xl:text-6xl font-manrope-bold text-center'>
                                The Best Streaming Experience
                            </h1>
                            <span className='block lg:hidden text-black-30 dark:text-gray-60 text-center text-sm'>
                                StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.
                            </span>
                            <span className='hidden lg:block 2xl:hidden text-black-30 dark:text-gray-60 text-center text-sm'>
                                StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
                            </span>
                            <span className='hidden 2xl:block text-black-30 dark:text-gray-60 text-center text-lg'>
                                StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
                            </span>
                        </div>
                        <button className='bg-red-45 text-sm 2xl:text-lg rounded-md py-3.5 2xl:py-4 px-5 text-white w-fit'>
                            Start Watching Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
