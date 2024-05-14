import { useState } from "react";
import "./App.css";
import { Box, Text, VStack } from "@chakra-ui/react";
import BalanceBar from "./components/BalanceBar";
import { amount } from "./context";
import TransactionBar from "./components/TransactionBar";
function App() {
  const [balance, setBalance] = useState({
    income: 0,
    expense: 0,
  });
  return (
    <>
      <amount.Provider value={{ balance, setBalance }}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100vh"}
        >
          <VStack>
            <Text fontSize="4xl">Expense tracker</Text>
            <BalanceBar />

            <TransactionBar />
          </VStack>
        </Box>
      </amount.Provider>
    </>
  );
}

export default App;
