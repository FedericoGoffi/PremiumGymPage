import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import styles from '../Components/home.module.css';
import Funcional from '../assets/Img/funcional.webp';
import Crossfit from '../assets/Img/Crossfit.webp';
import Strength from '../assets/Img/strength.webp';
import Resistance from '../assets/Img/resistance.webp';
import { IoIosArrowDown } from "react-icons/io";


const Home = () => {

    const scrollToActivities = () => {
        scroll.scrollTo('#activities', {
            duration: 800,
            smooth: 'easeInOutQuart',
        });
    };

  return (
    <div>
        <div className={styles.container_1}>
            <div className={styles.title}>
                <h2>DISCOVER YOUR <label className={styles.color_title}>POTENTIAL</label></h2>
                <p><label className={styles.color_title}>TRAIN AND LEARN TO BE YOUR BEST</label> VERSION</p>
                <div className={styles.button_title}>
                    <a href="/join">
                    <button className={styles.button_join}>
                        <label>JOIN NOW!</label>
                    </button>
                    </a>
                </div>
                <Link
                    to="activities"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1000}
                    className={styles.arrow}
                    onClick={scrollToActivities}>
                <IoIosArrowDown className={styles.arrow_icon}/>
                </Link>
            </div>
        </div>
        <div id="activities" className={styles.container_2}>
            <div className={styles.text}>
                <h3><label className={styles.color_title_2}>ACTIVITIES</label> TO SUIT YOUR NEEDS</h3>
                <p>Engaging your body in diverse activities is crucial for sustaining motivation and enhancing the enjoyment of your day.</p>
                <a href="/join">
                    <button className={styles.button_join}>
                        <label>JOIN</label>
                    </button>
                </a>
            </div>
            <div className={styles.img_brand}>
                <div className={styles.colum_1}>
                    <h3>STRENGTH</h3>
                    <img className={styles.Img} src={Strength} alt="Strength Img"/>
                    <h3>FUNCIONAL</h3>
                    <img className={styles.Img} src={Funcional} alt="Funcional Img"/>
                </div>
                <div className={styles.colum_2}>
                    <h3>CROSSFIT</h3>
                    <img className={styles.Img} src={Crossfit} alt="Crossfit Img"/>
                    <h3>RESISTANCE</h3>
                    <img className={styles.Img} src={Resistance} alt="Resistance Img"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home