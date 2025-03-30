import { ReactElement } from "react";

import CardComponent from "@/components/card/card.component";

import styles from "./activities.module.css";
import { DetailedDoctorModel } from "@/models/detailed-doctor.model";
import MingcuteMessage4Line from "@/components/icons/MingcuteMessage4Line";
import MingcuteCalendarMonthLine from "@/components/icons/MingcuteCalendarMonthLine";

type Props = {
  doctor: DetailedDoctorModel;
};

export default function ActivitiesComponent({ doctor }: Props): ReactElement {
  return (
    <CardComponent className={styles.activities} title="فعالیت‌ها">
      <div className={styles.activity}>
        <MingcuteMessage4Line />
        <p>
          <span className={styles.highlight}>{doctor.consultations}</span>{" "}
          مشاوره فعال
        </p>
      </div>
      <div className={styles.activity}>
        <MingcuteCalendarMonthLine /> دکتر پلاس بیش از
        <p>
          <span className={styles.highlight}>{doctor.membershipDuration}</span>{" "}
          افتخار میزبانی از صفحه اختصاصی {doctor.name} را داشته است.
        </p>
      </div>
    </CardComponent>
  );
}
