import baseUrl from '../server/baseUrl'
import ProdcutList from "../component/ProductList"


export default function Home({products}) {

  return (
    <>
    <section className="products">
      <ProdcutList products={products} />
    </section>


    </>
  )
}

export const getServerSideProps = async({query}) => {
  const page = query.page || 1
  const res = await fetch(`${baseUrl}/api/products?page=${page}`)
  const products = await res.json()

  return{
    props: {
      products : products
    }
  }
}
