import { Link } from "react-router-dom"
import styles from "../StudyContent.module.css"

const HtmlCss = () => {
    return (
        <section className={styles.container}>
            <h3>HTML e CSS Resumo</h3>

           <ul className={styles.main_list}>
                <li>
                    <a href="/docs/html-css/html-elementos.pdf" target="_blank">HTML Elementos (pdf)</a>
                </li>

                <li>
                    <a href="/docs/html-css/css-seletores.pdf" target="_blank">CSS Seletores (pdf)</a>
                </li>

                <li>
                    <a href="/docs/html-css/notas-soltas.pdf" target="_blank">Notas Soltas (pdf)</a>
                </li>
           </ul>

           <ul className={styles.list}>
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
