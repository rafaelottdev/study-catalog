import styles from "./MenuList.module.css"

const MenuList = ({ show }) => {
    return (
        <ul className={`${styles.nav_list} ${show ? `${styles.show}` : ""}`}>
            <li className={styles.nav_item}>
                <a href="#" className={styles.nav_link}>Estudos</a>
            </li>

            <li className={styles.nav_item}>
                <a href="#" className={styles.nav_link}>Projetos</a>
            </li>

            <li className={styles.nav_item}>
                <a href="#" className={styles.nav_link}>Recomendações</a>
            </li>

            <li className={styles.nav_item}>
                <a href="#" className={styles.nav_link}>Trabalhando</a>
            </li>

            <li className={styles.nav_item}>
                <a href="#" className={styles.nav_link}>Blog</a>
            </li>

            <li className={`${styles.nav_item} ${styles.nav_item_sublist}`}>
                <a href="#" className={styles.nav_link}>
                    Mais

                    <div className={styles.more_icon_wrapp}>
                        <svg viewBox="0 0 20 26">
                            <path d="M14.4036 14.4442L2.88031 26L0 23.1116L10.0831 13L0 2.88843L2.88031 0L14.4036 11.5558C14.7855 11.9389 15 12.4583 15 13C15 13.5417 14.7855 14.0611 14.4036 14.4442Z"/>
                        </svg>
                    </div>
                </a>

                <ul className={styles.more_sublist}>
                    <li className={styles.more_sublist_item}>
                        <a href="#" className={styles.more_sublist_link}>Comunidade</a>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default MenuList
