import React from 'react'
import styles from "./IndustriesStyles.module.css"
import industry1 from "/industry1.jpg"
import industry2 from "/industry2.jpg"
import tech from "/tech.jpg"
import business from "/business.jpg"
import prof from "/prof.jpg"
import enter from "/enter.jpg"

function Industries() {
  return (
    <section className={styles.container} id='industries'>
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <div className={styles.caption}>Industries</div>
                <p className={styles.headP}>Brand Vision Collaborates</p>
                <p className={styles.headP}>With Most Industries</p>
                <p className={styles.headP1}>As a company with over a decade of experience, we at Brand Vision are proud to have worked with many outstanding businesses and industries worldwide. These partnerships have allowed us to expand our knowledge, skills, and expertise, and have helped us to continuously improve our services and deliver excellent results for our clients.</p>
            </div>
            <div className={styles.industryMain}>
                <div className={styles.list}>
                    <div className={styles.item}>
                        <img className={styles.indImage} src={industry1} alt="Industry Image" />
                        <div className={styles.data}>
                            <div className={styles.dropdown}>
                                <div className={styles.dropLeft}>
                                    <div className={styles.cardTitle}>
                                        <div className={styles.indicator}></div>
                                        <div className={styles.tText}>Not-For-Profit</div>
                                    </div>
                                    <p>All NFP's receive 10% discount as a token of our support.</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.indImage} src={industry2} alt="Industry Image" />
                        <div className={styles.data}>
                            <div className={styles.dropdown}>
                                <div className={styles.dropLeft}>
                                    <div className={styles.cardTitle}>
                                        <div className={styles.indicator}></div>
                                        <div className={styles.tText}>Real Estate & Construction</div>
                                    </div>
                                    <p>Pioneers in real estate web design and marketing.</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.data}>
                            <div className={styles.dropdown}>
                                <div className={styles.dropLeft}>
                                    <div className={styles.cardTitle}>
                                        <div className={styles.indicator}></div>
                                        <div className={styles.tText}>B2B</div>
                                    </div>
                                    <p>Custom Web Design & Branding for B2B.</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.data}>
                            <div className={styles.dropdown}>
                                <div className={styles.dropLeft}>
                                    <div className={styles.cardTitle}>
                                        <div className={styles.indicator}></div>
                                        <div className={styles.tText}>E-commerce</div>
                                    </div>
                                    <p>Boost your online sales with the perfect website.</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.data}>
                            <div className={styles.dropdown}>
                                <div className={styles.dropLeft}>
                                    <div className={styles.cardTitle}>
                                        <div className={styles.indicator}></div>
                                        <div className={styles.tText}>Education</div>
                                    </div>
                                    <p>Elevating the impact of marketing in educational institutions.</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className={styles.list}>
                    <div className={styles.item}>
                        <img className={styles.indImage} src={tech} alt="Industry Image" />
                        <div className={styles.data}>
                            <div className={styles.dropdown}>
                                <div className={styles.dropLeft}>
                                    <div className={styles.cardTitle}>
                                        <div className={styles.indicator}></div>
                                        <div className={styles.tText}>Technology</div>
                                    </div>
                                    <p>Content audit included with all web design packages.</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.indImage} src={business} alt="Industry Image" />
                        <div className={styles.data}>
                            <div className={styles.dropdown}>
                                <div className={styles.dropLeft}>
                                    <div className={styles.cardTitle}>
                                        <div className={styles.indicator}></div>
                                        <div className={styles.tText}>Business-to-Consumer</div>
                                    </div>
                                    <p>Competitor conversion points analysis included.</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.data}>
                            <div className={styles.dropdown}>
                                <div className={styles.dropLeft}>
                                    <div className={styles.cardTitle}>
                                        <div className={styles.indicator}></div>
                                        <div className={styles.tText}>Health & Wellness</div>
                                    </div>
                                    <p>Creating user friendly websites for health care industry.</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.data}>
                            <div className={styles.dropdown}>
                                <div className={styles.dropLeft}>
                                    <div className={styles.cardTitle}>
                                        <div className={styles.indicator}></div>
                                        <div className={styles.tText}>Law</div>
                                    </div>
                                    <p>Potraying trust and confidence through marketing.</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.data}>
                            <div className={styles.dropdown}>
                                <div className={styles.dropLeft}>
                                    <div className={styles.cardTitle}>
                                        <div className={styles.indicator}></div>
                                        <div className={styles.tText}>Food & Beverage</div>
                                    </div>
                                    <p>Marketing material curated for food & beverage industry.</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className={styles.list}>
                    <div className={styles.item}>
                        <img className={styles.indImage} src={tech} alt="Industry Image" />
                        <div className={styles.data}>
                            <div className={styles.dropdown}>
                                <div className={styles.dropLeft}>
                                    <div className={styles.cardTitle}>
                                        <div className={styles.indicator}></div>
                                        <div className={styles.tText}>Professional Services</div>
                                    </div>
                                    <p>Content audit included with all web design packages.</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className={styles.item}>
                        <img className={styles.indImage} src={enter} alt="Industry Image" />
                        <div className={styles.data}>
                            <div className={styles.dropdown}>
                                <div className={styles.dropLeft}>
                                    <div className={styles.cardTitle}>
                                        <div className={styles.indicator}></div>
                                        <div className={styles.tText}>Entertainment & Media</div>
                                    </div>
                                    <p>#1agency for interactive design and devlopment</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.data}>
                            <div className={styles.dropdown}>
                                <div className={styles.dropLeft}>
                                    <div className={styles.cardTitle}>
                                        <div className={styles.indicator}></div>
                                        <div className={styles.tText}>StartUps</div>
                                    </div>
                                    <p>Specializing in helping startups start their journey.</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.data}>
                            <div className={styles.dropdown}>
                                <div className={styles.dropLeft}>
                                    <div className={styles.cardTitle}>
                                        <div className={styles.indicator}></div>
                                        <div className={styles.tText}>Sports & Fitness</div>
                                    </div>
                                    <p>Web design that adds excitement to business.</p>
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.data}>
                            <div className={styles.dropdown}>
                                <div className={styles.dropLeft}>
                                    <div className={styles.cardTitle}>
                                        <div className={styles.indicator}></div>
                                        <div className={styles.tText}>Travel & Hospitality</div>
                                    </div>
                                    <p>Elavate the impact of marketing in Travel Industry..</p>
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

export default Industries