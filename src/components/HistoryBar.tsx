import { Box, HStack, Text } from "@chakra-ui/react";

export interface transaction {
  description: string;
  amount: number;
}
const HistoryBar = ({ transactions }: { transactions: transaction[] }) => {
  return (
    <>
      <Text fontSize="2xl">History</Text>
      {transactions.map((transaction) => (
        <Box
          width="100%"
          bgColor={"dimgray"}
          padding={"10px"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Text>{transaction.description}</Text>
          <Text textColor={transaction.amount > 0 ? "lightgreen" : "red"}>
            {transaction.amount}
          </Text>
        </Box>
      ))}
    </>
  );
};

export default HistoryBar;
