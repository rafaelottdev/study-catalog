import styles from "../StudyContent.module.css"

import { Link } from "react-router-dom"

const Vue = () => {
    return (
        <section className={styles.container}>
            <h3>Vue Resumo</h3>

            <ul className={styles.main_list}>
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

            <ul className={styles.list}>
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
