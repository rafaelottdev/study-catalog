import styles from "../Modulo.module.css"

import GoBack from "../../../../../../../components/GoBack/GoBack"

const Modulo4 = () => {
    return (
        <section className={styles.module__container}>
            <GoBack path="/estudando/htmlcss/cursos" />

            <section className={styles.summary_wrapp}>
                <h3>HTML e CSS Resumo</h3>

                <div className={styles.links_wrapp}>
                    <a href="/docs/html-css/cursos/modulo4/formularios.pdf" target="_blank">Formularios (pdf)</a>
                    
                    <a href="/docs/html-css/cursos/modulo4/iframes.pdf" target="_blank">Iframes (pdf)</a>
                    
                    <a href="/docs/html-css/cursos/modulo4/media-queries.pdf" target="_blank">Media Query (pdf)</a>
                </div>
            </section>

            <section className={styles.image_wrapp}>
                <h3>Imagens</h3>

                <a href="/docs/html-css/cursos/modulo4/imagens.zip" download>Baixar - Imagens (zip)</a>
            </section>
        </section>
    )
}

export default Modulo4
