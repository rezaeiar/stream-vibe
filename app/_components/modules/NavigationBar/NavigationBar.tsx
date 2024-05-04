import { NavigationBarProps } from "@/app/_types/components/NavigationBar/NavigationBar.types"
import Link from "next/link"
import Image from "next/image"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"
import { useTranslations } from "next-intl"
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher"

export default function NavigationBar({ float }: NavigationBarProps) {
    const t = useTranslations("navigation-bar")
    return (
        <div className={`py-3.5 lg:py-6 2xl:py-8 absolute top-0 w-full z-30 font-manrope-medium rtl:font-vazir-medium ${float ? 'absolute top-0' : "relative"}`}>
            <div className="container">
                <div className="flex justify-between items-center">
                    <div className="w-full flex justify-between items-center">
                        <Link href='/'>
                            <Image
                                src="/images/logo/logo-mobile.svg"
                                alt="logo-mobile"
                                width="100"
                                height="100"
                                sizes="100vw"
                                className="block lg:hidden"
                            />
                            <Image
                                src="/images/logo/logo-laptop.svg"
                                alt="logo-laptop"
                                width="100"
                                height="100"
                                sizes="100vw"
                                className="hidden lg:block 2xl:hidden"
                            />
                            <Image
                                src="/images/logo/logo-desktop.svg"
                                alt="logo-desktop"
                                width="100"
                                height="100"
                                sizes="100vw"
                                className="hidden 2xl:block"
                            />
                        </Link>
                        <div className="hidden lg:block border-4 bg-gray-99 dark:bg-black-6 border-gray-90 dark:border-black-12 py-2 2xl:py-2.5 px-2 2xl:px-2.5 rounded-xl">
                            <ul className="flex text-sm 2xl:text-lg gap-2 2xl:gap-2.5">
                                <li>
                                    <Link href='/' className="block py-3 2xl:py-3.5 px-5 2xl:px-6 text-black-15 dark:text-gray-75 rounded-lg transition-colors hover:text-black-6 dark:hover:text-gray-99 hover:bg-gray-95 dark:hover:bg-black-10">
                                        {t("Home")}
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/movies' className="block py-3 2xl:py-3.5 px-5 2xl:px-6 text-black-15 dark:text-gray-75 rounded-lg transition-colors hover:text-black-6 dark:hover:text-gray-99 hover:bg-gray-95 dark:hover:bg-black-10">
                                        {t("Movies & Shows")}
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/support' className="block py-3 2xl:py-3.5 px-5 2xl:px-6 text-black-15 dark:text-gray-75 rounded-lg transition-colors hover:text-black-6 dark:hover:text-gray-99 hover:bg-gray-95 dark:hover:bg-black-10">
                                        {t("Support")}
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/subscription' className="block py-3 2xl:py-3.5 px-5 2xl:px-6 text-black-15 dark:text-gray-75 rounded-lg transition-colors hover:text-black-6 dark:hover:text-gray-99 hover:bg-gray-95 dark:hover:bg-black-10">
                                        {t("Subscriptions")}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden lg:flex gap-3.5 items-center justify-between">
                            <LocaleSwitcher />
                            <ThemeSwitcher />
                        </div>
                    </div>
                    <div className="block lg:hidden p-3 bg-gray-95 dark:bg-black-10 border-3 border-gray-75 dark:border-black-15 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 border-black-6 dark:text-gray-99">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}