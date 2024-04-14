import NavigationBar from "../NavigationBar/NavigationBar"
import { HeaderProps } from "@/app/_types/components/Header/Header.types"


export default function Header({ component, isNavigationBarFloat }: HeaderProps) {
    console.log(isNavigationBarFloat);
    
    return (
        <div className="relative">
            <NavigationBar float={isNavigationBarFloat} />
            {
                !!component &&
                component
            }
        </div>
    )
}
