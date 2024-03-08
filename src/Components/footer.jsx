import React from 'react'
import styles from '../Components/footer.module.css'
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
return (
    <footer className={styles.container}>
        <div className={styles.title_footer}>
            <div className={styles.title}>PREMIUM<label className={styles.brand_color}>GYM</label></div>
            <div className={styles.icon_footer}>
                <a href='/instagram'><FaInstagram /></a>
                <a href='/gmail'><SiGmail /></a>
                <a href='/whatsapp'><FaWhatsapp /></a>
            </div>
            <div className={styles.terms_footer}>
                <a href="/Privacy Policy">Privacy Policy</a>
                <a href="/Terms and Conditions">Terms and Conditions</a>
                <a href="/Customer Service">Customer Service</a>
            </div>
        </div>
        <div className={styles.final_footer}>
            <p>Copyright © 2024 PREMIUMGYM</p>
        </div>
        <div>
        </div>
    </footer>
)
}

export default Footer;