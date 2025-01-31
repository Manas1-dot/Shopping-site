import React from "react";
import styles from "./ImageSection.module.css";

function ImageSection() {
  return (
    <div className={styles.imageHead}>
      {[1, 2, 3, 4].map((val,index) => (
        <div key={index} className={styles.imageInner}></div>
      ))}
    </div>
  );
}

export default ImageSection;
