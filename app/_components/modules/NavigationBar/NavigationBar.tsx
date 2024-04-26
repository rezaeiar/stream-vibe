import { NavigationBarProps } from "@/app/_types/components/NavigationBar/NavigationBar.types"
import Link from "next/link"
import Image from "next/image"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"

export default function NavigationBar({ float }: NavigationBarProps) {
    return (
        <div className={`py-3.5 lg:py-6 2xl:py-8 absolute top-0 w-full z-30 ${float ? 'absolute top-0' : "relative"}`}>
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
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/movies' className="block py-3 2xl:py-3.5 px-5 2xl:px-6 text-black-15 dark:text-gray-75 rounded-lg transition-colors hover:text-black-6 dark:hover:text-gray-99 hover:bg-gray-95 dark:hover:bg-black-10">
                                        Movies & Shows
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/support' className="block py-3 2xl:py-3.5 px-5 2xl:px-6 text-black-15 dark:text-gray-75 rounded-lg transition-colors hover:text-black-6 dark:hover:text-gray-99 hover:bg-gray-95 dark:hover:bg-black-10">
                                        Support
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/subscriptions' className="block py-3 2xl:py-3.5 px-5 2xl:px-6 text-black-15 dark:text-gray-75 rounded-lg transition-colors hover:text-black-6 dark:hover:text-gray-99 hover:bg-gray-95 dark:hover:bg-black-10">
                                        Subscriptions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden lg:flex gap-3.5 items-center justify-between">
                            <div className="flex h-10 w-10 rounded-full border-2 border-gray-90 dark:border-black-12 bg-gray-97 dark:bg-black-25 items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 xl:w-8 2xl:h-8 text-gray-60 dark:text-gray-70">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
                                </svg>
                            </div>
                            {/* <div className="flex h-10 w-10 rounded-full border-2 border-gray-90 bg-gray-97 items-center justify-center">
                                <span>
                                    Fa
                                </span>
                            </div> */}
                            <ThemeSwitcher />
                        </div>
                    </div>
                    <div className="block lg:hidden p-3 bg-black-10 border-3 border-black-15">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}