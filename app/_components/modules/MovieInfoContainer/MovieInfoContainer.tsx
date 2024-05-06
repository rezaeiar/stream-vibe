import Information from "../Information/Information"
import Episodes from "../Episodes/Episodes"
import Cast from "../Cast/Cast"

export default function MovieInfoContainer() {
    return (
        <div>
            <div className="container">
                <div className="grid grid-cols-3 gap-5">
                    <div className="flex flex-col gap-5 2xl:gap-8 col-span-3 lg:col-span-2">
                        <Episodes />
                        <Cast />
                    </div>
                    <div className="col-span-3 lg:col-span-1">
                        <Information />
                    </div>
                </div>
            </div>
        </div>
    )
}