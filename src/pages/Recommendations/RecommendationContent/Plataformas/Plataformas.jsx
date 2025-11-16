import styles from "../RecommendationContent.module.css"

const Plataformas = () => {
    return (
        <section className={styles.recommendation_container}>
            <ul  className={styles.recommendation_list}>
                <li>
                    <a href="https://www.workana.com/pt/hire/freelancers?locale=pt_BR&utm_source=google&utm_medium=cpc&utm_term=Workana&utm_device=c&utm_category=brand&utm_campaign=br-workana&gclid=CjwKCAjw4P6oBhBsEiwAKYVkq6ZASba-R7jy7SWJBdw0BxLdGg5lGxRecTU1FEt_3PvB5Vt-GzCjvxoChbUQAvD_BwE" target="_blank">Workana</a>
                </li>

                <li>
                    <a href="https://freelancer.com.br/" target="_blank">Freelancer.com.br</a>
                </li>

                <li>
                    <a href="https://www.99freelas.com.br/" target="_blank">99 Frelas</a>
                </li>

                <li>
                    <a href="https://br.jooble.org/" target="_blank">Jooble</a>
                </li>

                <li>
                    <a href="https://www.freelancer.com/" target="_blank">Freelancer</a>
                </li>

                <li>
                    <a href="https://vibbra.com.br/" target="_blank">Vibbra</a>
                </li>

                <li>
                    <a href="https://www.toptal.com/" target="_blank">Toptal</a>
                </li>

                <li>
                    <a href="https://www.scalablepath.com/" target="_blank">Scalable Path</a>
                </li>

                <li>
                    <a href="https://www.upwork.com/" target="_blank">Upwork</a>
                </li>
            </ul>
        </section>
    )
}

export default Plataformas
