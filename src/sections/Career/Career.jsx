import React, { useState } from 'react';
import styles from "./CareerStyles.module.css";

function Career() {
    const [touchedFields, setTouchedFields] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [formValid, setFormValid] = useState(true); // State to track form validity

    const handleFocus = (field) => {
        setTouchedFields((prev) => ({ ...prev, [field]: true }));
    };

    const handleBlur = (field) => {
        setTouchedFields((prev) => ({ ...prev, [field]: false }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const isFormValid = form.checkValidity(); // Check form validity

        if (isFormValid) {
            // Submit the form
            setFormValid(true);
            setSubmitted(true); // Set submitted to true
            form.submit();
        } else {
            setFormValid(false); // Set formValid to false if not valid
        }
    };

    return (
        <section id='career' className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.titleBlock}>
                        <div className={styles.caption}>Let's Talk</div>
                        <p className={styles.leftP1}>Career</p>
                        <p className={styles.leftP}>For any opportunities, fill out the form below & we'll get in touch.</p>
                        <p className={styles.leftP}>Thank you for your interest in working alongside us at Bit Vision. Our agency offers a contemporary, progressive, and creative working environment.</p>
                        <p className={styles.leftP}>For all career or partnership opportunities, please submit your resume and relevant details below. Our hiring and partnership team will be in contact with you shortly.</p>
                    </div>
                </div>
                <div className={styles.right}>
                    <form action="https://formspree.io/f/xovqvyld" method="post" className={styles.formContainer} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="fullName">Full Name<span className={styles.required}>*</span></label>
                            <input
                                type="text"
                                name="fullName"
                                id="fullName"
                                required
                                onFocus={() => handleFocus('fullName')}
                                onBlur={() => handleBlur('fullName')}
                                className={touchedFields.fullName && !document.getElementById('fullName').value ? styles.invalid : ''}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">E-mail<span className={styles.required}>*</span></label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                onFocus={() => handleFocus('email')}
                                onBlur={() => handleBlur('email')}
                                className={touchedFields.email && !document.getElementById('email').value ? styles.invalid : ''}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="interest">What are you interested in?<span className={styles.required}>*</span></label>
                            <select
                                name="interest"
                                id="interest"
                                required
                                onFocus={() => handleFocus('interest')}
                                onBlur={() => handleBlur('interest')}
                                className={touchedFields.interest && !document.getElementById('interest').value ? styles.invalid : ''}
                            >
                                <option value="" disabled selected>Please Select</option>
                                <option value="Employment">Employment</option>
                                <option value="Unpaid Internship/ Co-op">Unpaid Internship/ Co-op</option>
                                <option value="Partnership">Partnership</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Message<span className={styles.required}>*</span></label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                onFocus={() => handleFocus('message')}
                                onBlur={() => handleBlur('message')}
                                className={touchedFields.message && !document.getElementById('message').value ? styles.invalid : ''}
                            ></textarea>
                        </div>
                        <input className={styles.subButton} type="submit" value="Submit" />
                        {/* Display message if the form is invalid */}
                        {!formValid && <p className={styles.errorMessage}>Please fill out the required fields.</p>}
                    </form>
                </div>
            </div>
        </section>
    ); 
}

export default Career;
