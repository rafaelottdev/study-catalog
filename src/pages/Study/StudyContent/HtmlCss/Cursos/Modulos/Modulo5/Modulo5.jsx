import styles from "../Modulo.module.css"

import GoBack from "../../../../../../../components/GoBack/GoBack"

const Modulo5 = () => {
    return (
        <section className={styles.module__container}>
            <GoBack path="/estudando/htmlcss/cursos" />

            <div className={styles.nothing}>
                Não tem nada por aqui
            </div>
        </section>
    )
}

export default Modulo5
