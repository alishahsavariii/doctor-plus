"use client";

import React, { FormEvent, useContext, useEffect, useState } from "react";

import MingcuteSearchLine from "../icons/MingcuteSearchLine";
import MingcuteLocationLine from "../icons/MingcuteLocationLine";

import styles from "./mainSearchBox.module.css";
import { usePathname, useRouter } from "next/navigation";
import { FilterContext } from "@/app/search/providers/filters/filters.provider";
import { ButtonComponent } from "../Button/Button";

const MainSearchBox: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const { filters, dispatchFilters } = useContext(FilterContext);

  const [query, setQuery] = useState<string>("");

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (pathname === "/search") {
      if (query) {
        dispatchFilters({
          type: "updated_filter",
          key: "query",
          value: query,
        });
      } else {
        dispatchFilters({
          type: "removed_filter",
          key: "query",
        });
      }
    } else {
      const href = query ? `/search/?query=${query}` : "/search";
      router.push(href);
    }
  };

  useEffect(() => {
    if (pathname !== "/search") {
      return;
    }

    const filterQuery = filters.query || "";
    setQuery(filterQuery);

    const href = filterQuery ? `/search/?query=${filterQuery}` : "/search";
    router.replace(href);
  }, [filters, pathname, router]);

  return (
    <form className={styles["global-search-box"]} onSubmit={formSubmitHandler}>
      <div className={styles.prefix}>
        <MingcuteSearchLine />
      </div>
      <input
        name="query"
        type="text"
        placeholder="نام بیماری، تخصص، پزشک، بیمارستان و ..."
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
      />
      <div className={styles.divider}></div>
      <div className={styles.suffix}>
        <ButtonComponent type="button">
          <MingcuteLocationLine />
          همه شهرها
        </ButtonComponent>
      </div>
    </form>
  );
};

export default MainSearchBox;
