import styles from "../StudyContent.module.css"

import { Link } from "react-router-dom"

const Typescript = () => {
    return (
        <section className={styles.container}>
            <h3>Typescript Resumo</h3>

            <ul className={styles.list}>
                <li>
                    <Link to="/estudando/typescript/cursos">Cursos</Link>
                </li>
                <li>
                    <Link to="/estudando/typescript/docs">Docs</Link>
                </li>
            </ul>
        </section>
    )
}

export default Typescript
