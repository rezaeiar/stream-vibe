"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTranslations } from 'next-intl';
import TrendingCard from '@/app/_components/modules/TrendingCard/TrendingCard';

export default function Trending() {
    const t = useTranslations("trending")
    return (
        <div id='categories'>
            <div className="container">
                <div className="flex flex-col gap-10 lg:gap-14 2xl:gap-20">
                    <div className="flex flex-col lg:flex-row gap-5 justify-between">
                        <div className="flex flex-col gap-2.5 2xl:gap-3.5">
                            <h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-manrope-bold rtl:font-vazir-bold text-black-6 dark:text-white'>
                                {t("title")}
                            </h3>
                        </div>
                        <div className="hidden lg:flex lg:gap-3 2xl:gap-4 items-center bg-gray-99 dark:bg-black-6 lg:p-3 2xl:p-4 border border-gray-90 dark:border-black-12 lg:rounded-lg 2xl:rounded-xl">
                            <button className="trending-prev disabled:bg-gray-97 dark:disabled:bg-black-8 flex lg:p-2.5 2xl:p-3.5 rounded-md border border-gray-90 dark:border-black-12 text-black-6 dark:text-gray-99 bg-gray-95 hover:bg-gray-97 dark:bg-black-10 dark:hover:bg-black-12 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 2xl:h-7 2xl:w-7 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                                </svg>
                            </button>
                            <div id='trending-pagination' className="flex gap-1"></div>
                            <button className="trending-next disabled:bg-gray-97 dark:disabled:bg-black-8 flex lg:p-2.5 2xl:p-3.5 rounded-md border border-gray-90 dark:border-black-12 text-black-6 dark:text-gray-99 bg-gray-95 hover:bg-gray-97 dark:bg-black-10 dark:hover:bg-black-12 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 2xl:h-7 2xl:w-7 rtl:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="gap-5 2xl:gap-8 relative">
                        <Swiper
                            slidesPerView={2}
                            spaceBetween={30}
                            pagination={{
                                el: "#trending-pagination",
                                type: "bullets",
                                bulletClass: "h-1 w-4 bg-gray-70 dark:bg-black-20 rounded-full",
                                bulletActiveClass: "h-1 w-5 bg-red-45 dark:bg-red-45",
                                clickable: true,
                            }}
                            navigation={{
                                prevEl: '.trending-prev',
                                nextEl: '.trending-next',
                            }}
                            breakpoints={{
                                1024: {
                                    slidesPerView: 4
                                },
                                1536: {
                                    width: 1024,
                                    slidesPerView: 5,
                                },
                            }}
                            modules={[Pagination, Navigation]}
                            className="h-auto w-full relative"
                        >
                            <SwiperSlide className='relative bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 rounded-lg 2xl:rounded-xl p-5 lg:p-6 2xl:p-8 overflow-hidden flex flex-col gap-3 lg:gap-4 2xl:gap-5'>
                                <TrendingCard time='1h 30min' view={2} />
                            </SwiperSlide>
                            <SwiperSlide className='relative bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 rounded-lg 2xl:rounded-xl p-5 lg:p-6 2xl:p-8 overflow-hidden flex flex-col gap-3 lg:gap-4 2xl:gap-5'>
                                <TrendingCard time='1h 10min' view={2} />
                            </SwiperSlide>
                            <SwiperSlide className='relative bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 rounded-lg 2xl:rounded-xl p-5 lg:p-6 2xl:p-8 overflow-hidden flex flex-col gap-3 lg:gap-4 2xl:gap-5'>
                                <TrendingCard time='2h 30min' view={5} />
                            </SwiperSlide>
                            <SwiperSlide className='relative bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 rounded-lg 2xl:rounded-xl p-5 lg:p-6 2xl:p-8 overflow-hidden flex flex-col gap-3 lg:gap-4 2xl:gap-5'>
                                <TrendingCard time='3h 30min' view={3} />
                            </SwiperSlide>
                            <SwiperSlide className='relative bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 rounded-lg 2xl:rounded-xl p-5 lg:p-6 2xl:p-8 overflow-hidden flex flex-col gap-3 lg:gap-4 2xl:gap-5'>
                                <TrendingCard time='1h' view={2} />
                            </SwiperSlide>
                            <SwiperSlide className='relative bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 rounded-lg 2xl:rounded-xl p-5 lg:p-6 2xl:p-8 overflow-hidden flex flex-col gap-3 lg:gap-4 2xl:gap-5'>
                                <TrendingCard time='1h 50min' view={2} />
                            </SwiperSlide>
                            <SwiperSlide className='relative bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 rounded-lg 2xl:rounded-xl p-5 lg:p-6 2xl:p-8 overflow-hidden flex flex-col gap-3 lg:gap-4 2xl:gap-5'>
                                <TrendingCard time='1h 10min' view={2} />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}
