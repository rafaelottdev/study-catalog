import Logo from "./Logo/Logo.jsx"
import Navbar from "./Navbar/Navbar.jsx"

import styles from "./Header.module.css"

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            
            <Navbar />
        </header>
    )
}

export default Header
