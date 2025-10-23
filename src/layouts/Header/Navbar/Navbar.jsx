import MenuHamburguer from "./MenuHamburguer/MenuHamburguer"
import MenuList from "./MenuList/MenuList"

import styles from "./Navbar.module.css"

const Navbar = ({ isScrolling, show, setShow }) => {
    return (
        <nav>
            <MenuHamburguer onClick={() => setShow(!show)} show={show} setShow={setShow} isScrolling={isScrolling} />

            <MenuList show={show} setShow={setShow}/>
        </nav>
    )
}

export default Navbar
