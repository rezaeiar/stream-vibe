import NavigationBar from "../NavigationBar/NavigationBar"
import { HeaderProps } from "@/app/_types/components/Header/Header.types"


export default function Header({ component }: HeaderProps) {
    return (
        <div>
            <NavigationBar />
            {
                !!component &&
                component
            }
        </div>
    )
}
