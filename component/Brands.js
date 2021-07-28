import React from 'react';
import Link from 'next/link'
import style from "../styles/Brands.module.css"

const Brands = ({brands}) => {
    return (
        <>
        <section className={style.brandsSection}>
            <div className={style.typography}>
                <h1>All Brands</h1>
            </div>
            <div className="container">
                {/* <div className="row">
                    {brands.map((val, index) => {
                        return(
                            <>  
                            <div className="col-lg-3 col-md-4 col-sm-6"  key={index}>
                                <Link href="/products/brands/[brand]" as={`/products/brands/${val}`}>
                                    <a>
                                        <div className={style.brand}>
                                            <div className={style.brandName}>
                                                <span>{val}</span>
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            </>
                        )
                    })}
                </div> */}
                <ol>
                    <Link href="/">
                        <a>
                            <li>All</li>
                        </a>
                    </Link>
                    {brands.map((val, index) => {
                        return(
                            <>
                            <Link href="/products/brands/[brand]" as={`/products/brands/${val}`}>
                                <a>
                                    <li key={index}>{val}</li>
                                </a>
                            </Link>
                            </>
                        )
                    })}
                </ol>
            </div>
        </section>
        </>
    );
}

export default Brands;