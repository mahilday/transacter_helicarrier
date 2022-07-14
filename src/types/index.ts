import { SetStateAction } from "react";

export type transactionTypes = {
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

export interface ITransaction {
    transactions: transactionTypes[];
    setTransactions:any;
    transactSearchResults: transactionTypes[];
    setTransactSearchResults:any;
    transactFilters: {type: string, status: string};
    setTransactFilters:any;
}