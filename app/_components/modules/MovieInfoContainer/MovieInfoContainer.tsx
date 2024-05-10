import Information from "../Information/Information"
import Episodes from "../../templates/Movies/Episodes/Episodes"
import Cast from "../Cast/Cast"
import { MovieInfoContainerProps } from "@/app/_types/components/MovieInfoContainer/MovieInfoContainer.types"

export default function MovieInfoContainer({ show }: MovieInfoContainerProps) {
    return (
        <div>
            <div className="container">
                <div className="grid grid-cols-3 gap-5">
                    <div className="flex flex-col gap-5 2xl:gap-8 col-span-3 lg:col-span-2">
                        {
                            !!show && <Episodes />
                        }
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