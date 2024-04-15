import Image from 'next/image'
import React from 'react'

export default function ContactForm() {
    return (
        <div>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 2xl:gap-20">
                    <div className="col-span-1 flex flex-col gap-8 lg:gap-10 2xl:gap-12">
                        <div className="flex flex-col gap-2.5 2xl:gap-3.5">
                            <h3 className='font-manrope-bold text-3xl lg:text-4xl 2xl:text-5xl text-white'>
                                Welcome to our support page!
                            </h3>
                            <p className='font-manrope-regular text-sm lg:text-base 2xl:text-lg text-gray-60'>
                                We're here to help you with any problems you may be having with our product.
                            </p>
                        </div>
                        <div className="border-4 rounded-md aspect-square border-black-15">
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
                    <div className="col-span-1 lg:col-span-2 h-10 bg-red-45"></div>
                </div>
            </div>
        </div>
    )
}
