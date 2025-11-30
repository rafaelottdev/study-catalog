import { Link } from "react-router-dom"
import styles from "./StudyNavbar.module.css"
import { useState, useEffect, useRef } from "react"

const studyNavbar = () => {
    const studyData = [
        {id: 1, title: "Html / Css", path: "htmlcss"},

        {id: 2, title: "Javascript", path: "javascript"},

        {id: 3, title: "Typescript", path: "typescript"},

        {id: 4, title: "React", path: "react"},

        {id: 5,title: "Vue",path: "vue"},

        {id: 6, title: "Git", path: "git"},

        {id: 7, title: "Linux", path: "linux"},

        {id: 8, title: "Outros", path: "outros"}
    ]

    const [isExpanded, setIsExpanded] = useState(false)
    const [activeItems, setActiveItems] = useState({})
    const [selectedItem, setSelectedItem] = useState()

    const navRef = useRef(null)

    function toggleItem(id) {
        setActiveItems(prev => (
            {
                ...prev,
                [id]: !prev[id]
            }
        ))
    }

    useEffect(() => {
        function handleClickOutSide(event) {
            if(navRef.current && !navRef.current.contains(event.target)) {
                setIsExpanded(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutSide)

        return () => {
            document.removeEventListener("mousedown", handleClickOutSide)
        }
    }, [])

    const handleLinkClick = () => {
        setIsExpanded(false)
    }

    return (
        <nav className={styles.tecnology_nav} ref={navRef}>
            <ul className={styles.intro_list}>
                <li className={styles.intro_item}>
                    <div className={styles.intro_wrapp}>
                        <Link to="">Introdução</Link>

                        <button 
                        className={`
                            ${styles.intro_icon_btn} 
                            ${isExpanded ? `${styles.icon_rotate}` : ""}`} 
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
                                            <Link 
                                                to={`/estudando/${objList.path}`}
                                                onClick={() => handleLinkClick}
                                            >
                                                {objList.title}
                                            </Link>
                                        </div>
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
