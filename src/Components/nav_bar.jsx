import React, { useEffect , useState } from 'react'
import styles from '../Components/nav_bar.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const nav_bar = ({ setNavBarOpen }) => {

  //Cambiar background de nav_bar de transparente a color solido al desplazar en Y.
  const [color, setColor] = useState(false);
  
  const ChangeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener('scroll', ChangeColor);


  //Detecta dimensiones de pantalla.
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', detectDimension);
    return () => {
      window.removeEventListener('resize', detectDimension);
    };
  }, []);

  const links = [
    { id: 1, 
    link: 'ABOUT US',
    url: '/aboutus',
    external: false,
    },
  ];

  const [NavBarOpen, setNavBarOpenLocal] = useState(false);

  const NavlinkClick = () => {
    setNavBarOpenLocal(false);
    if (windowDimension.width < 800) {
      setNavBarOpen(true);
    };
  };

  const LogoMenuClick = () => {
    setNavBarOpenLocal(!NavBarOpen);
    if (windowDimension.width < 800) {
      setNavBarOpen(false);
    }
  };

  const [highlightedLink, setHighlightedLink] = useState(null);

  const handleLinkHover = (id) => {
    setHighlightedLink(id);
  };

  const handleLinkLeave = () => {
    setHighlightedLink(null);
  };

  return (
    <div className={`${styles.navBar} ${color ? styles.navBarScroll : ''} ${NavBarOpen ? styles.navOpen : ''}`}>
      {!NavBarOpen && <a className={styles.logo} href='/'><label className={styles.color_logo}>PREMIUM</label><label className={styles.color_logo_white}>GYM</label></a>}
      {!NavBarOpen && windowDimension.width < 800 ? (
        <AiOutlineMenu
          className={styles.logoMenu}
          onClick={LogoMenuClick}
          size={25}
        />
      ) : (
        windowDimension.width < 800 && (
          <AiOutlineClose
          className={styles.logoClose}
            onClick={() => {
              setNavBarOpenLocal(!NavBarOpen);
              NavlinkClick();
            }}
            color="white"
            size={25}
          />
        )
      )}
      {(NavBarOpen || windowDimension.width > 800) && (
        <ul className={styles.linksConteiner}>
          {links.map((x) => (
            <div key={x.id}>
              <a
                href={x.url}
                className={`${styles.navLink} ${
                  highlightedLink === x.id ? styles.highlightedLink : ''
                }`}
                onMouseEnter={() => handleLinkHover(x.id)}
                onMouseLeave={handleLinkLeave}
                onClick={NavlinkClick}
              >
                {x.link === 'About Us' ? 'About Us' : x.link}
              </a>
              <div
                className={`${styles.border} ${
                  highlightedLink === x.id ? styles.borderHighlight : ''
                }`}
              ></div>
            </div>
          ))}
          <a href="/join" className={`${styles.contactLink} ${highlightedLink === 2 ? styles.highlightedLink : ''}`} onMouseEnter={() => handleLinkHover(2)} onMouseLeave={handleLinkLeave} onClick={NavlinkClick}>
            JOIN
          </a>
        </ul>
      )}
    </div>
  );
};

export default nav_bar;
