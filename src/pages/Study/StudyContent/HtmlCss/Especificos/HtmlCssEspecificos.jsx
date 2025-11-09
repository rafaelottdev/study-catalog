import styles from "./HtmlCssEspecificos.module.css"

import GoBack from "../../../../../components/GoBack/GoBack"

const HtmlCssEspecificos = () => {
    return (
        <section className={styles.especificos_container}>
            <GoBack path="/estudando/htmlcss" />

            <h3>Resumos</h3>

            <ul className={styles.especificos_list}>
                <li>
                    <a href="/docs/html-css/especificos/acessibilidade.zip" download>Baixar - Acessibilidade (zip)</a>
                </li>

                <li>
                    <a href="/docs/html-css/especificos/animação-css.zip" download>Baixar - Animação (zip)</a>
                </li>

                <li>
                    <a href="/docs/html-css/especificos/apis.zip" download>Baixar - APIs (zip)</a>
                </li>

                <li>
                    <a href="/docs/html-css/especificos/filtros-css.zip" download>Baixar - Filtros (zip)</a>
                </li>

                <li>
                    <a href="/docs/html-css/especificos/flex-box.zip" download>Baixar - Flex-Box (zip)</a>
                </li>

                <li>
                    <a href="/docs/html-css/especificos/grid-layout.zip" download>Baixar - Grid-Layout (zip)</a>
                </li>

                <li>
                    <a href="/docs/html-css/especificos/media-query.zip" download>Baixar - Media-Query (zip)</a>
                </li>

                <li>
                    <a href="/docs/html-css/especificos/prefixos-css.zip" download>Baixar - Prefixos (zip)</a>
                </li>

                <li>
                    <a href="/docs/html-css/especificos/pseudo-classes.zip" download>Baixar - Pseudo Classes (zip)</a>
                </li>

                <li>
                    <a href="/docs/html-css/especificos/pseudo-elementos.zip" download>Baixar - Pseudo Elementos (zip)</a>
                </li>

                <li>
                    <a href="/docs/html-css/especificos/regras-css.zip" download>Baixar - Regras (zip)</a>
                </li>

                <li>
                    <a href="/docs/html-css/especificos/soltos.zip" download>Baixar - Soltos (zip)</a>
                </li>
            </ul>
        </section>
    )
}

export default HtmlCssEspecificos
