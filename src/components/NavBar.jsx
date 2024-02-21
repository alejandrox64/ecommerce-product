import React from "react";
import styles from "../styles/NavBar.module.scss";

const NavBar = () => {
  return (
    <nav>
      <div className={styles.navContainer}>
        <img src="../../public/images/logo.svg" />
        <ul>
          <li>Collections</li>
          <li>Man</li>
          <li>Woman</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles.carUserContiner}>
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
  );
};

export default NavBar;
