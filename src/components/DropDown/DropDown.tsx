import React, { useState } from "react";
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
  let transactArr: any = [];


  const [chosenTitle, setTitle] = useState(title);
  const [isOpen, setIsOpen] = useState(false);
  let filter: string = "";

  const handleChange = (item: string) => {
    filter = item;
    let filtersCopy = { ...transactFilters };
    filtersCopy[type] = filter;
    setTransactFilters({ ...filtersCopy });

    for (let i = 0; i < searchResults?.length; i++) {
      let filteredTransact = searchResults[i]?.transactions?.filter(
        (transact: any) => {
          return (
            transact.status.toLowerCase() ===
            transactFilters.status.toLowerCase()
          );
        }
      );

      let transactCopy: any = { ...searchResults[i] };
      transactCopy.transactions = filteredTransact;
      transactArr.push({ ...transactCopy });
    
    }
    setTransactSearchResults([...transactArr]);
  };

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
            <h1>{chosenTitle}</h1>
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
