import { Box, Divider, HStack, Text } from "@chakra-ui/react";

import { useContext } from "react";
import { amount } from "../context";

const BalanceBar = () => {
  const { balance, setBalance } = useContext(amount);
  return (
    <Box width="100%" textAlign={"center"}>
      <Text fontSize="3xl">
        your balance:${balance.income + balance.expense}
      </Text>
      <Box bgColor={"dimgray"} padding={"10px"} width="100%">
        <HStack height={"50px"}>
          <Box>
            <Text fontSize="2xl">your expense:</Text>
            <Text fontSize="xl" textColor={"red"}>
              ${balance.expense}
            </Text>
          </Box>
          <Divider orientation="vertical" colorScheme="lightred" size="20px" />
          <Box>
            <Text fontSize="2xl">your income:</Text>
            <Text fontSize="xl" textColor={"lightgreen"}>
              ${balance.income}
            </Text>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};

export default BalanceBar;
