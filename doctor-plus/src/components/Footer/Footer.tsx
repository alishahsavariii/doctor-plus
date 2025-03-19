import React from "react";

import Image from "next/image";
import Link from "next/link";

import certificateLogo from "@/assets/logo/certificate.svg";
import enamadLogo from "@/assets/logo/enamad.svg";
import somthingLogo from "@/assets/logo/idk.svg";
import MingcuteLinkedinFill from "../icons/MingcuteLinkedinFill";
import MingcuteTelegramFill from "../icons/MingcuteTelegramFill";
import MingcuteYoutubeFill from "../icons/MingcuteYoutubeFill";

import styles from "./footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <div className={styles.logo}>دکتر پلاس</div>
        <p className={styles.description}>
          تجربه مشاوره آنلاین و دریافت نوبت از بهترین پزشکان و بیمارستان‌های
          ایران
        </p>
      </div>
      <div className={styles.visuals}>
        <ul className={styles.certificates}>
          <li>
            <Link href="#">
              <Image src={certificateLogo} alt="logo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={enamadLogo} alt="logo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={somthingLogo} alt="logo" />
            </Link>
          </li>
        </ul>
        <ul className={styles.socials}>
          <li>
            <Link
              href="https://www.linkedin.com/in/alishahsavari"
              target="_blank"
            >
              <MingcuteLinkedinFill />
            </Link>
          </li>
          <li>
            <Link href="https://t.me/iamalishahh" target="_blank">
              <MingcuteTelegramFill />
            </Link>
          </li>
          <li>
            <Link href="https://www.youtube.com" target="_blank">
              <MingcuteYoutubeFill />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copy}>
        تمامی حقوق مادی معنوی وبسایت و محتوای مربوط به آن متعلق به توسعه دهنده
        میباشد.
      </p>
    </footer>
  );
};

export default Footer;
