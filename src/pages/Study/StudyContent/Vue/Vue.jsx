import styles from "../StudyContent.module.css"

import { Link } from "react-router-dom"

const Vue = () => {
    return (
        <section>
            <h3>Vue Resumos</h3>

            <ul>
                <li>
                    <a href="/docs/vue/API-options.pdf" target="_blank">API Options (pdf)</a>
                </li>

                <li>
                    <a href="/docs/vue/diretivas.pdf" target="_blank">Diretivas (pdf)</a>
                </li>

                <li>
                    <a href="/docs/vue/vue-router.pdf" target="_blank">Vue Router (pdf)</a>
                </li>
            </ul>

            <ul>
                <li>
                    <Link to="/estudando/vue/cursos">Cursos</Link>
                </li>

                <li>
                    <Link to="/estudando/vue/pratica">Pratica</Link>
                </li>
           </ul>
        </section>
    )
}

export default Vue
