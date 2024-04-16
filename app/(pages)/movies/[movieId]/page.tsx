import Header from '@/app/_components/modules/Header/Header'
import VideoScreen from '@/app/_components/modules/VideoScreen/VideoScreen'
import React from 'react'

export default function SingleMovie() {
    return (
        <>
            <Header component={<VideoScreen />} />
        </>
    )
}
