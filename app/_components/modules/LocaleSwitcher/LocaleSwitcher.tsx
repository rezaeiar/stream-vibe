"use client"
import React from 'react'
import { usePathname, useRouter } from 'next/navigation'

export default function LocaleSwitcher() {
    const pathname = usePathname()
    const newpathname = pathname.substring(3)
    const router = useRouter()

    const onLocaleSwitcher = () => {
        if (pathname === "/fa") {
            router.replace(`/en/${newpathname}`)
        } else {
            router.replace(`/fa/${newpathname}`)
        }
    }
    return (
        <div className="flex h-10 w-10 rounded-full border-2 font-manrope-regular text-sm text-gray-60 dark:text-gray-70 border-gray-90 dark:border-black-12 bg-gray-97 dark:bg-black-25 items-center justify-center cursor-pointer" onClick={onLocaleSwitcher}>
            {
                pathname === "/fa" ? (
                    <span>
                        Fa
                    </span>
                ) : (
                    <span>
                        En
                    </span>
                )
            }
        </div>
    )
}