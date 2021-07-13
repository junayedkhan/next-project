import Layout from '../component/Layout'
import { useState } from 'react';
import Progress from "../component/Progress"
import Router from "next/router"
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  const [loading, setloading] = useState(false)

  Router.events.on(`routeChangeStart`, (url) => {
    setloading(true)
  })

  Router.events.on(`routeChangeComplete`, (url) => {
    setloading(false)
  })

  return (
    <>
    
    <div className="sticky-top">
      {loading && <Progress />}
    </div>

    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  )

}

export default MyApp

