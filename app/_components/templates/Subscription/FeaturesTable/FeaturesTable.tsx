import { useTranslations } from "next-intl"


export default function FeaturesTable() {
    const t = useTranslations("features-table")
    return (
        <div className="border rounded-lg 2xl:rounded-xl overflow-hidden border-gray-75 dark:border-black-15 hidden lg:block">
            <table className="table-auto w-full overflow-hidden">
                <thead className='text-black-6 dark:text-gray-99 bg-gray-99 dark:bg-black-6 text-lg 2xl:text-xl font-manrope-semibold rtl:font-vazir-semibold'>
                    <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x rtl:divide-x-reverse divide-gray-75 dark:divide-black-15 border-b border-gray-75 dark:border-black-15'>
                        <th>{t("Features")}</th>
                        <th>{t("Basic")}</th>
                        <th>{t("Standard")}</th>
                        <th>{t("Premium")}</th>
                    </tr>
                </thead>
                <tbody className='text-black-30 dark:text-gray-60 2xl:text-lg font-manrope-medium rtl:font-vazir-medium'>
                    <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x rtl:divide-x-reverse divide-gray-75 dark:divide-black-15 border-b border-gray-75 dark:border-black-15 last:border-none'>
                        <td>{t("Price")}</td>
                        <td>{t("price/month", { price: 390000 })}</td>
                        <td>{t("price/month", { price: 790000 })}</td>
                        <td>{t("price/month", { price: 1090000 })}</td>
                    </tr>
                    <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x rtl:divide-x-reverse divide-gray-75 dark:divide-black-15 border-b border-gray-75 dark:border-black-15 last:border-none'>
                        <td>{t("Content")}</td>
                        <td>{t("Access to a wide selection of movies and shows, including some new releases")}</td>
                        <td>{t("Access to a wider selection of movies and shows, including most new releases and exclusive content")}</td>
                        <td>{t("Access to a widest selection of movies and shows, including all new releases and Offline Viewing")}</td>
                    </tr>
                    <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x rtl:divide-x-reverse divide-gray-75 dark:divide-black-15 border-b border-gray-75 dark:border-black-15 last:border-none'>
                        <td>{t("Devices")}</td>
                        <td>{t("watch-on", { number: 1 })}</td>
                        <td>{t("watch-on", { number: 2 })}</td>
                        <td>{t("watch-on", { number: 4 })}</td>
                    </tr>
                    <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x rtl:divide-x-reverse divide-gray-75 dark:divide-black-15 border-b border-gray-75 dark:border-black-15 last:border-none'>
                        <td>{t("Free Trail")}</td>
                        <td>{t("7 Days")}</td>
                        <td>{t("7 Days")}</td>
                        <td>{t("7 Days")}</td>
                    </tr>
                    <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x rtl:divide-x-reverse divide-gray-75 dark:divide-black-15 border-b border-gray-75 dark:border-black-15 last:border-none'>
                        <td>{t("Cancel Anytime")}</td>
                        <td>{t("Yes")}</td>
                        <td>{t("Yes")}</td>
                        <td>{t("Yes")}</td>
                    </tr>
                    <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x rtl:divide-x-reverse divide-gray-75 dark:divide-black-15 border-b border-gray-75 dark:border-black-15 last:border-none'>
                        <td>{t("HDR")}</td>
                        <td>{t("No")}</td>
                        <td>{t("Yes")}</td>
                        <td>{t("Yes")}</td>
                    </tr>
                    <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x rtl:divide-x-reverse divide-gray-75 dark:divide-black-15 border-b border-gray-75 dark:border-black-15 last:border-none'>
                        <td>{t("Dolby Atmos")}</td>
                        <td>{t("No")}</td>
                        <td>{t("Yes")}</td>
                        <td>{t("Yes")}</td>
                    </tr>
                    <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x rtl:divide-x-reverse divide-gray-75 dark:divide-black-15 border-b border-gray-75 dark:border-black-15 last:border-none'>
                        <td>{t("Ad - Free")}</td>
                        <td>{t("No")}</td>
                        <td>{t("Yes")}</td>
                        <td>{t("Yes")}</td>
                    </tr>
                    <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x rtl:divide-x-reverse divide-gray-75 dark:divide-black-15 border-b border-gray-75 dark:border-black-15 last:border-none'>
                        <td>{t("Offline Viewing")}</td>
                        <td>{t("No")}</td>
                        <td>{t("Yes, for select titles")}</td>
                        <td>{t("Yes, for all titles")}</td>
                    </tr>
                    <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x rtl:divide-x-reverse divide-gray-75 dark:divide-black-15 border-b border-gray-75 dark:border-black-15 last:border-none'>
                        <td>{t("Family Sharing")}</td>
                        <td>{t("No")}</td>
                        <td>{t("up-to-family", { number: 5 })}</td>
                        <td>{t("up-to-family", { number: 6 })}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
