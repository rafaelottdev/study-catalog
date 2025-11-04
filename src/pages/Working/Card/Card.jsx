import { useEffect, useRef } from "react"
import styles from "./Card.module.css"

const Card = ({ title, subtitle, description, progress }) => {
    const progressList = progress.toString().split("")

    const barRef = useRef()
    const progressRefList = useRef([])

    useEffect(() => {
        const bar = barRef.current
        const barRight = bar.getBoundingClientRect().right

        progressRefList.current.forEach((span) => {
            const spanLeft = span.getBoundingClientRect().left

            if((spanLeft + 2) < barRight) {
                span.style.color = "black"
            }
            
            else {
                span.style.color = "white"
            }
        })
    }, [progress])


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
                    <div style={{width: `${progress}%`}} ref={barRef}></div>

                    <p>
                        {
                            progressList.map((letter, id) => {
                                return (
                                    <span 
                                        key={id} 
                                        ref={(el) => (progressRefList.current[id] = el)}
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
