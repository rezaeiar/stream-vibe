import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function PlansTableMobile() {
    const t = useTranslations("features-table")
    return (
        <div className='flex lg:hidden flex-col gap-5 font-manrope-medium rtl:font-vazir-medium'>
            <div className="w-fit h-fit border bg-gray-99 dark:bg-black-6 border-gray-90 dark:border-black-12 py-2 px-2 rounded-xl">
                <ul className="flex text-sm gap-2 rtl:font-vazir-medium">
                    <li>
                        <Link href='/' className="block py-3 px-5 text-black-15 dark:text-gray-75 rounded-lg transition-colors hover:text-black-6 dark:hover:text-white hover:bg-gray-95 dark:hover:bg-black-10">
                            {t("Basic")}
                        </Link>
                    </li>
                    <li>
                        <Link href='/' className="block py-3 px-5 text-black-15 dark:text-gray-75 rounded-lg transition-colors hover:text-black-6 dark:hover:text-white hover:bg-gray-95 dark:hover:bg-black-10">
                            {t("Standard")}
                        </Link>
                    </li>
                    <li>
                        <Link href='/' className="block py-3 px-5 text-black-15 dark:text-gray-75 rounded-lg transition-colors hover:text-black-6 dark:hover:text-white hover:bg-gray-95 dark:hover:bg-black-10">
                            {t("Premium")}
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-6 bg-gray-99 dark:bg-black-6 border-gray-90 dark:border-black p-6 rounded-xl">
                <div className="flex flex-col gap-1 text-sm">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        {t("Price")}
                    </h6>
                    <span className='text-sm text-black-10 dark:text-gray-95'>
                        {t("price/month", { price: 390000 })}
                    </span>
                </div>
                <div className="flex flex-col gap-1 text-sm">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        {t("Free Trail")}
                    </h6>
                    <span className='text-sm text-black-10 dark:text-gray-95'>
                        {t("7 Days")}
                    </span>
                </div>
                <div className="flex flex-col gap-1 text-sm col-span-2">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        {t("Content")}
                    </h6>
                    <span className='text-sm text-black-10 dark:text-gray-95'>
                        {t("Access to a wider selection of movies and shows, including most new releases and exclusive content")}
                    </span>
                </div>
                <div className="flex flex-col gap-1 text-sm col-span-2">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        {t("Devices")}
                    </h6>
                    <span className='text-sm text-black-10 dark:text-gray-95'>
                        {t("watch-on", { number: 1 })}
                    </span>
                </div>
                <div className="flex flex-col gap-1 text-sm">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        {t("Cancel Anytime")}
                    </h6>
                    <span className='text-sm text-black-10 dark:text-gray-95'>
                        {t("Yes")}
                    </span>
                </div>
                <div className="flex flex-col gap-1 text-sm">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        {t("HDR")}
                    </h6>
                    <span className='text-sm text-black-10 dark:text-gray-95'>
                        {t("Yes")}
                    </span>
                </div>
                <div className="flex flex-col gap-1 text-sm">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        {t("Dolby Atmos")}
                    </h6>
                    <span className='text-sm text-black-10 dark:text-gray-95'>
                        {t("Yes")}
                    </span>
                </div>
                <div className="flex flex-col gap-1 text-sm">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        {t("Ad - Free")}
                    </h6>
                    <span className='text-sm text-black-10 dark:text-gray-95'>
                        {t("Yes")}
                    </span>
                </div>
                <div className="flex flex-col gap-1 text-sm">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        {t("Offline Viewing")}
                    </h6>
                    <span className='text-sm text-black-10 dark:text-gray-95'>
                        {t("Yes, for select titles")}
                    </span>
                </div>
                <div className="flex flex-col gap-1 text-sm">
                    <h6 className='text-black-30 dark:text-gray-60'>
                        {t("Family Sharing")}
                    </h6>
                    <span className='text-sm text-black-10 dark:text-gray-95'>
                        {t("No")}
                    </span>
                </div>
            </div>
        </div>
    )
}