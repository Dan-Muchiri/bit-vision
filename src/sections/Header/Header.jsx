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
                        <a href="#hero" onClick={toggleMenu}>Home</a>
                        <a href="#services" onClick={toggleMenu}>Services</a>

                        {/* About Dropdown */}
                        <div className={styles.dropdown}>
                            <a href="#about" className={styles.dropdownLink}>
                                About <FaChevronDown size={12} />
                            </a>
                            <div className={styles.dropdownMenu}>
                                <a href="#clients" onClick={toggleMenu}>Clients/ Awards</a>
                                <a href="#industries" onClick={toggleMenu}>Industries</a>
                            </div>
                        </div>

                        {/* Work */}
                        <a href="#work" onClick={toggleMenu}>Work</a>
                        <a href="#contact" onClick={toggleMenu}>Contact</a>

                        {/* Resources Dropdown */}
                        <div className={styles.dropdown}>
                            <a href="#resources" className={styles.dropdownLink}>
                                Resources <FaChevronDown size={12} />
                            </a>
                            <div className={styles.dropdownMenu}>
                                <a href="#services" onClick={toggleMenu}>Services</a>
                                <a href="#faqs" onClick={toggleMenu}>FAQs</a>
                            </div>
                        </div>
                    </nav>
                </div>

                <div className={`${styles.separator} ${isMenuOpen ? styles.showMenu : ''}`}></div>
                {/* Request a proposal button */}
                <a href="#contact" className={`${styles.requestButton} ${isMenuOpen ? styles.showMenu : ''}`}>
                    Request a proposal
                </a>

                <div className={styles.menuIcon} onClick={toggleMenu}>
                    {isMenuOpen ? <div className={styles.menu}>Close<FaTimes size={18} /></div> : <div className={styles.menu}>Menu<FaBars size={18} /></div>}
                </div>
            </div>
        </section>
    );
}

export default Header;
