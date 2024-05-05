import Image from 'next/image'
import { useTranslations } from 'next-intl'

export default function ContactForm() {
    const t = useTranslations("contact-form")
    return (
        <div id='contact-form'>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 2xl:gap-20">
                    <div className="col-span-1 flex flex-col gap-8 lg:gap-10 2xl:gap-12">
                        <div className="flex flex-col gap-2.5 2xl:gap-3.5">
                            <h3 className='font-manrope-bold rtl:font-vazir-bold text-3xl lg:text-4xl 2xl:text-5xl text-black-6 dark:text-gray-99'>
                                {t("title")}
                            </h3>
                            <p className='font-manrope-regular rtl:font-vazir-regular text-sm lg:text-base 2xl:text-lg text-black-30 dark:text-gray-60'>
                                {t("description")}
                            </p>
                        </div>
                        <div className="border-4 rounded-lg 2xl:rounded-xl aspect-square border-gray-75 dark:border-black-15 overflow-hidden">
                            <Image
                                src="/images/banners/contact-form.png"
                                alt="video-trailer"
                                width="100"
                                height="100"
                                sizes="100vw"
                                className="w-full"
                            />
                        </div>
                    </div>
                    <div className="col-span-1 lg:col-span-2 bg-gray-99 dark:bg-black-6 border border-gray-75 dark:border-black-15 rounded-xl p-6 lg:p-10 2xl:p-12 grid grid-cols-1 lg:grid-cols-2 gap-x-5 2xl:gap-x-12 gap-y-5 lg:gap-y-10 2xl:gap-y-12 h-fit">
                        <div className="flex flex-col gap-3 2xl:gap-4 text-black-6 dark:text-gray-99 col-span-2 lg:col-span-1">
                            <label htmlFor="firstname" className="text-base 2xl:text-lg font-manrope-semibold rtl:font-vazir-semibold">
                                {t("firstname")}
                            </label>
                            <input type="text" id='firstname' placeholder={t("firstname-placeholder")} className='focus:!border-red-51 outline-none p-4 2xl:p-5 text-sm 2xl:text-lg text-black-30 dark:text-gray-60 font-manrope-regular rtl:font-vazir-regular bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-md 2xl:rounded-lg' />
                        </div>
                        <div className="flex flex-col gap-3 2xl:gap-4 text-black-6 dark:text-gray-99 col-span-2 lg:col-span-1">
                            <label htmlFor="lastname" className="text-base 2xl:text-lg font-manrope-semibold rtl:font-vazir-semibold">
                                {t("lastname")}
                            </label>
                            <input type="text" id='lastname' placeholder={t("lastname-placeholder")} className='focus:!border-red-51 outline-none p-4 2xl:p-5 text-sm 2xl:text-lg text-black-30 dark:text-gray-60 font-manrope-regular rtl:font-vazir-regular bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-md 2xl:rounded-lg' />
                        </div>
                        <div className="flex flex-col gap-3 2xl:gap-4 text-black-6 dark:text-gray-99 col-span-2 lg:col-span-1">
                            <label htmlFor="email" className="text-base 2xl:text-lg font-manrope-semibold rtl:font-vazir-semibold">
                                {t("email")}
                            </label>
                            <input type="text" id='email' placeholder={t("email-placeholder")} className='focus:!border-red-51 outline-none p-4 2xl:p-5 text-sm 2xl:text-lg text-black-30 dark:text-gray-60 font-manrope-regular rtl:font-vazir-regular bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-md 2xl:rounded-lg' />
                        </div>
                        <div className="flex flex-col gap-3 2xl:gap-4 text-black-6 dark:text-gray-99 col-span-2 lg:col-span-1">
                            <label htmlFor="phone-number" className="text-base 2xl:text-lg font-manrope-semibold rtl:font-vazir-semibold">
                                {t("phone-number")}
                            </label>
                            <input type="text" id='phone-number' placeholder={t("phone-number-placeholder")} className='focus:!border-red-51 outline-none p-4 2xl:p-5 text-sm 2xl:text-lg text-black-30 dark:text-gray-60 font-manrope-regular rtl:font-vazir-regular bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-md 2xl:rounded-lg' />
                        </div>
                        <div className="flex flex-col gap-3 2xl:gap-4 text-black-6 dark:text-gray-99 col-span-2 lg:col-span-2">
                            <label htmlFor="message" className="text-base 2xl:text-lg font-manrope-semibold rtl:font-vazir-semibold">
                                {t("message")}
                            </label>
                            <textarea id="message" className='focus:!border-red-51 outline-none p-4 2xl:p-5 text-sm 2xl:text-lg text-black-30 dark:text-gray-60 font-manrope-regular rtl:font-vazir-regular bg-gray-97 dark:bg-black-8 border border-gray-75 dark:border-black-15 rounded-md 2xl:rounded-lg aspect-[5/1] resize-none' placeholder={t("message-placeholder")}></textarea>
                        </div>
                        <div className="flex flex-col lg:flex-row gap-y-5 justify-between lg:items-center col-span-2">
                            <div className="text-black-30 dark:text-gray-60 font-manrope-regular rtl:font-vazir-regular text-base 2xl:text-lg flex gap-2 2xl:gap-2.5">
                                <input type="checkbox" id="checkbox" />
                                <label htmlFor='checkbox'>
                                    {t("checkbox")}
                                </label>
                            </div>
                            <button className='bg-red-45 text-sm 2xl:text-lg rounded-md py-3.5 2xl:py-4 px-5 text-gray-99 lg:w-fit font-manrope-regular rtl:font-vazir-regular'>
                                {t("button")}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
