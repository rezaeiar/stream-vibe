import React from 'react'

export default function MovieInfoContainer() {
    return (
        <div className=''>
            <div className="container">
                <div className="grid grid-cols-3">

                    <div className="flex flex-col gap-8 col-span-2">

                        <div className="">
                            episodes
                        </div>
                        <div className="">
                            cast
                        </div>
                    </div>
                    <div className="col-span-1">
                        infirmation
                    </div>
                </div>
            </div>
        </div>
    )
}