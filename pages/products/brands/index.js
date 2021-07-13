import Link from 'next/link'
import baseUrl from "../../../server/baseUrl"

const index = ({brands}) => {
    return (
        <>
        <section className={""}>
            <div className="container">
                <div className="row">
                    {brands.map((val, index) => {
                        return(
                            <>  
                            <div className="col-lg-3 col-md-4 col-sm-6"  key={index}>
                                <Link href="/products/brands/[brand]" as={`/brands/${val}`}>
                                    <a>
                                        <div className={""}>
                                            <span>{val}</span>
                                            {/* <Image src={img03} alt="brands" /> */}
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