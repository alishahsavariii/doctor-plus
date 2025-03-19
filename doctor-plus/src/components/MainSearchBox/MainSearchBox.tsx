import React from "react";

import MingcuteSearchLine from "../icons/MingcuteSearchLine";
import MingcuteLocationLine from "../icons/MingcuteLocationLine";

import styles from "./mainSearchBox.module.css";

const MainSearchBox: React.FC = () => {
  return (
    <div className={styles["main-search-box"]}>
      <div className={styles.prefix}>
        <MingcuteSearchLine />
      </div>
      <input type="text" placeholder="نام بیماری،پزشک،بیمارستان و ..." />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <button>
          <MingcuteLocationLine />
          همه شهرها
        </button>
      </div>
    </div>
  );
};

export default MainSearchBox;
