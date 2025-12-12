import MenuHamburguer from "./MenuHamburguer/MenuHamburguer"
import MenuList from "./MenuList/MenuList"

import styles from "./Navbar.module.css"

import { useRef } from "react"

const Navbar = ({ isScrolling, show, setShow, active, setActive }) => {
    const burgerRef = useRef()

    return (
        <nav>
            <MenuHamburguer ref={burgerRef} onClick={() => setShow(!show)} show={show} isScrolling={isScrolling} />

            <MenuList show={show} setShow={setShow} burgerRef={burgerRef} isScrolling={isScrolling} active={active} setActive={setActive}/>
        </nav>
    )
}

export default Navbar
