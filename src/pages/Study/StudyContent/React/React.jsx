import styles from "../StudyContent.module.css"

import { Link } from "react-router-dom"

const React = () => {
    return (
        <section>
            <section>
                <h3>React Resumos</h3>

                <ul>
                    <li>
                        <a href="/docs/react/imagens.zip" download>Baixar - Imagens (zip)</a>
                    </li>

                    <li>
                        <a href="/docs/react/.env.pdf" target="_blank">Env (pdf)</a>
                    </li>

                    <li>
                        <a href="/docs/react/css-no-react.pdf" target="_blank">CSS No React (pdf)</a>
                    </li>

                    <li>
                        <a href="/docs/react/db-json.pdf" target="_blank">DB Json (pdf)</a>
                    </li>

                    <li>
                        <a href="/docs/react/Hooks.pdf" target="_blank">Hooks (pdf)</a>
                    </li>

                    <li>
                        <a href="/docs/react/hooks-adicionais.pdf" target="_blank">Hooks Adicionais (pdf)</a>
                    </li>

                    <li>
                        <a href="/docs/react/react-router.pdf" target="_blank">React Router (pdf)</a>
                    </li>

                    <li>
                        <a href="/docs/react/scroll-infinito.pdf" target="_blank">Scroll Infinito (pdf)</a>
                    </li>
                </ul>
            </section>
            
            <ul>
                <li>
                    <Link to="/estudando/react/cursos">Cursos</Link>
                </li>

                <li>
                    <Link to="/estudando/react/pratica">Pratica</Link>
                </li>
           </ul>
        </section>
    )
}

export default React
