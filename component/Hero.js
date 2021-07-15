import Image from 'next/image'
import img from "../public/pexels-arun-thomas-5878303.jpg"
import SearchIcon from '@material-ui/icons/Search';
import img01 from "../public/1619402399637.png"
import Link from 'next/link'
import style from "../styles/Hero.module.css"
import { useState, useEffect } from 'react';


const Hero = () => {

  const [input, setInput] = useState('');
  const [products, setProducts] = useState();
  const [List, setList] = useState([]);
  const [view, setView] = useState(false)
  const openMenu= ()=> setView(!view);

  const fetchData = async () => {
    return await fetch('http://localhost:3000/api/products')
      .then(response => response.json())
      .then(data => {
         setList(data)
         setProducts(data)
       });}

  const updateInput = async (e) => {
    const input = e.target.value
      const filtered = products.filter(val => {
        return val.name.toLowerCase().includes(input.toLowerCase())
       })
       setInput(input);
       setList(filtered);
  }

  useEffect( () => {fetchData()},[]);

  console.log(List);

  return (
    <>
    <section className={style.heroSection}>
        <Image src={img} alt=""  layout="fill"/>

    <div className={style.searchBar}>
      <div className={style.position}>
        <div className={style.searchBarText}>
            <h1>Lorem ipsum dolor sit amet</h1>
        </div>
        <div className={style.form}>
            <input
            type="search"
            placeholder="Search for anything"
            onChange={updateInput}
            value={input}
            />
            <button ><SearchIcon id={style.searchIcon} /></button>
        </div>

        {input ? (
          <ul className={style.searchList}> 
          {List.map((val, index) => {
            return(
              <>
              <Link href={`/products/[id]`} as={`/products/${val._id}`}>
                <a>
                  <li className={style.searchItem} key={index}>
                    <div className={style.searchItemImg}>
                      <Image src={img01} width={80} height={80} alt="product"/>
                    </div>
                    <div className={style.searchItemText}>
                      <p>{val.name}</p>
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
