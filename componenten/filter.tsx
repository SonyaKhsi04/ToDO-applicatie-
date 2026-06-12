"use client";
import { useState } from "react";
import styles from "../css/filter.module.css";

const filters = [
  "Alles",
  "Open",
  "Klaar",
  "Werk",
  "Persoonlijk",
  "Gezondheid",
  "Finance",
];

type CategorieFiltersProps = {
  setFilter: (filter: string) => void;
};

export default function CategorieFilters({ setFilter }: CategorieFiltersProps) {
  const [activeFilter, setActiveFilter] = useState("Alles");

  return (
    <div className={styles.filters}>
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => {
            setActiveFilter(filter);
            setFilter(filter);
          }}
          className={`${activeFilter === filter ? styles.active : ""}`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
