import { Link } from "react-router-dom"
import styles from "./StudySubList.module.css"
import { useState } from "react"

const StudySubList = ({ objList }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <ul className={styles.tecnology_sublist}>
            {
                objList.items.map((subList, id) => {
                    return (
                        <li key={id} className={styles.tecnology_item_sublist}>
                            <Link to="">{subList}</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default StudySubList
