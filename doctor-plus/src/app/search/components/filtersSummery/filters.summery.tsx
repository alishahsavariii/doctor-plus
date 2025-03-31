"use client"

import { ReactElement, useContext, useMemo } from "react";
import { FilterContext } from "../../providers/filters/filters.provider";
import { FilterTypes } from "@/types/filter.types";
import CardComponent from "@/components/card/card.component";

import styles from "./filters-summary.module.css";
import { ButtonComponent } from "@/components/Button/Button";

export default function FiltersSummery(): ReactElement | null {
  const { filters, dispatchFilters } = useContext(FilterContext);

  const isEmpty = useMemo(() => {
    return (
      !filters.query && !filters.expertise && !filters.gender && !filters.degree
    );
  }, [filters]);

  const removeAllButtonCLickHandler = (): void => {
    dispatchFilters({ type: "removed_all" });
  };

  const filterClickHandler = (key: keyof FilterTypes): void => {
    dispatchFilters({ type: "removed_filter", key });
  };
  if (isEmpty) {
    return null;
  }

  return (
    <CardComponent>
    <div className={styles["filters-summary"]}>
      <div className={styles.title}>فیلترهای انتخاب‌شده</div>

      <ButtonComponent
        variant="danger"
        shape="outlined"
        type="button"
        size="small"
        onClick={removeAllButtonCLickHandler}
      >
        حذف همه
      </ButtonComponent>

      <ul className={styles.filters}>
        {filters.query && (
          <li onClick={() => filterClickHandler("query")}>{filters.query}</li>
        )}
        {filters.expertise && (
          <li onClick={() => filterClickHandler("expertise")}>
            {filters.expertise}
          </li>
        )}
        {filters.gender && (
          <li onClick={() => filterClickHandler("gender")}>
            {filters.gender}
          </li>
        )}
        {filters.degree && (
          <li onClick={() => filterClickHandler("degree")}>
            {filters.degree}
          </li>
        )}
      </ul>
    </div>
  </CardComponent>
  );
}
