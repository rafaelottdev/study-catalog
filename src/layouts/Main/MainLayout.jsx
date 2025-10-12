import { Outlet } from "react-router-dom"

const MainLayout = (scroll) => {
    return (
        <main>
            <Outlet />
        </main>
    )
}

export default MainLayout
