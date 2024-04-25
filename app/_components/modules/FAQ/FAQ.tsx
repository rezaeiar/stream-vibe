import React from 'react'
import FAQCard from '../FAQCard/FAQCard'

export default function FAQ() {
    return (
        <div id='faq'>
            <div className="container">
                <div className="flex flex-col gap-10 lg:gap-14 2xl:gap-20">
                    <div className="flex justify-between items-end gap-5">
                        <div className="flex flex-col gap-2.5 2xl:gap-3.5">
                            <h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-manrope-bold text-black-6 dark:text-white'>
                                Frequently Asked Questions
                            </h3>
                            <span className='text-sm lg:text-base 2xl:text-lg font-manrope-regular text-black-30 dark:text-gray-60'>
                                Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.
                            </span>
                        </div>
                        <button className='bg-red-45 text-sm 2xl:text-lg rounded-md py-3.5 2xl:py-4 px-5 text-white lg:w-fit'>
                            Send Message
                        </button>
                    </div>
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 2xl:gap-x-20'>
                        <FAQCard index={0} title='What is StreamVibe?' />
                        <FAQCard index={1} title='How do I sign up for StreamVibe?' />
                        <FAQCard index={2} title='How much does StreamVibe cost?' />
                        <FAQCard index={3} title='What is the StreamVibe free trial?' />
                        <FAQCard index={4} title='What content is available on StreamVibe?' />
                        <FAQCard index={5} title='How do I contact StreamVibe customer support?' />
                        <FAQCard index={6} title='How can I watch StreamVibe?' />
                        <FAQCard index={7} title='What are the StreamVibe payment methods?' />
                    </ul>
                </div>
            </div>
        </div>
    )
}
