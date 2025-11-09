import styles from "./ReactPratica.module.css"

import GoBack from "../../../../../components/GoBack/GoBack"

const ReactPratica = () => {
    return (
        <section>
            <GoBack path="/estudando/react" />

            <h3>React Praticas</h3>

            <ul>
                <li>
                    <a href="/docs/react/pratica/comment-section.zip" download>Comment Section (zip)</a>
                </li>

                <li>
                    <a href="/docs/react/pratica/digital-buy.zip" download>Digital Buy (zip)</a>
                </li>

                <li>
                    <a href="/docs/react/pratica/hooks.zip" download>Hooks (zip)</a>
                </li>

                <li>
                    <a href="/docs/react/pratica/scroll-infinito.zip" download>Scroll Infinito (zip)</a>
                </li>
            </ul>
        </section>
    )
}

export default ReactPratica
