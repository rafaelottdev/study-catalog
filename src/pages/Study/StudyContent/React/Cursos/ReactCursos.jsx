import "../../../../../styles/studySubList.css"

import GoBack from "../../../../../components/GoBack/GoBack"

const ReactCursos = () => {
    return (
        <section className="container">
            <GoBack path="/estudando/react" />

            <h3>React Cursos</h3>

            <ul className="list">
                <li>
                    <a href="/docs/react/cursos/Hora de Codar.zip" download>Hora de Codar (zip)</a>
                </li>
            </ul>
        </section>
    )
}

export default ReactCursos
