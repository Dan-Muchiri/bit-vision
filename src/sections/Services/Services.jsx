import React from 'react'
import styles from "./ServicesStyles.module.css"
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5'; // Import the arrow icon
import seoImage from "../../../public/seo.svg"
import workImage from "../../../public/workImage.webp"

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
                        <a href="#contact" className={styles.requestButton}>
                            Request a proposal
                        </a>
                        <a href="#contact" className={styles.link}>
                        Let's Discuss <IoArrowForward />
                        </a>
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
                                    <a href="#contact" className={styles.webLink}>
                                        Web Design Service <IoArrowForward />
                                    </a>
                                    <a href="#work" className={styles.workLink}>
                                    VIEW OUR WORK <IoArrowForward />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.serviceBox}>
                                <div className={styles.boxMain}>
                                    <div className={styles.title2}>
                                        <div className={styles.indicator2}></div>
                                        <Link to="/" className={styles.link}>
                                            SEO
                                        </Link>
                                    </div>
                                    <div className={styles.para}>
                                        <p>Optimizing your online presence requires a strategic approach, and our SEO experts ensure your website not only climbs the search rankings but also engages your target audience effectively. With a deep understanding of search algorithms and user behavior, we tailor SEO solutions that drive results, helping your brand stand out.</p>
                                    </div>
                                    <img className={styles.seoImage} src={seoImage} alt='SEO Image'/>
                                    <div className={styles.separator}></div>
                                    <div className={styles.cta}>
                                    <a href="#contact" className={styles.webLink}>
                                        Learn More <IoArrowForward />
                                    </a>
                                </div>
                                </div>
                            </div>
                            <div className={styles.workWrapper}>
                                <div className={styles.workItem}>
                                    <div className={styles.workProject}>
                                        <img className={styles.workImage} src={workImage} alt="Work Image"/>
                                        <div className={styles.workInfo}>
                                            <div className={styles.workInfoMain}>
                                                <div className={styles.workTitle}>
                                                    <p className={styles.featuredwork}>Featured Work</p>
                                                    <div className={styles.workSubTitle}>
                                                        <div className={styles.workIndicator}></div>
                                                        <p>Leaside Blvd</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#work" className={styles.readButton}>
                                                View work <IoArrowForward />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.serviceBox}>
                                <div className={styles.boxMain}>
                                    <div className={styles.title2}>
                                        <div className={styles.indicator3}></div>
                                        <Link to="/" className={styles.link}>
                                        Visual Branding
                                        </Link>
                                    </div>
                                    <div className={styles.para}>
                                        <p>Shaping your brand's visual identity requires precision, creativity, and expertise, all of which our award-winning team delivers. From designing logos to crafting cohesive color palettes, we ensure your brand communicates effectively across all channels. With a focus on creating a distinct and lasting impression, we help your business stand out in the competitive marketplace, leaving a memorable mark wherever your audience encounters it.</p>
                                    </div>
                                </div>
                                <div className={styles.serviceTags}>
                                    <Link to="/" >
                                    Logo Design
                                    </Link>
                                    <Link to="/" >
                                    Typography
                                    </Link>
                                    <Link to="/" >
                                    Iconography
                                    </Link>
                                    <Link to="/" >
                                    Brand Style Guide
                                    </Link>
                                    <Link to="/" >
                                    Colour Palette
                                    </Link>
                                    <Link to="/" >
                                    Textures and Patterns
                                    </Link>
                                </div>
                                <div className={styles.separator}></div>
                                <div className={styles.cta}>
                                <a href="#contact" className={styles.webLink}>
                                        Learn More <IoArrowForward />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.serviceBox}>
                                <div className={styles.boxMain}>
                                    <div className={styles.title2}>
                                        <div className={styles.indicator4}></div>
                                        <Link to="/" className={styles.link}>
                                        Brand Research & Strategy
                                        </Link>
                                    </div>
                                    <div className={styles.para}>
                                        <p>Comprehensive brand research and strategy are the foundations of effective branding. Through in-depth analysis of competitors, market trends, and target audiences, we inform strategic decision-making to shape your brand’s future. Our approach includes developing brand personas, tone, voice, and mission statements, ensuring consistent and impactful communication that aligns seamlessly with your business objectives.</p>
                                    </div>
                                </div>
                                <div className={styles.serviceTags}>
                                    <Link to="/" >
                                    Brand Positioning
                                    </Link>
                                    <Link to="/" >
                                    Competitor Analysis
                                    </Link>
                                    <Link to="/" >
                                    Market Trend Analysis
                                    </Link>
                                    <Link to="/" >
                                    Brand Messaging Framework
                                    </Link>
                                    <Link to="/" >
                                    Colour Palette
                                    </Link>
                                    <Link to="/" >
                                    Brand Voice and Tone
                                    </Link>
                                    <Link to="/" >
                                    Brand Value and Promise
                                    </Link>
                                </div>
                                <div className={styles.separator}></div>
                                <div className={styles.cta}>
                                <a href="#contact" className={styles.webLink}>
                                        Learn More <IoArrowForward />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.serviceSet2}>
                            <div className={styles.smallBox}>
                                <div className={styles.boxMain}>
                                    <div className={styles.title2}>
                                        <div className={styles.indicator5}></div>
                                        <Link to="/" className={styles.link}>
                                        Consultation & Audit
                                        </Link>
                                    </div>
                                    <div className={styles.para}>
                                        <p>Tailored solutions for your business through one-on-one personalized sessions.</p>
                                    </div>
                                </div>
                                <div className={styles.separator}></div>
                                <div className={styles.cta}>
                                <a href="#contact" className={styles.webLink}>
                                        Learn More <IoArrowForward />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.smallBox}>
                                <div className={styles.boxMain}>
                                    <div className={styles.title2}>
                                        <div className={styles.indicator6}></div>
                                        <Link to="/" className={styles.link}>
                                        Graphic Design
                                        </Link>
                                    </div>
                                    <div className={styles.para}>
                                        <p>Impactful marketing visuals and illustrations that elevate brand recognition.</p>
                                    </div>
                                </div>
                                <div className={styles.separator}></div>
                                <div className={styles.cta}>
                                <a href="#contact" className={styles.webLink}>
                                        Learn More <IoArrowForward />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.smallBox}>
                                <div className={styles.boxMain}>
                                    <div className={styles.title2}>
                                        <div className={styles.indicator7}></div>
                                        <Link to="/" className={styles.link}>
                                        Content Marketing
                                        </Link>
                                    </div>
                                    <div className={styles.para}>
                                        <p>Unique content that adds value, boosts organic reach, and engages your audience.</p>
                                    </div>
                                </div>
                                <div className={styles.separator}></div>
                                <div className={styles.cta}>
                                <a href="#contact" className={styles.webLink}>
                                        Learn More <IoArrowForward />
                                    </a>
                                </div>
                            </div>
                            <div className={styles.smallBox}>
                                <div className={styles.boxMain}>
                                    <div className={styles.title2}>
                                        <div className={styles.indicator8}></div>
                                        <Link to="/" className={styles.link}>
                                        User Interface & User Experience
                                        </Link>
                                    </div>
                                    <div className={styles.para}>
                                        <p>User-centric designs ensuring intuitive and satisfying digital experiences.</p>
                                    </div>
                                </div>
                                <div className={styles.separator}></div>
                                <div className={styles.cta}>
                                <a href="#contact" className={styles.webLink}>
                                        Learn More <IoArrowForward />
                                    </a>
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