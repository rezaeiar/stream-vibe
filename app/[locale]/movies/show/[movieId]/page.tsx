import Header from '@/app/_components/modules/Header/Header'
import MovieInfoContainer from '@/app/_components/modules/MovieInfoContainer/MovieInfoContainer'
import VideoScreen from '@/app/_components/modules/VideoScreen/VideoScreen'
import React from 'react'

export default function ShowMovie() {
    return (
        <>
            <Header component={<VideoScreen />} />
            <MovieInfoContainer show />
        </>
    )
}
