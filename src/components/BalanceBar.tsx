import { Box, Text } from "@chakra-ui/react";
import { ThemeContext } from "@emotion/react";
import React, { useContext } from "react";
import { amount } from "../context";

const BalanceBar = () => {
  const balance = useContext(amount);
  return (
    <Box>
      <Text>your balance:{balance.balance}</Text>
      <Text>your expense:{balance.expense}</Text>
      <Text>your income:{balance.income}</Text>
    </Box>
  );
};

export default BalanceBar;
