import { ReactElement } from "react";



import styles from "./contact.module.css";
import { DetailedDoctorModel } from "@/models/detailed-doctor.model";
import CardComponent from "@/components/card/card.component";
import { ButtonLinkComponent } from "@/components/Button/Button";
import MingcuteCalendarMonthLine from "@/components/icons/MingcuteCalendarMonthLine";
import MingcutePhoneLine from "@/components/icons/MingcutePhoneLine";
import MingcuteLocationLine from "@/components/icons/MingcuteLocationLine";

type Props = {
  doctor: DetailedDoctorModel;
};

export default function ContactComponent({ doctor }: Props): ReactElement {
  return (
    <CardComponent className={styles.contact} title="آدرس و تلفن تماس">
      <div className={styles.info}>
        <div className={styles.title}>مطب {doctor.name}</div>
        <div className={styles.address}>{doctor.address}</div>
      </div>
      <div className={styles.actions}>
        <ButtonLinkComponent variant="primary" shape="outlined" href="#">
          <MingcuteCalendarMonthLine />
          برنامه کاری پزشک
        </ButtonLinkComponent>
        <ButtonLinkComponent variant="primary" shape="outlined" href="#">
          <MingcutePhoneLine />
          {doctor.phone}
        </ButtonLinkComponent>
        <ButtonLinkComponent variant="primary" shape="outlined" href="#">
          <MingcuteLocationLine />
          مشاهده در نقشه و مسیریابی
        </ButtonLinkComponent>
      </div>
    </CardComponent>
  );
}
