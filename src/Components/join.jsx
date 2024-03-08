import React from 'react'
import styles from '../Components/join.module.css'

const join = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h2>CHOOSE YOUR PLAN!!</h2>
            <p className={styles.subtitle}>We have everything you are looking for! You are one click away from being part of the biggest sports community in the world.</p>
            <div className={styles.form}>
                <div className={styles.form_styles}>
                    <h3><label className={styles.color_form}>PREMIUM</label> PLAN</h3>
                    <p>$ <label className={styles.color_form}>70</label> / month</p>
                    <a className={styles.a_styles} href="/premiumplan"><button className={styles.button_styles}>SELECT</button></a>
                    <div className={styles.benefits}>
                        <p>Access to +400 locations</p>
                        <p>All the Perks</p>
                        <p>Live and On Demand classes</p>
                        <p>Nutrition Plans</p>
                    </div>
                </div>
                <div className={styles.form_styles}>
                    <h3>BASIC PLAN</h3>
                    <p>$ <label className={styles.color_form}>40</label> / month</p>
                    <a className={styles.a_styles} href="/basicplan"><button className={styles.button_styles}>SELECT</button></a>
                    <div className={styles.benefits}>
                        <p>Access to 200 locations</p>
                        <p>50% of the Perks</p>
                        <p>Live and On Demand classes</p>
                        <p>Selected activities available only</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default join