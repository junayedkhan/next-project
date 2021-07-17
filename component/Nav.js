import Link from 'next/link'
import { useEffect, useState } from 'react';
import style from "../styles/Nav.module.css"
import { Container } from 'react-bootstrap';

const Nav = () => {
    const [isOpen,setIsOpen] = useState(false);
    const [navColor, setNavColor] = useState(false)
    const openMenu= ()=> setIsOpen(!isOpen);

    const NavLink = [
        {href: "/", name: "Home"},
        {href: "/products/brands", name: "Brands"},
        {href: "/", name: "news & reviews"},
    ]

    const scrollHandle = () => {
        if(window.scrollY >= 80){
            setNavColor(true)
        }
        else{
            setNavColor(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandle) 
    },[])


    return (
        <>
            <header className={style.header} id={navColor ? style.active : ""}>
                <Container>
                    <nav className={style.navbar}>
                        <Link href='/'>
                        <a className={style.navlogo}>[BrandLogo]</a>
                        </Link>
                    <ul className={isOpen === false ? 
                            style.navmenu : style.navmenu +' '+ style.active}>
                        
                        {NavLink.map((val, index) => {
                            return(
                            <li className={style.navitem} key={index}>
                                <Link href={val.href} >
                                <a className={isOpen === false ? 
                                            style.navlink : style.navlink+' '+style.active}
                                            onClick={openMenu}>{val.name}</a>
                                </Link>
                            </li>
                            )
                        })}

                    </ul>
                    <button className={isOpen === false ? 
                                        style.hamburger : style.hamburger+' '+style.active}
                                        onClick={openMenu}
                                        >
                        <span className={style.bar}></span>
                        <span className={style.bar}></span>
                        <span className={style.bar}></span>
                    </button>
                    </nav>
                    </Container>
            </header>
        </>
    );
}

export default Nav;