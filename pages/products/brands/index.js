import Link from 'next/link'
import baseUrl from "../../../server/baseUrl"
import style from "../../../styles/Brands.module.css"

const index = ({brands}) => {
    return (
        <>
        <section className={style.brandsSection}>
            <div className="container">
                <div className="row">
                    {brands.map((val, index) => {
                        return(
                            <>  
                            <div className="col-lg-3 col-md-4 col-sm-6"  key={index}>
                                <Link href="/products/brands/[brand]" as={`/products/brands/${val}`}>
                                    <a>
                                        <div className={style.brand}>
                                            <div className={style.brandName}>
                                                <span>{val}</span>
                                                {/* <Image src={img03} alt="brands" /> */}
                                            </div>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </section>
        </>
    );
}

export const getServerSideProps = async() => {
    const res = await fetch(`${baseUrl}/api/products/brands`)
    const brands = await res.json()
  
    return{
      props: {
        brands : brands
      }
    }
}

export default index;