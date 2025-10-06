import styles from "./Logo.module.css"

const Logo = () => {
    return (
        <div className={styles.logo_wrapp}>
            <a href="#" className={styles.logo_link}>
                <h1 className={styles.logo_title}>Study Catalog</h1>
            </a>
        </div>
    )
}

export default Logo
