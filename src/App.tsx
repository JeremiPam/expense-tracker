import { createContext, useContext, useState } from "react";
import "./App.css";
import { Box, Text, Textarea, VStack } from "@chakra-ui/react";
import BalanceBar from "./components/BalanceBar";
import { amount } from "./context";
function App() {
  const [balance, setBalance] = useState({
    balance: 40,
    income: 0,
    expense: 0,
  });
  return (
    <>
      <amount.Provider value={balance}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={"100vh"}
        >
          <VStack>
            <Text fontSize="4xl">Expense tracker</Text>
            <BalanceBar />
          </VStack>
        </Box>
      </amount.Provider>
    </>
  );
}

export default App;
