"use client";

import { ReactElement, useContext } from "react";

import { ButtonComponent } from "@/components/Button/Button";
import CardComponent from "@/components/card/card.component";

import { FilterContext } from "../../providers/filters/filters.provider";

import styles from "./expertise-filter.module.css";

const options: string[] = [
  "زنان، زایمان و نازایی",
  "چشم پزشکی",
  "گوارش و معده",
  "کلیه و مجاری ادراری",
  "غدد و متابولیسم",
  "قلب و عروق",
  "داخلی",
  "دهان و دندان",
  "پوست و مو",
  "جراحی",
  "روانپزشکی",
  "ریه و دستگاه تنفسی",
  "گوش، حلق و بینی",
  "خون و سرطان",
  "آزمایشگاه",
  "پزشک عمومی",
  "تغذیه",
  "روانشناسی",
  "ژنتیک",
  "عفونی",
  "مغز و اعصاب",
  "طب سنتی",
  "توانبخشی",
];

export default function ExpertiseFilterComponent(): ReactElement {
  const { dispatchFilters } = useContext(FilterContext);

  const buttonClickHandler = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "expertise", value });
  };

  return (
    <CardComponent>
      <ul className={styles["expertise-filter"]}>
        {options.map((item: string) => (
          <li key={item}>
            <ButtonComponent
              className={styles.button}
              type="button"
              onClick={() => buttonClickHandler(item)}
            >
              {item}
            </ButtonComponent>
          </li>
        ))}
      </ul>
    </CardComponent>
  );
}
