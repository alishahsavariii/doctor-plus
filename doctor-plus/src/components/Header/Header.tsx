"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import styles from "./header.module.css";

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
          <li>
            {pagesInfo?.map((item: PAGE_INFO, index: number) => (
              <Link
                key={index}
                href={item.href}
                className={clsx(pathname === item.href && styles.active)}
              >
                {item.title}
              </Link>
            ))}
          </li>
        </ul>
      </nav>
      <button className={styles.cta}>ورود | ثبت نام</button>
    </header>
  );
};

export default Header;
