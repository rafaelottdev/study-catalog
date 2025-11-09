import "../../../../../styles/studySubList.css"

import GoBack from "../../../../../components/GoBack/GoBack"

const TsCursos = () => {
    return (
        <section className="container">
            <GoBack path="/estudando/typescript" />

            <h3>Typescript Cursos</h3>

            <ul className="list">
                <li>
                    <a href="/docs/typescript/cursos/Felipe Rocha.zip" download>Baixar - Felipe Rocha (zip)</a>
                </li>
            </ul>
        </section>
    )
}

export default TsCursos
