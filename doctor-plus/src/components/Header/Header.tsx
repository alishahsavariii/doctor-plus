"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import styles from "./header.module.css";
import { ButtonLinkComponent } from "../Button/Button";
import { ThemeToggle } from "../themeToggle/theme.toggle.component"; // Added import

type PAGE_INFO = {
  href: string;
  title: string;
};

const Header: React.FC = () => {
  const pathname = usePathname();

  const pagesInfo: PAGE_INFO[] = [
    { href: "/", title: "خانه" },
    { href: "/search", title: "جست و جو " },
  ];

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {pagesInfo?.map((item: PAGE_INFO, index: number) => (
            <li key={index}>
              <Link
                key={index}
                href={item.href}
                className={clsx(pathname === item.href && styles.active)}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ButtonLinkComponent
        variant="primary"
        shape="outlined"
        className={styles.cta}
        href="/auth/sign-in"
      >
        ورود | ثبت‌نام
      </ButtonLinkComponent>
      <ThemeToggle /> {/* Added ThemeToggle component */}
    </header>
  );
};

export default Header;
