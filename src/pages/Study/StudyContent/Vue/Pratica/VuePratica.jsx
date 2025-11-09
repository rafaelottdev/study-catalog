import "../../../../../styles/studySubList.css"

import GoBack from "../../../../../components/GoBack/GoBack"

const VuePratica = () => {
    return (
        <section className="container">
            <GoBack path="/estudando/vue" />

            <h3>Vue Pratica</h3>

            <ul className="list">
                <li>
                    <a href="/docs/vue/pratica/comment-section.zip" download>Baixar - Comment Section (zip)</a>
                </li>

                <li>
                    <a href="/docs/vue/pratica/router-project.zip" download>Baixar - Router Project (zip)</a>
                </li>
            </ul>
        </section>
    )
}

export default VuePratica
