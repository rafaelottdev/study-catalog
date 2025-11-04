import { Outlet } from "react-router-dom"

const MainLayout = (scroll) => {
    return (
        <main className="main_layout">
            <Outlet />
        </main>
    )
}

export default MainLayout
