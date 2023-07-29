import Auth from "./components/Auth";
import Banking from "./components/Banking";
import AccountStatus from "./components/AccountStatus";
import Balance from "./components/Balance";
import TransactionCount from "./components/TransactionCount";

const App = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <Auth />
      <Balance />
      <TransactionCount style={{ padding: "12rem" }} />
      <Banking />
      <AccountStatus />
    </div>
  );
};

export default App;
