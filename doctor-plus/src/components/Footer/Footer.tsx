import React from "react";

import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

import certificateLogo from "@/assets/logo/certificate.svg";
import enamadLogo from "@/assets/logo/enamad.svg";
import somthingLogo from "@/assets/logo/idk.svg";
import MingcuteLinkedinFill from "../icons/MingcuteLinkedinFill";
import MingcuteTelegramFill from "../icons/MingcuteTelegramFill";
import MingcuteYoutubeFill from "../icons/MingcuteYoutubeFill";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <div className={styles.logo}>دکتر پلاس</div>
        <p className={styles.description}>دریافت نوبت از متخصصان کشور</p>
      </div>
      <div className={styles.visuals}>
        <ul className={styles.certificate}>
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
                <Link href="">
                <MingcuteLinkedinFill />
                </Link>
            </li>
            <li>
                <Link href="">
                <MingcuteTelegramFill />
                </Link>
            </li>
            <li>
                <Link href="">
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
