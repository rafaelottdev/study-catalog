import Home from "./Home/Home"
import AboutWebsite from "./AboutWebsite/AboutWebsite"
import AboutMe from "./AboutMe/AboutMe"
import Skills from "./Skills/Skills"
import FeaturedProject from "./FeaturedProject/FeaturedProject"

import styles from "./MainContent.module.css"

const MainContent = () => {
    return (
        <div className={styles.layout}>
            <div className={styles.sectionGroupTop}>
                <Home />
                <AboutWebsite />
            </div>

            <div className={styles.sectionGroupBottom}>
                <AboutMe />
                <Skills />
                <FeaturedProject />
            </div>
        </div>
    )
}

export default MainContent
