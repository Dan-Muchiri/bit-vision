import React from 'react'
import styles from "./ServicesStyles.module.css"
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5'; // Import the arrow icon

function Services() {
  return (
    <>
        <div className={styles.rightWords}>
              <p className={styles.firstP}>[/bɪt vɪʒən/]noun</p>
              <p className={styles.middleP}>We are Bit Vision, an award-winning Marketing and Web Design Agency that will offer you transparency and creativity.</p>
              <p className={styles.lastP}>
                Our goal is to nurture your vision and provide innovative, custom solutions for all your marketing needs. We provide a range of customized services, including branding, website design & development, SEO, marketing consultation, and more.
              </p>
        </div>
        <section id='services' className={styles.container}>
            <div className={styles.serviceGrid}>
                <div className={styles.left}>
                    <div className={styles.caption}>Our Services</div>
                    <p >Creative solutions crafted to help you achieve the perfect digital presence</p>
                    <div className={styles.buttons}>
                        <button className={styles.requestButton}>Request a proposal <IoArrowForward /></button>
                        <Link to="/" className={styles.link}>
                        Contact Us <IoArrowForward />
                        </Link>
                    </div>
                </div>
                <div className={styles.right}>
                    <h1 className={styles.heading}>How can we help you?</h1>
                    <div className={styles.serviceContainer}>
                        <div className={styles.serviceSet1}>
                            <div className={styles.serviceBox}>
                                <div className={styles.boxMain}>
                                    <div className={styles.title}>
                                        <div className={styles.indicator}></div>
                                        <Link to="/" className={styles.link}>
                                            Web Design & Development
                                        </Link>
                                    </div>
                                    <div className={styles.para}>
                                        <p>Every web design project at Brand Vision stands out as unique, receiving unparalleled attention and care. Our team, composed of award-winning web designers and web developers, is renowned for its ability to craft visually striking websites. These sites are not only a feast for the eyes but also excel in functionality, effectively meeting their intended objectives.</p>
                                        <p>No matter if your requirement is a straightforward informational website or a sophisticated e-commerce platform, our profound expertise ensures we can elevate your brand's online presence remarkably. Trust us to sculpt the ideal online presentation for your business, where web design meets innovation and practicality. Let Brand Vision be your guide in navigating the digital landscape, making your brand shine brightly in the competitive online arena.</p>
                                    </div>
                                </div>
                                <div className={styles.serviceTags}>
                                    <Link to="/" >
                                        WORDPRESS
                                    </Link>
                                    <Link to="/" >
                                        WEBFLOW
                                    </Link>
                                    <Link to="/" >
                                        UI/UX
                                    </Link>
                                    <Link to="/" >
                                        CUSTOM DESIGN
                                    </Link>
                                    <Link to="/" >
                                        TESTING
                                    </Link>
                                </div>
                                <div className={styles.separator}></div>
                                <div className={styles.cta}>
                                    <Link to="/" className={styles.webLink}>
                                        Web Design Service  <IoArrowForward />
                                    </Link>
                                    <Link to="/" className={styles.workLink}>
                                        VIEW OUR WORK
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    
  )
}

export default Services