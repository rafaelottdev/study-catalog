import { Link } from "react-router-dom"
import styles from "./studyNavbar.module.css"
import StudySubList from "./StudySubList/StudySubList"
import { useState } from "react"

const studyNavbar = () => {
    const studyData = [
        {
            id: 1,
            title: "Html / Css",
            items: ["Cursos", "Especificos"]
        },
        {
            id: 2,
            title: "Javascript",
            items: ["Cursos", "Especificos"]
        },
        {
            id: 3,
            title: "Typescript",
            items: ["Cursos", "Documentação"]
        },
        {
            id: 4,
            title: "React",
            items: ["Cursos", "Soltos", "Pratica"]
        },
        {
            id: 5,
            title: "Vue",
            items: ["Cursos", "Soltos", "Pratica"]
        },
        {
            id: 6,
            title: "Git",
            items: ["Cursos"]
        },
        {
            id: 7,
            title: "Linux",
            items: ["Cursos", "Soltos", "Imagens"]
        },
        {
            id: 8,
            title: "Outros",
            items: []
        }
    ]

    const [isExpanded, setIsExpanded] = useState(false)
    // const [isSubListExpanded, setIsSubListExpanded] = useState(false)

    const [activeItems, setActiveItems] = useState({})

    function toggleItem(id) {
        setActiveItems(prev => (
            {
                ...prev,
                [id]: !prev[id]
            }
        ))
    }

    return (
        <nav className={styles.tecnology_nav}>
            <ul className={styles.intro_list}>
                <li className={styles.intro_item}>
                    <div className={styles.intro_wrapp}>
                        <Link to="">Introdução</Link>

                        <button 
                        className={`${styles.intro_icon_btn} ${isExpanded ? `${styles.icon_rotate}` : ""}`} 
                        onClick={() => setIsExpanded(!isExpanded)}
                        >
                            <svg viewBox="0 0 20 26">
                                <path d="M14.4036 14.4442L2.88031 26L0 23.1116L10.0831 13L0 2.88843L2.88031 0L14.4036 11.5558C14.7855 11.9389 15 12.4583 15 13C15 13.5417 14.7855 14.0611 14.4036 14.4442Z"/>
                            </svg>
                        </button>
                    </div>

                    <ul className={`${styles.tecnology_list} ${isExpanded ? `${styles.expand}`: ""}`}>
                        {
                            studyData.map((objList) => {
                                return (
                                    <li key={objList.id} className={styles.tecnology_item}>
                                        <div className={styles.tecnology_wrapp}>
                                            <Link to="">{objList.title}</Link>

                                            <button 
                                                className={`
                                                    ${styles.tecnology_icon_btn} 
                                                    ${activeItems[objList.id] ? `${styles.icon_rotate}` : ""}`}
                                                    onClick={() => toggleItem(objList.id)}
                                            >
                                                <svg viewBox="0 0 20 26">
                                                    <path d="M14.4036 14.4442L2.88031 26L0 23.1116L10.0831 13L0 2.88843L2.88031 0L14.4036 11.5558C14.7855 11.9389 15 12.4583 15 13C15 13.5417 14.7855 14.0611 14.4036 14.4442Z"/>
                                                </svg>
                                            </button>
                                        </div>

                                        <StudySubList objList={objList} activeItems={activeItems} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default studyNavbar

// utilizar useParams para rotas dinamicas, sem precisar ficar fazendo na unha uma por uma, colocar o nome da rota aqui para não ficar apenas um numero, tipo ao invés de /estudando/1 ficar /estudando/html-css-cursos, colocar dois, um para o cursos e outro para especificos /estudando/html-css-especificos etc.
