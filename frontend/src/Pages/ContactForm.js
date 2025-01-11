import React from 'react';
import styles from './ContactForm.module.css';
import fb from '../Assets/contact_images/1.png';
import twitter from '../Assets/contact_images/2.png';
import insta from '../Assets/contact_images/3.png';
import call from '../Assets/contact_images/call.png';
import location from '../Assets/contact_images/location.png';
import mail from '../Assets/contact_images/mail.png';

const ContactForm = () => {
    return (
        <section className={styles.ContactSection}>
            <div className={styles.container}>
                <div className={styles.contactInfo}>
                    <h2>Contact Info</h2>
                    <ul className={styles.info}>
                        <li>
                            <span><img src={location} alt="Location" /></span>
                            <span>H11,<br />Islamabad, Pakistan<br /></span>
                        </li>
                        <li>
                            <span><img src={mail} alt="Email" /></span>
                            <span><a href="#">travelagency@gmail.com</a></span>
                        </li>
                        <li>
                            <span><img src={call} alt="Phone" /></span>
                            <span>123-456-789</span>
                        </li>
                    </ul>
                    <ul className={styles.sci}>
                        <li><a href="#"><img src={fb} alt="Facebook" /></a></li>
                        <li><a href="#"><img src={insta} alt="Instagram" /></a></li>
                        <li><a href="#"><img src={twitter} alt="Twitter" /></a></li>
                    </ul>
                </div>
                <div className={styles.contactForm}>
                    <h2>Send a Message</h2>
                    <div className={styles.formBox}>
                        <div className={`${styles.inputBox} ${styles.w50}`}>
                            <input type="text" name="" required />
                            <span>First Name</span>
                        </div>
                        <div className={`${styles.inputBox} ${styles.w50}`}>
                            <input type="text" required />
                            <span>Last Name</span>
                        </div>
                        <div className={`${styles.inputBox} ${styles.w50}`}>
                            <input type="email" required />
                            <span>Email Address</span>
                        </div>
                        <div className={`${styles.inputBox} ${styles.w50}`}>
                            <input type="text" required />
                            <span>Mobile Number</span>
                        </div>
                        <div className={`${styles.inputBox} ${styles.w100}`}>
                            <textarea required></textarea>
                            <span>Write your message here...</span>
                        </div>
                        <div className={`${styles.inputBox} ${styles.w100}`}>
                            <input type="submit" value="Send" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
