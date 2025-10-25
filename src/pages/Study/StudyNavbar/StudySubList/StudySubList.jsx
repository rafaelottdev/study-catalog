import { Link } from "react-router-dom"
import styles from "./StudySubList.module.css"

const StudySubList = ({ objList, activeItems }) => {

    return (
        <ul className={`${styles.tecnology_sublist} ${activeItems[objList.id] ? `${styles.expand_sublist}` : ""}`}>
            {
                objList.items.topics.map((subList, id) => {
                    return (
                        <li key={id} className={styles.tecnology_item_sublist}>
                            <Link to={`/estudando/${objList.title.replace(/[ /]/g, "").toLowerCase()}/${subList.toLowerCase()}`}>{subList}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default StudySubList
