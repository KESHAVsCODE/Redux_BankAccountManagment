const INITIAL_STATE = 0;
const bankAccountingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.payload;
    case "WITHDRAW":
      return state - action.payload;
    case "COLLECT_INTEREST":
      return state * 1.03;
    case "DELETE_ACCOUNT":
      return 0;
    default:
      return state;
  }
};

export default bankAccountingReducer;
