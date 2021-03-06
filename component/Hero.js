import Image from 'next/image'
import img from "../public/pexels-arun-thomas-5878303.jpg"
import SearchIcon from '@material-ui/icons/Search';
import img01 from "../public/1619402399637.png"
import baseUrl from "../server/baseUrl"
import Link from 'next/link'
import style from "../styles/Hero.module.css"
import { useState, useEffect } from 'react';


const Hero = () => {

  const [inputs, setInputs] = useState('');
  const [products, setProducts] = useState();
  const [List, setList] = useState([]);

  const fetchData = async () => {
    return await fetch(`${baseUrl}/api/search`)
      .then(response => response.json())
      .then(data => {
         setList(data)
         setProducts(data)
      }
  )}

  const updateInput = async (e) => {
    const input = e.target.value
      const filtered = products.filter(val => {
        return val.name.toLowerCase().includes(input.toLowerCase())
       })
       setInputs(input);
       setList(filtered);
  }

  useEffect( () => {fetchData()},[]);

  return (
    <>
    <section className={style.heroSection}>
        <Image src={img} alt="hero"  layout="fill"/>

    <div className={style.searchBar}>
      <div className={style.position}>
        <div className={style.searchBarText}>
            <h1>Search your product name</h1>
        </div>
        <div className={style.form}>
            <input
            type="search"
            placeholder="Search"
            onChange={updateInput}
            value={inputs}
            />
            <button ><SearchIcon id={style.searchIcon} /></button>
        </div>

        {inputs ? (
          <ul className={style.searchList}> 
          {List.map((val, index) => {
            return(
              <>
              <Link href={`/products/[id]`} as={`/products/${val._id}`}>
                <a key={index}>
                  <li className={style.searchItem}>
                    <div className={style.searchItemImg}>
                      <Image src={img01} width={80} height={80} alt={val.name}/>
                    </div>
                    <div className={style.searchItemText}>
                      <p>{val.name}</p>
                      <p>{val.dec}</p>
                    </div>
                  </li>
                </a>
              </Link>
              </>
            )
          })}
        </ul>
        ) : null}

        </div>
    </div>

    </section>
    </>
  )
}

export default Hero;
