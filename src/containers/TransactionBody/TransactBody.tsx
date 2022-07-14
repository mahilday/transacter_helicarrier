import React, { useEffect } from "react";
import { useGetTransactions } from "../../graphql/hooks/useGetTransactions";
import DropDown from "../../components/DropDown/DropDown";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./TransactBody.module.css";
import { dateComparison, dateFormatter } from "../../utils";
import TransactCard from "../TransactCard/TransactCard";

type transactionTypes = {
  id: string;
  date: string;
  transactions: {
    id: string;
    status: string;
    name: string;
    accountNumber: string;
    email: string;
    type: "credit" | "debit";
  }[];
};
export default function TransactBody() {
  const { error, loading, data } = useGetTransactions();
  useEffect(() => {
    if (error) {
      console.log(error);
    } else {
      // data?.Transactions?.sort(dateComparison);
      console.log(data);
    }
  }, [data]);
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
                title="All Payments"
                list_items={["All Payments", "Credit", "Debit"]}
              />
            </div>
            <div>
              <DropDown
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
            data?.Transactions?.map(
              (transaction: transactionTypes, index: number) => (
                <div key={transaction.id} className={` my-5 ${styles.transact_item}`}>
                  <section>
                    <h3 className={`font-semibold`}>{dateFormatter(transaction.date)}</h3>
                  </section>
                  <div className={`${styles.transact_item_inner}`}>
                    <table className={`${styles.transact_card}`}>
                      <thead></thead>
                      <tbody>
                        {transaction?.transactions?.map((item, index) => (
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
