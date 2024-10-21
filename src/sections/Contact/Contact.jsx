import React, { useState } from 'react';
import styles from "./ContactStyles.module.css";
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5'; // Import the arrow icon

function Contact() {
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
        <section id='contact' className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.left}>
                    <div className={styles.titleBlock}>
                        <div className={styles.caption}>Let's Talk</div>
                        <p className={styles.leftP1}>Contact Us</p>
                        <p className={styles.leftP}> Our goal is to nurture your vision and provide innovative, custom solutions for all your marketing needs.</p>
                    </div>
                    <div className={styles.careerBox}>
                        <p>For all career / partnership opportunities, please visit our Careers page</p>
                        <Link to="/" className={styles.link}>
                            Career/ Partnership <IoArrowForward />
                        </Link>
                    </div>
                </div>
                <div className={styles.right}>
                    <form action="" method="post" className={styles.formContainer} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="firstName">First Name<span className={styles.required}>*</span></label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                required
                                onFocus={() => handleFocus('firstName')}
                                onBlur={() => handleBlur('firstName')}
                                className={touchedFields.firstName && !document.getElementById('firstName').value ? styles.invalid : ''}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" name="lastName" id="lastName" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email<span className={styles.required}>*</span></label>
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
                            <label htmlFor="phone">Phone Number<span className={styles.required}>*</span></label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                required
                                onFocus={() => handleFocus('phone')}
                                onBlur={() => handleBlur('phone')}
                                className={touchedFields.phone && !document.getElementById('phone').value ? styles.invalid : ''}
                            />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="service">What service are you looking for?<span className={styles.required}>*</span></label>
                            <select
                                name="service"
                                id="service"
                                required
                                onFocus={() => handleFocus('service')}
                                onBlur={() => handleBlur('service')}
                                className={touchedFields.service && !document.getElementById('service').value ? styles.invalid : ''}
                            >
                                <option value="" disabled selected>Please Select</option>
                                <option value="Website Design">Website Design</option>
                                <option value="Branding">Branding</option>
                                <option value="Branding & Website Design">Branding & Website Design</option>
                                <option value="SEO">SEO</option>
                                <option value="UI/UX">UI/UX</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Consultation">Consultation</option>
                                <option value="Audit">Audit</option>
                                <option value="Graphic Design">Graphic Design</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="source">Where did you hear about us?</label>
                            <select name="source" id="source">
                                <option value="" disabled selected>Please Select</option>
                                <option value="Google">Google</option>
                                <option value="Clutch">Clutch</option>
                                <option value="Awwwards">Awwwards</option>
                                <option value="Upcity">Upcity</option>
                                <option value="Social Media">Social Media</option>
                                <option value="Referral">Referral</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="budget">What is your budget?<span className={styles.required}>*</span></label>
                            <select
                                name="budget"
                                id="budget"
                                required
                                onFocus={() => handleFocus('budget')}
                                onBlur={() => handleBlur('budget')}
                                className={touchedFields.budget && !document.getElementById('budget').value ? styles.invalid : ''}
                            >
                                <option value="" disabled selected>Please Select</option>
                                <option value="budget1">$2k - $5k</option>
                                <option value="budget2">$5k - $15k</option>
                                <option value="budget3">$15k - $30k</option>
                                <option value="budget4">$30k - $50k</option>
                                <option value="budget5">$50k - $100k</option>
                                <option value="budget6">$100k - $200k</option>
                                <option value="budget7">$200k - $500k</option>
                                <option value="budget8">$500k+</option>
                                <option value="budget9">Undecided</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="projectDetails">Tell us more about your project:* </label>
                            <textarea
                                name="projectDetails"
                                id="projectDetails"
                                required
                                onFocus={() => handleFocus('projectDetails')}
                                onBlur={() => handleBlur('projectDetails')}
                                className={touchedFields.projectDetails && !document.getElementById('projectDetails').value ? styles.invalid : ''}
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

export default Contact;
