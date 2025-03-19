import MyDoctorLogo from "@/components/Logo/my-doctor.logo";
import MainSearchBox from "@/components/MainSearchBox/MainSearchBox";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>
        <MyDoctorLogo />
        دکتر پلاس
      </h1>
      <MainSearchBox />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>جراح عمومی</li>
          <li>مغز و اعصاب</li>
        </ul>
      </div>
    </div>
  );
}
