import styles from "./jSCursos.module.css"

import GoBack from "../../../../../components/GoBack/GoBack"

const jSCursos = () => {
    return (
        <section>
            <GoBack path="/estudando/javascript" />

            <h3>Javascript Cursos</h3>

            <ul>
                <li>
                    <a href="/docs/javascript/cursos/CeV.zip">Baixar - Curso Em Video (zip)</a>
                </li>

                <li>
                    <a href="/docs/javascript/cursos/CBF.zip">Baixar - CBF (zip)</a>
                </li>
            </ul>
        </section>
    )
}

export default jSCursos
