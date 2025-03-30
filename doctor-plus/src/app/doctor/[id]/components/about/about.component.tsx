import { ReactElement } from "react";

import CardComponent from "@/components/card/card.component";


import styles from "./about.module.css";
import { DetailedDoctorModel } from "@/models/detailed-doctor.model";

type Props = {
  doctor: DetailedDoctorModel;
};

export default function AboutComponent({ doctor }: Props): ReactElement {
  return (
    <CardComponent className={styles.about} title="درباره من">
      {doctor.about}
    </CardComponent>
  );
}
