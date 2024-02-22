import React from "react";
import styles from "../styles/ProductComponent.module.scss";

const ProductComponent = () => {
  return (
    <main>
      <div className={styles.imagesProduct}>
        <img className={styles.shownImage} alt="shoes" />

        <span className={styles.previewImage}>
          <img alt="shoes1" />
          <img alt="shoes2" />
          <img alt="shoes3" />
          <img alt="shoes4" />
        </span>
      </div>
      <div className={styles.productDescriptionContainer}>
        <span className={styles.companyName}></span>
        <h1 className={styles.productTitle}></h1>
        <p className={styles.productDescription}></p>
        <div className={styles.priceDiscount}>
          <span className={styles.price}></span>
          <span className={styles.discount}></span>
        </div>
        <span className={styles.previousPrice}></span>
        <div className={styles.buyButtons}>
          <div>
            <button className={styles.decrementToProduct}></button>
            <span className={styles.totalProducts}></span>
            <button className={styles.incrementToProduct}></button>
          </div>
          <button className={styles.addToCart}></button>
        </div>
      </div>
    </main>
  );
};

export default ProductComponent;
