import { Outlet } from "react-router"
import Navbar from "../../components/NavBar"

export default function MainLayout(){
    return(
        <>
            <Navbar/>
            <div className="flex-1 overflow-y-auto max-w-6xl mx-auto">
                <Outlet/>
            </div>
        </>
    )
}