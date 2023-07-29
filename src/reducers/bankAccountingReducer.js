const INITIAL_STATE = { balance: 0, transactionCount: 0 };
const bankAccountingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return { ...state, balance: state.balance + action.payload };
    case "WITHDRAW":
      return { ...state, balance: state.balance - action.payload };
    case "COLLECT_INTEREST":
      return { ...state, balance: state.balance * 1.03 };
    case "DELETE_ACCOUNT":
      return { balance: 0, transactionCount: 0 };
    default:
      return state;
  }
};

export default bankAccountingReducer;
