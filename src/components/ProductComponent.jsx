import styles from "../styles/ProductComponent.module.scss";
import Carrousel from "./Carrousel";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectImage, openCarrousel } from "../state/slices/carrouselSlice";

const ProductComponent = () => {
  const carrousel = useSelector((state) => state.carrousel.carrousel);
  const indexImage = useSelector((state) => state.carrousel.indexImage);
  const imageSelected = useSelector((state) => state.carrousel.imageSelected);
  const dispatch = useDispatch();

  const firstImageContainerRef = useRef(null);
  const firstImageRef = useRef(null);
  const secondImageContainerRef = useRef(null);
  const secondImageRef = useRef(null);
  const thirdImageContainerRef = useRef(null);
  const thirdImageRef = useRef(null);
  const fourthImageContainerRef = useRef(null);
  const fourthImageRef = useRef(null);

  const images = [
    [firstImageContainerRef, firstImageRef],
    [secondImageContainerRef, secondImageRef],
    [thirdImageContainerRef, thirdImageRef],
    [fourthImageContainerRef, fourthImageRef],
  ];

  const handleMainImageClick = () => {
    dispatch(openCarrousel());
  };
  const handleSelectImage = (e) => {
    const index = e.target.id;
    dispatch(selectImage(index));
    if (imageSelected !== null) {
      for (let image of images) {
        image[0].current.style.border = "";
        image[0].current.style.borderRadius = "";
        image[1].current.style.opacity = "";
      }
    }
    images[index - 1][0].current.style.border =
      "0.2rem solid hsl(26, 100%, 55%)";
    images[index - 1][0].current.style.borderRadius = "10%";
    images[index - 1][1].current.style.opacity = "0.5";
  };

  return (
    <>
      {carrousel && <Carrousel />}
      <main>
        <div className={styles.imagesProduct}>
          <img
            onClick={handleMainImageClick}
            src={`../../public/images/image-product-${indexImage}.jpg`}
            className={`${styles.shownImage}`}
            alt="shoes"
          />

          <span className={styles.previewImage}>
            <span ref={firstImageContainerRef} className={styles.image}>
              <img
                ref={firstImageRef}
                onClick={(e) => {
                  handleSelectImage(e);
                }}
                id={1}
                src="../../public/images/image-product-1.jpg"
                alt="shoes1"
              />
            </span>
            <span ref={secondImageContainerRef} className={styles.image}>
              <img
                ref={secondImageRef}
                onClick={(e) => {
                  handleSelectImage(e);
                }}
                id={2}
                src="../../public/images/image-product-2.jpg"
                alt="shoes2"
              />
            </span>
            <span ref={thirdImageContainerRef} className={styles.image}>
              <img
                ref={thirdImageRef}
                onClick={(e) => {
                  handleSelectImage(e);
                }}
                id={3}
                src="../../public/images/image-product-3.jpg"
                alt="shoes3"
              />
            </span>
            <span ref={fourthImageContainerRef} className={styles.image}>
              <img
                ref={fourthImageRef}
                onClick={(e) => {
                  handleSelectImage(e);
                }}
                id={4}
                src="../../public/images/image-product-4.jpg"
                alt="shoes4"
              />
            </span>
          </span>
        </div>
        <div className={styles.productDescriptionContainer}>
          <span className={styles.companyName}>SNEAKER COMPANY</span>
          <h1 className={styles.productTitle}>Fall Limited Edition Sneakers</h1>
          <p className={styles.productDescription}>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className={styles.priceDiscount}>
            <h2 className={styles.price}>$125.00</h2>
            <span className={styles.discount}>50%</span>
          </div>
          <span className={styles.previousPrice}>$250.00</span>
          <div className={styles.buyButtons}>
            <div className={styles.buttonsContainer}>
              <button className={styles.decrementToProduct}>
                <img alt="minus" src="../../public/images/icon-minus.svg" />
              </button>
              <span className={styles.totalProducts}>0</span>
              <button className={styles.incrementToProduct}>
                <img alt="plus" src="../../public/images/icon-plus.svg" />
              </button>
            </div>
            <button className={styles.addToCart}>
              <img alt="cart" src="../../public/cart.svg" />
              Add to cart
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProductComponent;
