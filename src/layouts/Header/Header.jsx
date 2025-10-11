import Logo from "./Logo/Logo.jsx"
import Navbar from "./Navbar/Navbar.jsx"

import styles from "./Header.module.css"

const Header = ({ scrollPosition }) => {
    let isScrolling = false

    if(scrollPosition > 0) {
        isScrolling = true
    }

    return (
        <header className={`${styles.header} ${isScrolling ? `${styles.scrolling}` : ""}`}>
            <Logo isScrolling={isScrolling} />
            
            <Navbar isScrolling={isScrolling} />
        </header>
    )
}

export default Header
