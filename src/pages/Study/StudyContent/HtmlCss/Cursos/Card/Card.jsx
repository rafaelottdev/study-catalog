import styles from "./Card.module.css"

import { Link } from "react-router-dom"

const Card = ({ title, path }) => {
    return (
        <Link to={`cev/${path}`} className={styles.module_card}>
            {title}
        </Link>
    )
}

export default Card
