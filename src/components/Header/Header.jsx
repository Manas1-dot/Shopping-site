import React from "react";
import styles from "./Header.module.css";

function Header() {
  const data = ["Ecommerce", "Shop", "Stories", "About"];
  return (
    <div className={styles.header} >
      <div className={styles.headerLeft}>
        {data.map((val, index) => (
          <div key={index} className={styles.innerText}>{val}</div>
        ))}
      </div>

      <div className={styles.headerRight}>
        <div>Login</div>
      </div>
    </div>
  );
}

export default Header;
