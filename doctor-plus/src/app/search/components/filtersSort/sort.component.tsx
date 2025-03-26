"use client"


import SelectComponent from "@/components/select/select.component";
import { SelectOptionType } from "@/types/select-option.type";
import { ReactElement, useState } from "react";

const options: SelectOptionType[] = [
  { value: "rating", label: "بهترین" },
  { value: "popularity", label: "محبوب‌ترین" },
  { value: "appointment", label: "نزدیک‌ترین نوبت" },
  { value: "waiting", label: "کمترین زمان معطلی" },
  { value: "view", label: "پربازدیدترین" },
];

export default function SortComponent(): ReactElement {
  const [selectedOption, setSelectedOption] = useState<SelectOptionType>(
    options[0]
  );
  return (
    <SelectComponent
      floating
      options={options}
      title="مرتب سازی"
      selectedOption={selectedOption}
      onSelectedOptionChange={setSelectedOption}
    />
  );
}
