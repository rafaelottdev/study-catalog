import styles from "../Modulo.module.css"

import GoBack from "../../../../../../../components/GoBack/GoBack"

const Modulo2 = () => {
    return (
        <section className={styles.module__container}>
            <GoBack path="/estudando/htmlcss/cursos" />

            <section className={styles.summary_wrapp}>
                <h3>HTML e CSS Resumo</h3>

                <div className={styles.links_wrapp}>
                    <a href="/docs/html-css/cursos/modulo2/css-1.pdf" target="_blank">CSS Resumo 1</a>

                    <a href="/docs/html-css/cursos/modulo2/css-2.pdf" target="_blank">CSS Resumo 2</a>

                    <a href="/docs/html-css/cursos/modulo2/css-3.pdf" target="_blank">CSS Resumo 3</a>
                </div>
            </section>

            <section className={styles.image_wrapp}>
                <h3>Imagens</h3>

                <a href="/docs/html-css/cursos/modulo2/imagens.zip" download>Baixar - Imagens (zip)</a>
            </section>
        </section>
    )
}

export default Modulo2
