import React, { useState } from "react";
import styles from "../Home/Home.module.css";

function Counter() {
  const [count, setCount] = useState(0);
  return (
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
  );
}

export default Counter;
