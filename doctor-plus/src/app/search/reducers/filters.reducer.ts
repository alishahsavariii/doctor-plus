import { FilterTypes } from "@/types/filter.types";

export type FiltersAction =
  | {
      type: "updated_filter";
      key: keyof FilterTypes;
      value: string;
    }
  | {
      type: "removed_filter";
      key: keyof FilterTypes;
    }
  | {
      type: "removed_all";
    };

export function filtersReducer(filters: FilterTypes, action: FiltersAction) {
  switch (action.type) {
    case "updated_filter": {
      return { ...filters, [action.key]: action.value };
    }
    case "removed_filter": {
      const clonedFilter = { ...filters };
      delete clonedFilter[action.key];
      return clonedFilter;
    }
    case "removed_all": {
      return {};
    }
  }
}
