import styles from "./ReactCursos.module.css"

import GoBack from "../../../../../components/GoBack/GoBack"

const ReactCursos = () => {
    return (
        <section>
            <GoBack path="/estudando/react" />

            <h3>React Cursos</h3>

            <ul>
                <li>
                    <a href="/docs/react/cursos/Hora de Codar.zip" download>Hora de Codar (zip)</a>
                </li>
            </ul>
        </section>
    )
}

export default ReactCursos
