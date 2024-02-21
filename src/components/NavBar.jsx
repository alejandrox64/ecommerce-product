import React from "react";
import styles from "../styles/NavBar.module.scss";

const NavBar = () => {
  return (
    <>
      <nav className={styles.navBar}>
        <div className={styles.navContainer}>
          <img src="../../public/images/logo.svg" />
          <div className={styles.navList}>
            <span className={styles.listItem}>Collections</span>
            <span className={styles.listItem}>Man</span>
            <span className={styles.listItem}>Woman</span>
            <span className={styles.listItem}>About</span>
            <span className={styles.listItem}>Contact</span>
          </div>
        </div>
        <div className={styles.cartUserContainer}>
          <span className={styles.cart}>
            <img src="../../public/images/icon-cart.svg" />
            <span></span>
          </span>
          <img
            src="../../public/images/image-avatar.png"
            className={styles.userImage}
          />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
