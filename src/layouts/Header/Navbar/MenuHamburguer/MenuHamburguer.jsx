import styles from "./MenuHamburguer.module.css"

import { useRef } from "react"

const MenuHamburguer = ({ onClick, show, isScrolling, ref }) => {
    const burgerRef = useRef()

    return (
        <button 
        className={`
            ${styles.manu_btn} 
            ${show ? `${styles.change_menu_hamburguer}` : ""} 
            ${isScrolling ? `${styles.scrolling}` : ""}
        `} 

        onClick={onClick}

        ref={ref}
        >
            <div className={styles.menu_bar}></div>
            <div className={styles.menu_bar}></div>
            <div className={styles.menu_bar}></div>
        </button>
    )
}

export default MenuHamburguer
