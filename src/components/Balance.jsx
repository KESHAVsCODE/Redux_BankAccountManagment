import { useSelector } from "react-redux";

const Balance = () => {
  const state = useSelector((stateStore) => {
    return stateStore.balance;
  });
  console.log("Balance");
  return <h1>Balance: ${state}</h1>;
};

export default Balance;
