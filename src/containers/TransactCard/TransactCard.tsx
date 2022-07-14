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
      <td className={`px-4`} colSpan={1}>
        <Profile name={details?.name} />
      </td>
      <td colSpan={1} className={`px-3`}>
        <h3>{details.name}</h3>
      </td>
      <td className={`px-4 hidden sm:hidden md:table-cell` } colSpan={1}>
        <h3>{details.accountNumber}</h3>
      </td>
      <td colSpan={1} className={`hidden sm:hidden lg:table-cell md:hidden`}>
        <h3 className={`px-2`}>{details.email}</h3>
      </td>
      <td
        colSpan={1}
        className={`font-medium px-5 ${styles[details.status.toLowerCase()]}`}
      >
        {details.status}
      </td>

      <td
        colSpan={1}
        className={`font-medium hidden sm:inline  ${
          styles[details.type.toLowerCase()]
        }`}
      >
        <h3 className={`px-4`}>{details.type}</h3>
      </td>
    </tr>
  );
}
