import { useTranslations } from 'next-intl'
import Episode from '../Episode/Episode'

export default function Episodes() {
    const t = useTranslations("episodes")
    return (
        <div className='p-6 lg:p-8 2xl:p-10 rounded-lg lg:rounded-xl bg-gray-95 dark:bg-black-10 border border-gray-75 dark:border-black-15 flex flex-col gap-6 lg:gap-8 2xl:gap-10'>
            <h3 className='text-lg lg:text-xl 2xl:text-2xl font-manrope-semibold rtl:font-vazir-semibold text-black-6 dark:text-gray-99'>
                {t("Seasons and Episodes")}
            </h3>
            <div className="flex flex-col gap-4 2xl:gap-5">
                <Episode />
                <Episode />
            </div>
        </div>
    )
}
