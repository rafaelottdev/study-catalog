import { Link } from "react-router-dom"
import styles from "./Logo.module.css"

const Logo = ({ isScrolling }) => {
    return (
        <div className={styles.logo_wrapp}>
            <Link to="/" className={`${styles.logo_link} ${isScrolling ? `${styles.scrolling}` : ""}`}>
                <h1 className={styles.logo_title}>Study Catalog</h1>
            </Link>
        </div>
    )
}

export default Logo
