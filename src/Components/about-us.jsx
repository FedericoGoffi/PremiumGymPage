import React from 'react'
import styles from '../Components/about-us.module.css'

const AboutUs = () => {
return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h2>ABOUT PREMIUM<label className={styles.color_title}>GYM</label></h2>
                <div>
                <p>Welcome to <label className={styles.color_title}>PREMIUMGYM!</label> We take pride in offering personalized options to meet your fitness needs. Whether you're seeking additional guidance, inspiration, or just a clean and welcoming place to work out, we're here to help you achieve your fitness goals.</p>

                <p>As a <label className={styles.color_title}>PREMIUMGYM!</label> member, you'll enjoy unlimited access to your home club, support from our friendly and knowledgeable staff, and exclusive benefits if you choose the <label className={styles.color_title}>PREMIUM</label> plan. With the <label className={styles.color_title}>PREMIUM</label> plan, you not only get access to over 400 locations but also the ability to bring a guest for free.</p>

                <p>Furthermore, we understand that guidance and training are crucial for success in fitness. That's why we provide free fitness training for our <label className={styles.color_title}>PREMIUM</label> members. We are committed to giving you the support you need to achieve your goals safely and effectively.</p>

                <p>At <label className={styles.color_title}>PREMIUMGYM</label>, we strive to create an environment where you feel comfortable and motivated. We have quality equipment, amenities, and dedicated staff to ensure you have everything you need to succeed on your fitness journey. We look forward to seeing you soon at our gym!</p>
                </div>
        </div>
    </div>
)
}

export default AboutUs;