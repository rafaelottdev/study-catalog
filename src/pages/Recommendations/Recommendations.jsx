import styles from "./Recommendations.module.css"

import RecommendationNavbar from "./RecommendationNavbar/RecommendationNavbar"
import RecommendationContent from "./RecommendationContent/RecommendationContent"

const Recommendations = () => {
    return (
        <section className={styles.recommendation_container}>
            <div className={styles.recommendation_title}>
                <h2>Recomendações</h2>
            </div>

            <RecommendationNavbar />

            <RecommendationContent />
        </section>
    )
}

export default Recommendations
