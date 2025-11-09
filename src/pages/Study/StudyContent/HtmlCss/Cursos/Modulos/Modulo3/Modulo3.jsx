import styles from "../Modulo.module.css"

import GoBack from "../../../../../../../components/GoBack/GoBack"

const Modulo3 = () => {
    return (
        <section className={styles.module__container}>
            <GoBack path="/estudando/htmlcss/cursos" />

            <section className={styles.summary_wrapp}>
                <h3>HTML e CSS Resumo</h3>

                <div className={styles.links_wrapp}>
                    <a href="/docs/html-css/cursos/modulo3/html-css.pdf" target="_blank">CSS e HTML Resumo</a>

                    <a href="/docs/html-css/cursos/modulo3/tabela.pdf" target="_blank">Tabelas Resumo</a>
                </div>
            </section>

            <section className={styles.image_wrapp}>
                <h3>Imagens</h3>

                <a href="/docs/html-css/cursos/modulo3/imagens.zip" download>Baixar - Imagens (zip)</a>
            </section>
        </section>
    )
}

export default Modulo3
