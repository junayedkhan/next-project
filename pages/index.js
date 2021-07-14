import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import baseUrl from '../server/baseUrl'
import Button from '@material-ui/core/Button';
import img from "../public/1619402399637.png"
import style from "../styles/Product.module.css"


export default function Home({products}) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="mobile price, mobile price in bd, mobile price in bangladesh mobile price in india" />
      </Head>

      <section className={style.productSection}>
        <div className={style.typography}>
          <h1>New Arrivals</h1>
        </div>
        <div className="container">
        <div className="row">
            {products.slice(0, 32).map((props, index) => {
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
                                <Link href={`/products/[id]`} as={`/products/${name}`}>
                                    <a><Button id={style.actinBtn}>view Details</Button></a>
                                </Link>
                            </div>
                        </div>
                    </div>        
                    )
              })}
          </div>
        </div>
      </section>
      
      <section>

      </section>


    </>
  )
}

export const getStaticProps = async() => {
  const res = await fetch(`${baseUrl}/api/products`)
  const products = await res.json()

  return{
    props: {
      products : products
    }
  }
}
