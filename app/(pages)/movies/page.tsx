import VideoTrailer from '@/app/_components/templates/Movies/VideoTrailer/VideoTrailer'
import Header from '@/app/_components/modules/Header/Header'
import React from 'react'

export default function Movies() {
    return (
        <>
            <Header component={<VideoTrailer />} />
        </>
    )
}
