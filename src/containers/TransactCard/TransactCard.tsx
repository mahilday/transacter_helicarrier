import React from "react";
import Profile from "../../components/Profile/Profile";
import styles from "./TransactCard.module.css";

interface TransactCardProps {
  details: {
    id: string;
    status: string;
    name: string;
    accountNumber: string;
    email: string;
    type: "credit" | "debit";
  };
}

export default function TransactCard({ details }: TransactCardProps) {
  return (
    <tr className={`h-16 ${styles.transact_row}`}>
      <td colSpan={1}>
        <Profile name={details?.name} />
      </td>
      <td >
        {details.name}
      </td>
      <td>{details.accountNumber}</td>
      <td>
        <h3>{details.email}</h3>
      </td>
      <td className={`font-medium ${styles[details.status.toLowerCase()]}`}>{details.status}</td>
      
      <td className={`font-medium ${styles[details.type.toLowerCase()]}`}>{details.type}</td>
    </tr>
  );
}
