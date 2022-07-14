import React, { useState, createContext } from "react";
import { transactionTypes, ITransaction } from "../types";

interface Props {
    children: React.ReactNode;
  } 

export const TransactionContext = createContext<any | undefined>(undefined);


export const TransactionContextProvider: React.FC<Props> = ({ children }) => {
	const [transactions, setTransactions] = useState<transactionTypes[]>([]);
    const [transactSearchResults, setTransactSearchResults] = useState<transactionTypes[]>([])
    const [transactFilters, setTransactFilters] = useState<any>({
        type: "All Payments",
        status: "All Statuses"
    })

    const transactVals:ITransaction = {
        transactions,
        setTransactions,
        transactSearchResults,
        setTransactSearchResults,
        transactFilters,
        setTransactFilters,
    }

	return <TransactionContext.Provider value={transactVals}>{children}</TransactionContext.Provider>;
};