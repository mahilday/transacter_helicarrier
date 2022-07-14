import React, { useEffect, useState } from "react";
import { TransactionContext } from "../../context/TransactionContext";
import styles from "./DropDown.module.css";

interface DropDownProps {
  type: string;
  title: string;
  list_items: string[];
}
export default function DropDown({ type, title, list_items }: DropDownProps) {
  const {
    transactions,
    setTransactSearchResults,
    transactFilters,
    setTransactFilters,
  } = React.useContext(TransactionContext);
  let searchResults = transactions;

  const [chosenTitle, setTitle] = useState(title);
  const [isOpen, setIsOpen] = useState(false);
  let filter: string = "";

  const handleChange = (item: string) => {
    filter = item;
    let filtersCopy = { ...transactFilters };
    filtersCopy[type] = filter;

    const newFilters = filtersCopy;
    setTransactFilters({ ...newFilters });
  };

  useEffect(() => {
    let transactArr: any = [];

    for (let i = 0; i < searchResults?.length; i++) {
      let filteredTransact = searchResults[i]?.transactions?.filter(
        (transact: any) => {
          let newFilter = transactFilters;
          if (
            newFilter.type.toLowerCase() !== "all payments" &&
            newFilter.status.toLowerCase() !== "all statuses"
          ) {
            return (
              transact.type.toLowerCase() === newFilter.type.toLowerCase() &&
              transact.status.toLowerCase() === newFilter.status.toLowerCase()
            );
          } else if (
            newFilter.type.toLowerCase() === "all payments" &&
            newFilter.status.toLowerCase() === "all statuses"
          ) {
            return transactions;
          } else {
            return (
              transact.type.toLowerCase() === newFilter.type.toLowerCase() ||
              transact.status.toLowerCase() === newFilter.status.toLowerCase()
            );
          }
        }
      );

      let transactCopy: any = { ...searchResults[i] };
      transactCopy.transactions = filteredTransact;
      transactArr.push({ ...transactCopy });
    }
    setTransactSearchResults([...transactArr]);
  }, [transactFilters, setTransactSearchResults, searchResults, transactions]);


  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className={`relative`}>
        <section>
          <div
            onClick={handleDropdown}
            className={`flex items-center ${styles.drop_pill}`}
          >
            <h1>{transactFilters[type]}</h1>
            <div
              className={`ml-5 flex items-center ${
                isOpen === true ? "rotate" : "noRotate"
              }`}
            >
              <img src="/assets/down_arrow.svg" alt="dropdown" />
            </div>
          </div>
        </section>
        <section
          className={`${isOpen === true ? "block" : "hidden"} ${
            styles.drop_list
          }`}
        >
          {list_items.map((item, index) => (
            <div
              onClick={() => {
                handleChange(item);
                setTitle(item);
                setIsOpen(false);
              }}
              className={`${styles.drop_item} ${
                chosenTitle === item ? styles.active : ""
              }`}
              key={index}
            >
              {item}
            </div>
          ))}
        </section>
      </div>
      <div onClick={() => setIsOpen(false)} className={`outsideClick`}></div>
    </div>
  );
}
