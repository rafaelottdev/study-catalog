import styles from "../Modulo.module.css"

import GoBack from "../../../../../../../components/GoBack/GoBack"

const Modulo1 = () => {
    return (
        <section className={styles.module__container}>
            <GoBack path="/estudando/htmlcss/cursos" />

            <section className={styles.summary_wrapp}>
                <h3>HTML e CSS Resumo</h3>

                <div className={styles.links_wrapp}>
                    <a href="/docs/html-css/cursos/modulo1/HTML.pdf" target="_blank">Anotação HTML</a>

                    <a href="/docs/html-css/cursos/modulo1/CSS.pdf" target="_blank">Anotação CSS</a>
                    
                    <a href="/docs/html-css/cursos/modulo1/referencias.pdf" target="_blank">Anotação Referencias</a>
                </div>
            </section>

            <section className={styles.image_wrapp}>
                <h3>Imagens</h3>

                <a href="/docs/html-css/cursos/modulo1/imagens.zip" target="_blank">Imagens</a>
            </section>
        </section>
    )
}

export default Modulo1
