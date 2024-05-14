import React, { useState } from "react";
import HistoryBar, { transaction } from "./HistoryBar";
import { Button, Divider, Input, Text } from "@chakra-ui/react";
import { amount } from "../context";
import { useContext } from "react";

const TransactionBar = () => {
  const [transactions, setTransatcions] = useState<transaction[]>([]);
  const [descriptionInput, setDescriptionInput] = useState("");
  const [amountInput, setAmountInput] = useState(0);
  const { balance, setBalance } = useContext(amount);
  return (
    <>
      <HistoryBar transactions={transactions}></HistoryBar>
      <Divider />
      <Text>Add new transaction</Text>
      <Text>Description</Text>
      <Input
        bgColor={"dimgray"}
        onChange={(event) => {
          setDescriptionInput(event.target.value);
        }}
      ></Input>
      <Text>Amount</Text>
      <Input
        bgColor={"dimgray"}
        type="number"
        onChange={(event) => {
          setAmountInput(parseInt(event.target.value));
        }}
      ></Input>
      <Button
        width={"100%"}
        bgColor={"purple"}
        onClick={() => {
          setTransatcions([
            ...transactions,
            {
              description: descriptionInput,
              amount: amountInput,
            },
          ]);
          amountInput > 0
            ? setBalance({
                income: balance.income + amountInput,
                expense: balance.expense,
              })
            : setBalance({
                income: balance.income,
                expense: balance.expense + amountInput,
              });
        }}
      >
        Submit
      </Button>
    </>
  );
};

export default TransactionBar;
