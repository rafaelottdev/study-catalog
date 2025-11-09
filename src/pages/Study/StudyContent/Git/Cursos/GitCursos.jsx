import styles from "./GitCursos.module.css"

import GoBack from "../../../../../components/GoBack/GoBack"

const GitCursos = () => {
    return (
        <section>
            <GoBack path="/estudando/git" />

            <section>
                <h3>Git e GitHub Cursos</h3>

                <ul>
                    <li>
                        <a href="/docs/git/cursos/CeV.zip" download>Curso Em Video (zip)</a>
                    </li>

                    <li>
                        <a href="/docs/git/cursos/Dev-Aprender.zip" download>Dev Aprender (zip)</a>
                    </li>

                    <li>
                        <a href="/docs/git/cursos/matos.zip" download>Matos (zip)</a>
                    </li>
                </ul>
            </section>
        </section>
    )
}

export default GitCursos
