"use client"

import { FilterTypes } from "@/types/filter.types";
import {
  createContext,
  Dispatch,
  PropsWithChildren,
  ReactElement,
  useReducer,
} from "react";
import { FiltersAction, filtersReducer } from "../../reducers/filters.reducer";

type Value = {
  filters: FilterTypes;
  dispatchFilters: Dispatch<FiltersAction>;
};

export const FilterContext = createContext<Value>({
  filters: {},
  dispatchFilters: () => {},
});

type Props = PropsWithChildren & {
  defaultFilters: FilterTypes;
};

export default function FiltersProvider({
  children,
  defaultFilters,
}: Props): ReactElement {
  const [filters, dispatchFilters] = useReducer(filtersReducer, defaultFilters);
  return (
    <FilterContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FilterContext.Provider>
  );
}
