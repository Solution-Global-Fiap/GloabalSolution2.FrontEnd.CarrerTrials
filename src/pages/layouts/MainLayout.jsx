import { Outlet } from "react-router"
import Navbar from "../../components/NavBar"

export default function MainLayout(){
    return(
        <>
            <Navbar/>
            <div className="flex-1">
                <div className="h-full max-w-6xl mx-auto px-4 space-y-8">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}