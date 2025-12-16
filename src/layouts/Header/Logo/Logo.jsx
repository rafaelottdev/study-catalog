import { Link } from "react-router-dom"
import styles from "./Logo.module.css"

const Logo = ({ isScrolling, show, setShow, active, setActive }) => {
    const scrollToTop = () => {
        window.scrollTo(
            {
                top: 0,
                behavior: 'smooth'
            }
        )
    }

    return (
        <div className={styles.logo_wrapp}>
            <Link to="/" 
                className={`${styles.logo_link} ${isScrolling ? `${styles.scrolling}` : ""}`}
                onClick={() => {
                    setShow(false)
                    scrollToTop()
                    setActive(false)
                }}
            >
                <h1 className={styles.logo_title}>Portfolio</h1>
            </Link>
        </div>
    )
}

export default Logo
