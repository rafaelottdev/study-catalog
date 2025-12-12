import { useState, useEffect, useRef } from "react"
import { Link, NavLink } from "react-router-dom"

import styles from "./MenuList.module.css"

const MenuList = ({ show, setShow, burgerRef, isScrolling, active, setActive }) => {
    const menuRef = useRef()

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                show && menuRef.current && 
                !menuRef.current.contains(event.target) && 
                !(burgerRef?.current?.contains(event.target))
            ) {
                setShow(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [show])

    return (
        <ul  ref={menuRef} className={`${styles.nav_list} ${show ? `${styles.show_list}` : ""} ${isScrolling ? `${styles.items_color}` : ""}`}>
            <div className={styles.wrapp_items}>
                <li className={styles.nav_item} onClick={() => setShow(!show)}>
                    <NavLink 
                        to="/estudando" 
                        className={({ isActive }) => 
                            isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link
                        }
                        onClick={() => {
                            setShow(!show)
                            setActive(false)}
                        }
                    >
                        Estudos</NavLink>
                </li>

                <li className={styles.nav_item}>
                    <NavLink to="/projetos" 
                        className={({ isActive }) => 
                            isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link
                        }
                        onClick={() => {
                            setShow(!show)
                            setActive(false)}
                        }
                    >
                        Projetos</NavLink>
                </li>

                <li className={styles.nav_item}>
                    <NavLink to="/recomendações"
                        className={({ isActive }) => 
                            isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link
                        }
                        onClick={() => {
                            setShow(!show)
                            setActive(false)}
                        }
                    >
                        Recomendações</NavLink>
                </li>
            </div>

            <div className={styles.wrapp_items}>
                <li className={styles.nav_item}>
                    <NavLink to="/trabalhando"
                        className={({ isActive }) => 
                            isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link
                        }
                        onClick={() => {
                            setShow(!show)
                            setActive(false)}
                        }
                    >
                        Trabalhando</NavLink>
                </li>

                <li className={styles.nav_item}>
                    <NavLink to="/blog"
                        className={({ isActive }) => 
                            isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link
                        }
                        onClick={() => {
                            setShow(!show)
                            setActive(false)}
                        }
                    >
                        Blog</NavLink>
                </li>

                <li className={`${styles.nav_item} ${styles.nav_item_sublist}`}>
                    <a href="#" className={styles.nav_link} onClick={() => {setActive(!active)}}>
                        Mais
                        <div className={`${styles.more_icon_wrapp} ${active ? `${styles.rotate_arrow}`: ""}`}>
                            <svg viewBox="0 0 20 26">
                                <path d="M14.4036 14.4442L2.88031 26L0 23.1116L10.0831 13L0 2.88843L2.88031 0L14.4036 11.5558C14.7855 11.9389 15 12.4583 15 13C15 13.5417 14.7855 14.0611 14.4036 14.4442Z"/>
                            </svg>
                        </div>
                    </a>

                    <ul className={`${styles.more_sublist} ${active ? `${styles.show_sublist}` : ""}`}>
                        <li className={styles.more_sublist_item}>
                            <NavLink to="/comunidade" 
                                className={({ isActive }) => 
                                    isActive ? `${styles.nav_link} ${styles.active}` : styles.nav_link
                                }
                                onClick={() => setShow(!show)}
                            >
                                Comunidade</NavLink>
                        </li>
                    </ul>
                </li>
            </div>
        </ul>
    )
}

export default MenuList
