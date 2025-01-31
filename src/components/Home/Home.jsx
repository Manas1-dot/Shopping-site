import React from "react";
import styles from "./Home.module.css";
import ImageSection from "../ImageSection/ImageSection";
import CommonButton from "../Button/CommontButton";
import Counter from "../Counter/Counter";

function Home() {
  const sizeData = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div className={styles.homeBody}>
      <div className={styles.homeLeft}>
        <ImageSection />
      </div>

      <div className={styles.homeRight}>
        <div id="product-page" className={styles.innerRight}>
          <div className={styles.heading}>Men’s winter jacket</div>
          <div className={styles.innerText}>
            Revamp your style with the latest designer trends in men’s clothing
            or achieve a perfectly curated wardrobe thanks to our line-up of
            timeless pieces.{" "}
          </div>

          <div>
            <div className={styles.textColor}>Color</div>
            <div className={styles.colorBody}>
              <div className={styles.colorLeft}></div>
              <div className={styles.colorRight}></div>
            </div>
          </div>

          <div className={styles.sizeCover}>
            <div className={styles.textColor}>Size</div>
            <div className={styles.sizeBody}>
              {sizeData.map((val, index) => (
                <div key={index} className={styles.box1}>
                  {val}
                </div>
              ))}
            </div>
          </div>

          <div className={styles.text}>Size & Fit Guide</div>

          <div className={styles.textColor}>
            Height of model: 189 cm. / 6′ 2″ Size 41
          </div>

          <div className={styles.textColor}>Quantity</div>

          <Counter />

          <CommonButton text="Add to Cart" />
        </div>
      </div>
    </div>
  );
}

export default Home;
