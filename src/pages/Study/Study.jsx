import { Link } from "react-router-dom"
import styles from "./Study.module.css"

const Study = () => {
    return (
        <section>
            <section> {/* Colocar isso em um componente, o nome pode ser studyList ou studyNavbar, acho que da pra componentizar as sublistas tambem, tipo studysublisthtmlcss <- exemplo, encontrar nome melhor*/}
                <ul>
                    <li>
                        <Link to="">Introdução</Link>

                        <ul>
                            <li>
                                <Link to="">Html / Css</Link>

                                <ul>
                                    <li>
                                        <Link to="">Cursos</Link>
                                    </li>

                                    <li>
                                        <Link to="">Especificos</Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link to="">Javascript</Link>

                                <ul>
                                    <li>
                                        <Link to="">Cursos</Link>
                                    </li>

                                    <li>
                                        <Link to="">Especificos</Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link to="">Typescript</Link>

                                <ul>
                                    <li>
                                        <Link to="">Cursos</Link>
                                    </li>

                                    <li>
                                        <Link to="">Documentação</Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link to="">React</Link>

                                <ul>
                                    <li>
                                        <Link to="">Cursos</Link>
                                    </li>

                                    <li>
                                        <Link to="">Soltos</Link>
                                    </li>

                                    <li>
                                        <Link to="">Pratica</Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link to="">Vue</Link>

                                <ul>
                                    <li>
                                        <Link to="">Cursos</Link>
                                    </li>
                                    <li>
                                        <Link to="">Soltos</Link>
                                    </li>
                                    <li>
                                        <Link to="">Pratica</Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link to="">Git</Link>

                                <ul>
                                    <li>
                                        <Link to="">Cursos</Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link to="">Linux</Link>

                                <ul>
                                    <li>
                                        <Link to="">Cursos</Link>
                                    </li>

                                    <li>
                                        <Link to="">Soltos</Link>
                                    </li>

                                    <li>
                                        <Link to="">Imagens</Link>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <Link to="">Outros</Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </section>

            <section> {/* Transformar esse section em componente, o nome pode ser StudyContent */}
                <p>Esse é o lugar onde guardo as anotações de tudo o que estudei até hoje</p>

                <p>Essas não são anotações feitas para ensinar outras pessoas, são apenas a minha visão sobre o que aprendi.</p>

                <p>Elas servem para que eu mesmo entenda melhor determinados assuntos.</p>

                <p>Se você tiver interesse em ver a perspectiva de alguém que está aprendendo ou quiser tentar aprender junto comigo por meio dessas anotações, fique à vontade.</p>

                <p>Será um prazer!</p>
            </section>
        </section>
    )
}

export default Study
// COMEÇAR A ESTRUTURAR IGUAL AO QUE O CHATGPT DISSE
