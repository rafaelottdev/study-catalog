import "../../../../../styles/studySubList.css"

import GoBack from "../../../../../components/GoBack/GoBack"

const LinuxCursos = () => {
    return (
        <section className="container">
            <GoBack path="/estudando/linux" />

            <h3>Linux Cursos</h3>

            <ul className="list">
                <li>
                    <a href="/docs/linux/cursos/Linux-Berg.zip" download>Baixar - Berg (zip)</a>
                </li>

                <li>
                    <a href="/docs/linux/cursos/Linux-CeV.zip" download>Baixar - Curso Em Video (zip)</a>
                </li>
            </ul>
        </section>
    )
}

export default LinuxCursos
