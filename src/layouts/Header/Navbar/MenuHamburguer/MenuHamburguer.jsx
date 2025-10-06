import styles from "./MenuHamburguer.module.css"

const MenuHamburguer = ({ onClick, show }) => {
    return (
        <button className={`${styles.manu_btn} ${show ? `${styles.change_menu_hamburguer}` : ""}`} onClick={onClick}>
            <div className={styles.menu_bar}></div>
            <div className={styles.menu_bar}></div>
            <div className={styles.menu_bar}></div>
        </button>
    )
}

export default MenuHamburguer
