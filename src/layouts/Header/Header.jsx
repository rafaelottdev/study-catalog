import { useState } from "react"

import Logo from "./Logo/Logo.jsx"
import Navbar from "./Navbar/Navbar.jsx"

import styles from "./Header.module.css"

const Header = ({ scrollPosition }) => {
    const [show, setShow] = useState(false)

    let isScrolling = false

    if(scrollPosition > 0) {
        isScrolling = true
    }

    return (
        <header className={`${styles.header} ${isScrolling ? `${styles.scrolling}` : ""}`}>
            <Logo isScrolling={isScrolling} show={show} setShow={setShow} />
            
            <Navbar isScrolling={isScrolling} show={show} setShow={setShow} />
        </header>
    )
}

export default Header
