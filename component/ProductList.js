import React, { useState, useEffect } from "react"
import ReactPaginate from "react-paginate"
import { useRouter } from "next/router"
import Image from 'next/image'
import Link from 'next/link'
import Button from '@material-ui/core/Button';
import img from "../public/1619402399637.png"
import style from "../styles/Product.module.css"
import { Style } from "@material-ui/icons"


const ProductList = ({ products }) => {
  const [prodcuts, setProdcuts] = useState([])
  const router = useRouter()

  useEffect(() => {
    if (products) {
      if (products.error) {
      } else {
        setProdcuts(products.products)
      }
    }
  }, [products])


  const handlePagination = page => {
    const path = router.pathname
    const query = router.query
    query.page = page.selected + 1
    router.push({
      pathname: path,
      query: query,
    })
  }

  return (
    <>
      <section className={style.productSection}>
        <div className={style.typography}>
          <h1>New Arrivals</h1>
        </div>
        <div className="container">
        <div className="row">
            {prodcuts.map((props, index) => {
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

    <div className={style.paginate}>
    <ReactPaginate
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        previousLabel={"< PREV"}
        nextLabel={"NEXT >"}
        breakLabel={"..."}
        initialPage={products.curPage - 1}
        pageCount={products.maxPage}
        onPageChange={handlePagination}
        containerClassName={style.paginateContainer}
        pageClassName={style.paginateLi}
        pageLinkClassName={style.paginateLink}
        previousLinkClassName={style.paginatePrev}
        nextLinkClassName={style.paginateNext}
        activeClassName={style.activePaginate}
      />
    </div>
    </>
  )
}
export default ProductList





















// import React from 'react';

// const ProductList = () => {
//     return (
//         <>

//         </>
//     );
// }

// export default ProductList;