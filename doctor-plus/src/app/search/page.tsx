import { ReactElement } from "react";
import styles from "./page.module.css";
import { FilterTypes } from "@/types/filter.types";
import { doctors } from "@/mock/doctors";
import MainSearchBox from "@/components/MainSearchBox/MainSearchBox";
import FiltersProvider from "./providers/filters/filters.provider";
import AppointmentFilterComponent from "./components/fitersAppoinment/appointment-filter.component";
import DoctorsProvider from "./providers/doctors/doctors.provider";
import FiltersSummery from "./components/filtersSummery/filters.summery";
import ExpertiseFilterComponent from "./components/filtersExpertise/expertise-filter.component";
import GenderFilterComponent from "./components/filtersGender/gender-filter.component";
import DegreeFilterComponent from "./components/filtersDegree/degree-filter.component";
import SortComponent from "./components/filtersSort/sort.component";
import StatsComponent from "./components/stats/stats.component";
import ResultsComponent from "./components/result/results.component";

type SearchParams = { [key: string]: string | string[] | undefined };

type Props = { searchParams: Promise<SearchParams> };

export default async function page({
  searchParams,
}: Props): Promise<ReactElement> {
  const defaultFilters = generateDefaultFilters(await searchParams);
  return (
    <FiltersProvider defaultFilters={defaultFilters}>
      <DoctorsProvider doctors={doctors}>
        <div className={styles.page}>
          <div className={styles.search}>
            <MainSearchBox />
          </div>
          <div className={styles.filters}>
            <FiltersSummery />
            <ExpertiseFilterComponent />
            <GenderFilterComponent />
            <DegreeFilterComponent />
          </div>
          <div className={styles.toolbar}>
            <SortComponent />
            <AppointmentFilterComponent />
            <div className={styles.stats}>
              <StatsComponent />
            </div>
          </div>
          <div className={styles.results}>
            <ResultsComponent />
          </div>
        </div>
      </DoctorsProvider>
    </FiltersProvider>
  );
}

function generateDefaultFilters(searchParams: SearchParams): FilterTypes {
  const { query, expertise, gender, degree } = searchParams;
  return {
    query: normalizefilter(query),
    expertise: normalizefilter(expertise),
    gender: normalizefilter(gender),
    degree: normalizefilter(degree),
  };
}

function normalizefilter(
  value: string | string[] | undefined
): string | undefined {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
}
