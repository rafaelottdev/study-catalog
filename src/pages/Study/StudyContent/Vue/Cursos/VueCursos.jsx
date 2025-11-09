import "../../../../../styles/studySubList.css"

import GoBack from "../../../../../components/GoBack/GoBack"

const VueCursos = () => {
    return (
        <section className="container">
            <GoBack path="/estudando/vue" />

            <h3>Vue Cursos</h3>

            <ul className="list">
                <li>
                    <a href="/docs/vue/cursos/Hora de Codar.zip" downalod>Baixar - Hora De Codar (zip)</a>
                </li>
            </ul>
        </section>
    )
}

export default VueCursos
