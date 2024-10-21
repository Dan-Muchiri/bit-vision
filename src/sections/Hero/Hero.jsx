import React from 'react';
import styles from "./HeroStyles.module.css";
import backimage from "../../../public/back.png";
import backimagesmall from "../../../public/back small.png";
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5'; // Import the arrow icon

function Hero() {
  return (
    <div className={styles.container}>
      <section id='hero' className={styles.sect}>
        <div className={styles.back}>
          <div className={styles.backImage}>
            <img src={backimage} className={styles.image} alt="Background" />
            <img src={backimagesmall} className={styles.imageSmall} alt="Small Background" />
          </div>
          <div className={styles.overlay} /> {/* Background overlay */}
        </div>
        <div className={styles.heroContent}>
          <div className={styles.contentWrapper}>
            <div className={styles.leftWords}>
              <h1>Award-Winning Marketing Agency</h1>
              <div className={styles.separator}></div>
              <div className={styles.buttons}>
                <a href="#contact" className={styles.requestButton}>
                      Request a proposal
                </a>
                <a href="#contact" className={styles.link}>
                Let's Discuss <IoArrowForward />
                </a>
              </div>
            </div>
            <div className={styles.rightWords}>
              <p>Bit Vision</p>
              <p className={styles.firstP}>[/bɪt vɪʒən/]noun</p>
              <p>We are Bit Vision, an award-winning Marketing and Web Design Agency that will offer you transparency and creativity.</p>
              <p className={styles.lastP}>
                Our goal is to nurture your vision and provide innovative, custom solutions for all your marketing needs. We provide a range of customized services, including branding, website design & development, SEO, marketing consultation, and more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
