import React, { useContext, useEffect } from "react";
import { useGetTransactions } from "../../graphql/hooks/useGetTransactions";
import DropDown from "../../components/DropDown/DropDown";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./TransactBody.module.css";
import { dateFormatter } from "../../utils";
import TransactCard from "../TransactCard/TransactCard";
import { transactionTypes } from "../../types";
import { TransactionContext } from "../../context/TransactionContext";


export default function TransactBody() {
  const { error, loading, data } = useGetTransactions();
  const {transactSearchResults, setTransactSearchResults, setTransactions} = useContext(TransactionContext);
  useEffect(() => {
    if (error) {
     throw error;
    } else {
      setTransactions(data?.Transactions);
      setTransactSearchResults(data?.Transactions);
    }
  }, [data, setTransactSearchResults, setTransactions, error]);
  return (
    <div className={styles.transact_body_wrapper}>
      <div className={styles.transact_body_inner}>
        <section className={`h-32 flex items-center justify-center`}>
          <h1 className={`text-primary text-xl`}>Transaction History</h1>
        </section>
        <section>
          <SearchBar />
        </section>
        <section>
          <h2 className={`text-primary flex h-16 items-center text-lg`}>
            Filters
          </h2>
          <div className={`flex ${styles.filters}`}>
            <div>
              <DropDown
                type="type"
                title="All Payments"
                list_items={["All Payments", "Credit", "Debit"]}
              />
            </div>
            <div>
              <DropDown
                type="status"
                title="All Statuses"
                list_items={["All Statuses", "Successful", "Pending", "Failed"]}
              />
            </div>
          </div>
        </section>
        <section>
          {loading ? (
            <div className={`h-32 flex items-center justify-center`}>
              Loading...
            </div>
          ) : (
            transactSearchResults?.map(
              (transaction: transactionTypes, index: number) => (
                <div key={transaction.id} className={` my-5 ${styles.transact_item}`}>
                  <section>
                    <h3 className={`font-semibold`}>{dateFormatter(transaction.date)}</h3>
                  </section>
                  <div className={`${styles.transact_item_inner}`}>
                    <table className={`${styles.transact_card}`}>
                      <thead></thead>
                      <tbody>
                        {transaction?.transactions?.map((item) => (
                          <TransactCard key={item.id} details={item} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )
            )
          )}
        </section>
      </div>
    </div>
  );
}
