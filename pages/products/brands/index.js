import Brands from "../../../component/Brands";
import baseUrl from "../../../server/baseUrl"

const index = ({brands}) => {
    return (
        <>
        <Brands  brands={brands}/>
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

