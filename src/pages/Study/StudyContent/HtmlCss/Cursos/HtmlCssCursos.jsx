import styles from "./HtmlCssCursos.module.css"

import Card from "./Card/Card"
import GoBack from "../../../../../components/GoBack/GoBack"

const HtmlCssCursos = () => {
    return (
        <section className={styles.courses_container}>
            <GoBack path="/estudando/htmlcss" />

            <div className={styles.courses_cev_container}>
                <h3>Curso Em Video</h3>

                <div className={styles.card_wrapp}>
                    <Card title="Módulo 1" path="modulo1" />
                    <Card title="Módulo 2" path="modulo2" />
                    <Card title="Módulo 3" path="modulo3" />
                    <Card title="Módulo 4" path="modulo4" />
                    <Card title="Módulo 5" path="modulo5" />
                </div>
            </div>
        </section>
    )
}

export default HtmlCssCursos
