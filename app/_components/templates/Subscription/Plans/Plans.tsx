import React from 'react'

export default function Plans() {
    return (
        <div className='hidden lg:block'>
            <div className="container">
                <div className="flex flex-col gap-14 2xl:gap-20">
                    <div className="flex flex-col gap-2.5 2xl:gap-3.5">
                        <h3 className='text-2xl lg:text-3xl 2xl:text-4xl font-manrope-bold text-white'>
                            We Provide you streaming experience across various devices.
                        </h3>
                        <span className='text-sm lg:text-base 2xl:text-lg font-manrope-regular text-gray-60'>
                            With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere.
                        </span>
                    </div>
                    <div className="border rounded-lg 2xl:rounded-xl overflow-hidden border-black-15">
                        <table className="table-auto overflow-hidden">
                            <thead className='text-white bg-black-6 text-lg 2xl:text-xl font-manrope-semibold'>
                                <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x divide-black-15'>
                                    <th>4</th>
                                    <th>Artist</th>
                                    <th>Year</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody className='text-gray-60 2xl:text-lg font-manrope-medium'>
                                <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x divide-black-15 border-b border-black-15 last:border-none'>
                                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                    <td>Malcolm Lockyer</td>
                                    <td>6</td>
                                    <td>1961</td>
                                </tr>
                                <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x divide-black-15 border-b border-black-15 last:border-none'>
                                    <td>Witchy Woman</td>
                                    <td>The Eagles</td>
                                    <td>The Eagles</td>
                                    <td>1972</td>
                                </tr>
                                <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x divide-black-15 border-b border-black-15 last:border-none'>
                                    <td>Shining Star</td>
                                    <td>Shining Star</td>
                                    <td>Earth, Wind, and Fire</td>
                                    <td>1975</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
