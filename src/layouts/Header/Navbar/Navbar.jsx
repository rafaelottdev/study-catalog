import { useState } from "react"

import MenuHamburguer from "./MenuHamburguer/MenuHamburguer"
import MenuList from "./MenuList/MenuList"

import arrowLogo from "../../../assets/icons/arrow-right.svg"

import styles from "./Navbar.module.css"


const Navbar = () => {
    const [show, setShow] = useState(false)

    return (
        <nav>
            <MenuHamburguer onClick={() => setShow(!show)} show={show}/>

            <MenuList show={show}/>
        </nav>
    )
}

export default Navbar
