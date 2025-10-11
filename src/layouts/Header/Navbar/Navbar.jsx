import { useState } from "react"

import MenuHamburguer from "./MenuHamburguer/MenuHamburguer"
import MenuList from "./MenuList/MenuList"

import styles from "./Navbar.module.css"

const Navbar = ({ isScrolling }) => {
    const [show, setShow] = useState(false)

    return (
        <nav>
            <MenuHamburguer onClick={() => setShow(!show)} show={show} isScrolling={isScrolling} />

            <MenuList show={show}/>
        </nav>
    )
}

export default Navbar
