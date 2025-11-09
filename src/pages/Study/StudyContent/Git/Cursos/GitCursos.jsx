import "../../../../../styles/studySubList.css"

import GoBack from "../../../../../components/GoBack/GoBack"

const GitCursos = () => {
    return (
        <section className="container">
            <GoBack path="/estudando/git" />

            <h3>Git e GitHub Cursos</h3>

            <ul className="list">
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
    )
}

export default GitCursos
