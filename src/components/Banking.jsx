import { Input, Button, Flex } from "@mantine/core";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Banking = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  //Action Creator
  const handleDepositClick = () => {
    const action = {
      type: "DEPOSIT",
      payload: Number(inputValue),
    };
    dispatch(action);
  };
  const handleWithdrawClick = () => {
    const action = {
      type: "WITHDRAW",
      payload: Number(inputValue),
    };
    dispatch(action);
  };
  const handleCollectInterestClick = () => {
    const action = {
      type: "COLLECT_INTEREST",
    };
    dispatch(action);
  };
  const handleDeleteAccountClick = () => {
    const action = {
      type: "DELETE_ACCOUNT",
    };
    dispatch(action);
  };

  return (
    <div>
      <div>
        <Input
          value={inputValue}
          type="number"
          onChange={(event) => setInputValue(event.target.value)}
          style={{ width: "50%" }}
        />
      </div>
      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
        style={{ marginTop: "20px" }}
      >
        <Button
          id="DEPOSIT"
          variant="gradient"
          gradient={{ from: "teal", to: "lime", deg: 105 }}
          onClick={handleDepositClick}
        >
          Deposit
        </Button>
        <Button
          id="WITHDRAW"
          variant="gradient"
          gradient={{ from: "teal", to: "blue", deg: 60 }}
          onClick={handleWithdrawClick}
        >
          Withdraw
        </Button>
        <Button
          id="COLLECT_INTEREST"
          variant="gradient"
          gradient={{ from: "orange", to: "red" }}
          onClick={handleCollectInterestClick}
        >
          Collect Interest
        </Button>
        <Button
          id="DELETE_ACCOUNT"
          variant="gradient"
          gradient={{ from: "#ed6ea0", to: "#ec8c69", deg: 35 }}
          onClick={handleDeleteAccountClick}
        >
          Delete Account
        </Button>
      </Flex>
    </div>
  );
};

export default Banking;
