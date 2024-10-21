import React from 'react'
import styles from "./FeauturedStyles.module.css"
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5'; // Import the arrow icon
import dribble from "/Dribbble_Shot.webp"
import project2 from "/project2.jpg"
import sylvestre from "/Sylvestre & Co..jpg"
import shepherd from "/shepherd.webp"
import asset from "/AssetComet.jpg"
import ready from "/ReadyMode.jpg"
import dress from "/Dress For Success Toronto.jpg"
import lite from "/Lite 1.jpg"

function Featured() {
  return (
    <section id='work' className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.left}>
                <div className={styles.titleBlock}>
                    <div className={styles.caption}>Featured Work</div>
                    <p className={styles.leftP1}>Some work we are proud of</p>
                    <p className={styles.leftP}> Our goal is to nurture your vision and provide innovative, custom solutions for all your marketing needs.</p>
                    <div className={styles.buttons}>
                        <button className={styles.requestButton}>Request a proposal <IoArrowForward /></button>
                        <Link to="/" className={styles.link}>
                        See all work <IoArrowForward />
                        </Link>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <p className={styles.heading}>Featured Projects</p>
                <div className={styles.projectsContainer}>
                    <div className={styles.projectList}>
                        <div className={styles.item}>
                            <div className={styles.projectCard}>
                                <div className={styles.projectImage}>
                                    <img className={styles.pImage} src={dribble} alt="Project Image"/>
                                </div>
                                <div className={styles.cardDetails}>
                                <div className={styles.workInfoMain}>
                                                <div className={styles.workTitle}>
                                                    <p className={styles.featuredcap}>Website</p>
                                                    <div className={styles.workSubTitle1}>
                                                        <p className={styles.workSubTitleP1}>Flipp</p>
                                                        <p className={styles.workSubTitleP2}>Web Design and Development for a Professional Business</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className={styles.requestButton}>Case Study <IoArrowForward /></button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item2}>
                            <div className={styles.projectCard}>
                                <div className={styles.projectImage}>
                                    <img className={styles.pImage} src={project2} alt="Project Image"/>
                                </div>
                                <div className={styles.cardDetails}>
                                <div className={styles.workInfoMain}>
                                                <div className={styles.workTitle}>
                                                    <p className={styles.featuredcap}>Website</p>
                                                    <div className={styles.workSubTitle1}>
                                                        <p className={styles.workSubTitleP1}>Aequitas Partners</p>
                                                        <p className={styles.workSubTitleP2}>Web Design and Development for a Professional Business</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className={styles.requestButton}>Case Study <IoArrowForward /></button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item3}>
                            <div className={styles.projectCard}>
                                <div className={styles.projectImage}>
                                    <img className={styles.pImage} src={sylvestre} alt="Project Image"/>
                                </div>
                                <div className={styles.cardDetails}>
                                <div className={styles.workInfoMain}>
                                                <div className={styles.workTitle}>
                                                    <p className={styles.featuredcap}>Website</p>
                                                    <div className={styles.workSubTitle1}>
                                                        <p className={styles.workSubTitleP1}>Sylvestre & Co</p>
                                                        <p className={styles.workSubTitleP2}>Web Design and Development for a Professional Business</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className={styles.requestButton}>Case Study <IoArrowForward /></button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item4}>
                            <div className={styles.projectCard}>
                                <div className={styles.projectImage}>
                                    <img className={styles.pImage} src={shepherd} alt="Project Image"/>
                                </div>
                                <div className={styles.cardDetails}>
                                <div className={styles.workInfoMain}>
                                                <div className={styles.workTitle}>
                                                    <p className={styles.featuredcap}>Website</p>
                                                    <div className={styles.workSubTitle1}>
                                                        <p className={styles.workSubTitleP1}>2992 Sheppard</p>
                                                        <p className={styles.workSubTitleP2}>Branding for Real Estate Project</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className={styles.requestButton}>Case Study <IoArrowForward /></button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item5}>
                            <div className={styles.projectCard}>
                                <div className={styles.projectImage}>
                                    <img className={styles.pImage} src={asset} alt="Project Image"/>
                                </div>
                                <div className={styles.cardDetails}>
                                <div className={styles.workInfoMain}>
                                                <div className={styles.workTitle}>
                                                    <p className={styles.featuredcap}>Website</p>
                                                    <div className={styles.workSubTitle1}>
                                                        <p className={styles.workSubTitleP1}>Asset Comet</p>
                                                        <p className={styles.workSubTitleP2}>Website Design and Branding for an Asset Management Software</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className={styles.requestButton}>Case Study <IoArrowForward /></button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item6}>
                            <div className={styles.projectCard}>
                                <div className={styles.projectImage}>
                                    <img className={styles.pImage} src={ready} alt="Project Image"/>
                                </div>
                                <div className={styles.cardDetails}>
                                <div className={styles.workInfoMain}>
                                                <div className={styles.workTitle}>
                                                    <p className={styles.featuredcap}>Website</p>
                                                    <div className={styles.workSubTitle1}>
                                                        <p className={styles.workSubTitleP1}>Readymode
                                                        </p>
                                                        <p className={styles.workSubTitleP2}>Web Design and Development for Tech Industry</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className={styles.requestButton}>Case Study <IoArrowForward /></button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item7}>
                            <div className={styles.projectCard}>
                                <div className={styles.projectImage}>
                                    <img className={styles.pImage} src={dress} alt="Project Image"/>
                                </div>
                                <div className={styles.cardDetails}>
                                <div className={styles.workInfoMain}>
                                                <div className={styles.workTitle}>
                                                    <p className={styles.featuredcap}>Website</p>
                                                    <div className={styles.workSubTitle1}>
                                                        <p className={styles.workSubTitleP1}>Dress For Success</p>
                                                        <p className={styles.workSubTitleP2}>Web Design for Non-for-Profits</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className={styles.requestButton}>Case Study <IoArrowForward /></button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.item8}>
                            <div className={styles.projectCard}>
                                <div className={styles.projectImage}>
                                    <img className={styles.pImage} src={lite} alt="Project Image"/>
                                </div>
                                <div className={styles.cardDetails}>
                                <div className={styles.workInfoMain}>
                                                <div className={styles.workTitle}>
                                                    <p className={styles.featuredcap}>Website</p>
                                                    <div className={styles.workSubTitle1}>
                                                        <p className={styles.workSubTitleP1}>Lite-1</p>
                                                        <p className={styles.workSubTitleP2}>Web Design & Development for a Start-up</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className={styles.requestButton}>Case Study <IoArrowForward /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured