import React from "react";
import styles from "../styles/Carrousel.module.scss";

const Carrousel = () => {
  return (
    <>
      <div className={styles.imagesProduct}>
        <button className={styles.buttonOfClosed}>
          <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <path
              id={styles.path}
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="#ffffff"
              fillRule="evenodd"
            />
          </svg>
        </button>

        <div className={styles.activeImage}>
          <img
            src="../../public/images/image-product-1.jpg"
            className={styles.shownImage}
            alt="shoes"
          />
          <button className={styles.prevButton}>
            <svg
              className={styles.iconButton}
              width="12"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id={styles.path}
                d="M11 1 3 9l8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
          <button className={styles.nextButton}>
            <svg
              className={styles.iconButton}
              width="13"
              height="18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id={styles.path}
                d="m2 1 8 8-8 8"
                stroke="#1D2026"
                stroke-width="3"
                fill="none"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <span className={styles.previewImage}>
          <img src="../../public/images/image-product-1.jpg" alt="shoes1" />
          <img src="../../public/images/image-product-2.jpg" alt="shoes2" />
          <img src="../../public/images/image-product-3.jpg" alt="shoes3" />
          <img src="../../public/images/image-product-4.jpg" alt="shoes4" />
        </span>
      </div>
    </>
  );
};

export default Carrousel;
