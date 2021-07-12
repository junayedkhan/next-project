import Image from 'next/image'
import img from "../public/pexels-arun-thomas-5878303.jpg"
import SearchIcon from '@material-ui/icons/Search';
import style from "../styles/Hero.module.css"

const Hero = () => {
  
  return (
    <>
    <section className={style.heroSection}>
        <Image src={img} alt=""  layout="fill"/>

    <div className={style.searchBar}>
        <div className={style.searchBarText}>
            <h1>Lorem ipsum dolor sit amet</h1>
        </div>
        <form action="">
            <input type="search" placeholder="Search for anything" />
            <button type="submit"><SearchIcon id={style.searchIcon} /></button>
        </form>
    </div>

    </section>
    </>
  )
}

export default Hero;