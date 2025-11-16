import styles from "../RecommendationContent.module.css"

const Sites = () => {
    return (
        <section className={styles.recommendation_container}>
            <ul className={styles.recommendation_list}>
                <li>
                    <a href="https://www.codewars.com/" target="_blank">Codewars</a>
                </li>

                <li>
                    <a href="https://www.hackerrank.com/" target="_blank">HackerRank</a>
                </li>

                <li>
                    <a href="https://www.frontendmentor.io/" target="_blank">Frontend Mentor</a>
                </li>

                <li>
                    <a href="https://cssbattle.dev/" target="_blank">CssBattle</a>
                </li>

                <li>
                    <a href="https://coderbyte.com/" target="_blank">CoderByte</a>
                </li>

                <li>
                    <a href="https://javascript30.com/" target="_blank">Javascript30</a>
                </li>

                <li>
                    <a href="https://beecrowd.com/pt/" target="_blank">BeeCrowd</a>
                </li>
            </ul>
        </section>
    )
}

export default Sites
