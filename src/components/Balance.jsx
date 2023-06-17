import React from "react";
import { useSelector } from "react-redux";

const Balance = () => {
  const state = useSelector((stateStore) => {
    return stateStore;
  });
  return <h1>Balance: ${state}</h1>;
};

export default Balance;
