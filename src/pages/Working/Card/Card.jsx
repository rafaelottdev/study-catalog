import { useEffect, useRef } from "react"
import styles from "./Card.module.css"

const Card = ({ title, subtitle, description, progress }) => {
    const progressList = progress.toString().split("")

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
                    <div style={{width: `${progress}%`}}></div>

                    <p>
                        {
                            progressList.map((letter, id) => {
                                return (
                                    <span 
                                        key={id}
                                    >
                                        {letter}
                                    </span>
                                )
                            })
                        }

                        %
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Card
