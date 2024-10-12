import React from 'react'
import styles from "./ClientsStyles.module.css"
import { Link } from 'react-router-dom';
import flipp from "../../../public/flipp.png"
import albertsons from "../../../public/albertsons.png"
import arcelor from "../../../public/Arcelor Mittal.svg"
import dress from "../../../public/dress.png"
import goc from "../../../public/goc.png"
import alberta from "../../../public/alberta.png"
import rhino from "../../../public/rhino.png"
import aeqetas from "../../../public/aeqetas.png"
import safe from "../../../public/safe.png"
import company from "../../../public/company.png"
import mass from "../../../public/mass.png"
import pomp from "../../../public/pomp.png"
import forest from "../../../public/forest.png"
import ready from "../../../public/ready.png"
import cloud from "../../../public/cloud.png"
import paq from "../../../public/paq.png"
import retina from "../../../public/retina.png"
import results from "../../../public/results.png"
import awards from "../../../public/awards.svg"
import clutch from "../../../public/clutch.svg"
import most from "../../../public/most.svg"
import google from "../../../public/google.svg"
import up from "../../../public/up.svg"

function Clients() {
  return (
    <section id='clients' className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <div className={styles.caption}>
                    <p>Clients & Achievements</p>
                </div>
                <h1>Our Recent Clients</h1>
            </div>
            <div className={styles.awards}>
                <div className={styles.awardGrid}>
                    <div className={styles.card}>
                        <Link to="/" >
                            <img className={styles.cardImage} src={flipp} alt='client logo'/>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link to="/" >
                            <img className={styles.cardImage} src={albertsons} alt='client logo'/>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link to="/" >
                            <img className={styles.cardImage} src={arcelor} alt='client logo'/>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link to="/" >
                            <img className={styles.cardImage} src={dress} alt='client logo'/>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link to="/" >
                            <img className={styles.cardImage} src={goc} alt='client logo'/>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link to="/" >
                            <img className={styles.cardImage} src={alberta} alt='client logo'/>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link to="/" >
                            <img className={styles.cardImage} src={rhino} alt='client logo'/>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link to="/" >
                            <img className={styles.cardImage} src={aeqetas} alt='client logo'/>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link to="/" >
                            <img className={styles.cardImage} src={safe} alt='client logo'/>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link to="/" >
                            <img className={styles.cardImage} src={company} alt='client logo'/>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link to="/" >
                            <img className={styles.cardImage} src={mass} alt='client logo'/>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link to="/" >
                            <img className={styles.cardImage} src={pomp} alt='client logo'/>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link to="/" >
                            <img className={styles.cardImage} src={forest} alt='client logo'/>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link to="/" >
                            <img className={styles.cardImage} src={ready} alt='client logo'/>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link to="/" >
                            <img className={styles.cardImage} src={cloud} alt='client logo'/>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link to="/" >
                            <img className={styles.cardImage} src={paq} alt='client logo'/>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link to="/" >
                            <img className={styles.cardImage} src={retina} alt='client logo'/>
                        </Link>
                    </div>
                    <div className={styles.card}>
                        <Link to="/" >
                            <img className={styles.cardImage} src={results} alt='client logo'/>
                        </Link>
                    </div>
                </div>
            
            </div>
            <div className={styles.separator}></div>
            <div className={styles.list}>
                <Link to="/" >
                    <img className={styles.awardImage} src={awards} alt='client logo'/>
                </Link>
                <Link to="/" >
                    <img className={styles.awardImage} src={clutch} alt='client logo'/>
                </Link>
                <Link to="/" >
                    <img className={styles.awardImage} src={most} alt='client logo'/>
                </Link>
                <Link to="/" >
                    <img className={styles.awardImage} src={google} alt='client logo'/>
                </Link>
                <Link to="/" >
                    <img className={styles.awardImage} src={up} alt='client logo'/>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Clients