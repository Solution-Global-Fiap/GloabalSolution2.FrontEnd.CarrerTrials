import { Outlet } from "react-router"
import Navbar from "../../components/NavBar"

export default function MainLayout(){
    return(
        <div className="flex flex-col h-screen">
            <Navbar />

            <div className="flex-1 max-w-6xl mx-auto w-full">
                <Outlet />
            </div>
        </div>
    )
}