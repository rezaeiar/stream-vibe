import Information from "../Information/Information"
import Episodes from "../Episodes/Episodes"
import Cast from "../Cast/Cast"

export default function MovieInfoContainer() {
    return (
        <div className=''>
            <div className="container">
                <div className="grid grid-cols-3">
                    <div className="flex flex-col gap-8 col-span-2">
                        <Episodes />
                        <Cast />
                    </div>
                    <Information />
                </div>
            </div>
        </div>
    )
}