import React from 'react';
import styles from "./FooterStyles.module.css";
import logo from "/Logo2.png";
import { Link } from 'react-router-dom';
import mail from "/mail.webp"
import map from "/map.webp"

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
        {/* Separator is still inside the wrapper but below the title */}
        <div className={styles.separator}></div>
        <div className={styles.main}>
          <div className={styles.list}>
            <h3>Quick Links</h3>
            <Link to="/" >Home</Link>
            <Link to="/" >Our Work</Link>
            <Link to="/" >About</Link>
            <Link to="/" >Contact</Link>
          </div>
          <div className={styles.list}>
            <h3>Services</h3>
            <p>Web Design</p>
            <p >Branding</p>
            <p >UI UX</p>
            <p >Consultation & Audit</p>
            <p >SEO</p>
          </div>
          <div className={styles.list}>
            <h3>Company</h3>
            <Link to="/" >Career</Link>
            <Link to="/" >FAQ</Link>
            <Link to="/" >About</Link>
            <Link to="/" >Contact</Link>
          </div>
          <div className={styles.list}>
            <h3>Contacts</h3>
            <div className={styles.contactInfo}>
              <img src={mail} alt='Email icon'/>
              <a href="mailto:info@bitvisionmedia.com">info@bitvisionmedia.com</a>
            </div>
            <br></br>
            <div className={styles.contactInfo}>
              <img src={map} alt='Map icon'/>
              <div className={styles.info}>
                <p>Suite 120 - 2005 Sheppard Ave E,</p> 
                <p>North York, ON M2J 5B4</p>
              </div>
            </div>
            <br></br>
            <div className={styles.contactInfo}>
              <img src={map} alt='Map icon'/>
              <div className={styles.info}>
                <p>30 N Michigan Ave, Suite 504</p> 
                <p>Chicago, IL 60602, USA</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.collection}>
          <p>San Francisco</p>
          <p>Dallas</p>
          <p>Washington</p>
          <p>Montreal</p>
          <p>Los Angeles</p>
          <p>New York</p>
          <p>Houston</p>
          <p>Chicago</p>
          <p>Vancouver</p>
          <p>Toronto</p>
        </div>
        <div className={styles.separator}></div>
        <div className={styles.collection}>
          <p>Web Design Toronto</p>
          <p>Web Design San Diego</p>
          <p>Web Design San Francisco</p>
          <p>Web Design Chicago</p>
          <p>Web Design New York</p>
          <p>Web Design Houston</p>
          <p>Web Design montreal</p>
        </div>
        <div className={styles.separator}></div>
        <p className={styles.copy}>© All Copyright Reserved by Bit Vision Marketing.</p>
      </div>
    </section>
  );
}

export default Footer;
