import styles from "./RecommendationNavbar.module.css"

import { Link } from "react-router-dom"

const RecommendationNavbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.recommendation_list}>
                <li className={styles.recommendation_item}>
                    <Link to=".">Videos</Link>
                </li>

                <li className={styles.recommendation_item}>
                    <Link to="canais">Canais</Link>
                </li>

                <li className={styles.recommendation_item}>
                    <Link to="sites">Sites</Link>
                </li>

                <li className={styles.recommendation_item}>
                    <Link to="ferramentas">Ferramentas</Link>
                </li>

                <li className={styles.recommendation_item}>
                    <Link to="plataformas">Plataformas</Link>
                </li>

                <li className={styles.recommendation_item}>
                    <Link to="livros">Livros</Link>
                </li>

                <li className={styles.recommendation_item}>
                    <Link to="cursos">Cursos</Link>
                </li>

                <li className={styles.recommendation_item}>
                    <Link to="inspiracoes">Inspirações</Link>
                </li>

                <li className={styles.recommendation_item}>
                    <Link to="imagens">Imagens</Link>
                </li>
            </ul>
        </nav>
    )
}

export default RecommendationNavbar
