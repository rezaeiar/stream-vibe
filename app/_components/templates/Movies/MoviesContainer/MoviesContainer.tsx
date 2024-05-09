import NewReleaseCard from '@/app/_components/templates/Movies/NewReleaseCard/NewReleaseCard'
import OurGenres from '@/app/_components/modules/OurGenres/OurGenres'
import { useTranslations } from 'next-intl'
import Popular from '../Popular/Popular'
import Trending from '../Trending/Trending'
import NewReleases from '../NewReleases/NewReleases'

export default function MoviesContainer() {
    const t = useTranslations("movies-container")
    return (
        <div>
            <div className="container">
                <div className='relative lg:border border-gray-75 dark:border-black-15 rounded-xl p-0 lg:p-10 2xl:p-12 flex flex-col gap-28'>
                    <button className='absolute hidden lg:block -top-6 left-12 rtl:right-12 bg-red-45 text-sm 2xl:text-lg rounded-md py-3.5 2xl:py-4 px-5 text-gray-99 w-fit font-manrope-medium rtl:font-vazir-medium'>
                        {t("Movies")}
                    </button>
                    <OurGenres title='Our Genres' />
                    <Popular />
                    <Trending />
                    <NewReleases />
                </div>
            </div>
        </div>
    )
}