import { gql, useQuery } from "@apollo/client";
export const useGetTransactions = () => {
  const GET_TRANSACTIONS = gql`
    query {
      Transactions {
        id
        date
        transactions {
          id
          status
          name
          email
          type
          accountNumber
        }
      }
    }
  `;
  const { error, loading, data } = useQuery(GET_TRANSACTIONS);
  return {
    error,
    loading,
    data,
  };
};
