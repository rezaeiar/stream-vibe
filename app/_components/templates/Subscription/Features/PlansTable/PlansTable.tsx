import React from 'react'

export default function PlansTable() {
    return (
        <div className="border rounded-lg 2xl:rounded-xl overflow-hidden border-gray-75 dark:border-black-15 hidden lg:block">
            <table className="table-auto overflow-hidden">
                <thead className='text-black-6 dark:text-gray-99 bg-gray-99 dark:bg-black-6 text-lg 2xl:text-xl font-manrope-semibold'>
                    <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x divide-gray-75 dark:divide-black-15 border-b border-gray-75 dark:border-black-15'>
                        <th>Features</th>
                        <th>Basic</th>
                        <th>Standard</th>
                        <th>Premium</th>
                    </tr>
                </thead>
                <tbody className='text-black-30 dark:text-gray-60 2xl:text-lg font-manrope-medium'>
                    <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x divide-gray-75 dark:divide-black-15 border-b border-gray-75 dark:border-black-15 last:border-none'>
                        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td>Malcolm Lockyer</td>
                        <td>6</td>
                        <td>1961</td>
                    </tr>
                    <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x divide-gray-75 dark:divide-black-15 border-b border-gray-75 dark:border-black-15 last:border-none'>
                        <td>Witchy Woman</td>
                        <td>The Eagles</td>
                        <td>The Eagles</td>
                        <td>1972</td>
                    </tr>
                    <tr className='*:p-6 2xl:*:p-8 grid grid-cols-4 *:text-start divide-x divide-gray-75 dark:divide-black-15 border-b border-gray-75 dark:border-black-15 last:border-none'>
                        <td>Shining Star</td>
                        <td>Shining Star</td>
                        <td>Earth, Wind, and Fire</td>
                        <td>1975</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
