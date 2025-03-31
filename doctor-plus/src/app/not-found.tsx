import React from "react";
import Image from "next/image";

import MainSearchBox from "@/components/MainSearchBox/MainSearchBox";

import styles from "./notFound.module.css";
import notFoundImage from "@/assets/illustrations/not-found.svg";

const NotFound: React.FC = () => {
  return (
    <div className={styles["not-found"]}>
      <div className={styles.writings}>
        <div className={styles["status-code"]}>404</div>
        <h1>صفحه موردنظر پیدا نشد!</h1>
        <p>
          با عرض پوزش، لطفاً از طریق کادر جستجو، پزشک یا مرکز درمانی مورد نظر
          خود را جستجو کنید.
        </p>
      </div>
      <div className={styles.visuals}>
        <Image src={notFoundImage} alt="" />
      </div>
      <div className={styles.search}>
        <MainSearchBox />
      </div>
    </div>
  );
};

export default NotFound;
