import "../../../../../styles/studySubList.css"

import GoBack from "../../../../../components/GoBack/GoBack"

const jSCursos = () => {
    return (
        <section className="container">
            <GoBack path="/estudando/javascript" />

            <h3>Javascript Cursos</h3>

            <ul className="list">
                <li>
                    <a href="/docs/javascript/cursos/CeV.zip" download>Baixar - Curso Em Video (zip)</a>
                </li>

                <li>
                    <a href="/docs/javascript/cursos/CBF.zip" download>Baixar - CBF (zip)</a>
                </li>
            </ul>
        </section>
    )
}

export default jSCursos
