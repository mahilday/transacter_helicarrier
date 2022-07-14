import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div>
      <section className={styles.search_bar_top}>
        <div className={styles.search_bar_wrapper}>
          <div>
            <img src="/assets/search.svg" alt="search_icon" />
          </div>
          <div className={styles.search_bar_inner}>
            <input
              type="text"
              placeholder="Search by date, account number or name"
            />
          </div>
        </div>
      </section>
    </div>
  );
}