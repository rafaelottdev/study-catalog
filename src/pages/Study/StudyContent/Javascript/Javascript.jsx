import styles from "../StudyContent.module.css"

import { Link } from "react-router-dom"

const Javascript = () => {
    return (
        <section>
            <h3>Javascript Resumo</h3>

            <ul>
                <li>
                    <a href="/docs/javascript/comandos-gerais.pdf" target="_blank">Comandos Gerais</a>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to="/estudando/javascript/cursos">Cursos</Link>
                </li>

                <li>
                    <Link to="/estudando/javascript/especificos">Especificos</Link>
                </li>
           </ul>
        </section>
    )
}

export default Javascript
