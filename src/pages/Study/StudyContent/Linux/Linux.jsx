import styles from "../StudyContent.module.css"

import { Link } from "react-router-dom"

const Linux = () => {
    return (
        <section className={styles.container}>
            <h3>Linux Resumos</h3>

            <ul className={styles.main_list}>
                <li>
                    <a href="/docs/linux/imgs.zip" download>Imagens (zip)</a>
                </li>

                <li>
                    <a href="/docs/linux/linux-infos.pdf" target="_blank">Infos (pdf)</a>
                </li>

                <li>
                    <a href="/docs/linux/comandos-linux.pdf" target="_blank">Comandos (pdf)</a>
                </li>
            </ul>

            <ul className={styles.list}>
                <li>
                    <Link to="/estudando/linux/cursos">Cursos</Link>
                </li>
           </ul>
        </section>
    )
}

export default Linux
