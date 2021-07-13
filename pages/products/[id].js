import baseUrl from "../../server/baseUrl"
import Image from 'next/image'
import img01 from "../../public/wp7771146.webp"
import img02 from "../../public/Untitled-2.png"
import Button from '@material-ui/core/Button';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/zoom/zoom.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/swiper.min.css";
import style from "../../styles/Product.module.css"

import SwiperCore, {
    Zoom,Navigation,Pagination
} from 'swiper/core';
import Link from "next/link";
  
SwiperCore.use([Zoom,Navigation,Pagination]);

const id = ({data}) => {

    const sliderImg = [
        {src: img02, alt: data.name},
        {src: img02, alt: data.name},
        {src: img02, alt: data.name},
        {src: img02, alt: data.name},
    ]

    const afiliateMarket = [
        {link : "/", src : img01, GB464 : "20,000", GB664: "25,000", GB8128 : "28,000"},
        {link : "/", src : img01, GB464 : "20,000", GB664: "25,000", GB8128 : "28,000"},
        {link : "/", src : img01, GB464 : "20,000", GB664: "25,000", GB8128 : "28,000"},
    ]


    return (
        <>
        <main>
        <section className={style.product_into}>
        <div className="container">
            <div className="row">

                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.prodcutImg}>
                    <Swiper
                    zoom={true}
                    className="mySwiper"
                    style={{'--swiper-navigation-color': '#333','--swiper-pagination-color': '#333'}}
                    navigation={true}
                    pagination={{"clickable": true}}
                    >
                    {sliderImg.map((val, index) => {
                        return(
                            <>
                            <SwiperSlide key={index}>
                                <div className="swiper-zoom-container">
                                    <Image src={val.src} alt={val.alt} height={450} />
                                </div>
                            </SwiperSlide>
                            </>
                        )
                    })}
                    </Swiper>
                    </div>
                </div>
    
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className={style.product_details}>
                        <div className={style.product_title}>
                            <h1>{data.name}</h1>
                            <p>offical</p>
                        </div>
                        <div className="table-responsive">
                            <table id={style.table} className="table table-hover text-center">
                                <thead className={style.thead}>
                                    <tr>
                                        <th id={style.middle}>RAM/ROM</th>
                                        <th id={style.middle}>4/64GB</th>
                                        <th id={style.middle}>6/64GB</th>
                                        <th id={style.middle}>8/128GB</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th id={style.middle}>Bangladesh</th>
                                        <td id={style.middle}>20,000</td>
                                        <td id={style.middle}>20,000</td>
                                        <td id={style.middle}>20,000</td>
                                    </tr>
                                    <tr>
                                        <th id={style.middle}>India</th>
                                        <td id={style.middle}>20,000</td>
                                        <td id={style.middle}>20,000</td>
                                        <td id={style.middle}>20,000</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="table-responsive">
                            <table id={style.table} className="table table-hover text-center">
                                <thead className={style.thead}>
                                    <tr>
                                        <th id={style.middle}>RAM/ROM</th>
                                        <th id={style.middle}>4/64GB</th>
                                        <th id={style.middle}>6/64GB</th>
                                        <th id={style.middle}>8/128GB</th>
                                        <th id={style.middle}>BAY NOW</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {afiliateMarket.map((val, index) => {
                                        return(
                                            <>
                                            <tr key={index}>
                                                <th id={style.middle}><Image src={val.src} id={style.imgmaddle} width="100%" height="30px" alt="product"/></th>
                                                <td id={style.middle}>
                                                {val.GB464}
                                                </td>
                                                <td id={style.middle}>
                                                {val.GB664}
                                                </td>
                                                <td id={style.middle}>
                                                {val.GB8128}
                                                </td>
                                                <td id={style.middle}>
                                                    <Link href={val.link}>
                                                        <a><Button id={style.actinBtn}>bay</Button></a>
                                                    </Link>
                                                </td>
                                            </tr>
                                            </>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>  
                    </div>
                </div>
    
            </div>
        </div>
        </section>

        <section className={style.product_specification}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className={style.product_name}>
                        <h2><span>{data.name}</span> - Full Specifications</h2>
                        </div>
                        <div className={style.specification}>

                            <table id={style.table} className="table table-hover">
                                <thead className={style.thead}>
                                <tr>
                                    <th className={style.th}><span>Lunch</span></th>
                                    <th className={style.th}></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th className={style.spec_title}>Announced</th>
                                    <td className={style.spec_value}>2021, May 18</td>
                                </tr>
                                <tr>
                                    <th className={style.spec_title}>Status</th>
                                    <td className={style.spec_value}>Available. Released 2021, June 20</td>
                                </tr>
                                </tbody>
                            </table>

                            <table id={style.table} className="table table-hover">
                                <thead className={style.thead}>
                                <tr>
                                    <th className={style.th}><span>Network</span></th>
                                    <th className={style.th}></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className={style.spec_title}>Technology</td>
                                    <td className={style.spec_value}>GSM / HSPA / LTE / 5G</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>2G bands</td>
                                    <td className={style.spec_value}>GSM 850 / 900 / 1800 / 1900 - SIM 1 & SIM 2</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>3G bands</td>
                                    <td className={style.spec_value}>HSDPA 850 / 900 / 2100</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>4G bands</td>
                                    <td className={style.spec_value}>1, 3, 5, 8, 40</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>5G bands</td>
                                    <td className={style.spec_value}>SA/NSA</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Speed</td>
                                    <td className={style.spec_value}>HSPA 42.2/5.76 Mbps, LTE-A</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>GPRS</td>
                                    <td className={style.spec_value}>Yes</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>EDGE</td>
                                    <td className={style.spec_value}>Yes</td>
                                </tr>
                                </tbody>
                            </table>

                            <table id={style.table} className="table table-hover">
                                <thead className={style.thead}>
                                    <tr>
                                        <th className={style.th}><span>Body</span></th>
                                        <th className={style.th}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className={style.spec_title}>Dimensions</td>
                                    <td className={style.spec_value}>163.9 x 75.3 x 8.4 mm (6.45 x 2.96 x 0.33 in)</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Weight</td>
                                    <td className={style.spec_value}>193 g (6.81 oz)</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>SIM</td>
                                    <td className={style.spec_value}>Dual SIM (Nano-SIM, dual stand-by)</td>
                                </tr>
                                </tbody>
                            </table>

                            <table id={style.table} className="table table-hover">
                                <thead className={style.thead}>
                                    <tr>
                                        <th className={style.th}><span>Display</span></th>
                                        <th className={style.th}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className={style.spec_title}>Type</td>
                                    <td className={style.spec_value}>Super AMOLED capacitive touchscreen, 16M colors</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Size</td>
                                    <td className={style.spec_value}>6.58 inches, 104.3 cm2 (~84.5% screen-to-body ratio)</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Resolution</td>
                                    <td className={style.spec_value}>1080 x 2408 pixels, 20:9 ratio (~401 ppi density)</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Multitouch</td>
                                    <td className={style.spec_value}>Yes</td>
                                </tr>
                                </tbody>
                            </table>

                            <table id={style.table} className="table table-hover">
                                <thead className={style.thead}>
                                    <tr>
                                        <th className={style.th}><span>Platform</span></th>
                                        <th className={style.th}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className={style.spec_title}>OS</td>
                                    <td className={style.spec_value}>Android 11, Funtouch 11</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Chipset</td>
                                    <td className={style.spec_value}>MediaTek MT6833 Dimensity 700 5G (7 nm)</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>CPU</td>
                                    <td className={style.spec_value}>Octa-core (2x2.2 GHz Cortex-A76 & 6x2.0 GHz Cortex-A55)</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>GPU</td>
                                    <td className={style.spec_value}>Mali-G57 MC2</td>
                                </tr>
                                </tbody>
                            </table>

                            <table id={style.table} className="table table-hover">
                                <thead className={style.thead}>
                                    <tr>
                                        <th className={style.th}><span>Memory</span></th>
                                        <th className={style.th}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className={style.spec_title}>Card slot</td>
                                    <td className={style.spec_value}>microSDXC (uses shared SIM slot)</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Internal</td>
                                    <td className={style.spec_value}> 64 GB / 128 GB</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>RAM</td>
                                    <td className={style.spec_value}>4 GB / 6 GB</td>
                                </tr>
                                </tbody>
                            </table>

                            <table id={style.table} className="table table-hover">
                                <thead className={style.thead}>
                                    <tr>
                                        <th className={style.th}><span>Camera</span></th>
                                        <th className={style.th}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className={style.spec_title}>Primary camera</td>
                                    <td className={style.spec_value}>48 MP, f/1.8, (wide), 1/2.0, 0.8µm, PDAF <br />2 MP, f/2.4, (macro)<br />2 MP, f/2.4, (depth)</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Secondary camera</td>
                                    <td className={style.spec_value}>8 MP, f/2.0, (wide)</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Features</td>
                                    <td className={style.spec_value}>LED flash, HDR, panorama, HDR</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Video</td>
                                    <td className={style.spec_value}>1080p@30fps, gyro-EIS | 1080p@30fps</td>
                                </tr>
                                </tbody>
                            </table>

                            <table id={style.table} className="table table-hover">
                                <thead className={style.thead}>
                                    <tr>
                                        <th className={style.th}><span>Sound</span></th>
                                        <th className={style.th}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className={style.spec_title}>Alert types</td>
                                    <td className={style.spec_value}>Vibration, MP3, WAV ringtones</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Loudspeaker</td>
                                    <td className={style.spec_value}>Yes</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>3.5mm jack</td>
                                    <td className={style.spec_value}>Yes</td>
                                </tr>
                                </tbody>
                            </table>

                            <table id={style.table} className="table table-hover">
                                <thead className={style.thead}>
                                    <tr>
                                        <th className={style.th}><span>Connectivity</span></th>
                                        <th className={style.th}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className={style.spec_title}>WLAN</td>
                                    <td className={style.spec_value}>Wi-Fi 802.11 a/b/g/n/ac, dual-band, Wi-Fi Direct, hotspot</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Bluetooth</td>
                                    <td className={style.spec_value}>5.0, A2DP, LE</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>GPS</td>
                                    <td className={style.spec_value}>Yes, with A-GPS, GLONASS, GALILEO, BDS</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>NFC</td>
                                    <td className={style.spec_value}>Yes</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>FM radio</td>
                                    <td className={style.spec_value}>Yes</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>USB</td>
                                    <td className={style.spec_value}>Yes</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Infrared port</td>
                                    <td className={style.spec_value}>No</td>
                                </tr>
                                </tbody>
                            </table>

                            <table id={style.table} className="table table-hover">
                                <thead className={style.thead}>
                                    <tr>
                                        <th className={style.th}><span>Features</span></th>
                                        <th className={style.th}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className={style.spec_title}>Sensors</td>
                                    <td className={style.spec_value}>Fingerprint (side-mounted), accelerometer, gyro, proximity, compass</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Messaging</td>
                                    <td className={style.spec_value}>SMS(threaded view), MMS, Email, IM</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Browser</td>
                                    <td className={style.spec_value}>HTML5</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Java</td>
                                    <td className={style.spec_value}>No</td>
                                </tr>
                                </tbody>
                            </table>

                            <table id={style.table} className="table table-hover">
                                <thead className={style.thead}>
                                    <tr>
                                        <th className={style.th}><span>Battery</span></th>
                                        <th className={style.th}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className={style.spec_title}>Battery type</td>
                                    <td className={style.spec_value}>Non-removable Li-Po</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Battery capacity</td>
                                    <td className={style.spec_value}>5000 mAh</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Charging</td>
                                    <td className={style.spec_value}>Fast charging 18W</td>
                                </tr>
                                </tbody>
                            </table>

                            <table id={style.table} className="table table-hover">
                                <thead className={style.thead}>
                                    <tr>
                                        <th className={style.th}><span>More</span></th>
                                        <th className={style.th}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className={style.spec_title}>Made by</td>
                                    <td className={style.spec_value}>China</td>
                                </tr>
                                <tr>
                                    <td className={style.spec_title}>Color</td>
                                    <td className={style.spec_value}>Shiny Black, Glacier Blue</td>
                                </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>

                    <div className="col-md-4">

                    </div>

                </div>

            </div>
        </section>
        </main>
        </>
    );
}

export async function getServerSideProps(context) {
    const id = context.params.id
    const res = await fetch(`${baseUrl}/api/products/${id}`)
    const data = await res.json()

    return { props: { data: data } }
}

export default id;