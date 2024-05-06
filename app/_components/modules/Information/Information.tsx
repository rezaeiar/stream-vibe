import Image from 'next/image'
import { useTranslations } from 'next-intl'
import React from 'react'

export default function Information() {
    const t = useTranslations("information")
    return (
        <div className='p-6 lg:p-10 2xl:p-12 bg-gray-95 dark:bg-black-10 rounded-lg lg:rounded-xl border border-gray-75 dark:border-black-15 flex flex-col gap-6 lg:gap-8 2xl:gap-10 sticky top-4'>
            <div className="flex flex-col gap-2.5">
                <div className="flex text-black-30 dark:text-gray-60 items-center gap-0.5 text-sm lg:text-base 2xl:text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    <span className='font-manrope-medium rtl:font-vazir-medium'>
                        {t("Released Year")}
                    </span>
                </div>
                <span className='text-black-6 dark:text-gray-99 font-manrope-semibold rtl:font-vazir-semibold 2xl:text-xl'>
                    2013
                </span>
            </div>
            <div className="flex flex-col gap-2.5">
                <div className="flex text-black-30 dark:text-gray-60 items-center gap-0.5 text-sm lg:text-base 2xl:text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                    </svg>
                    <span className='font-manrope-medium rtl:font-vazir-medium'>
                        {t("Available Languages")}
                    </span>
                </div>
                <span className='flex gap-2.5 w-full flex-wrap text-sm lg:text-base 2xl:text-lg'>
                    <div className="bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-md py-1.5 px-3 2xl:py-2 2xl:px-3.5 text-black-6 dark:text-gray-99 font-manrope-medium rtl:font-vazir-medium">
                        {t("India")}
                    </div>
                    <div className="bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-md py-1.5 px-3 2xl:py-2 2xl:px-3.5 text-black-6 dark:text-gray-99 font-manrope-medium rtl:font-vazir-medium">
                        {t("English")}
                    </div>
                    <div className="bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-md py-1.5 px-3 2xl:py-2 2xl:px-3.5 text-black-6 dark:text-gray-99 font-manrope-medium rtl:font-vazir-medium">
                        {t("Kannada")}
                    </div>
                    <div className="bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-md py-1.5 px-3 2xl:py-2 2xl:px-3.5 text-black-6 dark:text-gray-99 font-manrope-medium rtl:font-vazir-medium">
                        {t("Persian")}
                    </div>
                    <div className="bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-md py-1.5 px-3 2xl:py-2 2xl:px-3.5 text-black-6 dark:text-gray-99 font-manrope-medium rtl:font-vazir-medium">
                        {t("Turkey")}
                    </div>
                </span>
            </div>
            <div className="flex flex-col gap-2.5">
                <div className="flex text-black-30 dark:text-gray-60 items-center gap-0.5 text-sm lg:text-base 2xl:text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                    </svg>
                    <span className='font-manrope-medium rtl:font-vazir-medium'>
                        {t("Ratings")}
                    </span>
                </div>
                <div className='gap-4 2xl:gap-5 grid grid-cols-2'>
                    <div className="bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-md p-3 lg:p-3.5 2xl:p-4 gap-0.5 lg:gap-1 text-black-6 dark:text-gray-99 font-manrope-medium rtl:font-vazir-medium flex flex-col">
                        <span className='text-black-6 dark:text-gray-99 font-manrope-semibold rtl:font-vazir-semibold text-sm lg:text-base 2xl:text-lg'>
                            IMDb
                        </span>
                        <div className=" rounded-full flex items-center gap-1">
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
                            <span className='text-lg font-manrope-medium rtl:font-vazir-medium text-black-30 dark:text-gray-60'>
                                5
                            </span>
                        </div>
                    </div>
                    <div className="bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-md p-3 lg:p-3.5 2xl:p-4 gap-0.5 lg:gap-1 text-black-6 dark:text-gray-99 font-manrope-medium rtl:font-vazir-medium flex flex-col">
                        <span className='text-black-6 dark:text-gray-99 font-manrope-semibold rtl:font-vazir-semibold text-sm lg:text-base 2xl:text-lg'>
                            IMDb
                        </span>
                        <div className=" rounded-full flex items-center gap-1">
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
                            <span className='text-lg font-manrope-medium rtl:font-vazir-medium text-black-30 dark:text-gray-60'>
                                5
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2.5">
                <div className="flex text-black-30 dark:text-gray-60 items-center gap-0.5 text-sm lg:text-base 2xl:text-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
                    </svg>
                    <span className='font-manrope-medium rtl:font-vazir-medium'>
                        {t("Gernes")}
                    </span>
                </div>
                <span className='flex gap-2.5 w-full flex-wrap'>
                    <div className="bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-md py-1.5 px-3 2xl:py-2 2xl:px-3.5 text-black-6 dark:text-gray-99 font-manrope-medium rtl:font-vazir-medium">
                        {t("India")}
                    </div>
                    <div className="bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-md py-1.5 px-3 2xl:py-2 2xl:px-3.5 text-black-6 dark:text-gray-99 font-manrope-medium rtl:font-vazir-medium">
                        {t("English")}
                    </div>
                </span>
            </div>
            <div className="flex flex-col gap-2.5">
                <div className="flex text-black-30 dark:text-gray-60 items-center gap-0.5 text-sm lg:text-base 2xl:text-lg">
                    <span className='font-manrope-medium rtl:font-vazir-medium'>
                        {t("Music")}
                    </span>
                </div>
                <div className="bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-md py-1.5 px-3 flex gap-2.5">
                    <div className="overflow-hidden w-14">
                        <Image
                            src="/images/assets/music.jpg"
                            alt="logo-mobile"
                            width="100"
                            height="100"
                            sizes="100vw"
                            className="rounded-lg w-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h6 className='font-manrope-medium rtl:font-vazir-medium 2xl:text-lg text-black-6 dark:text-gray-99'>
                            {t("The Duffer Brothers")}
                        </h6>
                        <span className='font-manrope-medium rtl:font-vazir-medium text-black-30 dark:text-gray-60 text-sm 2xl:text-base'>
                            {t("From USA")}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2.5">
                <div className="flex text-black-30 dark:text-gray-60 items-center gap-0.5 text-sm lg:text-base 2xl:text-lg">
                    <span className='font-manrope-medium rtl:font-vazir-medium'>
                        {t("Director")}
                    </span>
                </div>
                <div className="bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-md py-1.5 px-3 flex gap-2.5">
                    <div className="overflow-hidden w-14">
                        <Image
                            src="/images/assets/music.jpg"
                            alt="logo-mobile"
                            width="100"
                            height="100"
                            sizes="100vw"
                            className="rounded-lg w-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h6 className='font-manrope-medium rtl:font-vazir-medium 2xl:text-lg text-black-6 dark:text-gray-99'>
                            {t("The Duffer Brothers")}
                        </h6>
                        <span className='font-manrope-medium rtl:font-vazir-medium text-black-30 dark:text-gray-60 text-sm 2xl:text-base'>
                            {t("From USA")}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
