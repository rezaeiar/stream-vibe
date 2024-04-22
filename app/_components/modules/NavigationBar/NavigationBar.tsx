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
                        <div className="hidden lg:block border-4 bg-black-6 border-black-12 py-2 2xl:py-2.5 px-2 2xl:px-2.5 rounded-xl">
                            <ul className="flex text-sm 2xl:text-lg gap-2 2xl:gap-2.5">
                                <li>
                                    <Link href='/' className="block py-3 2xl:py-3.5 px-5 2xl:px-6 text-gray-75 rounded-lg transition-colors hover:text-white hover:bg-black-10">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className="block py-3 2xl:py-3.5 px-5 2xl:px-6 text-gray-75 rounded-lg transition-colors hover:text-white hover:bg-black-10">
                                        Movies & Shows
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className="block py-3 2xl:py-3.5 px-5 2xl:px-6 text-gray-75 rounded-lg transition-colors hover:text-white hover:bg-black-10">
                                        Support
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/' className="block py-3 2xl:py-3.5 px-5 2xl:px-6 text-gray-75 rounded-lg transition-colors hover:text-white hover:bg-black-10">
                                        Subscriptions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden lg:flex gap-3.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 xl:w-8 2xl:h-8 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg>
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