"use client"

import { ReactElement } from "react";
import { useContext } from "react";
import { DoctorsContext } from "../../providers/doctors/doctors.provider";
import styles from "./stats.module.css";

export default function StatsComponent(): ReactElement {
  const { filteredDoctors } = useContext(DoctorsContext);

  return (
    <div className={styles.stats}>
      {filteredDoctors.length.toLocaleString()} نتیجه
    </div>
  );
}
