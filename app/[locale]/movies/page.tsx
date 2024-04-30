import Header from '@/app/_components/modules/Header/Header'
import VideoTrailer from '@/app/_components/templates/Movies/VideoTrailer/VideoTrailer'
import MoviesContainer from '@/app/_components/templates/Movies/MoviesContainer/MoviesContainer'

export default function Movies() {
    return (
        <>
            <Header component={<VideoTrailer />} />
            <MoviesContainer />
        </>
    )
}
