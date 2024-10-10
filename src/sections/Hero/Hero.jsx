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
            <div className={styles.overlay} /> {/* Background overlay */}
            <div className={styles.heroContent}>
              <p>Contet</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
