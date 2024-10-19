import React from 'react'
import styles from "./CTAStyles.module.css"
import { Link } from 'react-router-dom';

function CTA() {
  return (
    <section id="CTA" className={styles.container}>
        <Link to="/" >
            <div className={styles.main}> 
                <p>Let's get started with #YourVision</p>
            </div>
            <p className={styles.para}>We are Brand Vision, a Marketing Agency that will offer you transparency and creativity.</p>
        </Link>
    </section>
  )
}

export default CTA