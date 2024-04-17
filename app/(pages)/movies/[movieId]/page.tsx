import Header from '@/app/_components/modules/Header/Header'
import VideoScreen from '@/app/_components/modules/VideoScreen/VideoScreen'
import MovieInfoContainer from '@/app/_components/modules/MovieInfoContainer/MovieInfoContainer'
import React from 'react'

export default function SingleMovie() {
    return (
        <>
            <Header component={<VideoScreen />} />
            <MovieInfoContainer />
        </>
    )
}
