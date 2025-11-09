import styles from "./VuePratica.module.css"

import GoBack from "../../../../../components/GoBack/GoBack"

const VuePratica = () => {
    return (
        <section>
            <GoBack path="/estudando/vue" />

            <h3>Vue Pratica</h3>

            <ul>
                <li>
                    <a href="/docs/vue/pratica/comment-section.zip" download>Comment Section (zip)</a>
                </li>

                <li>
                    <a href="/docs/vue/pratica/router-project.zip" download>Router Project (zip)</a>
                </li>
            </ul>
        </section>
    )
}

export default VuePratica
