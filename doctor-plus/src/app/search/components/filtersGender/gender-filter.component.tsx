"use client";

import { ReactElement, useContext } from "react";

import { FilterContext } from "@/app/search/providers/filters/filters.provider";
import RadioFilterComponent from "../radioFilter/radio-filter.component";


export default function GenderFilterComponent(): ReactElement {
  const { filters, dispatchFilters } = useContext(FilterContext);

  const changeHandler = (value: string): void => {
    dispatchFilters({ type: "updated_filter", key: "gender", value });
  };

  return (
    <RadioFilterComponent
      title="جنسیت پزشک"
      name="gender"
      options={[
        { value: "male", label: "آقا" },
        { value: "female", label: "خانم" },
      ]}
      value={filters.gender}
      onChange={changeHandler}
    />
  );
}
