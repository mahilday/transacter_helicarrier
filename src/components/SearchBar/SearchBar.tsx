import React from "react";
import { TransactionContext } from "../../context/TransactionContext";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const { transactions,  setTransactSearchResults } =
    React.useContext(TransactionContext);
  let searchInput = "";
  let searchResults = transactions;

  let transactArr: any = [];

  const reset = () => {
    transactArr = [];
  };

  const handleSearchInput = (e: any) => {
    reset();
    searchInput = e.target.value;
    let pattern = searchInput
      .split("")
      .map((x: string) => {
        return `(?=.*${x})`;
      })
      .join("");

    let regex = new RegExp(`${pattern}`, "g");

    for (let i = 0; i < searchResults?.length; i++) {
      let filteredTransact = searchResults[i]?.transactions?.filter(
        (transact: any) => {
          return (
            transact?.name.toLowerCase().match(regex) ||
            transact?.accountNumber.match(regex) || transact?.email.toLowerCase().match(regex)
          );
        }
      );
      let transactCopy: any = { ...searchResults[i] };
      transactCopy.transactions = filteredTransact;
      transactArr.push({ ...transactCopy });
    }
    setTransactSearchResults([...transactArr]);
  };

  return (
    <div>
      <section className={styles.search_bar_top}>
        <div
          className={`w-11/12  md:10/12 lg:w-8/12 ${styles.search_bar_wrapper}`}
        >
          <div>
            <img src="/assets/search.svg" alt="search_icon" />
          </div>
          <div className={styles.search_bar_inner}>
            <input
              type="text"
              placeholder="Search by email, account number or name"
              onKeyUp={handleSearchInput}
              onKeyDown={handleSearchInput}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
