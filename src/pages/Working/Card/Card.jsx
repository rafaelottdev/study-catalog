import styles from "./Card.module.css"

const Card = ({ title, subtitle, description, porcentage }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_title_wrapp}>
                <h3>{title}</h3>
            </div>

            <div className={styles.card_description}>
                <h4>{subtitle}</h4>

                <p>{description}</p>
            </div>

            <div className={styles.progress}>
                <p>Progresso:</p>

                <div className={styles.progress_bar}>
                    <div></div>

                    <p>{porcentage}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
