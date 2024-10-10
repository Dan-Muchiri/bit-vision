import React from 'react';
import styles from "./HeroStyles.module.css";
import backimage from "../../../public/back.png";
import backimagesmall from "../../../public/back small.png";

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
          <div>
            <h1>Award-Winning
            Marketing Agency</h1>
            <div>Separator</div>
            <div>
              <button>Request a proposal</button>
              <button>Let's Discuss</button>
            </div>
          </div>
          <div>
            <p>Bit Vision</p>
            <p>[/bɪt vɪʒən/]noun</p>
            <p>We are Bit Vision, an award-winning Marketing and Web Design Agency that will offer you transparency and creativity.</p>
            <p>Our goal is to nurture your vision and provide innovative, custom solutions for all your marketing needs.  We provide a range of customized services, including branding, website design & development, SEO, marketing consultation, and more.</p>
          </div>
          </div> 
        </div>
      </section>
    </div>
  );
}

export default Hero;
