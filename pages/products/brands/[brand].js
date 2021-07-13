import baseUrl from "../../../server/baseUrl"
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import img from "../../../public/1619402399637.png"
import style from "../../../styles/Product.module.css"

const brand = ({brands}) => {
    return (
        <>
        <Head>
            <title>Brands</title>
            <meta name="description" content="mobile price, mobile price in bd, mobile price in bangladesh mobile price in india" />
        </Head>

        <section className={style.productSection}>
            <div className={style.typography}>
            {/* <h1>All Brands</h1> */}
            </div>
            <div className="container">
            <div className="row">
                {brands.map((props, index) => {
                    const{_id, name, dec, brand} = props
                        return(
                        <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                            <div className={style.product}>
                                <div>
                                    <Image src={img} width={200} height={200} alt="product"/>
                                </div>
                                <div>
                                    <h4 className={style.productName}>{name}</h4>
                                </div>
                                <div className={style.dec}>
                                    <p>{dec}</p>
                                </div>
                                <div className="text-center">
                                    <Link href={`/products/[id]`} as={`/products/${_id}`}>
                                        <a><Button id={style.detailsBtn}>view Details</Button></a>
                                    </Link>
                                </div>
                            </div>
                        </div>        
                        )
                })}
            </div>
            </div>
        </section>
        </>
    );
}

export const getServerSideProps = async(context) => {
    const brand = context.params.brand
    const res = await fetch(`${baseUrl}/api/products/brands/${brand}`)
    const brands = await res.json()

    return{
        props:{
            brands : brands
        }
    }
}

export default brand;