import { useTranslations } from 'next-intl'
import Image from 'next/image'

export default function HeroSection() {
    const t = useTranslations("hero-section")
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
                            <h1 className='text-black-6 dark:text-gray-99 text-3xl lg:text-5xl 2xl:text-6xl font-manrope-bold rtl:font-vazir-bold text-center'>
                                {t("headline")}
                            </h1>
                            <span className='block lg:hidden font-manrope-medium rtl:font-vazir-medium text-black-25 dark:text-gray-60 text-center text-sm'>
                                {t("description-mobile")}
                            </span>
                            <span className='hidden lg:block font-manrope-medium rtl:font-vazir-medium text-black-25 dark:text-gray-60 text-center text-sm'>
                                {t("description-desktop")}
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
