import RecommendationNavbar from "./RecommendationNavbar/RecommendationNavbar"
import RecommendationContentSlide from "./RecommendationContentSlide/RecommendationContentSlide"

const Recommendations = () => {
    return (
        <section>
            <div>
                <h2>Recomendações</h2>
            </div>

            <RecommendationNavbar />            

            <RecommendationContentSlide />
        </section>
    )
}

export default Recommendations
