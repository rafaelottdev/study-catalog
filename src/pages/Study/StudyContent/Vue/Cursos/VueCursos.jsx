import styles from "./VueCursos.module.css"

import GoBack from "../../../../../components/GoBack/GoBack"

const VueCursos = () => {
    return (
        <section>
            <GoBack path="/estudando/vue" />

            <h3>Vue Cursos</h3>

            <ul>
                <li>
                    <a href="/docs/vue/cursos/Hora de Codar.zip" downalod>Hora De Codar (zip)</a>
                </li>
            </ul>
        </section>
    )
}

export default VueCursos
