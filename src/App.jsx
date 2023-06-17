import React from "react";
import Auth from "./components/Auth";
import Banking from "./components/Banking";
import AccountStatus from "./components/AccountStatus";
import Balance from "./components/Balance";

const App = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <Auth />
      <Balance />
      <Banking />
      <AccountStatus />
    </div>
  );
};

export default App;
