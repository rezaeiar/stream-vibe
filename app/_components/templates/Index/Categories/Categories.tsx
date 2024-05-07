"use client"
import CategoryCard from '@/app/_components/modules/CategoryCard/CategoryCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Categories() {
    return (
        <div id='categories'>
            <div className="container">
                <div className="flex flex-col gap-10 lg:gap-14 2xl:gap-20">
                    <div className="flex flex-col lg:flex-row gap-5 justify-between">
                        <div className="flex flex-col gap-2.5 2xl:gap-3.5">
                            <h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-manrope-bold text-black-6 dark:text-white'>
                                Explore our wide variety of categories
                            </h3>
                            <span className='text-sm lg:text-base 2xl:text-lg font-manrope-regular text-black-30 dark:text-gray-60'>
                                Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new
                            </span>
                        </div>
                        <div className="hidden lg:flex lg:gap-3 2xl:gap-4 items-center bg-gray-99 dark:bg-black-6 lg:p-3 2xl:p-4 border border-gray-90 dark:border-black-12 lg:rounded-lg 2xl:rounded-xl">
                            <button className="swiper-button-next flex lg:p-2.5 2xl:p-3.5 rounded-md border border-gray-90 dark:border-black-12 text-black-6 dark:text-gray-99 bg-gray-95 hover:bg-gray-97 dark:bg-black-10 dark:hover:bg-black-12 transition-colors">
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
                    <div className="gap-5 2xl:gap-8 relative">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="h-auto w-full relative"
                        >
                            <SwiperSlide className='relative bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 rounded-lg 2xl:rounded-xl p-5 lg:p-6 2xl:p-8 overflow-hidden'>
                                <CategoryCard title='Action' />
                            </SwiperSlide>
                            <SwiperSlide className='relative bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 rounded-lg 2xl:rounded-xl p-5 lg:p-6 2xl:p-8 overflow-hidden'>
                                <CategoryCard title='Adventure' />
                            </SwiperSlide>
                            <SwiperSlide className='relative bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 rounded-lg 2xl:rounded-xl p-5 lg:p-6 2xl:p-8 overflow-hidden'>
                                <CategoryCard title='Comedy' />
                            </SwiperSlide>
                            <SwiperSlide className='relative bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 rounded-lg 2xl:rounded-xl p-5 lg:p-6 2xl:p-8 overflow-hidden'>
                                <CategoryCard title='Drama' />
                            </SwiperSlide>
                            <SwiperSlide className='relative bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 rounded-lg 2xl:rounded-xl p-5 lg:p-6 2xl:p-8 overflow-hidden'>
                                <CategoryCard title='Horror' />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
