import styles from "./StudyContent.module.css"

import Intro from "./Intro/Intro"
import { Outlet, useLocation } from "react-router-dom"

const studyContent = () => {
    const location = useLocation()
    const currentUrl = location.pathname

    return (
        <Outlet />
    )
}

export default studyContent
