import { Link } from "react-router-dom"
import styles from "../StudyContent.module.css"

const HtmlCss = () => {
    return (
        <section className={styles.htmlcss_container}>
            <h3>HTML e CSS Resumo</h3>

           <ul className={styles.htmlcss_list}>
                <li>
                    <a href="/docs/html-css/html-elementos.pdf" target="_blank">HTML Elementos</a>
                </li>

                <li>
                    <a href="/docs/html-css/css-seletores.pdf" target="_blank">CSS Seletores</a>
                </li>

                <li>
                    <a href="/docs/html-css/notas-soltas.pdf" target="_blank">Notas Soltas</a>
                </li>
           </ul>

           <ul>
                <li>
                    <Link to="/estudando/htmlcss/cursos">Cursos</Link>
                </li>

                <li>
                    <Link to="/estudando/htmlcss/especificos">Especificos</Link>
                </li>
           </ul>
        </section>
    )
}

export default HtmlCss
