import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./HeaderStyles.module.css";
import logo from "../../../public/Logo2.png";
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <section id='header' className={styles.container}>
            <div className={styles.sub}>
                <div className={styles.logo}>
                    <img src={logo} alt="Bit Vision Logo" className={styles.logoImage} />
                    <p className={styles.logoName}>Bit Vision</p>
                </div>
                <div className={`${styles.navBlock} ${isMenuOpen ? styles.showMenu : ''}`}>
                    <nav className={styles.nav}>
                        <Link to="/" onClick={toggleMenu}>Home</Link>
                        <Link to="/services" onClick={toggleMenu}>Services<FaChevronDown size={12} /></Link>
                        
                        {/* About Dropdown */}
                        <div className={styles.dropdown}>
                            <Link to="/" className={styles.dropdownLink}>
                                About <FaChevronDown size={12} />
                            </Link>
                            <div className={styles.dropdownMenu}>
                                <Link to="/about" onClick={toggleMenu}>About</Link>
                                <Link to="/awards" onClick={toggleMenu}>Awards</Link>
                                <Link to="/team" onClick={toggleMenu}>Team</Link>
                            </div>
                        </div>

                        {/* Work */}
                        <Link to="/work" onClick={toggleMenu}>Work</Link>
                        <Link to="/contact" onClick={toggleMenu}>Contact</Link>

                        {/* Resources Dropdown */}
                        <div className={styles.dropdown}>
                            <Link to="/" className={styles.dropdownLink}>
                                Resources <FaChevronDown size={12} />
                            </Link>
                            <div className={styles.dropdownMenu}>
                                <Link to="/services" onClick={toggleMenu}>Services</Link>
                                <Link to="/insights" onClick={toggleMenu}>Insights</Link>
                                <Link to="/faqs" onClick={toggleMenu}>FAQs</Link>
                            </div>
                        </div>

                    </nav>
                </div>

                <div className={`${styles.separator} ${isMenuOpen ? styles.showMenu : ''}`}></div>
                <button className={`${styles.requestButton} ${isMenuOpen ? styles.showMenu : ''}`}>
                    Request a proposal
                </button>
                <Link to="/insights" className={styles.insightsLink}>
                    Bit Vision Insights
                </Link>

                <div className={styles.menuIcon} onClick={toggleMenu}>
                    {isMenuOpen ? <div className={styles.menu}>Close<FaTimes size={18} /></div> : <div className={styles.menu}>Menu<FaBars size={18} /></div>}
                </div>
            </div>
        </section>
    );
}

export default Header;
