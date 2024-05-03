import { useTranslations } from 'next-intl'
import FAQCard from '../FAQCard/FAQCard'

export default function FAQ() {
    const t = useTranslations("faq")
    return (
        <div id='faq'>
            <div className="container">
                <div className="flex flex-col gap-10 lg:gap-14 2xl:gap-20">
                    <div className="flex justify-between items-end gap-5">
                        <div className="flex flex-col gap-2.5 2xl:gap-3.5">
                            <h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-manrope-bold rtl:font-vazir-bold text-black-6 dark:text-white'>
                                {t("title")}
                            </h3>
                            <span className='text-sm lg:text-base 2xl:text-lg font-manrope-regular rtl:font-vazir-regular text-black-30 dark:text-gray-60'>
                                {t("description")}
                            </span>
                        </div>
                        <button className='bg-red-45 text-sm 2xl:text-lg font-manrope-medium rtl:font-vazir-medium rounded-md py-3.5 2xl:py-4 px-5 text-white lg:w-fit'>
                            {t("button")}
                        </button>
                    </div>
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 2xl:gap-x-20'>
                        <div className="flex flex-col">
                            <FAQCard index={0} question='first-question' answer='first-answer' />
                            <FAQCard index={1} question='second-question' answer='first-answer' />
                            <FAQCard index={2} question='third-question' answer='first-answer' />
                            <FAQCard index={3} question='fourth-question' answer='first-answer' />
                        </div>
                        <div className="flex flex-col">
                            <FAQCard index={4} question='fifth-question' answer='first-answer' />
                            <FAQCard index={5} question='sixth-question' answer='first-answer' />
                            <FAQCard index={6} question='seventh-question' answer='first-answer' />
                            <FAQCard index={7} question='eighth-question' answer='first-answer' />
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
