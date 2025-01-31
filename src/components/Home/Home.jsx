import React, { useState } from "react";
import styles from "./Home.module.css";
import ImageSection from "../ImageSection/ImageSection";
import CommonButton from "../Button/CommontButton";

function Home() {
  const sizeData = ["XS", "S", "M", "L", "XL", "XXL"];
  const [count, setCount] = useState(0);
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
                <div key={index} className={styles.box1}>{val}</div>
              ))}
            </div>
          </div>

          <div className={styles.text}>Size & Fit Guide</div>

          <div className={styles.textColor}>
            Height of model: 189 cm. / 6′ 2″ Size 41
          </div>

          <div className={styles.textColor}>Quantity</div>

          <div className={styles.countBody}>
            <div className={styles.countTop}>
              <div
                onClick={() => {
                  if (count > 0) {
                    setCount((prev) => prev - 1);
                  }
                }}
                className={styles.minusButon}
              >
                -
              </div>
              <div>{count}</div>
              <div
                className={styles.minusButon}
                onClick={() => setCount((prev) => prev + 1)}
              >
                +
              </div>
            </div>
          </div>

          <CommonButton text="Add to Cart" />
        </div>
      </div>
    </div>
  );
}

export default Home;
