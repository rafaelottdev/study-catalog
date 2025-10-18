import { Link } from "react-router-dom"

import StudyContent from "./StudyContent/StudyContent"
import StudyNavbar from "./StudyNavbar/StudyNavbar"

import styles from "./Study.module.css"

const Study = () => {
    return (
        <section className={styles.study_container}>
            <section className={styles.study_title}>
                <h2>Estudos</h2>
            </section>

            <StudyNavbar />

            <StudyContent /> 
        </section>
    )
}

export default Study
