import styles from "../StudyContent.module.css"

import { Link } from "react-router-dom"

const Git = () => {
    return (
        <section>
            <h3>Git e GitHub Resumos</h3>

            <ul>
                <li>
                    <Link to="/estudando/git/cursos">Cursos</Link>
                </li>
            </ul>
        </section>
    )
}

export default Git
