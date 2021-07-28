import Nav from "./Nav";
import Hero from "./Hero"
import Brands from "./Brands";
import { useState } from "react";
import { useEffect } from "react";
import baseUrl from "../server/baseUrl"


const Layout = ({children}) => {

    const [brands, setBrands] = useState([])

    const fetchData = async() => {
        const res = await fetch(`${baseUrl}/api/products/brands`)
        const brands = await res.json()
        setBrands(brands)
    }

    useEffect(()=> {
        fetchData()
    },[])

    return (
        <>
        <Nav />
        <Hero />
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-9">
                    {children}
                </div>
                <div className="col-md-3">
                    <p>all tag</p>
                    <Brands brands={brands}/>
                </div>
            </div>
        </div>
        </>
    );
}

export default Layout;
