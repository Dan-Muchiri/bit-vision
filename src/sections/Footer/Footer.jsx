import React from 'react';
import styles from "./FooterStyles.module.css";
import logo from "/Logo2.png";
import mail from "/mail.webp";
import map from "/map.webp";

function Footer() {
  return (
    <section id='footer' className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <div className={styles.logo}>
            <img src={logo} alt="Bit Vision Logo" className={styles.logoImage} />
            <p className={styles.logoName}>Bit Vision</p>
          </div>
          <p className={styles.pTitle}>
            We are Bit Vision, an award-winning marketing agency that will offer you transparency and creativity. Our goal is to nurture your vision and provide innovative, custom solutions for your marketing needs.
          </p>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.main}>
          <div className={styles.list}>
            <h3>Quick Links</h3>
            <a href="#hero">Home</a>
            <a href="#work">Our Work</a>
            <a href="#industries">Industries</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.list}>
            <h3>Services</h3>
            <p>Web Design</p>
            <p>Branding</p>
            <p>UI UX</p>
            <p>Consultation & Audit</p>
            <p>SEO</p>
          </div>
          <div className={styles.list}>
            <h3>Company</h3>
            <a href="#career">Career</a>
            <a href="#faqs">FAQ</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
          </div>
          <div className={styles.list}>
            <h3>Contacts</h3>
            <div className={styles.contactInfo}>
              <img src={mail} alt='Email icon'/>
              <a href="mailto:info@bitvisionmedia.com">info@bitvisionmedia.com</a>
            </div>
            <br />
            <div className={styles.contactInfo}>
              <img src={map} alt='Map icon'/>
              <div className={styles.info}>
                <p>Suite 120 - 2005 Sheppard Ave E,</p> 
                <p>Nairobi</p>
              </div>
            </div>
            <br />
            <div className={styles.contactInfo}>
              <img src={map} alt='Map icon'/>
              <div className={styles.info}>
                <p>30 N Michigan Ave, Suite 504</p> 
                <p>Cape Town</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.collection}>
          <p>Cairo</p>
          <p>Nairobi</p>
          <p>Johannesburg</p>
          <p>Dubai</p>
          <p>Manchester</p>
          <p>Lagos</p>
          <p>Cape Town</p>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.collection}>
        <p>Web Design Dubai</p>
          <p>Web Design Cairo</p>
          <p>Web Design Lagos</p>
          <p>Web Design Cape Town</p>
          <p>Web Design Nairobi</p>
          <p>Web Design Johannesburg</p>
        </div>
        <div className={styles.separator}></div>
        <p className={styles.copy}>© All Copyright Reserved by Bit Vision Marketing.</p>
      </div>
    </section>
  );
}

export default Footer;
