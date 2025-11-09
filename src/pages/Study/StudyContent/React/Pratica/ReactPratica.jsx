import "../../../../../styles/studySubList.css"

import GoBack from "../../../../../components/GoBack/GoBack"

const ReactPratica = () => {
    return (
        <section className="container">
            <GoBack path="/estudando/react" />

            <h3>React Praticas</h3>

            <ul className="list">
                <li>
                    <a href="/docs/react/pratica/comment-section.zip" download>Baixar - Comment Section (zip)</a>
                </li>

                <li>
                    <a href="/docs/react/pratica/digital-buy.zip" download>Baixar - Digital Buy (zip)</a>
                </li>

                <li>
                    <a href="/docs/react/pratica/hooks.zip" download>Baixar - Hooks (zip)</a>
                </li>

                <li>
                    <a href="/docs/react/pratica/scroll-infinito.zip" download>Baixar - Scroll Infinito (zip)</a>
                </li>
            </ul>
        </section>
    )
}

export default ReactPratica
