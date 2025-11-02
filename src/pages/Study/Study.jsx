import StudyContent from "./StudyContent/StudyContent"
import StudyNavbar from "./StudyNavbar/StudyNavbar"

import styles from "./Study.module.css"

const Study = () => {
    return (
        <section className={styles.study_container}>
            <div className={styles.study_title}>
                <h2>Estudos</h2>
            </div>

            <StudyNavbar />

            <StudyContent /> 
        </section>
    )
}

export default Study
