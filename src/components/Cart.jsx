import React from "react";
import styles from "../styles/Cart.module.scss";

const Cart = () => {
  return (
    <div className={styles.cartContainer}>
      <h3>Cart</h3>
      <hr />

      {/* product deberia ser un elemento devuelto por un map en base a un estado */}
      <span className={styles.product}>
        <img
          className={styles.imageOfProduct}
          src="../../public/images/image-product-1.jpg"
        />
        <span className={styles.infoOfProduct}>
          <p className={styles.nameOfProduct}>Fall Limited Edition Sneakers</p>
          <span className={styles.price}>
            $125
            <p className={styles.totalPrice}></p>
          </span>
        </span>
        <button className={styles.delete}>
          <img src="../../public/images/icon-delete.svg" />
        </button>
      </span>
      <button className={styles.checkout}>Checkout</button>
    </div>
  );
};

export default Cart;
