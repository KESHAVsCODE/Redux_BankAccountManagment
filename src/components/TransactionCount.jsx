import { useSelector } from "react-redux";

const TransactionCount = () => {
  console.log("TransactionCount");
  const transactionCount = useSelector((state) => state.transactionCount);
  return <div>TransactionCount:{transactionCount}</div>;
};

export default TransactionCount;
